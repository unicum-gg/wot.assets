import { i as e, D as s, j as a, E as r, r as t } from '../../../chunks/vendor.js';
import {
    i,
    o as d,
    dh as l,
    b as c,
    I as n,
    ba as o,
    m,
    p,
    l as u,
    X as g,
    K as y,
    Y as _,
    B as h,
    aQ as w,
    C as b,
    r as j,
    cC as x,
} from '../../../chunks/lib.js';
import { E as f, S as N } from '../../../chunks/spring_wrapper.js';
import { S as v } from '../../../chunks/sound.js';
import { g as T, a as L, b as E, c as S } from '../../../chunks/utils.js';
const [A, C] = i()(
    ({ observableModel: s }) => {
        const a = {
                ...s.primitives(['artefactNumber', 'isLastArtefact', 'isQuestReward']),
                rewards: s.array('rewards', []),
            },
            r = e(() => [...l(a.rewards.get(), 0, 3)], { equals: d }),
            t = e(() => [...l(a.rewards.get(), 4)], { equals: d }),
            i = e(() => t().length > 0),
            c = e(() => a.isLastArtefact.get() || a.isQuestReward.get());
        return { ...a, computes: { mainRewards: r, otherRewards: t, hasOtherRewards: i, isSpecialReward: c } };
    },
    ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
);
var z = ((e) => (
    (e.RIBBON = 'ribbon'),
    (e.SUBTITLE = 'subtitle'),
    (e.TITLE = 'title'),
    (e.BUTTON = 'button'),
    (e.REWARD = 'reward'),
    (e.OTHER = 'other'),
    e
))(z || {});
const B = 300,
    O = {
        ribbon: { from: { y: 20 }, to: { y: 0 }, delay: B, duration: B, easingType: f.EaseOut },
        subtitle: { from: { y: 20 }, to: { y: 0 }, delay: 0, duration: B, easingType: f.EaseOut },
        title: { from: { y: 20 }, to: { y: 0 }, delay: 150, duration: B, easingType: f.EaseOut },
        button: {
            from: { y: 20, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1200,
            duration: B,
            easingType: f.EaseOut,
        },
        reward: {
            from: { y: -10, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 0,
            duration: B,
            easingType: f.EaseOut,
        },
        other: { from: { y: 20, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0, duration: B, easingType: f.EaseOut },
    },
    I = 'RewardList_2f0b5808',
    k = 'RewardList_ribbon_df2eb79d',
    $ = 'RewardList_rewards_12849047',
    Q = 'RewardList_ribbonImage_5f4554d1',
    U = 'RewardList_ribbonImage__gold_7c6e7caa',
    D = 'RewardList_highlight_9ef1e53a',
    q = 'RewardList_shine_17629f60',
    H = 'RewardList_radial_73b144ff',
    M = 'RewardList_reward_7bab5c66',
    W = 'RewardList_rewardValue_e037495',
    F = 'RewardList_other_aaca6476',
    K = 'RewardList_otherContent_1c49f8e0',
    P = 'RewardList_divider_7285fc8',
    V = O[z.RIBBON].delay + 150,
    X = () => p.sound(v),
    Y = s(function ({ isAnimationCanceled: e }) {
        const { model: s } = C(),
            t = c({ size: n.S296x222 }, { large: { size: n.S400x300 } }),
            i = s.computes.isSpecialReward();
        return a.jsxs('div', {
            className: I,
            children: [
                i &&
                    a.jsxs('div', {
                        className: D,
                        children: [
                            a.jsx(o, { className: r(q), src: R.videos.last_stand.rays(), autoplay: !0, loop: !0 }),
                            a.jsx('div', { className: H }),
                        ],
                    }),
                a.jsxs(N, {
                    className: k,
                    ...O[z.RIBBON],
                    isCanceled: e,
                    children: [
                        a.jsx('div', { className: r(Q, i && U) }),
                        a.jsx('div', {
                            className: $,
                            children: m(s.computes.mainRewards(), (s, r) =>
                                a.jsx(
                                    N,
                                    {
                                        className: M,
                                        ...O[z.REWARD],
                                        delay: V + 150 * r,
                                        isCanceled: e,
                                        onStart: X,
                                        children: a.jsx(u, {
                                            name: s.name,
                                            value: S(s),
                                            classNames: { info: W },
                                            size: t.size,
                                            special: s.overlayType,
                                            image: E(s, t.size),
                                            valueType: L(s.name),
                                            tooltipArgs: T(s),
                                        }),
                                    },
                                    `${s.name}${r}`,
                                ),
                            ),
                        }),
                        s.computes.hasOtherRewards() &&
                            a.jsx('div', {
                                className: F,
                                children: a.jsxs(N, {
                                    className: K,
                                    ...O[z.OTHER],
                                    delay: V + 600,
                                    isCanceled: e,
                                    children: [
                                        a.jsx('div', {
                                            children: R.strings.last_stand_lobby.stageReward.rewards.received(),
                                        }),
                                        a.jsx('div', {
                                            className: $,
                                            children: m(s.computes.otherRewards(), (e, s) =>
                                                a.jsx(
                                                    u,
                                                    {
                                                        className: M,
                                                        classNames: { info: W },
                                                        name: e.name,
                                                        value: S(e),
                                                        size: n.Big,
                                                        special: e.overlayType,
                                                        image: E(e, n.Big),
                                                        valueType: L(e.name),
                                                        tooltipArgs: T(e),
                                                    },
                                                    `${e.name}${s}`,
                                                ),
                                            ),
                                        }),
                                        a.jsx('div', { className: P }),
                                    ],
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    G = 'StageRewardApp_596c72ca',
    J = 'StageRewardApp_background_3213d284',
    Z = 'StageRewardApp_subTitle_1cc7ba74',
    ee = 'StageRewardApp_title_b85fb500',
    se = 'StageRewardApp_continueButton_11a86d0e',
    ae = 'StageRewardApp_closeBtn_ee72ce32',
    re = s(function () {
        const [e, s] = t.useState(!1),
            { model: r, controls: i } = C();
        (g(i.close), y(_.ENTER, i.close), y(_.SPACE, i.close));
        const d = c(
                { size: h.sizes.extraSmall },
                {
                    medium: { size: h.sizes.small },
                    large: { size: h.sizes.medium },
                    extraLarge: { size: h.sizes.large },
                },
            ),
            l = ((n = r.isLastArtefact.get()), r.isQuestReward.get() ? 'special' : n ? 'stageFinal' : 'stage');
        var n;
        return a.jsxs('div', {
            className: G,
            onClick: () => s(!0),
            children: [
                a.jsx('div', { className: J }),
                a.jsx(N, {
                    ...O[z.SUBTITLE],
                    isCanceled: e,
                    children: a.jsx(w, {
                        path: `R.strings.last_stand_lobby.stageReward.${l}.subheader`,
                        className: Z,
                        params: { number: r.artefactNumber.get() },
                    }),
                }),
                a.jsx(N, {
                    ...O[z.TITLE],
                    isCanceled: e,
                    children: a.jsx(w, { className: ee, path: `R.strings.last_stand_lobby.stageReward.${l}.header` }),
                }),
                a.jsx(Y, { isAnimationCanceled: e }),
                a.jsx('div', {
                    className: se,
                    children: a.jsx(N, {
                        ...O[z.BUTTON],
                        isCanceled: e,
                        children: a.jsx(h, {
                            size: d.size,
                            theme: h.themes.primary,
                            onClick: i.close,
                            children: R.strings.last_stand_lobby.common.yes(),
                        }),
                    }),
                }),
                a.jsx('div', { className: ae, children: a.jsx(b, { onClose: i.close }) }),
            ],
        });
    });
j(a.jsx(A, { children: a.jsx(x, { children: a.jsx(re, {}) }) }));
