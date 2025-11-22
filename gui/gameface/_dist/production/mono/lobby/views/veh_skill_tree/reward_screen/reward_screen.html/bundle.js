var e = Object.defineProperty,
    t = (t, s, a) =>
        ((t, s, a) => (s in t ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[s] = a)))(
            t,
            'symbol' != typeof s ? s + '' : s,
            a,
        );
import {
    j as s,
    e as a,
    n as r,
    r as n,
    R as i,
    o,
    f as c,
    q as l,
    h as d,
    s as _,
    l as m,
    m as u,
    p as h,
    t as b,
    w as p,
} from '../../../../chunks/vendor.js';
import {
    i as f,
    m as g,
    e as v,
    j as y,
    I as x,
    l as N,
    r as j,
    F as w,
    c as k,
    o as P,
    u as E,
    p as B,
    q as $,
    R as A,
    v as I,
    w as D,
    x as S,
    y as C,
    z as T,
    A as M,
    C as z,
    D as F,
    E as L,
    P as O,
    G as H,
    f as G,
    H as V,
    J as W,
    K as q,
    h as U,
    L as Q,
    M as X,
    N as Z,
    O as Y,
    Q as J,
    S as K,
    W as ee,
    X as te,
    Y as se,
    Z as ae,
    _ as re,
    $ as ne,
    a0 as ie,
    s as oe,
    a1 as ce,
    B as le,
    t as de,
    a2 as _e,
    a3 as me,
    a4 as ue,
    V as he,
    a as be,
    k as pe,
    b as fe,
    U as ge,
} from '../../../../chunks/lib.js';
const [ve, ye] = f()(
    ({ observableModel: e }) => ({
        ...e.primitives(['prestigeLevel']),
        vehicleInfo: e.object('vehicleInfo'),
        rewards: e.transform((e) => g(e, (e) => e), 'rewards'),
    }),
    ({ externalModel: e }) => ({ open: e.createCallbackNoArgs('onOpen'), close: e.createCallbackNoArgs('onClose') }),
);
var xe = ((e) => (
    (e.Available = 'available'),
    (e.Blocked = 'blocked'),
    (e.Progress = 'progress'),
    (e.Achieved = 'achieved'),
    e
))(xe || {});
const [Ne, je] = f()(
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
                                    subtitle: s,
                                    name: a,
                                    icon: r,
                                    state: n,
                                    hasPreview: i,
                                    rarity: o,
                                }) => ({
                                    level: e,
                                    title: t,
                                    subtitle: s,
                                    name: a,
                                    icon: r,
                                    state: n,
                                    hasPreview: i,
                                    rarity: o,
                                }),
                            ),
                        'rewards',
                    ),
                },
                s = v.shallow(() => !y(t.rewards.get(), (e) => e.state !== xe.Achieved));
            return { ...t, computes: { allResearched: s } };
        },
        ({ externalModel: e }) => ({ openSelectedPreview: e.createCallback((e) => ({ level: e }), 'onPreview') }),
    ),
    we = new x(window),
    ke = (e, t) => {
        const { name: s, icon: a } = e,
            r = N(e, t);
        if (!we.has(r))
            switch (s) {
                case 'attachment':
                    return N({ name: s, icon: 'attachment' }, t);
                case 'customizations':
                    return N({ name: s, icon: 'style' }, t);
            }
        return r;
    };
function Pe({ subtitle: e, rarity: t, ...a }) {
    const r = j.resolve('strings');
    return s.jsx('div', {
        ...a,
        children: t
            ? s.jsx(w, {
                  text: r.readOrEmpty('veh_skill_tree.rewardScreen.rewardName'),
                  upgradeLegacy: !0,
                  params: { rarity: r.readOrEmpty(`vehicle_customization.customization.rarity.${t}`), rewardName: e },
              })
            : s.jsx(s.Fragment, { children: e }),
    });
}
const Ee = {
        root: 'Emblem_root_9b4d607c',
        base: 'Emblem_90452419',
        base__available: 'Emblem_base__available_9b4d607c',
        base__achieved: 'Emblem_base__achieved_4f63778f',
        base__progress: 'Emblem_base__progress_347071b5',
        level: 'Emblem_level_23acdd81',
    },
    Be = function ({ level: e, state: t }) {
        const r = j.resolve('strings'),
            n = k({ body: r.readOrEmpty('veh_skill_tree.vanity.reward.level.tooltip') });
        return s.jsx('div', {
            className: a(Ee.base, Ee[`base__${t}`]),
            ...n,
            children: s.jsx('div', { className: Ee.level, children: e }),
        });
    },
    $e = {
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
    Ae = r(function ({ name: e, icon: t, level: r, title: n, subtitle: i, state: o, hasPreview: c, rarity: l }) {
        const { controls: d } = je(),
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
        return s.jsxs('div', {
            className: a($e.base, $e[`base__${o}`]),
            children: [
                o === xe.Progress &&
                    s.jsx($, {
                        path: 'skillTree.prestige.rays.small.rays',
                        width: 320,
                        height: 474,
                        adaptive: {
                            large: { width: 405, height: 600, path: 'skillTree.prestige.rays.big.rays' },
                            extraLarge: { width: 460, height: 682 },
                        },
                        className: $e.background,
                    }),
                s.jsx('div', { className: $e.emblem, children: s.jsx(Be, { level: r, state: o }) }),
                s.jsx('div', {
                    className: $e.reward,
                    children: s.jsx(A, {
                        image: ke({ name: e, icon: t }, u),
                        name: t,
                        size: u,
                        classNames: { image: $e.image, overlay: $e.overlay },
                        tooltipArgs: h,
                        special: 'attachment' === e ? l : void 0,
                    }),
                }),
                s.jsx('div', {
                    className: a($e.container, c && $e.container__show),
                    children: s.jsx('div', {
                        className: $e.preview,
                        onClick: () => {
                            return ((e = r), d.openSelectedPreview(e), void _.play('click', { target: 'select' }));
                            var e;
                        },
                        onMouseEnter: function () {
                            _.play('mouse-enter', { target: 'Award' });
                        },
                    }),
                }),
                s.jsxs('div', {
                    className: $e.textContainer,
                    children: [
                        s.jsx('div', { className: $e.rewardName, children: n }),
                        n && i && s.jsx(Pe, { className: $e.rewardType, subtitle: i, rarity: l }),
                    ],
                }),
                s.jsx('div', {
                    className: a($e.achieved, o === xe.Achieved && $e.achieved__show),
                    children: s.jsx('div', { className: $e.check }),
                }),
            ],
        });
    }),
    Ie = {
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
    De = I('Wrapper', Ie.wrapper),
    Se = I('Element', Ie.element),
    Re = 'both',
    Ce = 'left',
    Te = 'right',
    Me = 'none';
function ze({ elements: e }) {
    const { api: t } = S(),
        { animationScroll: r, applyScroll: o } = t,
        c = C(t, L.horizontal),
        [l, d] = n.useState();
    n.useEffect(
        () =>
            T(() => {
                'idle' === c.type && r.scrollPosition.idle && o(r.scrollPosition.get());
            }),
        [r.scrollPosition, c, o],
    );
    const _ = M((e) => {
        const s = (null == e ? void 0 : e.value.scrollPosition) || r.scrollPosition.goal,
            a = t.getContainerSize() ?? 0,
            n = t.getWrapperSize() ?? 0,
            i = t.getBounds()[1];
        d(n >= a ? Me : s <= 30 ? Te : s >= i - 30 ? Ce : Re);
    });
    return (
        i.useLayoutEffect(() => {
            function e() {
                T(() => {
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
        s.jsxs(De, {
            children: [
                s.jsx(z, {
                    classNames: {
                        wrapper: a(Ie.scrollWrapper, Ie[`scrollWrapper__${l}`]),
                        content: a(Ie.content, Ie.content__horizontal),
                    },
                    children: g(e, (e, t) => s.jsx(Se, { children: e }, t)),
                }),
                s.jsx(F, { classNames: { base: Ie.horizontalBar } }),
            ],
        })
    );
}
r(function () {
    const { model: e } = je(),
        t = e.rewards.get();
    return s.jsx(D, { children: s.jsx(ze, { elements: t.map((e) => s.jsx(Ae, { ...e }, e.level)) }) });
});
var Fe = ((e) => ((e.Available = 'available'), (e.Completed = 'completed'), (e.Disabled = 'disabled'), e))(Fe || {});
const Le = {
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
    const { model: e } = je(),
        t = j.resolve('strings'),
        r = e.rewards.get().length > 0 && e.computes.allResearched(),
        n = e.prestigeEmblem.get(),
        i = e.prestigeState.get() ? e.prestigeState.get() : Fe.Disabled,
        o = r
            ? t.readOrEmpty('veh_skill_tree.vanity.completed.subtitle')
            : t.readOrEmpty(`veh_skill_tree.vanity.${i}.subtitle`),
        c = k({ body: t.readOrEmpty(`veh_skill_tree.vanity.${i}.tooltip`) }),
        l = E({ size: O.sizes.sm }, { medium: { size: O.sizes.md } });
    return s.jsxs('div', {
        className: a(Le.base, Le[`base__${i}`], r && Le.base__completed),
        children: [
            r &&
                s.jsx($, {
                    path: 'skillTree.prestige.vanity_bg.small.vanity_bg',
                    width: 450,
                    height: 120,
                    adaptive: {
                        medium: { width: 530, height: 140, path: 'skillTree.prestige.vanity_bg.big.vanity_bg' },
                    },
                    className: Le.background,
                }),
            s.jsxs('div', {
                className: Le.description,
                children: [
                    s.jsx('div', { className: Le.title, children: t.readOrEmpty('veh_skill_tree.vanity.title') }),
                    s.jsx('div', { className: Le.subtitle, children: o }),
                ],
            }),
            s.jsx('div', {
                className: Le.emblem,
                ...c,
                children:
                    i === Fe.Disabled
                        ? s.jsx('div', { className: Le.disabledEmblem })
                        : s.jsx(O, { level: n.level, grade: n.grade ?? 1, type: n.type ?? 'prestige', size: l.size }),
            }),
        ],
    });
});
var Oe = ((e) => ((e.Researched = 'researched'), (e.Selected = 'selected'), (e.Default = 'default'), e))(Oe || {}),
    He = ((e) => (
        (e.Major = 'major'),
        (e.Special = 'special'),
        (e.Final = 'final'),
        (e.Common = 'common'),
        (e.Ghost = 'ghost'),
        e
    ))(He || {}),
    Ge = ((e) => (
        (e.NOT_IN_INVENTORY = 'notInInventory'),
        (e.NOT_ENOUGH_EXP = 'notEnoughExp'),
        (e.IN_BATTLE = 'inBattle'),
        (e.IN_FORMATION = 'inFormation'),
        (e.NEEDS_REPAIR = 'needsRepair'),
        (e.AVAILABLE = 'researchAvailable'),
        e
    ))(Ge || {});
const Ve = ['right', 'left'],
    We = { right: 'x', left: 'x', bottom: 'y', top: 'y' },
    qe = { x: 'x', y: 'y' },
    Ue = { right: 'left', left: 'right', top: 'bottom', bottom: 'top' };
function Qe(e, t) {
    var s;
    return `${e}To${(null == (s = t[0]) ? void 0 : s.toUpperCase()) + t.slice(1)}`;
}
function Xe(e, t) {
    const s = (function (e, t) {
            return e.map(([e, s]) => {
                var a, r;
                const n = null == (a = t.find((t) => t.id === e)) ? void 0 : a.status,
                    i = null == (r = t.find((e) => e.id === s)) ? void 0 : r.status;
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
        a = s.map((e) =>
            (function (e) {
                const t = new Set(e);
                if (1 === t.size) {
                    const [e] = t;
                    return e;
                }
                const [s, a] = e;
                return (s === Oe.Researched && a === Oe.Selected) || (s === Oe.Selected && a === Oe.Researched)
                    ? Oe.Selected
                    : Oe.Default;
            })(e),
        );
    return a.includes(Oe.Researched) ? Oe.Researched : a.includes(Oe.Selected) ? Oe.Selected : Oe.Default;
}
function Ze(e, t, s = []) {
    return s.reduce((s, a) => (e.some((e) => e.targetNodeId === a.id) && s.push([t, a.id]), s), []);
}
function Ye(e, t) {
    return e
        .filter((e) => t.includes(e.id))
        .sort((e, t) => e.x - t.x)
        .reduce((e, t, s, a) => {
            if (0 === s) return ((e[t.id] = 0), e);
            const r = a[s - 1],
                n = e[r.id];
            return (
                G(void 0 !== n, 'prevPerk was not added to animationQueues'),
                t.x === r.x ? (e[t.id] = n) : (e[t.id] = n + 1),
                e
            );
        }, {});
}
function Je(e) {
    return e.reduce((e, t, s) => ({ ...e, [t]: s }), {});
}
function Ke(e, t) {
    const s = {};
    return (
        t.forEach((t) => {
            let a = Number.MAX_SAFE_INTEGER;
            for (const s of t.effectedNodes)
                for (const t of s) {
                    const s = e[t];
                    void 0 !== s && (a = Math.min(s, a));
                }
            a !== Number.MAX_SAFE_INTEGER && (s[t.id] = a);
        }),
        { ...s, ...e }
    );
}
function et() {
    return Math.round(1e3 * Math.random() + Date.now());
}
class tt {
    constructor(e, s) {
        (t(this, 'nodes'),
            t(this, 'ghostNodes'),
            t(this, 'listNodePosition'),
            t(this, 'paths'),
            t(this, 'axisDirection'),
            (this.nodes = e),
            (this.paths = s),
            (this.ghostNodes = []),
            (this.listNodePosition = []));
    }
    hasDuplicate(e) {
        return e.some(({ position: e }) => this.listNodePosition.includes(e));
    }
    extractNodeConnectionInfo(e, t) {
        const { startPoint: s, endPoint: a } = (function (e) {
                const [t, s, a] = e.split(/(?=[A-Z])/).map((e) => e.toLowerCase());
                return (
                    (t && a) ||
                        G.log(void 0 !== t || void 0 !== a, 'parseLineDirection didnt find startPoint and endPoint'),
                    { startPoint: t, endPoint: a }
                );
            })(e),
            r = H(this.nodes, (e, s, a) => (s.id === t && ((e.node = s), (e.position = a)), e), {});
        if (!r.node) throw new Error(`Node with id ${t} not found`);
        const { node: n, position: i } = r;
        return { matchItem: { targetNodeId: t, x: n.x, y: n.y, position: i, endPoint: a }, startPoint: s };
    }
    buildTraversalPath(e, t) {
        return t.map((s, a) => {
            const r = e.reduce(
                (e, r) => (
                    this.validateNodeByAxis(r, s, a, t) &&
                        e.push({ id: r.targetNodeId, lineType: Qe(Ue[r.endPoint], r.endPoint) }),
                    e
                ),
                [],
            );
            return t.length > 1 && a > 0
                ? [...r, { id: t[a - 1].id, lineType: Qe(Ue[this.axisDirection], this.axisDirection) }]
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
            s = new Map();
        return (
            V(e, ({ lineType: e, id: a }) => {
                const { startPoint: r, matchItem: n } = this.extractNodeConnectionInfo(e, a);
                s.has(r) ? (s.get(r).push(n), t.set(r, s.get(r))) : s.set(r, [n]);
            }),
            Array.from(t)
        );
    }
    getEffectedNodes(e, t, s, a) {
        return s.reduce(
            (r, n, i) => (
                0 === i && a && r.push(...Ze(s, n.targetNodeId, this.paths[n.position])),
                n[e ? qe.x : qe.y] >= t && r.push(...Ze(s, n.targetNodeId, this.paths[n.position])),
                r
            ),
            [],
        );
    }
    createNodes(e, t) {
        const s = [t, ...e],
            a = Ve.includes(this.axisDirection),
            r = a ? qe.x : qe.y,
            n = a ? t.y : t.x,
            i = (function (e, t, s) {
                const a = t === qe.x ? qe.y : qe.x;
                return e.reduce((e, r) => (r[a] !== s && e.push(r[t]), e), []);
            })(e, qe[r], n),
            o = [...new Set(i)].map((e, t) => {
                const i = 0 === t,
                    o = {
                        id: et(),
                        x: 0,
                        y: 0,
                        isHintRequired: !1,
                        status: Oe.Default,
                        iconName: '',
                        price: 0,
                        type: He.Ghost,
                        localizationName: '',
                        categories: [],
                        effectedNodes: this.getEffectedNodes(a, e, s, i),
                        vehicleName: '',
                    };
                return ((o[r] = e), (o[a ? qe.y : qe.x] = n), o);
            });
        (this.ghostNodes.push(...o), this.createPaths(s, o));
    }
    filterPathsByTraversalList(e) {
        this.paths = H(
            this.paths,
            (t, s, a) => {
                if (e.find(({ position: e }) => e === a)) {
                    const a = W(s, (t) => !e.some((e) => e.targetNodeId === t.id));
                    return (t.push(a), t);
                }
                return (t.push(s), t);
            },
            [],
        );
    }
    updateTree(e, t) {
        const s = this.nodes[t];
        e.forEach(([e, a]) => {
            if (this.hasDuplicate(a) || !s) return;
            const r = { targetNodeId: s.id, x: s.x, y: s.y, position: t, endPoint: e };
            ((this.axisDirection = e), this.createNodes(a, r), this.listNodePosition.push(t));
        });
    }
    createPaths(e, t) {
        (this.filterPathsByTraversalList(e), this.paths.push(...this.buildTraversalPath(e, t)));
    }
    validateNodeByAxis(e, t, s, a) {
        const r = a.length;
        if (1 === r) return !0;
        const n = We[this.axisDirection];
        return s > 0 && s < r - 1 ? t[n] === e[n] : s === r - 1 ? e[n] >= t[n] : t[n] >= e[n];
    }
}
const st = [Ge.IN_BATTLE, Ge.IN_FORMATION, Ge.NEEDS_REPAIR],
    [at, rt] = f()(
        ({ observableModel: e, cleanup: t }) => {
            const s = {
                    ...e.primitives(['rootNodeId', 'rootNodeUiId', 'lockedTree', 'researchAvailability']),
                    researchedPerks: e.arrayClone('researchedPerks'),
                    finalPerk: e.transform(
                        (e) =>
                            (function (e) {
                                return H(
                                    e,
                                    (e, { type: t, status: s, id: a }) => (
                                        t === He.Final && ((e.id = a), (e.researched = s === Oe.Researched)),
                                        e
                                    ),
                                    {},
                                );
                            })(e),
                        'nodes',
                    ),
                },
                a = {
                    currentNodes: e.arrayClone('nodes'),
                    paths: e.arrayClone('paths'),
                    newNodes: o.box([]),
                    transformedPaths: o.box([]),
                },
                r = v.shallow(() => (0 === a.newNodes.get().length ? a.currentNodes.get() : n())),
                n = v.shallow(() => {
                    const e = a.currentNodes.get(),
                        t = a.newNodes.get().map(({ effectedNodes: t, ...s }) => ({ ...s, status: Xe(t, e) }));
                    return [...a.currentNodes.get(), ...t];
                }),
                i = v.shallow(() => a.transformedPaths.get().map((e) => e.map((e) => ({ ...e })))),
                _ = v.shallow(() => ({
                    researched: H(
                        a.currentNodes.get(),
                        (e, t) => (t.status === Oe.Researched && t.type !== He.Final && e++, e),
                        0,
                    ),
                    total: a.currentNodes.get().length - 1,
                })),
                m = v.primitive((e) => {
                    const t = s.researchedPerks.get();
                    return t.includes(e) ? t.length : 0;
                }),
                u = c((e, t) => {
                    (a.newNodes.set(e), a.transformedPaths.set(t));
                });
            t(
                l(
                    () => a.paths.get(),
                    () => {
                        const e = a.paths.get(),
                            t = new tt(a.currentNodes.get(), e);
                        (e.forEach((e, s) => {
                            t.updateTree(t.findMatches(e), s);
                        }),
                            u(t.newNodes, t.updatedPaths));
                    },
                    { equals: d.structural, fireImmediately: !0 },
                ),
            );
            const h = v.structural((e) => {
                    const t = a.newNodes.get(),
                        r = a.currentNodes.get(),
                        n = s.finalPerk.get().id;
                    return e.includes(n)
                        ? { finalPerkId: n, animationQueue: Ke(Ye(r, e), t) }
                        : { finalPerkId: n, animationQueue: Ke(Je(e), t) };
                }),
                b = v.primitive(() => st.includes(s.researchAvailability.get()));
            return {
                ...s,
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
    nt = 'EntryPointLine_f5426a98',
    it = 'EntryPointLine_lock_e27404c6',
    ot = 'EntryPointLine_base__locked_d883e9db';
r(function () {
    const { model: e } = rt();
    return s.jsx('div', {
        className: a(nt, !e.finalPerk.get().researched && ot),
        children: s.jsx('div', { className: it }),
    });
});
const ct = {
        small: { width: 866, height: 480, cell: 7 },
        medium: { width: 975, height: 540, cell: 7.5 },
        large: { width: 1300, height: 720, cell: 10 },
        extraLarge: { width: 1733, height: 960, cell: 12 },
    },
    lt = {
        [q.extraSmall]: { cell: ct.small.cell, container: ct.small },
        [q.small]: { cell: ct.small.cell, container: ct.small },
        [q.medium]: { cell: ct.medium.cell, container: ct.medium },
        [q.large]: { cell: ct.large.cell, container: ct.large },
        [q.extraLarge]: { cell: ct.extraLarge.cell, container: ct.extraLarge },
    },
    dt = {
        root: 'ResearchedAnimation_root_6660d527',
        video: 'ResearchedAnimation_video_a2258a9e',
        video__major: 'ResearchedAnimation_video__major_6660d527',
        video__final: 'ResearchedAnimation_video__final_d43c2114',
    },
    _t = j.resolve('videos');
function mt(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
const ut = r(function ({ type: e, runAnimation: t, id: r }) {
        const { model: o, controls: c } = rt(),
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
                                if (e === He.Final)
                                    return {
                                        soundTarget: 'researchFinalPerk',
                                        src: _t.readOrEmpty('skillTree.perks.final.standard'),
                                    };
                                const s = 1 === t ? 'single' : 'chain';
                                return e === He.Major
                                    ? {
                                          soundTarget: `research${mt(s)}LargePerk`,
                                          src: _t.readOrEmpty(`skillTree.perks.${e}.${s}`),
                                      }
                                    : {
                                          soundTarget: `research${mt(s)}SmallPerk`,
                                          src: _t.readOrEmpty(`skillTree.perks.${e}.${s}`),
                                      };
                            })(e, t));
                    }),
                [r, o.computes, e],
            ),
            i.useEffect(() => {
                const s = l.current;
                if (s)
                    return (
                        t &&
                            (s.domRef.load(),
                            s.play(),
                            h.play('click', { target: d.current.soundTarget }),
                            e === He.Final && s.onChangeTime(b)),
                        () => {
                            s.cleanup();
                        }
                    );
            }, [t, h, e, b]),
            t ? s.jsx(U, { src: d.current.src, className: a(dt.video, dt[`video__${e}`]), ref: l }) : null
        );
    }),
    ht = {
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
    bt = {
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
    pt = { common: ht, special: ht, ghost: ht, major: bt, final: bt };
function ft(e) {
    const t = pt[e.type];
    return s.jsxs('div', {
        className: a(
            t.base,
            t[`base__${e.type}`],
            t[`base__${e.status}`],
            e.showHintAnimation && t.base__showHintAnimation,
            e.className,
        ),
        style: { '--transitionDelay': `${e.transitionDelay}ms` },
        children: [s.jsx('div', { className: t.researchedBg }), s.jsx('div', { className: t.selectedBg })],
    });
}
const gt = {
    root: 'Icon_root_55a8ab20',
    base: 'Icon_1ff370a4',
    icon: 'Icon_4a7e2c0e',
    base__selected: 'Icon_base__selected_55a8ab20',
    base__researched: 'Icon_base__researched_55a8ab20',
    base__animateResearched: 'Icon_base__animateResearched_55a8ab20',
    glow: 'Icon_glow_5d4d69c5',
    base__default: 'Icon_base__default_55a8ab20',
};
function vt({ status: e, iconName: t, className: r, type: n, transitionDelay: i, classNames: o }) {
    const { folderSize: c } = E(
        { folderSize: 'small' },
        { large: { folderSize: 'large' }, extraLarge: { folderSize: 'large' } },
    );
    return s.jsxs('div', {
        className: a(gt.base, gt[`base__${e}`], r),
        style: { '--transitionDelay': `${i}ms` },
        children: [
            s.jsx('div', { className: gt.glow }),
            s.jsx('div', {
                className: a(gt.icon, gt[`icon__${n}`], null == o ? void 0 : o.icon),
                style: { backgroundImage: `url(R.images.gui.maps.icons.skillTree.tree.perks.${n}.skills.${c}.${t})` },
            }),
        ],
    });
}
const yt = {
    root: 'Price_root_29f8d762',
    base: 'Price_e2a305d1',
    base__researched: 'Price_base__researched_16917da8',
    base__animateResearched: 'Price_base__animateResearched_a0a6912a',
    value: 'Price_value_9290e627',
    base__default: 'Price_base__default_29f8d762',
    icon: 'Price_icon_aed4fc8a',
};
function xt({ value: e, status: t, transitionDelay: r, className: n }) {
    const i = j.resolve('intl');
    return s.jsx('div', {
        className: a(yt.base, yt[`base__${t}`], n),
        style: { '--transitionDelay': `${r}ms` },
        children: s.jsx(Q, {
            type: Q.types.tankXP,
            size: Q.sizes.extraSmall,
            reverse: !0,
            classNames: { icon: yt.icon },
            children: s.jsx('div', { className: yt.value, children: i.formatNumber('integral', e) }),
        }),
    });
}
const Nt = {
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
function jt({ status: e, className: t, classNames: r, type: n, transitionDelay: i }) {
    return s.jsxs('div', {
        className: a(
            Nt.base,
            Nt[`base__${e}`],
            Nt[`base__${n}`],
            Nt['base__' + (0 === i ? 'notDelay' : 'withDelay')],
            t,
        ),
        style: { '--transitionDelay': `${i}ms` },
        children: [
            s.jsx('div', { className: a(Nt.circle, null == r ? void 0 : r.circle) }),
            s.jsx('div', { className: Nt.segmentTop }),
            s.jsx('div', { className: Nt.segmentRight }),
            s.jsx('div', { className: Nt.segmentBottom }),
            s.jsx('div', { className: Nt.segmentLeft }),
        ],
    });
}
const wt = { base: 'Glare_a09df11', glare: 'Glare_ed61dd83' },
    kt = j.resolve('images');
function Pt({
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
    return s.jsx('div', {
        className: wt.base,
        style: { maskImage: `url(${kt.readOrEmpty(n)})` },
        children: s.jsx(u.div, { className: a(wt.glare, i), style: l }),
    });
}
const Et = 'Glare_95e181ec',
    Bt = 'Glare_1be1be9',
    $t = { x: '-55rem', y: '-55rem', rotateZ: '-45deg', opacity: 0 },
    At = [
        { ...$t, opacity: 1 },
        { opacity: 1, x: '45rem', y: '45rem', rotateZ: '-45deg' },
    ];
const It = 'Points_ebbc956c',
    Dt = 'Points_arrowContainer_2bd78abc',
    St = 'Points_arrow_cd1850ae',
    Rt = 'Points_arrow__top_2e330546',
    Ct = 'Points_arrow__right_fa74c47',
    Tt = 'Points_arrow__bottom_1b669f6e',
    Mt = 'Points_arrow__left_1453abe0',
    zt = 'Points_outsideGlow_8ec52358',
    Ft = 'Points_insideGlow_ec6f3f05',
    Lt = 'Wrapper_3f1ea42a',
    Ot = u(({ style: e }) =>
        s.jsxs(u.div, {
            className: It,
            style: e,
            children: [
                s.jsx('div', { className: zt }),
                s.jsxs('div', {
                    className: Dt,
                    children: [
                        s.jsx('div', { className: a(St, Rt) }),
                        s.jsx('div', { className: a(St, Ct) }),
                        s.jsx('div', { className: a(St, Tt) }),
                        s.jsx('div', { className: a(St, Mt) }),
                    ],
                }),
                s.jsx('div', { className: Ft }),
            ],
        }),
    ),
    Ht = u(function ({ style: e }) {
        const t = E({ value: 'small' }, { large: { value: 'large' } });
        return s.jsx(u.div, {
            className: Et,
            style: e,
            children: s.jsx(Pt, {
                maskPath: `skillTree.tree.perks.special.skills.${t.value}.mask`,
                classNames: Bt,
                pointAnimation: At,
                startAnimation: $t,
            }),
        });
    });
function Gt({ children: e, showHint: t, type: a }) {
    const r = h(t, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: { duration: 0 } });
    return s.jsxs('div', {
        className: Lt,
        children: [
            r(
                (e, t) =>
                    t &&
                    (() => {
                        switch (a) {
                            case He.Common:
                                return s.jsx(Ot, { style: e });
                            case He.Special:
                                return s.jsx(Ht, { style: e });
                            default:
                                console.error(`There is no hint for type ${a}`);
                        }
                    })(),
            ),
            e(a === He.Common && t),
        ],
    });
}
const Vt = {
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
    Wt = i.forwardRef(function (e, t) {
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
                                const s = t.getBoundingClientRect();
                                return { width: s.width, height: s.height };
                            },
                            get offsetLeft() {
                                var t;
                                return (null == (t = e.current) ? void 0 : t.offsetLeft) ?? 0;
                            },
                            get gearIndent() {
                                const s = e.current,
                                    a = t.current;
                                return s && a
                                    ? 1.2 * (a.getBoundingClientRect().bottom - s.getBoundingClientRect().bottom)
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
            s.jsxs('div', {
                ...r,
                className: a(
                    Vt.base,
                    Vt[`base__${e.type}`],
                    Vt[`base__${e.status}`],
                    Vt[`base__${e.state}`],
                    e.enableHover && Vt.base__enableHover,
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
                    s.jsx(Gt, {
                        showHint: e.showHint,
                        type: e.type,
                        children: (t) =>
                            s.jsxs('div', {
                                className: Vt.container,
                                children: [
                                    s.jsx('div', { className: Vt.mainLayer }),
                                    s.jsx(jt, {
                                        type: e.type,
                                        status: e.status,
                                        classNames: { circle: Vt.circle },
                                        transitionDelay: e.transitionDelay,
                                    }),
                                    s.jsx(ft, {
                                        type: e.type,
                                        status: e.status,
                                        className: Vt.border,
                                        transitionDelay: e.transitionDelay,
                                        showHintAnimation: t,
                                    }),
                                    s.jsx('div', { className: Vt.texture }),
                                    s.jsx(vt, {
                                        iconName: e.iconName,
                                        status: e.status,
                                        className: Vt.iconBase,
                                        type: e.type,
                                        classNames: { icon: Vt.icon },
                                        transitionDelay: e.transitionDelay,
                                    }),
                                ],
                            }),
                    }),
                    e.root && s.jsx('div', { className: Vt.blurCircle }),
                    s.jsx('div', { className: Vt.glow }),
                    e.showGear &&
                        s.jsx('div', {
                            className: Vt.gearContainer,
                            ref: o,
                            children: s.jsx('div', { className: Vt.gearIcon }),
                        }),
                    s.jsx(xt, {
                        value: e.price,
                        className: a(Vt.price, e.root && Vt.price__root),
                        status: e.status,
                        transitionDelay: e.transitionDelay,
                    }),
                    s.jsx(ut, { type: e.type, runAnimation: e.status === as.AnimateResearched, id: e.id }),
                ],
            })
        );
    }),
    qt = {
        root: 'Ghost_root_eea20f5',
        base: 'Ghost_3e19eb13',
        base__selected: 'Ghost_base__selected_f90be090',
        base__researched: 'Ghost_base__researched_eea20f5',
        base__animateResearched: 'Ghost_base__animateResearched_a7c4bb12',
    },
    Ut = n.forwardRef(function ({ x: e, y: t, status: r }, n) {
        return s.jsx('div', {
            className: a(qt.base, qt[`base__${r}`]),
            style: { '--x': `${e}rem`, '--y': `${t}rem` },
            ref: n,
        });
    }),
    Qt = { singe: 2500, chain: 220 };
function Xt(e, t) {
    const s = e - t;
    return 1 === s ? Qt.singe : s * Qt.chain;
}
const Zt = {
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
    Yt = j.resolve('images'),
    Jt = j.resolve('strings'),
    Kt = r(function ({ children: e, showFinalDecoration: t, status: r, transitionDelay: n, classNames: o }) {
        const { model: c } = rt(),
            { researched: l, total: d } = c.computes.perksInfo(),
            _ = (function ({ researched: e, total: t }) {
                const s = Y(),
                    a = J(e) ?? 0,
                    [{ number: r }] = m(
                        () => ({
                            number: e,
                            from: { number: 0 },
                            config: { duration: Xt(e, a), ...b.molasses },
                            immediate: s || e === t,
                        }),
                        [e, t],
                    );
                return r;
            })(i.useMemo(() => ({ researched: l, total: d }), [l, d])),
            { researched: h } = c.finalPerk.get();
        return t
            ? s.jsxs('div', {
                  className: a(Zt.base, Zt[`base__${r}`]),
                  style: { '--transitionDelay': `${n}ms` },
                  children: [
                      e,
                      s.jsxs('div', {
                          className: Zt.container,
                          children: [
                              s.jsx('div', { className: Zt.border }),
                              s.jsx('div', {
                                  className: Zt.starContainer,
                                  children: s.jsx('div', { className: Zt.star }),
                              }),
                              s.jsx('div', { className: a(Zt.glow, null == o ? void 0 : o.glow) }),
                          ],
                      }),
                      s.jsxs('div', {
                          className: a(Zt.counterContainer, l === d && Zt.counterContainer__hide),
                          children: [
                              s.jsx('div', { className: Zt.counterIcon }),
                              s.jsxs('div', {
                                  className: Zt.values,
                                  children: [
                                      s.jsx(u.div, { children: _.to((e) => e.toFixed(0)) }),
                                      Jt.readOrEmpty('common.common.slash'),
                                      d,
                                  ],
                              }),
                          ],
                      }),
                      s.jsx('div', {
                          className: Zt.draftTexture,
                          style: {
                              backgroundImage: `url(${Yt.readOrEmpty('skillTree.tree.' + (h ? 'draftTextureResearched' : 'draftTexture'))})`,
                          },
                      }),
                  ],
              })
            : e;
    }),
    es = {
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
    ts = i.forwardRef(function (e, t) {
        const r = Z({ contentId: R.views.mono.vehicle_hub.tooltips.perk_tooltip('resId'), args: { nodeID: e.id } });
        return s.jsx('div', {
            ...r,
            className: a(es.base, es[`base__${e.type}`], es[`base__${e.status}`], e.lockedTree && es.base__lockedTree),
            onClick: function () {
                (r.onClick(), e.onClick());
            },
            onMouseEnter: function (t) {
                (r.onMouseEnter(t), e.onMouseEnter());
            },
            ref: t,
            style: { '--x': `${e.x}rem`, '--y': `${e.y}rem`, '--transitionDelay': `${e.transitionDelay}ms` },
            children: s.jsx('div', {
                className: es.container,
                children: s.jsxs(Kt, {
                    status: e.status,
                    showFinalDecoration: e.showFinalDecoration,
                    classNames: { glow: es.finalGlow },
                    transitionDelay: e.transitionDelay,
                    children: [
                        s.jsx('div', { className: es.mainLayer }),
                        s.jsx(jt, {
                            type: e.type,
                            status: e.status,
                            classNames: { circle: es.circle },
                            transitionDelay: e.transitionDelay,
                        }),
                        s.jsx(ft, {
                            type: e.type,
                            status: e.status,
                            className: es.border,
                            transitionDelay: e.transitionDelay,
                        }),
                        s.jsx('div', { className: es.texture }),
                        s.jsx(vt, {
                            iconName: e.iconName,
                            status: e.status,
                            className: es.iconBase,
                            type: e.type,
                            classNames: { icon: es.icon },
                            transitionDelay: e.transitionDelay,
                        }),
                        s.jsx(xt, {
                            value: e.price,
                            className: es.price,
                            status: e.status,
                            transitionDelay: e.transitionDelay,
                        }),
                        !e.showFinalDecoration && s.jsx('div', { className: es.glow }),
                        s.jsx(ut, { type: e.type, runAnimation: e.status === as.AnimateResearched, id: e.id }),
                    ],
                }),
            }),
        });
    });
function ss(e, t, s, a) {
    return e
        ? { enableHover: !0, showHint: !1, state: 'lockedTree' }
        : t
          ? { enableHover: !s, showHint: a && s, state: 'lockedVehicle' }
          : { enableHover: !s, showHint: s, state: 'none' };
}
const as = { ...Oe, AnimateResearched: 'animateResearched' },
    rs = r(function (e) {
        const { controls: t, model: a } = rt(),
            r = a.lockedTree.get(),
            n = a.computes.lockedVehicle(),
            { status: o, transitionDelay: c } = os(
                e.status,
                i.useMemo(() => [e.id], [e.id]),
                e.vehicleName,
            ),
            l = K(),
            d = P(),
            _ = lt[l.breakpoint.name].cell;
        const m = {
            ...e,
            x: Math.round(e.x * _),
            y: Math.round(e.y * _),
            onClick: function () {
                if (r) return;
                const {
                    soundTarget: s,
                    needsConfirmation: a,
                    needsSelection: i,
                } = (function (e, t, s) {
                    return e !== Oe.Researched
                        ? {
                              soundTarget: e === Oe.Default ? 'select' : 'deselect',
                              needsConfirmation: !1,
                              needsSelection: !0,
                          }
                        : {
                              soundTarget: s || He.Special !== t ? null : 'select',
                              needsConfirmation: !s && He.Special === t,
                              needsSelection: !1,
                          };
                })(e.status, e.type, n);
                (a && t.openConfirmWindow(e.id), i && t.selectedPerk(e.id), s && d.play('click', { target: s }));
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
            root: a.rootNodeUiId.get() === e.id,
        };
        var u, h;
        switch (e.type) {
            case He.Common:
            case He.Special:
                return s.jsx(Wt, { ...m, ...ss(r, n, m.isHintRequired, m.root), showGear: e.type === He.Special });
            case He.Final:
            case He.Major:
                return s.jsx(ts, { ...m, showFinalDecoration: e.type === He.Final, lockedTree: r });
            case He.Ghost:
                return s.jsx(Ut, { status: m.status, x: m.x, y: m.y, ref: m.ref });
            default:
                console.error(`There is no node type '${e.type}' registered.`);
        }
    }),
    ns = {
        queue: { initial: 200, common: 150 },
        transition: { chain: 0, single: 1e3, final: 2e3 },
        path: { single: 200 },
    },
    is = {
        queue(e, t, s) {
            const { queue: a, transition: r, path: n } = ns;
            return 1 === s && 'path' === t ? r.single + n.single : 0 === e ? a.initial : e * a.common + a.initial;
        },
        transition(e, t, s) {
            const { transition: a } = ns;
            return t.includes(e) ? a.final : s > 1 ? a.chain : a.single;
        },
    };
function os(e, t, s, a = 'perk') {
    const [r, n] = i.useState(() => ({ status: e, transitionDelay: 0 })),
        o = i.useRef(s),
        c = ee(),
        { model: l } = rt(),
        d = Y();
    return (
        i.useLayoutEffect(() => {
            const r = new te();
            if (!d && o.current === s) {
                if (e === Oe.Researched)
                    return (
                        r.add(
                            p(
                                () => l.researchedPerks.get().length > 0,
                                () => {
                                    const e = l.researchedPerks.get(),
                                        { animationQueue: s, finalPerkId: r } = l.computes.animationQueueInfo(e),
                                        i = e.length,
                                        o = is.queue(
                                            (function (e, t) {
                                                const [s, a] = e,
                                                    r = t[s] ?? 0,
                                                    n = t[a] ?? 0;
                                                return Math.max(r, n);
                                            })(t, s),
                                            a,
                                            i,
                                        );
                                    c.run(
                                        () =>
                                            n({
                                                status: as.AnimateResearched,
                                                transitionDelay: is.transition(r, t, i),
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
        }, [c, d, t, l.computes, e, a, l.researchedPerks, s]),
        i.useLayoutEffect(() => {
            o.current !== s && ((o.current = s), n({ status: e, transitionDelay: 0 }));
        }, [e, s]),
        r
    );
}
const cs = {
    root: 'Path_root_a3514b92',
    base: 'Path_55a8a7fd',
    base__selected: 'Path_base__selected_78814b1d',
    base__researched: 'Path_base__researched_a3514b92',
    base__animateResearched: 'Path_base__animateResearched_8845b1b0',
};
function ls({ affectedNodes: e, path: t, nodes: r }) {
    const n = se(),
        { status: o } = os(
            Xe(e, r),
            i.useMemo(() => e.flat(), [e]),
            (function (e) {
                const t = e[0];
                return (G(void 0 !== t, 'Nodes dont have first element'), t.vehicleName);
            })(r),
            'path',
        );
    return s.jsx('path', { d: t, style: { '--scale': `${n}` }, className: a(cs.base, cs[`base__${o}`]) });
}
const ds = 8,
    _s = '->',
    ms = ['bottom', 'top'];
function us() {
    const e = new Set();
    return (t, s) => {
        const { path: a, reversePath: r } = { path: `${(n = s)}${_s}${(i = t)}`, reversePath: `${i}${_s}${n}` };
        var n, i;
        const o = e.has(a) || e.has(r);
        return (o || e.add(a), o);
    };
}
function hs({ start: e, middle: t, end: s }) {
    return t
        ? (function (e, t, s, a = ds) {
              const r = (e, t) => {
                      const s = e.x - t.x,
                          a = e.y - t.y,
                          r = Math.sqrt(s * s + a * a);
                      return { x: s / r, y: a / r };
                  },
                  n = (() => {
                      const { x: s, y: n } = r(e, t);
                      return { x: t.x + s * a, y: t.y + n * a };
                  })(),
                  i = (() => {
                      const { x: e, y: n } = r(s, t);
                      return { x: t.x + e * a, y: t.y + n * a };
                  })();
              return `M ${e.x} ${e.y} \n            L ${n.x} ${n.y} \n            C ${t.x} ${t.y} ${t.x} ${t.y} ${i.x} ${i.y} \n            L ${s.x} ${s.y}`;
          })(e, t, s, ds)
        : `M ${e.x} ${e.y} L ${s.x} ${s.y}`;
}
function bs(e, t, s, a, r) {
    if (s.top !== a.top && s.left !== a.left) return ms.includes(r) ? { x: e.x, y: t.y } : { x: t.x, y: e.y };
}
const ps = new (class {
    getElementMetrics(e) {
        const { width: t, height: s } = e.getBoundingClientRect();
        return e instanceof HTMLDivElement
            ? { left: e.offsetLeft, top: e.offsetTop, width: t, height: s, gearIndent: 0 }
            : { left: e.offsetLeft, top: e.offsetTop, width: t, height: s, gearIndent: e.gearIndent };
    }
    getCenterPoint(e) {
        return { x: e.left, y: e.top };
    }
    getElementConnectionPoints(e) {
        const t = { x: e.left, y: e.top + e.gearIndent + e.height / 2 },
            s = { x: e.left, y: e.top - e.height / 2 },
            a = { x: e.left + e.width / 2, y: e.top };
        return { left: { x: e.left - e.width / 2, y: e.top }, bottom: t, right: a, top: s };
    }
    getConnectionPoints(e, t, s) {
        const [a, r, n] = s.split(/(?=[A-Z])/).map((e) => e.toLowerCase()),
            i = this.getElementMetrics(e),
            o = this.getElementMetrics(t);
        (a && n) || G.log(void 0 !== a || void 0 !== n, 'getConnectionPoints didnt find start and end');
        const c = this.getElementConnectionPoints(i)[a],
            l = this.getElementConnectionPoints(o)[n];
        return { start: c, middle: bs(this.getCenterPoint(i), this.getCenterPoint(o), i, o, a) ?? null, end: l };
    }
})();
const fs = 'Container_2a42bba9',
    gs = r(function ({ nodeRefsMap: e }) {
        const { model: t } = rt(),
            [a, r] = i.useState([]),
            n = t.computes.nodes(),
            o = M(() => {
                r(
                    (function (e, t, s, a) {
                        const r = us();
                        return e.flatMap((n, i) => {
                            const o = a.current[i],
                                c = t[i];
                            return o && c
                                ? c.reduce((t, c) => {
                                      const l = e.findIndex((e) => e.id === c.id);
                                      if (r(c.id, n.id) || -1 === l || c.id === s) return t;
                                      const d = a.current[l];
                                      if (!d)
                                          return (
                                              G.log(
                                                  void 0 !== d,
                                                  `NodeRefsMap dosent include targetNode with position ${i}`,
                                              ),
                                              t
                                          );
                                      const _ = hs(ps.getConnectionPoints(o, d, c.lineType));
                                      return (t.push({ path: _, affectedNodes: [[n.id, c.id]], id: et() }), t);
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
                    s = () => {
                        T(() => {
                            o();
                        });
                    };
                return (
                    e.add(
                        l(
                            () => t.computes.paths(),
                            () => {
                                s();
                            },
                            { equals: d.structural, fireImmediately: !0 },
                        ),
                    ),
                    e.add(ae(window, 'resize', s)),
                    e.dispose
                );
            }, [o, t.computes]),
            s.jsx('svg', {
                className: fs,
                children: a.map(({ id: e, path: t, affectedNodes: a }) =>
                    s.jsx(ls, { path: t, affectedNodes: a, nodes: n }, `${t}-${e}`),
                ),
            })
        );
    }),
    vs = 'TreeContainer_230b9c81';
r(function () {
    const e = i.useRef({}),
        { model: t } = rt(),
        a = K(),
        { width: r, height: o } = lt[a.breakpoint.name].container;
    return s.jsxs('div', {
        className: vs,
        style: { '--width': `${r}rem`, '--height': `${o}rem` },
        children: [
            s.jsx(gs, { nodeRefsMap: e }),
            t.computes
                .nodes()
                .map(({ categories: t, ...s }, a) =>
                    n.createElement(rs, { ...s, key: `${s.id}-${s.type}`, nodeRefsMap: e, position: a }),
                ),
        ],
    });
});
const [ys, xs] = f()(
        ({ observableModel: e }) => {
            const t = { nodes: e.arrayClone('nodes'), ...e.primitives(['researchAvailability']) },
                s = v.shallow(() => W(t.nodes.get(), (e) => e.status === Oe.Selected)),
                a = v.shallow(() => H(s(), (e, t) => e + t.price, 0)),
                r = v.shallow(() => {
                    if (re(t.nodes.get(), (e) => e.status === Oe.Researched))
                        return { tooltip: '', description: 'allResearched' };
                    const e = t.researchAvailability.get();
                    return e === Ge.NOT_ENOUGH_EXP || e === Ge.AVAILABLE
                        ? { tooltip: 'notEnoughExp', description: 'noSelected' }
                        : { tooltip: e, description: e };
                });
            return { ...t, computes: { selectedPerks: s, totalPrice: a, textParams: r } };
        },
        ({ externalModel: e }) => ({ research: e.createCallbackNoArgs('onResearch') }),
    ),
    Ns = { root: 'Info_root_3f9bb731', base: 'Info_2def4bb3', perk: 'Info_perk_6719815a' },
    js = j.resolve('strings'),
    ws = (e) => js.readOr(`veh_skill_tree.tooltips.title.${e}`, () => e);
const ks = r(function () {
        const { model: e } = xs(),
            t = E({ value: 'extraSmall' }, { medium: { value: 'medium' } }),
            r = e.computes.selectedPerks(),
            n = r.length,
            i = (function (e) {
                let t = '';
                return 1 === e.length
                    ? ws(e[0].localizationName)
                    : (e.forEach(({ localizationName: e }, s, a) => {
                          const r = a.length - 1 === s ? 2 : 0;
                          ((t += js
                              .pluralOrEmpty('veh_skill_tree.research.tooltip.description', r)
                              .replace(/{{selectedPerks}}/g, ws(e))),
                              s < a.length - 1 && (t += '\n'));
                      }),
                      t);
            })(r),
            o = k({ header: js.readOrEmpty('veh_skill_tree.research.infoTooltipTitle'), body: i });
        return s.jsxs('div', {
            className: a(Ns.base, Ns[`base__${t.value}`]),
            children: [
                s.jsx(ne, {
                    path: 'veh_skill_tree.research.selected',
                    params: {
                        selectedItem:
                            1 === n
                                ? s.jsx('span', { className: Ns.perk, children: i })
                                : s.jsx(ne, {
                                      className: Ns.perk,
                                      path: 'veh_skill_tree.research.perks',
                                      params: { amount: n },
                                  }),
                    },
                }),
                n > 1 && s.jsx($, { width: 24, height: 24, path: 'skillTree.info_icon', ...o }),
            ],
        });
    }),
    Ps = 'Footer_70ef3874',
    Es = 'Footer_research_37b9a55',
    Bs = 'Footer_divider_32042895',
    $s = 'Footer_content_19cd5319',
    As = 'Footer_selected_eb1709fa',
    Is = 'Footer_text_d790ec85',
    Ds = 'Footer_currency_408955e2',
    Ss = 'Footer_value_2988e411',
    Rs = 'Footer_base__enough_4308958a',
    Cs = 'Footer_button_7e68acf0',
    Ts = 'Footer_buttonText_881ef4c9',
    Ms = j.resolve('intl'),
    zs = j.resolve('strings');
r(function () {
    const { model: e, controls: t } = xs(),
        r = e.researchAvailability.get(),
        n = e.computes.selectedPerks(),
        i = e.computes.totalPrice(),
        o = r !== Ge.NOT_ENOUGH_EXP,
        c = r !== Ge.AVAILABLE,
        l = E({ buttonSize: oe.small, iconSize: ie.small }, { medium: { buttonSize: oe.medium, iconSize: ie.medium } }),
        { tooltip: d, description: _ } = e.computes.textParams(),
        m = k({ body: zs.readOrEmpty(`veh_skill_tree.research.${d}`, 'silent') });
    return s.jsxs('div', {
        className: a(Ps, o && Rs),
        children: [
            s.jsx('div', { className: Bs }),
            s.jsx('div', {
                className: Es,
                children: n.length
                    ? s.jsxs('div', {
                          className: $s,
                          children: [
                              s.jsxs('div', {
                                  className: As,
                                  children: [
                                      s.jsx(Q, {
                                          reverse: !0,
                                          type: ce.tankXP,
                                          enough: o,
                                          size: l.iconSize,
                                          className: Ds,
                                          children: s.jsx('div', {
                                              className: Ss,
                                              children: Ms.formatNumber('integral', i),
                                          }),
                                      }),
                                      s.jsx(ks, {}),
                                  ],
                              }),
                              s.jsx(le, {
                                  ...(c && m),
                                  disabled: c,
                                  size: l.buttonSize,
                                  theme: de.primary,
                                  onClick: t.research,
                                  classNames: { base: Cs },
                                  children: s.jsx('div', {
                                      className: Ts,
                                      children: zs.readOrEmpty('veh_skill_tree.research.button.label'),
                                  }),
                              }),
                          ],
                      })
                    : s.jsx('div', { className: Is, children: zs.readOrEmpty(`veh_skill_tree.research.${_}`) }),
            }),
        ],
    });
});
const [Fs, Ls] = f()(({ observableModel: e }) => ({ tree: e.object('tree'), ...e.primitives(['locationId']) }), _e),
    Os = 'EntryPoint_28a00af8',
    Hs = 'EntryPoint_bg_1daedee',
    Gs = 'EntryPoint_base__vanity_25e6c411',
    Vs = 'EntryPoint_hover_4ee0996f',
    Ws = 'EntryPoint_glare_c5ebb1f5',
    qs = j.resolve('views');
r(function (e) {
    const t = E({ value: 'small' }, { large: { value: 'big' } }),
        { model: r } = Ls(),
        { isProgressionCompleted: n, isPrestigeGlareShown: o } = r.tree.get(),
        c = P(),
        l = me(
            'vanity_entry_point',
            i.useMemo(
                () => ({
                    isUnlocked: n,
                    resId: qs.read((e) => e.mono.vehicle_hub.tooltips.vanity_entry_point_tooltip('resId')),
                }),
                [n],
            ),
        ),
        d = me(
            'back_to_main_progression',
            i.useMemo(
                () => ({
                    resId: qs.read((e) => e.mono.vehicle_hub.tooltips.back_to_main_progression_tooltip('resId')),
                }),
                [],
            ),
        ),
        _ = e.vanity ? d : l;
    return s.jsx('div', {
        ..._,
        className: a(Os, e.vanity && Gs),
        onClick: function () {
            (_.onClick(), e.onClick());
        },
        onMouseEnter: function (e) {
            (_.onMouseEnter(e), c.play('mouse-enter', { target: 'EntryPoint' }));
        },
        children: s.jsxs('div', {
            className: Hs,
            children: [
                !e.vanity &&
                    n &&
                    !o &&
                    s.jsx(Pt, {
                        maskPath: `skillTree.entryPoint.progression.${t.value}.vanityProgressionMask`,
                        classNames: Ws,
                    }),
                s.jsx('div', { className: Vs }),
            ],
        }),
    });
});
const Us = {
    base: 'Award_d432d943',
    title: 'Award_title_6324b0ef',
    subtitle: 'Award_subtitle_1c41966c',
    image: 'Award_image_583ed8fb',
};
function Qs({ icon: e, title: t, name: a, subtitle: r, rarity: n, tooltipId: i, tooltipContentId: o }) {
    const c = E(
        { size: B.S296x222 },
        { medium: { size: B.S400x300 }, large: { size: B.S400x300 }, extraLarge: { size: B.S600x450 } },
    );
    return s.jsxs('div', {
        className: Us.base,
        children: [
            s.jsx('div', {
                className: Us.reward,
                children: s.jsx(A, {
                    image: ke({ name: a, icon: e }, c.size),
                    name: e,
                    size: c.size,
                    classNames: { image: Us.image, overlay: Us.overlay },
                    special: 'attachment' === a ? n : void 0,
                    tooltipArgs: { contentId: Number(o), args: { tooltipId: i } },
                }),
            }),
            t && s.jsx('div', { className: Us.title, children: t }),
            r && s.jsx(Pe, { className: Us.subtitle, subtitle: r, rarity: n }),
        ],
    });
}
const Xs = { base: 'Content_4e4f81e9' },
    Zs = r(function () {
        const { model: e } = ye(),
            t = e.rewards.get();
        return s.jsx('div', {
            className: Xs.base,
            children: s.jsx('div', { className: Xs.rewards, children: t.map((e, t) => s.jsx(Qs, { ...e }, t)) }),
        });
    }),
    Ys = 'Footer_97a7d8ee',
    Js = 'Footer_button_5cced810',
    Ks = j.resolve('strings'),
    ea = r(function () {
        const { controls: e, model: t } = ye(),
            { isBroken: a } = t.vehicleInfo.get(),
            r = E(
                { size: le.sizes.small },
                {
                    medium: { size: le.sizes.medium },
                    large: { size: le.sizes.medium },
                    extraLarge: { size: le.sizes.medium },
                },
            );
        return s.jsxs('div', {
            className: Ys,
            children: [
                !a &&
                    s.jsx('div', {
                        className: Js,
                        children: s.jsx(le, {
                            theme: le.themes.primary,
                            size: r.size,
                            onClick: e.open,
                            children: Ks.readOrEmpty('veh_skill_tree.rewardScreen.button.check'),
                        }),
                    }),
                s.jsx('div', {
                    className: Js,
                    children: s.jsx(le, {
                        theme: le.themes.secondary,
                        size: r.size,
                        onClick: e.close,
                        children: Ks.readOrEmpty('veh_skill_tree.rewardScreen.button.accept'),
                    }),
                }),
            ],
        });
    }),
    ta = 'Header_643260c1',
    sa = 'Header_title_b9bc7c6a',
    aa = 'Header_subtitle_65f475ba',
    ra = 'Header_vehicleInfo_c5d7893b',
    na = j.resolve('strings'),
    ia = r(function () {
        const { model: e } = ye(),
            { level: t, type: a, name: r, isPremium: n, prestigeLevel: i } = e.vehicleInfo.get();
        G(ue(a), `The ${a} is not defined in vehicleType`);
        const o = {
            prestigeLevel: i,
            level: s.jsx(he.Level, { value: t, className: ra }),
            type: s.jsx(he.Type, { type: a, size: he.Type.sizes.x24x24, className: ra, premium: n }),
            name: s.jsx(he.Name, { className: ra, children: r }),
        };
        return s.jsxs('div', {
            className: ta,
            children: [
                s.jsx('div', { className: sa, children: na.readOrEmpty('veh_skill_tree.rewardScreen.title') }),
                s.jsx('div', {
                    className: aa,
                    children: s.jsx(w, { params: o, text: na.readOrEmpty('veh_skill_tree.rewardScreen.subtitle') }),
                }),
            ],
        });
    }),
    oa = 'App_bf8c0b7',
    ca = 'App_background_373696ad',
    la = 'App_body_ee191014',
    da = 'App_header_30c7a332',
    _a = 'App_footer_5c0f3dbd',
    ma = 'App_highlight_c9710a08',
    ua = 'App_ribbon_3e0bc85a',
    ha = r(function () {
        const { controls: e } = ye();
        return (
            be(pe.ESCAPE, e.close),
            s.jsxs('div', {
                className: oa,
                children: [
                    s.jsx('div', { className: ca }),
                    s.jsxs('div', {
                        className: la,
                        children: [s.jsx('div', { className: ma }), s.jsx('div', { className: ua }), s.jsx(Zs, {})],
                    }),
                    s.jsx('div', { className: da, children: s.jsx(ia, {}) }),
                    s.jsx('div', { className: _a, children: s.jsx(ea, {}) }),
                ],
            })
        );
    });
fe(s.jsx(ve, { children: s.jsx(ge, { children: s.jsx(ha, {}) }) }));
