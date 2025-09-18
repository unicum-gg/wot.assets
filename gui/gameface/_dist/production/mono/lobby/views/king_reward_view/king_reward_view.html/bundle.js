import { p as a, r as s, j as e, q as r, m as i, s as t } from '../../../chunks/vendor.js';
import {
    i as o,
    s as n,
    a6 as d,
    Z as l,
    p as c,
    Y as p,
    ab as m,
    u as _,
    k as u,
    a4 as g,
    ac as w,
    a8 as j,
    m as y,
    C as h,
    B as x,
    J as b,
    P as A,
} from '../../../chunks/lib.js';
import { S as f } from '../../../chunks/spring_wrapper.js';
import { T as N } from '../../../chunks/text.module.js';
import { T as k } from '../../../chunks/text_simple.js';
import { K as v } from '../../../chunks/sound.js';
import { g as T, a as C, c as K } from '../../../chunks/utils2.js';
import '../../../chunks/string-utils.js';
const [E, S] = o()(
        ({ observableModel: a }) => ({ root: a.object(), rewards: a.array('rewards', []) }),
        ({ externalModel: a }) => ({
            close: a.createCallbackNoArgs('onClose'),
            outro: a.createCallbackNoArgs('onToOutroClick'),
        }),
    ),
    B = { y: 5, opacity: 0 },
    D = { y: 0, opacity: 1 };
var L = ((a) => (
    (a.TITLE = 'title'),
    (a.HEADER = 'header'),
    (a.NAME = 'name'),
    (a.REWARDS = 'rewards'),
    (a.BUTTONS = 'buttons'),
    a
))(L || {});
const W = 500,
    H = 200,
    M = 1e3,
    O = {
        title: { from: B, to: D, delay: M, duration: W },
        header: { from: B, to: D, delay: 1200, duration: W },
        name: { from: B, to: D, delay: 1400, duration: W },
        rewards: { from: { y: -5, opacity: 0 }, to: D, delay: 1800, duration: W },
        buttons: { from: { y: 10, opacity: 0 }, to: D, delay: 3200, duration: 1200 },
    },
    z = 'RewardWrapper_e9cea632',
    I = 'RewardWrapper_reward_1ed12001';
function P({ reward: t, index: o, className: _, skipAnim: u }) {
    const { breakpoint: g } = n(),
        w = g.weight <= d.small.weight ? l.Small : l.Big,
        [j, y] = a(() => ({ y: -10, opacity: 0 }));
    return (
        s.useEffect(() => {
            y.start({
                to: { y: 0, opacity: 1 },
                delay: u ? 0 : O.rewards.delay + H + 120 * o,
                config: { tension: 75, friction: 8 },
                immediate: u,
                onStart: () => {
                    c.sound(v);
                },
            });
        }, [y, o, u]),
        e.jsx(r.div, {
            className: i(z, _),
            style: j,
            children: e.jsx(
                p,
                {
                    name: t.name,
                    value: T(t),
                    className: I,
                    size: w,
                    special: t.overlayType,
                    image: C(t, w),
                    valueType: m(t.name),
                    tooltipArgs: K(t),
                },
                `${t.name}${o}`,
            ),
        })
    );
}
const U = 'KingRewardApp_44b022a4',
    $ = 'KingRewardApp_closeBtn_39fd01e7',
    q = 'KingRewardApp_vignetteBg_f39d1134',
    F = 'KingRewardApp_background_61f74de3',
    J = 'KingRewardApp_base__skipAnim_401ff0d7',
    V = 'KingRewardApp_video_static_frame_c8ce80ec',
    Y = 'KingRewardApp_video_4860dd44',
    Z = 'KingRewardApp_main_reward_73f8b15c',
    G = 'KingRewardApp_title_30646d85',
    Q = 'KingRewardApp_header_114f124a',
    X = 'KingRewardApp_rewardList_ec777914',
    aa = 'KingRewardApp_rewardsTitle_3d78ce62',
    sa = 'KingRewardApp_buttons_1776743d',
    ea = 'KingRewardApp_button_7430bb7d',
    ra = 'KingRewardApp_bottomContainer_bfb0d8e8',
    ia = R.strings.last_stand_lobby.kingRewardCongratsView,
    ta = t(() => {
        const { model: a, controls: r } = S(),
            [t, o] = s.useState(!1);
        return (
            _(u.ENTER, r.close),
            _(u.ESCAPE, r.close),
            e.jsxs('div', {
                className: i(U, t && J),
                onClick: () => o(!0),
                children: [
                    e.jsx(g, {
                        classNames: { base: $ },
                        caption: R.strings.last_stand_lobby.common.close(),
                        type: 'close',
                        side: 'right',
                        onClick: r.close,
                    }),
                    e.jsxs('div', {
                        className: F,
                        children: [
                            e.jsx('div', { className: Z }),
                            w.isLow()
                                ? e.jsx('div', { className: V })
                                : e.jsx(j, {
                                      src: R.videos.last_stand.king_reward(),
                                      className: Y,
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                        ],
                    }),
                    e.jsx('div', { className: q }),
                    e.jsx(f, {
                        ...O[L.TITLE],
                        isCanceled: t,
                        children: e.jsx('div', { className: G, children: ia.title() }),
                    }),
                    e.jsx(f, {
                        ...O[L.HEADER],
                        isCanceled: t,
                        children: e.jsx(k, { text: ia.header(), type: N.Heading, className: Q, shadow: !0 }),
                    }),
                    e.jsx(f, {
                        ...O[L.REWARDS],
                        className: ra,
                        isCanceled: t,
                        children: e.jsxs('div', {
                            className: X,
                            children: [
                                e.jsx('div', { className: aa, children: ia.rewardsTitle() }),
                                y(a.rewards.get(), (a, s) => e.jsx(P, { reward: a, index: s, skipAnim: t }, a.name)),
                            ],
                        }),
                    }),
                    e.jsx(f, {
                        ...O[L.BUTTONS],
                        className: ra,
                        isCanceled: t,
                        children: e.jsx('div', {
                            className: sa,
                            children: e.jsx(h, {
                                type: x.primary,
                                size: b.medium,
                                onClick: r.outro,
                                mixClass: ea,
                                isFocused: !0,
                                children: a.root.get().isTransition ? ia.btn.continue() : ia.btn.outro(),
                            }),
                        }),
                    }),
                ],
            })
        );
    });
A(e.jsx(E, { children: e.jsx(ta, {}) }));
