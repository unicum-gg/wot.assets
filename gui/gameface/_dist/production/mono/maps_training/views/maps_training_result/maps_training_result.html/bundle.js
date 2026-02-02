import { e, r as a, j as s, p as t } from '../../../chunks/vendor.js';
import {
    i as n,
    r as i,
    p as r,
    T as o,
    s as l,
    I as d,
    j as c,
    w as _,
    x as m,
    W as u,
    B as g,
    N as b,
    M as p,
} from '../../../chunks/lib.js';
var f = ((e) => (
        (e[(e.Undone = 0)] = 'Undone'),
        (e[(e.PartialDone = 1)] = 'PartialDone'),
        (e[(e.Done = 2)] = 'Done'),
        e
    ))(f || {}),
    w = ((e) => (
        (e[(e.Init = 0)] = 'Init'),
        (e[(e.TitleAndRewards = 1)] = 'TitleAndRewards'),
        (e[(e.Done = 2)] = 'Done'),
        e
    ))(w || {});
function v(a, s, t) {
    return e(a, t >= 1 && s.base__animTitleAndRewards, t >= 2 && s.base__done);
}
const [x, T] = n()(
        ({ observableModel: e }) => ({
            ...{
                ...e.primitives([
                    'doneValue',
                    'mapID',
                    'mapName',
                    'selectedScenario',
                    'selectedVehicleType',
                    'kills',
                    'allTargets',
                    'time',
                    'vehicleImage',
                    'wasDone',
                    'hangarReady',
                ]),
                rewards: e.arrayClone('rewards'),
            },
        }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    j = {
        base: 'NoReward_df5f369d',
        base__animTitleAndRewards: 'NoReward_base__animTitleAndRewards_33d8d8dc',
        item: 'NoReward_item_609c8ec6',
        item__got: 'NoReward_item__got_2dcf33e6',
    },
    h = i.resolve('strings'),
    N = {
        [f.Undone]: h.readOrEmpty('maps_training.result.rewardNotGot'),
        [f.PartialDone]: h.readOrEmpty('maps_training.result.rewardGot'),
        [f.Done]: h.readOrEmpty('maps_training.result.allRewardGot'),
    };
function y({ rewardGot: a, doneValue: t, wasDone: n, animState: i }) {
    return s.jsx('div', {
        className: v(j.base, j, i),
        children: s.jsx('div', {
            className: e(j.item, (a || n) && j.item__got),
            children: n ? h.readOrEmpty('maps_training.result.allRewardGot') : N[t],
        }),
    });
}
const I = {
        base: 'Reward_9adeba6d',
        base__animTitleAndRewards: 'Reward_base__animTitleAndRewards_5453263b',
        icon: 'Reward_icon_14f53da',
        info: 'Reward_info_ecc88b80',
    },
    S = 1.2,
    k = 1e3,
    D = 0.3;
function A({ image: e, value: t, tooltipId: n, animState: i, index: l, onAnimationCompete: d }) {
    const c = (function (e) {
            const s = a.useRef(null),
                t = a.useCallback(
                    function () {
                        e && e();
                    },
                    [e],
                );
            return (
                a.useEffect(
                    function () {
                        const e = s.current;
                        if (e)
                            return (
                                e.addEventListener('transitionend', t),
                                function () {
                                    e.removeEventListener('transitionend', t);
                                }
                            );
                    },
                    [s, t],
                ),
                s
            );
        })(d),
        _ = a.useMemo(
            function () {
                return { tooltipId: n };
            },
            [n],
        ),
        m = S + D * l,
        u = i > w.Init;
    return (
        a.useEffect(
            function () {
                if (u) {
                    const e = setTimeout(function () {
                        r.sound(R.sounds.gui_random_reward_appear());
                    }, m * k);
                    return function () {
                        clearTimeout(e);
                    };
                }
            },
            [m, u],
        ),
        s.jsx(o, {
            ignoreShowDelay: !0,
            ignoreMouseClick: !0,
            contentId: R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: _,
            children: s.jsxs('div', {
                className: v(I.base, I, i),
                style: { transitionDelay: `${m}s` },
                ref: c,
                children: [
                    s.jsx('div', { className: I.icon, style: { backgroundImage: `url(${e})` } }),
                    Number(t) > 1 && s.jsx('div', { className: I.info, children: t }),
                ],
            }),
        })
    );
}
const E = {
    base: 'ResultRewards_85664010',
    base__animTitleAndRewards: 'ResultRewards_base__animTitleAndRewards_dcbfbde',
    ribbon: 'ResultRewards_ribbon_58ccf247',
    rewards: 'ResultRewards_rewards_14b6654c',
};
function M({ doneValue: e, wasDone: t, animState: n, onAnimationCompete: i }) {
    const r = T().model.rewards.get(),
        o = r.length > 0,
        c = e !== f.Undone,
        _ = n > w.Init,
        m = (function (e, s) {
            const [t, n] = a.useState(0);
            return a.useCallback(
                function () {
                    const a = t + 1;
                    (n(a), a === e && s && s());
                },
                [t, n, e, s],
            );
        })(r.length, i);
    return (
        a.useEffect(
            function () {
                if (!o && i && _) {
                    const e = setTimeout(i, S * k);
                    return function () {
                        clearTimeout(e);
                    };
                }
            },
            [_, o, i],
        ),
        s.jsx('div', {
            className: v(E.base, E, n),
            children: o
                ? s.jsxs(s.Fragment, {
                      children: [
                          s.jsx('div', { className: E.ribbon }),
                          s.jsx('div', {
                              className: E.rewards,
                              children: r.map((e, a) =>
                                  s.jsx(
                                      A,
                                      {
                                          index: a,
                                          image: l(e, d.Big),
                                          value: e.value,
                                          tooltipId: e.tooltipId,
                                          animState: n,
                                          onAnimationCompete: m,
                                      },
                                      `${a}_${e.name}_${e.value}`,
                                  ),
                              ),
                          }),
                      ],
                  })
                : s.jsx(y, { animState: n, doneValue: e, rewardGot: c, wasDone: t }),
        })
    );
}
const C = {
        root: 'StatItem_root_8e756938',
        base: 'StatItem_a31bdbd0',
        base__animTitleAndRewards: 'StatItem_base__animTitleAndRewards_74e8ec86',
        icon: 'StatItem_icon_66c37868',
        icon__destroy: 'StatItem_icon__destroy_b668e97f',
        icon__timer: 'StatItem_icon__timer_3919f07e',
        value: 'StatItem_value_a101cfaf',
        valueAll: 'StatItem_valueAll_868af080',
        description: 'StatItem_description_76994ec8',
    },
    O = i.resolve('strings');
var $ = ((e) => ((e.Destroy = 'destroy'), (e.Timer = 'timer'), e))($ || {});
const G = 0.9,
    V = 0.1;
function P({ value: a, label: t, icon: n, index: i, animState: r, all: o }) {
    const l = c(O.readOrEmpty('maps_training.progress'), { currentProgress: a, maxProgress: o });
    return s.jsxs('div', {
        className: v(C.base, C, r),
        style: { transitionDelay: `${G + V * i}s` },
        children: [
            s.jsx('div', { className: e(C.icon, C[`icon__${n}`]) }),
            s.jsx('div', {
                className: C.value,
                children: void 0 !== o && o > 0 ? s.jsx('div', { className: C.valueAll, children: l }) : a,
            }),
            s.jsx('div', { className: C.description, children: t }),
        ],
    });
}
const B = {
    base: 'Tank_64c86de0',
    wrap: 'Tank_wrap_51cfa705',
    image: 'Tank_image_20e440df',
    bg: 'Tank_bg_73a7932a',
    bg__back: 'Tank_bg__back_9e9e3ca6',
    base__defeat: 'Tank_base__defeat_ac0a1e29',
    bg__foreground: 'Tank_bg__foreground_e800b10c',
    back: 'Tank_back_29d05476',
};
function U({ vehicleImage: a, isAnyNotDone: t }) {
    return s.jsxs('div', {
        className: e(B.base, t && B.base__defeat),
        children: [
            s.jsx('div', { className: e(B.bg, B.bg__back) }),
            s.jsx('div', {
                className: B.wrap,
                children: s.jsx('div', { className: B.image, style: { backgroundImage: `url(${a})` } }),
            }),
            s.jsx('div', { className: e(B.bg, B.bg__foreground) }),
            s.jsx('div', { className: B.back }),
        ],
    });
}
const W = {
        base: 'ResultStats_e4f76c93',
        base__animTitleAndRewards: 'ResultStats_base__animTitleAndRewards_e6090ee9',
        stats: 'ResultStats_stats_9b9ef8ba',
        separator: 'ResultStats_separator_6f7d9820',
        separator__failed: 'ResultStats_separator__failed_989f1494',
    },
    F = i.resolve('strings');
function z({ animState: a, hasReward: t }) {
    const n = T().model,
        i = n.kills.get(),
        r = n.time.get(),
        o = n.allTargets.get(),
        l = [
            { label: F.readOrEmpty('maps_training.result.kills'), value: i, all: o, icon: $.Destroy },
            { label: F.readOrEmpty('maps_training.result.time'), value: r, icon: $.Timer },
        ],
        d = n.doneValue.get() !== f.Done;
    return s.jsxs('div', {
        className: e(v(W.base, W, a), d && W.base__defeat),
        children: [
            s.jsx(U, { vehicleImage: n.vehicleImage.get(), isAnyNotDone: d }),
            s.jsx('div', {
                className: W.stats,
                children: l.map((e, t) => s.jsx(P, { index: t, animState: a, ...e }, `item_${t}`)),
            }),
            !t && s.jsx('div', { className: e(W.separator, d && W.separator__failed) }),
        ],
    });
}
const L = {
        base: 'MapsTrainingResult_15b08403',
        bg: 'MapsTrainingResult_bg_cc8b01b4',
        bgFogging: 'MapsTrainingResult_bgFogging_e9f701a4',
        bgShape: 'MapsTrainingResult_bgShape_91f3b597',
        base__animTitleAndRewards: 'MapsTrainingResult_base__animTitleAndRewards_b1ce801b',
        box: 'MapsTrainingResult_box_b69e0d39',
        mapTitle: 'MapsTrainingResult_mapTitle_9022ef51',
        titleWrapper: 'MapsTrainingResult_titleWrapper_10cffc1b',
        titleBG: 'MapsTrainingResult_titleBG_8d4d9b39',
        title: 'MapsTrainingResult_title_2d317224',
        close: 'MapsTrainingResult_close_4c7f7d48',
        button: 'MapsTrainingResult_button_5ef0f480',
    },
    q = i.resolve('strings'),
    H = {
        [f.Undone]: q.readOrEmpty('maps_training.result.title.lose'),
        [f.PartialDone]: q.readOrEmpty('maps_training.result.title.partial'),
        [f.Done]: q.readOrEmpty('maps_training.result.title.win'),
    },
    J = t(function () {
        const { model: e, controls: t } = T(),
            [n, i] = a.useState(w.Init),
            o = e.doneValue.get(),
            l = e.hangarReady.get(),
            d = e.wasDone.get(),
            b = e.mapID.get(),
            p = e.mapName.get(),
            x = o === f.Done,
            j = e.rewards.get().length > 0;
        a.useEffect(
            function () {
                n === w.Init &&
                    l &&
                    (i(w.TitleAndRewards),
                    r.sound(
                        x
                            ? R.sounds.gui_random_reward_red_ribbon_appear()
                            : R.sounds.gui_hangar_simple_execution_screen(),
                    ));
            },
            [n, l, x],
        );
        const h = a.useCallback(
            function () {
                (j || x ? r.sound(R.sounds.gui_random_reward_end()) : d && r.sound(R.sounds.gui_random_reward_appear()),
                    i(w.Done));
            },
            [j, x, d],
        );
        _(m.ESCAPE, t.close);
        const N = a.useMemo(
                function () {
                    return b ? { backgroundImage: `url(img://gui/maps/icons/map/screen/${b}.dds)` } : {};
                },
                [b],
            ),
            y = c(q.readOrEmpty('maps_training.result.mapName'), {
                map: p,
                scenario: e.selectedScenario.get(),
                type: e.selectedVehicleType.get(),
            }),
            I = v(L.base, L, n);
        return s.jsxs('div', {
            className: I,
            children: [
                s.jsx('div', { className: L.close, children: s.jsx(u, { onClose: t.close }) }),
                s.jsxs('div', {
                    className: L.bg,
                    style: N,
                    children: [s.jsx('div', { className: L.bgFogging }), x && s.jsx('div', { className: L.bgShape })],
                }),
                s.jsxs('div', {
                    className: L.box,
                    children: [
                        s.jsx('div', { className: L.mapTitle, children: y }),
                        s.jsxs('div', {
                            className: L.titleWrapper,
                            children: [
                                x && s.jsx('div', { className: L.titleBG }),
                                s.jsx('div', { className: L.title, children: H[o] }),
                            ],
                        }),
                        s.jsx(z, { hasReward: j, animState: n }),
                        s.jsx(M, { animState: n, doneValue: o, wasDone: d, onAnimationCompete: h }),
                    ],
                }),
                s.jsx(g, {
                    className: L.button,
                    theme: g.themes.primary,
                    size: g.sizes.small,
                    onClick: t.close,
                    children: q.readOrEmpty('maps_training.result.submit'),
                }),
            ],
        });
    });
b(s.jsx(p, { children: s.jsx(x, { children: s.jsx(J, {}) }) }));
