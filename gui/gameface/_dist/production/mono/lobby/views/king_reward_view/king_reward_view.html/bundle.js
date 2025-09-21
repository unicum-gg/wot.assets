import { p as s, r as a, j as e, q as r, m as i, s as t } from '../../../chunks/vendor.js';
import {
    i as o,
    s as n,
    X as d,
    a6 as l,
    p as c,
    a5 as p,
    a7 as m,
    u as _,
    k as u,
    Y as g,
    at as w,
    _ as j,
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
import { g as T, a as C, b as K } from '../../../chunks/utils2.js';
import '../../../chunks/string-utils.js';
const [E, S] = o()(
        ({ observableModel: s }) => ({ root: s.object(), rewards: s.array('rewards', []) }),
        ({ externalModel: s }) => ({
            close: s.createCallbackNoArgs('onClose'),
            outro: s.createCallbackNoArgs('onToOutroClick'),
        }),
    ),
    B = { y: 5, opacity: 0 },
    D = { y: 0, opacity: 1 };
var L = ((s) => (
    (s.TITLE = 'title'),
    (s.HEADER = 'header'),
    (s.NAME = 'name'),
    (s.REWARDS = 'rewards'),
    (s.BUTTONS = 'buttons'),
    s
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
        [j, y] = s(() => ({ y: -10, opacity: 0 }));
    return (
        a.useEffect(() => {
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
    X = 'KingRewardApp_video_4860dd44',
    Y = 'KingRewardApp_main_reward_73f8b15c',
    G = 'KingRewardApp_title_30646d85',
    Q = 'KingRewardApp_header_114f124a',
    Z = 'KingRewardApp_rewardList_ec777914',
    ss = 'KingRewardApp_rewardsTitle_3d78ce62',
    as = 'KingRewardApp_buttons_1776743d',
    es = 'KingRewardApp_button_7430bb7d',
    rs = 'KingRewardApp_bottomContainer_bfb0d8e8',
    is = R.strings.last_stand_lobby.kingRewardCongratsView,
    ts = t(() => {
        const { model: s, controls: r } = S(),
            [t, o] = a.useState(!1);
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
                            e.jsx('div', { className: Y }),
                            w.isLow()
                                ? e.jsx('div', { className: V })
                                : e.jsx(j, {
                                      src: R.videos.last_stand.king_reward(),
                                      className: X,
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                        ],
                    }),
                    e.jsx('div', { className: q }),
                    e.jsx(f, {
                        ...O[L.TITLE],
                        isCanceled: t,
                        children: e.jsx('div', { className: G, children: is.title() }),
                    }),
                    e.jsx(f, {
                        ...O[L.HEADER],
                        isCanceled: t,
                        children: e.jsx(k, { text: is.header(), type: N.Heading, className: Q, shadow: !0 }),
                    }),
                    e.jsx(f, {
                        ...O[L.REWARDS],
                        className: rs,
                        isCanceled: t,
                        children: e.jsxs('div', {
                            className: Z,
                            children: [
                                e.jsx('div', { className: ss, children: is.rewardsTitle() }),
                                y(s.rewards.get(), (s, a) => e.jsx(P, { reward: s, index: a, skipAnim: t }, s.name)),
                            ],
                        }),
                    }),
                    e.jsx(f, {
                        ...O[L.BUTTONS],
                        className: rs,
                        isCanceled: t,
                        children: e.jsx('div', {
                            className: as,
                            children: e.jsx(h, {
                                type: x.primary,
                                size: b.medium,
                                onClick: r.outro,
                                mixClass: es,
                                isFocused: !0,
                                children: s.root.get().isTransition ? is.btn.continue() : is.btn.outro(),
                            }),
                        }),
                    }),
                ],
            })
        );
    });
A(e.jsx(E, { children: e.jsx(ts, {}) }));
