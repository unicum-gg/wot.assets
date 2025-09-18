import { f as e, j as s, p as i, q as t } from '../../../../chunks/vendor.js';
import {
    a as r,
    al as o,
    I as a,
    m as l,
    i as p,
    F as d,
    ar as n,
    P as m,
    d as c,
    $ as _,
    h as g,
    j as b,
    a1 as h,
    a0 as f,
    z as j,
} from '../../../../chunks/lib.js';
import { d as x } from '../../../../chunks/TooltipDecorator2.js';
/* empty css                                 */ const [u, y] = r()(
    ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
    o,
);
var v = ((e) => ((e[(e.High = 1)] = 'High'), (e[(e.Medium = 2)] = 'Medium'), (e[(e.Low = 3)] = 'Low'), e))(v || {});
const w = 'PerformanceWarning_b17f004',
    P = 'PerformanceWarning_title_a82f0689',
    W = 'PerformanceWarning_title__medium_afcc3cd8',
    T = 'PerformanceWarning_title__high_93cb581f',
    A = 'PerformanceWarning_description_ac42930f',
    N = ({ performanceRisk: i }) => {
        const t = a.resolve('strings'),
            r = {
                titleClasses: P,
                title: t.readOrEmpty('white_tiger_lobby.tooltips.informative.title'),
                description: t.readOrEmpty('white_tiger_lobby.tooltips.informative.subtitle'),
            },
            o = {
                [v.Low]: r,
                [v.Medium]: {
                    titleClasses: e(P, W),
                    title: t.readOrEmpty('white_tiger_lobby.tooltips.medium_risk.title'),
                    description: t.readOrEmpty('white_tiger_lobby.tooltips.medium_risk.subtitle'),
                },
                [v.High]: {
                    titleClasses: e(P, T),
                    title: t.readOrEmpty('white_tiger_lobby.tooltips.high_risk.title'),
                    description: t.readOrEmpty('white_tiger_lobby.tooltips.high_risk.subtitle'),
                },
            },
            { title: l, titleClasses: p, description: d } = o[i] || r;
        return s.jsxs('div', {
            className: w,
            children: [s.jsx('div', { className: p, children: l }), s.jsx('div', { className: A, children: d })],
        });
    },
    E = 'ProgressionWidgetTooltipApp_26926b0a',
    O = 'ProgressionWidgetTooltipApp_heading_a7883abf',
    k = 'ProgressionWidgetTooltipApp_base__completed_edd64607',
    C = 'ProgressionWidgetTooltipApp_timeLeft_1c539352',
    L = 'ProgressionWidgetTooltipApp_timeLeft_accent_14ceb8d1',
    M = 'ProgressionWidgetTooltipApp_timeLeft__progressionFinished_7b70a8f6',
    F = 'ProgressionWidgetTooltipApp_currentStage_d976bafc',
    I = 'ProgressionWidgetTooltipApp_currentStage_description_9688b42',
    H = 'ProgressionWidgetTooltipApp_stamps_fadf5b91',
    S = 'ProgressionWidgetTooltipApp_stamps_accent_b0aefb48',
    D = 'ProgressionWidgetTooltipApp_stamps_icon_8e580c32',
    q = 'ProgressionWidgetTooltipApp_progress_a0fd4f09',
    z = 'ProgressionWidgetTooltipApp_rewards_wrapper_ca08eeb8',
    B = 'ProgressionWidgetTooltipApp_rewards_title_b82aae90',
    V = 'ProgressionWidgetTooltipApp_rewards_group_bf4448f1',
    $ = 'ProgressionWidgetTooltipApp_reward_db80b194',
    G = 'ProgressionWidgetTooltipApp_image_69527da6',
    J = 'ProgressionWidgetTooltipApp_completed_99cf12d1',
    K = i(() => {
        const { model: i } = y(),
            {
                isProgressionCompleted: r,
                stageCurrent: o,
                commonCurrent: j,
                commonTotal: x,
                stampsCurrent: u,
                stampsMax: v,
                timeLeft: w,
                performanceRisk: P,
            } = i.root.get(),
            W = a.resolve('strings'),
            T = i.rewards.get(),
            A = ((e) =>
                e.map((e) => ({
                    name: e.name,
                    image: h(e, f.Big),
                    value: e.value,
                    valueType: b(e.name),
                    tooltipArgs: g({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                })))(l(T, p)),
            K = e(E, r && k);
        return s.jsxs('div', {
            className: K,
            children: [
                s.jsx('div', { className: O, children: W.readOrEmpty('white_tiger_lobby.tooltips.title') }),
                r &&
                    s.jsxs(s.Fragment, {
                        children: [
                            s.jsx('div', {
                                className: J,
                                children: W.readOrEmpty('white_tiger_lobby.tooltips.completed'),
                            }),
                            s.jsx('div', { className: G }),
                        ],
                    }),
                w >= 0 &&
                    s.jsx(d, {
                        classMix: t(C, !r && M),
                        binding: { timeLeft: s.jsx('span', { className: L, children: s.jsx(n, { duration: w }) }) },
                        text: W.readOrEmpty('white_tiger_lobby.tooltips.subtitle'),
                    }),
                !r &&
                    s.jsxs(s.Fragment, {
                        children: [
                            s.jsx('div', { className: F, children: o }),
                            s.jsx('div', {
                                className: I,
                                children: W.readOrEmpty('white_tiger_lobby.tooltips.currentStage'),
                            }),
                            s.jsx('div', { className: q, children: s.jsx(m, { value: j, maxValue: x, theme: c }) }),
                            s.jsxs('div', {
                                className: H,
                                children: [
                                    s.jsx(d, {
                                        binding: {
                                            stampsCurrent: s.jsx('span', { className: S, children: u }),
                                            stampsMax: v,
                                        },
                                        text: W.readOrEmpty('white_tiger_lobby.tooltips.stampsFormat'),
                                    }),
                                    s.jsx('img', {
                                        className: D,
                                        src: R.images.white_tiger.gui.maps.icons.tooltips.points_icon(),
                                    }),
                                ],
                            }),
                            s.jsxs('div', {
                                className: z,
                                children: [
                                    s.jsx('div', {
                                        className: B,
                                        children: W.readOrEmpty('white_tiger_lobby.tooltips.stageAwards'),
                                    }),
                                    T &&
                                        s.jsx('div', {
                                            className: V,
                                            children: A.map((e, i) => s.jsx(_, { className: $, ...e }, i)),
                                        }),
                                ],
                            }),
                        ],
                    }),
                P && !r && s.jsx(N, { performanceRisk: P }),
            ],
        });
    });
j(s.jsx(u, { children: s.jsx(x, { children: s.jsx(K, {}) }) }));
