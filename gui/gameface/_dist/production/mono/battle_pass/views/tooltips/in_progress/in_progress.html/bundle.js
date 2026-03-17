import { j as e, f as s, t as a, r as o } from '../../../../chunks/vendor.js';
import {
    i as t,
    N as r,
    n as l,
    c0 as n,
    y as i,
    O as d,
    c1 as c,
    a9 as _,
    c2 as m,
    c3 as h,
    G as b,
    bA as x,
    bB as p,
    bN as u,
    R as f,
    b_ as w,
    J as P,
    U as g,
    d as j,
} from '../../../../chunks/lib.js';
import { I as N } from '../../../../chunks/icon_text_block.js';
import { S as v } from '../../../../chunks/separator.js';
import { B as k } from '../../../../chunks/types.js';
import { s as y, b as I, L as B, P as T, a as C } from '../../../../chunks/per_battle_points_table.js';
import { s as E } from '../../../../chunks/utils.js';
var S = ((e) => (
    (e.COMMON = 'common'),
    (e.EXTRA = 'extra'),
    (e.HOLIDAY = 'holiday'),
    (e.POST_PROGRESSION = 'postProgression'),
    e
))(S || {});
const [O, L] = t()(
        ({ observableModel: e }) => ({
            ...{
                root: e.object(),
                rewardPoints: e.array('rewardPoints'),
                battleRoyaleRewardPoints: e.array('battleRoyaleRewardPoints'),
                rewardsCommon: e.array('rewardsCommon'),
                rewardsElite: e.array('rewardsElite'),
            },
        }),
        r,
    ),
    W = 'Rewards_3f324c43',
    M = ({ className: a = '', children: o = null }) => e.jsx('div', { className: s(W, a), children: o }),
    H = 'ClaimInfo_63bb6cbd',
    A = 'ClaimInfo_unlock_c22806f7',
    G = R.strings.battle_pass.tooltips.claimRewards,
    U = a(({ className: a = '' }) => {
        const { model: o } = L(),
            { notChosenRewardCount: t } = o.root.get();
        return e.jsx('div', {
            className: s(H, a),
            children: e.jsx(N, {
                icon: R.images.gui.maps.icons.battlePass.tooltips.bow_small(),
                text: G[t > 1 ? 'multiple' : 'c_1'](),
                className: A,
            }),
        });
    }),
    D = o.memo(({ header: a, points: o, columnClassMix: t, hasAdditionalPoints: r }) =>
        e.jsxs('div', {
            className: s(y.pointsColumn, t),
            children: [
                e.jsx('div', { className: y.tableHeader, children: a }),
                o.map((s, a) =>
                    e.jsx(
                        'div',
                        {
                            className: y.label,
                            children: e.jsx(I, {
                                value: s.points,
                                hasAdditionalPoints: r,
                                externalValue: s.externalPoints,
                                showIcon: !1,
                            }),
                        },
                        a,
                    ),
                ),
            ],
        }),
    ),
    $ = {
        pointsIcon: 'BattleRoyaleTable_pointsIcon_fa2c60ed',
        pointsColumn1: 'BattleRoyaleTable_pointsColumn1_85de316a',
        header: 'BattleRoyaleTable_header_8385939f',
        label: 'BattleRoyaleTable_label_e7fdd3ac',
    },
    F = R.strings.battle_pass.tooltips.pointsTable,
    Y = ({ rewardPoints: s, hasAdditionalPoints: a }) => {
        const t = o.useMemo(
                () => s.soloMode.map(({ value: s }) => e.jsx(l, { text: F.places(), binding: { place: s.place } })),
                [s],
            ),
            r = o.useMemo(() => s.soloMode.map(({ value: e }) => e), [s]),
            n = o.useMemo(
                () =>
                    s.squadMode.map(({ value: s }, a) => {
                        const o = a > 0 ? F.places() : F.place();
                        return e.jsx(l, { text: o, binding: { place: s.place } });
                    }),
                [s],
            ),
            i = o.useMemo(() => s.squadMode.map(({ value: e }) => e), [s]);
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(B, {
                    columnWidth: 140,
                    header: F.solo(),
                    headerClassMix: $.header,
                    labels: t,
                    labelClassMix: $.label,
                }),
                e.jsx(D, {
                    points: r,
                    columnClassMix: $.pointsColumn1,
                    hasAdditionalPoints: a,
                    header: e.jsx('div', { className: $.pointsIcon }),
                }),
                e.jsx(B, {
                    columnWidth: 140,
                    header: F.squad(),
                    headerClassMix: $.header,
                    labels: n,
                    labelClassMix: $.label,
                }),
                e.jsx(D, {
                    columnClassMix: $.pointsColumn2,
                    points: i,
                    hasAdditionalPoints: a,
                    header: e.jsx('div', { className: $.pointsIcon }),
                }),
            ],
        });
    },
    q = {
        root: 'HeaderWithPoints_root_46eb29ed',
        base: 'HeaderWithPoints_3979d534',
        modeIcon: 'HeaderWithPoints_modeIcon_fefd91cd',
        modeIcon__battleRoyale: 'HeaderWithPoints_modeIcon__battleRoyale_98f862f2',
        modeIcon__epic: 'HeaderWithPoints_modeIcon__epic_14f8b63',
        highlight: 'HeaderWithPoints_highlight_8e3610ae',
        fadeInWithScale: 'HeaderWithPoints_fadeInWithScale_46eb29ed',
        slideUp: 'HeaderWithPoints_slideUp_46eb29ed',
        blink: 'HeaderWithPoints_blink_46eb29ed',
        scale: 'HeaderWithPoints_scale_46eb29ed',
        rotate: 'HeaderWithPoints_rotate_46eb29ed',
        windowIn: 'HeaderWithPoints_windowIn_46eb29ed',
        fadeOut: 'HeaderWithPoints_fadeOut_46eb29ed',
        fadeIn: 'HeaderWithPoints_fadeIn_46eb29ed',
    },
    V = R.strings.battle_pass.tooltips.inProgress,
    z = a(() => {
        const { model: a } = L(),
            { battleType: o } = a.root.get();
        return e.jsxs('div', {
            className: q.base,
            children: [
                e.jsx('div', { className: s(q.modeIcon, q[`modeIcon__${E(o)}`]) }),
                e.jsx(l, {
                    text: V.getPointsFrom(),
                    binding: { battleType: e.jsx('div', { className: q.highlight, children: V.$dyn(E(o)) }) },
                }),
            ],
        });
    }),
    X = {
        header: 'RulesTable_header_3dadec54',
        playGame: 'RulesTable_playGame_8b1d2ff9',
        perBattlePointsTable: 'RulesTable_perBattlePointsTable_9ccd09af',
        footer: 'RulesTable_footer_3838100b',
        footer_text: 'RulesTable_footer_text_5b78b966',
        extraPointsDivider: 'RulesTable_extraPointsDivider_ec32c66c',
        extraPointsGlow: 'RulesTable_extraPointsGlow_c65c2dc',
    },
    J = R.strings.battle_pass.tooltips,
    K = {
        randoms: 'c_1',
        ranked: 'ranked',
        mapbox: 'c_22',
        comp7: 'c_24',
        comp7_light: 'comp7_light',
        winback: 'winback',
    },
    Q = R.strings.battle_pass.tooltips.pointsTable,
    Z = R.strings.battle_pass.tooltips.prestigePoints,
    ee = [k.BATTLE_ROYALE, k.FRONTLINE],
    se = [k.COMP7, k.COMP7_LIGHT],
    ae = a(() => {
        const { model: s } = L(),
            { battleType: a, isWotPlusShown: o } = s.root.get(),
            t = s.rewardPoints.get(),
            r = s.battleRoyaleRewardPoints.get(),
            l = a === k.BATTLE_ROYALE,
            i =
                null !== J.inProgress.playGame.$dyn(a)
                    ? e.jsx(N, {
                          icon: R.images.gui.maps.icons.battleTypes.$dyn(K[a]),
                          text: J.inProgress.playGame.$dyn(a),
                          className: X.playGame,
                      })
                    : null;
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: X.header, children: ee.includes(a) ? e.jsx(z, {}) : i }),
                e.jsx(T, {
                    mixClass: X.perBattlePointsTable,
                    separatorRows: l ? r.soloMode : t.items,
                    children: l
                        ? e.jsx(Y, { rewardPoints: r, hasAdditionalPoints: o })
                        : e.jsx(C, {
                              rewardPoints: t,
                              hasAdditionalPoints: o,
                              hasDraw: a !== k.FRONTLINE,
                              topPlace: (se.includes(a) ? Z : Q).topPlace(),
                              battleType: a,
                          }),
                }),
                o &&
                    e.jsxs('div', {
                        className: X.footer,
                        children: [
                            e.jsx(n, {
                                width: 32,
                                height: 32,
                                src: R.images.gui.maps.icons.battlePass.tooltips.plus_logo(),
                                className: X.footerIcon,
                            }),
                            e.jsx('div', { className: X.extraPointsDivider }),
                            e.jsx('div', { className: X.extraPointsGlow }),
                            e.jsx('div', { className: X.footer_text, children: J.inProgress.wotPlusProFooter() }),
                        ],
                    }),
            ],
        });
    }),
    oe = 'EndSoon_c24403ee',
    te = 'EndSoon_content_9cbdeacc',
    re = 'EndSoon_timerLight_32dfe31',
    le = 'EndSoon_timer_a08253f1',
    ne = 'EndSoon_timerIcon_7fa43c71',
    ie = 'EndSoon_timerLabel_a39df14c',
    de = 'EndSoon_timerValue_3b8b21cd',
    ce = R.strings.battle_pass.tooltips.inProgress,
    _e = a(({ className: a }) => {
        const { model: o } = L(),
            { timeTillEnd: t } = o.root.get();
        return e.jsx('div', {
            className: oe,
            children: e.jsx('div', {
                className: s(a, te),
                children: e.jsxs('div', {
                    className: le,
                    children: [
                        e.jsx('div', { className: re }),
                        e.jsx('div', { className: ne }),
                        e.jsx('div', { className: de, children: t }),
                        e.jsx('div', { className: ie, children: ce.timeLeft() }),
                    ],
                }),
            }),
        });
    }),
    me = 'Level_d583bdeb',
    he = 'Level_label_5ce8f3eb',
    be = R.strings.battle_pass.tooltips.inProgress,
    xe = a(() => {
        const { model: s } = L(),
            { level: a } = s.root.get();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: me, children: a + 1 }),
                e.jsx('div', { className: he, children: be.level() }),
            ],
        });
    }),
    pe = 'Points_967b0112',
    ue = 'Points_pointsCurrent_b498b3a9',
    fe = 'Points_pointsMax_2f7dc8fa',
    we = 'Points_pointsIcon_615fd6e8',
    Pe = ({ currentPoints: a, maxPoints: o, className: t = '' }) =>
        e.jsxs('div', {
            className: s(pe, t),
            children: [
                e.jsx('div', { className: ue, children: a }),
                '/',
                e.jsx('div', { className: fe, children: o }),
                e.jsx('div', { className: we }),
            ],
        }),
    ge = 'Progression_5cdbad76',
    Re = 'Progression_progressionBar_6bb904d3',
    je = 'Progression_points_fa2aa3d9',
    Ne = a(({ isDisabled: a = !1, className: o = '' }) => {
        const { model: t } = L(),
            { currentPoints: r, maxPoints: l } = t.root.get();
        return e.jsxs('div', {
            className: s(ge, o),
            children: [
                e.jsx('div', { className: Re, children: e.jsx(i, { value: r, maxValue: l, theme: d, disabled: a }) }),
                e.jsx(Pe, { maxPoints: l, currentPoints: r, className: je }),
            ],
        });
    }),
    ve = 'ExpireTime_d2bc0e02',
    ke = 'ExpireTime_light_ff99b79d',
    ye = 'ExpireTime_icon_8036e60f',
    Ie = 'ExpireTime_value_6d799e0c',
    Be = a(() => {
        const { model: s } = L(),
            { expireTime: a } = s.root.get(),
            o = ((e, s = !0) =>
                e.days > 7 && s
                    ? c(R.strings.common.duration.days(), { days: e.days })
                    : e.days >= 1
                      ? 0 === e.hours
                          ? c(R.strings.common.duration.days(), { days: e.days })
                          : `${c(R.strings.common.duration.days(), { days: e.days })} ${c(R.strings.common.duration.hours(), { hours: e.hours })}`
                      : e.hours >= 1
                        ? 0 === e.minutes
                            ? c(R.strings.common.duration.hours(), { hours: e.hours })
                            : `${c(R.strings.common.duration.hours(), { hours: e.hours })} ${c(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                        : c(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(_(a), !1);
        return e.jsxs('div', {
            className: ve,
            children: [
                e.jsx('div', { className: ke }),
                e.jsx('div', { className: ye }),
                e.jsx('div', { className: Ie, children: o }),
            ],
        });
    }),
    Te = 'Header_71860ac',
    Ce = 'Header_chapter_92802c23',
    Ee = 'Header_name_d009752f',
    Se = a(() => {
        const { model: s } = L(),
            { chapter: a, expireTime: o } = s.root.get(),
            t = (() => {
                switch (s.root.get().chapterType) {
                    case S.EXTRA:
                    case S.HOLIDAY:
                        return o > 0 && o < 2 * m;
                    case S.COMMON:
                        return !1;
                }
            })();
        return e.jsxs('div', {
            className: Te,
            children: [
                e.jsxs('div', {
                    className: Ce,
                    children: [
                        e.jsx('div', {
                            className: Ee,
                            children: e.jsx(l, {
                                text: R.strings.battle_pass.tooltips.inProgress.chapter(),
                                binding: { name: R.strings.battle_pass.chapter.fullName.$dyn(`c_${a}`) },
                            }),
                        }),
                        t && e.jsx(Be, {}),
                    ],
                }),
                e.jsx(xe, {}),
                e.jsx(Ne, {}),
            ],
        });
    }),
    Oe = {
        root: 'RewardsBlock_root_5feff608',
        base: 'RewardsBlock_a66e0ba7',
        nextRewards: 'RewardsBlock_nextRewards_580b2817',
        rewardsList: 'RewardsBlock_rewardsList_bd0e0d04',
        rewardsList__locked: 'RewardsBlock_rewardsList__locked_d962e74b',
        reward: 'RewardsBlock_reward_ba99e1fe',
        reward__shiftUp: 'RewardsBlock_reward__shiftUp_c85a723b',
        reward__styleUpgrade: 'RewardsBlock_reward__styleUpgrade_5feff608',
        reward__wide: 'RewardsBlock_reward__wide_6b8de2f3',
        reward__next: 'RewardsBlock_reward__next_37ab73ce',
        reward__single: 'RewardsBlock_reward__single_56d6a3b7',
        lockIcon: 'RewardsBlock_lockIcon_b3ad9975',
        overlay: 'RewardsBlock_overlay_adaa44ea',
        fadeInWithScale: 'RewardsBlock_fadeInWithScale_5feff608',
        slideUp: 'RewardsBlock_slideUp_5feff608',
        blink: 'RewardsBlock_blink_5feff608',
        scale: 'RewardsBlock_scale_5feff608',
        rotate: 'RewardsBlock_rotate_5feff608',
        windowIn: 'RewardsBlock_windowIn_5feff608',
        fadeOut: 'RewardsBlock_fadeOut_5feff608',
        fadeIn: 'RewardsBlock_fadeIn_5feff608',
    },
    Le = [
        h.PROGRESSION_STYLE_UPGRADED_1,
        h.PROGRESSION_STYLE_UPGRADED_2,
        h.PROGRESSION_STYLE_UPGRADED_3,
        h.PROGRESSION_STYLE_UPGRADED_4,
    ],
    We = ({ label: a, isLocked: t = !1, rewards: { items: r } }) => {
        const l = r.length > 1 && r.length % 2 == 1,
            n = 1 === r.length,
            i = 2 === r.length,
            d = n ? b.S180x135 : b.Small,
            c = r.every(({ value: e }) => {
                const s = Number(e.value);
                return !isNaN(s) && s > 1;
            });
        return e.jsxs('div', {
            className: Oe.base,
            children: [
                e.jsxs('div', {
                    className: Oe.nextRewards,
                    children: [t && e.jsx('div', { className: Oe.lockIcon }), a],
                }),
                e.jsx('div', {
                    className: s(Oe.rewardsList, t && Oe.rewardsList__locked),
                    children: r.map((e, a) => {
                        const t = ((e, s) => ({
                                name: e.item || e.name,
                                image: p(e, s),
                                special: e.overlayType,
                                value: e.value,
                                valueType: x(e.name),
                            }))(e.value, d),
                            r = t.name === u.Attachment,
                            _ = t.special && Le.includes(t.special);
                        return o.createElement(f, {
                            ...t,
                            size: d,
                            key: `${t.name}_${a}`,
                            className: s(
                                !i && Oe.reward,
                                a > 0 && Oe.reward__next,
                                _ && Oe.reward__styleUpgrade,
                                c && !l && Oe.reward__wide,
                                l && a % 2 == 1 && Oe.reward__shiftUp,
                                n && Oe.reward__single,
                            ),
                            classNames: { overlay: s(!r && n && Oe.overlay) },
                        });
                    }),
                }),
            ],
        });
    },
    Me = 'InProgressContent_a8ca87b2',
    He = 'InProgressContent_content_524dcedb',
    Ae = 'InProgressContent_rewards_2fa1b734',
    Ge = 'InProgressContent_unlockBattlePass_c7983742',
    Ue = 'InProgressContent_claim_4bd431ea',
    De = R.strings.battle_pass.tooltips,
    $e = a(() => {
        const { model: s } = L(),
            { timeTillEnd: a, isBattlePassPurchased: o, notChosenRewardCount: t } = s.root.get(),
            r = s.rewardsCommon.get(),
            l = s.rewardsElite.get(),
            n = 0 !== a.length,
            i = 0 !== t;
        return e.jsxs('div', {
            className: Me,
            children: [
                e.jsxs('div', {
                    className: He,
                    children: [
                        e.jsx(Se, {}),
                        e.jsxs(M, {
                            className: Ae,
                            children: [
                                e.jsx(We, { label: De.inProgress.baseReward(), rewards: r }),
                                e.jsx(We, { label: De.inProgress.improvedReward(), rewards: l, isLocked: !o }),
                            ],
                        }),
                        !n &&
                            !o &&
                            e.jsx(N, {
                                icon: R.images.gui.maps.icons.battlePass.progression.icon_lock_current_small(),
                                text: De.unlockBattlePass(),
                                className: Ge,
                            }),
                    ],
                }),
                e.jsx(ae, {}),
                i && e.jsxs(e.Fragment, { children: [e.jsx(v, {}), e.jsx(U, { className: Ue })] }),
                n && e.jsx(_e, {}),
            ],
        });
    }),
    Fe = 'Header_71860ac',
    Ye = 'Header_name_1aee0b18',
    qe = R.strings.battle_pass.tooltips.inProgress.postProgression,
    Ve = ({ className: a = '' }) =>
        e.jsxs('div', {
            className: s(Fe, a),
            children: [e.jsx('div', { className: Ye, children: qe.header() }), e.jsx(xe, {}), e.jsx(Ne, {})],
        }),
    ze = {
        root: 'RewardsBlock_root_5feff608',
        base: 'RewardsBlock_f8eba448',
        ribbon: 'RewardsBlock_ribbon_63a6acee',
        rewards: 'RewardsBlock_rewards_259e5467',
        reward__big: 'RewardsBlock_reward__big_6e09459f',
        fadeInWithScale: 'RewardsBlock_fadeInWithScale_5feff608',
        slideUp: 'RewardsBlock_slideUp_5feff608',
        blink: 'RewardsBlock_blink_5feff608',
        scale: 'RewardsBlock_scale_5feff608',
        rotate: 'RewardsBlock_rotate_5feff608',
        windowIn: 'RewardsBlock_windowIn_5feff608',
        fadeOut: 'RewardsBlock_fadeOut_5feff608',
        fadeIn: 'RewardsBlock_fadeIn_5feff608',
    },
    Xe = (e, s) => ({
        name: e.item || e.name,
        image: p(e, s),
        special: e.overlayType,
        value: e.value,
        valueType: x(e.name),
    }),
    Je = ({ rewards: { items: a }, className: o = '' }) => {
        const t = a.length < 3 ? b.S180x135 : b.Big;
        return e.jsxs('div', {
            className: s(ze.base, o),
            children: [
                e.jsx('div', { className: ze.ribbon }),
                e.jsx('div', {
                    className: ze.rewards,
                    children: a.map((s, a) =>
                        e.jsx(f, { ...Xe(s.value, t), className: ze[`reward__${t}`], size: t }, `${s.name}_${a}`),
                    ),
                }),
            ],
        });
    },
    Ke = 'PostProgressionContent_61673cb3',
    Qe = 'PostProgressionContent_header_d2b5683d',
    Ze = 'PostProgressionContent_content_208e84c4',
    es = 'PostProgressionContent_rewardsBlock_dbb9691f',
    ss = 'PostProgressionContent_claim_1f3e4c4d',
    as = 'PostProgressionContent_separatorWrapper_6e8e0fa1',
    os = 'PostProgressionContent_unlockBattlePass_4ea37eb7',
    ts = R.strings.battle_pass.tooltips,
    rs = a(() => {
        const { model: s } = L(),
            { isBattlePassPurchased: a, notChosenRewardCount: o } = s.root.get(),
            t = 0 !== o;
        return e.jsxs('div', {
            className: Ke,
            children: [
                e.jsx(Ve, { className: Qe }),
                e.jsx(Je, { rewards: s.rewardsCommon.get(), className: es }),
                e.jsx(ae, {}),
                (t || !a) && e.jsx(v, {}),
                e.jsxs('div', {
                    className: Ze,
                    children: [
                        t && e.jsx(U, { className: a && ss }),
                        t && !a && e.jsx(v, { className: as }),
                        !a &&
                            e.jsx('div', {
                                children: e.jsx(N, {
                                    icon: R.images.gui.maps.icons.battlePass.progression.icon_lock_current_small(),
                                    text: ts.unlockBattlePassForPostProgression(),
                                    className: os,
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    ls = a(() => {
        const { model: s } = L(),
            { chapterType: a } = s.root.get(),
            o = a === S.POST_PROGRESSION ? e.jsx(rs, {}) : e.jsx($e, {});
        return e.jsx(w, { children: e.jsx(w.Decorator, { children: o }) });
    });
j(new P().add(g).addWithProps(O, {}).render(e.jsx(ls, {})));
