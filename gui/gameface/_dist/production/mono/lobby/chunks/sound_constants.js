import { r as a, v as e, j as s, w as n } from './vendor.js';
const t = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    r = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
var i = ((a) => (
    (a.Linear = 'linear'),
    (a.EaseIn = 'easeIn'),
    (a.EaseOut = 'easeOut'),
    (a.EaseInOut = 'easeInOut'),
    (a.EaseOutBack = 'easeOutBack'),
    (a.EaseOutQuint = 'easeOutQuint'),
    (a.EaseOutExpo = 'easeOutExpo'),
    a
))(i || {});
const o = {
        linear: (a) => a,
        easeIn: (a) => a * a * a,
        easeOut: (a) => --a * a * a + 1,
        easeInOut: (a) => (a < 0.5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1),
        easeOutBack: (a) => {
            const e = 1.70158;
            return 1 + 2.70158 * Math.pow(a - 1, 3) + e * Math.pow(a - 1, 2);
        },
        easeOutQuint: (a) => 1 - Math.pow(1 - a, 5),
        easeOutExpo: (a) => (1 === a ? 1 : 1 - Math.pow(2, -10 * a)),
    },
    _ = a.memo(function ({
        children: i,
        from: _ = t,
        to: u = r,
        config: d,
        isCanceled: g = !1,
        isDisabled: c = !1,
        duration: l = 250,
        delay: m = 0,
        transformOrigin: f = '50% 50%',
        easingType: O = 'easeInOut',
        onRest: h,
        onStart: p,
        trigger: w,
        className: y,
        isReverse: E = !1,
        playSoundOnStart: x,
        playSoundOnFinish: I,
    }) {
        const v = o[O],
            [S, b] = e(() => _),
            M = g && !c ? u : { ...S, transformOrigin: f };
        return (
            a.useEffect(() => {
                b.start({
                    from: _,
                    to: u,
                    delay: m,
                    immediate: g,
                    config: d ? { ...d } : { duration: l, easing: v },
                    cancel: g || c,
                    reverse: E,
                    onRest: (a) => {
                        !0 === a.finished && (I && I(), h && h());
                    },
                    onStart: () => {
                        (x && x(), p && p());
                    },
                });
            }, [b, m, l, v, _, g, h, u, w, c, E, I, x, p, d]),
            s.jsx(n.div, { className: y, style: M, children: i })
        );
    }),
    u = 'bp_glide_01',
    d = 'dq_widget_slide_in',
    g = 'dq_screen_quest_reroll',
    c = 'dq_screen_premium_missions_complete',
    l = 'gui_hangar_award_banner',
    m = 'gui_hangar_award_woosh',
    f = 'gui_hangar_award_random_appear',
    O = 'gui_hangar_award_banner',
    h = 'gui_hangar_sm_difficulty_01',
    p = 'gui_hangar_sm_difficulty_02',
    w = 'gui_hangar_sm_difficulty_03',
    y = 'gui_hangar_award_item_rollout',
    E = 'gui_hangar_reward_main_icon';
export {
    f as B,
    y as C,
    i as E,
    g as M,
    _ as S,
    u as W,
    l as a,
    m as b,
    O as c,
    c as d,
    d as e,
    p as f,
    w as g,
    h,
    E as i,
};
