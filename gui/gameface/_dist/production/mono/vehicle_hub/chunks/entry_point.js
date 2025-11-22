var e = Object.defineProperty,
    t = (t, a, s) =>
        ((t, a, s) => (a in t ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[a] = s)))(
            t,
            'symbol' != typeof a ? a + '' : a,
            s,
        );
import {
    j as a,
    e as s,
    x as r,
    r as n,
    R as o,
    o as i,
    f as c,
    A as l,
    h as d,
    B as _,
    l as m,
    m as u,
    C as h,
    D as b,
    E as f,
} from './vendor.js';
import {
    i as p,
    n as g,
    m as v,
    c as y,
    a2 as x,
    aR as N,
    aS as j,
    r as w,
    P as k,
    o as P,
    ap as E,
    d as B,
    aT as $,
    I as D,
    aU as T,
    a5 as I,
    aV as M,
    aW as S,
    aX as A,
    aY as C,
    aZ as F,
    a_ as z,
    a$ as L,
    b0 as O,
    b1 as H,
    ai as G,
    aQ as V,
    b2 as W,
    a3 as q,
    af as Q,
    b3 as U,
    C as X,
    an as Z,
    a6 as Y,
    aq as J,
    b4 as K,
    ab as ee,
    b5 as te,
    b6 as ae,
    b7 as se,
    b8 as re,
    ag as ne,
    F as oe,
    b9 as ie,
    N as ce,
    aN as le,
    B as de,
    Q as _e,
    ba as me,
} from './lib.js';
import { T as ue, S as he } from './node_model.js';
const [be, fe] = p()(({ observableModel: e }) => ({ tree: e.object('tree'), ...e.primitives(['locationId']) }), g);
var pe = ((e) => (
    (e.Available = 'available'),
    (e.Blocked = 'blocked'),
    (e.Progress = 'progress'),
    (e.Achieved = 'achieved'),
    e
))(pe || {});
const [ge, ve] = p()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['prestigeState']),
                    prestigeEmblem: e.object('prestigeEmblem'),
                    rewards: e.transform(
                        (e) =>
                            v(
                                e,
                                ({
                                    level: e,
                                    title: t,
                                    subtitle: a,
                                    name: s,
                                    icon: r,
                                    state: n,
                                    hasPreview: o,
                                    rarity: i,
                                }) => ({
                                    level: e,
                                    title: t,
                                    subtitle: a,
                                    name: s,
                                    icon: r,
                                    state: n,
                                    hasPreview: o,
                                    rarity: i,
                                }),
                            ),
                        'rewards',
                    ),
                },
                a = y.shallow(() => !x(t.rewards.get(), (e) => e.state !== pe.Achieved));
            return { ...t, computes: { allResearched: a } };
        },
        ({ externalModel: e }) => ({ openSelectedPreview: e.createCallback((e) => ({ level: e }), 'onPreview') }),
    ),
    ye = new N(window),
    xe = (e, t) => {
        const { name: a } = e,
            s = j(e, t);
        if (!ye.has(s))
            switch (a) {
                case 'attachment':
                    return j({ name: a, icon: 'attachment' }, t);
                case 'customizations':
                    return j({ name: a, icon: 'style' }, t);
            }
        return s;
    };
function Ne({ subtitle: e, rarity: t, ...s }) {
    const r = w.resolve('strings');
    return a.jsx('div', {
        ...s,
        children: t
            ? a.jsx(k, {
                  text: r.readOrEmpty('veh_skill_tree.rewardScreen.rewardName'),
                  upgradeLegacy: !0,
                  params: { rarity: r.readOrEmpty(`vehicle_customization.customization.rarity.${t}`), rewardName: e },
              })
            : a.jsx(a.Fragment, { children: e }),
    });
}
const je = {
        root: 'Emblem_root_9b4d607c',
        base: 'Emblem_90452419',
        base__available: 'Emblem_base__available_9b4d607c',
        base__achieved: 'Emblem_base__achieved_4f63778f',
        base__progress: 'Emblem_base__progress_347071b5',
        level: 'Emblem_level_23acdd81',
    },
    we = function ({ level: e, state: t }) {
        const r = w.resolve('strings'),
            n = P({ body: r.readOrEmpty('veh_skill_tree.vanity.reward.level.tooltip') });
        return a.jsx('div', {
            className: s(je.base, je[`base__${t}`]),
            ...n,
            children: a.jsx('div', { className: je.level, children: e }),
        });
    },
    ke = {
        root: 'Award_root_1ed03553',
        base: 'Award_cc70f470',
        background: 'Award_background_db1f8ace',
        emblem: 'Award_emblem_1fe5d78c',
        reward: 'Award_reward_e06d6649',
        base__blocked: 'Award_base__blocked_1ed03553',
        image: 'Award_image_1bc489ff',
        container: 'Award_container_7ad9c022',
        container__show: 'Award_container__show_ca1b0b1',
        preview: 'Award_preview_51ad03d1',
        textContainer: 'Award_textContainer_631a0a9e',
        rewardName: 'Award_rewardName_4f58e46a',
        rewardType: 'Award_rewardType_ed28cdb',
        achieved: 'Award_achieved_b124862a',
        achieved__show: 'Award_achieved__show_f4eff0f6',
        check: 'Award_check_13a829f3',
    },
    Pe = r(function ({ name: e, icon: t, level: r, title: n, subtitle: o, state: i, hasPreview: c, rarity: l }) {
        const { controls: d } = ve(),
            _ = E(),
            m = B(
                { size: $.S232x174, statTrackerSize: $.S180x135 },
                {
                    medium: { size: $.S296x222, statTrackerSize: $.S232x174 },
                    large: { size: $.S400x300, statTrackerSize: $.S296x222 },
                },
            ),
            u = 'statTracker' === e ? m.statTrackerSize : m.size,
            h = { contentId: R.views.mono.vehicle_hub.tooltips.prestige_reward_tooltip('resId'), args: { level: r } };
        return a.jsxs('div', {
            className: s(ke.base, ke[`base__${i}`]),
            children: [
                i === pe.Progress &&
                    a.jsx(D, {
                        path: 'skillTree.prestige.rays.small.rays',
                        width: 320,
                        height: 474,
                        adaptive: {
                            large: { width: 405, height: 600, path: 'skillTree.prestige.rays.big.rays' },
                            extraLarge: { width: 460, height: 682 },
                        },
                        className: ke.background,
                    }),
                a.jsx('div', { className: ke.emblem, children: a.jsx(we, { level: r, state: i }) }),
                a.jsx('div', {
                    className: ke.reward,
                    children: a.jsx(T, {
                        image: xe({ name: e, icon: t }, u),
                        name: t,
                        size: u,
                        classNames: { image: ke.image, overlay: ke.overlay },
                        tooltipArgs: h,
                        special: 'attachment' === e ? l : void 0,
                    }),
                }),
                a.jsx('div', {
                    className: s(ke.container, c && ke.container__show),
                    children: a.jsx('div', {
                        className: ke.preview,
                        onClick: () => {
                            return ((e = r), d.openSelectedPreview(e), void _.play('click', { target: 'select' }));
                            var e;
                        },
                        onMouseEnter: function () {
                            _.play('mouse-enter', { target: 'Award' });
                        },
                    }),
                }),
                a.jsxs('div', {
                    className: ke.textContainer,
                    children: [
                        a.jsx('div', { className: ke.rewardName, children: n }),
                        n && o && a.jsx(Ne, { className: ke.rewardType, subtitle: o, rarity: l }),
                    ],
                }),
                a.jsx('div', {
                    className: s(ke.achieved, i === pe.Achieved && ke.achieved__show),
                    children: a.jsx('div', { className: ke.check }),
                }),
            ],
        });
    }),
    Ee = {
        root: 'Progression_root_61efd8f5',
        wrapper: 'Progression_wrapper_a3b670b1',
        element: 'Progression_element_1dcdd841',
        scrollWrapper__both: 'Progression_scrollWrapper__both_2efcfbbf',
        scrollWrapper__left: 'Progression_scrollWrapper__left_c11cb4e5',
        scrollWrapper__right: 'Progression_scrollWrapper__right_c7a4c9d',
        content: 'Progression_content_f441f79e',
        content__horizontal: 'Progression_content__horizontal_4ee67b69',
        horizontalBar: 'Progression_horizontalBar_c07ecaf4',
    },
    Be = I('Wrapper', Ee.wrapper),
    $e = I('Element', Ee.element),
    De = 'both',
    Re = 'left',
    Te = 'right',
    Ie = 'none';
function Me({ elements: e }) {
    const { api: t } = S(),
        { animationScroll: r, applyScroll: i } = t,
        c = A(t, O.horizontal),
        [l, d] = n.useState();
    n.useEffect(
        () =>
            C(() => {
                'idle' === c.type && r.scrollPosition.idle && i(r.scrollPosition.get());
            }),
        [r.scrollPosition, c, i],
    );
    const _ = F((e) => {
        const a = (null == e ? void 0 : e.value.scrollPosition) || r.scrollPosition.goal,
            s = t.getContainerSize() ?? 0,
            n = t.getWrapperSize() ?? 0,
            o = t.getBounds()[1];
        d(n >= s ? Ie : a <= 30 ? Te : a >= o - 30 ? Re : De);
    });
    return (
        o.useLayoutEffect(() => {
            function e() {
                C(() => {
                    _();
                });
            }
            return (
                e(),
                t.events.on('resizeHandled', e),
                () => {
                    t.events.off('resizeHandled', e);
                }
            );
        }, [t, _]),
        n.useEffect(
            () => (
                t.events.on('change', _),
                () => {
                    t.events.off('change', _);
                }
            ),
            [t, _],
        ),
        a.jsxs(Be, {
            children: [
                a.jsx(z, {
                    classNames: {
                        wrapper: s(Ee.scrollWrapper, Ee[`scrollWrapper__${l}`]),
                        content: s(Ee.content, Ee.content__horizontal),
                    },
                    children: v(e, (e, t) => a.jsx($e, { children: e }, t)),
                }),
                a.jsx(L, { classNames: { base: Ee.horizontalBar } }),
            ],
        })
    );
}
const Se = r(function () {
    const { model: e } = ve(),
        t = e.rewards.get();
    return a.jsx(M, { children: a.jsx(Me, { elements: t.map((e) => a.jsx(Pe, { ...e }, e.level)) }) });
});
var Ae = ((e) => ((e.Available = 'available'), (e.Completed = 'completed'), (e.Disabled = 'disabled'), e))(Ae || {});
const Ce = {
        root: 'Vanity_root_267393fa',
        base: 'Vanity_289eaebe',
        background: 'Vanity_background_b38f23a6',
        title: 'Vanity_title_24438ae5',
        base__disabled: 'Vanity_base__disabled_267393fa',
        subtitle: 'Vanity_subtitle_7a54555a',
        base__completed: 'Vanity_base__completed_267393fa',
        emblem: 'Vanity_emblem_bbc7150',
        disabledEmblem: 'Vanity_disabledEmblem_a6f7bbca',
    },
    Fe = r(function () {
        const { model: e } = ve(),
            t = w.resolve('strings'),
            r = e.rewards.get().length > 0 && e.computes.allResearched(),
            n = e.prestigeEmblem.get(),
            o = e.prestigeState.get() ? e.prestigeState.get() : Ae.Disabled,
            i = r
                ? t.readOrEmpty('veh_skill_tree.vanity.completed.subtitle')
                : t.readOrEmpty(`veh_skill_tree.vanity.${o}.subtitle`),
            c = P({ body: t.readOrEmpty(`veh_skill_tree.vanity.${o}.tooltip`) }),
            l = B({ size: H.sizes.sm }, { medium: { size: H.sizes.md } });
        return a.jsxs('div', {
            className: s(Ce.base, Ce[`base__${o}`], r && Ce.base__completed),
            children: [
                r &&
                    a.jsx(D, {
                        path: 'skillTree.prestige.vanity_bg.small.vanity_bg',
                        width: 450,
                        height: 120,
                        adaptive: {
                            medium: { width: 530, height: 140, path: 'skillTree.prestige.vanity_bg.big.vanity_bg' },
                        },
                        className: Ce.background,
                    }),
                a.jsxs('div', {
                    className: Ce.description,
                    children: [
                        a.jsx('div', { className: Ce.title, children: t.readOrEmpty('veh_skill_tree.vanity.title') }),
                        a.jsx('div', { className: Ce.subtitle, children: i }),
                    ],
                }),
                a.jsx('div', {
                    className: Ce.emblem,
                    ...c,
                    children:
                        o === Ae.Disabled
                            ? a.jsx('div', { className: Ce.disabledEmblem })
                            : a.jsx(H, {
                                  level: n.level,
                                  grade: n.grade ?? 1,
                                  type: n.type ?? 'prestige',
                                  size: l.size,
                              }),
                }),
            ],
        });
    });
var ze = ((e) => (
    (e.NOT_IN_INVENTORY = 'notInInventory'),
    (e.NOT_ENOUGH_EXP = 'notEnoughExp'),
    (e.IN_BATTLE = 'inBattle'),
    (e.IN_FORMATION = 'inFormation'),
    (e.NEEDS_REPAIR = 'needsRepair'),
    (e.AVAILABLE = 'researchAvailable'),
    e
))(ze || {});
const Le = ['right', 'left'],
    Oe = { right: 'x', left: 'x', bottom: 'y', top: 'y' },
    He = { x: 'x', y: 'y' },
    Ge = { right: 'left', left: 'right', top: 'bottom', bottom: 'top' };
function Ve(e, t) {
    var a;
    return `${e}To${(null == (a = t[0]) ? void 0 : a.toUpperCase()) + t.slice(1)}`;
}
function We(e, t) {
    const a = (function (e, t) {
            return e.map(([e, a]) => {
                var s, r;
                const n = null == (s = t.find((t) => t.id === e)) ? void 0 : s.status,
                    o = null == (r = t.find((e) => e.id === a)) ? void 0 : r.status;
                return (
                    (n && o) ||
                        V.log(
                            void 0 !== n || void 0 !== o,
                            'getStatusesFromNode didnt find firstStatus or secondStatus',
                        ),
                    [n, o]
                );
            });
        })(e, t),
        s = a.map((e) =>
            (function (e) {
                const t = new Set(e);
                if (1 === t.size) {
                    const [e] = t;
                    return e;
                }
                const [a, s] = e;
                return (a === he.Researched && s === he.Selected) || (a === he.Selected && s === he.Researched)
                    ? he.Selected
                    : he.Default;
            })(e),
        );
    return s.includes(he.Researched) ? he.Researched : s.includes(he.Selected) ? he.Selected : he.Default;
}
function qe(e, t, a = []) {
    return a.reduce((a, s) => (e.some((e) => e.targetNodeId === s.id) && a.push([t, s.id]), a), []);
}
function Qe(e, t) {
    return e
        .filter((e) => t.includes(e.id))
        .sort((e, t) => e.x - t.x)
        .reduce((e, t, a, s) => {
            if (0 === a) return ((e[t.id] = 0), e);
            const r = s[a - 1],
                n = e[r.id];
            return (
                V(void 0 !== n, 'prevPerk was not added to animationQueues'),
                t.x === r.x ? (e[t.id] = n) : (e[t.id] = n + 1),
                e
            );
        }, {});
}
function Ue(e) {
    return e.reduce((e, t, a) => ({ ...e, [t]: a }), {});
}
function Xe(e, t) {
    const a = {};
    return (
        t.forEach((t) => {
            let s = Number.MAX_SAFE_INTEGER;
            for (const a of t.effectedNodes)
                for (const t of a) {
                    const a = e[t];
                    void 0 !== a && (s = Math.min(a, s));
                }
            s !== Number.MAX_SAFE_INTEGER && (a[t.id] = s);
        }),
        { ...a, ...e }
    );
}
function Ze() {
    return Math.round(1e3 * Math.random() + Date.now());
}
class Ye {
    constructor(e, a) {
        (t(this, 'nodes'),
            t(this, 'ghostNodes'),
            t(this, 'listNodePosition'),
            t(this, 'paths'),
            t(this, 'axisDirection'),
            (this.nodes = e),
            (this.paths = a),
            (this.ghostNodes = []),
            (this.listNodePosition = []));
    }
    hasDuplicate(e) {
        return e.some(({ position: e }) => this.listNodePosition.includes(e));
    }
    extractNodeConnectionInfo(e, t) {
        const { startPoint: a, endPoint: s } = (function (e) {
                const [t, a, s] = e.split(/(?=[A-Z])/).map((e) => e.toLowerCase());
                return (
                    (t && s) ||
                        V.log(void 0 !== t || void 0 !== s, 'parseLineDirection didnt find startPoint and endPoint'),
                    { startPoint: t, endPoint: s }
                );
            })(e),
            r = G(this.nodes, (e, a, s) => (a.id === t && ((e.node = a), (e.position = s)), e), {});
        if (!r.node) throw new Error(`Node with id ${t} not found`);
        const { node: n, position: o } = r;
        return { matchItem: { targetNodeId: t, x: n.x, y: n.y, position: o, endPoint: s }, startPoint: a };
    }
    buildTraversalPath(e, t) {
        return t.map((a, s) => {
            const r = e.reduce(
                (e, r) => (
                    this.validateNodeByAxis(r, a, s, t) &&
                        e.push({ id: r.targetNodeId, lineType: Ve(Ge[r.endPoint], r.endPoint) }),
                    e
                ),
                [],
            );
            return t.length > 1 && s > 0
                ? [...r, { id: t[s - 1].id, lineType: Ve(Ge[this.axisDirection], this.axisDirection) }]
                : r;
        });
    }
    get newNodes() {
        return this.ghostNodes;
    }
    get updatedPaths() {
        return this.paths;
    }
    findMatches(e) {
        const t = new Map(),
            a = new Map();
        return (
            W(e, ({ lineType: e, id: s }) => {
                const { startPoint: r, matchItem: n } = this.extractNodeConnectionInfo(e, s);
                a.has(r) ? (a.get(r).push(n), t.set(r, a.get(r))) : a.set(r, [n]);
            }),
            Array.from(t)
        );
    }
    getEffectedNodes(e, t, a, s) {
        return a.reduce(
            (r, n, o) => (
                0 === o && s && r.push(...qe(a, n.targetNodeId, this.paths[n.position])),
                n[e ? He.x : He.y] >= t && r.push(...qe(a, n.targetNodeId, this.paths[n.position])),
                r
            ),
            [],
        );
    }
    createNodes(e, t) {
        const a = [t, ...e],
            s = Le.includes(this.axisDirection),
            r = s ? He.x : He.y,
            n = s ? t.y : t.x,
            o = (function (e, t, a) {
                const s = t === He.x ? He.y : He.x;
                return e.reduce((e, r) => (r[s] !== a && e.push(r[t]), e), []);
            })(e, He[r], n),
            i = [...new Set(o)].map((e, t) => {
                const o = 0 === t,
                    i = {
                        id: Ze(),
                        x: 0,
                        y: 0,
                        isHintRequired: !1,
                        status: he.Default,
                        iconName: '',
                        price: 0,
                        type: ue.Ghost,
                        localizationName: '',
                        categories: [],
                        effectedNodes: this.getEffectedNodes(s, e, a, o),
                        vehicleName: '',
                    };
                return ((i[r] = e), (i[s ? He.y : He.x] = n), i);
            });
        (this.ghostNodes.push(...i), this.createPaths(a, i));
    }
    filterPathsByTraversalList(e) {
        this.paths = G(
            this.paths,
            (t, a, s) => {
                if (e.find(({ position: e }) => e === s)) {
                    const s = q(a, (t) => !e.some((e) => e.targetNodeId === t.id));
                    return (t.push(s), t);
                }
                return (t.push(a), t);
            },
            [],
        );
    }
    updateTree(e, t) {
        const a = this.nodes[t];
        e.forEach(([e, s]) => {
            if (this.hasDuplicate(s) || !a) return;
            const r = { targetNodeId: a.id, x: a.x, y: a.y, position: t, endPoint: e };
            ((this.axisDirection = e), this.createNodes(s, r), this.listNodePosition.push(t));
        });
    }
    createPaths(e, t) {
        (this.filterPathsByTraversalList(e), this.paths.push(...this.buildTraversalPath(e, t)));
    }
    validateNodeByAxis(e, t, a, s) {
        const r = s.length;
        if (1 === r) return !0;
        const n = Oe[this.axisDirection];
        return a > 0 && a < r - 1 ? t[n] === e[n] : a === r - 1 ? e[n] >= t[n] : t[n] >= e[n];
    }
}
const Je = [ze.IN_BATTLE, ze.IN_FORMATION, ze.NEEDS_REPAIR],
    [Ke, et] = p()(
        ({ observableModel: e, cleanup: t }) => {
            const a = {
                    ...e.primitives(['rootNodeId', 'rootNodeUiId', 'lockedTree', 'researchAvailability']),
                    researchedPerks: e.arrayClone('researchedPerks'),
                    finalPerk: e.transform(
                        (e) =>
                            (function (e) {
                                return G(
                                    e,
                                    (e, { type: t, status: a, id: s }) => (
                                        t === ue.Final && ((e.id = s), (e.researched = a === he.Researched)),
                                        e
                                    ),
                                    {},
                                );
                            })(e),
                        'nodes',
                    ),
                },
                s = {
                    currentNodes: e.arrayClone('nodes'),
                    paths: e.arrayClone('paths'),
                    newNodes: i.box([]),
                    transformedPaths: i.box([]),
                },
                r = y.shallow(() => (0 === s.newNodes.get().length ? s.currentNodes.get() : n())),
                n = y.shallow(() => {
                    const e = s.currentNodes.get(),
                        t = s.newNodes.get().map(({ effectedNodes: t, ...a }) => ({ ...a, status: We(t, e) }));
                    return [...s.currentNodes.get(), ...t];
                }),
                o = y.shallow(() => s.transformedPaths.get().map((e) => e.map((e) => ({ ...e })))),
                _ = y.shallow(() => ({
                    researched: G(
                        s.currentNodes.get(),
                        (e, t) => (t.status === he.Researched && t.type !== ue.Final && e++, e),
                        0,
                    ),
                    total: s.currentNodes.get().length - 1,
                })),
                m = y.primitive((e) => {
                    const t = a.researchedPerks.get();
                    return t.includes(e) ? t.length : 0;
                }),
                u = c((e, t) => {
                    (s.newNodes.set(e), s.transformedPaths.set(t));
                });
            t(
                l(
                    () => s.paths.get(),
                    () => {
                        const e = s.paths.get(),
                            t = new Ye(s.currentNodes.get(), e);
                        (e.forEach((e, a) => {
                            t.updateTree(t.findMatches(e), a);
                        }),
                            u(t.newNodes, t.updatedPaths));
                    },
                    { equals: d.structural, fireImmediately: !0 },
                ),
            );
            const h = y.structural((e) => {
                    const t = s.newNodes.get(),
                        r = s.currentNodes.get(),
                        n = a.finalPerk.get().id;
                    return e.includes(n)
                        ? { finalPerkId: n, animationQueue: Xe(Qe(r, e), t) }
                        : { finalPerkId: n, animationQueue: Xe(Ue(e), t) };
                }),
                b = y.primitive(() => Je.includes(a.researchAvailability.get()));
            return {
                ...a,
                computes: {
                    perksInfo: _,
                    nodes: r,
                    paths: o,
                    animationQueueInfo: h,
                    amountResearchedPerks: m,
                    lockedVehicle: b,
                },
            };
        },
        ({ externalModel: e }) => ({
            openConfirmWindow: e.createCallback((e) => ({ nodeID: e }), 'onShowNodeConfigurationWindow'),
            selectedPerk: e.createCallback((e) => ({ targetNodeID: e }), 'onSelectNode'),
            finalNodeResearchAnimationFinished: e.createCallbackNoArgs('onFinalNodeResearchAnimationFinished'),
        }),
    ),
    tt = 'EntryPointLine_f5426a98',
    at = 'EntryPointLine_lock_e27404c6',
    st = 'EntryPointLine_base__locked_d883e9db',
    rt = r(function () {
        const { model: e } = et();
        return a.jsx('div', {
            className: s(tt, !e.finalPerk.get().researched && st),
            children: a.jsx('div', { className: at }),
        });
    }),
    nt = {
        small: { width: 866, height: 480, cell: 7 },
        medium: { width: 975, height: 540, cell: 7.5 },
        large: { width: 1300, height: 720, cell: 10 },
        extraLarge: { width: 1733, height: 960, cell: 12 },
    },
    ot = {
        [Q.extraSmall]: { cell: nt.small.cell, container: nt.small },
        [Q.small]: { cell: nt.small.cell, container: nt.small },
        [Q.medium]: { cell: nt.medium.cell, container: nt.medium },
        [Q.large]: { cell: nt.large.cell, container: nt.large },
        [Q.extraLarge]: { cell: nt.extraLarge.cell, container: nt.extraLarge },
    },
    it = {
        root: 'ResearchedAnimation_root_6660d527',
        video: 'ResearchedAnimation_video_a2258a9e',
        video__major: 'ResearchedAnimation_video__major_6660d527',
        video__final: 'ResearchedAnimation_video__final_d43c2114',
    },
    ct = w.resolve('videos');
function lt(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
const dt = r(function ({ type: e, runAnimation: t, id: r }) {
        const { model: i, controls: c } = et(),
            l = o.useRef(null),
            d = o.useRef({ soundTarget: '', src: '' }),
            [m, u] = n.useState(!1),
            h = E(),
            b = n.useCallback(
                (e) => {
                    e.currentTime >= e.duration - 1.3 &&
                        u((e) => (!1 === e && c.finalNodeResearchAnimationFinished(), !0));
                },
                [c],
            );
        return (
            o.useLayoutEffect(
                () =>
                    _(() => {
                        const t = i.computes.amountResearchedPerks(r);
                        t > 0 &&
                            (d.current = (function (e, t) {
                                if (e === ue.Final)
                                    return {
                                        soundTarget: 'researchFinalPerk',
                                        src: ct.readOrEmpty('skillTree.perks.final.standard'),
                                    };
                                const a = 1 === t ? 'single' : 'chain';
                                return e === ue.Major
                                    ? {
                                          soundTarget: `research${lt(a)}LargePerk`,
                                          src: ct.readOrEmpty(`skillTree.perks.${e}.${a}`),
                                      }
                                    : {
                                          soundTarget: `research${lt(a)}SmallPerk`,
                                          src: ct.readOrEmpty(`skillTree.perks.${e}.${a}`),
                                      };
                            })(e, t));
                    }),
                [r, i.computes, e],
            ),
            o.useEffect(() => {
                const a = l.current;
                if (a)
                    return (
                        t &&
                            (a.domRef.load(),
                            a.play(),
                            h.play('click', { target: d.current.soundTarget }),
                            e === ue.Final && a.onChangeTime(b)),
                        () => {
                            a.cleanup();
                        }
                    );
            }, [t, h, e, b]),
            t ? a.jsx(U, { src: d.current.src, className: s(it.video, it[`video__${e}`]), ref: l }) : null
        );
    }),
    _t = {
        root: 'BasicBorder_root_7913b3f5',
        base: 'BasicBorder_f5a1f779',
        base__selected: 'BasicBorder_base__selected_7913b3f5',
        base__researched: 'BasicBorder_base__researched_c2cb0bad',
        base__animateResearched: 'BasicBorder_base__animateResearched_a1bc9e9',
        base__showHintAnimation: 'BasicBorder_base__showHintAnimation_cb3e1446',
        pulseBorder: 'BasicBorder_pulseBorder_7913b3f5',
        researchedBg: 'BasicBorder_researchedBg_f0292637',
        selectedBg: 'BasicBorder_selectedBg_5f6a826',
        rotateBackForth: 'BasicBorder_rotateBackForth_7913b3f5',
    },
    mt = {
        root: 'MajorBorder_root_1957f8b',
        base: 'MajorBorder_ee641b96',
        base__selected: 'MajorBorder_base__selected_1957f8b',
        base__researched: 'MajorBorder_base__researched_5556406e',
        base__animateResearched: 'MajorBorder_base__animateResearched_8ebb77ec',
        base__final: 'MajorBorder_base__final_59901020',
        base__major: 'MajorBorder_base__major_3fc114d3',
        selectedBg: 'MajorBorder_selectedBg_5d7cc9ad',
        researchedBg: 'MajorBorder_researchedBg_db572fb9',
    },
    ut = { common: _t, special: _t, ghost: _t, major: mt, final: mt };
function ht(e) {
    const t = ut[e.type];
    return a.jsxs('div', {
        className: s(
            t.base,
            t[`base__${e.type}`],
            t[`base__${e.status}`],
            e.showHintAnimation && t.base__showHintAnimation,
            e.className,
        ),
        style: { '--transitionDelay': `${e.transitionDelay}ms` },
        children: [a.jsx('div', { className: t.researchedBg }), a.jsx('div', { className: t.selectedBg })],
    });
}
const bt = {
    root: 'Icon_root_55a8ab20',
    base: 'Icon_1ff370a4',
    icon: 'Icon_4a7e2c0e',
    base__selected: 'Icon_base__selected_55a8ab20',
    base__researched: 'Icon_base__researched_55a8ab20',
    base__animateResearched: 'Icon_base__animateResearched_55a8ab20',
    glow: 'Icon_glow_5d4d69c5',
    base__default: 'Icon_base__default_55a8ab20',
};
function ft({ status: e, iconName: t, className: r, type: n, transitionDelay: o, classNames: i }) {
    const { folderSize: c } = B(
        { folderSize: 'small' },
        { large: { folderSize: 'large' }, extraLarge: { folderSize: 'large' } },
    );
    return a.jsxs('div', {
        className: s(bt.base, bt[`base__${e}`], r),
        style: { '--transitionDelay': `${o}ms` },
        children: [
            a.jsx('div', { className: bt.glow }),
            a.jsx('div', {
                className: s(bt.icon, bt[`icon__${n}`], null == i ? void 0 : i.icon),
                style: { backgroundImage: `url(R.images.gui.maps.icons.skillTree.tree.perks.${n}.skills.${c}.${t})` },
            }),
        ],
    });
}
const pt = {
    root: 'Price_root_29f8d762',
    base: 'Price_e2a305d1',
    base__researched: 'Price_base__researched_16917da8',
    base__animateResearched: 'Price_base__animateResearched_a0a6912a',
    value: 'Price_value_9290e627',
    base__default: 'Price_base__default_29f8d762',
    icon: 'Price_icon_aed4fc8a',
};
function gt({ value: e, status: t, transitionDelay: r, className: n }) {
    const o = w.resolve('intl');
    return a.jsx('div', {
        className: s(pt.base, pt[`base__${t}`], n),
        style: { '--transitionDelay': `${r}ms` },
        children: a.jsx(X, {
            type: X.types.tankXP,
            size: X.sizes.extraSmall,
            reverse: !0,
            classNames: { icon: pt.icon },
            children: a.jsx('div', { className: pt.value, children: o.formatNumber('integral', e) }),
        }),
    });
}
const vt = {
    root: 'Segments_root_634cda13',
    base: 'Segments_17549bc6',
    base__major: 'Segments_base__major_bd931c2c',
    base__final: 'Segments_base__final_a33819aa',
    circle: 'Segments_circle_783c8fb4',
    base__selected: 'Segments_base__selected_634cda13',
    base__researched: 'Segments_base__researched_634cda13',
    base__animateResearched: 'Segments_base__animateResearched_634cda13',
    segmentTop: 'Segments_segmentTop_f9463de1',
    segmentRight: 'Segments_segmentRight_8c024c7d',
    segmentBottom: 'Segments_segmentBottom_d19a8cec',
    segmentLeft: 'Segments_segmentLeft_988e88cf',
    base__notDelay: 'Segments_base__notDelay_634cda13',
    base__withDelay: 'Segments_base__withDelay_634cda13',
};
function yt({ status: e, className: t, classNames: r, type: n, transitionDelay: o }) {
    return a.jsxs('div', {
        className: s(
            vt.base,
            vt[`base__${e}`],
            vt[`base__${n}`],
            vt['base__' + (0 === o ? 'notDelay' : 'withDelay')],
            t,
        ),
        style: { '--transitionDelay': `${o}ms` },
        children: [
            a.jsx('div', { className: s(vt.circle, null == r ? void 0 : r.circle) }),
            a.jsx('div', { className: vt.segmentTop }),
            a.jsx('div', { className: vt.segmentRight }),
            a.jsx('div', { className: vt.segmentBottom }),
            a.jsx('div', { className: vt.segmentLeft }),
        ],
    });
}
const xt = { base: 'Glare_a09df11', glare: 'Glare_ed61dd83' },
    Nt = w.resolve('images');
function jt({
    startCoords: e = -55,
    endCoords: t = 65,
    rotation: r = -45,
    maskPath: n,
    classNames: o,
    pointAnimation: i,
    startAnimation: c,
}) {
    const [l] = m(
        () => ({
            from: c ?? { x: `${e}rem`, y: `${e}rem`, rotateZ: `${r}deg`, opacity: 0 },
            to: i ?? { x: `${t}rem`, y: `${t}rem`, rotateZ: `${r}deg`, opacity: 1 },
            delay: 1500,
            loop: !0,
            config: { duration: 1500, easing: Z.easeInQuint },
        }),
        [],
    );
    return a.jsx('div', {
        className: xt.base,
        style: { maskImage: `url(${Nt.readOrEmpty(n)})` },
        children: a.jsx(u.div, { className: s(xt.glare, o), style: l }),
    });
}
const wt = 'Glare_95e181ec',
    kt = 'Glare_1be1be9',
    Pt = { x: '-55rem', y: '-55rem', rotateZ: '-45deg', opacity: 0 },
    Et = [
        { ...Pt, opacity: 1 },
        { opacity: 1, x: '45rem', y: '45rem', rotateZ: '-45deg' },
    ];
const Bt = 'Points_ebbc956c',
    $t = 'Points_arrowContainer_2bd78abc',
    Dt = 'Points_arrow_cd1850ae',
    Rt = 'Points_arrow__top_2e330546',
    Tt = 'Points_arrow__right_fa74c47',
    It = 'Points_arrow__bottom_1b669f6e',
    Mt = 'Points_arrow__left_1453abe0',
    St = 'Points_outsideGlow_8ec52358',
    At = 'Points_insideGlow_ec6f3f05',
    Ct = 'Wrapper_3f1ea42a',
    Ft = u(({ style: e }) =>
        a.jsxs(u.div, {
            className: Bt,
            style: e,
            children: [
                a.jsx('div', { className: St }),
                a.jsxs('div', {
                    className: $t,
                    children: [
                        a.jsx('div', { className: s(Dt, Rt) }),
                        a.jsx('div', { className: s(Dt, Tt) }),
                        a.jsx('div', { className: s(Dt, It) }),
                        a.jsx('div', { className: s(Dt, Mt) }),
                    ],
                }),
                a.jsx('div', { className: At }),
            ],
        }),
    ),
    zt = u(function ({ style: e }) {
        const t = B({ value: 'small' }, { large: { value: 'large' } });
        return a.jsx(u.div, {
            className: wt,
            style: e,
            children: a.jsx(jt, {
                maskPath: `skillTree.tree.perks.special.skills.${t.value}.mask`,
                classNames: kt,
                pointAnimation: Et,
                startAnimation: Pt,
            }),
        });
    });
function Lt({ children: e, showHint: t, type: s }) {
    const r = h(t, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: { duration: 0 } });
    return a.jsxs('div', {
        className: Ct,
        children: [
            r(
                (e, t) =>
                    t &&
                    (() => {
                        switch (s) {
                            case ue.Common:
                                return a.jsx(Ft, { style: e });
                            case ue.Special:
                                return a.jsx(zt, { style: e });
                            default:
                                console.error(`There is no hint for type ${s}`);
                        }
                    })(),
            ),
            e(s === ue.Common && t),
        ],
    });
}
const Ot = {
        root: 'Basic_root_9a292541',
        price: 'Basic_price_8863ae4e',
        price__root: 'Basic_price__root_4ebcb0aa',
        base__enableHover: 'Basic_base__enableHover_9a292541',
        base: 'Basic_ef3988ee',
        icon: 'Basic_icon_6056e6e',
        base__selected: 'Basic_base__selected_9a292541',
        base__researched: 'Basic_base__researched_9a292541',
        base__animateResearched: 'Basic_base__animateResearched_9a292541',
        iconBase: 'Basic_iconBase_36efa531',
        circle: 'Basic_circle_81265ae7',
        base__default: 'Basic_base__default_9a292541',
        border: 'Basic_border_1c1598db',
        blurCircle: 'Basic_blurCircle_d304048',
        container: 'Basic_container_f746d3ea',
        base__special: 'Basic_base__special_9a292541',
        base__lockedTree: 'Basic_base__lockedTree_9a292541',
        base__lockedVehicle: 'Basic_base__lockedVehicle_9a292541',
        mainLayer: 'Basic_mainLayer_6169b935',
        texture: 'Basic_texture_a8f6d174',
        glow: 'Basic_glow_88115ccf',
        gearContainer: 'Basic_gearContainer_e8e416fa',
        gearIcon: 'Basic_gearIcon_88a263ef',
    },
    Ht = o.forwardRef(function (e, t) {
        const r = Y({ contentId: R.views.mono.vehicle_hub.tooltips.perk_tooltip('resId'), args: { nodeID: e.id } });
        const n = o.useRef(null),
            i = o.useRef(null);
        return (
            o.useImperativeHandle(
                t,
                () =>
                    (function (e, t) {
                        return {
                            getBoundingClientRect() {
                                const t = e.current;
                                if (!t) return { width: 0, height: 0 };
                                const a = t.getBoundingClientRect();
                                return { width: a.width, height: a.height };
                            },
                            get offsetLeft() {
                                var t;
                                return (null == (t = e.current) ? void 0 : t.offsetLeft) ?? 0;
                            },
                            get gearIndent() {
                                const a = e.current,
                                    s = t.current;
                                return a && s
                                    ? 1.2 * (s.getBoundingClientRect().bottom - a.getBoundingClientRect().bottom)
                                    : 0;
                            },
                            get offsetTop() {
                                var t;
                                return (null == (t = e.current) ? void 0 : t.offsetTop) ?? 0;
                            },
                        };
                    })(n, i),
                [],
            ),
            a.jsxs('div', {
                ...r,
                className: s(
                    Ot.base,
                    Ot[`base__${e.type}`],
                    Ot[`base__${e.status}`],
                    Ot[`base__${e.state}`],
                    e.enableHover && Ot.base__enableHover,
                ),
                onClick: function () {
                    (r.onClick(), e.onClick());
                },
                onMouseEnter: function (t) {
                    (r.onMouseEnter(t), e.onMouseEnter());
                },
                ref: n,
                style: { '--x': `${e.x}rem`, '--y': `${e.y}rem`, '--transitionDelay': `${e.transitionDelay}ms` },
                children: [
                    a.jsx(Lt, {
                        showHint: e.showHint,
                        type: e.type,
                        children: (t) =>
                            a.jsxs('div', {
                                className: Ot.container,
                                children: [
                                    a.jsx('div', { className: Ot.mainLayer }),
                                    a.jsx(yt, {
                                        type: e.type,
                                        status: e.status,
                                        classNames: { circle: Ot.circle },
                                        transitionDelay: e.transitionDelay,
                                    }),
                                    a.jsx(ht, {
                                        type: e.type,
                                        status: e.status,
                                        className: Ot.border,
                                        transitionDelay: e.transitionDelay,
                                        showHintAnimation: t,
                                    }),
                                    a.jsx('div', { className: Ot.texture }),
                                    a.jsx(ft, {
                                        iconName: e.iconName,
                                        status: e.status,
                                        className: Ot.iconBase,
                                        type: e.type,
                                        classNames: { icon: Ot.icon },
                                        transitionDelay: e.transitionDelay,
                                    }),
                                ],
                            }),
                    }),
                    e.root && a.jsx('div', { className: Ot.blurCircle }),
                    a.jsx('div', { className: Ot.glow }),
                    e.showGear &&
                        a.jsx('div', {
                            className: Ot.gearContainer,
                            ref: i,
                            children: a.jsx('div', { className: Ot.gearIcon }),
                        }),
                    a.jsx(gt, {
                        value: e.price,
                        className: s(Ot.price, e.root && Ot.price__root),
                        status: e.status,
                        transitionDelay: e.transitionDelay,
                    }),
                    a.jsx(dt, { type: e.type, runAnimation: e.status === ea.AnimateResearched, id: e.id }),
                ],
            })
        );
    }),
    Gt = {
        root: 'Ghost_root_eea20f5',
        base: 'Ghost_3e19eb13',
        base__selected: 'Ghost_base__selected_f90be090',
        base__researched: 'Ghost_base__researched_eea20f5',
        base__animateResearched: 'Ghost_base__animateResearched_a7c4bb12',
    },
    Vt = n.forwardRef(function ({ x: e, y: t, status: r }, n) {
        return a.jsx('div', {
            className: s(Gt.base, Gt[`base__${r}`]),
            style: { '--x': `${e}rem`, '--y': `${t}rem` },
            ref: n,
        });
    }),
    Wt = { singe: 2500, chain: 220 };
function qt(e, t) {
    const a = e - t;
    return 1 === a ? Wt.singe : a * Wt.chain;
}
const Qt = {
        root: 'FinalPerkDecoration_root_260dff85',
        base: 'FinalPerkDecoration_543199b0',
        container: 'FinalPerkDecoration_container_9f71bdf0',
        base__researched: 'FinalPerkDecoration_base__researched_260dff85',
        base__animateResearched: 'FinalPerkDecoration_base__animateResearched_260dff85',
        border: 'FinalPerkDecoration_border_8af34fb8',
        glow: 'FinalPerkDecoration_glow_ae828d97',
        base__default: 'FinalPerkDecoration_base__default_260dff85',
        base__selected: 'FinalPerkDecoration_base__selected_260dff85',
        starContainer: 'FinalPerkDecoration_starContainer_baaaab4b',
        star: 'FinalPerkDecoration_star_c858408e',
        rotateBackForth: 'FinalPerkDecoration_rotateBackForth_260dff85',
        counterContainer: 'FinalPerkDecoration_counterContainer_56063a3a',
        counterContainer__hide: 'FinalPerkDecoration_counterContainer__hide_61890ca6',
        counterIcon: 'FinalPerkDecoration_counterIcon_7d8fc45b',
        values: 'FinalPerkDecoration_values_686875ac',
        draftTexture: 'FinalPerkDecoration_draftTexture_a070f384',
        pulseBorder: 'FinalPerkDecoration_pulseBorder_260dff85',
    },
    Ut = w.resolve('images'),
    Xt = w.resolve('strings'),
    Zt = r(function ({ children: e, showFinalDecoration: t, status: r, transitionDelay: n, classNames: i }) {
        const { model: c } = et(),
            { researched: l, total: d } = c.computes.perksInfo(),
            _ = (function ({ researched: e, total: t }) {
                const a = J(),
                    s = K(e) ?? 0,
                    [{ number: r }] = m(
                        () => ({
                            number: e,
                            from: { number: 0 },
                            config: { duration: qt(e, s), ...b.molasses },
                            immediate: a || e === t,
                        }),
                        [e, t],
                    );
                return r;
            })(o.useMemo(() => ({ researched: l, total: d }), [l, d])),
            { researched: h } = c.finalPerk.get();
        return t
            ? a.jsxs('div', {
                  className: s(Qt.base, Qt[`base__${r}`]),
                  style: { '--transitionDelay': `${n}ms` },
                  children: [
                      e,
                      a.jsxs('div', {
                          className: Qt.container,
                          children: [
                              a.jsx('div', { className: Qt.border }),
                              a.jsx('div', {
                                  className: Qt.starContainer,
                                  children: a.jsx('div', { className: Qt.star }),
                              }),
                              a.jsx('div', { className: s(Qt.glow, null == i ? void 0 : i.glow) }),
                          ],
                      }),
                      a.jsxs('div', {
                          className: s(Qt.counterContainer, l === d && Qt.counterContainer__hide),
                          children: [
                              a.jsx('div', { className: Qt.counterIcon }),
                              a.jsxs('div', {
                                  className: Qt.values,
                                  children: [
                                      a.jsx(u.div, { children: _.to((e) => e.toFixed(0)) }),
                                      Xt.readOrEmpty('common.common.slash'),
                                      d,
                                  ],
                              }),
                          ],
                      }),
                      a.jsx('div', {
                          className: Qt.draftTexture,
                          style: {
                              backgroundImage: `url(${Ut.readOrEmpty('skillTree.tree.' + (h ? 'draftTextureResearched' : 'draftTexture'))})`,
                          },
                      }),
                  ],
              })
            : e;
    }),
    Yt = {
        root: 'Major_root_8ac3c20b',
        price: 'Major_price_c470556f',
        base__final: 'Major_base__final_b1dddd71',
        price__root: 'Major_price__root_a0fb31b2',
        iconBase: 'Major_iconBase_2d86f198',
        base: 'Major_305c8384',
        icon: 'Major_icon_f20d091',
        base__selected: 'Major_base__selected_8ac3c20b',
        base__researched: 'Major_base__researched_8ac3c20b',
        base__animateResearched: 'Major_base__animateResearched_8ac3c20b',
        finalGlow: 'Major_finalGlow_dcd513ef',
        circle: 'Major_circle_e849b818',
        base__default: 'Major_base__default_8ac3c20b',
        border: 'Major_border_9ef1e972',
        container: 'Major_container_928d6f81',
        base__lockedTree: 'Major_base__lockedTree_8ac3c20b',
        mainLayer: 'Major_mainLayer_8091bdbd',
        texture: 'Major_texture_5f54f0c9',
        glow: 'Major_glow_22ebe17b',
    },
    Jt = o.forwardRef(function (e, t) {
        const r = Y({ contentId: R.views.mono.vehicle_hub.tooltips.perk_tooltip('resId'), args: { nodeID: e.id } });
        return a.jsx('div', {
            ...r,
            className: s(Yt.base, Yt[`base__${e.type}`], Yt[`base__${e.status}`], e.lockedTree && Yt.base__lockedTree),
            onClick: function () {
                (r.onClick(), e.onClick());
            },
            onMouseEnter: function (t) {
                (r.onMouseEnter(t), e.onMouseEnter());
            },
            ref: t,
            style: { '--x': `${e.x}rem`, '--y': `${e.y}rem`, '--transitionDelay': `${e.transitionDelay}ms` },
            children: a.jsx('div', {
                className: Yt.container,
                children: a.jsxs(Zt, {
                    status: e.status,
                    showFinalDecoration: e.showFinalDecoration,
                    classNames: { glow: Yt.finalGlow },
                    transitionDelay: e.transitionDelay,
                    children: [
                        a.jsx('div', { className: Yt.mainLayer }),
                        a.jsx(yt, {
                            type: e.type,
                            status: e.status,
                            classNames: { circle: Yt.circle },
                            transitionDelay: e.transitionDelay,
                        }),
                        a.jsx(ht, {
                            type: e.type,
                            status: e.status,
                            className: Yt.border,
                            transitionDelay: e.transitionDelay,
                        }),
                        a.jsx('div', { className: Yt.texture }),
                        a.jsx(ft, {
                            iconName: e.iconName,
                            status: e.status,
                            className: Yt.iconBase,
                            type: e.type,
                            classNames: { icon: Yt.icon },
                            transitionDelay: e.transitionDelay,
                        }),
                        a.jsx(gt, {
                            value: e.price,
                            className: Yt.price,
                            status: e.status,
                            transitionDelay: e.transitionDelay,
                        }),
                        !e.showFinalDecoration && a.jsx('div', { className: Yt.glow }),
                        a.jsx(dt, { type: e.type, runAnimation: e.status === ea.AnimateResearched, id: e.id }),
                    ],
                }),
            }),
        });
    });
function Kt(e, t, a, s) {
    return e
        ? { enableHover: !0, showHint: !1, state: 'lockedTree' }
        : t
          ? { enableHover: !a, showHint: s && a, state: 'lockedVehicle' }
          : { enableHover: !a, showHint: a, state: 'none' };
}
const ea = { ...he, AnimateResearched: 'animateResearched' },
    ta = r(function (e) {
        const { controls: t, model: s } = et(),
            r = s.lockedTree.get(),
            n = s.computes.lockedVehicle(),
            { status: i, transitionDelay: c } = ra(
                e.status,
                o.useMemo(() => [e.id], [e.id]),
                e.vehicleName,
            ),
            l = ee(),
            d = E(),
            _ = ot[l.breakpoint.name].cell;
        const m = {
            ...e,
            x: Math.round(e.x * _),
            y: Math.round(e.y * _),
            onClick: function () {
                if (r) return;
                const {
                    soundTarget: a,
                    needsConfirmation: s,
                    needsSelection: o,
                } = (function (e, t, a) {
                    return e !== he.Researched
                        ? {
                              soundTarget: e === he.Default ? 'select' : 'deselect',
                              needsConfirmation: !1,
                              needsSelection: !0,
                          }
                        : {
                              soundTarget: a || ue.Special !== t ? null : 'select',
                              needsConfirmation: !a && ue.Special === t,
                              needsSelection: !1,
                          };
                })(e.status, e.type, n);
                (s && t.openConfirmWindow(e.id), o && t.selectedPerk(e.id), a && d.play('click', { target: a }));
            },
            onMouseEnter: function () {
                d.play('mouse-enter', { target: 'Perk' });
            },
            ref:
                ((u = e.nodeRefsMap),
                (h = e.position),
                (e) => {
                    e && (u.current[h] = e);
                }),
            status: i,
            transitionDelay: c,
            root: s.rootNodeUiId.get() === e.id,
        };
        var u, h;
        switch (e.type) {
            case ue.Common:
            case ue.Special:
                return a.jsx(Ht, { ...m, ...Kt(r, n, m.isHintRequired, m.root), showGear: e.type === ue.Special });
            case ue.Final:
            case ue.Major:
                return a.jsx(Jt, { ...m, showFinalDecoration: e.type === ue.Final, lockedTree: r });
            case ue.Ghost:
                return a.jsx(Vt, { status: m.status, x: m.x, y: m.y, ref: m.ref });
            default:
                console.error(`There is no node type '${e.type}' registered.`);
        }
    }),
    aa = {
        queue: { initial: 200, common: 150 },
        transition: { chain: 0, single: 1e3, final: 2e3 },
        path: { single: 200 },
    },
    sa = {
        queue(e, t, a) {
            const { queue: s, transition: r, path: n } = aa;
            return 1 === a && 'path' === t ? r.single + n.single : 0 === e ? s.initial : e * s.common + s.initial;
        },
        transition(e, t, a) {
            const { transition: s } = aa;
            return t.includes(e) ? s.final : a > 1 ? s.chain : s.single;
        },
    };
function ra(e, t, a, s = 'perk') {
    const [r, n] = o.useState(() => ({ status: e, transitionDelay: 0 })),
        i = o.useRef(a),
        c = te(),
        { model: l } = et(),
        d = J();
    return (
        o.useLayoutEffect(() => {
            const r = new ae();
            if (!d && i.current === a) {
                if (e === he.Researched)
                    return (
                        r.add(
                            f(
                                () => l.researchedPerks.get().length > 0,
                                () => {
                                    const e = l.researchedPerks.get(),
                                        { animationQueue: a, finalPerkId: r } = l.computes.animationQueueInfo(e),
                                        o = e.length,
                                        i = sa.queue(
                                            (function (e, t) {
                                                const [a, s] = e,
                                                    r = t[a] ?? 0,
                                                    n = t[s] ?? 0;
                                                return Math.max(r, n);
                                            })(t, a),
                                            s,
                                            o,
                                        );
                                    c.run(
                                        () =>
                                            n({
                                                status: ea.AnimateResearched,
                                                transitionDelay: sa.transition(r, t, o),
                                            }),
                                        i,
                                    );
                                },
                            ),
                        ),
                        r.add(c.clear),
                        r.dispose
                    );
                n({ status: e, transitionDelay: 0 });
            }
        }, [c, d, t, l.computes, e, s, l.researchedPerks, a]),
        o.useLayoutEffect(() => {
            i.current !== a && ((i.current = a), n({ status: e, transitionDelay: 0 }));
        }, [e, a]),
        r
    );
}
const na = {
    root: 'Path_root_a3514b92',
    base: 'Path_55a8a7fd',
    base__selected: 'Path_base__selected_78814b1d',
    base__researched: 'Path_base__researched_a3514b92',
    base__animateResearched: 'Path_base__animateResearched_8845b1b0',
};
function oa({ affectedNodes: e, path: t, nodes: r }) {
    const n = se(),
        { status: i } = ra(
            We(e, r),
            o.useMemo(() => e.flat(), [e]),
            (function (e) {
                const t = e[0];
                return (V(void 0 !== t, 'Nodes dont have first element'), t.vehicleName);
            })(r),
            'path',
        );
    return a.jsx('path', { d: t, style: { '--scale': `${n}` }, className: s(na.base, na[`base__${i}`]) });
}
const ia = 8,
    ca = '->',
    la = ['bottom', 'top'];
function da() {
    const e = new Set();
    return (t, a) => {
        const { path: s, reversePath: r } = { path: `${(n = a)}${ca}${(o = t)}`, reversePath: `${o}${ca}${n}` };
        var n, o;
        const i = e.has(s) || e.has(r);
        return (i || e.add(s), i);
    };
}
function _a({ start: e, middle: t, end: a }) {
    return t
        ? (function (e, t, a, s = ia) {
              const r = (e, t) => {
                      const a = e.x - t.x,
                          s = e.y - t.y,
                          r = Math.sqrt(a * a + s * s);
                      return { x: a / r, y: s / r };
                  },
                  n = (() => {
                      const { x: a, y: n } = r(e, t);
                      return { x: t.x + a * s, y: t.y + n * s };
                  })(),
                  o = (() => {
                      const { x: e, y: n } = r(a, t);
                      return { x: t.x + e * s, y: t.y + n * s };
                  })();
              return `M ${e.x} ${e.y} \n            L ${n.x} ${n.y} \n            C ${t.x} ${t.y} ${t.x} ${t.y} ${o.x} ${o.y} \n            L ${a.x} ${a.y}`;
          })(e, t, a, ia)
        : `M ${e.x} ${e.y} L ${a.x} ${a.y}`;
}
function ma(e, t, a, s, r) {
    if (a.top !== s.top && a.left !== s.left) return la.includes(r) ? { x: e.x, y: t.y } : { x: t.x, y: e.y };
}
const ua = new (class {
    getElementMetrics(e) {
        const { width: t, height: a } = e.getBoundingClientRect();
        return e instanceof HTMLDivElement
            ? { left: e.offsetLeft, top: e.offsetTop, width: t, height: a, gearIndent: 0 }
            : { left: e.offsetLeft, top: e.offsetTop, width: t, height: a, gearIndent: e.gearIndent };
    }
    getCenterPoint(e) {
        return { x: e.left, y: e.top };
    }
    getElementConnectionPoints(e) {
        const t = { x: e.left, y: e.top + e.gearIndent + e.height / 2 },
            a = { x: e.left, y: e.top - e.height / 2 },
            s = { x: e.left + e.width / 2, y: e.top };
        return { left: { x: e.left - e.width / 2, y: e.top }, bottom: t, right: s, top: a };
    }
    getConnectionPoints(e, t, a) {
        const [s, r, n] = a.split(/(?=[A-Z])/).map((e) => e.toLowerCase()),
            o = this.getElementMetrics(e),
            i = this.getElementMetrics(t);
        (s && n) || V.log(void 0 !== s || void 0 !== n, 'getConnectionPoints didnt find start and end');
        const c = this.getElementConnectionPoints(o)[s],
            l = this.getElementConnectionPoints(i)[n];
        return { start: c, middle: ma(this.getCenterPoint(o), this.getCenterPoint(i), o, i, s) ?? null, end: l };
    }
})();
const ha = 'Container_2a42bba9',
    ba = r(function ({ nodeRefsMap: e }) {
        const { model: t } = et(),
            [s, r] = o.useState([]),
            n = t.computes.nodes(),
            i = F(() => {
                r(
                    (function (e, t, a, s) {
                        const r = da();
                        return e.flatMap((n, o) => {
                            const i = s.current[o],
                                c = t[o];
                            return i && c
                                ? c.reduce((t, c) => {
                                      const l = e.findIndex((e) => e.id === c.id);
                                      if (r(c.id, n.id) || -1 === l || c.id === a) return t;
                                      const d = s.current[l];
                                      if (!d)
                                          return (
                                              V.log(
                                                  void 0 !== d,
                                                  `NodeRefsMap dosent include targetNode with position ${o}`,
                                              ),
                                              t
                                          );
                                      const _ = _a(ua.getConnectionPoints(i, d, c.lineType));
                                      return (t.push({ path: _, affectedNodes: [[n.id, c.id]], id: Ze() }), t);
                                  }, [])
                                : (V.log(
                                      void 0 !== i || void 0 !== c,
                                      `NodeRefsMap dosent include startNode or paths with position ${o}`,
                                  ),
                                  []);
                        });
                    })(n, t.computes.paths(), t.finalPerk.get().id, e),
                );
            });
        return (
            o.useLayoutEffect(() => {
                const e = new ae(),
                    a = () => {
                        C(() => {
                            i();
                        });
                    };
                return (
                    e.add(
                        l(
                            () => t.computes.paths(),
                            () => {
                                a();
                            },
                            { equals: d.structural, fireImmediately: !0 },
                        ),
                    ),
                    e.add(re(window, 'resize', a)),
                    e.dispose
                );
            }, [i, t.computes]),
            a.jsx('svg', {
                className: ha,
                children: s.map(({ id: e, path: t, affectedNodes: s }) =>
                    a.jsx(oa, { path: t, affectedNodes: s, nodes: n }, `${t}-${e}`),
                ),
            })
        );
    }),
    fa = 'TreeContainer_230b9c81',
    pa = r(function () {
        const e = o.useRef({}),
            { model: t } = et(),
            s = ee(),
            { width: r, height: i } = ot[s.breakpoint.name].container;
        return a.jsxs('div', {
            className: fa,
            style: { '--width': `${r}rem`, '--height': `${i}rem` },
            children: [
                a.jsx(ba, { nodeRefsMap: e }),
                t.computes
                    .nodes()
                    .map(({ categories: t, ...a }, s) =>
                        n.createElement(ta, { ...a, key: `${a.id}-${a.type}`, nodeRefsMap: e, position: s }),
                    ),
            ],
        });
    }),
    [ga, va] = p()(
        ({ observableModel: e }) => {
            const t = { nodes: e.arrayClone('nodes'), ...e.primitives(['researchAvailability']) },
                a = y.shallow(() => q(t.nodes.get(), (e) => e.status === he.Selected)),
                s = y.shallow(() => G(a(), (e, t) => e + t.price, 0)),
                r = y.shallow(() => {
                    if (ne(t.nodes.get(), (e) => e.status === he.Researched))
                        return { tooltip: '', description: 'allResearched' };
                    const e = t.researchAvailability.get();
                    return e === ze.NOT_ENOUGH_EXP || e === ze.AVAILABLE
                        ? { tooltip: 'notEnoughExp', description: 'noSelected' }
                        : { tooltip: e, description: e };
                });
            return { ...t, computes: { selectedPerks: a, totalPrice: s, textParams: r } };
        },
        ({ externalModel: e }) => ({ research: e.createCallbackNoArgs('onResearch') }),
    ),
    ya = { root: 'Info_root_3f9bb731', base: 'Info_2def4bb3', perk: 'Info_perk_6719815a' },
    xa = w.resolve('strings'),
    Na = (e) => xa.readOr(`veh_skill_tree.tooltips.title.${e}`, () => e);
const ja = r(function () {
        const { model: e } = va(),
            t = B({ value: 'extraSmall' }, { medium: { value: 'medium' } }),
            r = e.computes.selectedPerks(),
            n = r.length,
            o = (function (e) {
                let t = '';
                return 1 === e.length
                    ? Na(e[0].localizationName)
                    : (e.forEach(({ localizationName: e }, a, s) => {
                          const r = s.length - 1 === a ? 2 : 0;
                          ((t += xa
                              .pluralOrEmpty('veh_skill_tree.research.tooltip.description', r)
                              .replace(/{{selectedPerks}}/g, Na(e))),
                              a < s.length - 1 && (t += '\n'));
                      }),
                      t);
            })(r),
            i = P({ header: xa.readOrEmpty('veh_skill_tree.research.infoTooltipTitle'), body: o });
        return a.jsxs('div', {
            className: s(ya.base, ya[`base__${t.value}`]),
            children: [
                a.jsx(oe, {
                    path: 'veh_skill_tree.research.selected',
                    params: {
                        selectedItem:
                            1 === n
                                ? a.jsx('span', { className: ya.perk, children: o })
                                : a.jsx(oe, {
                                      className: ya.perk,
                                      path: 'veh_skill_tree.research.perks',
                                      params: { amount: n },
                                  }),
                    },
                }),
                n > 1 && a.jsx(D, { width: 24, height: 24, path: 'skillTree.info_icon', ...i }),
            ],
        });
    }),
    wa = 'Footer_70ef3874',
    ka = 'Footer_research_37b9a55',
    Pa = 'Footer_divider_32042895',
    Ea = 'Footer_content_19cd5319',
    Ba = 'Footer_selected_eb1709fa',
    $a = 'Footer_text_d790ec85',
    Da = 'Footer_currency_408955e2',
    Ra = 'Footer_value_2988e411',
    Ta = 'Footer_base__enough_4308958a',
    Ia = 'Footer_button_7e68acf0',
    Ma = 'Footer_buttonText_881ef4c9',
    Sa = w.resolve('intl'),
    Aa = w.resolve('strings'),
    Ca = r(function () {
        const { model: e, controls: t } = va(),
            r = e.researchAvailability.get(),
            n = e.computes.selectedPerks(),
            o = e.computes.totalPrice(),
            i = r !== ze.NOT_ENOUGH_EXP,
            c = r !== ze.AVAILABLE,
            l = B(
                { buttonSize: ce.small, iconSize: ie.small },
                { medium: { buttonSize: ce.medium, iconSize: ie.medium } },
            ),
            { tooltip: d, description: _ } = e.computes.textParams(),
            m = P({ body: Aa.readOrEmpty(`veh_skill_tree.research.${d}`, 'silent') });
        return a.jsxs('div', {
            className: s(wa, i && Ta),
            children: [
                a.jsx('div', { className: Pa }),
                a.jsx('div', {
                    className: ka,
                    children: n.length
                        ? a.jsxs('div', {
                              className: Ea,
                              children: [
                                  a.jsxs('div', {
                                      className: Ba,
                                      children: [
                                          a.jsx(X, {
                                              reverse: !0,
                                              type: le.tankXP,
                                              enough: i,
                                              size: l.iconSize,
                                              className: Da,
                                              children: a.jsx('div', {
                                                  className: Ra,
                                                  children: Sa.formatNumber('integral', o),
                                              }),
                                          }),
                                          a.jsx(ja, {}),
                                      ],
                                  }),
                                  a.jsx(de, {
                                      ...(c && m),
                                      disabled: c,
                                      size: l.buttonSize,
                                      theme: _e.primary,
                                      onClick: t.research,
                                      classNames: { base: Ia },
                                      children: a.jsx('div', {
                                          className: Ma,
                                          children: Aa.readOrEmpty('veh_skill_tree.research.button.label'),
                                      }),
                                  }),
                              ],
                          })
                        : a.jsx('div', { className: $a, children: Aa.readOrEmpty(`veh_skill_tree.research.${_}`) }),
                }),
            ],
        });
    }),
    Fa = 'EntryPoint_28a00af8',
    za = 'EntryPoint_bg_1daedee',
    La = 'EntryPoint_base__vanity_25e6c411',
    Oa = 'EntryPoint_hover_4ee0996f',
    Ha = 'EntryPoint_glare_c5ebb1f5',
    Ga = w.resolve('views'),
    Va = r(function (e) {
        const t = B({ value: 'small' }, { large: { value: 'big' } }),
            { model: r } = fe(),
            { isProgressionCompleted: n, isPrestigeGlareShown: i } = r.tree.get(),
            c = E(),
            l = me(
                'vanity_entry_point',
                o.useMemo(
                    () => ({
                        isUnlocked: n,
                        resId: Ga.read((e) => e.mono.vehicle_hub.tooltips.vanity_entry_point_tooltip('resId')),
                    }),
                    [n],
                ),
            ),
            d = me(
                'back_to_main_progression',
                o.useMemo(
                    () => ({
                        resId: Ga.read((e) => e.mono.vehicle_hub.tooltips.back_to_main_progression_tooltip('resId')),
                    }),
                    [],
                ),
            ),
            _ = e.vanity ? d : l;
        return a.jsx('div', {
            ..._,
            className: s(Fa, e.vanity && La),
            onClick: function () {
                (_.onClick(), e.onClick());
            },
            onMouseEnter: function (e) {
                (_.onMouseEnter(e), c.play('mouse-enter', { target: 'EntryPoint' }));
            },
            children: a.jsxs('div', {
                className: za,
                children: [
                    !e.vanity &&
                        n &&
                        !i &&
                        a.jsx(jt, {
                            maskPath: `skillTree.entryPoint.progression.${t.value}.vanityProgressionMask`,
                            classNames: Ha,
                        }),
                    a.jsx('div', { className: Oa }),
                ],
            }),
        });
    });
export { Ne as A, rt as E, ga as F, be as M, Se as P, pa as T, Fe as V, Ke as a, Va as b, Ca as c, ge as d, fe as u };
