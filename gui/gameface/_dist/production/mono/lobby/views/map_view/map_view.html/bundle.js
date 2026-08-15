import {
    g as e,
    o as t,
    r as o,
    j as a,
    x as n,
    y as r,
    w as s,
    z as i,
    p as l,
    f as c,
    A as d,
    B as m,
    q as u,
    C as p,
    D as _,
    E as f,
    F as h,
    R as g,
    n as x,
    v,
} from '../../../chunks/vendor.js';
import {
    c as y,
    m as N,
    n as b,
    i as C,
    h as E,
    j as w,
    l as I,
    o as j,
    p as S,
    q as L,
    s as k,
    t as M,
    v as B,
    w as A,
    x as P,
    y as H,
    z as T,
    A as F,
    D as O,
    E as $,
    G as V,
    H as D,
    d as q,
    F as U,
    P as Y,
    J as Q,
    r as X,
    K as G,
    M as Z,
    L as z,
    T as K,
    N as W,
    O as J,
    Q as ee,
    R as te,
    B as oe,
    a as ae,
    S as ne,
    W as re,
    X as se,
    I as ie,
    Y as le,
    V as ce,
    f as de,
    Z as me,
    _ as ue,
    $ as pe,
    e as _e,
    a0 as fe,
    a1 as he,
    a2 as ge,
    a3 as xe,
    a4 as ve,
    a5 as ye,
    a6 as Ne,
    a7 as be,
    a8 as Ce,
    a9 as Ee,
    aa as we,
    ab as Ie,
    ac as je,
    ad as Se,
    ae as Le,
    af as ke,
    ag as Me,
    ah as Be,
    u as Ae,
    ai as Pe,
    k as He,
    aj as Te,
    U as Fe,
    g as Re,
    b as Oe,
} from '../../../chunks/lib.js';
import { B as $e, g as Ve } from '../../../chunks/bonuses_mocks.js';
import {
    N as De,
    f as qe,
    a as Ue,
    h as Ye,
    g as Qe,
    b as Xe,
    c as Ge,
    i as Ze,
    d as ze,
    s as Ke,
    M as We,
    e as Je,
    j as et,
    k as tt,
    l as ot,
    m as at,
    n as nt,
    o as rt,
    p as st,
} from '../../../chunks/helpers.js';
import { D as it } from '../../../chunks/done_icon.js';
import { R as lt } from '../../../chunks/reward.js';
import { J as ct } from '../../../chunks/jm_reward.js';
/* empty css                    */ const dt = [
        {
            index: 1,
            isCompensation: !1,
            label: 'Components',
            name: 'equipCoin',
            probability: 0,
            tooltipContentId: '27',
            tooltipId: '63',
            value: '250',
        },
        {
            index: 1,
            isCompensation: !1,
            label: 'Credits',
            name: 'credits',
            probability: 0,
            tooltipContentId: '27',
            tooltipId: '103',
            value: '75000',
        },
        {
            discount: 0,
            icon: 'attachment',
            iconName: 'Cus_147_CS_EnigmaMachine',
            index: 3,
            intCD: 292556,
            isCompensation: !1,
            label: 'Enigma EnigmaMachine EnigmaEnigmaMachine Enigma',
            level: 0,
            name: 'customizations',
            probability: 0,
            rarity: 'legendary',
            selectedVehicle: '',
            tooltipContentId: '27',
            tooltipId: '3',
            value: '1',
            variadicID: '',
        },
        {
            discount: 0,
            icon: 'attachment',
            iconName: 'Cus_148_CS_RecordingEquipment',
            index: 2,
            intCD: 292812,
            isCompensation: !1,
            label: 'Recording Equipment',
            level: 0,
            name: 'customizations',
            probability: 0,
            rarity: 'epic',
            selectedVehicle: '',
            tooltipContentId: '27',
            tooltipId: '2',
            value: '1',
            variadicID: '',
        },
        {
            name: 'battleToken',
            hasNewActivity: !1,
            icon: 'hoCoin',
            iconBig: 'img://holiday_ops/gui/maps/icons/quests/bonuses/big/hoCoin.extend.png',
            iconSmall: 'img://holiday_ops/gui/maps/icons/quests/bonuses/small/hoCoin.extend.png',
            index: 1,
            intCD: 0,
            isCompensation: !1,
            label: 'Gift Terminal Tokens',
            probability: 0,
            tooltipContentId: '709',
            tooltipId: '105',
            value: '3',
        },
        {
            index: 0,
            isCompensation: !1,
            label: 'Coccodrillo',
            name: 'vehicles',
            probability: 0,
            tooltipContentId: '',
            tooltipId: '',
            value: 'Coccodrillo',
        },
    ],
    mt = {
        id: '',
        nextNodeIds: [],
        nodeType: De.Small,
        isExplored: !1,
        posX: -100,
        posY: -350,
        hasLore: !1,
        loreX: 0,
        loreY: 0,
        price: 0,
        bonuses: [$e.EXP_FREE],
        pathFromCurrentNode: [],
        canAfford: !0,
        hasFullscreenReward: !1,
        loreVisited: !1,
    };
(De.Start, De.Medium, De.Large, De.Medium);
function ut(e) {
    return 2 === e || 0 === e ? [$e.XP_BOOSTER, $e.CRYSTAL, $e.CREDIT, $e.OPTICS, $e.GUIDE] : [$e.EXP_FREE];
}
(Array.from({ length: 4 }).map((e, t, o) => ({
    id: `${7 + t}`,
    nodeType: De.Small,
    isExplored: !1,
    bonuses: ut(t),
    hasLore: !1,
    canAfford: !0,
    loreVisited: !1,
    loreX: 0,
    loreY: 0,
    posX: 500 - 100 * t,
    posY: 550,
    nextNodeIds: [`${8 + t}`],
    pathFromCurrentNode: ['1', '2', '4', '6', ...Array.from({ length: t + 1 }).map((e, t) => `${7 + t}`)],
    price: 100,
    hasFullscreenReward: !1,
})),
    Array.from({ length: 2 }).map((e, t, o) => ({
        id: `${11 + t}`,
        nodeType: De.Small,
        isExplored: !1,
        loreVisited: !1,
        canAfford: !0,
        bonuses: [$e.EXP_FREE],
        hasLore: !1,
        loreX: 0,
        loreY: 0,
        posX: 200,
        posY: 450 - 100 * t,
        nextNodeIds: t === o.length - 1 ? ['13'] : [`${12 + t}`],
        pathFromCurrentNode: [
            '1',
            '2',
            '4',
            '6',
            '7',
            '8',
            '9',
            '10',
            ...Array.from({ length: t + 1 }).map((e, t) => `${11 + t}`),
        ],
        price: 100,
        hasFullscreenReward: !1,
    })),
    De.Large);
(De.Start,
    Array.from({ length: 30 }).map((e, t, o) => ({
        ...mt,
        id: `${2 + t}`,
        nodeType: De.Small,
        isExplored: !1,
        bonuses: [$e.EXP_FREE],
        hasLore: !1,
        canAfford: !0,
        loreVisited: !1,
        loreX: 0,
        loreY: 0,
        posX: 500 + 100 * t,
        posY: 550,
        nextNodeIds: 29 === t ? [] : [`${3 + t}`],
        pathFromCurrentNode: ['1', ...Array.from({ length: t + 1 }).map((e, t) => `${2 + t}`)],
        price: 100,
        hasFullscreenReward: !1,
    })));
let pt = null;
const _t = {
        id: '',
        description: '',
        currentProgress: 500,
        totalProgress: 1500,
        earnedProgress: 300,
        reward: 1225,
        iconKey: 'hurt_vehicles_silver',
        isCompleted: !1,
    },
    ft = {
        getter: y({
            nodes: 's-- -r- -r- m-r- -b- o-b- -r- l-r-3'.split(' ').reduce((e, t, o) => {
                const [a, n, r] = t.split('-'),
                    s = `${o + 1}`,
                    i = { ...mt, id: s, posX: 400, posY: 450, nextNodeIds: [], pathFromCurrentNode: [s] };
                return (
                    's' === a && (i.nodeType = De.Start),
                    'm' === a && ((i.nodeType = De.Medium), (i.bonuses = [$e.ATTACHMENT_148])),
                    'l' === a && (i.nodeType = De.Large),
                    'o' === a && (i.nodeType = De.Locked),
                    pt &&
                        ('r' === n && pt && ((i.posX = pt.posX + 100), (i.posY = pt.posY)),
                        'b' === n && pt && ((i.posX = pt.posX), (i.posY = pt.posY + 100)),
                        'l' === n && pt && ((i.posX = pt.posX - 100), (i.posY = pt.posY)),
                        't' === n && pt && ((i.posX = pt.posX), (i.posY = pt.posY - 100)),
                        pt.nextNodeIds.push(s),
                        (i.pathFromCurrentNode = [...pt.pathFromCurrentNode, s])),
                    r && (i.bonuses = Ve(parseInt(r))),
                    (pt = i),
                    e.push(i),
                    e
                );
            }, []),
            currentNodeId: '1',
            questCards: [
                {
                    ..._t,
                    id: '1',
                    description:
                        'Cause 9 000 HP of damage to enemy vehicle of damage to enemy vehicle Cause 9 000 HP of damage to enemy vehicle of damage to enemy vehicle',
                },
                {
                    ..._t,
                    id: '2',
                    description: 'Test 9 000 HP of damage to empty vehicle of damage to low vehicle',
                    iconKey: 'damage_block_silver',
                    reward: 700,
                },
                {
                    ..._t,
                    id: '3',
                    description: 'Test 9 000 HP of damage to empty vehicle of damage to low vehicle',
                    iconKey: 'discover_silver',
                    currentProgress: 1500,
                    totalProgress: 1500,
                    isCompleted: !0,
                },
                {
                    ..._t,
                    id: '4',
                    description: 'Test 9 000 HP of damage to empty vehicle of damage to low vehicle',
                    iconKey: 'damage_silver',
                    totalProgress: 0,
                },
            ],
            timeTillNewQuests: 1e4,
            coinTokenCount: 500,
            unlockTokenCount: 100,
            timeTillEnd: 7e4,
            isCompleted: !1,
            isLastGameDay: !1,
            isInteractivityLocked: !1,
            isQuestCompletedShow: !1,
            movingFailed: !1,
            bannerShown: !0,
            exploreAnimationNodeId: '',
            exploreAnimationUnpause: '',
            nodePopover: {
                coinTokenPrice: 10,
                unlockTokenPrice: 10,
                rewards: [$e.ATTACHMENT, $e.VEHICLE, $e.TOKEN, $e.XP_BOOSTER, $e.CRYSTAL, $e.OPTICS],
                unlockTokenNodeId: '10',
            },
            onQuestProgressShown: b,
            onQuestCompletedShown: b,
            onSelectNode: b,
            onChangeCurrentNode: b,
            onExplore: b,
            onExploreAnimationFinished: b,
            onInterruptForScreenShow: b,
            onCurrentNodeSynced: b,
            onPreviewLore: b,
            onRewardPreview: b,
            onBannerOpen: b,
        }),
        controls: ({ model: t }) => {
            const o = e(() => {
                t.exploreAnimationUnpause.set('');
            });
            return {
                ...N({
                    exploreAnimationFinished: () => {
                        const e = t.nodes.get(),
                            a = t.exploreAnimationNodeId.get(),
                            n = { allIds: [...e.allIds], byId: { ...e.byId } };
                        (t.computes.node(a).pathFromCurrentNode.forEach((e) => {
                            const t = n.byId[e];
                            t && (t.isExplored = !0);
                        }),
                            t.exploreAnimationNodeId.set(''),
                            t.nodes.set(n),
                            o());
                    },
                    changeCurrentNode: (e) => {
                        t.currentNodeId.set(e);
                    },
                    onCurrentNodeSynced: () => {
                        t.movingFailed.set(!1);
                    },
                    explore: (e) => {
                        t.exploreAnimationNodeId.set(e);
                    },
                    completeMap: () => {
                        t.isCompleted.set(!0);
                    },
                    completeQuests: () => {
                        t.questCards.set(t.questCards.get().map((e) => ({ ...e, isCompleted: !0 })));
                    },
                    uncompleteQuests: () => {
                        t.questCards.set(t.questCards.get().map((e) => ({ ...e, isCompleted: !1 })));
                    },
                    questCompletedShown: () => {
                        t.isQuestCompletedShow.set(!0);
                    },
                    showBanner: () => {
                        t.bannerShown.set(!0);
                    },
                }),
                interruptForScreenShow: (a) => {
                    (t.exploreAnimationUnpause.get() && o(),
                        setTimeout(
                            e(() => {
                                t.exploreAnimationUnpause.set(a);
                            }),
                            2e3,
                        ));
                },
            };
        },
    },
    [ht, gt] = C('MapViewModelProvider')(
        ({ observableModel: e }) => {
            const o = {
                    ...e.primitives([
                        'coinTokenCount',
                        'timeTillEnd',
                        'isCompleted',
                        'unlockTokenCount',
                        'isLastGameDay',
                        'timeTillNewQuests',
                        'isQuestCompletedShow',
                        'currentNodeId',
                        'movingFailed',
                        'exploreAnimationNodeId',
                        'exploreAnimationUnpause',
                        'isInteractivityLocked',
                        'bannerShown',
                    ]),
                    questCards: e.arrayClone('questCards'),
                    nodes: e.transform((e) => {
                        const t = E(e);
                        return { byId: w('id', t), allIds: t.map((e) => e.id) };
                    }, 'nodes'),
                    popover: e.object('nodePopover'),
                    popoverRewards: e.array('nodePopover.rewards'),
                    hoveredNodeId: t.box(null),
                    selectedNodeId: t.box(null),
                    attentionNodeId: t.box(null),
                },
                a = I.structural((e) => {
                    const t = o.nodes.get().byId[e];
                    return (j(void 0 !== t, `Node with id ${e} not found`), t);
                }),
                n = I.shallow((e) => S(e.bonuses, (e) => e.name === k.Vehicles) ?? L(e.bonuses, 0)),
                r = I.primitive((e) => o.hoveredNodeId.get() === e),
                s = I.primitive(() => {
                    const e = o.selectedNodeId.get();
                    if (e) return a(e).nodeType === De.Locked;
                }),
                i = I.structural((e) => {
                    const t = a(e).pathFromCurrentNode,
                        o = qe(t, (e) => a(e).isExplored);
                    return o === t.length - 1 ? null : t.slice(-1 === o ? 0 : o);
                }),
                l = I.structural((e) => {
                    const t = i(e);
                    if (!t) return null;
                    const o = t.slice(1),
                        n = qe(o, (e) => a(e).canAfford);
                    if (-1 === n) return null;
                    const r = n + 1;
                    return t.slice(0, r + 1);
                }),
                c = I.primitive((e, t) => {
                    const n = o.selectedNodeId.get() ?? o.hoveredNodeId.get();
                    if (null === n) return null;
                    const r = i(n);
                    return r && Ue(r, e, t) ? (a(t).canAfford ? Ye.enough : Ye.notEnough) : null;
                }),
                d = I.structural(() => {
                    const e = o.selectedNodeId.get();
                    return null === e ? null : l(e);
                }),
                m = I.primitive((e, t) => {
                    const o = d();
                    return o && Ue(o, e, t) ? o.indexOf(e) : null;
                }),
                u = I.structural((e) => {
                    const t = a(e),
                        [o, n] = t.pathFromCurrentNode,
                        r = t.pathFromCurrentNode.at(-2),
                        s = t.pathFromCurrentNode.at(-1);
                    if (o && n && r && s)
                        return { disappearingDirection: Qe(a(o), a(n)), appearingDirection: Qe(a(s), a(r)) };
                });
            return {
                ...o,
                computes: {
                    node: a,
                    nodeMainBonus: n,
                    isNodeHovered: r,
                    edgeHighlight: c,
                    selectedExplorablePath: d,
                    edgeIndexInSelectedExplorablePath: m,
                    unexploredPathFromNode: i,
                    isLockedPopover: s,
                    moveDirectionsFromNode: u,
                },
            };
        },
        ({ model: t, externalModel: o }) => {
            const a = e((e) => {
                    t.hoveredNodeId.set(e);
                }),
                n = e((e) => {
                    t.selectedNodeId.set(e);
                }),
                r = e((e) => {
                    t.attentionNodeId.set(e);
                });
            return {
                questProgressShown: o.createCallback((e) => ({ questId: e }), 'onQuestProgressShown'),
                selectNode: o.createCallback((e) => ({ nodeId: e }), 'onSelectNode'),
                explore: o.createCallback((e) => ({ nodeId: e }), 'onExplore'),
                interruptForScreenShow: o.createCallback((e) => ({ nodeId: e }), 'onInterruptForScreenShow'),
                questCompletedShown: o.createCallbackNoArgs('onQuestCompletedShown'),
                exploreAnimationFinished: o.createCallbackNoArgs('onExploreAnimationFinished'),
                changeCurrentNode: o.createCallback((e) => ({ nodeId: e }), 'onChangeCurrentNode'),
                openBanner: o.createCallbackNoArgs('onBannerOpen'),
                onCurrentNodeSynced: o.createCallbackNoArgs('onCurrentNodeSynced'),
                previewLore: o.createCallback((e) => ({ loreNodeId: e }), 'onPreviewLore'),
                previewReward: o.createCallback((e) => ({ nodeId: e }), 'onRewardPreview'),
                setHoveredNodeId: a,
                setSelectedNodeId: n,
                setAttentionNodeId: r,
            };
        },
    ),
    xt = 'idle',
    vt = 'running',
    yt = 'end';
const Nt = o.createContext(null);
function bt() {
    const e = o.useContext(Nt);
    if (null === e)
        throw new Error(
            'You can use the "useChainOfNodesContext" hooks only with the "ChainOfNodesProvider" component',
        );
    return e;
}
const Ct = 'initial',
    Et = 'idle',
    wt = 'enter',
    It = 'leave',
    jt = 'quests',
    St = 'questsCompleted',
    Lt = 'mapCompleted',
    kt = n({
        id: 'footerStateMachine',
        initial: Ct,
        context: { questsCompleted: null, mapCompleted: null, isQuestCompletedShown: null },
        on: {
            MAP_COMPLETED: { actions: r({ mapCompleted: (e) => !0 }) },
            QUESTS_COMPLETED: { actions: r({ questsCompleted: (e) => !0 }) },
            NEW_QUESTS: { actions: r({ questsCompleted: (e) => !1 }) },
        },
        states: {
            [Ct]: {
                always: [
                    { target: `${Lt}.${Et}`, cond: (e) => Boolean(e.mapCompleted) },
                    { target: St, cond: (e) => Boolean(e.questsCompleted) && Boolean(e.isQuestCompletedShown) },
                    { target: jt },
                ],
            },
            [jt]: {
                initial: wt,
                states: {
                    [wt]: { on: { ANIMATION_FINISHED: { target: Et } } },
                    [Et]: {
                        always: [{ target: It, cond: (e) => Boolean(e.mapCompleted) || Boolean(e.questsCompleted) }],
                    },
                    [It]: {
                        on: {
                            ANIMATION_FINISHED: [
                                { target: `#footerStateMachine.${Lt}`, cond: (e) => Boolean(e.mapCompleted) },
                                { target: `#footerStateMachine.${St}`, cond: (e) => Boolean(e.questsCompleted) },
                                { target: wt },
                            ],
                        },
                    },
                },
            },
            [St]: {
                initial: Et,
                states: {
                    [Et]: {
                        always: [
                            { target: It, cond: (e) => Boolean(e.mapCompleted) || !1 === Boolean(e.questsCompleted) },
                        ],
                    },
                    [It]: {
                        on: {
                            ANIMATION_FINISHED: [
                                { target: `#footerStateMachine.${Lt}`, cond: (e) => Boolean(e.mapCompleted) },
                                { target: `#footerStateMachine.${jt}`, cond: (e) => !1 === Boolean(e.questsCompleted) },
                                { target: Et },
                            ],
                        },
                    },
                },
            },
            [Lt]: {
                initial: wt,
                states: { [wt]: { on: { ANIMATION_FINISHED: { target: 'idle' } } }, [Et]: { type: 'final' } },
            },
        },
    }),
    Mt = o.createContext(null),
    Bt = s((e) => {
        const { model: t } = gt(),
            o = i(kt, {
                context: {
                    mapCompleted: t.isCompleted.get(),
                    questsCompleted: t.questCards.get().every((e) => e.isCompleted),
                    isQuestCompletedShown: t.isQuestCompletedShow.get(),
                },
            });
        return a.jsx(Mt.Provider, { value: o, children: e.children });
    }),
    At = () => {
        const e = o.useContext(Mt);
        return (j(null !== e, 'Context for footer state machine does not exist'), e);
    },
    Pt = { animationConfig: { tension: 140, friction: 30 } },
    Ht = (e, t = 0) => {
        const o = t,
            a = e.offsetWidth - (e.parentElement?.offsetWidth ?? 0) - t,
            n = t,
            r = e.scrollHeight - e.offsetHeight - t;
        return a < o || r < n
            ? (console.warn('Scroll container has invalid bounds.'), { x: [0, 0], y: [0, 0] })
            : { x: [o, a], y: [n, r] };
    },
    Tt = (e, t, o = 0) => {
        const {
            x: [a, n],
            y: [r, s],
        } = Ht(e, o);
        return { x: $(a, n, t.x), y: $(r, s, t.y) };
    },
    Ft = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
    Rt = (e) => ({ width: e.offsetWidth, height: e.scrollHeight }),
    Ot = (e = {}) => {
        const { settings: t = Pt, padding: a = 0 } = e,
            n = o.useRef(null),
            r = o.useRef(null),
            s = o.useRef({ wrapper: { width: 0, height: 0 }, container: { width: 0, height: 0 } }),
            i = M(),
            c = B(
                () => {
                    A();
                },
                [],
                150,
            ),
            [d, m] = l(() => ({
                scrollPositionX: 0,
                scrollPositionY: 0,
                onChange: (e) => {
                    const t = n.current;
                    t &&
                        (((e, t) => {
                            ((e.style.transform = `translateX(-${Math.max(0, Math.trunc(t.value.scrollPositionX ?? 0))}px)`),
                                (e.scrollTop = Math.max(0, Math.trunc(t.value.scrollPositionY ?? 0))));
                        })(t, e),
                        i.trigger('change', e));
                },
                onRest: (e) => i.trigger('rest', e),
                onStart: (e) => i.trigger('start', e),
                onPause: (e) => i.trigger('pause', e),
            })),
            u = o.useCallback(
                function (e, { immediate: o = !1, reset: r = !0, onResolve: s, duration: i, easing: l } = {}) {
                    const u = n.current;
                    if (!u) return;
                    const p = Tt(u, e, a);
                    if (d.scrollPositionX.goal === p.x && d.scrollPositionY.goal === p.y) return void s?.();
                    const _ = Tt(u, { x: d.scrollPositionX.get(), y: d.scrollPositionY.get() });
                    m.start({
                        scrollPositionX: p.x,
                        scrollPositionY: p.y,
                        immediate: o,
                        reset: r,
                        config: { ...t.animationConfig, duration: i, easing: l },
                        from: { scrollPositionX: _.x, scrollPositionY: _.y },
                        onChange: () => {
                            c();
                        },
                        onResolve: s,
                    });
                },
                [a, d.scrollPositionX, d.scrollPositionY, m, t.animationConfig, c],
            ),
            p = o.useCallback(
                function () {
                    n.current &&
                        (u({ x: d.scrollPositionX.goal, y: d.scrollPositionY.goal }, { immediate: !0 }),
                        i.trigger('resizeHandled'));
                },
                [u, d.scrollPositionX.goal, d.scrollPositionY.goal, i],
            );
        P(r, (e) => {
            const t = e.target;
            if (!(t instanceof HTMLElement)) return;
            const o = Ft(t);
            (s.current.wrapper.height === o.height && s.current.wrapper.width === o.width) || p();
        });
        const _ = H(function () {
                const e = n.current;
                if (!e) return;
                const t = Rt(e),
                    o = r.current ? Ft(r.current) : { width: 0, height: 0 };
                (s.current.container.width === t.width &&
                    s.current.container.height === t.height &&
                    s.current.wrapper.width === o.width &&
                    s.current.wrapper.height === o.height) ||
                    (u({ x: d.scrollPositionX.goal, y: d.scrollPositionY.goal }, { immediate: !0 }),
                    (s.current.container = t),
                    (s.current.wrapper = o),
                    i.trigger('recalculateContent'));
            }),
            f = T();
        o.useEffect(() => {
            const e = F(window, 'resize', () => f.run(p)),
                t = O(() => f.run(p));
            return () => {
                (e(), t());
            };
        }, [p, f]);
        return o.useMemo(
            () => ({
                getWrapperSizes: () => (r.current ? Ft(r.current) : void 0),
                getContainerSizes: () => (n.current ? Rt(n.current) : void 0),
                getBounds: () =>
                    n.current
                        ? Ht(n.current)
                        : (console.warn('getBounds: contentRef.current is null'), { x: [0, 0], y: [0, 0] }),
                settings: t,
                padding: a,
                clampPosition: Tt,
                applyScroll: u,
                contentRef: n,
                wrapperRef: r,
                scrollPosition: m,
                animationScroll: d,
                recalculateContent: _,
                events: { on: i.on, off: i.off },
            }),
            [t, a, u, m, d, _, i.on, i.off],
        );
    },
    $t = 'Scroll_wrapper_df2306f3',
    Vt = 'Scroll_content_f1bdd2c1',
    Dt = o.createContext(void 0);
function qt() {
    const e = o.useContext(Dt);
    if (!e) throw new Error('useScroll must be used within a Scroll.Base component');
    return e;
}
function Ut({ classNames: e, children: t }) {
    const { api: o } = qt();
    return a.jsx('div', {
        className: c($t, e?.wrapper),
        ref: o.wrapperRef,
        children: a.jsx('div', { className: c(Vt, e?.content), ref: o.contentRef, children: t }),
    });
}
const Yt = { type: 'idle' };
const Qt = 'idle',
    Xt = 'appearing',
    Gt = 'disappearing',
    Zt = 'left',
    zt = 'right',
    Kt = 'top',
    Wt = 'bottom',
    Jt = 'resetting',
    eo = n({
        id: 'pointerStateMachine',
        initial: Qt,
        context: { currentNodeId: null, nextNode: null, disappearingDirection: null, appearingDirection: null },
        states: {
            [Qt]: {
                always: { cond: (e) => null !== e.nextNode, target: Gt },
                on: {
                    MOVE: {
                        cond: (e, t) => e.currentNodeId !== t.nodeId,
                        target: Gt,
                        actions: r({
                            nextNode: (e, t) => t.nodeId,
                            appearingDirection: (e, t) => t.appearingDirection,
                            disappearingDirection: (e, t) => t.disappearingDirection,
                        }),
                    },
                    RESET: {
                        target: Jt,
                        actions: r({
                            currentNodeId: (e, t) => t.currentNodeId,
                            nextNode: (e) => null,
                            appearingDirection: (e) => null,
                            disappearingDirection: (e) => null,
                        }),
                    },
                },
            },
            [Gt]: {
                initial: 'initial',
                states: {
                    initial: {
                        always: [
                            { target: Zt, cond: (e) => 'left' === e.disappearingDirection },
                            { target: zt, cond: (e) => 'right' === e.disappearingDirection },
                            { target: Kt, cond: (e) => 'top' === e.disappearingDirection },
                            { target: Wt, cond: (e) => 'bottom' === e.disappearingDirection },
                        ],
                    },
                    left: {},
                    right: {},
                    top: {},
                    bottom: {},
                },
                on: {
                    ANIMATION_FINISHED: {
                        target: Xt,
                        actions: r({ currentNodeId: (e) => e.nextNode, nextNode: (e) => null }),
                    },
                    MOVE: {
                        actions: r({
                            nextNode: (e, t) => t.nodeId,
                            appearingDirection: (e, t) => t.appearingDirection,
                            disappearingDirection: (e, t) => t.disappearingDirection,
                        }),
                    },
                    RESET: {
                        target: Jt,
                        actions: r({
                            currentNodeId: (e, t) => t.currentNodeId,
                            nextNode: (e) => null,
                            appearingDirection: (e) => null,
                            disappearingDirection: (e) => null,
                        }),
                    },
                },
            },
            [Xt]: {
                initial: 'initial',
                states: {
                    initial: {
                        always: [
                            { target: Zt, cond: (e) => 'left' === e.appearingDirection },
                            { target: zt, cond: (e) => 'right' === e.appearingDirection },
                            { target: Kt, cond: (e) => 'top' === e.appearingDirection },
                            { target: Wt, cond: (e) => 'bottom' === e.appearingDirection },
                        ],
                    },
                    left: {},
                    right: {},
                    top: {},
                    bottom: {},
                },
                on: {
                    ANIMATION_FINISHED: { target: Qt },
                    MOVE: {
                        actions: r({
                            nextNode: (e, t) => t.nodeId,
                            appearingDirection: (e, t) => t.appearingDirection,
                            disappearingDirection: (e, t) => t.disappearingDirection,
                        }),
                    },
                    RESET: {
                        target: Jt,
                        actions: r({
                            currentNodeId: (e, t) => t.currentNodeId,
                            nextNode: (e) => null,
                            appearingDirection: (e) => null,
                            disappearingDirection: (e) => null,
                        }),
                    },
                },
            },
            [Jt]: { on: { RESET_FINISHED: Qt } },
        },
    }),
    to = o.createContext(null),
    oo = s((e) => {
        const { model: t } = gt(),
            o = t.computes.node(t.currentNodeId.get()),
            n = i(eo, { context: { currentNodeId: o.id } });
        return a.jsx(to.Provider, { value: n, children: e.children });
    }),
    ao = () => {
        const e = o.useContext(to);
        return (j(null !== e, 'Context for pointer state machine does not exist'), e);
    },
    no = 'MapCompleted_9d6ce05e',
    ro = 'MapCompleted_background_8d3a6ed0',
    so = 'MapCompleted_base__enter_2826266b',
    io = 'MapCompleted_laurel_7c7018ad',
    lo = 'MapCompleted_laurel__right_91fd04aa',
    co = 'MapCompleted_title_bdd13b19',
    mo = 'MapCompleted_doneIcon_4732fd0c',
    uo = 'MapCompleted_text_158e085',
    po = s(function ({ className: e }) {
        const t = q(),
            n = At(),
            [r, s] = d(n),
            i = r.matches(`${Lt}.${wt}`);
        return (
            o.useEffect(() => {
                i && t.play('animation', { target: 'mapCompletedState' });
            }, [i, t]),
            a.jsxs('div', {
                className: c(no, i && so, e),
                children: [
                    a.jsx('div', { className: ro }),
                    a.jsx('div', { className: io, onAnimationEnd: () => s('ANIMATION_FINISHED') }),
                    a.jsxs('div', {
                        className: co,
                        children: [
                            a.jsx(it, { className: mo }),
                            a.jsx(U, { path: 'journey_marathon.mapView.completed', className: uo }),
                        ],
                    }),
                    a.jsx('div', { className: c(io, lo) }),
                ],
            })
        );
    }),
    _o = 'ProgressBar_ad690be3',
    fo = 'ProgressBar_border_cc9e47f4',
    ho = 'ProgressBar_background_a63ef489',
    go = 'ProgressBar_edge_2fc6dd23',
    xo = 'ProgressBar_deltaInside_2fc6dd23',
    vo = o.memo(function ({ value: e, maxValue: t, from: n, onState: r }) {
        const s = o.useMemo(() => ({ edge: go }), []),
            i = o.useMemo(() => ({ inside: xo }), []);
        return a.jsxs(Y, {
            value: e,
            maxValue: t,
            className: _o,
            classNames: { border: fo, background: ho },
            status: Y.statuses.doneStatic,
            backgroundPattern:
                'R.images.journey_marathon.gui.maps.icons.journeyMarathon.progress_bar.bg_pattern_base_medium',
            children: [
                a.jsx(Y.Fill, {
                    classNames: s,
                    filledPattern:
                        'R.images.journey_marathon.gui.maps.icons.journeyMarathon.progress_bar.bg_pattern_base_filled_medium',
                    donePattern:
                        'R.images.journey_marathon.gui.maps.icons.journeyMarathon.progress_bar.bg_pattern_base_done_medium',
                }),
                e < t && a.jsx(Y.Delta, { from: n, steps: ['shrinking'], classNames: i, onState: r }),
            ],
        });
    });
vo.steps = Q;
const yo = {
        battles_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168223)' },
                    o.createElement('path', {
                        d: 'M20.5 5.5L8.3252 17.6348L9.79492 19.1045L8.81445 20.084L6.85547 18.124L4 21H3V20L5.87598 17.1445L3.91602 15.1855L4.89648 14.2061L6.36523 15.6748L10.0137 12.0137L3.5 5.5L3 3L5.5 3.5L12.0098 10.0098L18.5 3.5L21 3L20.5 5.5ZM17.6348 15.6748L19.1035 14.2061L20.084 15.1855L18.124 17.1445L21 20V21H20L17.1445 18.124L15.1855 20.084L14.2051 19.1045L15.6748 17.6348L13.4736 15.5176L14.7617 12.7705L17.6348 15.6748Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168223',
                            x: 3,
                            y: 3,
                            width: 18,
                            height: 19,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168223',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168223',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        damage_block_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168166)' },
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M4 14C4 17 12.0001 22 12.0001 22C12.0001 22 20 17 20 14C20 11 19.9976 7.13811 19.9976 3C19.9976 3 16.5214 2.00009 12.0002 2C7.47903 1.99991 4 3 4 3C4 7.1386 4 11 4 14ZM12.0001 19C12.0001 19 6.50093 14.9821 6.50093 13C6.50093 11.0179 6.53851 5 6.53851 5C6.53851 5 8.9659 4.5 12.0002 4.5C15.0345 4.5 17.462 5 17.462 5C17.462 5 17.4993 11 17.4993 13C17.4993 15 12.0001 19 12.0001 19Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168166',
                            x: 4,
                            y: 2,
                            width: 16,
                            height: 21,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168166',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168166',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        damage_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168169)' },
                    o.createElement(
                        'mask',
                        {
                            id: 'mask0_2180_168169',
                            style: { maskType: 'alpha' },
                            maskUnits: 'userSpaceOnUse',
                            x: 0,
                            y: 6,
                            width: 24,
                            height: 15,
                        },
                        o.createElement('path', {
                            d: 'M24 21H0V6H24V21ZM13.8838 14.9248L16.2471 17.2881L17.2852 16.25L14.9219 13.8867L13.8838 14.9248ZM9.71777 16.2295L9.85938 16.3711L10.6152 17.126L10.7568 17.2676L10.8984 17.126L12.9863 15.0371L13.1279 14.8955L12.0898 13.8574L9.71777 16.2295ZM9.72754 10.7686L12.0889 13.1299L13.127 12.0918L10.7656 9.73047L9.72754 10.7686ZM13.8535 12.0898L14.8916 13.1279L17.2646 10.7549L16.2266 9.7168L13.8535 12.0898Z',
                            fill: '#FECC88',
                        }),
                    ),
                    o.createElement(
                        'g',
                        { mask: 'url(#mask0_2180_168169)' },
                        o.createElement('path', {
                            d: 'M20.1299 17.9919C21.1487 17.9919 22.2046 16.3631 22.4766 15.8833C23 14.9596 23 13.1067 23 13.1067C23 13.1067 22.9475 11.7843 22 11.5C21.0525 11.2157 19.5 12 19.5 12H17.5L18.8252 10.6955L18.374 9.14959C18.1128 8.78438 17.7957 8.3348 17.5 8H17L15.2242 7H13.664L12.7747 7.56992H10.5649L8.9407 8.32662L7.56641 9H1V10H7.62109L8.02128 11.3043C8.02128 11.3043 9.02958 12.0957 9.42553 12.2844H7.57239V12.7391L3.5 13L3.02659 13.5383C2.99844 13.9992 2.99844 14.5391 3.02659 15C3.3316 15.513 5.78247 18 6.77506 18C7.76764 18 15.6819 17.9919 20.1299 17.9919Z',
                            fill: '#483128',
                        }),
                    ),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168169',
                            x: 1,
                            y: 7,
                            width: 22,
                            height: 12,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168169',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168169',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        discover_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168176)' },
                    o.createElement('path', {
                        d: 'M12 10C14.7614 10 17 12.2386 17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 12.2386 9.23858 10 12 10ZM12 12.5C10.6193 12.5 9.5 13.6193 9.5 15C9.5 16.3807 10.6193 17.5 12 17.5C13.3807 17.5 14.5 16.3807 14.5 15C14.5 13.6193 13.3807 12.5 12 12.5ZM12.0117 4C16.5559 4.13869 20.8637 6.11456 24 9.49902L22.5879 11.4932C21.2567 9.98423 19.6288 8.78255 17.8125 7.96875C15.9961 7.15494 14.0319 6.74755 12.0508 6.77246C10.0698 6.79739 8.11665 7.25417 6.32031 8.11328C4.52384 8.97251 2.9249 10.2148 1.62988 11.7568L0 9.46484C1.53482 7.76111 3.39177 6.39771 5.45703 5.45801C7.52249 4.51829 9.75326 4.02199 12.0117 4Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168176',
                            x: 0,
                            y: 4,
                            width: 24,
                            height: 17,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168176',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168176',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        experience_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168179)' },
                    o.createElement('path', {
                        d: 'M15 9H24L16.5 13.9336L19.5 22L12 17.5996L4.5 22L7.5 13.9336L0 9H9L12 1L15 9ZM10.502 10.6055H5.64844L9.75098 13.4229L7.87598 18.0332L12.001 15.7285L16.126 18.0332L14.251 13.4229L18.3545 10.6055H13.501L12.001 5.78906L10.502 10.6055Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168179',
                            x: 0,
                            y: 1,
                            width: 24,
                            height: 22,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168179',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168179',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        folder_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168182)' },
                    o.createElement('path', {
                        d: 'M12 0C12.552 5.31647e-07 13 0.6714 13 1.5C13 1.68966 12.9921 1.85527 12.9785 2H18C19.1045 2.0001 20 2.89549 20 4V10L21 11L19.7227 21.2471C19.5979 22.248 18.7469 22.9997 17.7383 23H6.26953C5.26128 22.9999 4.4097 22.2494 4.28418 21.249L3 11H4V4C4 2.89552 4.89556 2.00015 6 2H11.0215C11.0079 1.85527 11 1.68966 11 1.5C11 0.6714 11.448 0 12 0ZM11.5 12C10.6716 12.0001 10 12.6716 10 13.5V16.5C10 17.3284 10.6716 17.9999 11.5 18H12.5C13.3283 17.9999 14 17.3284 14 16.5V13.5C14 12.6716 13.3283 12.0001 12.5 12H11.5ZM11.4004 14.2998C11.7779 14.1112 12.2221 14.1113 12.5996 14.2998C12.8592 14.4296 13.0704 14.6408 13.2002 14.9004C13.3888 15.2779 13.3888 15.7221 13.2002 16.0996C13.0704 16.3592 12.8592 16.5704 12.5996 16.7002C12.2221 16.8887 11.7779 16.8888 11.4004 16.7002C11.1408 16.5704 10.9296 16.3592 10.7998 16.0996C10.6112 15.7221 10.6112 15.2779 10.7998 14.9004C10.9296 14.6408 11.1408 14.4296 11.4004 14.2998ZM7 10L5 11H19V6H7V10ZM5 4L5.5 10L6 5H17V3L5 4Z',
                        fill: '#483128',
                        fillOpacity: 0.9,
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168182',
                            x: 3,
                            y: 0,
                            width: 18,
                            height: 24,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168182',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168182',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        hurt_vehicles_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168185)' },
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M20.1997 2L14.3077 7.85927L16.1735 9.6923L22 3.80035L20.1997 2ZM9.65957 7.76108L3.83308 2L2 3.83308L7.85927 9.65957L9.65957 7.76108ZM16.1735 14.3077L14.3077 16.2062L20.1342 22L21.9673 20.1015L16.1735 14.3077ZM7.892 14.3077L2 20.1342L3.86581 22L9.6923 16.108L7.892 14.3077Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168185',
                            x: 2,
                            y: 2,
                            width: 20,
                            height: 21,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168185',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168185',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        kill_vehicles_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168194)' },
                    o.createElement(
                        'mask',
                        {
                            id: 'mask0_2180_168194',
                            style: { maskType: 'alpha' },
                            maskUnits: 'userSpaceOnUse',
                            x: 0,
                            y: 6,
                            width: 24,
                            height: 15,
                        },
                        o.createElement('path', {
                            d: 'M24 21H0V6H24V21ZM7.36035 8.22852L12.2598 13.2666L6.63184 19.0537L7.67773 20.1299L13.3057 14.3418L18.9307 20.126L19.9766 19.0508L14.3516 13.2666L19.249 8.23145L18.2031 7.15625L13.3047 12.1914L8.40527 7.15332L7.36035 8.22852Z',
                            fill: '#FECC88',
                        }),
                    ),
                    o.createElement(
                        'g',
                        { mask: 'url(#mask0_2180_168194)' },
                        o.createElement('path', {
                            d: 'M20.1299 17.9919C21.1487 17.9919 22.2046 16.3631 22.4766 15.8833C23 14.9596 23 13.1067 23 13.1067C23 13.1067 22.9475 11.7843 22 11.5C21.0525 11.2157 19.5 12 19.5 12H17.5L18.8252 10.6955L18.374 9.14959C18.1128 8.78438 17.7957 8.3348 17.5 8H16.5L15.2242 7H13.664L12.7747 7.56992H10.5649L8.9407 8.32662L7.56641 9H1V10H7.62109L8.02128 11.3043C8.02128 11.3043 9.02958 12.0957 9.42553 12.2844H7.57239V12.7391L3.5 13L3.02659 13.5383C2.99844 13.9992 2.99844 14.5391 3.02659 15C3.3316 15.513 5.78247 18 6.77506 18C7.76764 18 15.6819 17.9919 20.1299 17.9919Z',
                            fill: '#483128',
                        }),
                    ),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168194',
                            x: 1,
                            y: 7,
                            width: 22,
                            height: 12,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168194',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168194',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        module_crit_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168191)' },
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M10.0406 19.756C9.81945 19.7016 9.60556 19.6364 9.39167 19.5639L7.87275 21.1662L6.26678 20.2382L6.88671 18.1465C6.55682 17.8709 6.24867 17.5664 5.96954 17.2438L3.84157 17.8709L2.91713 16.2686L4.50133 14.7605C4.35632 14.3654 4.24396 13.9522 4.16058 13.528L2 13.006V11.1571L4.13881 10.6387C4.21131 10.2182 4.31644 9.80861 4.4542 9.40984L2.83376 7.87273L3.76182 6.26682L5.88254 6.89396C6.15442 6.57495 6.44804 6.27407 6.76343 5.99856L6.12544 3.84519L7.73136 2.91717L9.25754 4.52309C9.64906 4.38171 10.0515 4.26936 10.4647 4.18961L10.994 2H12.1323L12.7377 6.52056C12.4948 6.48793 12.2483 6.4698 11.9982 6.4698C8.93492 6.4698 6.44804 8.95668 6.44804 12.0199C6.44804 14.6772 8.31864 16.8994 10.8127 17.4432L10.0406 19.756ZM17.4939 6.23783C17.668 6.40459 17.8383 6.5822 17.9978 6.76346L20.1548 6.12906L21.0828 7.73139L19.4805 9.25394C19.6292 9.64546 19.7415 10.0515 19.8249 10.4684L22 10.994V12.8465L19.8648 13.3612C19.7923 13.7854 19.6871 14.195 19.5494 14.5938L21.1626 16.1272L20.2382 17.7332L18.1392 17.1133C17.8637 17.4396 17.5664 17.7477 17.2438 18.0304L17.8709 20.1584L16.2686 21.0828L14.7678 19.5023C14.3654 19.6509 13.9521 19.7705 13.5244 19.8539L13.006 22H11.1535L10.7584 20.3505L12.3353 17.5592C15.2427 17.3816 17.5483 14.9672 17.5483 12.0199C17.5483 10.3814 16.8341 8.90955 15.7067 7.89451L17.4939 6.23783Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168191',
                            x: 2,
                            y: 2,
                            width: 20,
                            height: 21,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168191',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168191',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        prestige_points_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168201)' },
                    o.createElement('path', {
                        d: 'M11.5 17L5 21.999L8.15234 12.2998L5.87207 16.5928L0.453125 20L6.45313 4L8.80859 10.2813L11.5 2L18 21.999L11.5 17ZM17.7852 17.0156L14.458 9.5293L16.5313 4L22.5313 20L17.7852 17.0156Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168201',
                            x: 0.453125,
                            y: 2,
                            width: 22.0781,
                            height: 20.999,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168201',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168201',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        top1_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168208)' },
                    o.createElement('path', {
                        d: 'M16 15H24V22H0V18H7V11H16V15ZM13.0312 9H11.502V2.64844H9.55078V1.48242C10.1875 1.48242 10.8887 1.33789 11.2441 1.04883C11.5996 0.759766 11.8262 0.410156 11.9238 0H13.0312V9Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168208',
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 23,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168208',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168208',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        top3_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168211)' },
                    o.createElement('path', {
                        d: 'M16 15H24V22H0V18H7V11H16V15ZM7 9H5.4707V2.64844H3.51953V1.48242C4.15625 1.48242 4.85742 1.33789 5.21289 1.04883C5.56836 0.759766 5.79492 0.410156 5.89258 0H7V9ZM16.2734 0C16.9961 0 17.5586 0.183594 17.9609 0.550781C18.3672 0.917969 18.5703 1.44141 18.5703 2.12109C18.5703 2.69531 18.4629 3.13086 18.248 3.42773C18.0371 3.7207 17.7402 3.93555 17.3574 4.07227C17.8145 4.17383 18.1523 4.4082 18.3711 4.77539C18.5938 5.13867 18.7051 5.625 18.7051 6.23438C18.7051 7.16016 18.5195 7.98047 18.0898 8.39062C17.6602 8.79688 17.0488 9 16.2559 9C15.8535 9 15.5117 8.9375 15.2305 8.8125C14.9531 8.6875 14.7246 8.52148 14.5449 8.31445C14.3691 8.10742 14.2383 7.86328 14.1523 7.58203C14.0703 7.29688 14 6.83789 14 6.50977V6.01758H15.4414V6.32227C15.4414 6.68164 15.5332 7.13086 15.6582 7.36523C15.7832 7.59961 15.998 7.7168 16.3027 7.7168C16.4941 7.7168 16.6445 7.68359 16.7539 7.61719C16.8633 7.55078 16.9473 7.45508 17.0059 7.33008C17.0684 7.20508 17.1074 7.05859 17.123 6.89062C17.1387 6.72266 17.1172 6.38672 17.1172 6.1875C17.1172 5.64844 17.041 5.27344 16.8887 5.0625C16.7363 4.84766 16.4824 4.74023 16.127 4.74023H15.4414V3.58008H15.8984C16.1641 3.58008 16.3711 3.5332 16.5195 3.43945C16.6719 3.3418 16.7852 3.22266 16.8594 3.08203C16.9375 2.9375 16.9863 2.7832 17.0059 2.61914C17.0254 2.45508 17.0352 2.30469 17.0352 2.16797C17.0352 1.88672 16.9766 1.66797 16.8594 1.51172C16.7422 1.35547 16.5469 1.27734 16.2734 1.27734C16.0078 1.27734 15.8027 1.36523 15.6582 1.54102C15.5137 1.71289 15.4414 1.9668 15.4414 2.30273V2.58984H14V2.22656C14 1.90625 14.0508 1.60938 14.1523 1.33594C14.2578 1.0625 14.4062 0.828125 14.5977 0.632812C14.793 0.4375 15.0312 0.283203 15.3125 0.169922C15.5938 0.0566406 15.9141 0 16.2734 0ZM12 5H9V4H12V5Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168211',
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 23,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168211',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168211',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        top5_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168214)' },
                    o.createElement('path', {
                        d: 'M16 15H24V22H0V18H7V11H16V15ZM7 9H5.4707V2.64844H3.51953V1.48242C4.15625 1.48242 4.85742 1.33789 5.21289 1.04883C5.56836 0.759766 5.79492 0.410156 5.89258 0H7V9ZM18.4121 1.27734H15.6113L15.5059 3.25195C15.6973 3.05664 15.8926 2.91797 16.0918 2.83594C16.2949 2.75 16.5 2.70703 16.707 2.70703C17.4062 2.70703 17.9277 2.92773 18.2715 3.36914C18.6152 3.80664 18.7871 4.41602 18.7871 5.19727V6.02344C18.7871 6.98828 18.6016 7.86328 18.2305 8.32031C17.8594 8.77344 17.2637 9 16.4434 9C15.666 9 15.0645 8.79688 14.6387 8.39062C14.2129 7.98047 14 7.38086 14 6.5918V6H15.5059C15.5059 6.30078 15.5234 6.76172 15.5586 6.96094C15.5977 7.15625 15.6523 7.31055 15.7227 7.42383C15.7969 7.5332 15.8867 7.60938 15.9922 7.65234C16.1016 7.69531 16.2285 7.7168 16.373 7.7168C16.5254 7.7168 16.6562 7.69727 16.7656 7.6582C16.875 7.61914 16.9648 7.54688 17.0352 7.44141C17.1094 7.33203 17.1641 7.1875 17.1992 7.00781C17.2344 6.82812 17.252 6.42969 17.252 6.14062V5.24414C17.252 4.83789 17.1719 4.5332 17.0117 4.33008C16.8516 4.12695 16.627 4.02539 16.3379 4.02539C16.1504 4.02539 15.9883 4.08203 15.8516 4.19531C15.7188 4.30469 15.623 4.45117 15.5645 4.63477H14.0996L14.2812 0H18.4121V1.27734ZM12 5H9V4H12V5Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168214',
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 23,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168214',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168214',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        top7_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168217)' },
                    o.createElement('path', {
                        d: 'M16 15H24V22H0V18H7V11H16V15ZM8 9H6.4707V2.64844H4.51953V1.48242C5.15625 1.48242 5.85742 1.33789 6.21289 1.04883C6.56836 0.759766 6.79492 0.410156 6.89258 0H8V9ZM19 1C18.7773 1.44141 18.4453 2.14648 18.2188 2.67773C17.9961 3.20508 17.791 3.7793 17.6035 4.40039C17.416 5.02148 17.2539 5.68555 17.1172 6.39258C16.9805 7.0957 16.748 8.21094 16.7051 9H15C15.0742 8.34375 15.3242 7.30664 15.4648 6.62695C15.6094 5.94336 15.7773 5.28125 15.9688 4.64062C16.1641 3.99609 16.375 3.38867 16.6016 2.81836C16.832 2.24805 17.0723 1.74805 17.3223 1.31836H14V0H19V1ZM13 5H10V4H13V5Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168217',
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 23,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168217',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168217',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        top_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168204)' },
                    o.createElement('path', { d: 'M16 15H24V22H0V18H7V11H16V15Z', fill: '#483128' }),
                    o.createElement('path', {
                        d: 'M17.6517 8.99333C18.4853 8.99333 19.3493 7.66072 19.5717 7.26814C20 6.51242 20 4.99642 20 4.99642C20 4.99642 19.957 3.9144 19.1818 3.68182C18.4066 3.44923 17.1364 4.09091 17.1364 4.09091H15.5L16.5842 3.02363L16.2151 1.75876C16.0014 1.45995 15.7419 1.09211 15.5 0.818182H14.6818L13.638 0H12.3615L11.6339 0.466298H9.82586L8.49694 1.08541L7.36508 2H2V3H7.5L7.74468 3.52174C7.74468 3.52174 8.56966 4.16919 8.89362 4.32357H7.37741V4.69565L4.04545 4.90909L3.65812 5.34949C3.63509 5.72661 3.63509 6.16833 3.65812 6.54545C3.90767 6.96515 5.91293 9 6.72505 9C7.53716 9 14.0125 8.99333 17.6517 8.99333Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168204',
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 23,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168204',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168204',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
        win_silver: (e) =>
            o.createElement(
                'svg',
                {
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_d_2180_168220)' },
                    o.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M11 22H12.0181L6.96948 3.95253L10.6155 12.0279C10.6155 12.0279 11.2047 11.1304 13.2582 11.1304C15.3117 11.1304 16 11.5 18 12C19.5 12.5 21 12.0587 21 12.0587L18 3.49777C18 3.49777 16.821 3 15.5 3C13.7126 3 13.111 3.49777 12.0181 3.49777C10.0007 3.49777 8.54578 2 6 2H4L11 22Z',
                        fill: '#483128',
                    }),
                ),
                o.createElement(
                    'defs',
                    null,
                    o.createElement(
                        'filter',
                        {
                            id: 'filter0_d_2180_168220',
                            x: 4,
                            y: 2,
                            width: 17,
                            height: 21,
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                        },
                        o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                        o.createElement('feColorMatrix', {
                            in: 'SourceAlpha',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha',
                        }),
                        o.createElement('feOffset', { dy: 1 }),
                        o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                        o.createElement('feColorMatrix', {
                            type: 'matrix',
                            values: '0 0 0 0 1 0 0 0 0 0.890117 0 0 0 0 0.70032 0 0 0 0.7 0',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_2180_168220',
                        }),
                        o.createElement('feBlend', {
                            mode: 'normal',
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_2180_168220',
                            result: 'shape',
                        }),
                    ),
                ),
            ),
    },
    No = {
        base: 'QuestIcon_44c4acd9',
        base__x16: 'QuestIcon_base__x16_ca39fe8f',
        base__x24: 'QuestIcon_base__x24_d32a3c23',
        base__x32: 'QuestIcon_base__x32_3a42e90e',
        base__x48: 'QuestIcon_base__x48_c32aa886',
        icon: 'QuestIcon_icon_ea573823',
    },
    bo = { x16: 'x16', x24: 'x24', x32: 'x32', x48: 'x48' },
    Co = o.forwardRef(function ({ iconKey: e, size: t = bo.x32, classNames: o, ...n }, r) {
        const s = yo[e];
        if (s)
            return a.jsx('div', {
                ...n,
                ref: r,
                className: c(No.base, No[`base__${t}`], o?.base),
                children: a.jsx(s, { className: c(No.icon, o?.icon) }),
            });
        console.error(`Unknown quest type ${e}`);
    });
Co.sizes = bo;
const Eo = 'Quest_shine_b364ef26',
    wo = 'Quest_e217a05b',
    Io = 'Quest_outerBorderImage_e0847b66',
    jo = 'Quest_base__done_3236e985',
    So = 'Quest_content_d8138628',
    Lo = 'Quest_condition_1a2b6d91',
    ko = 'Quest_conditionText_28ae9aa9',
    Mo = 'Quest_progression_f05a7a',
    Bo = 'Quest_progressionTotal_65ef2f81',
    Ao = 'Quest_points_f8ad1f8d',
    Po = 'Quest_pointsLine_7a0d88b9',
    Ho = 'Quest_pointsLine__left_c5341c33',
    To = 'Quest_pointNumber_f1af7e6b',
    Fo = 'Quest_pointIcon_ca1ecc55',
    Ro = 'Quest_done_8d719fdb',
    Oo = 'Quest_doneLine_64b06f8b',
    $o = 'Quest_doneIcon_a1cdc347',
    Vo = X.resolve('intl'),
    Do = X.resolve('strings'),
    qo = s(function ({ quest: e, className: t }) {
        const { controls: n } = gt(),
            r = o.useCallback(
                (t) => {
                    t === vo.steps.done && n.questProgressShown(e.id);
                },
                [n, e],
            ),
            s = G({ body: Do.readOrEmpty('R.strings.journey_marathon.tokenTooltip.text') });
        return a.jsxs('div', {
            className: c(wo, e.isCompleted && jo, t),
            children: [
                a.jsx('div', { className: Io }),
                a.jsx('div', { className: Eo }),
                a.jsxs('div', {
                    className: So,
                    children: [
                        a.jsx(Co, { iconKey: e.iconKey }),
                        a.jsxs('div', {
                            className: Lo,
                            children: [
                                a.jsx(Z, { text: e.description, className: ko }),
                                e.totalProgress > 0 &&
                                    a.jsxs(a.Fragment, {
                                        children: [
                                            a.jsx(U, {
                                                className: Mo,
                                                path: 'journey_marathon.mapView.quests.progress',
                                                params: {
                                                    classProgressTotal: Bo,
                                                    current: Vo.formatNumber('integral', e.currentProgress),
                                                    total: Vo.formatNumber('integral', e.totalProgress),
                                                },
                                            }),
                                            a.jsx(vo, {
                                                value: e.currentProgress,
                                                maxValue: e.totalProgress,
                                                from: e.currentProgress - e.earnedProgress,
                                                onState: r,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                a.jsxs('div', {
                    className: Ao,
                    children: [
                        a.jsx('div', { className: c(Po, Ho) }),
                        a.jsx(U, {
                            ...s,
                            className: To,
                            path: 'journey_marathon.mapView.quests.points',
                            params: {
                                points: Vo.formatNumber('integral', e.reward),
                                icon: a.jsx('div', { className: Fo }),
                            },
                        }),
                        a.jsx('div', { className: Po }),
                    ],
                }),
                e.isCompleted &&
                    a.jsxs('div', {
                        className: Ro,
                        children: [
                            a.jsx('div', { className: Oo }),
                            a.jsx('div', { className: $o, children: a.jsx(it, {}) }),
                        ],
                    }),
            ],
        });
    }),
    Uo = 'Quests_d15da499',
    Yo = 'Quests_header_23b9773a',
    Qo = 'Quests_headerText_dd93c6c1',
    Xo = 'Quests_questList_6d5729d6',
    Go = 'Quests_quest_7ebbfd6f',
    Zo = s(function () {
        const e = q(),
            { model: t } = gt(),
            n = t.questCards.get(),
            r = At(),
            [s, i] = d(r),
            [c, p] = m(n.length, (e) => ({
                from: { opacity: 0, y: 30 },
                config: { duration: 800, easing: z.easeOutCubic },
                onRest: () => {
                    e === n.length - 1 && i({ type: 'ANIMATION_FINISHED' });
                },
            })),
            [_, f] = l(() => ({ from: { opacity: 0 }, config: { duration: 400, easing: z.easeOutCubic } }));
        return (
            o.useEffect(() => {
                const t = () => e.play('animation', { target: 'quests:card' });
                s.matches(`${jt}.${wt}`)
                    ? (p.start((e) => ({ to: { opacity: 1, y: 0 }, delay: 150 * e, onStart: t })),
                      f.start({ to: { opacity: 1 } }))
                    : s.matches(`${jt}.${It}`) &&
                      (p.start((e) => ({ to: { opacity: 0, y: 60 }, delay: 150 * e, onStart: t })),
                      f.start({ to: { opacity: 0 } }));
            }, [s, p, f, e]),
            a.jsxs('div', {
                className: Uo,
                children: [
                    a.jsx(u.div, {
                        style: _,
                        className: Yo,
                        children: a.jsx(U, { className: Qo, path: 'journey_marathon.mapView.quests.header' }),
                    }),
                    a.jsx('div', {
                        className: Xo,
                        children: c.map((e, t) => {
                            const o = n[t];
                            return o
                                ? a.jsx(u.div, { style: e, children: a.jsx(qo, { className: Go, quest: o }) }, o.id)
                                : null;
                        }),
                    }),
                ],
            })
        );
    }),
    zo = 'QuestsCompleted_4dcf8d1c',
    Ko = 'QuestsCompleted_line_f976dbda',
    Wo = 'QuestsCompleted_line__right_6669183',
    Jo = 'QuestsCompleted_content_75eff44b',
    ea = 'QuestsCompleted_header_526fd65b',
    ta = 'QuestsCompleted_headerDone_16cc15d6',
    oa = 'QuestsCompleted_dateTime_6f967a07',
    aa = 'QuestsCompleted_timer_f34a5899',
    na = { label: 'QuestsCompleted_timerLabel_7d7a9681' },
    ra = s(function ({ onAnimationEnd: e, className: t }) {
        const { model: n } = gt(),
            r = n.isQuestCompletedShow.get(),
            s = At(),
            [i, m] = d(s),
            [p, _] = l(() => ({
                from: { opacity: r ? 1 : 0, transform: `translateY(${r ? '0rem' : '30rem'})` },
                config: { duration: 600, easing: z.easeOutCirc },
            }));
        return (
            o.useEffect(() => {
                (r ||
                    _.start({
                        to: { opacity: 1, transform: 'translateY(0rem)' },
                        onRest: () => {
                            (e?.(), m('ANIMATION_FINISHED'));
                        },
                    }),
                    i.matches(`${St}.${It}`) &&
                        _.start({
                            to: { opacity: 0, transform: 'translateY(30rem)' },
                            onRest: () => {
                                m('ANIMATION_FINISHED');
                            },
                        }));
            }, [_, e, r, m, i]),
            a.jsxs(u.div, {
                style: p,
                className: c(zo, t),
                children: [
                    a.jsx('div', { className: Ko }),
                    a.jsxs('div', {
                        className: Jo,
                        children: [
                            a.jsxs('div', {
                                className: ea,
                                children: [
                                    a.jsx(it, { className: ta }),
                                    a.jsx(U, { path: 'journey_marathon.mapView.quests.questCompleted.header' }),
                                ],
                            }),
                            !n.isLastGameDay.get() &&
                                a.jsx(U, {
                                    path: 'journey_marathon.mapView.quests.questCompleted.timer',
                                    params: {
                                        timer: a.jsx(K, {
                                            classNames: na,
                                            className: aa,
                                            start: n.timeTillNewQuests.get(),
                                            format: K.format.default,
                                            type: K.type.accent,
                                            size: K.size.x24x24,
                                        }),
                                    },
                                    className: oa,
                                }),
                        ],
                    }),
                    a.jsx('div', { className: c(Ko, Wo) }),
                ],
            })
        );
    }),
    sa = 'Footer_c7556f89',
    ia = 'Footer_questsCompleted_509c0c59',
    la = s(
        o.forwardRef(function ({ className: e }, t) {
            const { model: n, controls: r } = gt(),
                s = n.questCards.get().every((e) => e.isCompleted),
                i = n.isCompleted.get(),
                l = At(),
                [m, u] = d(l);
            return (
                o.useEffect(() => {
                    i && u('MAP_COMPLETED');
                }, [i, u]),
                o.useEffect(() => {
                    u(s ? 'QUESTS_COMPLETED' : 'NEW_QUESTS');
                }, [s, u]),
                a.jsx('div', {
                    className: c(sa, e),
                    ref: t,
                    children: (() => {
                        switch (!0) {
                            case m.matches(jt):
                                return a.jsx(Zo, {});
                            case m.matches(St):
                                return a.jsx(ra, { onAnimationEnd: r.questCompletedShown, className: ia });
                            case m.matches(Lt):
                                return a.jsx(po, {});
                        }
                    })(),
                })
            );
        }),
    ),
    ca = 'Vignette_f2a66b14';
function da() {
    return a.jsx('div', { className: ca });
}
const ma = X.resolve('views'),
    ua = 'active',
    pa = 'received',
    _a = 'select';
function fa(e) {
    return `R.images.journey_marathon.gui.maps.icons.journeyMarathon.nodes.small.${e}`;
}
function ha(e, t) {
    if (e.length > 1)
        return {
            contentId: ma.read((e) => e.journey_marathon.mono.lobby.tooltips.rewards_tooltip('resId')),
            args: { nodeId: t },
        };
    const o = L(e, 0);
    return o
        ? Xe(o)
            ? {
                  contentId: ma.read((e) => e.journey_marathon.mono.lobby.tooltips.key_tooltip('resId')),
                  args: { keyName: o.label },
              }
            : {
                  contentId: ma.read((e) =>
                      e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                  ),
                  args: { nodeId: t, tooltipId: o.tooltipId },
              }
        : { contentId: 0 };
}
const ga = 80,
    xa = 'SunShine_c72f0897',
    va = {
        width: 250,
        height: 250,
        frameCount: 75,
        chunk: { count: 2, columns: 7, rows: 6 },
        getChunkPath: te('R.images.gui.maps.icons.sequence.sun_shine_sprite.sprite_'),
    },
    ya = {
        width: 400,
        height: 400,
        frameCount: 50,
        chunk: { count: 2, rows: 5, columns: 5 },
        getChunkPath: te('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
    },
    Na = W(va),
    ba = W(ya);
function Ca({ className: e }) {
    const t = J(),
        o = Boolean(t > 1),
        n = o ? 400 : 250;
    return a.jsx(ee, {
        width: n,
        height: n,
        frameCount: o ? ya.frameCount : va.frameCount,
        getImageSource: o ? ba : Na,
        className: c(xa, e),
    });
}
const Ea = 'Banner_50dc9d44',
    wa = 'Banner_imageWrapper_17e1f8ea',
    Ia = 'Banner_sunShine_a30be061',
    ja = 'Banner_image_c0937101',
    Sa = 'Banner_content_4ac405ff',
    La = 'Banner_title_61e1e387',
    ka = X.resolve('strings'),
    Ma = o.forwardRef(function ({ onClick: e, className: t }, o) {
        const n = q();
        return a.jsxs('div', {
            className: c(Ea, t),
            onClick: e,
            onMouseEnter: () => n.play('hover', { target: 'banner' }),
            ref: o,
            children: [
                a.jsxs('div', {
                    className: wa,
                    children: [a.jsx(Ca, { className: Ia }), a.jsx('div', { className: ja })],
                }),
                a.jsxs('div', {
                    className: Sa,
                    children: [
                        a.jsx(U, { path: 'journey_marathon.banner.title', className: La }),
                        a.jsx(oe, {
                            size: 'small',
                            onClick: e,
                            children: ka.readOrEmpty('journey_marathon.banner.button'),
                        }),
                    ],
                }),
            ],
        });
    });
function Ba({ footerRef: e, hidden: t, className: n, ...r }) {
    const s = At(),
        i = p(s, (e) => {
            switch (!0) {
                case e.matches(Lt):
                    return Lt;
                case e.matches(St):
                    return St;
                case e.matches(jt):
                    return jt;
            }
        }),
        [c, d] = l(() => ({ from: { opacity: 0, y: '0rem' } })),
        [m, _] = l(() => ({ from: { opacity: 0 } })),
        f = ae(
            { quests: -30, mapCompleted: 100, questsCompleted: -30 },
            {
                medium: { mapCompleted: 180, questsCompleted: -30 },
                large: { mapCompleted: 230, questsCompleted: -30 },
                extraLarge: { mapCompleted: 240, questsCompleted: -30 },
            },
        ),
        h = ne(),
        g = o.useRef(!0),
        x = o.useRef(null),
        v = o.useCallback(() => {
            h.run(() => {
                if (!e.current || !x.current) return;
                const t = re(e.current.getBoundingClientRect().top) - re(x.current.offsetHeight) + (f[i ?? jt] ?? 0);
                d.start({
                    to: g.current
                        ? [
                              { y: `${t}rem`, immediate: !0 },
                              { opacity: 1, config: { duration: 400 } },
                          ]
                        : { y: `${t}rem` },
                    config: { easing: z.easeInOutCubic, duration: 800 },
                    onRest: () => (g.current = !1),
                });
            }, 200);
        }, [f, e, d, i, h]);
    return (
        P(e, v),
        o.useEffect(() => se(v), [v]),
        o.useEffect(() => {
            _.start({ to: { opacity: t ? 0 : 1 }, config: { duration: 200 } });
        }, [_, t]),
        a.jsx(u.div, {
            style: c,
            className: n,
            children: a.jsx(u.div, { style: m, children: a.jsx(Ma, { ...r, ref: x }) }),
        })
    );
}
const Aa = {
        small: { top: 18, bottom: 22 },
        medium: { top: 17, bottom: 22 },
        large: { top: 16, bottom: 20 },
        extraLarge: { top: 14, bottom: 16 },
    },
    Pa = 'NaviArrow_1925989e',
    Ha = () =>
        a.jsx(ie, {
            className: Pa,
            width: 180,
            height: 180,
            path: 'R.images.journey_marathon.gui.maps.icons.journeyMarathon.navigation.arrow',
        }),
    Ta = 'BonusName_4e0f855f',
    Fa = 'BonusName_type_631aa559',
    Ra = 'BonusName_text_8887a35a',
    Oa = X.resolve('strings');
function $a({ bonus: e, nodeId: t, vehicleTypeIconSize: o, classNames: n }) {
    const r = Oa.read(`journey_marathon.mapView.largeNode.customLabel.${t}`);
    return r
        ? a.jsx(le, { className: c(Ra, n?.text), text: r })
        : Ge(e)
          ? a.jsx(le, {
                className: c(Ra, n?.text),
                text: Oa.readOrEmpty('journey_marathon.mapView.navigation.attachment'),
                params: { rarity: Oa.readOrEmpty(`vehicle_customization.customization.rarity.${e.rarity}`) },
            })
          : Ze(e)
            ? a.jsxs(ce, {
                  className: c(Ta, n?.text),
                  children: [
                      a.jsx(ce.Level, { className: Ra, value: e.vehicleLvl }),
                      de(e.vehicleType) &&
                          a.jsx(ce.Type, {
                              className: c(Fa, n?.vehicleType),
                              type: e.vehicleType,
                              premium: e.isElite,
                              size: o,
                          }),
                      a.jsx(ce.Name, { className: Ra, children: e.vehicleShortName }),
                  ],
              })
            : a.jsx(le, { className: c(Ra, n?.text), text: e.label });
}
const Va = 'NaviHint_355d9398',
    Da = 'NaviHint_image_2ea34ca8',
    qa = 'NaviHint_rarity_46c2a15d',
    Ua = 'NaviHint_label_4f174728',
    Ya = 'NaviHint_vehicleType_f3bc9b44',
    Qa = X.resolve('images');
X.resolve('strings');
const Xa = s(function ({ nodeId: e }) {
        const { model: t } = gt(),
            o = t.computes.node(e),
            n = t.computes.nodeMainBonus(o);
        return n
            ? a.jsxs('div', {
                  className: Va,
                  children: [
                      a.jsx('div', { className: Da, style: { backgroundImage: `url(${me(n, ue.Big)})` } }),
                      Ge(n) &&
                          a.jsx('div', {
                              className: qa,
                              style: {
                                  backgroundImage: `url(${Qa.readOrEmpty(`quests.bonuses.big.${n.rarity}_overlay`)})`,
                              },
                          }),
                      a.jsx($a, {
                          bonus: n,
                          nodeId: e,
                          vehicleTypeIconSize: 'x24x24',
                          classNames: { text: Ua, vehicleType: Ya },
                      }),
                  ],
              })
            : null;
    }),
    Ga = 'NaviLayer_536ca7ee',
    Za = 'NaviLayer_hint_5d90430d',
    za = s(function ({ className: e }) {
        const t = q(),
            { model: n } = gt(),
            r = n.nodes.get(),
            s = qt(),
            { medium: i, large: l, extraLarge: d, small: p } = Aa,
            f = ae(p, { medium: i, large: l, extraLarge: d }),
            h = o.useMemo(
                () => Object.values(r.byId).filter((e) => e.nodeType === De.Large && !e.isExplored),
                [r.byId],
            ),
            [g, x] = m(h.length, () => ({
                x: '0rem',
                y: '0rem',
                rotate: 0,
                opacity: 0,
                config: { tension: 120, friction: 14, clamp: !0 },
            })),
            v = o.useCallback(() => {
                const e = s.api.getWrapperSizes();
                if (!e) return;
                const t = re(Math.round(s.api.animationScroll.scrollPositionX.get())),
                    o = re(Math.round(s.api.animationScroll.scrollPositionY.get())),
                    a = { left: t, top: o, right: t + re(e.width), bottom: o + re(e.height) },
                    n = a.bottom - a.top,
                    r = Math.round((n * f.top) / 100),
                    i = Math.round((n * f.bottom) / 100),
                    l = { left: a.left, top: a.top + r, right: a.right, bottom: a.bottom - i },
                    c = ze(h, a, l, 180, 130);
                x.start((e) => {
                    const t = h[e];
                    if (!t) return {};
                    const o = c.find((e) => e.id === t.id);
                    return o
                        ? {
                              x: o.x - l.left + 'rem',
                              y: o.y - l.top + 'rem',
                              rotate: o.rotation,
                              opacity: 1,
                              immediate: !1,
                          }
                        : { opacity: 0 };
                });
            }, [f.bottom, f.top, x, h, s.api]),
            y = B(() => v(), [v], 100);
        o.useEffect(
            () => (
                v(),
                s.api.events.on('change', y),
                s.api.events.on('rest', v),
                s.api.events.on('resizeHandled', v),
                () => {
                    (s.api.events.off('change', y), s.api.events.off('rest', v), s.api.events.off('resizeHandled', v));
                }
            ),
            [s.api, y, v],
        );
        return a.jsx('div', {
            className: c(Ga, e),
            children: g.map((e, o) => {
                const r = h[o];
                return r
                    ? a.jsxs(
                          u.div,
                          {
                              style: { opacity: e.opacity, display: e.opacity.to((e) => (0 === e ? 'none' : 'block')) },
                              children: [
                                  a.jsx(u.div, { className: Za, style: e, children: a.jsx(Ha, {}) }),
                                  a.jsx(u.div, {
                                      className: Za,
                                      style: { transform: _([e.x, e.y], (e, t) => `translate(${e}, ${t})`) },
                                      onClick: () =>
                                          ((e) => {
                                              t.play('click', { target: 'hint' });
                                              const o = n.computes.node(e);
                                              Ke(s.api, o);
                                          })(r.id),
                                      onMouseEnter: () => t.play('hover', { target: 'hint' }),
                                      children: a.jsx(Xa, { nodeId: r.id }),
                                  }),
                              ],
                          },
                          r.id,
                      )
                    : null;
            }),
        });
    }),
    Ka = X.resolve('intl'),
    Wa = ({ start: e, end: t, step: n = 1, onChange: r, className: s }) => {
        const [i, l] = o.useState(e),
            c = e > t ? 2e3 : 1e3;
        return (
            o.useEffect(() => {
                if ((l(e), e === t)) return;
                const o = t - e,
                    a = Math.sign(o),
                    s = Math.abs(n) * a,
                    i = Math.abs(o) / Math.abs(n),
                    d = setInterval(() => {
                        (l((e) => {
                            const o = e + s;
                            return (s > 0 ? o >= t : o <= t) ? (clearInterval(d), t) : o;
                        }),
                            r?.());
                    }, c / i);
                return () => {
                    clearInterval(d);
                };
            }, [e, t, n, c, r]),
            a.jsx('div', { className: s, children: Ka.formatNumber('integral', i) })
        );
    },
    Ja = 'unlock_tokens_icons',
    en = 'point_icons',
    tn = {
        base: 'Token_d0d2eea2',
        value: 'Token_value_eabb0f51',
        icon: 'Token_icon_fd8c3cd7',
        base__unlock_tokens_icons: 'Token_base__unlock_tokens_icons_a6eb6161',
        base__point_icons: 'Token_base__point_icons_a6eb6161',
    },
    on = X.resolve('strings'),
    an = ({ type: e, value: t = 0, className: n }) => {
        const r = q(),
            [s, i] = o.useState(t),
            l = pe(s) ?? s,
            d = _e({
                contentId: R.views.journey_marathon.mono.lobby.tooltips.key_tooltip('resId'),
                args: { keyName: on.readOrEmpty('R.strings.journey_marathon.lockToken.key1.name') },
            }),
            m = G({ body: on.readOrEmpty('R.strings.journey_marathon.tokenTooltip.text') });
        o.useEffect(
            () =>
                fe(() =>
                    l > t
                        ? he(() => {
                              i(t);
                          }, 50)
                        : l < t
                          ? he(() => {
                                i(t);
                            }, 200)
                          : void 0,
                ),
            [l, i, t],
        );
        const u = H(() => {
            r.play('animation', { target: 'point_icons' === e ? 'balance:coinToken' : 'balance:unlockToken' });
        });
        return a.jsxs('div', {
            ...(e === Ja ? d : m),
            className: c(tn.base, tn[`base__${e}`], n),
            children: [
                a.jsx(Wa, { className: tn.value, start: l, end: s, onChange: u }),
                a.jsx('div', { className: tn.icon }),
            ],
        });
    },
    nn = 'Balance_ffc0e0e1',
    rn = 'Balance_base__increase_8a6d377a',
    sn = 'Balance_base__reduce_502b9999',
    ln = 'Balance_divider_7003efcb',
    cn = s(function ({ className: e }) {
        const { model: t } = gt(),
            n = o.useRef(null),
            r = Math.min(t.unlockTokenCount.get(), We),
            s = Math.min(t.coinTokenCount.get(), We),
            i = pe(r) ?? r,
            l = pe(s) ?? s;
        return (
            o.useEffect(() => {
                const e = n.current;
                if (e)
                    return (
                        e.classList.remove(sn),
                        e.classList.remove(rn),
                        fe(() => {
                            ((i > r || l > s) && e.classList.add(sn), (i < r || l < s) && e.classList.add(rn));
                        })
                    );
            }, [i, r, l, s]),
            a.jsxs('div', {
                ref: n,
                className: c(nn, e),
                children: [
                    a.jsx(an, { type: Ja, value: r }),
                    a.jsx('div', { className: ln }),
                    a.jsx(an, { type: en, value: s }),
                ],
            })
        );
    }),
    dn = 'Header_title_b37501e4',
    mn = 'Header_subtitle_c00456ae',
    un = 'Header_timer_1eefd9c',
    pn = 'Header_timerText_31a56dd1',
    _n = s(function ({ className: e }) {
        const { model: t } = gt(),
            o = t.timeTillEnd.get();
        return a.jsxs('div', {
            className: e,
            children: [
                a.jsx(U, { path: 'journey_marathon.longNameUpperCase', className: dn }),
                a.jsx(U, { path: 'journey_marathon.mapView.subtitle', className: mn }),
                a.jsx(U, {
                    path: 'journey_marathon.mapView.timer',
                    params: {
                        timer: a.jsx(K, { start: o, size: K.size.x32x32, className: un, classNames: { label: pn } }),
                    },
                    className: mn,
                }),
            ],
        });
    }),
    fn = 'PreviewButton_ffa0e3d5',
    hn = 'PreviewButton_content_a95d3ade',
    gn = 'PreviewButton_label_94741dc6';
function xn({ withLabel: e, children: t, ...o }) {
    return a.jsxs(ge, {
        ...o,
        className: c(fn, o.className),
        children: [
            a.jsxs('div', {
                className: hn,
                children: [
                    a.jsx(ie, {
                        width: 100,
                        height: 100,
                        path: 'R.images.journey_marathon.gui.maps.icons.journeyMarathon.map_view.preview_button',
                    }),
                    e && a.jsx(U, { path: 'journey_marathon.preview', className: gn }),
                ],
            }),
            t,
        ],
    });
}
const vn = 'LoreObject_b1256986',
    yn = 'LoreObject_video_548d6b1b',
    Nn = 'LoreObject_base__showVideo_ac92a5c5',
    bn = 'LoreObject_image_c023b8d',
    Cn = 'LoreObject_status_bb9268d2',
    En = 'LoreObject_hint_9dfad0bc',
    wn = 'LoreObject_locker_dba8eba5',
    In = 'LoreObject_base__hover_ac92a5c5',
    jn = 'LoreObject_lockIcon_2388f89e',
    Sn = 'LoreObject_loreName_fad7a18d',
    Ln = X.resolve('videos'),
    kn = X.resolve('views'),
    Mn = X.resolve('sounds'),
    Bn = s(function ({ nodeId: e, className: t }) {
        const { model: n, controls: r } = gt(),
            [s, i] = o.useState(!1),
            l = ao(),
            [m] = d(l),
            p = n.computes.node(e),
            _ = m.context.currentNodeId === p.id || s,
            h = o.useRef(null);
        o.useEffect(() => {
            h.current && (_ ? Mn.play(`ev_jm_${e}_hover_on`) : (h.current.stop(), Mn.play(`ev_jm_${e}_hover_off`)));
        }, [_, e]);
        const g = f(p.isExplored, {
                initial: { opacity: 1, scale: 1 },
                from: { opacity: 0, scale: 1 },
                enter: { opacity: 1, scale: 1, config: { duration: 200, easing: z.easeOutCubic } },
                leave: { opacity: 0, scale: 1.2, config: { duration: 200, easing: z.easeInCubic } },
                exitBeforeEnter: !0,
            }),
            x = _e({
                contentId: kn.read((e) => e.journey_marathon.mono.lobby.tooltips.lore_tooltip('resId')),
                args: { nodeId: e },
            });
        return a.jsxs('div', {
            ...x,
            style: { left: `${p.posX + p.loreX}rem`, top: `${p.posY + p.loreY}rem` },
            onMouseEnter: (e) => {
                (i(!0), x?.onMouseEnter(e));
            },
            onMouseLeave: () => {
                (i(!1), x?.onMouseLeave());
            },
            className: c(vn, _ && Nn, s && In, t),
            children: [
                a.jsx(ie, {
                    width: 400,
                    height: 400,
                    path: `R.images.journey_marathon.gui.maps.icons.journeyMarathon.map_view.lore.lore_images.${e}`,
                    className: bn,
                }),
                a.jsx(xe, {
                    ref: h,
                    autoplay: _,
                    loop: !0,
                    src: Ln.readOrEmpty(`journey_marathon.lore_${e}`),
                    className: yn,
                }),
                g((t, o) =>
                    a.jsx('div', {
                        className: Cn,
                        children: a.jsx(u.div, {
                            style: t,
                            children: o
                                ? a.jsx(xn, {
                                      withLabel: !0,
                                      onClick: () => r.previewLore(e),
                                      children: !p.loreVisited && !s && a.jsx('div', { className: En }),
                                  })
                                : a.jsxs('div', {
                                      className: wn,
                                      children: [
                                          a.jsx('div', { className: jn }),
                                          a.jsx(U, { path: `journey_marathon.lore.name.${e}`, className: Sn }),
                                      ],
                                  }),
                        }),
                    }),
                ),
            ],
        });
    }),
    An = 'LoreLayer_b92f62f',
    Pn = s(function ({ className: e }) {
        const { model: t } = gt(),
            o = t.nodes.get();
        return a.jsx('div', {
            className: c(An, e),
            children: ve(
                o.allIds,
                (e) => t.computes.node(e).hasLore,
                (e) => a.jsx(Bn, { nodeId: e }, e),
            ),
        });
    }),
    Hn = {
        base: 'Price_1930fc3e',
        base__notEnough: 'Price_base__notEnough_e0d7ff83',
        icon: 'Price_icon_312b4f7d',
        icon__coinTokens: 'Price_icon__coinTokens_3a9c78f5',
        icon__unlockTokens: 'Price_icon__unlockTokens_aa76a9a9',
    };
function Tn({ value: e, currency: t, enough: o, className: n }) {
    return a.jsxs('div', {
        className: c(Hn.base, !o && Hn.base__notEnough, n),
        children: [ye.formatNumber('integral', e), a.jsx('div', { className: c(Hn.icon, Hn[`icon__${t}`]) })],
    });
}
const Fn = 'Content_border_7f41e4bc',
    Rn = 'Content_borderImage_b0031c43',
    On = 'Content_b6c5de88',
    $n = 'Content_base__locker_624018c2',
    Vn = 'Content_header_f8c3c733',
    Dn = 'Content_headerBackground_85827acb',
    qn = 'Content_glow_29bb7831',
    Un = 'Content_title_5c5d03ab',
    Yn = 'Content_subtitle_f2c6bb17',
    Qn = 'Content_body_bd1e923',
    Xn = 'Content_nodesCount_9c27dd12',
    Gn = 'Content_image_a7591e61',
    Zn = 'Content_tipWrapper_627af5db',
    zn = 'Content_tipIcon_c5eb7ea0',
    Kn = 'Content_scroll_8eaaf71a',
    Wn = 'Content_scrollArea_2c40f92c',
    Jn = 'Content_scrollContent_8c677449',
    er = 'Content_alert_d2fa8295',
    tr = 'Content_alertKey_9c27dd12',
    or = 'Content_divider_44efed2',
    ar = 'Content_footer_bc619017',
    nr = 'Content_button_660477ab',
    rr = 'Content_buttonContent_3973f78a',
    sr = 'Content_price_8f469538',
    ir = X.resolve('strings'),
    lr = s(function ({ nodeId: e, className: t }) {
        const { model: o, controls: n } = gt(),
            r = Ne(),
            { coinTokenPrice: s, unlockTokenPrice: i, unlockTokenNodeId: l } = o.popover.get(),
            d = o.computes.isLockedPopover(),
            m = i <= o.unlockTokenCount.get(),
            u = s <= o.coinTokenCount.get(),
            p = o.popoverRewards.get(),
            _ = o.computes.unexploredPathFromNode(e);
        if (!_) throw new Error(`There is no unexplored path from selected node ${e} to current node`);
        return a.jsxs('div', {
            'data-popover-display-id': r.id,
            className: c(On, d && $n, t),
            children: [
                a.jsx('div', { className: Fn }),
                a.jsx('div', { className: Rn }),
                a.jsx('div', { className: Dn }),
                a.jsx('div', { className: qn }),
                a.jsx('div', { className: Gn }),
                a.jsx(be.Tip, { className: Zn, size: '48rem', offset: '50%', classNames: { icon: zn } }),
                a.jsxs(be.Header, {
                    className: Vn,
                    children: [
                        a.jsx(be.Title, {
                            children: a.jsx(U, {
                                className: Un,
                                path: `journey_marathon.mapView.${d ? 'lockedPopover' : 'popover'}.title`,
                            }),
                        }),
                        p.length > 0 &&
                            a.jsx(be.Subtitle, {
                                children: a.jsx(Ce, {
                                    path: 'journey_marathon.mapView.popover.subtitle',
                                    split: !0,
                                    count: _.length - 1,
                                    params: { count: _.length - 1, classCount: Xn },
                                    className: Yn,
                                }),
                            }),
                    ],
                }),
                a.jsx(be.Close, {}),
                a.jsxs(be.Body, {
                    className: Qn,
                    children: [
                        p.length > 0 &&
                            a.jsxs('div', {
                                className: Kn,
                                children: [
                                    a.jsx(Ee, {
                                        className: Wn,
                                        classNames: { content: Jn },
                                        children: we(p, (e, t) => a.jsx(lt, { bonus: e }, `${e.label}-${t}`)),
                                    }),
                                    a.jsx(Ie, {}),
                                ],
                            }),
                        a.jsx(be.Divider, { className: or }),
                        !m &&
                            a.jsx(U, {
                                path: 'journey_marathon.mapView.popover.keyAlert',
                                params: { classKey: tr },
                                split: !0,
                                className: er,
                            }),
                        a.jsxs('div', {
                            className: ar,
                            children: [
                                m
                                    ? a.jsx(oe, {
                                          size: 'medium',
                                          autoAlignContent: !1,
                                          onClick: () => {
                                              (r.close(), n.explore(e));
                                          },
                                          disabled: !u,
                                          className: nr,
                                          classNames: { content: rr },
                                          children: d
                                              ? ir.readOrEmpty('journey_marathon.mapView.lockedPopover.button.unlock')
                                              : ir.readOrEmpty('journey_marathon.mapView.popover.button.explore'),
                                      })
                                    : a.jsx(oe, {
                                          size: 'medium',
                                          theme: 'secondary',
                                          disabled: !l,
                                          autoAlignContent: !1,
                                          onClick: () => {
                                              (r.close(),
                                                  n.setAttentionNodeId(l),
                                                  Je.send({
                                                      type: 'NODE_SELECT',
                                                      nodeId: l,
                                                      scrollToNodeRequired: !0,
                                                  }));
                                          },
                                          className: nr,
                                          classNames: { content: rr },
                                          children: ir.readOrEmpty('journey_marathon.mapView.popover.button.toKey'),
                                      }),
                                s > 0 && a.jsx(Tn, { value: s, currency: 'coinTokens', enough: u, className: sr }),
                                i > 0 && a.jsx(Tn, { value: i, currency: 'unlockTokens', enough: m }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
function cr({ nodeId: e, children: t }) {
    return a.jsxs(be, {
        children: [
            a.jsx(be.Trigger, { children: (e) => a.jsx(je, { ...e, children: a.jsx(Se, { children: t }) }) }),
            a.jsx(be.Portal, {
                lazy: !0,
                position: 'right',
                pivot: 0.5,
                children: a.jsx(Le, { children: a.jsx(lr, { nodeId: e }) }),
            }),
        ],
    });
}
const dr = { easing: z.cubicBezier(0.1, 0.7, 0.7, 1), duration: 800 },
    mr = {
        from: { scale: 1, opacity: 1 },
        to: [
            { scale: 1.6, opacity: 1 },
            { scale: 1, opacity: 0 },
        ],
        config: { ...{ easings: z.easeOutCirc, duration: 2600 } },
    };
const ur = {
        FADE_IN: { from: { opacity: 0 }, to: { opacity: 1 }, config: { ...dr } },
        FADE_OUT: { from: { opacity: 1 }, to: { opacity: 0 }, config: { ...dr } },
        getBrightness: function (e = 0) {
            return {
                from: { filter: 'brightness(3)' },
                to: { filter: 'brightness(1)' },
                delay: 500 * e,
                config: { duration: 300 },
            };
        },
        SHINE_FROM: { from: { opacity: 0, scale: 0.8 } },
        DONE_ICON: { from: { opacity: 0, y: '10rem' }, to: { opacity: 1, y: '0rem' }, config: { ...dr } },
        KEY_SHINE: mr,
    },
    pr = 'Price_3fe4c905',
    _r = 'Price_count_b6437adf',
    fr = X.resolve('intl');
function hr({ amount: e, animationReceived: t, className: o }) {
    const n = l(t ? { ...ur.FADE_OUT, config: { duration: 300 } } : {});
    return a.jsxs(u.div, {
        style: n,
        className: c(pr, o),
        children: [
            a.jsx('div', { className: _r, children: fr.formatNumber('integral', e) }),
            a.jsx(ie, {
                width: 16,
                height: 16,
                path: 'R.images.journey_marathon.gui.maps.icons.journeyMarathon.nodes.token',
            }),
        ],
    });
}
const gr = 'SmallNodeIcon_6bc87b83';
function xr({ animationReceived: e = !1, state: t = ua, className: o }) {
    const n = q(),
        r = l(
            e
                ? { ...ur.getBrightness(), onStart: () => n.play('animation', { target: 'exploring:node:regular' }) }
                : {},
        );
    return a.jsx('div', {
        className: c(gr, o),
        children: e
            ? a.jsx(u.div, { style: r, children: a.jsx(ie, { width: ga, height: ga, path: fa('received') }) })
            : a.jsx(ie, { width: ga, height: ga, path: fa(t) }),
    });
}
const vr = {
        background: 'Background_8611ad8a',
        base: 'Background_6c16fa9e',
        base__select: 'Background_base__select_26effab7',
        base__hover: 'Background_base__hover_26effab7',
        popoverTrigger: 'Background_popoverTrigger_6f80cca0',
    },
    yr = X.resolve('images'),
    Nr = 'R.images.journey_marathon.gui.maps.icons.journeyMarathon.nodes.large.backgrounds.bg_';
function br(e, t) {
    const o = t === _a ? ua : t,
        a = `${Nr}${e}_${o}`;
    return yr.readOr(a, () => yr.readOrEmpty(`${Nr}default_${o}`));
}
function Cr({ id: e, state: t, isHover: o, popoverTriggerId: n, animationReceived: r, className: s }) {
    const i = l(r ? { ...ur.FADE_OUT, delay: 400 } : {}),
        d = l(r ? ur.FADE_IN : {});
    return a.jsxs('div', {
        className: c(vr.base, vr[`base__${t}`], o && vr.base__hover, s),
        children: [
            a.jsx('div', { className: vr.popoverTrigger, 'data-popover-trigger-id': n }),
            a.jsx(u.div, {
                style: { ...(r ? i : {}), backgroundImage: `url('${br(e, t)}')` },
                className: c(vr.background, vr[`background__${t}`]),
            }),
            r &&
                a.jsx(u.div, {
                    style: { ...d, backgroundImage: `url('${br(e, pa)}')` },
                    className: c(vr.background, vr.background__received),
                }),
        ],
    });
}
const Er = (e) =>
        o.createElement(
            'svg',
            { width: 36, height: 24, viewBox: '0 0 36 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            o.createElement(
                'g',
                { clipPath: 'url(#clip0_2521_169862)' },
                o.createElement(
                    'g',
                    { filter: 'url(#filter0_dd_2521_169862)' },
                    o.createElement('path', {
                        d: 'M10 9L9 11L16.5 20L28 4L27 2L16.5 13L10 9Z',
                        fill: 'url(#paint0_linear_2521_169862)',
                    }),
                ),
            ),
            o.createElement(
                'defs',
                null,
                o.createElement(
                    'filter',
                    {
                        id: 'filter0_dd_2521_169862',
                        x: 5,
                        y: -1,
                        width: 27,
                        height: 27.8,
                        filterUnits: 'userSpaceOnUse',
                        colorInterpolationFilters: 'sRGB',
                    },
                    o.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                    o.createElement('feColorMatrix', {
                        in: 'SourceAlpha',
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                        result: 'hardAlpha',
                    }),
                    o.createElement('feOffset', { dy: 3 }),
                    o.createElement('feGaussianBlur', { stdDeviation: 1.9 }),
                    o.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                    o.createElement('feColorMatrix', {
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0',
                    }),
                    o.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_2521_169862',
                    }),
                    o.createElement('feColorMatrix', {
                        in: 'SourceAlpha',
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                        result: 'hardAlpha',
                    }),
                    o.createElement('feOffset', { dy: 1 }),
                    o.createElement('feGaussianBlur', { stdDeviation: 2 }),
                    o.createElement('feColorMatrix', {
                        type: 'matrix',
                        values: '0 0 0 0 0.441587 0 0 0 0 0.802885 0 0 0 0 0 0 0 0 0.23 0',
                    }),
                    o.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'effect1_dropShadow_2521_169862',
                        result: 'effect2_dropShadow_2521_169862',
                    }),
                    o.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect2_dropShadow_2521_169862',
                        result: 'shape',
                    }),
                ),
                o.createElement(
                    'linearGradient',
                    {
                        id: 'paint0_linear_2521_169862',
                        x1: 17.6364,
                        y1: 2,
                        x2: 17.6364,
                        y2: 20,
                        gradientUnits: 'userSpaceOnUse',
                    },
                    o.createElement('stop', { offset: 0.504808, stopColor: '#CBFD70' }),
                    o.createElement('stop', { offset: 1, stopColor: '#6ECD24' }),
                ),
                o.createElement(
                    'clipPath',
                    { id: 'clip0_2521_169862' },
                    o.createElement('rect', { width: 36, height: 24, fill: 'white' }),
                ),
            ),
        ),
    wr = 'LargeNode_8ee390dd',
    Ir = 'LargeNode_glow_2c001c80',
    jr = 'LargeNode_background_986eef98',
    Sr = 'LargeNode_flag_790f9291',
    Lr = 'LargeNode_base__select_60d91076',
    kr = 'LargeNode_preview_6cc227bc',
    Mr = 'LargeNode_preview__hidden_d7de0ca6',
    Br = 'LargeNode_ellipse_48bc2217',
    Ar = 'LargeNode_smallNode_2ccb093c',
    Pr = 'LargeNode_base__hover_60d91076',
    Hr = 'LargeNode_doneIcon_c5401d06',
    Tr = 'LargeNode_price_931ff45c',
    Fr = 'none',
    Rr = 'running',
    Or = 'pending',
    $r = 'finishing',
    Vr = s(function ({
        nodeId: e,
        animationRef: t,
        isHover: n,
        price: r = 0,
        state: s,
        popoverTriggerId: i,
        className: d,
    }) {
        const m = q(),
            p = o.useRef(void 0),
            _ = o.useRef(void 0),
            [h, g] = o.useState(Fr),
            { model: x, controls: v } = gt(),
            y = x.computes.node(e),
            N = x.computes.nodeMainBonus(y),
            b = x.exploreAnimationNodeId.get(),
            C = x.exploreAnimationUnpause.get(),
            E = h === $r,
            w = h !== Fr,
            I = s !== pa || E,
            j = _e({ ...ha(y.bonuses, e), disabled: 0 === y.bonuses.length }),
            S = {
                to: async (t, o) => {
                    (m.play('animation', { target: 'exploring:reward:special' }),
                        g(Rr),
                        await t({ to: { opacity: 1, scale: 1.9 }, config: { duration: 500 } }),
                        y.hasFullscreenReward && (g(Or), v.interruptForScreenShow(e), await _.current?.promise),
                        g($r),
                        await t({ to: { opacity: 0, scale: 0.8 }, config: { duration: 800 } }),
                        p.current?.resolve(),
                        (p.current = void 0));
                },
            },
            [L, M] = l(() => ur.SHINE_FROM),
            B = l(E ? ur.FADE_IN : {}),
            A = f(s === _a, {
                from: { opacity: 0, scale: 0.8 },
                enter: { opacity: 1, scale: 1.8 },
                leave: { opacity: 0, scale: 0.8 },
                config: { duration: 500 },
            }),
            P = H(async () => {
                if (((p.current = et()), M.start(S), y.hasFullscreenReward)) {
                    const e = et();
                    ((_.current = e), await e.promise);
                }
            }),
            T = H(async () => {
                await p.current?.promise;
            });
        return (
            o.useEffect(() => {
                t && (t.current = { start: P, end: T });
            }, [t, P, T]),
            o.useEffect(() => {
                C === y.id && _.current && (_.current?.resolve(), (_.current = void 0));
            }, [C, y.id]),
            o.useEffect(() => {
                b || h !== $r || (g(Fr), _.current?.resolve(), (_.current = void 0));
            }, [b, h]),
            a.jsxs('div', {
                className: c(wr, n && Pr, s === _a && Lr, d),
                ...j,
                children: [
                    w && a.jsx(u.div, { style: L, className: Ir, children: a.jsx(Ca, {}) }),
                    A((e, t) => (t ? a.jsx(u.div, { style: e, className: Ir, children: a.jsx(Ca, {}) }) : null)),
                    a.jsx(Cr, {
                        popoverTriggerId: i,
                        state: s,
                        isHover: n,
                        id: e,
                        animationReceived: E,
                        className: jr,
                    }),
                    a.jsx('div', { className: Sr }),
                    a.jsxs('div', {
                        className: Br,
                        children: [
                            (s === pa || E) && a.jsx(u.div, { style: B, children: a.jsx(Er, { className: Hr }) }),
                            N && a.jsx($a, { bonus: N, nodeId: e }),
                        ],
                    }),
                    a.jsx(xr, { state: s, className: Ar, animationReceived: h !== Fr }),
                    I && a.jsx(hr, { amount: r, className: Tr, animationReceived: E }),
                    N?.name === k.Vehicles &&
                        a.jsx(xn, {
                            className: c(kr, s === _a && Mr),
                            onClick: (t) => {
                                (v.previewReward(e), t.stopPropagation());
                            },
                        }),
                ],
            })
        );
    }),
    Dr = {
        base: 'LockedNode_f84fc8d7',
        background: 'LockedNode_background_5643b79',
        background__active: 'LockedNode_background__active_3a8e62ef',
        background__select: 'LockedNode_background__select_2adc3f08',
        background__received: 'LockedNode_background__received_6ca24ca9',
    },
    qr = s(function ({ state: e, nodeId: t, popoverTriggerId: n, className: r, animationRef: s }) {
        const i = o.useRef(void 0),
            [d, m] = o.useState(!1),
            { model: p } = gt(),
            _ = p.exploreAnimationNodeId.get(),
            f = q(),
            h = _e({
                args: { nodeId: t },
                contentId: R.views.journey_marathon.mono.lobby.tooltips.locked_tooltip('resId'),
            }),
            g = l(
                d
                    ? {
                          ...ur.FADE_OUT,
                          delay: 400,
                          onRest: () => {
                              i.current?.resolve();
                          },
                      }
                    : {},
            ),
            x = l(d ? ur.FADE_IN : {}),
            v = H(async () => {
                ((i.current = et()), m(!0), f.play('animation', { target: 'exploring:node:locked' }));
            }),
            y = H(async () => {
                await i.current?.promise;
            });
        return (
            o.useEffect(() => {
                s && (s.current = { start: v, end: y });
            }, [s, v, y]),
            o.useEffect(() => {
                !_ && d && (m(!1), i.current?.resolve(), (i.current = void 0));
            }, [_, d]),
            a.jsxs('div', {
                ...h,
                'data-popover-trigger-id': n,
                className: c(Dr.base, r),
                children: [
                    a.jsx(u.div, { style: d ? g : {}, className: c(Dr.background, Dr[`background__${e}`]) }),
                    d && a.jsx(u.div, { style: x, className: c(Dr.background, Dr.background__received) }),
                ],
            })
        );
    }),
    Ur = {
        background: 'Background_8611ad8a',
        base: 'Background_46584e05',
        background__active: 'Background_background__active_26effab7',
        background__select: 'Background_background__select_2ce1b43e',
        background__received: 'Background_background__received_82bde84b',
        base__select: 'Background_base__select_26effab7',
        base__hover: 'Background_base__hover_26effab7',
    };
function Yr({ animationReceived: e, isHover: t, state: o, className: n, popoverTriggerId: r, children: s }) {
    const i = l(e ? { ...ur.FADE_OUT, delay: 400 } : {}),
        d = l(e ? ur.FADE_IN : {});
    return a.jsxs('div', {
        'data-popover-trigger-id': r,
        className: c(Ur.base, Ur[`base__${o}`], t && Ur.base__hover, n),
        children: [
            a.jsx(u.div, { style: e ? i : {}, className: c(Ur.background, Ur[`background__${o}`]) }),
            e && a.jsx(u.div, { style: d, className: c(Ur.background, Ur.background__received) }),
            s,
        ],
    });
}
const Qr = {
        base: 'MediumNode_808e3cba',
        sunShine: 'MediumNode_sunShine_150f63ed',
        price: 'MediumNode_price_46df0e92',
        reward: 'MediumNode_reward_312e3fe1',
        reward__attachment: 'MediumNode_reward__attachment_c28ebb9a',
        background: 'MediumNode_background_9a61db37',
        base__select: 'MediumNode_base__select_88ebc2eb',
        smallNode: 'MediumNode_smallNode_82facf41',
        base__hover: 'MediumNode_base__hover_88ebc2eb',
        doneIcon: 'MediumNode_doneIcon_684217b3',
        doneIconSvg: 'MediumNode_doneIconSvg_2d39b519',
        icon: 'MediumNode_icon_75b16d34',
        info: 'MediumNode_info_5b2ed54b',
        info__hidden: 'MediumNode_info__hidden_baa01049',
    },
    Xr = 'none',
    Gr = 'running',
    Zr = 'pending',
    zr = 'finishing',
    Kr = s(function ({
        nodeId: e,
        state: t,
        price: n,
        isHover: r,
        animationRef: s,
        popoverTriggerId: i,
        className: d,
    }) {
        const m = q(),
            p = o.useRef(void 0),
            _ = o.useRef(void 0),
            [f, h] = o.useState(Xr),
            { model: g, controls: x } = gt(),
            v = g.exploreAnimationUnpause.get(),
            y = g.exploreAnimationNodeId.get(),
            N = g.computes.node(e),
            b = g.computes.nodeMainBonus(N),
            C = !!b && Xe(b),
            E = g.attentionNodeId.get() === e && C,
            w = !!b && Ge(b),
            I = f === zr,
            j = f !== Xr,
            S = t !== pa || I,
            L = _e({ ...ha(N.bonuses, e), disabled: 0 === N.bonuses.length }),
            k = {
                to: async (t, o) => {
                    (m.play('animation', { target: 'exploring:reward:special' }),
                        h(Gr),
                        await t({ to: { opacity: 1, scale: 1.5 }, config: { duration: 200 } }),
                        N.hasFullscreenReward && (h(Zr), x.interruptForScreenShow(e), await _.current?.promise),
                        await new Promise((e) => setTimeout(e, 650)),
                        h(zr),
                        await t({ to: { opacity: 0, scale: 0.8 }, config: { duration: 400 } }),
                        p.current?.resolve(),
                        (p.current = void 0));
                },
            },
            [M, B] = l(() => ur.SHINE_FROM),
            [A, P] = l(() => ({ from: ur.KEY_SHINE.from })),
            T = l(I ? { ...ur.DONE_ICON, delay: 400 } : {}),
            F = H(async () => {
                if (
                    !N.isExplored &&
                    ((p.current = et()),
                    B.start(k),
                    await new Promise((e) => setTimeout(e, 1250)),
                    N.hasFullscreenReward)
                ) {
                    const e = et();
                    ((_.current = e), await e.promise);
                }
            }),
            R = H(async () => {
                await p.current?.promise;
            });
        return (
            o.useEffect(() => {
                s && (s.current = { start: F, end: R });
            }, [s, F, R]),
            o.useEffect(() => {
                v === N.id && _.current && (_.current?.resolve(), (_.current = void 0));
            }, [v, N.id]),
            o.useEffect(() => {
                y || f !== zr || (h(Xr), p.current?.resolve(), (p.current = void 0));
            }, [y, f]),
            o.useEffect(() => {
                E &&
                    P.start({
                        from: ur.KEY_SHINE.from,
                        to: ur.KEY_SHINE.to,
                        config: ur.KEY_SHINE.config,
                        onRest: () => x.setAttentionNodeId(null),
                    });
            }, [E, P, e, x]),
            a.jsxs('div', {
                className: c(Qr.base, Qr[`base__${t}`], r && t !== _a && Qr.base__hover, d),
                ...L,
                children: [
                    (j || E) && a.jsx(u.div, { style: E ? A : M, className: Qr.sunShine, children: a.jsx(Ca, {}) }),
                    a.jsx(Yr, {
                        state: t,
                        isHover: r,
                        popoverTriggerId: i,
                        className: Qr.background,
                        animationReceived: I,
                        children:
                            b &&
                            a.jsx(ct, {
                                bonus: b,
                                hideValue: tt(b),
                                className: c(Qr.reward, w && Qr.reward__attachment),
                                showLabel: t !== pa && !I,
                                size: ue.Big,
                                classNames: {
                                    image: Qr.icon,
                                    info: c(Qr.info, (w || t === pa || I) && Qr.info__hidden),
                                },
                                hasShaking: E,
                                tooltipDisabled: !0,
                            }),
                    }),
                    (t === pa || I) &&
                        a.jsx(u.div, {
                            style: T,
                            className: Qr.doneIcon,
                            children: a.jsx(it, { className: Qr.doneIconSvg }),
                        }),
                    a.jsx(xr, { state: t, className: Qr.smallNode, animationReceived: f !== Xr }),
                    n && S && a.jsx(hr, { amount: n, className: Qr.price, animationReceived: I }),
                ],
            })
        );
    });
function Wr({ index: e, length: t, reward: n, className: r, onAnimationEnd: s }) {
    const i = q(),
        c = o.useMemo(
            () => ({
                from: { opacity: 0, y: '0' },
                to: async (o, a) => {
                    (await o({
                        to: { opacity: 1, y: '0' },
                        delay: 500 * e,
                        config: { duration: 50 },
                        onStart: () => i.play('animation', { target: 'exploring:reward:regular' }),
                    }),
                        await o({
                            to: { y: `-${30 + 16 * (t / 2 - e)}rem` },
                            config: { easing: z.easeOutCirc, duration: 1e3 },
                        }),
                        await new Promise((e) => setTimeout(e, 800)),
                        await o({ to: { opacity: 0 }, config: { duration: 500 } }),
                        s && s(e));
                },
            }),
            [e, t, s, i],
        ),
        d = l(c),
        m = l(ur.getBrightness(e));
    return a.jsx(u.div, { style: { ...d, ...m }, className: r, children: a.jsx(ke, { ...ot(n) }) });
}
function Jr({ children: e }) {
    const { rewardsRef: t } = bt();
    return h.createPortal(e, t.current ?? document.body);
}
const es = 'SmallNode_72b95b61',
    ts = 'SmallNode_rewardWrapper_74fba996',
    os = 'SmallNode_icon_aaa2ff7f',
    as = X.resolve('views'),
    ns = s(function ({ nodeId: e, state: t = ua, animationRef: n, className: r }) {
        const s = o.useRef(void 0),
            [i, l] = o.useState(!1),
            { model: d } = gt(),
            m = d.computes.node(e),
            u = d.exploreAnimationNodeId.get(),
            p = _e({
                args: { nodeId: e },
                contentId: as.read((e) => e.journey_marathon.mono.lobby.tooltips.rewards_tooltip('resId')),
                disabled: 0 === m.bonuses.length,
            }),
            _ = H(async () => {
                ((s.current = et()), l(!0));
            }),
            f = H(async () => {
                await s.current?.promise;
            }),
            h = H(async (e) => {
                e === m.bonuses.length - 1 && (s.current?.resolve(), (s.current = void 0));
            });
        return (
            o.useEffect(() => {
                n && (n.current = { start: _, end: f });
            }, [n, _, f]),
            o.useEffect(() => {
                !u && i && (l(!1), s.current?.resolve(), (s.current = void 0));
            }, [u, i]),
            a.jsxs('div', {
                ...p,
                className: c(es, r),
                children: [
                    a.jsx(xr, { state: t, animationReceived: i, className: os }),
                    a.jsx(Jr, {
                        children:
                            i &&
                            m.bonuses.map((e, t) =>
                                a.jsx(
                                    'div',
                                    {
                                        className: ts,
                                        style: { left: `${m.posX}rem`, top: `${m.posY}rem` },
                                        children: a.jsx(Wr, {
                                            reward: e,
                                            index: t,
                                            length: m.bonuses.length,
                                            onAnimationEnd: h,
                                        }),
                                    },
                                    `${e.name}-${t}`,
                                ),
                            ),
                    }),
                ],
            })
        );
    }),
    rs = 'StartNode_e2ae75ba';
function ss({ className: e }) {
    return a.jsx(ie, {
        width: ga,
        height: ga,
        path: 'R.images.journey_marathon.gui.maps.icons.journeyMarathon.nodes.start',
        className: c(rs, e),
    });
}
const is = 'Node_triggerFrame_443329e1',
    ls = 'Node_small_8b7b938c',
    cs = 'Node_small__hover_21c32bd5',
    ds = 'Node_small__select_48efd9b1',
    ms = 'Node_smallNodePopoverTrigger_c4ef4a5b',
    us = 'Node_large_d4befa31',
    ps = 'Node_large__select_a5f86206',
    _s = 'Node_medium_e900b62d',
    fs = 'Node_medium__select_5747bf8e',
    hs = 'Node_locked_9f64bae1',
    gs = 'Node_locked__hover_21c32bd5',
    xs = 'Node_locked__select_36421fb8',
    vs = { top: 430, right: 480, bottom: 300, left: 100 },
    ys = s(function ({ id: e, className: t, ...n }) {
        const r = q(),
            s = o.useRef(null),
            { model: i, controls: l } = gt(),
            { registerNode: d, deleteNode: m } = bt(),
            u = qt(),
            _ = i.computes.node(e),
            f = p(Je, (t) => t.context.selectedNodeId === e),
            h = i.computes.isNodeHovered(e),
            g = ae(
                { top: 160, right: 60, bottom: 140, left: 60 },
                { large: { top: 180, right: 100, bottom: 150, left: 100 } },
            ),
            x = (function ({ selected: e, received: t }) {
                switch (!0) {
                    case e:
                        return _a;
                    case t:
                        return pa;
                    default:
                        return ua;
                }
            })({ selected: f, received: _.isExplored }),
            v = p(
                Je,
                (e) =>
                    e.matches(`${nt.nodeSelected}.${nt.scrollingToSelectedNode}`) && e.context.selectedNodeId === _.id,
            );
        o.useEffect(() => {
            v && Ke(u.api, _);
        }, [_, u.api, v]);
        const y = p(
                Je,
                (e) => e.matches(`${nt.nodeSelected}.${nt.nodePopoverOpened}`) && e.context.selectedNodeId === _.id,
            ),
            N = Ne();
        (o.useEffect(() => {
            y && !N.opened && N.open();
        }, [N, y]),
            o.useEffect(
                () =>
                    N.subscribe.onBeforeClose(() => {
                        Je.send({ type: 'NODE_UNSELECT', nodeId: e });
                    }),
                [N.subscribe, e],
            ));
        const b = H(async (e) => {
                if (_.isExplored) return;
                (at(u.api, _, g) || e) &&
                    (await new Promise((e) => {
                        Ke(u.api, _, e);
                    }));
                const t = s.current;
                t && (await t.start());
            }),
            C = H(async () => {
                const e = s.current;
                e && (await e.end());
            });
        o.useEffect(
            () => (
                d(e, { start: b, animationEnd: C }),
                () => {
                    m(e);
                }
            ),
            [d, m, e, b, C],
        );
        const E = ao(),
            w = p(E, (e) => e.context.currentNodeId),
            I = p(E, (e) => e.context.nextNode),
            j = w === _.id || I === _.id || i.isInteractivityLocked.get() || f,
            S = _.isExplored || _.canAfford ? 'node:available' : 'node:unavailable';
        return (
            o.useEffect(() => {
                f && l.selectNode(e);
            }, [f, l, e]),
            a.jsx('div', {
                style: { left: `${_.posX}rem`, top: `${_.posY}rem` },
                className: t,
                onMouseEnter: j
                    ? void 0
                    : () => {
                          (r.play('hover', { target: S }), l.setHoveredNodeId(e));
                      },
                onMouseLeave: () => l.setHoveredNodeId(null),
                onClick: j
                    ? void 0
                    : () => {
                          if ((r.play('click', { target: S }), _.isExplored)) {
                              const e = i.computes.moveDirectionsFromNode(_.id);
                              (e && E.send({ type: 'MOVE', nodeId: _.id, ...e }), l.changeCurrentNode(_.id));
                          } else Je.send({ type: 'NODE_SELECT', nodeId: e, scrollToNodeRequired: at(u.api, _, vs) });
                      },
                'data-popover-outside-click-whitelist-id': N.id,
                children: (() => {
                    switch (_.nodeType) {
                        case De.Start:
                            return a.jsx(ss, { nodeId: _.id, className: is });
                        case De.Small:
                            return a.jsx('div', {
                                className: ms,
                                'data-popover-trigger-id': n['data-popover-trigger-id'],
                                children: a.jsx(ns, {
                                    nodeId: _.id,
                                    animationRef: s,
                                    state: x,
                                    className: c(ls, is, f && ds, h && cs),
                                }),
                            });
                        case De.Medium:
                            return a.jsx(Kr, {
                                nodeId: _.id,
                                animationRef: s,
                                price: _.price,
                                isHover: h,
                                state: x,
                                popoverTriggerId: n['data-popover-trigger-id'],
                                className: c(_s, is, f && fs),
                            });
                        case De.Locked:
                            return a.jsx(qr, {
                                state: x,
                                nodeId: _.id,
                                animationRef: s,
                                popoverTriggerId: n['data-popover-trigger-id'],
                                className: c(hs, is, h && gs, f && xs),
                            });
                        case De.Large:
                            return a.jsx(Vr, {
                                nodeId: _.id,
                                animationRef: s,
                                price: _.price,
                                isHover: h,
                                state: x,
                                popoverTriggerId: n['data-popover-trigger-id'],
                                className: c(us, is, f && ps),
                            });
                        default:
                            throw new Error(`Unexpected node type ${_.nodeType}`);
                    }
                })(),
            })
        );
    }),
    Ns = o.memo(function ({ id: e, className: t }) {
        return a.jsx(cr, { nodeId: e, children: a.jsx(ys, { id: e, className: t }, e) });
    }),
    bs = 'NodesLayer_695feba8',
    Cs = 'NodesLayer_rewardsLayer_92e5e92',
    Es = 'NodesLayer_node_ea712ea3',
    ws = s(function ({ className: e }) {
        const { model: t, controls: n } = gt(),
            { rewardsRef: r, animationSequenceState: s } = bt(),
            i = p(Je, (e) => e.context.selectedNodeId);
        o.useEffect(() => {
            n.setSelectedNodeId(i);
        }, [n, i]);
        const l = t.computes.node(t.currentNodeId.get()),
            d = qt(),
            m = T(),
            u = T();
        return (
            Me(() => {
                m.run(() => {
                    u.run(() => {
                        const e = d.api.getWrapperSizes();
                        e &&
                            0 !== e.height &&
                            0 !== e.width &&
                            d.api.applyScroll(
                                { x: Be(l.posX) - e.width / 3, y: Be(l.posY) - e.height / 2 },
                                { duration: 1e3, easing: z.easeOutQuad },
                            );
                    });
                });
            }),
            a.jsxs('div', {
                className: c(bs, e),
                children: [
                    t.nodes.get().allIds.map((e) => a.jsx(Ns, { id: e, className: Es }, e)),
                    s === vt && a.jsx('div', { className: Cs, ref: r }),
                ],
            })
        );
    }),
    Is = o.createContext(null),
    js = ({ delay: e, path: t, pause: n = 0, children: r }) => {
        const [s, i] = o.useState(-1);
        return (
            o.useEffect(() => {
                i(-1);
            }, [t]),
            o.useEffect(() => {
                if (!t) return;
                const o = t.slice(0, -1);
                return s >= o.length - 1 ? he(() => i(-1), n) : he(() => i(s + 1), -1 === s ? 0 : e);
            }, [e, s, t, n]),
            a.jsx(Is.Provider, { value: s, children: r })
        );
    },
    Ss = 'SelectionGlow_130f6443',
    Ls = s(function ({ index: e }) {
        const { model: t } = gt(),
            n = t.computes.selectedExplorablePath(),
            r = q(),
            s = (() => {
                const e = o.useContext(Is);
                return (j(null !== e, 'usePathSelectAnimation requires provider'), e);
            })(),
            [i, c] = l(() => ({ opacity: 0 }));
        return (
            o.useEffect(() => {
                e === s &&
                    (r.play('animation', { target: 'path:highlight' }),
                    c.start({
                        opacity: 1,
                        config: { duration: 600 },
                        onResolve: () => {
                            c.start({ opacity: 0, config: { duration: 1e3 } });
                        },
                    }));
            }, [c, s, e, r]),
            o.useEffect(() => {
                c.start({ opacity: 0, config: { duration: 200 } });
            }, [c, n]),
            a.jsx(u.div, { style: i, className: Ss })
        );
    }),
    ks = {
        background: 'Edge_background_85458b1',
        highlight: 'Edge_highlight_6bcede58',
        selectionGlow: 'Edge_selectionGlow_e067e99',
        base: 'Edge_ab06a219',
        background__explored: 'Edge_background__explored_35c792c9',
        background__unexplored: 'Edge_background__unexplored_f638d78c',
        background__locked: 'Edge_background__locked_25f4b464',
        base__left: 'Edge_base__left_87b7aa45',
        base__bottom: 'Edge_base__bottom_87b7aa45',
        base__highlighted: 'Edge_base__highlighted_87b7aa45',
        base__locked: 'Edge_base__locked_87b7aa45',
        highlight__enough: 'Edge_highlight__enough_fabb2dda',
        base__unexplored: 'Edge_base__unexplored_87b7aa45',
        highlight__notEnough: 'Edge_highlight__notEnough_5bfc6814',
        shine: 'Edge_shine_87b7aa45',
    },
    Ms = s(function ({ parentNodeId: e, childNodeId: t, className: n }) {
        const [r, s] = o.useState(!1),
            { model: i } = gt(),
            { registerPath: d, deletePath: m } = bt(),
            p = i.computes.node(e),
            _ = i.computes.node(t),
            f = i.computes.edgeHighlight(e, t),
            h = i.computes.edgeIndexInSelectedExplorablePath(e, t),
            g = i.exploreAnimationNodeId.get(),
            x = Qe(p, _),
            v = rt(_),
            y = st.has(x) ? Math.abs(_.posX - p.posX) : Math.abs(_.posY - p.posY),
            [N, b] = l(() => ({ from: { transform: `translateX(-${y}rem)` } })),
            C = H(async (e) => {
                (s(!0),
                    b.start({
                        to: { transform: 'translateX(0rem)' },
                        config: { easing: z.easeInOutCirc, duration: e },
                    }));
            });
        return (
            o.useEffect(
                () => (
                    d(e, t, { start: C, length: y }),
                    () => {
                        m(e, t);
                    }
                ),
                [e, t, d, m, C, y],
            ),
            o.useEffect(() => {
                !g && r && s(!1);
            }, [g, r]),
            a.jsx(
                'div',
                {
                    style: { left: `${p.posX}rem`, top: `${p.posY}rem`, width: `${y}rem`, height: '80rem' },
                    className: c(ks.base, ks[`base__${v}`], null !== f && ks.base__highlighted, ks[`base__${x}`], n),
                    children: a.jsxs('div', {
                        className: c(ks.background, ks[`background__${v}`]),
                        children: [
                            a.jsx('div', { className: c(ks.highlight, ks[`highlight__${f}`]) }),
                            r && a.jsx(u.div, { style: N, className: c(ks.background, ks.background__explored) }),
                            null !== h && a.jsx(Ls, { index: h }),
                        ],
                    }),
                },
                t,
            )
        );
    }),
    Bs = {
        edge: 'NodeEdges_edge_4eb9987a',
        edge__right: 'NodeEdges_edge__right_ae0f47c6',
        edge__left: 'NodeEdges_edge__left_38da8109',
        edge__bottom: 'NodeEdges_edge__bottom_75afdce2',
        edge__top: 'NodeEdges_edge__top_e3cb7a2c',
    },
    As = s(function ({ id: e }) {
        const { model: t } = gt(),
            o = t.computes.node(e);
        return a.jsx(g.Fragment, {
            children: o.nextNodeIds.map((n) => {
                const r = t.computes.node(n),
                    s = Qe(o, r);
                return a.jsx(Ms, { parentNodeId: e, childNodeId: n, className: c(Bs.edge, Bs[`edge__${s}`]) }, n);
            }),
        });
    }),
    Ps = 'PathsLayer_24252c9e',
    Hs = s(function ({ className: e }) {
        const { model: t } = gt(),
            o = t.nodes.get(),
            n = t.computes.selectedExplorablePath();
        return a.jsx('div', {
            className: c(Ps, e),
            children: a.jsx(js, {
                path: n,
                delay: 130,
                pause: 2e3,
                children: o.allIds.map((e) => a.jsx(As, { id: e }, e)),
            }),
        });
    }),
    Ts = (e) => ({
        from: { opacity: 0, x: `${e.x}rem`, y: `${e.y}rem` },
        to: { opacity: 1, x: '0rem', y: '0rem' },
        config: { duration: 600, easing: x.easeOutCirc },
    }),
    Fs = (e) => ({
        from: { opacity: 1, x: '0rem', y: '0rem' },
        to: { opacity: 0, x: `${e.x}rem`, y: `${e.y}rem` },
        config: { duration: 400, easing: x.easeInCirc },
    }),
    Rs = (e) => {
        switch (!0) {
            case e.includes(`${Gt}.${Zt}`):
                return Fs({ x: -30, y: 0 });
            case e.includes(`${Gt}.${zt}`):
                return Fs({ x: 30, y: 0 });
            case e.includes(`${Gt}.${Kt}`):
                return Fs({ x: 0, y: -30 });
            case e.includes(`${Gt}.${Wt}`):
                return Fs({ x: 0, y: 30 });
            case e.includes(`${Xt}.${Zt}`):
                return Ts({ x: -30, y: 0 });
            case e.includes(`${Xt}.${zt}`):
                return Ts({ x: 30, y: 0 });
            case e.includes(`${Xt}.${Kt}`):
                return Ts({ x: 0, y: -30 });
            case e.includes(`${Xt}.${Wt}`):
                return Ts({ x: 0, y: 30 });
            default:
                throw new Error(`Incorrect state: ${e}`);
        }
    },
    Os = 'Pointer_fc8bdb88',
    $s = s(function ({ className: e }) {
        const { model: t, controls: n } = gt(),
            r = ao(),
            [s] = d(r),
            [i, m] = l(() => ({ from: { opacity: 1, x: '0rem', y: '0rem' } })),
            p = q();
        (o.useEffect(
            () =>
                v(() => {
                    const e = t.exploreAnimationNodeId.get();
                    if ('' !== e) {
                        const o = t.computes.moveDirectionsFromNode(e);
                        o && r.send({ type: 'MOVE', nodeId: e, ...o });
                    }
                }),
            [t.computes, t.exploreAnimationNodeId, r],
        ),
            o.useEffect(
                () =>
                    v(() => {
                        const e = t.movingFailed.get(),
                            o = t.currentNodeId.get();
                        e && r.send({ type: 'RESET', currentNodeId: o });
                    }),
                [t.currentNodeId, t.movingFailed, r],
            ));
        const _ = s.toStrings().join(',');
        if (
            (o.useEffect(() => {
                _.includes(Xt) || _.includes(Gt)
                    ? m.start({
                          ...Rs(_),
                          onResolve: () => r.send('ANIMATION_FINISHED'),
                          onStart: () =>
                              p.play('animation', {
                                  target: _.includes(Gt) ? 'moving:pointer:start' : 'moving:pointer:end',
                              }),
                      })
                    : _.includes(Jt) &&
                      m.start({
                          to: { opacity: 1, x: '0rem', y: '0rem' },
                          immediate: !0,
                          onResolve: () => {
                              (n.onCurrentNodeSynced(), r.send('RESET_FINISHED'));
                          },
                      });
            }, [m, _, r, n, p]),
            !s.context.currentNodeId)
        )
            return null;
        const f = t.computes.node(s.context.currentNodeId);
        return a.jsx(u.div, {
            style: i,
            children: a.jsx('div', { style: { top: `${f.posY}rem`, left: `${f.posX}rem` }, className: c(Os, e) }),
        });
    }),
    Vs = {
        base: 'Map_d68a04fc',
        video: 'Map_video_e09d70e7',
        video__confetti: 'Map_video__confetti_6612c0c1',
        video__flashlight: 'Map_video__flashlight_a8cf334d',
        video__tea: 'Map_video__tea_e249e3db',
    },
    Ds = ['confetti', 'flashlight', 'tea'],
    qs = X.resolve('videos'),
    Us = ['MAP_DRAG_START', 'MAP_DRAG_STOP'];
function Ys({ className: e }) {
    const t = qt(),
        n = p(Je, (e) => Us.some((t) => e.nextEvents.includes(t))),
        r = (function (e) {
            const { api: t, disabled: a = !1, options: n } = e,
                {
                    contentRef: r,
                    wrapperRef: s,
                    scrollPosition: i,
                    clampPosition: l,
                    animationScroll: c,
                    events: d,
                    applyScroll: m,
                    settings: u,
                } = t,
                [p, _] = o.useState(Yt),
                [f, h] = o.useState({ x: 0, y: 0 }),
                { gapBeforeStart: g } = n ?? {},
                [x, v] = o.useState(!1),
                y = T();
            o.useEffect(() => {
                const e = () => {
                    y.run(() => {
                        const e = t.getWrapperSizes(),
                            o = t.getContainerSizes();
                        r.current && e && o && v(a || (o.width <= e.width && o.height <= e.height));
                    });
                };
                return (
                    e(),
                    t.events.on('resizeHandled', e),
                    t.events.on('recalculateContent', e),
                    () => {
                        (t.events.off('resizeHandled', e), t.events.off('recalculateContent', e));
                    }
                );
            }, [t, r, a, y]);
            const N = T();
            (o.useEffect(() => {
                const e = () => {
                    N.run(() => {
                        const e = t.contentRef.current;
                        e && (e.style.cursor = x ? 'auto' : 'dragging' === p.type ? 'grabbing' : 'grab');
                    });
                };
                return (e(), F(window, 'resize', () => e()));
            }, [t, p.type, x, N]),
                o.useEffect(() => {
                    if ('pending' !== p.type) return;
                    const e = r.current,
                        t = s.current;
                    if (null === e || null === t) return;
                    const o = V.move(([e]) => {
                            const t = { x: e.screenX, y: e.screenY };
                            (void 0 === g || Math.max(Math.abs(f.x - t.x), Math.abs(f.y - t.y)) > g) &&
                                _((e) =>
                                    'pending' !== e.type
                                        ? e
                                        : {
                                              type: 'dragging',
                                              positionFrom: t,
                                              previousScrollPosition: {
                                                  x: c.scrollPositionX.get(),
                                                  y: c.scrollPositionY.get(),
                                              },
                                          },
                                );
                        }),
                        a = V.up(() => _({ type: 'scrollComplete' }));
                    return () => {
                        (o(), a());
                    };
                }, [c.scrollPositionX, c.scrollPositionY, r, f.x, f.y, p, g, s]));
            const b = T();
            return (
                o.useEffect(() => {
                    if ('dragging' !== p.type) return;
                    function e() {
                        (_({ type: 'scrollComplete' }),
                            b.run(() => {
                                m({ x: c.scrollPositionX.goal, y: c.scrollPositionY.goal });
                            }));
                    }
                    const t = V.up(e),
                        o = V.move(([t, o]) => {
                            const a = r.current,
                                n = s.current;
                            if ('outside' === o) return void e();
                            const d = { x: t.screenX, y: t.screenY };
                            if (null === a || null === n || ('inside' === o && Math.min(d.x, d.y) < 0)) return;
                            const m = n.offsetTop,
                                _ = n.offsetLeft,
                                f = 'inside' === o ? d.x : d.x - _,
                                h = 'inside' === o ? d.y : d.y - m,
                                g = p.positionFrom.x - f,
                                x = p.positionFrom.y - h,
                                v = l(a, { x: p.previousScrollPosition.x + g, y: p.previousScrollPosition.y + x });
                            i.start({
                                scrollPositionX: v.x,
                                scrollPositionY: v.y,
                                from: {
                                    scrollPositionX: c.scrollPositionX.get(),
                                    scrollPositionY: c.scrollPositionY.get(),
                                },
                                config: u.animationConfig,
                            });
                        });
                    return () => {
                        (t(), o());
                    };
                }, [b, m, c.scrollPositionX, c.scrollPositionY, l, r, p, i, s, u.animationConfig]),
                o.useEffect(() => {
                    if ('scrollComplete' !== p.type) return;
                    const e = () => {
                        _(Yt);
                    };
                    return (e(), d.on('rest', e), () => d.off('rest', e));
                }, [p.type, d]),
                o.useEffect(() => {
                    if (x) return;
                    const e = r.current;
                    if (!e) return;
                    const t = (e) => {
                        if (e.button !== D.left) return;
                        const t = { x: e.screenX, y: e.screenY };
                        (h(t),
                            _(
                                void 0 === g || g <= 0
                                    ? {
                                          type: 'dragging',
                                          positionFrom: t,
                                          previousScrollPosition: {
                                              x: c.scrollPositionX.get(),
                                              y: c.scrollPositionY.get(),
                                          },
                                      }
                                    : { type: 'pending' },
                            ));
                    };
                    return (e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t));
                }, [c.scrollPositionX, c.scrollPositionY, r, g, x]),
                p
            );
        })({ api: t.api, disabled: !n, options: { gapBeforeStart: 10 } });
    return (
        o.useEffect(() => {
            'dragging' === r.type ? Je.send({ type: 'MAP_DRAG_START' }) : Je.send({ type: 'MAP_DRAG_STOP' });
        }, [r.type]),
        a.jsxs('div', {
            className: c(Vs.base, e),
            children: [
                Ds.map((e) =>
                    a.jsx(
                        xe,
                        {
                            src: qs.readOrEmpty(`journey_marathon.${e}`),
                            autoplay: !0,
                            loop: !0,
                            className: c(Vs.video, Vs[`video__${e}`]),
                        },
                        e,
                    ),
                ),
                a.jsx(Pn, {}),
                a.jsx(Hs, {}),
                a.jsx(ws, {}),
                a.jsx($s, {}),
            ],
        })
    );
}
const Qs = {
        overlay: 'App_overlay_dd37fdee',
        base: 'App_7c05f8c1',
        base__receivingAnimation: 'App_base__receivingAnimation_0',
        header: 'App_header_d8ba7f7d',
        base__mapDragging: 'App_base__mapDragging_0',
        balance: 'App_balance_981638b7',
        base__mapCompleted: 'App_base__mapCompleted_0',
        navigation: 'App_navigation_99c57afe',
        banner: 'App_banner_b3a09e0c',
        footer: 'App_footer_237175bc',
    },
    Xs = s(function () {
        Ae(He.ESCAPE, Pe.closeView);
        const e = T(),
            { model: t, controls: n } = gt(),
            { startSequence: r, animationSequenceState: s, resetContext: i } = bt(),
            l = t.exploreAnimationNodeId.get();
        (o.useEffect(() => {
            if (l && s === xt) {
                const o = t.computes.unexploredPathFromNode(l);
                o &&
                    e.run(() => {
                        (Je.send({ type: 'RECEIVE_ANIMATION' }), r(o));
                    });
            }
            (l && s === yt && n.exploreAnimationFinished(),
                l || s !== yt || (i(), Je.send({ type: 'RECEIVE_ANIMATION_END' })));
        }, [l, s, t.computes, i, r, n, e]),
            o.useEffect(
                () => (
                    Je.start(),
                    () => {
                        Je.stop();
                    }
                ),
                [],
            ));
        const d = p(Je, (e) =>
                e.value === nt.mapDragging
                    ? nt.mapDragging
                    : e.value === nt.receivingAnimation
                      ? nt.receivingAnimation
                      : '',
            ),
            m = o.useRef(null);
        return a.jsxs('div', {
            className: c(Qs.base, d && Qs[`base__${d}`], t.isCompleted.get() && Qs.base__mapCompleted),
            children: [
                a.jsx(Ut, { children: a.jsx(Ys, {}) }),
                a.jsx(da, {}),
                a.jsx(_n, { className: Qs.header }),
                a.jsx(cn, { className: Qs.balance }),
                a.jsx(la, { className: Qs.footer, ref: m }),
                t.bannerShown.get() &&
                    a.jsx(Ba, { onClick: n.openBanner, hidden: Boolean(d), className: Qs.banner, footerRef: m }),
                a.jsx(za, { className: Qs.navigation }),
                d && a.jsx('div', { className: Qs.overlay }),
            ],
        });
    });
Oe(
    new Te()
        .addWithProps(Fe, {
            soundsOverrides: Re({
                click: {
                    'node:available': 'ev_jm_node_click_available',
                    'node:unavailable': 'ev_jm_node_click_unavailable',
                    hint: 'play',
                },
                hover: {
                    'node:available': 'ev_jm_hover_node_available',
                    'node:unavailable': 'ev_jm_hover_node_unavailable',
                    banner: 'highlight',
                    hint: 'highlight',
                },
                animation: {
                    'exploring:node:regular': 'ev_jm_node_pass',
                    'exploring:node:locked': 'ev_jm_node_unlock',
                    'exploring:reward:regular': 'ev_jm_node_reward_simple',
                    'exploring:reward:special': 'ev_jm_node_reward_special',
                    'moving:pointer:start': 'ev_jm_pointer_up',
                    'moving:pointer:end': 'ev_jm_pointer_down',
                    'path:highlight': 'ev_jm_path_anim_highlight',
                    'balance:coinToken': 'ev_jm_energy_count',
                    'balance:unlockToken': 'ev_jm_keys_count',
                    'quests:card': 'ev_jm_mission_card_animation',
                    mapCompletedState: 'ev_jm_progression_complete',
                },
            }),
        })
        .add(function ({ children: e }) {
            const t = (function () {
                const [e, t] = o.useState(xt),
                    a = o.useRef({});
                return {
                    rewardsRef: o.useRef(null),
                    registerNode: function (e, t) {
                        const o = a.current;
                        o[e] ? (o[e].node = t) : (o[e] = { paths: {}, node: t });
                    },
                    deleteNode: function (e) {
                        delete a.current[e];
                    },
                    registerPath: function (e, t, o) {
                        const n = a.current;
                        n[e] ? (n[e].paths[t] = o) : (n[e] = { paths: { [t]: o }, node: null });
                    },
                    deletePath: function (e, t) {
                        const o = a.current;
                        delete o[e]?.paths[t];
                    },
                    startSequence: async function (e) {
                        const o = (function* (e, t) {
                                for (let o = 0; o < e.length; o++) {
                                    const a = e[o],
                                        n = e[o + 1],
                                        r = t[a];
                                    yield { node: r?.node, path: n ? r?.paths[n] : void 0, id: a };
                                }
                            })(e, a.current),
                            n = [];
                        (t(vt), await new Promise((e) => setTimeout(e, 1200)));
                        for await (const { node: t, path: a, id: r } of o)
                            if ((t && (await t.start(e[e.length - 1] === r), n.push(t.animationEnd())), a)) {
                                const e = Math.round(a.length / 0.2);
                                (await a.start(e), await new Promise((t) => setTimeout(t, e - 40)));
                            }
                        (await Promise.all(n), t(yt));
                    },
                    animationSequenceState: e,
                    resetContext: function () {
                        t(xt);
                    },
                };
            })();
            return a.jsx(Nt.Provider, { value: t, children: e });
        })
        .addWithProps(ht, { mode: 'real', mocks: ft })
        .add(oo)
        .add(Bt)
        .addWithProps(
            function ({ config: e, children: t }) {
                const n = Ot(e),
                    r = o.useMemo(() => ({ api: n }), [n]);
                return a.jsx(Dt.Provider, { value: r, children: t });
            },
            { config: { padding: 40 } },
        )
        .render(a.jsx(Xs, {})),
    { fullScreen: !0, immediateLayout: !1 },
);
