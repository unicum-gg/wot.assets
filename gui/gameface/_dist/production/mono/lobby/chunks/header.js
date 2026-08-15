import { w as e, p as a, j as r, q as t, f as i } from './vendor.js';
import { L as n, d as o, af as s, r as d, a as l, _ as c, B as m, C as y } from './lib.js';
import { l as u } from './helpers.js';
const p = { open: { view: 'gui_reward_screen_general' }, animation: { reward: 'gui_hangar_award_random_appear' } },
    f = { easing: n.cubicBezier(0.1, 0.7, 0.7, 1), duration: 300 },
    _ = { from: { opacity: 0, y: '20rem' }, to: { opacity: 1, y: '0rem' }, delay: 300, config: { ...f } },
    g = { from: { opacity: 0, y: '20rem' }, to: { opacity: 1, y: '0rem' }, delay: 400, config: { ...f } },
    w = { from: { opacity: 0, y: '40rem' }, to: { opacity: 1, y: '0rem' }, delay: 600, config: { ...f } },
    E = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 1e3, config: { ...f } };
const j = {
        HEADER_SUB_TITLE: _,
        HEADER_TITLE: g,
        RIBBON: w,
        RAYS: E,
        getMainReward: function (e) {
            return {
                from: { opacity: 0, scale: 1.4, pointerEvents: 'none' },
                to: { opacity: 1, scale: 1, pointerEvents: 'auto' },
                delay: 1e3 + 550 * e,
                config: { ...f, duration: 550 },
            };
        },
        getMainRewardsDuration: function (e) {
            return 1e3 + 550 * e;
        },
        getAdditionalTitle: function (e = 0) {
            return { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100 + e, config: { ...f, duration: 80 } };
        },
        getAdditionalReward: (e, a = 0) => ({
            from: { opacity: 0, y: '20rem', pointerEvents: 'none' },
            to: { opacity: 1, y: '0rem', pointerEvents: 'auto' },
            delay: a + 80 + 80 * e,
            config: { ...f, duration: 80 },
        }),
        getAdditionalRewardDuration: function (e) {
            return 80 + 80 * e;
        },
        getFooter: function (e = 0) {
            return {
                from: { opacity: 0, pointerEvents: 'none' },
                to: { opacity: 1, pointerEvents: 'auto' },
                delay: e,
                config: { ...f, duration: 200 },
            };
        },
    },
    v = e(function ({ reward: e, rewardSize: i, index: n, className: d, animationDelay: l = 0 }) {
        const c = o(),
            m = a({ ...j.getAdditionalReward(n, l), onStart: () => c.play('animation', { target: 'reward' }) });
        return r.jsx(t.div, { style: m, className: d, children: r.jsx(s, { ...u(e, i) }) });
    }),
    R = 'AdditionalRewards_ffae6df',
    N = 'AdditionalRewards_title_c9185b5a',
    h = 'AdditionalRewards_rewardsList_81a45598',
    x = 'AdditionalRewards_additionalReward_2e7d9e1d',
    A = d.resolve('strings');
function S({ bonuses: e, className: n, animationDelay: o = 0 }) {
    const s = a(j.getAdditionalTitle(o)),
        d = l({ rewardSize: c.Small }, { large: { rewardSize: c.Big } });
    return r.jsxs('div', {
        className: i(R, n),
        children: [
            r.jsx(t.div, {
                style: s,
                className: N,
                children: A.readOrEmpty('journey_marathon.mainRewards.additionalRewardsHeader'),
            }),
            r.jsx('div', {
                className: h,
                children: e.map((e, a) =>
                    r.jsx(
                        v,
                        { className: x, reward: e, index: a, rewardSize: d.rewardSize, animationDelay: o },
                        e.name,
                    ),
                ),
            }),
        ],
    });
}
const z = d.resolve('strings');
function T({ className: e, animationDelay: i, onClose: n }) {
    const o = a(j.getFooter(i)),
        s = l({ ButtonSizes: m.sizes.small }, { large: { ButtonSizes: m.sizes.medium } });
    return r.jsx(t.div, {
        style: o,
        className: e,
        children: r.jsx(m, { onClick: n, size: s.ButtonSizes, children: z.readOrEmpty('journey_marathon.confirm') }),
    });
}
const b = 'Header_bbfb94eb',
    B = 'Header_subTitle_e1e28a10',
    D = 'Header_title_60f64c4',
    H = 'Header_close_42014d16',
    C = d.resolve('strings');
function L({ className: e, onClose: n }) {
    const o = a(j.HEADER_SUB_TITLE),
        s = a(j.HEADER_TITLE);
    return r.jsxs('div', {
        className: i(b, e),
        children: [
            r.jsx(t.div, { style: o, className: B, children: C.readOrEmpty('journey_marathon.longNameUpperCase') }),
            r.jsx(t.div, { style: s, className: D, children: C.readOrEmpty('journey_marathon.mainRewards.subTitle') }),
            r.jsx(y, { className: H, onClose: n }),
        ],
    });
}
export { j as A, T as F, L as H, S as a, p as t };
