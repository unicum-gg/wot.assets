import { p as s, j as a, q as e, f as r, w as n } from '../../../chunks/vendor.js';
import { d as o, a as l, _ as i, i as c, u as d, k as t, c as m, b as _, U as p, g as b } from '../../../chunks/lib.js';
import { A as u, H as h, a as j, F as w, t as f } from '../../../chunks/header.js';
import { k as x, q as R } from '../../../chunks/helpers.js';
import { J as N } from '../../../chunks/jm_reward.js';
import { B as g } from '../../../chunks/bonuses_mocks.js';
/* empty css                    */ function A({ index: r, className: n, children: l }) {
    const i = o(),
        c = s({ ...u.getMainReward(r), onStart: () => i.play('animation', { target: 'reward' }) });
    return a.jsx(e.div, { style: c, className: n, children: l });
}
const k = 'MainRewards_597b951b',
    C = 'MainRewards_ribbonWrapper_626a5e29',
    E = 'MainRewards_ribbon_2f081908',
    v = 'MainRewards_info_5b70cd30',
    M = 'MainRewards_label_a1f18ebf';
function S({ bonuses: n, className: c }) {
    const d = o(),
        t = s({ ...u.RIBBON, onStart: () => d.play('open', { target: 'view' }) }),
        m = l({ size: i.S232x174 }, { large: { size: i.S400x300 } });
    return a.jsxs('div', {
        className: r(k, c),
        children: [
            a.jsx(e.div, { style: t, className: C, children: a.jsx('div', { className: E }) }),
            n.map((s, e) =>
                a.jsx(
                    A,
                    {
                        index: e,
                        children: a.jsx(N, {
                            bonus: s,
                            size: m.size,
                            classNames: { info: v, label: r(v, M) },
                            showLabel: !R(s),
                            hideValue: x(s),
                            withoutLineBreaks: !0,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
}
const [y, P] = c('RewardsProvider')(
        ({ observableModel: s }) => ({ rewards: s.arrayClone('rewards') }),
        ({ externalModel: s }) => ({ close: s.createCallbackNoArgs('onClose') }),
    ),
    I = 'App_f753008c',
    D = 'App_header_62b47ab',
    O = 'App_content_32b0ab9a',
    T = 'App_mainRewards_9a6a16c3',
    z = 'App_mainRewards__additional_9a208dfe',
    B = 'App_additionalRewards_f1baca99',
    L = 'App_footer_8855e946',
    U = n(function () {
        const { model: s, controls: e } = P(),
            n = s.rewards.get(),
            o = n.slice(0, 4),
            l = n.slice(4),
            i = u.getMainRewardsDuration(o.length),
            c = u.getAdditionalRewardDuration(l.length),
            m = l.length > 0;
        return (
            d(t.ESCAPE, e.close),
            d(t.ENTER, e.close),
            d(t.SPACE, e.close),
            a.jsxs('div', {
                className: I,
                children: [
                    a.jsx(h, { className: D, onClose: e.close }),
                    a.jsxs('div', {
                        className: O,
                        children: [
                            a.jsx(S, { className: r(T, m && z), bonuses: o }),
                            m && a.jsx(j, { className: B, bonuses: l, animationDelay: i }),
                        ],
                    }),
                    a.jsx(w, { className: L, onClose: e.close, animationDelay: i + c }),
                ],
            })
        );
    }),
    F = {
        getter: m({
            rewards: [g.CREDIT, g.PREMIUM, g.EXP_FREE, g.GUIDE, g.OPTICS, g.CRYSTAL, g.EQUIP_COIN, g.XP_FACTOR],
        }),
        controls: () => ({ close: () => window.model.onClose() }),
    };
_(a.jsx(y, { mode: 'real', mocks: F, children: a.jsx(p, { soundsOverrides: b(f), children: a.jsx(U, {}) }) }), {
    fullScreen: !0,
    immediateLayout: !1,
});
