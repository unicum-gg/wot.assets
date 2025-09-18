import { o as e, m as i, n as r, e as o, r as a, R as n, j as s, p as t, q as l } from '../../../chunks/vendor.js';
import {
    i as c,
    c as d,
    m as h,
    a as _,
    b as m,
    r as u,
    u as g,
    d as b,
    e as p,
    f as v,
    g as f,
    t as N,
    B as x,
    s as y,
    h as T,
    F as w,
    j,
    k as S,
    l as P,
    n as M,
    o as V,
    M as R,
    U as I,
} from '../../../chunks/lib.js';
var C = ((e) => (
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
    ))(C || {}),
    D = ((e) => (
        (e.LightTank = 'lightTank'),
        (e.ATSPG = 'AT-SPG'),
        (e.MediumTank = 'mediumTank'),
        (e.SPG = 'SPG'),
        (e.HeavyTank = 'heavyTank'),
        e
    ))(D || {}),
    k = ((e) => (
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
    ))(k || {}),
    B = ((e) => ((e.Credits = 'credits'), (e.Gold = 'gold'), e))(B || {});
const A = (e) => {
    return 'object' == typeof e && null !== e && 'type' in e && ((i = e.type), Object.values(D).includes(i));
    var i;
};
var O = ((e) => ((e.None = 'None'), (e.Unresearched = 'Unresearched'), (e.Researched = 'Researched'), e))(O || {});
const E = ['Researched', 'Unresearched', 'None'];
function L({ state: e = 'Unresearched' }) {
    return 'Unresearched' !== e;
}
const H = {
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
    z = ({ id: e = '-1', level: i = 1, priceCurrency: r, ...o }, a) => {
        const n = {
            id: isNaN(a) ? Number(e) : a,
            name: '',
            techName: '',
            type: D.LightTank,
            tier: i,
            isPremium: !1,
            isHighlighted: !1,
            state: k.Unresearched,
            childIds: [],
            parentIds: [],
            childBranchOrders: [],
            priceCurrency: r,
            ...H,
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
                isRented: s = !1,
            }) =>
                s
                    ? o
                        ? k.RentedRecoverable
                        : k.Rented
                    : e
                      ? k.Owned
                      : n
                        ? k.ReadyForPurchase
                        : i
                          ? k.ReadyForResearch
                          : a
                            ? k.ReadyForTradeIn
                            : o
                              ? k.ReadyForRecovery
                              : r
                                ? k.Researched
                                : k.Unresearched)(n)),
            n
        );
    };
function F(e) {
    return JSON.parse(e);
}
const [W, X] = c()(
        ({ observableModel: o, cleanup: a }) => {
            const n = {
                    ...o.primitives(['firstHighlightedLevel', 'collectableVehiclesAvailable', 'showWelcomeAnimation']),
                    selectedNation: e.box(C.Czechoslovakia),
                    techTreeNodes: e.box({}),
                    premiumNodesByTier: e.box({}),
                    maxCombinedTier: e.box(0),
                },
                s = d.shallow(() => h(o.array('availableNations').get(), _));
            return (
                a(
                    i(() => {
                        const e = o.dict('techTreeNodes'),
                            i = o.dict('nodeOverrides');
                        let a = 0;
                        const s = {},
                            t = {};
                        (e.entries().forEach(([e, r]) => {
                            const o = F(r.get()),
                                n = null == i ? void 0 : i.get(e),
                                l = n ? F(n) : {},
                                c = z(Object.assign(o, l), Number(e));
                            ((a = Math.max(a, c.tier)),
                                c.isPremium ? ((t[c.tier] = t[c.tier] || []), t[c.tier].push(c)) : (s[e] = c));
                        }),
                            Object.values(t).forEach((e) => e.sort((e, i) => e.orderPriority - i.orderPriority)),
                            r(() => {
                                (n.selectedNation.set(o.primitives(['selectedNation']).selectedNation.get()),
                                    n.techTreeNodes.set(s),
                                    n.premiumNodesByTier.set(t),
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
    U = {
        increaseAmount: m('tabs'),
        decreaseAmount: m('tabs'),
        'vehicle-hover': m('highlight'),
        'vehicle-click': m('yes1'),
        'nation-hover': m('highlightx'),
        'nation-click': m('tabs'),
        'scroll-hover': m('highlight'),
        'scroll-click': m('play'),
        'tier-paging-hover': m('highlight'),
        'tier-paging-click': m('arrow'),
        'vehicle-right-click': m('tabb'),
        'collector-vehicles-hover': m('highlight'),
        'collector-vehicles-click': m('play'),
        'premium-vehicles-mouse-over': m('researches_premium_panel_slide_in'),
        'premium-vehicles-mouse-out': m('researches_premium_panel_slide_out'),
        'vehicle-highlighted-tier-appear': m('gui_tech_tree_top_tier_anim'),
    },
    $ = (e, i, r, o) => {
        const a = e.nodeMap[i.parentIds[0]],
            n = e.nodeMap[r.parentIds[0]],
            s = !!a && a.tier === i.tier,
            t = !!n && n.tier === r.tier;
        return (Number(s) - Number(t)) * (o ? 1 : -1);
    };
function G(e, i) {
    return (r, o) => (r[i] < o[i] ? ('desc' === e ? 1 : -1) : r[i] > o[i] ? ('desc' === e ? -1 : 1) : 0);
}
const Y = { asc: G('asc', 'tier'), desc: G('desc', 'tier') },
    q = !0;
function K(e, i, r) {
    const o = 'asc' === i ? q : !q;
    (e.nodes.sort((r, a) => Y[i](r, a) + $(e, r, a, o) / 10),
        e.nodes.forEach((e, i, o) => {
            r(e, i, o);
        }));
}
function J(e) {
    const i = new Set();
    return (
        e.rootNodes.forEach((r) => {
            ((r.isMainLine = !0), i.add(r.position[1]));
            Q(r, e).forEach((e) => {
                e.isMainLine = !0;
            });
        }),
        Array.from(i)
    );
}
function Q(e, i) {
    const r = e.directChildId && i.nodeMap[e.directChildId];
    return r ? [r, ...Q(r, i)] : [];
}
function Z(e, i) {
    const r = E.indexOf(e),
        o = E.indexOf(i);
    return E[Math.min(r, o)];
}
function ee(e, i) {
    if (!e) {
        if (!i) throw (console.error('Cannot combine zero nodes'), new Error('Cannot combine zero nodes'));
        return i;
    }
    if (!i) return e;
    const r = [e, i].filter(A);
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
            { up: Z(o.up, a.up), right: Z(o.right, a.right), down: Z(o.down, a.down), left: Z(o.left, a.left) }),
    };
}
function ie(e, i) {
    return e ? (i ? O.Researched : O.Unresearched) : O.None;
}
function re(e, i) {
    return e.reduce((e, r) => {
        const o = i.nodeMap[r];
        return e + 1 + (o.subTreeNodesAbove ?? 0) + (o.subTreeNodesBelow ?? 0);
    }, 0);
}
function oe(e, i, r, o, a) {
    const n = r[1] - i[1],
        s = r[0] - i[0];
    if (0 === n && 0 === s) return void console.warn('Skipping line between', i, 'and', r);
    const t = Math.abs(n) + 1,
        l = Math.abs(s) + 1,
        c = Math.min(i[1], r[1]),
        d = Math.max(i[1], r[1]),
        h = Math.min(i[0], r[0]),
        _ = 0 === n,
        m = _ ? l : t;
    if (_ || 0 === s) {
        for (let i = 0; i < m; i++) {
            const r = _ ? [h + i, d] : [h, c + i],
                a = i !== m - 1,
                n = ie(0 !== i, o),
                s = ie(a, o),
                t = {
                    type: 'line',
                    lineSegments: _
                        ? { left: n, right: s, up: O.None, down: O.None }
                        : { left: O.None, right: O.None, up: n, down: s },
                    position: r,
                },
                l = r.join('x'),
                u = e.gridPositionMap[l],
                g = u ? ee(t, u) : t;
            (e.gridItems.push(g), (e.gridPositionMap[l] = g));
        }
        return;
    }
    const u = a ? [r[0], i[1]] : [i[0], r[1]];
    (oe(e, [i[0], i[1]], u, o, a), oe(e, u, [r[0], r[1]], o, a));
}
function ae(e) {
    let i = 0;
    function r(r, o) {
        const a = A(r) ? r.subTreeNodesBelow : 0;
        ((i = Math.max(i, o[1] + a)), (r.position = o));
        const n = r.position[0] + 'x' + r.position[1];
        ((e.gridPositionMap[n] = r), e.gridItems.push(r));
        const s = r.parentIds[0],
            t = [],
            l = s ? e.nodeMap[s] : void 0;
        (l && t.push(l),
            (r.secondaryParentIds ?? []).forEach((i) => {
                const r = e.nodeMap[i];
                r && t.push(r);
            }),
            t.forEach((i) => {
                var o;
                if (!i.position || !r.position)
                    return void console.error('parent.position or nodeOrLine.position is undefined', i, r);
                const a = L(i),
                    n = L(r),
                    s = a && n,
                    t = Boolean(null == (o = i.secondaryChildIds) ? void 0 : o.includes(r.id));
                oe(e, [i.position[0], i.position[1]], [r.position[0], r.position[1]], s, t);
            }));
    }
    K(e, 'asc', (o) => {
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
                    s = a.childIdsAbove.slice(0, i).reduce((i, r) => {
                        const o = e.nodeMap[r];
                        return i + 1 + o.subTreeNodesBelow + o.subTreeNodesAbove;
                    }, 0),
                    t = e.nodeMap[a.directChildId],
                    l = 1 + s + o.subTreeNodesBelow + t.subTreeNodesAbove;
                r(o, [a.position[0] + n, a.position[1] - l]);
            } else if (a.childIdsBelow.includes(o.id)) {
                const i = a.childIdsBelow.indexOf(o.id),
                    s = a.childIdsBelow.slice(0, i).reduce((i, r) => {
                        const o = e.nodeMap[r];
                        return i + 1 + o.subTreeNodesBelow + o.subTreeNodesAbove;
                    }, 0),
                    t = e.nodeMap[a.directChildId],
                    l = 1 + s + o.subTreeNodesAbove + t.subTreeNodesBelow;
                r(o, [a.position[0] + n, a.position[1] + l]);
            } else;
        else r(o, [a.position[0] + n, a.position[1]]);
    });
}
function ne(e) {
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
        s = Array.from({ length: n }, (e, i) => [o + 3 + i, a - 2]),
        t = o + 3,
        l = [...s, ...Array.from({ length: t }, (e, i) => [o + 2 - i, a - 1])];
    if (
        !l.every((i) => {
            return (
                !e.gridPositionMap[i.join('x')] ||
                ((r = e.gridPositionMap[i.join('x')]),
                (null == (o = r.lineSegments) ? void 0 : o.up) !== O.None &&
                    (null == (a = r.lineSegments) ? void 0 : a.down) !== O.None &&
                    (null == (n = r.lineSegments) ? void 0 : n.left) === O.None &&
                    (null == (s = r.lineSegments) ? void 0 : s.right) === O.None)
            );
            var r, o, a, n, s;
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
                s = [r, o + n].join('x');
            if (a) {
                const i = A(a) ? a.id : void 0;
                (i && (e.nodeMap[i].position = [r, o + n]), (a.position = [r, o + n]), (e.gridPositionMap[s] = a));
            }
        }
    });
}
function se(e) {
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
            lineSegments: { up: O.None, right: O.None, down: O.None, left: O.None },
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
            K(e, 'desc', (i) => {
                const r = [...i.childIds].sort((i, r) => e.nodeMap[i].branchingOrder - e.nodeMap[r].branchingOrder);
                let o,
                    a = 1 / 0,
                    n = -1;
                for (let c = 0; c < r.length; c++) {
                    const i = r[c],
                        s = e.nodeMap[i];
                    Math.abs(s.branchingOrder) < Math.abs(a) && ((a = s.branchingOrder), (n = c), (o = r[c]));
                }
                ((i.directChildId = o),
                    (i.childIdsAbove = r.slice(0, n).reverse()),
                    (i.childIdsBelow = r.slice(n + 1)));
                const s = i.directChildId ? e.nodeMap[i.directChildId] : null,
                    t = (null == s ? void 0 : s.subTreeNodesAbove) ?? 0,
                    l = (null == s ? void 0 : s.subTreeNodesBelow) ?? 0;
                ((i.subTreeNodesAbove = t + re(i.childIdsAbove, e)),
                    (i.subTreeNodesBelow = l + re(i.childIdsBelow, e)));
            });
        })(i),
        ae(i),
        ne(i),
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
    return { maxColumnIndex: o, mainLineRowIndexes: J(i), rows: r };
}
const te = 'ScrollArea_container_3fed0135',
    le = 'ScrollArea_overflow_ddc994b6',
    ce = 'ScrollArea_content_cb204ae5',
    de = 'ScrollArea_content__dragging_7fce95db',
    he = 'ScrollArea_draggable_3a0e372e',
    _e = 'ScrollArea_draggable__dragging_a4e4410f';
var me = ((e) => (
    (e[(e.SetOptions = 0)] = 'SetOptions'),
    (e[(e.SetSizes = 1)] = 'SetSizes'),
    (e[(e.SetIsMouseDown = 2)] = 'SetIsMouseDown'),
    (e[(e.SetIsDragging = 3)] = 'SetIsDragging'),
    (e[(e.SetThumbDragging = 4)] = 'SetThumbDragging'),
    (e[(e.MoveScrollPosition = 5)] = 'MoveScrollPosition'),
    e
))(me || {});
const ue = (e) => {
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
    ge = (e) => {
        const {
                isMouseDown: i,
                isDragging: r,
                thumbDragging: a,
                isHorizontalBarVisible: n,
                isVerticalBarVisible: s,
            } = e,
            t = i && r,
            l = t || null !== a,
            c = o((n || s) && he, l && _e);
        return { ...e, isDragging: t, isAnyDragging: l, draggableClassName: c };
    };
function be(e, i) {
    if (0 === i.type) return ue({ ...e, ...i.payload });
    if (1 === i.type) {
        const { containerWidth: r, containerHeight: o, contentWidth: a, contentHeight: n } = i.payload,
            s = a > r,
            t = n > o;
        return ue(ge({ ...e, ...i.payload, isHorizontalBarVisible: s, isVerticalBarVisible: t }));
    }
    if (2 === i.type) {
        const r = i.payload,
            o = { ...e, isMouseDown: r };
        return (r || ((o.isDragging = !1), (o.thumbDragging = null)), o);
    }
    if (3 === i.type) return ge({ ...e, isDragging: i.payload });
    if (4 === i.type) return ge({ ...e, thumbDragging: i.payload });
    if (5 === i.type) {
        const { offsetX: r, offsetY: o, byPassMaxDragOffsetDelta: a } = i.payload,
            { maxDragOffsetDelta: n } = e;
        if (!a && (Math.abs(r) > n || Math.abs(o) > n)) return e;
        const s = Math.max(0, Math.min(e.contentWidth - e.containerWidth, e.horizontalScrollPosition + r)),
            t = Math.max(0, Math.min(e.contentHeight - e.containerHeight, e.verticalScrollPosition + o));
        return { ...e, horizontalScrollPosition: s, verticalScrollPosition: t };
    }
    return e;
}
const pe = () => ({
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
    ve = a.createContext(void 0),
    fe = () => {
        const e = a.useContext(ve);
        if (!e) throw new Error('useScrollAreaContext must be used within a ScrollAreaProvider');
        return e;
    },
    Ne = ({ children: e, maxDragOffsetDelta: i = 200, initialScrollRight: r = !1, initialVerticalCenter: o = !1 }) => {
        const [t, l] = n.useReducer(be, void 0, pe);
        a.useEffect(() => {
            l({
                type: me.SetOptions,
                payload: { maxDragOffsetDelta: i, initialScrollRight: r, initialVerticalCenter: o },
            });
        }, [i, r, o]);
        const c = {
            setSizes: a.useCallback((e) => {
                l({ type: me.SetSizes, payload: e });
            }, []),
            setIsMouseDown: a.useCallback((e) => {
                l({ type: me.SetIsMouseDown, payload: e });
            }, []),
            setIsDragging: a.useCallback((e) => {
                l({ type: me.SetIsDragging, payload: e });
            }, []),
            setIsVerticalThumbDragging: a.useCallback((e) => {
                l({ type: me.SetThumbDragging, payload: e ? 'vertical' : null });
            }, []),
            setIsHorizontalThumbDragging: a.useCallback((e) => {
                l({ type: me.SetThumbDragging, payload: e ? 'horizontal' : null });
            }, []),
            moveScrollPosition: a.useCallback((e = 0, i = 0, r = !1) => {
                l({ type: me.MoveScrollPosition, payload: { offsetX: e, offsetY: i, byPassMaxDragOffsetDelta: r } });
            }, []),
        };
        return s.jsx(ve.Provider, { value: { ...t, ...c }, children: e });
    },
    xe = 'Nations_db5e6f50',
    ye = 'Nations_nation_c0adf454',
    Te = 'Nations_nation__selected_e9b0b5e7',
    we = 'Nations_nation_flag_6c91fa37',
    je = 'Nations_nation_glow_3d65e334',
    Se = u.resolve('strings'),
    Pe = u.resolve('images'),
    Me = ({ nation: e, onSelect: i, isSelected: r }) => {
        const o = g().play,
            a = b({ body: Se.readOrEmpty(`tech_tree.nationTooltip.${e}`) });
        return s.jsxs('div', {
            className: t(ye, r && Te),
            'data-test-id': 'nation-' + e,
            ...a,
            onMouseEnter: (e) => {
                (a.onMouseEnter(), o('nation-hover', { target: Me.name, original: e }));
            },
            onClick: (r) => {
                (o('nation-click', { target: Me.name, original: r }), i(e), a.onClick());
            },
            children: [
                s.jsx('img', { className: we, src: Pe.readOrEmpty(`tech_tree.nations.${e}`) }),
                s.jsx('div', { className: je }),
            ],
        });
    };
function Ve(e) {
    const { className: i, onSelectNation: r, availableNations: o, selectedNation: a, children: n, ...l } = e;
    return s.jsxs('div', {
        className: t(xe, i),
        ...l,
        children: [o.map((e) => s.jsx(Me, { nation: e, isSelected: e === a, onSelect: r }, e)), n],
    });
}
const Re = {
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
    Ie = { up: Re.segment__up, right: Re.segment__right, down: Re.segment__down, left: Re.segment__left },
    Ce = {
        up: Re.segment__bendUp,
        right: Re.segment__bendRight,
        down: Re.segment__bendDown,
        left: Re.segment__bendLeft,
    },
    De = { [O.Unresearched]: void 0, [O.Researched]: Re.segment__researched },
    ke = (e, i, r, o) => o.includes(e) && o.includes(i) && r[e] === r[i],
    Be = (e) => {
        let i = Object.keys(e).filter((i) => e[i] !== O.None);
        const r = [];
        if (
            (((e, i) => i.includes('left') && i.includes('right') && e.left === e.right)(e, i) &&
                ((i = i.filter((e) => 'left' !== e && 'right' !== e)),
                r.push(
                    s.jsx('div', { className: o(Re.segment, Re.segment__horizontal, De[e.left]) }, 'bend-horizontal'),
                )),
            ((e, i) => i.includes('up') && i.includes('down') && e.up === e.down)(e, i) &&
                ((i = i.filter((e) => 'up' !== e && 'down' !== e)),
                r.push(s.jsx('div', { className: o(Re.segment, Re.segment__vertical, De[e.up]) }, 'bend-vertical'))),
            ((e, i) =>
                2 === i.length &&
                !!(
                    ke('up', 'right', e, i) ||
                    ke('up', 'left', e, i) ||
                    ke('down', 'right', e, i) ||
                    ke('down', 'left', e, i)
                ))(e, i))
        )
            return (
                r.push(
                    s.jsx(
                        'div',
                        { className: o(Re.segment, Re.segment__bend, De[e[i[0]]], ...i.map((e) => Ce[e])) },
                        'bend-' + i.join('-'),
                    ),
                ),
                (i = []),
                r
            );
        for (const a of i) r.push(s.jsx('div', { className: o(Re.segment, Ie[a], De[e[a]]) }, a));
        return r;
    },
    Ae = ({ lineSegments: e, isMainLine: i = !1, className: r, ...a }) => {
        if (!e) return null;
        const n = Be(e);
        return s.jsx('div', { className: o(Re.base, r, i && Re.base__mainLine), ...a, children: n });
    },
    Oe = { base: 'Discount_744a9b2a', base__xp: 'Discount_base__xp_621a6178' };
function Ee({ type: e, className: i }) {
    return s.jsx('div', { className: o(Oe.base, i, 'xp' === e && Oe.base__xp) });
}
const Le = {
        base: 'Price_3f023563',
        amountWrapper: 'Price_amountWrapper_2f9a18d1',
        base__amountHidden: 'Price_base__amountHidden_29f8d762',
        vehicle: 'Price_vehicle_29f8d762',
        base__credits: 'Price_base__credits_29f8d762',
        base__hasEnough: 'Price_base__hasEnough_29f8d762',
        base__gold: 'Price_base__gold_29f8d762',
        base__xp: 'Price_base__xp_29f8d762',
        base__combatXp: 'Price_base__combatXp_29f8d762',
        amount: 'Price_amount_8c520db0',
        discount: 'Price_discount_5f22dc90',
        icon: 'Price_icon_83ab23b8',
    },
    He = { [B.Credits]: Le.base__credits, [B.Gold]: Le.base__gold, xp: Le.base__xp, combatXp: Le.base__combatXp },
    ze = u.resolve('intl');
function Fe({
    type: e,
    amount: i,
    isDiscountedXp: r = !1,
    isDiscountedPrice: a = !1,
    isAmountHidden: n,
    hasEnough: t,
    className: l,
}) {
    const c = ((e, i, r) => ('xp' === r && e ? 'xp' : i ? 'price' : void 0))(r, a, e);
    return s.jsxs('div', {
        className: o(
            Le.base,
            l,
            He[e],
            (r || a) && Le.base__discounted,
            n && Le.base__amountHidden,
            t && Le.base__hasEnough,
        ),
        children: [
            s.jsxs('div', {
                className: Le.amountWrapper,
                children: [
                    s.jsx('div', { className: Le.amount, children: ze.formatNumber('integral', i) }),
                    s.jsx('div', { className: Le.icon }),
                ],
            }),
            c && s.jsx(Ee, { type: c, className: Le.discount }),
        ],
    });
}
const We = 'TopTierReleaseHighlight_6eda7632',
    Xe = 'TopTierReleaseHighlight_fire_ad0fa0b',
    Ue = 'TopTierReleaseHighlight_fire_mask_fa609d6',
    $e = 'TopTierReleaseHighlight_fire__1_d14cf37e',
    Ge = 'TopTierReleaseHighlight_fire__2_1c7532af',
    Ye = 'TopTierReleaseHighlight_particles_e8af8c7b',
    qe = 'TopTierReleaseHighlight_particles_mask_3d3d8c03',
    Ke = 'TopTierReleaseHighlight_particles__1_9f7d6b1a',
    Je = 'TopTierReleaseHighlight_particles__2_7f499670',
    Qe = a.memo(function ({ className: e, animationDelay: i }) {
        return s.jsxs('div', {
            className: o(We, e),
            style: { '--animationDelay': i },
            children: [
                s.jsxs('div', {
                    className: Ue,
                    children: [s.jsx('div', { className: o(Xe, $e) }), s.jsx('div', { className: o(Xe, Ge) })],
                }),
                s.jsxs('div', {
                    className: qe,
                    children: [s.jsx('div', { className: o(Ye, Ke) }), s.jsx('div', { className: o(Ye, Je) })],
                }),
            ],
        });
    }),
    Ze = 'TopTierSoftHighlight_4fc28aec',
    ei = a.memo(function ({ className: e, animationDelay: i }) {
        return s.jsx('div', { className: o(Ze, e), style: { '--animationDelay': i } });
    }),
    ii = {
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
    ri = u.resolve('strings'),
    oi = u.resolve('images'),
    ai = {
        [k.Unresearched]: ii.base__unresearched,
        [k.ReadyForResearch]: ii.base__readyForResearch,
        [k.Researched]: ii.base__researched,
        [k.ReadyForPurchase]: ii.base__readyForPurchase,
        [k.Owned]: ii.base__owned,
        [k.ReadyForTradeIn]: ii.base__readyForTradeIn,
        [k.ReadyForRecovery]: ii.base__readyForRecovery,
        [k.RentedRecoverable]: o(ii.base__readyForRecovery, ii.base__rented),
        [k.Rented]: ii.base__rented,
    },
    ni = {
        [D.ATSPG]: ii.base__atSpg,
        [D.HeavyTank]: ii.base__heavyTank,
        [D.LightTank]: ii.base__lightTank,
        [D.MediumTank]: ii.base__mediumTank,
        [D.SPG]: ii.base__spg,
    },
    si = [k.Unresearched, k.ReadyForResearch, k.ReadyForPurchase],
    ti = a.memo(function e(i) {
        const {
                name: r,
                techName: n,
                id: t,
                state: l = k.Unresearched,
                hasEnoughXp: c,
                isDiscountedXp: d,
                requiredXp: h,
                hasEnoughCurrency: _,
                isDiscountedPrice: m,
                priceCurrency: u,
                priceAmount: y,
                earnedXp: T,
                isPremium: w,
                isElite: j,
                isSelected: S,
                isTopTier: P,
                isHighlighted: M,
                readyForComparison: V,
                onAddToCompare: R,
                isMainLine: I = !1,
                style: C,
                className: D,
                tier: B,
                type: A,
                showWelcomeAnimation: O,
                animationDelay: E,
            } = i,
            { controls: L } = X(),
            H = g().play,
            z = p({ args: a.useMemo(() => ({ vehCD: t, tooltipId: 'techtreeVehicle' }), [t]) }),
            F = b({ body: ri.readOrEmpty('tech_tree.comparisonTooltip') }),
            W = p({ args: a.useMemo(() => ({ vehCD: t, tooltipId: 'tradeIn' }), [t]) }),
            U = !w && (l === k.Unresearched || l === k.ReadyForResearch),
            $ = !w && l === k.Unresearched,
            G = l === k.Researched || l === k.ReadyForPurchase || l === k.ReadyForTradeIn || l === k.Rented,
            Y = !w && l === k.Researched,
            q = T > 0 && !j,
            K = (l === k.ReadyForResearch && !c) || (l === k.ReadyForPurchase && !_),
            J = v(
                'researchVehicle',
                a.useMemo(() => ({ vehCD: t }), [t]),
                a.useMemo(() => ({ disabled: !1 }), []),
            ),
            Q = (i) => {
                (H('vehicle-click', { target: e.name, original: i }), L.onOpenAboutVehicle(t, ''));
            },
            Z = (i) => {
                i &&
                    'button' in i &&
                    2 === i.button &&
                    (H('vehicle-right-click', { target: e.name, original: i }), J.onMouseDown(i));
            },
            ee = f(n),
            ie = 'vehicle.x120x96',
            re = `${ie}.${ee}`,
            oe = oi.readOr(re, () => oi.readOrEmpty(`${ie}.tank_empty`)),
            ae = P && O,
            ne = P && !O && si.includes(l);
        return s.jsxs('div', {
            className: o(
                ii.base,
                Le.vehicle,
                ni[A],
                j && ii.base__elite,
                w && ii.base__premium,
                S && ii.base__selected,
                O && ii.base__welcomeAnimation,
                M && ii.base__highlighted,
                P && ii.base__topTier,
                I && ii.base__mainLine,
                K && ii.base__unaffordable,
                ai[l],
                D,
            ),
            style: { ...C, '--animationDelay': E },
            'data-test-state': l,
            children: [
                s.jsxs('div', {
                    className: ii.container,
                    style: { animationDelay: E },
                    onMouseEnter: (i) => {
                        H('vehicle-hover', { target: e.name, original: i });
                    },
                    children: [
                        s.jsx('div', { className: ii.hover }),
                        s.jsx('div', {
                            className: ii.image,
                            ...J,
                            'data-test-id': t + '-image',
                            onClick: Q,
                            onMouseDown: Z,
                            style: { backgroundImage: `url('${oe}')` },
                        }),
                        s.jsxs('div', {
                            className: ii.content,
                            ...z,
                            ...J,
                            'data-test-id': t + '-content',
                            onClick: (e) => {
                                (Q(e), z.onClick());
                            },
                            onMouseDown: Z,
                            children: [
                                q && s.jsx(Fe, { amount: T, className: ii.combatXp, type: 'combatXp' }),
                                s.jsxs('div', {
                                    className: ii.rightBlockBelowLine,
                                    children: [
                                        s.jsxs('div', {
                                            className: ii.name,
                                            children: [
                                                s.jsx('div', { className: ii.name_wrapper, children: r }),
                                                l === k.ReadyForTradeIn &&
                                                    s.jsx('div', { ...W, className: ii.tradeInIcon }),
                                                (l === k.Rented || l === k.RentedRecoverable) &&
                                                    s.jsx('div', { className: ii.rentedIcon }),
                                                l === k.Owned && s.jsx('div', { className: ii.ownedIcon }),
                                            ],
                                        }),
                                        U &&
                                            s.jsx(Fe, {
                                                type: 'xp',
                                                amount: h,
                                                className: ii.price,
                                                isDiscountedXp: d,
                                                isDiscountedPrice: m,
                                                isAmountHidden: $,
                                                hasEnough: c,
                                            }),
                                        G &&
                                            s.jsx(Fe, {
                                                type: u,
                                                amount: y,
                                                className: ii.price,
                                                isDiscountedXp: d,
                                                isDiscountedPrice: m,
                                                isAmountHidden: Y,
                                                hasEnough: _,
                                            }),
                                        (l === k.ReadyForRecovery || l === k.RentedRecoverable) &&
                                            s.jsx('div', {
                                                className: ii.recover,
                                                children: ri.readOrEmpty('tech_tree.vehicle.recover'),
                                            }),
                                    ],
                                }),
                                s.jsx('div', { className: ii.tier, children: N(B) }),
                            ],
                        }),
                        s.jsx(x, {
                            size: 'small',
                            theme: 'custom',
                            'data-test-id': t + '-add-to-comparison',
                            disabled: !V,
                            className: o(ii.toggleComparison, !V && ii.toggleComparison__disabled),
                            ...F,
                            onClick: () => {
                                V && (R(i.id), F.onClick());
                            },
                            children: s.jsx('div', { className: ii.comparisonIcon }),
                        }),
                        ae && s.jsx(Qe, { className: ii.topTierReleaseHighlight, animationDelay: E }),
                        ne && s.jsx(ei, { className: ii.topTierSoftHighlight, animationDelay: E }),
                    ],
                }),
                s.jsx(Ae, {
                    className: ii.line,
                    lineSegments: i.lineSegments,
                    isMainLine: I,
                    style: { animationDelay: E },
                }),
            ],
        });
    }),
    li = 'ScrollBar_87455c97',
    ci = 'ScrollBar_base__hidden_47c6bd22',
    di = 'ScrollBar_base__vertical_ccc162d5',
    hi = 'ScrollBar_base__horizontal_2d8f67c3',
    _i = 'ScrollBar_arrow_182cfca2',
    mi = 'ScrollBar_arrow__end_80774b27',
    ui = 'ScrollBar_arrow__start_2c4e1a03',
    gi = 'ScrollBar_track_b216f0bd',
    bi = 'ScrollBar_rail_bcfdaef9',
    pi = 'ScrollBar_rail__start_e300a356',
    vi = 'ScrollBar_rail__end_6b3e6c68',
    fi = 'ScrollBar_rail_target_2110f62',
    Ni = 'ScrollBar_thumb_89853eb4',
    xi = 'ScrollBar_thumb_background_f48a5061',
    yi = 'ScrollBar_thumb_icon_a83ea3f3',
    Ti = 'ScrollBar_thumb_innerBorder_106d8a38',
    wi = 'ScrollBar_thumb_border_183c86c5';
function ji({ className: e, orientation: i = 'vertical', arrowClickStep: r = 50, ...n }) {
    const {
            containerWidth: t,
            containerHeight: l,
            contentWidth: c,
            contentHeight: d,
            horizontalScrollPosition: h,
            verticalScrollPosition: _,
            thumbDragging: m,
            setIsHorizontalThumbDragging: u,
            setIsVerticalThumbDragging: b,
            moveScrollPosition: p,
        } = fe(),
        v = g().play,
        f = () => v('scroll-hover', { target: ji.name }),
        N = () => v('scroll-click', { target: ji.name }),
        x = 'vertical' === i,
        y = x ? b : u,
        T = m === i,
        w = a.useRef({ x: 0, y: 0 }),
        j = x ? (l / d) * 100 : (t / c) * 100,
        S = x ? (_ / (d - l)) * (100 - j) : (h / (c - t)) * (100 - j),
        P = x ? d > l : c > t,
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
        l && t && d && c
            ? s.jsxs('div', {
                  ...n,
                  className: o(li, e, x ? di : hi, !P && ci),
                  style: { '--thumbSize': M, '--thumbPosition': V },
                  children: [
                      s.jsx('div', {
                          className: o(_i, ui),
                          onMouseEnter: f,
                          onClick: (e) => {
                              (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : -r, x ? -r : 0, R));
                          },
                      }),
                      s.jsxs('div', {
                          className: gi,
                          children: [
                              s.jsx('div', {
                                  className: o(bi, pi),
                                  children: s.jsx('div', {
                                      className: fi,
                                      onMouseEnter: f,
                                      onClick: (e) => {
                                          (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : -r, x ? -r : 0, R));
                                      },
                                  }),
                              }),
                              s.jsxs('div', {
                                  className: Ni,
                                  onMouseDown: (e) => {
                                      (e.preventDefault(),
                                          e.stopPropagation(),
                                          N(),
                                          y(!0),
                                          (w.current = { x: e.screenX, y: e.screenY }));
                                  },
                                  onMouseEnter: f,
                                  children: [
                                      s.jsx('div', { className: xi }),
                                      s.jsx('div', { className: wi }),
                                      s.jsx('div', { className: Ti }),
                                      s.jsx('div', { className: yi }),
                                  ],
                              }),
                              s.jsx('div', {
                                  className: o(bi, vi),
                                  children: s.jsx('div', {
                                      className: fi,
                                      onMouseEnter: f,
                                      onClick: (e) => {
                                          (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : r, x ? r : 0, R));
                                      },
                                  }),
                              }),
                          ],
                      }),
                      s.jsx('div', {
                          className: o(_i, mi),
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
const Si = ({
        children: e,
        scrollBarOffsetTop: i = 0,
        scrollBarOffsetLeft: r = 0,
        scrollBarOffsetRight: n = 0,
        scrollBarOffsetBottom: t = 0,
        HorizontalScrollBar: l = ji,
        VerticalScrollBar: c = ji,
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
                verticalScrollPosition: N,
                containerHeight: x,
                containerWidth: T,
                draggableClassName: w,
                isHorizontalBarVisible: j,
                isVerticalBarVisible: S,
                setSizes: P,
                setIsMouseDown: M,
                moveScrollPosition: V,
                setIsDragging: R,
            } = fe(),
            I = null !== v,
            C = a.useRef({ x: 0, y: 0 });
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
                    const i = e.screenX - C.current.x,
                        r = e.screenY - C.current.y,
                        o = Math.abs(i) < 5 && Math.abs(r) < 5,
                        a = 0 === e.button,
                        n = 1 === e.button;
                    if (!(a || n)) return (R(!1), void M(!1));
                    b && !o && (R(!0), (C.current = { x: C.current.x + i, y: C.current.y + r }), V(-i, -r));
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
                (y.tooltip.hide(0, 0), y.contextMenu.hide(0, 0));
            }, [N, f]));
        return s.jsxs('div', {
            ...m,
            ref: u,
            className: o(te, w, m.className),
            onMouseDown: (e) => {
                const i = 0 === e.button,
                    r = 1 === e.button;
                (i || r) && !I && (j || S) && (M(!0), (C.current = { x: e.screenX, y: e.screenY }));
            },
            onWheel: (e) => {
                'horizontal' === d && j ? V(10 * -e.deltaX, 0, !0) : 'vertical' === d && S && V(0, 10 * -e.deltaY, !0);
            },
            style: {
                ...m.style,
                '--ScrollArea-offsetX': `${f}px`,
                '--ScrollArea-offsetY': `${N}px`,
                '--ScrollArea-containerHeight': `${x}px`,
                '--ScrollArea-containerWidth': `${T}px`,
                '--ScrollArea-scrollBarOffsetTop': `${i}rem`,
                '--ScrollArea-scrollBarOffsetLeft': `${r}rem`,
                '--ScrollArea-scrollBarOffsetRight': `${n}rem`,
                '--ScrollArea-scrollBarOffsetBottom': `${t}rem`,
            },
            children: [
                s.jsx('div', {
                    className: le,
                    children: s.jsx('div', {
                        ref: g,
                        className: o(ce, (p || I) && de, null == h ? void 0 : h.content),
                        style: { top: -N, left: -f },
                        children: e,
                    }),
                }),
                s.jsx(c, { orientation: 'vertical' }),
                s.jsx(l, { orientation: 'horizontal' }),
            ],
        });
    },
    Pi = 'PremiumVehicles_b00872',
    Mi = 'PremiumVehicles_base__empty_3543548f',
    Vi = 'PremiumVehicles_base__enabled_1d7ebd1',
    Ri = 'PremiumVehicles_base__keepOpen_4f37b78e',
    Ii = 'PremiumVehicles_base__locallyDragging_1d7ebd1',
    Ci = 'PremiumVehicles_header_34347d67',
    Di = 'PremiumVehicles_header_title_a0941b8f',
    ki = 'PremiumVehicles_header_glow_c912503',
    Bi = 'PremiumVehicles_columnsMask_999f5c65',
    Ai = 'PremiumVehicles_columns_7fbaae3d',
    Oi = 'PremiumVehicles_column_1f7baf80',
    Ei = 'PremiumVehicles_column_texture_1631537a',
    Li = 'PremiumVehicles_column_more_83e52a45',
    Hi = 'PremiumVehicles_column_more_buttonContent_6f68a138',
    zi = 'PremiumVehicles_column_more_amount_693e3431',
    Fi = 'PremiumVehicles_vehicle_9465d6ef',
    Wi = 'PremiumVehicles_backgroundShadow_6a11087a',
    Xi = 'PremiumVehicles_shadow_21360769',
    Ui = u.resolve('strings'),
    $i = u.resolve('intl'),
    Gi = l(function e({ isContentVisible: i = !0 }) {
        const { model: r, controls: n } = X(),
            {
                horizontalScrollPosition: t,
                isDragging: l,
                isHorizontalThumbDragging: c,
                isVerticalThumbDragging: d,
                draggableClassName: h,
                isHorizontalBarVisible: _,
                isMouseDown: m,
                setIsMouseDown: u,
            } = fe(),
            [b, p] = a.useState(!1),
            [v, f] = a.useState(!1),
            N = r.premiumNodesByTier.get(),
            y = N ? Object.values(N).reduce((e, i) => Math.max(e, i.length), 0) : 0,
            j = r.maxCombinedTier.get(),
            S = g().play,
            P = !l && !(d || c),
            M = b && l,
            V = M || v,
            R = a.useRef(0);
        return (
            a.useEffect(() => {
                m || p(!1);
            }, [m]),
            a.useEffect(() => {
                const e = () => {
                        viewEnv.isWindowShownByViewEvent(4) || f(!1);
                    },
                    i = document.getElementById('techTreeNormalView');
                return (
                    i && i.addEventListener('mouseup', e),
                    () => {
                        i && i.removeEventListener('mouseup', e);
                    }
                );
            }, [f]),
            s.jsxs('div', {
                'data-test-id': 'premium-vehicles',
                className: o(Pi, 0 === y && Mi, P && Vi, _ && h, V && Ri, M && Ii),
                onMouseDown: (e) => {
                    if (2 === e.button) return void f(!0);
                    const i = 0 === e.button,
                        r = 1 === e.button;
                    (i || r) && _ && (u(!0), p(!0), (R.current = e.screenX));
                },
                onMouseEnter: () => S('premium-vehicles-mouse-over', { target: e.name }),
                onMouseLeave: () => S('premium-vehicles-mouse-out', { target: e.name }),
                children: [
                    s.jsx('div', { className: Wi }),
                    s.jsx('div', {
                        className: Ci,
                        children: s.jsxs('div', {
                            className: Di,
                            children: [
                                $i.toUpperCase(Ui.readOrEmpty('tech_tree.premiumVehicles.title')),
                                s.jsx('div', { className: ki }),
                            ],
                        }),
                    }),
                    s.jsx('div', {
                        className: Bi,
                        children: s.jsx('div', {
                            className: Ai,
                            style: { transform: `translateX(-${t}px)`, visibility: i ? 'visible' : 'hidden' },
                            children: T(j, (e) => {
                                const i = N[e + 1] ?? [],
                                    r = i.length > 4 ? i.length - 4 + 1 : 0,
                                    o = r ? i.slice(0, i.length - r) : i;
                                return s.jsxs(
                                    'div',
                                    {
                                        className: Oi,
                                        children: [
                                            s.jsx('div', { className: Ei }),
                                            o.map((e) =>
                                                s.jsx(
                                                    ti,
                                                    {
                                                        ...e,
                                                        className: Fi,
                                                        isSelected: !1,
                                                        onAddToCompare: n.onAddToCompare,
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            r > 0 &&
                                                s.jsx('div', {
                                                    className: Li,
                                                    children: s.jsx(x, {
                                                        theme: 'secondary',
                                                        size: 'small',
                                                        onClick: () => n.onOpenPremiumShop(e + 1),
                                                        children: s.jsx('span', {
                                                            className: Hi,
                                                            children: s.jsx(w, {
                                                                text: Ui.readOrEmpty('tech_tree.premiumVehicles.more'),
                                                                params: {
                                                                    amount: s.jsx('span', {
                                                                        className: zi,
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
                    s.jsx('div', { className: Xi }),
                ],
            })
        );
    }),
    Yi = {
        base: 'TierPaging_47475918',
        base__hidden: 'TierPaging_base__hidden_e6a3f596',
        arrow: 'TierPaging_arrow_e55a1dbb',
        arrow__start: 'TierPaging_arrow__start_f6b082f5',
        arrow__disabled: 'TierPaging_arrow__disabled_a58a039b',
    };
function qi({ className: e, orientation: i = 'vertical', arrowClickStep: r, ...a }) {
    const { horizontalScrollPosition: n, containerWidth: t, contentWidth: l, moveScrollPosition: c } = fe(),
        d = l > t,
        h = d ? l - t : 0,
        _ = n < 10,
        m = n > h - 10,
        u = g().play,
        b = () => u('tier-paging-hover', { target: qi.name }),
        p = () => u('tier-paging-click', { target: qi.name });
    return s.jsxs('div', {
        ...a,
        className: o(Yi.base, e, !d && Yi.base__hidden),
        children: [
            s.jsx('div', {
                className: o(Yi.arrow, Yi.arrow__start, _ && Yi.arrow__disabled),
                onMouseEnter: b,
                onClick: (e) => {
                    (p(), e.preventDefault(), e.stopPropagation(), c(-h, 0, true));
                },
            }),
            s.jsx('div', {
                className: o(Yi.arrow, Yi.arrow__end, m && Yi.arrow__disabled),
                onMouseEnter: b,
                onClick: (e) => {
                    (p(), e.preventDefault(), e.stopPropagation(), c(h, 0, true));
                },
            }),
        ],
    });
}
const Ki = 'DoubleScrollWrapper_hidden_81d74f4d';
function Ji({ isContentVisible: e = !0, ...i }) {
    return s.jsxs(s.Fragment, {
        children: [
            s.jsx(Si, {
                ...i,
                mouseWheelOrientation: 'vertical',
                HorizontalScrollBar: qi,
                classNames: { content: e ? void 0 : Ki },
            }),
            s.jsx(Gi, { isContentVisible: e }),
        ],
    });
}
const Qi = {
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
    Zi = u.resolve('strings'),
    er = u.resolve('intl'),
    ir = { args: { tooltipId: 'vehicleCollectorInfo' } },
    rr = l(function e() {
        const { model: i, controls: r } = X(),
            t = j(),
            l = g().play,
            c = i.selectedNation.get(),
            d = i.showWelcomeAnimation.get(),
            [h, _] = n.useState(!1),
            m = i.collectableVehiclesAvailable.get(),
            u = i.computes.getAvailableNations(),
            b = i.techTreeNodes.get(),
            v = i.firstHighlightedLevel.get(),
            f = i.maxCombinedTier.get(),
            x = i.premiumNodesByTier.get(),
            y = Object.keys(x).length > 0,
            w = d ? Math.max(f - v + 1, 0) : 0,
            V = T(w, (e) => v - 1 + e),
            R =
                d ||
                Object.values(b).some((e) => e.tier >= 5 && e.state !== k.Unresearched) ||
                Object.values(x)
                    .flat()
                    .some((e) => e.tier >= 3 && e.state !== k.Researched),
            I = a.useCallback(
                (e, i = 0) => {
                    if (!(e >= v - 1)) return 0;
                    if (!d) return 3e3 + 1e3 * i;
                    return 150 * i;
                },
                [v, d],
            );
        a.useEffect(() => {
            const i = [];
            return (
                Array.from({ length: f }, (r, o) => {
                    const a = I(o);
                    if (o >= v - 1 && d) {
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
        }, [c, f, l, d, v, I]);
        const C = (e) => {
            t.push(t.location, { nation: e });
        };
        S(M.ESCAPE, () => {
            t.goBack();
        });
        const D = u.indexOf(c);
        (S(M.ARROW_UP, (i) => {
            const r = u[D - 1];
            r && (l('increaseAmount', { target: e.name, original: i }), C(r));
        }),
            S(M.ARROW_DOWN, (i) => {
                const r = u[D + 1];
                r && (l('decreaseAmount', { target: e.name, original: i }), C(r));
            }));
        const { mainLineRowIndexes: B, rows: A } = se(b),
            O = 100 / f,
            E = p(ir),
            L = n.useRef(null),
            H = n.useRef(null),
            z = L.current,
            F = [f, A.length, y ? 'premium' : '_', R ? 'right' : 'left'].join('-');
        return (
            z !== F &&
                ((L.current = F),
                _(!1),
                H.current && clearTimeout(H.current),
                (H.current = setTimeout(() => {
                    (_(!0), P(!0));
                }, 150))),
            s.jsxs('div', {
                id: 'techTreeNormalView',
                className: o(Qi.base, d && Qi.base__welcomeAnimation),
                style: { '--nodeWidth': Math.floor(100 * O) / 100 + '%', '--columnCount': f },
                children: [
                    s.jsx('div', { className: Qi.background }),
                    s.jsxs('div', {
                        className: Qi.title,
                        children: [
                            er.toUpperCase(Zi.readOrEmpty(`tech_tree.nation.${c}`)),
                            s.jsx('div', {
                                'data-test-id': m ? 'collector-vehicles' : 'no-collector-vehicles',
                                ...E,
                                onMouseEnter: (i) => {
                                    (E.onMouseEnter(),
                                        m && l('collector-vehicles-hover', { target: e.name, original: i }));
                                },
                                onClick: (i) => {
                                    (l('collector-vehicles-click', { target: e.name, original: i }),
                                        r.onOpenCollectableVehicles(c),
                                        E.onClick());
                                },
                                className: o(Qi.collectorVehiclesLink, !m && Qi.collectorVehiclesLink__hidden),
                            }),
                        ],
                    }),
                    s.jsx('div', {
                        className: Qi.sidebar,
                        children: s.jsx(Ve, {
                            className: Qi.nations,
                            availableNations: u,
                            selectedNation: c,
                            onSelectNation: C,
                        }),
                    }),
                    s.jsx('div', {
                        className: o(Qi.tableWrapper, y && Qi.tableWrapper__withPremium),
                        children: s.jsx(Ne, {
                            initialVerticalCenter: !0,
                            initialScrollRight: R,
                            children: s.jsx(
                                Ji,
                                {
                                    scrollBarOffsetTop: 30,
                                    scrollBarOffsetBottom: 10,
                                    scrollBarOffsetRight: -15,
                                    isContentVisible: h,
                                    children: s.jsxs('div', {
                                        className: Qi.table,
                                        children: [
                                            s.jsx(
                                                'div',
                                                {
                                                    className: Qi.table_header,
                                                    children: Array.from({ length: f }, (e, i) => {
                                                        const r = i + 1,
                                                            a = r >= v,
                                                            n = `${I(i)}ms`;
                                                        return s.jsxs(
                                                            'div',
                                                            {
                                                                className: o(
                                                                    Qi.table_header_column,
                                                                    a && Qi.table_header_column__topTier,
                                                                ),
                                                                style: { animationDelay: n },
                                                                children: [
                                                                    N(r),
                                                                    s.jsx('div', {
                                                                        className: Qi.table_header_column_ruler,
                                                                    }),
                                                                    a &&
                                                                        d &&
                                                                        s.jsx('div', {
                                                                            className:
                                                                                Qi.table_header_column_description,
                                                                            children: s.jsx('div', {
                                                                                className:
                                                                                    Qi.table_header_column_description_text,
                                                                                children: er.toUpperCase(
                                                                                    Zi.readOrEmpty(
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
                                            s.jsxs('div', {
                                                className: o(Qi.grid),
                                                style: { '--rowCount': A.length },
                                                children: [
                                                    s.jsx('div', {
                                                        className: Qi.grid_rows,
                                                        children: A.map((e, i) =>
                                                            s.jsx(
                                                                'div',
                                                                {
                                                                    className: o(
                                                                        Qi.grid_row,
                                                                        B.includes(i) && Qi.grid_row__mainLine,
                                                                    ),
                                                                    children: e.map((e, a) => {
                                                                        const n = a + 1 >= v,
                                                                            t = o(
                                                                                Qi.grid_cell,
                                                                                !e && Qi.grid_cell__empty,
                                                                                Qi.grid_cell__node,
                                                                                n && Qi.grid_cell__topTier,
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
                                                                                  ? s.jsx(
                                                                                        Ae,
                                                                                        {
                                                                                            lineSegments: {
                                                                                                ...e.lineSegments,
                                                                                            },
                                                                                            className: t,
                                                                                        },
                                                                                        l,
                                                                                    )
                                                                                  : s.jsx(
                                                                                        ti,
                                                                                        {
                                                                                            ...e,
                                                                                            className: t,
                                                                                            isSelected: !1,
                                                                                            isTopTier: n,
                                                                                            showWelcomeAnimation: d,
                                                                                            onAddToCompare: () =>
                                                                                                r.onAddToCompare(e.id),
                                                                                            animationDelay: `${I(a, i)}ms`,
                                                                                        },
                                                                                        e.id,
                                                                                    ))
                                                                            : s.jsx('div', { className: t }, l);
                                                                        var h;
                                                                    }),
                                                                },
                                                                c + '-' + i,
                                                            ),
                                                        ),
                                                    }),
                                                    V.map((e) =>
                                                        s.jsx(
                                                            'div',
                                                            {
                                                                className: Qi.grid_tierHighlight,
                                                                style: {
                                                                    '--columnIndex': e,
                                                                    animationDelay: `${I(e)}ms`,
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
    or = 'App_e7ddee44';
function ar() {
    const e = j();
    return (S(M.ESCAPE, e.goBack), s.jsx('div', { className: or, children: s.jsx(rr, {}) }));
}
V(
    s.jsx(R, {
        context: 'model.router',
        children: s.jsx(W, { children: s.jsx(I, { soundsOverrides: U, children: s.jsx(ar, {}) }) }),
    }),
    { fullScreen: !0 },
).then(() => P(!1));
