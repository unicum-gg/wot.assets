var e = Object.defineProperty,
    t = (t, a, s) =>
        ((t, a, s) => (a in t ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[a] = s)))(
            t,
            'symbol' != typeof a ? a + '' : a,
            s,
        );
import {
    j as a,
    f as s,
    s as r,
    r as n,
    R as i,
    o,
    e as c,
    G as l,
    h as d,
    q as _,
    l as m,
    m as u,
    F as h,
    H as b,
    I as f,
} from '../../../../chunks/vendor.js';
import {
    i as p,
    m as g,
    J as v,
    aM as y,
    aN as x,
    aO as N,
    r as j,
    F as w,
    a1 as k,
    b as P,
    d as E,
    aP as B,
    a9 as I,
    aQ as $,
    ae as C,
    aR as S,
    aS as A,
    aT as D,
    aq as M,
    aU as T,
    aV as z,
    aW as F,
    aX as L,
    P as O,
    aY as H,
    Q as G,
    aZ as V,
    a_ as W,
    a$ as q,
    V as Q,
    b0 as U,
    e as X,
    aA as Z,
    b1 as Y,
    aG as J,
    b2 as K,
    ag as ee,
    ay as te,
    a as ae,
    b3 as se,
    a5 as re,
    b4 as ne,
    s as ie,
    b5 as oe,
    B as ce,
    t as le,
    M as de,
    b6 as _e,
    aC as me,
    o as ue,
    h as he,
    k as be,
    l as fe,
    U as pe,
} from '../../../../chunks/lib.js';
const [ge, ve] = p()(
    ({ observableModel: e }) => ({
        ...e.primitives(['prestigeLevel']),
        vehicleInfo: e.object('vehicleInfo'),
        rewards: e.transform((e) => g(e, (e) => e), 'rewards'),
    }),
    ({ externalModel: e }) => ({ open: e.createCallbackNoArgs('onOpen'), close: e.createCallbackNoArgs('onClose') }),
);
var ye = ((e) => (
    (e.Available = 'available'),
    (e.Blocked = 'blocked'),
    (e.Progress = 'progress'),
    (e.Achieved = 'achieved'),
    e
))(ye || {});
const [xe, Ne] = p()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['prestigeState']),
                    prestigeEmblem: e.object('prestigeEmblem'),
                    rewards: e.transform(
                        (e) =>
                            g(
                                e,
                                ({
                                    level: e,
                                    title: t,
                                    subtitle: a,
                                    name: s,
                                    icon: r,
                                    state: n,
                                    hasPreview: i,
                                    rarity: o,
                                }) => ({
                                    level: e,
                                    title: t,
                                    subtitle: a,
                                    name: s,
                                    icon: r,
                                    state: n,
                                    hasPreview: i,
                                    rarity: o,
                                }),
                            ),
                        'rewards',
                    ),
                },
                a = v.shallow(() => !y(t.rewards.get(), (e) => e.state !== ye.Achieved));
            return { ...t, computes: { allResearched: a } };
        },
        ({ externalModel: e }) => ({ openSelectedPreview: e.createCallback((e) => ({ level: e }), 'onPreview') }),
    ),
    je = new x(window),
    we = (e, t) => {
        const { name: a, icon: s } = e,
            r = N(e, t);
        if (!je.has(r))
            switch (a) {
                case 'attachment':
                    return N({ name: a, icon: 'attachment' }, t);
                case 'customizations':
                    return N({ name: a, icon: 'style' }, t);
            }
        return r;
    };
function ke({ subtitle: e, rarity: t, ...s }) {
    const r = j.resolve('strings');
    return a.jsx('div', {
        ...s,
        children: t
            ? a.jsx(w, {
                  text: r.readOrEmpty('veh_skill_tree.rewardScreen.rewardName'),
                  upgradeLegacy: !0,
                  params: { rarity: r.readOrEmpty(`vehicle_customization.customization.rarity.${t}`), rewardName: e },
              })
            : a.jsx(a.Fragment, { children: e }),
    });
}
const Pe = {
        root: 'Emblem_root_9b4d607c',
        base: 'Emblem_90452419',
        base__available: 'Emblem_base__available_9b4d607c',
        base__achieved: 'Emblem_base__achieved_4f63778f',
        base__progress: 'Emblem_base__progress_347071b5',
        level: 'Emblem_level_23acdd81',
    },
    Ee = function ({ level: e, state: t }) {
        const r = j.resolve('strings'),
            n = k({ body: r.readOrEmpty('veh_skill_tree.vanity.reward.level.tooltip') });
        return a.jsx('div', {
            className: s(Pe.base, Pe[`base__${t}`]),
            ...n,
            children: a.jsx('div', { className: Pe.level, children: e }),
        });
    },
    Be = {
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
    Ie = r(function ({ name: e, icon: t, level: r, title: n, subtitle: i, state: o, hasPreview: c, rarity: l }) {
        const { controls: d } = Ne(),
            _ = P(),
            m = E(
                { size: B.S232x174, statTrackerSize: B.S180x135 },
                {
                    medium: { size: B.S296x222, statTrackerSize: B.S232x174 },
                    large: { size: B.S400x300, statTrackerSize: B.S296x222 },
                },
            ),
            u = 'statTracker' === e ? m.statTrackerSize : m.size,
            h = { contentId: R.views.mono.vehicle_hub.tooltips.prestige_reward_tooltip('resId'), args: { level: r } };
        return a.jsxs('div', {
            className: s(Be.base, Be[`base__${o}`]),
            children: [
                o === ye.Progress &&
                    a.jsx(I, {
                        path: 'skillTree.prestige.rays.small.rays',
                        width: 320,
                        height: 474,
                        adaptive: {
                            large: { width: 405, height: 600, path: 'skillTree.prestige.rays.big.rays' },
                            extraLarge: { width: 460, height: 682 },
                        },
                        className: Be.background,
                    }),
                a.jsx('div', { className: Be.emblem, children: a.jsx(Ee, { level: r, state: o }) }),
                a.jsx('div', {
                    className: Be.reward,
                    children: a.jsx($, {
                        image: we({ name: e, icon: t }, u),
                        name: t,
                        size: u,
                        classNames: { image: Be.image, overlay: Be.overlay },
                        tooltipArgs: h,
                        special: 'attachment' === e ? l : void 0,
                    }),
                }),
                a.jsx('div', {
                    className: s(Be.container, c && Be.container__show),
                    children: a.jsx('div', {
                        className: Be.preview,
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
                    className: Be.textContainer,
                    children: [
                        a.jsx('div', { className: Be.rewardName, children: n }),
                        n && i && a.jsx(ke, { className: Be.rewardType, subtitle: i, rarity: l }),
                    ],
                }),
                a.jsx('div', {
                    className: s(Be.achieved, o === ye.Achieved && Be.achieved__show),
                    children: a.jsx('div', { className: Be.check }),
                }),
            ],
        });
    }),
    Re = {
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
    $e = C('Wrapper', Re.wrapper),
    Ce = C('Element', Re.element),
    Se = 'both',
    Ae = 'left',
    De = 'right',
    Me = 'none';
function Te({ elements: e }) {
    const { api: t } = A(),
        { animationScroll: r, applyScroll: o } = t,
        c = D(t, L.horizontal),
        [l, d] = n.useState();
    n.useEffect(
        () =>
            M(() => {
                'idle' === c.type && r.scrollPosition.idle && o(r.scrollPosition.get());
            }),
        [r.scrollPosition, c, o],
    );
    const _ = T((e) => {
        const a = (null == e ? void 0 : e.value.scrollPosition) || r.scrollPosition.goal,
            s = t.getContainerSize() ?? 0,
            n = t.getWrapperSize() ?? 0,
            i = t.getBounds()[1];
        d(n >= s ? Me : a <= 30 ? De : a >= i - 30 ? Ae : Se);
    });
    return (
        i.useLayoutEffect(() => {
            function e() {
                M(() => {
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
        a.jsxs($e, {
            children: [
                a.jsx(z, {
                    classNames: {
                        wrapper: s(Re.scrollWrapper, Re[`scrollWrapper__${l}`]),
                        content: s(Re.content, Re.content__horizontal),
                    },
                    children: g(e, (e, t) => a.jsx(Ce, { children: e }, t)),
                }),
                a.jsx(F, { classNames: { base: Re.horizontalBar } }),
            ],
        })
    );
}
r(function () {
    const { model: e } = Ne(),
        t = e.rewards.get();
    return a.jsx(S, { children: a.jsx(Te, { elements: t.map((e) => a.jsx(Ie, { ...e }, e.level)) }) });
});
var ze = ((e) => ((e.Available = 'available'), (e.Completed = 'completed'), (e.Disabled = 'disabled'), e))(ze || {});
const Fe = {
    root: 'Vanity_root_267393fa',
    base: 'Vanity_289eaebe',
    background: 'Vanity_background_b38f23a6',
    title: 'Vanity_title_24438ae5',
    base__disabled: 'Vanity_base__disabled_267393fa',
    subtitle: 'Vanity_subtitle_7a54555a',
    base__completed: 'Vanity_base__completed_267393fa',
    emblem: 'Vanity_emblem_bbc7150',
    disabledEmblem: 'Vanity_disabledEmblem_a6f7bbca',
};
r(function () {
    const { model: e } = Ne(),
        t = j.resolve('strings'),
        r = e.rewards.get().length > 0 && e.computes.allResearched(),
        n = e.prestigeEmblem.get(),
        i = e.prestigeState.get() ? e.prestigeState.get() : ze.Disabled,
        o = r
            ? t.readOrEmpty('veh_skill_tree.vanity.completed.subtitle')
            : t.readOrEmpty(`veh_skill_tree.vanity.${i}.subtitle`),
        c = k({ body: t.readOrEmpty(`veh_skill_tree.vanity.${i}.tooltip`) }),
        l = E({ size: O.sizes.sm }, { medium: { size: O.sizes.md } });
    return a.jsxs('div', {
        className: s(Fe.base, Fe[`base__${i}`], r && Fe.base__completed),
        children: [
            r &&
                a.jsx(I, {
                    path: 'skillTree.prestige.vanity_bg.small.vanity_bg',
                    width: 450,
                    height: 120,
                    adaptive: {
                        medium: { width: 530, height: 140, path: 'skillTree.prestige.vanity_bg.big.vanity_bg' },
                    },
                    className: Fe.background,
                }),
            a.jsxs('div', {
                className: Fe.description,
                children: [
                    a.jsx('div', { className: Fe.title, children: t.readOrEmpty('veh_skill_tree.vanity.title') }),
                    a.jsx('div', { className: Fe.subtitle, children: o }),
                ],
            }),
            a.jsx('div', {
                className: Fe.emblem,
                ...c,
                children:
                    i === ze.Disabled
                        ? a.jsx('div', { className: Fe.disabledEmblem })
                        : a.jsx(O, { level: n.level, grade: n.grade ?? 1, type: n.type ?? 'prestige', size: l.size }),
            }),
        ],
    });
});
var Le = ((e) => ((e.Researched = 'researched'), (e.Selected = 'selected'), (e.Default = 'default'), e))(Le || {}),
    Oe = ((e) => (
        (e.Major = 'major'),
        (e.Special = 'special'),
        (e.Final = 'final'),
        (e.Common = 'common'),
        (e.Ghost = 'ghost'),
        e
    ))(Oe || {}),
    He = ((e) => (
        (e.NOT_IN_INVENTORY = 'notInInventory'),
        (e.NOT_ENOUGH_EXP = 'notEnoughExp'),
        (e.IN_BATTLE = 'inBattle'),
        (e.IN_FORMATION = 'inFormation'),
        (e.NEEDS_REPAIR = 'needsRepair'),
        (e.AVAILABLE = 'researchAvailable'),
        (e.EMERGENCY_MODE_ENABLED = 'emergencyModeEnabled'),
        (e.RESEARCH_IN_PROGRESS = 'researchInProgress'),
        e
    ))(He || {});
const Ge = ['right', 'left'],
    Ve = { right: 'x', left: 'x', bottom: 'y', top: 'y' },
    We = { x: 'x', y: 'y' },
    qe = { right: 'left', left: 'right', top: 'bottom', bottom: 'top' };
function Qe(e, t) {
    var a;
    return `${e}To${(null == (a = t[0]) ? void 0 : a.toUpperCase()) + t.slice(1)}`;
}
function Ue(e, t) {
    const a = (function (e, t) {
            return e.map(([e, a]) => {
                var s, r;
                const n = null == (s = t.find((t) => t.id === e)) ? void 0 : s.status,
                    i = null == (r = t.find((e) => e.id === a)) ? void 0 : r.status;
                return (
                    (n && i) ||
                        G.log(
                            void 0 !== n || void 0 !== i,
                            'getStatusesFromNode didnt find firstStatus or secondStatus',
                        ),
                    [n, i]
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
                return (a === Le.Researched && s === Le.Selected) || (a === Le.Selected && s === Le.Researched)
                    ? Le.Selected
                    : Le.Default;
            })(e),
        );
    return s.includes(Le.Researched) ? Le.Researched : s.includes(Le.Selected) ? Le.Selected : Le.Default;
}
function Xe(e, t, a = []) {
    return a.reduce((a, s) => (e.some((e) => e.targetNodeId === s.id) && a.push([t, s.id]), a), []);
}
function Ze(e, t) {
    return e
        .filter((e) => t.includes(e.id))
        .sort((e, t) => e.x - t.x)
        .reduce((e, t, a, s) => {
            if (0 === a) return ((e[t.id] = 0), e);
            const r = s[a - 1],
                n = e[r.id];
            return (
                G(void 0 !== n, 'prevPerk was not added to animationQueues'),
                t.x === r.x ? (e[t.id] = n) : (e[t.id] = n + 1),
                e
            );
        }, {});
}
function Ye(e) {
    return e.reduce((e, t, a) => ({ ...e, [t]: a }), {});
}
function Je(e, t) {
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
function Ke() {
    return Math.round(1e3 * Math.random() + Date.now());
}
class et {
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
                        G.log(void 0 !== t || void 0 !== s, 'parseLineDirection didnt find startPoint and endPoint'),
                    { startPoint: t, endPoint: s }
                );
            })(e),
            r = H(this.nodes, (e, a, s) => (a.id === t && ((e.node = a), (e.position = s)), e), {});
        if (!r.node) throw new Error(`Node with id ${t} not found`);
        const { node: n, position: i } = r;
        return { matchItem: { targetNodeId: t, x: n.x, y: n.y, position: i, endPoint: s }, startPoint: a };
    }
    buildTraversalPath(e, t) {
        return t.map((a, s) => {
            const r = e.reduce(
                (e, r) => (
                    this.validateNodeByAxis(r, a, s, t) &&
                        e.push({ id: r.targetNodeId, lineType: Qe(qe[r.endPoint], r.endPoint) }),
                    e
                ),
                [],
            );
            return t.length > 1 && s > 0
                ? [...r, { id: t[s - 1].id, lineType: Qe(qe[this.axisDirection], this.axisDirection) }]
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
            V(e, ({ lineType: e, id: s }) => {
                const { startPoint: r, matchItem: n } = this.extractNodeConnectionInfo(e, s);
                a.has(r) ? (a.get(r).push(n), t.set(r, a.get(r))) : a.set(r, [n]);
            }),
            Array.from(t)
        );
    }
    getEffectedNodes(e, t, a, s) {
        return a.reduce(
            (r, n, i) => (
                0 === i && s && r.push(...Xe(a, n.targetNodeId, this.paths[n.position])),
                n[e ? We.x : We.y] >= t && r.push(...Xe(a, n.targetNodeId, this.paths[n.position])),
                r
            ),
            [],
        );
    }
    createNodes(e, t) {
        const a = [t, ...e],
            s = Ge.includes(this.axisDirection),
            r = s ? We.x : We.y,
            n = s ? t.y : t.x,
            i = (function (e, t, a) {
                const s = t === We.x ? We.y : We.x;
                return e.reduce((e, r) => (r[s] !== a && e.push(r[t]), e), []);
            })(e, We[r], n),
            o = [...new Set(i)].map((e, t) => {
                const i = 0 === t,
                    o = {
                        id: Ke(),
                        x: 0,
                        y: 0,
                        isHintRequired: !1,
                        status: Le.Default,
                        iconName: '',
                        price: 0,
                        type: Oe.Ghost,
                        localizationName: '',
                        categories: [],
                        effectedNodes: this.getEffectedNodes(s, e, a, i),
                        vehicleName: '',
                    };
                return ((o[r] = e), (o[s ? We.y : We.x] = n), o);
            });
        (this.ghostNodes.push(...o), this.createPaths(a, o));
    }
    filterPathsByTraversalList(e) {
        this.paths = H(
            this.paths,
            (t, a, s) => {
                if (e.find(({ position: e }) => e === s)) {
                    const s = W(a, (t) => !e.some((e) => e.targetNodeId === t.id));
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
        const n = Ve[this.axisDirection];
        return a > 0 && a < r - 1 ? t[n] === e[n] : a === r - 1 ? e[n] >= t[n] : t[n] >= e[n];
    }
}
const tt = [He.IN_BATTLE, He.IN_FORMATION, He.NEEDS_REPAIR],
    [at, st] = p()(
        ({ observableModel: e, cleanup: t }) => {
            const a = {
                    ...e.primitives(['rootNodeId', 'rootNodeUiId', 'lockedTree', 'researchAvailability']),
                    researchedPerks: e.arrayClone('researchedPerks'),
                    finalPerk: e.transform(
                        (e) =>
                            (function (e) {
                                return H(
                                    e,
                                    (e, { type: t, status: a, id: s }) => (
                                        t === Oe.Final && ((e.id = s), (e.researched = a === Le.Researched)),
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
                    newNodes: o.box([]),
                    transformedPaths: o.box([]),
                },
                r = v.shallow(() => (0 === s.newNodes.get().length ? s.currentNodes.get() : n())),
                n = v.shallow(() => {
                    const e = s.currentNodes.get(),
                        t = s.newNodes.get().map(({ effectedNodes: t, ...a }) => ({ ...a, status: Ue(t, e) }));
                    return [...s.currentNodes.get(), ...t];
                }),
                i = v.shallow(() => s.transformedPaths.get().map((e) => e.map((e) => ({ ...e })))),
                _ = v.shallow(() => ({
                    researched: H(
                        s.currentNodes.get(),
                        (e, t) => (t.status === Le.Researched && t.type !== Oe.Final && e++, e),
                        0,
                    ),
                    total: s.currentNodes.get().length - 1,
                })),
                m = v.primitive((e) => {
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
                            t = new et(s.currentNodes.get(), e);
                        (e.forEach((e, a) => {
                            t.updateTree(t.findMatches(e), a);
                        }),
                            u(t.newNodes, t.updatedPaths));
                    },
                    { equals: d.structural, fireImmediately: !0 },
                ),
            );
            const h = v.structural((e) => {
                    const t = s.newNodes.get(),
                        r = s.currentNodes.get(),
                        n = a.finalPerk.get().id;
                    return e.includes(n)
                        ? { finalPerkId: n, animationQueue: Je(Ze(r, e), t) }
                        : { finalPerkId: n, animationQueue: Je(Ye(e), t) };
                }),
                b = v.primitive(() => tt.includes(a.researchAvailability.get()));
            return {
                ...a,
                computes: {
                    perksInfo: _,
                    nodes: r,
                    paths: i,
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
    rt = 'EntryPointLine_f5426a98',
    nt = 'EntryPointLine_lock_e27404c6',
    it = 'EntryPointLine_base__locked_d883e9db';
r(function () {
    const { model: e } = st();
    return a.jsx('div', {
        className: s(rt, !e.finalPerk.get().researched && it),
        children: a.jsx('div', { className: nt }),
    });
});
const ot = {
        small: { width: 866, height: 480, cell: 7 },
        medium: { width: 975, height: 540, cell: 7.5 },
        large: { width: 1300, height: 720, cell: 10 },
        extraLarge: { width: 1733, height: 960, cell: 12 },
    },
    ct = {
        [q.extraSmall]: { cell: ot.small.cell, container: ot.small },
        [q.small]: { cell: ot.small.cell, container: ot.small },
        [q.medium]: { cell: ot.medium.cell, container: ot.medium },
        [q.large]: { cell: ot.large.cell, container: ot.large },
        [q.extraLarge]: { cell: ot.extraLarge.cell, container: ot.extraLarge },
    },
    lt = {
        root: 'ResearchedAnimation_root_6660d527',
        video: 'ResearchedAnimation_video_a2258a9e',
        video__major: 'ResearchedAnimation_video__major_6660d527',
        video__final: 'ResearchedAnimation_video__final_d43c2114',
    },
    dt = j.resolve('videos');
function _t(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
const mt = r(function ({ type: e, runAnimation: t, id: r }) {
        const { model: o, controls: c } = st(),
            l = i.useRef(null),
            d = i.useRef({ soundTarget: '', src: '' }),
            [m, u] = n.useState(!1),
            h = P(),
            b = n.useCallback(
                (e) => {
                    e.currentTime >= e.duration - 1.3 &&
                        u((e) => (!1 === e && c.finalNodeResearchAnimationFinished(), !0));
                },
                [c],
            );
        return (
            i.useLayoutEffect(
                () =>
                    _(() => {
                        const t = o.computes.amountResearchedPerks(r);
                        t > 0 &&
                            (d.current = (function (e, t) {
                                if (e === Oe.Final)
                                    return {
                                        soundTarget: 'researchFinalPerk',
                                        src: dt.readOrEmpty('skillTree.perks.final.standard'),
                                    };
                                const a = 1 === t ? 'single' : 'chain';
                                return e === Oe.Major
                                    ? {
                                          soundTarget: `research${_t(a)}LargePerk`,
                                          src: dt.readOrEmpty(`skillTree.perks.${e}.${a}`),
                                      }
                                    : {
                                          soundTarget: `research${_t(a)}SmallPerk`,
                                          src: dt.readOrEmpty(`skillTree.perks.${e}.${a}`),
                                      };
                            })(e, t));
                    }),
                [r, o.computes, e],
            ),
            i.useEffect(() => {
                const a = l.current;
                if (a)
                    return (
                        t &&
                            (a.domRef.load(),
                            a.play(),
                            h.play('click', { target: d.current.soundTarget }),
                            e === Oe.Final && a.onChangeTime(b)),
                        () => {
                            a.cleanup();
                        }
                    );
            }, [t, h, e, b]),
            t ? a.jsx(Q, { src: d.current.src, className: s(lt.video, lt[`video__${e}`]), ref: l }) : null
        );
    }),
    ut = {
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
    ht = {
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
    bt = { common: ut, special: ut, ghost: ut, major: ht, final: ht };
function ft(e) {
    const t = bt[e.type];
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
const pt = {
    root: 'Icon_root_55a8ab20',
    base: 'Icon_1ff370a4',
    icon: 'Icon_4a7e2c0e',
    base__selected: 'Icon_base__selected_55a8ab20',
    base__researched: 'Icon_base__researched_55a8ab20',
    base__animateResearched: 'Icon_base__animateResearched_55a8ab20',
    glow: 'Icon_glow_5d4d69c5',
    base__default: 'Icon_base__default_55a8ab20',
};
function gt({ status: e, iconName: t, className: r, type: n, transitionDelay: i, classNames: o }) {
    const { folderSize: c } = E(
        { folderSize: 'small' },
        { large: { folderSize: 'large' }, extraLarge: { folderSize: 'large' } },
    );
    return a.jsxs('div', {
        className: s(pt.base, pt[`base__${e}`], r),
        style: { '--transitionDelay': `${i}ms` },
        children: [
            a.jsx('div', { className: pt.glow }),
            a.jsx('div', {
                className: s(pt.icon, pt[`icon__${n}`], null == o ? void 0 : o.icon),
                style: { backgroundImage: `url(R.images.gui.maps.icons.skillTree.tree.perks.${n}.skills.${c}.${t})` },
            }),
        ],
    });
}
const vt = {
    root: 'Price_root_29f8d762',
    base: 'Price_e2a305d1',
    base__researched: 'Price_base__researched_16917da8',
    base__animateResearched: 'Price_base__animateResearched_a0a6912a',
    value: 'Price_value_9290e627',
    base__default: 'Price_base__default_29f8d762',
    icon: 'Price_icon_aed4fc8a',
};
function yt({ value: e, status: t, transitionDelay: r, className: n }) {
    const i = j.resolve('intl');
    return a.jsx('div', {
        className: s(vt.base, vt[`base__${t}`], n),
        style: { '--transitionDelay': `${r}ms` },
        children: a.jsx(U, {
            type: U.types.tankXP,
            size: U.sizes.extraSmall,
            reverse: !0,
            classNames: { icon: vt.icon },
            children: a.jsx('div', { className: vt.value, children: i.formatNumber('integral', e) }),
        }),
    });
}
const xt = {
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
function Nt({ status: e, className: t, classNames: r, type: n, transitionDelay: i }) {
    return a.jsxs('div', {
        className: s(
            xt.base,
            xt[`base__${e}`],
            xt[`base__${n}`],
            xt['base__' + (0 === i ? 'notDelay' : 'withDelay')],
            t,
        ),
        style: { '--transitionDelay': `${i}ms` },
        children: [
            a.jsx('div', { className: s(xt.circle, null == r ? void 0 : r.circle) }),
            a.jsx('div', { className: xt.segmentTop }),
            a.jsx('div', { className: xt.segmentRight }),
            a.jsx('div', { className: xt.segmentBottom }),
            a.jsx('div', { className: xt.segmentLeft }),
        ],
    });
}
const jt = { base: 'Glare_a09df11', glare: 'Glare_ed61dd83' },
    wt = j.resolve('images');
function kt({
    startCoords: e = -55,
    endCoords: t = 65,
    rotation: r = -45,
    maskPath: n,
    classNames: i,
    pointAnimation: o,
    startAnimation: c,
}) {
    const [l] = m(
        () => ({
            from: c ?? { x: `${e}rem`, y: `${e}rem`, rotateZ: `${r}deg`, opacity: 0 },
            to: o ?? { x: `${t}rem`, y: `${t}rem`, rotateZ: `${r}deg`, opacity: 1 },
            delay: 1500,
            loop: !0,
            config: { duration: 1500, easing: X.easeInQuint },
        }),
        [],
    );
    return a.jsx('div', {
        className: jt.base,
        style: { maskImage: `url(${wt.readOrEmpty(n)})` },
        children: a.jsx(u.div, { className: s(jt.glare, i), style: l }),
    });
}
const Pt = 'Glare_95e181ec',
    Et = 'Glare_1be1be9',
    Bt = { x: '-55rem', y: '-55rem', rotateZ: '-45deg', opacity: 0 },
    It = [
        { ...Bt, opacity: 1 },
        { opacity: 1, x: '45rem', y: '45rem', rotateZ: '-45deg' },
    ];
const Rt = 'Points_ebbc956c',
    $t = 'Points_arrowContainer_2bd78abc',
    Ct = 'Points_arrow_cd1850ae',
    St = 'Points_arrow__top_2e330546',
    At = 'Points_arrow__right_fa74c47',
    Dt = 'Points_arrow__bottom_1b669f6e',
    Mt = 'Points_arrow__left_1453abe0',
    Tt = 'Points_outsideGlow_8ec52358',
    zt = 'Points_insideGlow_ec6f3f05',
    Ft = 'Wrapper_3f1ea42a',
    Lt = u(({ style: e }) =>
        a.jsxs(u.div, {
            className: Rt,
            style: e,
            children: [
                a.jsx('div', { className: Tt }),
                a.jsxs('div', {
                    className: $t,
                    children: [
                        a.jsx('div', { className: s(Ct, St) }),
                        a.jsx('div', { className: s(Ct, At) }),
                        a.jsx('div', { className: s(Ct, Dt) }),
                        a.jsx('div', { className: s(Ct, Mt) }),
                    ],
                }),
                a.jsx('div', { className: zt }),
            ],
        }),
    ),
    Ot = u(function ({ style: e }) {
        const t = E({ value: 'small' }, { large: { value: 'large' } });
        return a.jsx(u.div, {
            className: Pt,
            style: e,
            children: a.jsx(kt, {
                maskPath: `skillTree.tree.perks.special.skills.${t.value}.mask`,
                classNames: Et,
                pointAnimation: It,
                startAnimation: Bt,
            }),
        });
    });
function Ht({ children: e, showHint: t, type: s }) {
    const r = h(t, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: { duration: 0 } });
    return a.jsxs('div', {
        className: Ft,
        children: [
            r(
                (e, t) =>
                    t &&
                    (() => {
                        switch (s) {
                            case Oe.Common:
                                return a.jsx(Lt, { style: e });
                            case Oe.Special:
                                return a.jsx(Ot, { style: e });
                            default:
                                console.error(`There is no hint for type ${s}`);
                        }
                    })(),
            ),
            e(s === Oe.Common && t),
        ],
    });
}
const Gt = {
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
    Vt = i.forwardRef(function (e, t) {
        const r = Z({ contentId: R.views.mono.vehicle_hub.tooltips.perk_tooltip('resId'), args: { nodeID: e.id } });
        const n = i.useRef(null),
            o = i.useRef(null);
        return (
            i.useImperativeHandle(
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
                    })(n, o),
                [],
            ),
            a.jsxs('div', {
                ...r,
                className: s(
                    Gt.base,
                    Gt[`base__${e.type}`],
                    Gt[`base__${e.status}`],
                    Gt[`base__${e.state}`],
                    e.enableHover && Gt.base__enableHover,
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
                    a.jsx(Ht, {
                        showHint: e.showHint,
                        type: e.type,
                        children: (t) =>
                            a.jsxs('div', {
                                className: Gt.container,
                                children: [
                                    a.jsx('div', { className: Gt.mainLayer }),
                                    a.jsx(Nt, {
                                        type: e.type,
                                        status: e.status,
                                        classNames: { circle: Gt.circle },
                                        transitionDelay: e.transitionDelay,
                                    }),
                                    a.jsx(ft, {
                                        type: e.type,
                                        status: e.status,
                                        className: Gt.border,
                                        transitionDelay: e.transitionDelay,
                                        showHintAnimation: t,
                                    }),
                                    a.jsx('div', { className: Gt.texture }),
                                    a.jsx(gt, {
                                        iconName: e.iconName,
                                        status: e.status,
                                        className: Gt.iconBase,
                                        type: e.type,
                                        classNames: { icon: Gt.icon },
                                        transitionDelay: e.transitionDelay,
                                    }),
                                ],
                            }),
                    }),
                    e.root && a.jsx('div', { className: Gt.blurCircle }),
                    a.jsx('div', { className: Gt.glow }),
                    e.showGear &&
                        a.jsx('div', {
                            className: Gt.gearContainer,
                            ref: o,
                            children: a.jsx('div', { className: Gt.gearIcon }),
                        }),
                    a.jsx(yt, {
                        value: e.price,
                        className: s(Gt.price, e.root && Gt.price__root),
                        status: e.status,
                        transitionDelay: e.transitionDelay,
                    }),
                    a.jsx(mt, { type: e.type, runAnimation: e.status === aa.AnimateResearched, id: e.id }),
                ],
            })
        );
    }),
    Wt = {
        root: 'Ghost_root_eea20f5',
        base: 'Ghost_3e19eb13',
        base__selected: 'Ghost_base__selected_f90be090',
        base__researched: 'Ghost_base__researched_eea20f5',
        base__animateResearched: 'Ghost_base__animateResearched_a7c4bb12',
    },
    qt = n.forwardRef(function ({ x: e, y: t, status: r }, n) {
        return a.jsx('div', {
            className: s(Wt.base, Wt[`base__${r}`]),
            style: { '--x': `${e}rem`, '--y': `${t}rem` },
            ref: n,
        });
    }),
    Qt = { singe: 2500, chain: 220 };
function Ut(e, t) {
    const a = e - t;
    return 1 === a ? Qt.singe : a * Qt.chain;
}
const Xt = {
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
    Zt = j.resolve('images'),
    Yt = j.resolve('strings'),
    Jt = r(function ({ children: e, showFinalDecoration: t, status: r, transitionDelay: n, classNames: o }) {
        const { model: c } = st(),
            { researched: l, total: d } = c.computes.perksInfo(),
            _ = (function ({ researched: e, total: t }) {
                const a = Y(),
                    s = J(e) ?? 0,
                    [{ number: r }] = m(
                        () => ({
                            number: e,
                            from: { number: 0 },
                            config: { duration: Ut(e, s), ...b.molasses },
                            immediate: a || e === t,
                        }),
                        [e, t],
                    );
                return r;
            })(i.useMemo(() => ({ researched: l, total: d }), [l, d])),
            { researched: h } = c.finalPerk.get();
        return t
            ? a.jsxs('div', {
                  className: s(Xt.base, Xt[`base__${r}`]),
                  style: { '--transitionDelay': `${n}ms` },
                  children: [
                      e,
                      a.jsxs('div', {
                          className: Xt.container,
                          children: [
                              a.jsx('div', { className: Xt.border }),
                              a.jsx('div', {
                                  className: Xt.starContainer,
                                  children: a.jsx('div', { className: Xt.star }),
                              }),
                              a.jsx('div', { className: s(Xt.glow, null == o ? void 0 : o.glow) }),
                          ],
                      }),
                      a.jsxs('div', {
                          className: s(Xt.counterContainer, l === d && Xt.counterContainer__hide),
                          children: [
                              a.jsx('div', { className: Xt.counterIcon }),
                              a.jsxs('div', {
                                  className: Xt.values,
                                  children: [
                                      a.jsx(u.div, { children: _.to((e) => e.toFixed(0)) }),
                                      Yt.readOrEmpty('common.common.slash'),
                                      d,
                                  ],
                              }),
                          ],
                      }),
                      a.jsx('div', {
                          className: Xt.draftTexture,
                          style: {
                              backgroundImage: `url(${Zt.readOrEmpty('skillTree.tree.' + (h ? 'draftTextureResearched' : 'draftTexture'))})`,
                          },
                      }),
                  ],
              })
            : e;
    }),
    Kt = {
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
    ea = i.forwardRef(function (e, t) {
        const r = Z({ contentId: R.views.mono.vehicle_hub.tooltips.perk_tooltip('resId'), args: { nodeID: e.id } });
        return a.jsx('div', {
            ...r,
            className: s(Kt.base, Kt[`base__${e.type}`], Kt[`base__${e.status}`], e.lockedTree && Kt.base__lockedTree),
            onClick: function () {
                (r.onClick(), e.onClick());
            },
            onMouseEnter: function (t) {
                (r.onMouseEnter(t), e.onMouseEnter());
            },
            ref: t,
            style: { '--x': `${e.x}rem`, '--y': `${e.y}rem`, '--transitionDelay': `${e.transitionDelay}ms` },
            children: a.jsx('div', {
                className: Kt.container,
                children: a.jsxs(Jt, {
                    status: e.status,
                    showFinalDecoration: e.showFinalDecoration,
                    classNames: { glow: Kt.finalGlow },
                    transitionDelay: e.transitionDelay,
                    children: [
                        a.jsx('div', { className: Kt.mainLayer }),
                        a.jsx(Nt, {
                            type: e.type,
                            status: e.status,
                            classNames: { circle: Kt.circle },
                            transitionDelay: e.transitionDelay,
                        }),
                        a.jsx(ft, {
                            type: e.type,
                            status: e.status,
                            className: Kt.border,
                            transitionDelay: e.transitionDelay,
                        }),
                        a.jsx('div', { className: Kt.texture }),
                        a.jsx(gt, {
                            iconName: e.iconName,
                            status: e.status,
                            className: Kt.iconBase,
                            type: e.type,
                            classNames: { icon: Kt.icon },
                            transitionDelay: e.transitionDelay,
                        }),
                        a.jsx(yt, {
                            value: e.price,
                            className: Kt.price,
                            status: e.status,
                            transitionDelay: e.transitionDelay,
                        }),
                        !e.showFinalDecoration && a.jsx('div', { className: Kt.glow }),
                        a.jsx(mt, { type: e.type, runAnimation: e.status === aa.AnimateResearched, id: e.id }),
                    ],
                }),
            }),
        });
    });
function ta(e, t, a, s) {
    return e
        ? { enableHover: !0, showHint: !1, state: 'lockedTree' }
        : t
          ? { enableHover: !a, showHint: s && a, state: 'lockedVehicle' }
          : { enableHover: !a, showHint: a, state: 'none' };
}
const aa = { ...Le, AnimateResearched: 'animateResearched' },
    sa = r(function (e) {
        const { controls: t, model: s } = st(),
            r = s.lockedTree.get(),
            n = s.computes.lockedVehicle(),
            { status: o, transitionDelay: c } = ia(
                e.status,
                i.useMemo(() => [e.id], [e.id]),
                e.vehicleName,
            ),
            l = K(),
            d = P(),
            _ = ct[l.breakpoint.name].cell;
        const m = {
            ...e,
            x: Math.round(e.x * _),
            y: Math.round(e.y * _),
            onClick: function () {
                if (r) return;
                const {
                    soundTarget: a,
                    needsConfirmation: s,
                    needsSelection: i,
                } = (function (e, t, a) {
                    return e !== Le.Researched
                        ? {
                              soundTarget: e === Le.Default ? 'select' : 'deselect',
                              needsConfirmation: !1,
                              needsSelection: !0,
                          }
                        : {
                              soundTarget: a || Oe.Special !== t ? null : 'select',
                              needsConfirmation: !a && Oe.Special === t,
                              needsSelection: !1,
                          };
                })(e.status, e.type, n);
                (s && t.openConfirmWindow(e.id), i && t.selectedPerk(e.id), a && d.play('click', { target: a }));
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
            status: o,
            transitionDelay: c,
            root: s.rootNodeUiId.get() === e.id,
        };
        var u, h;
        switch (e.type) {
            case Oe.Common:
            case Oe.Special:
                return a.jsx(Vt, { ...m, ...ta(r, n, m.isHintRequired, m.root), showGear: e.type === Oe.Special });
            case Oe.Final:
            case Oe.Major:
                return a.jsx(ea, { ...m, showFinalDecoration: e.type === Oe.Final, lockedTree: r });
            case Oe.Ghost:
                return a.jsx(qt, { status: m.status, x: m.x, y: m.y, ref: m.ref });
            default:
                console.error(`There is no node type '${e.type}' registered.`);
        }
    }),
    ra = {
        queue: { initial: 200, common: 150 },
        transition: { chain: 0, single: 1e3, final: 2e3 },
        path: { single: 200 },
    },
    na = {
        queue(e, t, a) {
            const { queue: s, transition: r, path: n } = ra;
            return 1 === a && 'path' === t ? r.single + n.single : 0 === e ? s.initial : e * s.common + s.initial;
        },
        transition(e, t, a) {
            const { transition: s } = ra;
            return t.includes(e) ? s.final : a > 1 ? s.chain : s.single;
        },
    };
function ia(e, t, a, s = 'perk') {
    const [r, n] = i.useState(() => ({ status: e, transitionDelay: 0 })),
        o = i.useRef(a),
        c = ee(),
        { model: l } = st(),
        d = Y();
    return (
        i.useLayoutEffect(() => {
            const r = new te();
            if (!d && o.current === a) {
                if (e === Le.Researched)
                    return (
                        r.add(
                            f(
                                () => l.researchedPerks.get().length > 0,
                                () => {
                                    const e = l.researchedPerks.get(),
                                        { animationQueue: a, finalPerkId: r } = l.computes.animationQueueInfo(e),
                                        i = e.length,
                                        o = na.queue(
                                            (function (e, t) {
                                                const [a, s] = e,
                                                    r = t[a] ?? 0,
                                                    n = t[s] ?? 0;
                                                return Math.max(r, n);
                                            })(t, a),
                                            s,
                                            i,
                                        );
                                    c.run(
                                        () =>
                                            n({
                                                status: aa.AnimateResearched,
                                                transitionDelay: na.transition(r, t, i),
                                            }),
                                        o,
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
        i.useLayoutEffect(() => {
            o.current !== a && ((o.current = a), n({ status: e, transitionDelay: 0 }));
        }, [e, a]),
        r
    );
}
const oa = {
    root: 'Path_root_a3514b92',
    base: 'Path_55a8a7fd',
    base__selected: 'Path_base__selected_78814b1d',
    base__researched: 'Path_base__researched_a3514b92',
    base__animateResearched: 'Path_base__animateResearched_8845b1b0',
};
function ca({ affectedNodes: e, path: t, nodes: r }) {
    const n = ae(),
        { status: o } = ia(
            Ue(e, r),
            i.useMemo(() => e.flat(), [e]),
            (function (e) {
                const t = e[0];
                return (G(void 0 !== t, 'Nodes dont have first element'), t.vehicleName);
            })(r),
            'path',
        );
    return a.jsx('path', { d: t, style: { '--scale': `${n}` }, className: s(oa.base, oa[`base__${o}`]) });
}
const la = 8,
    da = '->',
    _a = ['bottom', 'top'];
function ma() {
    const e = new Set();
    return (t, a) => {
        const { path: s, reversePath: r } = { path: `${(n = a)}${da}${(i = t)}`, reversePath: `${i}${da}${n}` };
        var n, i;
        const o = e.has(s) || e.has(r);
        return (o || e.add(s), o);
    };
}
function ua({ start: e, middle: t, end: a }) {
    return t
        ? (function (e, t, a, s = la) {
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
                  i = (() => {
                      const { x: e, y: n } = r(a, t);
                      return { x: t.x + e * s, y: t.y + n * s };
                  })();
              return `M ${e.x} ${e.y} \n            L ${n.x} ${n.y} \n            C ${t.x} ${t.y} ${t.x} ${t.y} ${i.x} ${i.y} \n            L ${a.x} ${a.y}`;
          })(e, t, a, la)
        : `M ${e.x} ${e.y} L ${a.x} ${a.y}`;
}
function ha(e, t, a, s, r) {
    if (a.top !== s.top && a.left !== s.left) return _a.includes(r) ? { x: e.x, y: t.y } : { x: t.x, y: e.y };
}
const ba = new (class {
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
            i = this.getElementMetrics(e),
            o = this.getElementMetrics(t);
        (s && n) || G.log(void 0 !== s || void 0 !== n, 'getConnectionPoints didnt find start and end');
        const c = this.getElementConnectionPoints(i)[s],
            l = this.getElementConnectionPoints(o)[n];
        return { start: c, middle: ha(this.getCenterPoint(i), this.getCenterPoint(o), i, o, s) ?? null, end: l };
    }
})();
const fa = 'Container_2a42bba9',
    pa = r(function ({ nodeRefsMap: e }) {
        const { model: t } = st(),
            [s, r] = i.useState([]),
            n = t.computes.nodes(),
            o = T(() => {
                r(
                    (function (e, t, a, s) {
                        const r = ma();
                        return e.flatMap((n, i) => {
                            const o = s.current[i],
                                c = t[i];
                            return o && c
                                ? c.reduce((t, c) => {
                                      const l = e.findIndex((e) => e.id === c.id);
                                      if (r(c.id, n.id) || -1 === l || c.id === a) return t;
                                      const d = s.current[l];
                                      if (!d)
                                          return (
                                              G.log(
                                                  void 0 !== d,
                                                  `NodeRefsMap dosent include targetNode with position ${i}`,
                                              ),
                                              t
                                          );
                                      const _ = ua(ba.getConnectionPoints(o, d, c.lineType));
                                      return (t.push({ path: _, affectedNodes: [[n.id, c.id]], id: Ke() }), t);
                                  }, [])
                                : (G.log(
                                      void 0 !== o || void 0 !== c,
                                      `NodeRefsMap dosent include startNode or paths with position ${i}`,
                                  ),
                                  []);
                        });
                    })(n, t.computes.paths(), t.finalPerk.get().id, e),
                );
            });
        return (
            i.useLayoutEffect(() => {
                const e = new te(),
                    a = () => {
                        M(() => {
                            o();
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
                    e.add(se(window, 'resize', a)),
                    e.dispose
                );
            }, [o, t.computes]),
            a.jsx('svg', {
                className: fa,
                children: s.map(({ id: e, path: t, affectedNodes: s }) =>
                    a.jsx(ca, { path: t, affectedNodes: s, nodes: n }, `${t}-${e}`),
                ),
            })
        );
    }),
    ga = 'TreeContainer_230b9c81';
r(function () {
    const e = i.useRef({}),
        { model: t } = st(),
        s = K(),
        { width: r, height: o } = ct[s.breakpoint.name].container;
    return a.jsxs('div', {
        className: ga,
        style: { '--width': `${r}rem`, '--height': `${o}rem` },
        children: [
            a.jsx(pa, { nodeRefsMap: e }),
            t.computes
                .nodes()
                .map(({ categories: t, ...a }, s) =>
                    n.createElement(sa, { ...a, key: `${a.id}-${a.type}`, nodeRefsMap: e, position: s }),
                ),
        ],
    });
});
const [va, ya] = p()(
        ({ observableModel: e }) => {
            const t = { nodes: e.arrayClone('nodes'), ...e.primitives(['researchAvailability']) },
                a = v.shallow(() =>
                    t.nodes
                        .get()
                        .reduce(
                            (e, t) => (
                                t.status === Le.Selected &&
                                    ((e.price += t.price), e.amount++, e.localizationName.push(t.localizationName)),
                                e
                            ),
                            { price: 0, amount: 0, localizationName: [] },
                        ),
                );
            return { ...t, computes: { selectedPerks: a } };
        },
        ({ externalModel: e }) => ({ research: e.createCallbackNoArgs('onResearch') }),
    ),
    xa = {
        root: 'Info_root_3f9bb731',
        base: 'Info_2def4bb3',
        selected: 'Info_selected_3f9bb731',
        perk: 'Info_perk_6719815a',
    },
    Na = j.resolve('strings'),
    ja = (e) => Na.readOr(`veh_skill_tree.tooltips.title.${e}`, () => e);
const wa = r(function () {
        const { model: e } = ya(),
            t = E({ value: 'extraSmall' }, { medium: { value: 'medium' } }),
            { amount: r, localizationName: n } = e.computes.selectedPerks(),
            i = (function (e) {
                let t = '';
                return 1 === e.length
                    ? ja(e[0])
                    : (e.forEach((e, a, s) => {
                          const r = s.length - 1 === a ? 2 : 0;
                          ((t += Na.pluralOrEmpty('veh_skill_tree.footer.tooltip.listSelectedPerks', r).replace(
                              /{{selectedPerks}}/g,
                              ja(e),
                          )),
                              a < s.length - 1 && (t += '\n'));
                      }),
                      t);
            })(n),
            o = k({ header: Na.readOrEmpty('veh_skill_tree.footer.tooltip.header.info'), body: i });
        return a.jsxs('div', {
            className: s(xa.base, xa[`base__${t.value}`]),
            children: [
                a.jsx(re, {
                    path: 'veh_skill_tree.footer.text.selectedItem',
                    params: {
                        selectedItem:
                            1 === r
                                ? a.jsx('span', { className: xa.perk, children: i })
                                : a.jsx(w, {
                                      className: xa.perk,
                                      text: R.strings.veh_skill_tree.footer.text.amountItems(),
                                      params: { amount: r },
                                      split: !0,
                                  }),
                    },
                }),
                r > 1 && a.jsx(I, { width: 24, height: 24, path: 'skillTree.info_icon', ...o }),
            ],
        });
    }),
    ka = {
        root: 'Footer_root_4308958a',
        base: 'Footer_70ef3874',
        research: 'Footer_research_37b9a55',
        divider: 'Footer_divider_32042895',
        content: 'Footer_content_19cd5319',
        selected: 'Footer_selected_eb1709fa',
        text: 'Footer_text_d790ec85',
        currency: 'Footer_currency_408955e2',
        value: 'Footer_value_2988e411',
        base__enough: 'Footer_base__enough_4308958a',
        button: 'Footer_button_7e68acf0',
        buttonContainer: 'Footer_buttonContainer_a9d4232',
        buttonContainer__researchInProgress: 'Footer_buttonContainer__researchInProgress_3c1ec3a0',
        spinner: 'Footer_spinner_5ff51e9a',
        spin: 'Footer_spin_4308958a',
    },
    Pa = j.resolve('intl'),
    Ea = j.resolve('strings');
r(function () {
    const { model: e, controls: t } = ya(),
        r = e.researchAvailability.get(),
        { price: n, amount: i } = e.computes.selectedPerks(),
        o = r !== He.NOT_ENOUGH_EXP,
        c = r !== He.AVAILABLE,
        l = e.nodes.get().every((e) => e.status === Le.Researched) ? 'allResearched' : r,
        d = r === He.RESEARCH_IN_PROGRESS,
        _ = E({ buttonSize: ie.small, iconSize: ne.small }, { medium: { buttonSize: ie.medium, iconSize: ne.medium } }),
        m = k({
            body: Ea.read(`veh_skill_tree.footer.tooltip.body.${r}`),
            header: Ea.read(`veh_skill_tree.footer.tooltip.header.${r}`),
        });
    return a.jsxs('div', {
        className: s(ka.base, o && ka.base__enough),
        children: [
            a.jsx('div', { className: ka.divider }),
            a.jsx('div', {
                className: ka.research,
                children: i
                    ? a.jsxs('div', {
                          className: ka.content,
                          children: [
                              a.jsxs('div', {
                                  className: ka.selected,
                                  children: [
                                      a.jsx(U, {
                                          reverse: !0,
                                          type: oe.tankXP,
                                          enough: o,
                                          size: _.iconSize,
                                          className: ka.currency,
                                          children: a.jsx('div', {
                                              className: ka.value,
                                              children: Pa.formatNumber('integral', n),
                                          }),
                                      }),
                                      a.jsx(wa, {}),
                                  ],
                              }),
                              a.jsx(ce, {
                                  ...(c && m),
                                  disabled: c,
                                  size: _.buttonSize,
                                  theme: d ? le.secondary : le.primary,
                                  onClick: t.research,
                                  classNames: { base: ka.button },
                                  children: a.jsxs('div', {
                                      className: s(ka.buttonContainer, ka[`buttonContainer__${r}`]),
                                      children: [
                                          d && a.jsx('div', { className: ka.spinner }),
                                          Ea.readOrEmpty('veh_skill_tree.footer.button.label'),
                                      ],
                                  }),
                              }),
                          ],
                      })
                    : a.jsx('div', {
                          className: ka.text,
                          children: Ea.readOrEmpty(`veh_skill_tree.footer.description.text.${l}`),
                      }),
            }),
        ],
    });
});
const [Ba, Ia] = p()(({ observableModel: e }) => ({ tree: e.object('tree'), ...e.primitives(['locationId']) }), de),
    Ra = 'EntryPoint_28a00af8',
    $a = 'EntryPoint_bg_1daedee',
    Ca = 'EntryPoint_base__vanity_25e6c411',
    Sa = 'EntryPoint_hover_4ee0996f',
    Aa = 'EntryPoint_glare_c5ebb1f5',
    Da = j.resolve('views');
r(function (e) {
    const t = E({ value: 'small' }, { large: { value: 'big' } }),
        { model: r } = Ia(),
        { isProgressionCompleted: n, isPrestigeGlareShown: o } = r.tree.get(),
        c = P(),
        l = _e(
            'vanity_entry_point',
            i.useMemo(
                () => ({
                    isUnlocked: n,
                    resId: Da.read((e) => e.mono.vehicle_hub.tooltips.vanity_entry_point_tooltip('resId')),
                }),
                [n],
            ),
        ),
        d = _e(
            'back_to_main_progression',
            i.useMemo(
                () => ({
                    resId: Da.read((e) => e.mono.vehicle_hub.tooltips.back_to_main_progression_tooltip('resId')),
                }),
                [],
            ),
        ),
        _ = e.vanity ? d : l;
    return a.jsx('div', {
        ..._,
        className: s(Ra, e.vanity && Ca),
        onClick: function () {
            (_.onClick(), e.onClick());
        },
        onMouseEnter: function (e) {
            (_.onMouseEnter(e), c.play('mouse-enter', { target: 'EntryPoint' }));
        },
        children: a.jsxs('div', {
            className: $a,
            children: [
                !e.vanity &&
                    n &&
                    !o &&
                    a.jsx(kt, {
                        maskPath: `skillTree.entryPoint.progression.${t.value}.vanityProgressionMask`,
                        classNames: Aa,
                    }),
                a.jsx('div', { className: Sa }),
            ],
        }),
    });
});
const Ma = {
    base: 'Award_d432d943',
    title: 'Award_title_6324b0ef',
    subtitle: 'Award_subtitle_1c41966c',
    image: 'Award_image_583ed8fb',
};
function Ta({ icon: e, title: t, name: s, subtitle: r, rarity: n, tooltipId: i, tooltipContentId: o }) {
    const c = E(
        { size: B.S296x222 },
        { medium: { size: B.S400x300 }, large: { size: B.S400x300 }, extraLarge: { size: B.S600x450 } },
    );
    return a.jsxs('div', {
        className: Ma.base,
        children: [
            a.jsx('div', {
                className: Ma.reward,
                children: a.jsx($, {
                    image: we({ name: s, icon: e }, c.size),
                    name: e,
                    size: c.size,
                    classNames: { image: Ma.image, overlay: Ma.overlay },
                    special: 'attachment' === s ? n : void 0,
                    tooltipArgs: { contentId: Number(o), args: { tooltipId: i } },
                }),
            }),
            t && a.jsx('div', { className: Ma.title, children: t }),
            r && a.jsx(ke, { className: Ma.subtitle, subtitle: r, rarity: n }),
        ],
    });
}
const za = { base: 'Content_4e4f81e9' },
    Fa = r(function () {
        const { model: e } = ve(),
            t = e.rewards.get();
        return a.jsx('div', {
            className: za.base,
            children: a.jsx('div', { className: za.rewards, children: t.map((e, t) => a.jsx(Ta, { ...e }, t)) }),
        });
    }),
    La = 'Footer_97a7d8ee',
    Oa = 'Footer_button_5cced810',
    Ha = j.resolve('strings'),
    Ga = r(function () {
        const { controls: e, model: t } = ve(),
            { isBroken: s } = t.vehicleInfo.get(),
            r = E(
                { size: ce.sizes.small },
                {
                    medium: { size: ce.sizes.medium },
                    large: { size: ce.sizes.medium },
                    extraLarge: { size: ce.sizes.medium },
                },
            );
        return a.jsxs('div', {
            className: La,
            children: [
                !s &&
                    a.jsx('div', {
                        className: Oa,
                        children: a.jsx(ce, {
                            theme: ce.themes.primary,
                            size: r.size,
                            onClick: e.open,
                            children: Ha.readOrEmpty('veh_skill_tree.rewardScreen.button.check'),
                        }),
                    }),
                a.jsx('div', {
                    className: Oa,
                    children: a.jsx(ce, {
                        theme: ce.themes.secondary,
                        size: r.size,
                        onClick: e.close,
                        children: Ha.readOrEmpty('veh_skill_tree.rewardScreen.button.accept'),
                    }),
                }),
            ],
        });
    }),
    Va = 'Header_643260c1',
    Wa = 'Header_title_b9bc7c6a',
    qa = 'Header_subtitle_65f475ba',
    Qa = 'Header_vehicleInfo_c5d7893b',
    Ua = j.resolve('strings'),
    Xa = r(function () {
        const { model: e } = ve(),
            { level: t, type: s, name: r, isPremium: n, prestigeLevel: i } = e.vehicleInfo.get();
        G(me(s), `The ${s} is not defined in vehicleType`);
        const o = {
            prestigeLevel: i,
            level: a.jsx(ue.Level, { value: t, className: Qa }),
            type: a.jsx(ue.Type, { type: s, size: ue.Type.sizes.x24x24, className: Qa, premium: n }),
            name: a.jsx(ue.Name, { className: Qa, children: r }),
        };
        return a.jsxs('div', {
            className: Va,
            children: [
                a.jsx('div', { className: Wa, children: Ua.readOrEmpty('veh_skill_tree.rewardScreen.title') }),
                a.jsx('div', {
                    className: qa,
                    children: a.jsx(w, { params: o, text: Ua.readOrEmpty('veh_skill_tree.rewardScreen.subtitle') }),
                }),
            ],
        });
    }),
    Za = 'App_bf8c0b7',
    Ya = 'App_background_373696ad',
    Ja = 'App_body_ee191014',
    Ka = 'App_header_30c7a332',
    es = 'App_footer_5c0f3dbd',
    ts = 'App_highlight_c9710a08',
    as = 'App_ribbon_3e0bc85a',
    ss = r(function () {
        const { controls: e } = ve();
        return (
            he(be.ESCAPE, e.close),
            a.jsxs('div', {
                className: Za,
                children: [
                    a.jsx('div', { className: Ya }),
                    a.jsxs('div', {
                        className: Ja,
                        children: [a.jsx('div', { className: ts }), a.jsx('div', { className: as }), a.jsx(Fa, {})],
                    }),
                    a.jsx('div', { className: Ka, children: a.jsx(Xa, {}) }),
                    a.jsx('div', { className: es, children: a.jsx(Ga, {}) }),
                ],
            })
        );
    });
fe(a.jsx(ge, { children: a.jsx(pe, { children: a.jsx(ss, {}) }) }));
