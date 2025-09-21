import { n as e, r as s, p as a, j as t, q as i, m as c, s as d } from '../../../chunks/vendor.js';
import {
    i as l,
    m as o,
    aj as r,
    p as n,
    T as m,
    a5 as _,
    a6 as f,
    a7 as p,
    ao as b,
    a8 as v,
    aS as u,
    aF as x,
    at as h,
    _ as j,
    P as y,
    Q as N,
    R as I,
} from '../../../chunks/lib.js';
import { K as g } from '../../../chunks/index2.js';
import { Q as w } from '../../../chunks/index.js';
import { S as A } from '../../../chunks/spring_wrapper.js';
import { T as k } from '../../../chunks/text.module.js';
import { T as D } from '../../../chunks/text_simple.js';
import { Q as P, l as C } from '../../../chunks/sound.js';
import { g as S, a as L, b as M, c as $ } from '../../../chunks/utils2.js';
import '../../../chunks/key_icon.js';
import '../../../chunks/number_anim.js';
import '../../../chunks/string-utils.js';
var T = ((e) => ((e.None = 'none'), (e.InProgress = 'inProgress'), (e.Receive = 'receive'), (e.Open = 'open'), e))(
    T || {},
);
const [B, E] = l()(
        ({ observableModel: s }) => {
            const a = { root: s.object(), artefacts: s.array('artefacts'), difficulties: s.array('difficulties') },
                t = e(() => {
                    const e = a.artefacts.get(),
                        s = new Map();
                    let t = T.None;
                    return (
                        o(e, (e, a) => {
                            0 === a || e.state === T.Open || t === T.Open
                                ? (s.set(e.id, !1), (t = e.state))
                                : (s.set(e.id, !0), (t = e.state));
                        }),
                        s
                    );
                }),
                i = e((e) => t().get(e));
            return { ...a, computes: { isDisabled: i } };
        },
        ({ externalModel: e }) => ({
            viewLoaded: e.createCallbackNoArgs('onViewLoaded'),
            close: e.createCallbackNoArgs('onClose'),
            showAbout: e.createCallbackNoArgs('onAbout'),
            showIntro: e.createCallbackNoArgs('onShowIntro'),
            goToMission: e.createCallback((e) => ({ artefactID: e }), 'goToMission'),
        }),
    ),
    O = 100,
    Q = {
        root: 'ArtefactItem_root_8bfb1d48',
        base: 'ArtefactItem_1d64955e',
        index: 'ArtefactItem_index_12ce97cd',
        base__open: 'ArtefactItem_base__open_8bfb1d48',
        base__receive: 'ArtefactItem_base__receive_8bfb1d48',
        base__selected: 'ArtefactItem_base__selected_8bfb1d48',
        base__hover: 'ArtefactItem_base__hover_8bfb1d48',
        kingReward: 'ArtefactItem_kingReward_1ed45238',
        indexShadow: 'ArtefactItem_indexShadow_c8d2d859',
        icon: 'ArtefactItem_icon_7a2bd51',
        selected: 'ArtefactItem_selected_bfd8d6a0',
        received: 'ArtefactItem_received_b84ef83b',
        locked: 'ArtefactItem_locked_813991b0',
        opened: 'ArtefactItem_opened_205cb338',
        info: 'ArtefactItem_info_5fd92f2d',
        infoMask: 'ArtefactItem_infoMask_4cfd72a1',
        rewardIcon: 'ArtefactItem_rewardIcon_ccf4c7cc',
        reward: 'ArtefactItem_reward_9ceb5287',
        overlay: 'ArtefactItem_overlay_2a376de3',
    },
    q = ({
        id: e,
        index: d,
        state: l,
        rewards: b,
        className: v,
        selected: u,
        canceledAnim: x,
        onClick: h,
        isDisabled: j,
        types: y,
    }) => {
        const [N, I] = s.useState(!1),
            g = l === T.Open,
            w = l === T.Receive,
            A = $(d),
            C = r(y, 'final'),
            [B, E] = a(() => ({ y: 20, opacity: 0 }));
        s.useEffect(() => {
            E.start({
                to: { y: 0, opacity: 1 },
                delay: x ? 0 : 80 * d + O,
                config: { tension: 80, friction: 10 },
                immediate: x,
                onStart: () => {
                    n.sound(P);
                },
            });
        }, [E, x, d]);
        return t.jsxs(i.div, {
            className: c(Q.base, Q[`base__${l}`], N && !j && Q.base__hover, u && Q.base__selected, v),
            style: B,
            children: [
                t.jsxs('div', {
                    className: Q.index,
                    children: [
                        !C && (g ? A : t.jsx(D, { type: k.LightRed, text: A, overflow: !0 })),
                        C && t.jsx('div', { className: Q.kingReward }),
                        t.jsx('div', { className: Q.indexShadow }),
                    ],
                }),
                t.jsxs('div', {
                    className: Q.info,
                    onMouseEnter: () => {
                        (n.highlight(), I(!0));
                    },
                    onMouseLeave: () => I(!1),
                    children: [
                        t.jsx('div', { className: Q.infoMask }),
                        t.jsx(m, {
                            contentId: R.views.last_stand.mono.lobby.tooltips.mission_tooltip('resId'),
                            args: { artefactID: e },
                            children: t.jsxs('div', {
                                className: Q.icon,
                                style: {
                                    backgroundImage: `url('R.images.last_stand.gui.maps.icons.rewardPath.artefacts.bg_${d}')`,
                                },
                                onMouseEnter: n.highlight,
                                onClick: () => {
                                    j || (n.click(), h(e));
                                },
                                children: [
                                    t.jsx('div', { className: Q.overlay }),
                                    u && t.jsx('div', { className: Q.selected }),
                                ],
                            }),
                        }),
                        g && t.jsx('div', { className: Q.opened }),
                        w && t.jsx('div', { className: Q.received }),
                        j && t.jsx('div', { className: Q.locked }),
                        o(b, (s, a) =>
                            t.jsx(
                                _,
                                {
                                    name: s.name,
                                    value: S(s),
                                    className: Q.reward,
                                    classNames: { rewardIcon: Q.rewardIcon },
                                    size: f.Small,
                                    special: s.overlayType,
                                    image: L(s, f.Small),
                                    valueType: p(s.name),
                                    tooltipArgs: M(s),
                                },
                                `${s.name}${e}${a}`,
                            ),
                        ),
                    ],
                }),
            ],
        });
    },
    z = 'CommonItemList_656b6e97',
    F = 'CommonItemList_title_9c6f6b48',
    K = 'CommonItemList_list_31cbf983',
    V = 'CommonItemList_item_f8b0a164',
    W = 'CommonItemList_divider_d8a371e7',
    G = 'CommonItemList_divider__cancel_854d8f5a',
    H = d(({ canceledAnim: e, className: s }) => {
        const { model: a, controls: i } = E(),
            d = a.artefacts.get(),
            l = a.computes.isDisabled;
        return t.jsxs('div', {
            className: c(z, s),
            children: [
                t.jsx(A, {
                    className: F,
                    from: { y: 5, x: 0, opacity: 0 },
                    to: { y: 0, x: 0, opacity: 0.8 },
                    config: { tension: 240, friction: 7 },
                    delay: O,
                    isCanceled: e,
                    children: t.jsx(b, { content: R.strings.last_stand_lobby.rewardPath.artefacts.title() }),
                }),
                t.jsx('div', {
                    className: K,
                    children: o(d, (s, o) =>
                        t.jsxs(
                            'div',
                            {
                                className: V,
                                children: [
                                    t.jsx(q, {
                                        ...s,
                                        selected: s.id === a.root.get().selectedArtefactID,
                                        onClick: i.goToMission,
                                        canceledAnim: e,
                                        isDisabled: l(s.id),
                                    }),
                                    o < d.length - 1 && t.jsx('div', { className: c(W, e && G) }),
                                ],
                            },
                            s.id,
                        ),
                    ),
                }),
            ],
        });
    }),
    J = 'DifficultyItem_d48a7ac5',
    U = 'DifficultyItem_title_9ec87a95',
    X = 'DifficultyItem_base__completed_84d51887',
    Y = 'DifficultyItem_base__locked_84d51887',
    Z = 'DifficultyItem_base__selected_84d51887',
    ee = 'DifficultyItem_titleText_5ef8184b',
    se = 'DifficultyItem_titleShadow_2081c97d',
    ae = 'DifficultyItem_icon_d5c291a8',
    te = 'DifficultyItem_iconContainer_6e096167',
    ie = 'DifficultyItem_selected_554fe41b',
    ce = 'DifficultyItem_locked_f1b7bb11',
    de = 'DifficultyItem_completed_48685b4b',
    le = 'DifficultyItem_info_17bcffe4',
    oe = 'DifficultyItem_infoMask_d1ea3d6c',
    re = 'DifficultyItem_rewardIcon_f462d18c',
    ne = 'DifficultyItem_reward_d0843ec7',
    me = 'DifficultyItem_overlay_91d6e974',
    _e = ({
        level: e,
        isLocked: d,
        isSelected: l,
        isCompleted: r,
        aggregatedRewards: v,
        className: u,
        canceledAnim: x,
    }) => {
        const [h, j] = a(() => ({ y: 20, opacity: 0 })),
            y = r && !l ? 'completed' : 'selected',
            N = R.strings.last_stand_lobby.difficult.uppercase.$dyn(`level_${e}`);
        return (
            s.useEffect(() => {
                j.start({
                    to: { y: 0, opacity: 1 },
                    delay: x ? 0 : 80 * e + O + 800,
                    config: { tension: 80, friction: 10 },
                    immediate: x,
                    onStart: () => {
                        n.sound(C);
                    },
                });
            }, [j, x, e]),
            t.jsxs(i.div, {
                className: c(J, l && Z, r && X, d && Y, u),
                style: h,
                children: [
                    t.jsxs('div', {
                        className: U,
                        children: [
                            t.jsx('div', {
                                className: ee,
                                children: r
                                    ? t.jsx(b, { content: N })
                                    : t.jsx(D, { type: k.LightRed, text: N, overflow: !0 }),
                            }),
                            t.jsx('div', { className: se }),
                        ],
                    }),
                    t.jsxs('div', {
                        className: le,
                        children: [
                            t.jsx('div', { className: oe }),
                            t.jsx(m, {
                                contentId: R.views.last_stand.mono.lobby.tooltips.difficulty_tooltip('resId'),
                                args: { difficulty: e, isLocked: d },
                                children: t.jsxs('div', {
                                    className: te,
                                    children: [
                                        t.jsx('div', { className: me }),
                                        t.jsx('div', {
                                            className: ae,
                                            style: {
                                                backgroundImage: `url('R.images.last_stand.gui.maps.icons.difficulties.c_68x68.diff_${e}_${y}')`,
                                            },
                                        }),
                                        l && t.jsx('div', { className: ie }),
                                        d && t.jsx('div', { className: ce }),
                                        r && t.jsx('div', { className: de }),
                                    ],
                                }),
                            }),
                            o(v, (s, a) =>
                                t.jsx(
                                    _,
                                    {
                                        name: s.name,
                                        value: S(s),
                                        className: ne,
                                        classNames: { rewardIcon: re },
                                        size: f.Small,
                                        special: s.overlayType,
                                        image: L(s, f.Small),
                                        valueType: p(s.name),
                                        tooltipArgs: M(s),
                                    },
                                    `${s.name}${e}${a}`,
                                ),
                            ),
                        ],
                    }),
                ],
            })
        );
    },
    fe = d(({ canceledAnim: e, className: s }) => {
        const { model: a } = E(),
            i = a.difficulties.get();
        return t.jsxs('div', {
            className: c(z, s),
            children: [
                t.jsx(A, {
                    className: F,
                    from: { y: 5, x: 0, opacity: 0 },
                    to: { y: 0, x: 0, opacity: 0.8 },
                    config: { tension: 240, friction: 7 },
                    delay: 900,
                    isCanceled: e,
                    children: t.jsx(b, { content: R.strings.last_stand_lobby.rewardPath.difficulties.title() }),
                }),
                t.jsx('div', {
                    className: K,
                    children: o(i, (s, a) =>
                        t.jsxs(
                            'div',
                            {
                                className: V,
                                children: [
                                    t.jsx(_e, { ...s, canceledAnim: e }),
                                    a < i.length - 1 && t.jsx('div', { className: c(W, e && G) }),
                                ],
                            },
                            s.level,
                        ),
                    ),
                }),
            ],
        });
    }),
    pe = 'RewardPathApp_7f1678b4',
    be = 'RewardPathApp_vignette_bb3fa594',
    ve = 'RewardPathApp_bg_9f82b211',
    ue = 'RewardPathApp_base__cancel_f7ecbfc',
    xe = 'RewardPathApp_video_static_frame_db57068a',
    he = 'RewardPathApp_video_595e463b',
    je = 'RewardPathApp_main_reward_7096b2a9',
    ye = 'RewardPathApp_questWidget_aac6e1a9',
    Ne = 'RewardPathApp_keyCard_1efcd5c8',
    Ie = 'RewardPathApp_itemsBlock_c1ba6b30',
    ge = 'RewardPathApp_itemsBlock__left_fe07fc31',
    we = 'RewardPathApp_itemsBlock__right_58ce81d',
    Ae = 'RewardPathApp_doubleDivider_621fe945',
    ke = 'RewardPathApp_doubleDivider__cancel_4c3ba9a7',
    Re = 'RewardPathApp_divider_73dd0fd',
    De = 'RewardPathApp_footer_843e4b31',
    Pe = d(() => {
        const { controls: e } = E();
        (v(e.close),
            s.useEffect(() => {
                (e.viewLoaded(),
                    u(() => {
                        x(!0);
                    }));
            }, [e]));
        const [a, i] = s.useState(!1);
        return t.jsxs('div', {
            className: c(pe, a && ue),
            onClick: () => i(!0),
            children: [
                t.jsx('div', { className: ve }),
                t.jsx('div', { className: je }),
                h.isLow()
                    ? t.jsx('div', { className: xe })
                    : t.jsx(j, { src: R.videos.last_stand.reward_pass(), className: he, loop: !0, autoplay: !0 }),
                t.jsx('div', { className: be }),
                t.jsxs('div', {
                    className: ye,
                    children: [
                        t.jsx(w, { fullBorder: !0 }),
                        t.jsx(g, { className: Ne, fullBorder: !0, withBackground: !0 }),
                    ],
                }),
                t.jsxs('div', {
                    className: De,
                    children: [
                        t.jsx(H, { className: c(Ie, ge), canceledAnim: a }),
                        t.jsxs('div', {
                            className: c(Ae, a && ke),
                            children: [t.jsx('div', { className: Re }), t.jsx('div', { className: Re })],
                        }),
                        t.jsx(fe, { className: c(Ie, we), canceledAnim: a }),
                    ],
                }),
            ],
        });
    });
y(t.jsx(B, { children: t.jsx(Pe, {}) }))
    .then(() => N(document.getElementById('root')))
    .then(() => I())
    .then(() => x(!1));
