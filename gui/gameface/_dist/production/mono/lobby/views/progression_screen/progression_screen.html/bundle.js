import { j as e, f as s, r as a, S as r, R as t } from '../../../chunks/vendor.js';
import {
    i as o,
    o as n,
    b$ as i,
    al as c,
    a3 as l,
    B as d,
    cX as _,
    cY as m,
    c2 as b,
    bX as u,
    b2 as v,
    m as f,
    ax as g,
    aR as p,
    bR as x,
    c0 as j,
    cZ as N,
    E as S,
    cV as h,
    cu as k,
    c3 as w,
} from '../../../chunks/lib.js';
import { L as B, l as C, s as P } from '../../../chunks/level_badge.js';
import { F as L, A as R } from '../../../chunks/event_banner_state.js';
import { C as z } from '../../../chunks/custom_reward.js';
const [T, y] = o()(
        ({ observableModel: e }) => ({
            ...e.primitives([
                'frontlineState',
                'countdownSeconds',
                'level',
                'isMaxLevel',
                'currentPoints',
                'neededPoints',
                'amountRewardsToClaim',
                'areRewardsJustEarned',
            ]),
            tiersSections: e.arrayClone('tiersSections'),
        }),
        ({ externalModel: e }) => ({
            claimRewards: e.createCallbackNoArgs('onClaimRewards'),
            close: e.createCallbackNoArgs('onClose'),
        }),
    ),
    I = {
        base: 'Glow_fb7467e0',
        sparksBgFx: 'Glow_sparksBgFx_d40a78ff',
        base__appearing: 'Glow_base__appearing_a44066b8',
        sparksBg: 'Glow_sparksBg_80ab367d',
        video: 'Glow_video_8a929657',
        base__visible: 'Glow_base__visible_a44066b8',
    },
    E = n.resolve('videos');
function M({ isAppearing: a, className: r }) {
    return e.jsxs('div', {
        className: s(I.base, a ? I.base__appearing : I.base__visible, r),
        children: [
            e.jsx('div', { className: I.sparksBgFx }),
            e.jsx('div', { className: I.sparksBg }),
            e.jsx(i, {
                className: I.video,
                src: E.readOrEmpty('flProgressionScreen.sparks_orange'),
                loop: !0,
                autoplay: !0,
            }),
        ],
    });
}
const A = 'ClaimRewardButton_6a9b8fa0',
    O = 'ClaimRewardButton_glow_433d746e',
    $ = 'ClaimRewardButton_container_741d3600',
    F = 'ClaimRewardButton_base__appearing_a2ccee13',
    G = 'ClaimRewardButton_base__visible_a2ccee13',
    V = 'ClaimRewardButton_button_7e382552',
    J = 'ClaimRewardButton_bubble_66a9d9b0',
    W = 'ClaimRewardButton_valueContainer_937dcb63',
    X = n.resolve('strings');
function Y({ amount: r, isAppearing: t, size: o, onClick: n }) {
    const i = c({ body: X.readOrEmpty('fl_progression_screen.claimRewardsTooltip') }),
        b = l();
    return (
        a.useEffect(() => {
            t && b.play('progression_rewards_appearing');
        }, [t, b]),
        e.jsxs('div', {
            className: s(A, t ? F : G),
            children: [
                e.jsx(M, { isAppearing: t, className: O }),
                e.jsxs('div', {
                    className: $,
                    children: [
                        e.jsx(d, {
                            ...i,
                            theme: d.themes.primary,
                            size: o,
                            className: V,
                            onClick: n,
                            children: X.readOrEmpty('fl_progression_screen.claimRewards'),
                        }),
                        e.jsx('div', {
                            className: J,
                            children: e.jsx(_.Root, {
                                children: e.jsx(_.Value, {
                                    value: r,
                                    size: m.medium,
                                    classNames: { valueContainer: W },
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
const Z = 'LevelInformation_9271d1b9',
    q = 'LevelInformation_glow_6d32019',
    D = 'LevelInformation_labelContainer_f4fe6337',
    H = 'LevelInformation_eventState_b7f5b33e',
    K = 'LevelInformation_timerLabel_45f69a5d',
    Q = 'LevelInformation_timerIcon_9d27acc0',
    U = 'LevelInformation_maxLevelContainer_9271d1b9',
    ee = 'LevelInformation_maxLevelReachedMessage_c2d7a634',
    se = 'LevelInformation_currentPoints_6c13d58c',
    ae = 'LevelInformation_separator_b7f5b33e',
    re = 'LevelInformation_needPoints_e8a11fbf',
    te = 'LevelInformation_upIcon_efa7dc88',
    oe = n.resolve('strings'),
    ne = n.resolve('intl');
function ie({
    level: a,
    isMaxLevel: r,
    currentPoints: t,
    needPoints: o,
    className: n,
    badgeSize: i,
    frontlineState: c,
    countdownSeconds: l,
}) {
    return e.jsxs('div', {
        className: s(Z, n),
        children: [
            e.jsx(B, { level: a, size: i, showAnimation: r }),
            c === L
                ? e.jsx('div', {
                      className: D,
                      children: e.jsx(b, { text: oe.readOrEmpty('fl_progression_screen.eventEnded'), className: H }),
                  })
                : r
                  ? e.jsxs('div', {
                        className: U,
                        children: [
                            e.jsx(M, { className: q }),
                            e.jsx('div', {
                                className: ee,
                                children: oe.readOrEmpty('fl_progression_screen.maxTierReachedMessage'),
                            }),
                        ],
                    })
                  : e.jsx('div', {
                        className: D,
                        children:
                            c === R
                                ? e.jsx(b, {
                                      text: oe.readOrEmpty('fl_progression_screen.eventStarts'),
                                      className: H,
                                      params: { left: e.jsx(u, { classNames: { icon: Q, label: K }, start: l }) },
                                  })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx('div', { className: se, children: ne.formatNumber('integral', t) }),
                                          e.jsx('div', {
                                              className: ae,
                                              children: oe.readOrEmpty('common.common.slash'),
                                          }),
                                          e.jsx('div', { className: re, children: ne.formatNumber('gold', o) }),
                                          e.jsx('div', { className: te }),
                                      ],
                                  }),
                    }),
        ],
    });
}
const ce = 'LevelBlock_4febf6d6',
    le = 'LevelBlock_level_d685b90a',
    de = r(function ({ className: a }) {
        const { model: r, controls: t } = y(),
            o = r.frontlineState.get(),
            n = r.amountRewardsToClaim.get(),
            i = v(
                { buttonSize: d.sizes.small, badgeSize: C.x130 },
                { large: { buttonSize: d.sizes.medium, badgeSize: C.x190 } },
            );
        return e.jsxs('div', {
            className: s(ce, a),
            children: [
                e.jsx(ie, {
                    level: o === R ? 0 : r.level.get(),
                    isMaxLevel: r.isMaxLevel.get(),
                    currentPoints: r.currentPoints.get(),
                    frontlineState: o,
                    countdownSeconds: r.countdownSeconds.get(),
                    needPoints: r.neededPoints.get(),
                    className: le,
                    badgeSize: i.badgeSize,
                }),
                n > 0 &&
                    e.jsx(Y, {
                        amount: n,
                        size: i.buttonSize,
                        onClick: t.claimRewards,
                        isAppearing: r.areRewardsJustEarned.get(),
                    }),
            ],
        });
    }),
    _e = 'CustomProgressBar_f7c1daea',
    me = 'CustomProgressBar_content_a6264339',
    be = 'CustomProgressBar_background_3f6eaea9',
    ue = 'CustomProgressBar_fillPattern_372b4dd0',
    ve = 'CustomProgressBar_completeProgressCover_35fea46d',
    fe = 'CustomProgressBar_pointer_21613146',
    ge = r(function ({ className: r }) {
        const { model: t } = y(),
            o = t.level.get(),
            n = t.tiersSections.get(),
            i = t.currentPoints.get(),
            c = t.neededPoints.get(),
            l = a.useMemo(() => {
                const e = 100 / n.length;
                let s = 0;
                const a = [0];
                return (
                    n.map((s) => {
                        if (s.start === s.end) a.push(e);
                        else {
                            const r = s.end - s.start + 1;
                            f(r, () => a.push(e / r));
                        }
                    }),
                    f(o, (e) => {
                        ((s += a[e] || 0), e === o - 1 && a.length > e + 1 && (s += ((a[e + 1] || 0) * i) / c));
                    }),
                    s
                );
            }, [n, o, i, c]),
            [d, _] = a.useState(0),
            m = a.useRef(null),
            { breakpoint: b } = g();
        return (
            a.useEffect(() => {
                p(() => {
                    const e = m.current;
                    e && _(Math.round((x(e.offsetWidth) * l) / 100) - 2);
                });
            }, [m, l, b]),
            e.jsx('div', {
                className: s(_e, r),
                children: e.jsxs('div', {
                    className: me,
                    ref: m,
                    children: [
                        e.jsx(j, {
                            value: l,
                            maxValue: 100,
                            classNames: { background: be },
                            filledClassNames: { pattern: ue },
                        }),
                        e.jsx('div', { className: fe, style: { left: `${d}rem` } }),
                        t.isMaxLevel.get() && e.jsx('div', { className: ve }),
                    ],
                }),
            })
        );
    }),
    pe = {
        root: 'Background_root_26effab7',
        'media-wrapper': 'Background_media-wrapper_26effab7',
        base: 'Background_76b8cae4',
        layer: 'Background_layer_1909665',
        top: 'Background_top_ecf7586c',
        base__inProgress: 'Background_base__inProgress_26effab7',
        top__white: 'Background_top__white_b1609903',
        top__black: 'Background_top__black_60a61c7c',
        bottom: 'Background_bottom_2bbccaf2',
        bottom__white: 'Background_bottom__white_2d624d43',
        bottom__black: 'Background_bottom__black_2cee6b06',
    };
function xe({ state: a, className: r }) {
    return e.jsxs('div', {
        className: s(pe.base, pe[`base__${a}`], r),
        children: [
            a === Me.Completed &&
                e.jsxs('div', {
                    className: pe.layer,
                    children: [
                        e.jsx('div', { className: s(pe.top, pe.top__black) }),
                        e.jsx('div', { className: s(pe.bottom, pe.bottom__black) }),
                    ],
                }),
            e.jsxs('div', {
                className: pe.layer,
                children: [
                    e.jsx('div', { className: s(pe.top, pe.top__white) }),
                    e.jsx('div', { className: s(pe.bottom, pe.bottom__white) }),
                ],
            }),
        ],
    });
}
const je = {
    base: 'SectionSeparator_d0aad5ae',
    top: 'SectionSeparator_top_9a011b6f',
    bottom: 'SectionSeparator_bottom_ab2fed8e',
};
function Ne({ className: a }) {
    return e.jsxs('div', {
        className: s(je.base, a),
        children: [e.jsx('div', { className: je.top }), e.jsx('div', { className: je.bottom })],
    });
}
const Se = {
        base: 'TiersSeparators_be26eda0',
        container: 'TiersSeparators_container_879f1c8',
        top: 'TiersSeparators_top_dd3750ab',
        bottom: 'TiersSeparators_bottom_9f4aa714',
    },
    he = 2;
function ke({ amount: r, className: t }) {
    const [o, n] = a.useState(0),
        i = a.useRef(null),
        { breakpoint: c } = g();
    return (
        a.useEffect(() => {
            p(() => {
                const e = i.current;
                e && n(Math.floor(x(e.offsetWidth) / (r + 1)) - he);
            });
        }, [i, r, c]),
        e.jsx('div', {
            className: s(Se.base, t),
            ref: i,
            children: f(r, (s) =>
                e.jsxs(
                    'div',
                    {
                        className: Se.container,
                        style: { marginLeft: `${o}rem` },
                        children: [e.jsx('div', { className: Se.top }), e.jsx('div', { className: Se.bottom })],
                    },
                    `separator_${s}`,
                ),
            ),
        })
    );
}
const we = 'TiersSection_b122bb9f',
    Be = 'TiersSection_background_ddc4d980',
    Ce = 'TiersSection_doneIcon_cb7f26ee',
    Pe = 'TiersSection_glow_9a0c5716',
    Le = 'TiersSection_tiers_ea289110',
    Re = 'TiersSection_tiers__locked_9c1ac494',
    ze = 'TiersSection_tiersSeparators_42b277a8',
    Te = 'TiersSection_content_32433d0c',
    ye = 'TiersSection_rewardsContainer_efc03b65',
    Ie = 'TiersSection_reward_5fc7980a',
    Ee = 'TiersSection_sectionSeparator_ddc4d980';
var Me = ((e) => ((e.Locked = 'locked'), (e.InProgress = 'inProgress'), (e.Completed = 'completed'), e))(Me || {});
function Ae({ start: r, end: o, rewards: n, currentLevel: i, withSeparator: c = !1, frontlineState: l }) {
    const d = r !== o,
        _ = d ? `${r}-${o}` : r,
        m = a.useMemo(() => (i < r - 1 ? 'locked' : i >= o ? 'completed' : 'inProgress'), [i, r, o]),
        b = 'locked' === m,
        u = l === R,
        f = v({ rewardSize: N.Small }, { medium: { rewardSize: N.Big } });
    return e.jsxs('div', {
        className: we,
        children: [
            !b && !u && e.jsx(xe, { className: Be, state: m }),
            e.jsxs('div', {
                className: Te,
                children: [
                    'completed' === m && e.jsx('div', { className: Ce }),
                    e.jsxs('div', {
                        className: s(Le, (b || u) && Re),
                        children: ['inProgress' === m && !u && e.jsx('div', { className: Pe }), _],
                    }),
                    d && e.jsx(ke, { amount: o - r, className: ze }),
                    e.jsx('div', {
                        className: ye,
                        children: S(n, (s, a) =>
                            e.jsx(
                                t.Fragment,
                                { children: e.jsx(z, { ...s, rewardSize: f.rewardSize, className: Ie }) },
                                a,
                            ),
                        ),
                    }),
                ],
            }),
            c && e.jsx(Ne, { className: Ee }),
        ],
    });
}
const Oe = 'ProgressBlock_4a6dca',
    $e = 'ProgressBlock_progressBar_7da7bc49',
    Fe = r(function ({ className: a }) {
        const { model: r } = y(),
            o = r.level.get(),
            n = r.tiersSections.get();
        return e.jsxs('div', {
            className: s(Oe, a),
            children: [
                S(n, (s, a) =>
                    e.jsx(
                        t.Fragment,
                        {
                            children: e.jsx(Ae, {
                                ...s,
                                currentLevel: o,
                                withSeparator: a > 0,
                                frontlineState: r.frontlineState.get(),
                            }),
                        },
                        `tier_section_${a}`,
                    ),
                ),
                e.jsx(ge, { className: $e }),
            ],
        });
    }),
    Ge = 'ProgressionScreen_64dc73b7',
    Ve = 'ProgressionScreen_content_8178663f',
    Je = 'ProgressionScreen_levelBlock_5336bf8c',
    We = 'ProgressionScreen_progressBlock_241efddb',
    Xe = r(() => {
        const { controls: s } = y();
        return (
            h(s.close),
            e.jsx('div', {
                className: Ge,
                children: e.jsxs('div', {
                    className: Ve,
                    children: [e.jsx(de, { className: Je }), e.jsx(Fe, { className: We })],
                }),
            })
        );
    });
k(e.jsx(w, { soundsOverrides: P, children: e.jsx(T, { children: e.jsx(Xe, {}) }) }), { fullScreen: !0 });
