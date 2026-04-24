import { j as e, f as s, v as a, r as o } from '../../../../chunks/vendor.js';
import {
    i as t,
    N as r,
    n as l,
    b_ as n,
    y as i,
    O as d,
    b$ as c,
    a9 as _,
    c0 as m,
    c1 as b,
    G as h,
    by as x,
    bz as p,
    bL as u,
    R as f,
    bY as w,
    J as g,
    U as P,
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
    $ = a(({ className: a = '' }) => {
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
    U = o.memo(({ header: a, points: o, columnClassMix: t, hasAdditionalPoints: r }) =>
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
    D = {
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
                    headerClassMix: D.header,
                    labels: t,
                    labelClassMix: D.label,
                }),
                e.jsx(U, {
                    points: r,
                    columnClassMix: D.pointsColumn1,
                    hasAdditionalPoints: a,
                    header: e.jsx('div', { className: D.pointsIcon }),
                }),
                e.jsx(B, {
                    columnWidth: 140,
                    header: F.squad(),
                    headerClassMix: D.header,
                    labels: n,
                    labelClassMix: D.label,
                }),
                e.jsx(U, {
                    columnClassMix: D.pointsColumn2,
                    points: i,
                    hasAdditionalPoints: a,
                    header: e.jsx('div', { className: D.pointsIcon }),
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
    z = a(() => {
        const { model: a } = L(),
            { battleType: o, customBattleTypeIcon: t } = a.root.get(),
            r = E(o),
            n = t ? { backgroundImage: `url(${t})` } : {};
        return e.jsxs('div', {
            className: q.base,
            children: [
                e.jsx('div', { className: s(q.modeIcon, q[`modeIcon__${r}`]), style: n }),
                e.jsx(l, {
                    text: R.strings.battle_pass.tooltips.inProgress.getPointsFrom(),
                    binding: {
                        battleType: e.jsx('div', {
                            className: q.highlight,
                            children: `${R.strings.battle_pass.tooltips.inProgress.$dyn(r)}`,
                        }),
                    },
                }),
            ],
        });
    }),
    V = {
        header: 'RulesTable_header_3dadec54',
        playGame: 'RulesTable_playGame_8b1d2ff9',
        perBattlePointsTable: 'RulesTable_perBattlePointsTable_9ccd09af',
        footer: 'RulesTable_footer_3838100b',
        footer_text: 'RulesTable_footer_text_5b78b966',
        extraPointsDivider: 'RulesTable_extraPointsDivider_ec32c66c',
        extraPointsGlow: 'RulesTable_extraPointsGlow_c65c2dc',
    },
    X = R.strings.battle_pass.tooltips,
    J = {
        randoms: 'c_1',
        ranked: 'ranked',
        mapbox: 'c_22',
        comp7: 'c_24',
        comp7_light: 'comp7_light',
        winback: 'winback',
    },
    K = R.strings.battle_pass.tooltips.pointsTable,
    Q = R.strings.battle_pass.tooltips.prestigePoints,
    Z = [k.BATTLE_ROYALE, k.FRONTLINE],
    ee = [k.COMP7, k.COMP7_LIGHT],
    se = a(() => {
        const { model: s } = L(),
            { battleType: a, isWotPlusShown: o } = s.root.get(),
            t = s.rewardPoints.get(),
            r = s.battleRoyaleRewardPoints.get(),
            l = a === k.BATTLE_ROYALE,
            i =
                null !== X.inProgress.playGame.$dyn(a)
                    ? e.jsx(N, {
                          icon: R.images.gui.maps.icons.battleTypes.$dyn(J[a]),
                          text: X.inProgress.playGame.$dyn(a),
                          className: V.playGame,
                      })
                    : null;
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: V.header, children: Z.includes(a) ? e.jsx(z, {}) : i }),
                e.jsx(T, {
                    mixClass: V.perBattlePointsTable,
                    separatorRows: l ? r.soloMode : t.items,
                    children: l
                        ? e.jsx(Y, { rewardPoints: r, hasAdditionalPoints: o })
                        : e.jsx(C, {
                              rewardPoints: t,
                              hasAdditionalPoints: o,
                              hasDraw: a !== k.FRONTLINE,
                              topPlace: (ee.includes(a) ? Q : K).topPlace(),
                              battleType: a,
                          }),
                }),
                o &&
                    e.jsxs('div', {
                        className: V.footer,
                        children: [
                            e.jsx(n, {
                                width: 32,
                                height: 32,
                                src: R.images.gui.maps.icons.battlePass.tooltips.plus_logo(),
                                className: V.footerIcon,
                            }),
                            e.jsx('div', { className: V.extraPointsDivider }),
                            e.jsx('div', { className: V.extraPointsGlow }),
                            e.jsx('div', { className: V.footer_text, children: X.inProgress.wotPlusProFooter() }),
                        ],
                    }),
            ],
        });
    }),
    ae = 'EndSoon_c24403ee',
    oe = 'EndSoon_content_9cbdeacc',
    te = 'EndSoon_timerLight_32dfe31',
    re = 'EndSoon_timer_a08253f1',
    le = 'EndSoon_timerIcon_7fa43c71',
    ne = 'EndSoon_timerLabel_a39df14c',
    ie = 'EndSoon_timerValue_3b8b21cd',
    de = R.strings.battle_pass.tooltips.inProgress,
    ce = a(({ className: a }) => {
        const { model: o } = L(),
            { timeTillEnd: t } = o.root.get();
        return e.jsx('div', {
            className: ae,
            children: e.jsx('div', {
                className: s(a, oe),
                children: e.jsxs('div', {
                    className: re,
                    children: [
                        e.jsx('div', { className: te }),
                        e.jsx('div', { className: le }),
                        e.jsx('div', { className: ie, children: t }),
                        e.jsx('div', { className: ne, children: de.timeLeft() }),
                    ],
                }),
            }),
        });
    }),
    _e = 'Level_d583bdeb',
    me = 'Level_label_5ce8f3eb',
    be = R.strings.battle_pass.tooltips.inProgress,
    he = a(() => {
        const { model: s } = L(),
            { level: a } = s.root.get();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: _e, children: a + 1 }),
                e.jsx('div', { className: me, children: be.level() }),
            ],
        });
    }),
    xe = 'Points_967b0112',
    pe = 'Points_pointsCurrent_b498b3a9',
    ue = 'Points_pointsMax_2f7dc8fa',
    fe = 'Points_pointsIcon_615fd6e8',
    we = ({ currentPoints: a, maxPoints: o, className: t = '' }) =>
        e.jsxs('div', {
            className: s(xe, t),
            children: [
                e.jsx('div', { className: pe, children: a }),
                '/',
                e.jsx('div', { className: ue, children: o }),
                e.jsx('div', { className: fe }),
            ],
        }),
    ge = 'Progression_5cdbad76',
    Pe = 'Progression_progressionBar_6bb904d3',
    Re = 'Progression_points_fa2aa3d9',
    je = a(({ isDisabled: a = !1, className: o = '' }) => {
        const { model: t } = L(),
            { currentPoints: r, maxPoints: l } = t.root.get();
        return e.jsxs('div', {
            className: s(ge, o),
            children: [
                e.jsx('div', { className: Pe, children: e.jsx(i, { value: r, maxValue: l, theme: d, disabled: a }) }),
                e.jsx(we, { maxPoints: l, currentPoints: r, className: Re }),
            ],
        });
    }),
    Ne = 'ExpireTime_d2bc0e02',
    ve = 'ExpireTime_light_ff99b79d',
    ke = 'ExpireTime_icon_8036e60f',
    ye = 'ExpireTime_value_6d799e0c',
    Ie = a(() => {
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
            className: Ne,
            children: [
                e.jsx('div', { className: ve }),
                e.jsx('div', { className: ke }),
                e.jsx('div', { className: ye, children: o }),
            ],
        });
    }),
    Be = 'Header_71860ac',
    Te = 'Header_chapter_92802c23',
    Ce = 'Header_name_d009752f',
    Ee = a(() => {
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
            className: Be,
            children: [
                e.jsxs('div', {
                    className: Te,
                    children: [
                        e.jsx('div', {
                            className: Ce,
                            children: e.jsx(l, {
                                text: R.strings.battle_pass.tooltips.inProgress.chapter(),
                                binding: { name: R.strings.battle_pass.chapter.fullName.$dyn(`c_${a}`) },
                            }),
                        }),
                        t && e.jsx(Ie, {}),
                    ],
                }),
                e.jsx(he, {}),
                e.jsx(je, {}),
            ],
        });
    }),
    Se = {
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
    Oe = [
        b.PROGRESSION_STYLE_UPGRADED_1,
        b.PROGRESSION_STYLE_UPGRADED_2,
        b.PROGRESSION_STYLE_UPGRADED_3,
        b.PROGRESSION_STYLE_UPGRADED_4,
    ],
    Le = ({ label: a, isLocked: t = !1, rewards: { items: r } }) => {
        const l = r.length > 1 && r.length % 2 == 1,
            n = 1 === r.length,
            i = 2 === r.length,
            d = n ? h.S180x135 : h.Small,
            c = r.every(({ value: e }) => {
                const s = Number(e.value);
                return !isNaN(s) && s > 1;
            });
        return e.jsxs('div', {
            className: Se.base,
            children: [
                e.jsxs('div', {
                    className: Se.nextRewards,
                    children: [t && e.jsx('div', { className: Se.lockIcon }), a],
                }),
                e.jsx('div', {
                    className: s(Se.rewardsList, t && Se.rewardsList__locked),
                    children: r.map((e, a) => {
                        const t = ((e, s) => ({
                                name: e.item || e.name,
                                image: p(e, s),
                                special: e.overlayType,
                                value: e.value,
                                valueType: x(e.name),
                            }))(e.value, d),
                            r = t.name === u.Attachment,
                            _ = t.special && Oe.includes(t.special);
                        return o.createElement(f, {
                            ...t,
                            size: d,
                            key: `${t.name}_${a}`,
                            className: s(
                                !i && Se.reward,
                                a > 0 && Se.reward__next,
                                _ && Se.reward__styleUpgrade,
                                c && !l && Se.reward__wide,
                                l && a % 2 == 1 && Se.reward__shiftUp,
                                n && Se.reward__single,
                            ),
                            classNames: { overlay: s(!r && n && Se.overlay) },
                        });
                    }),
                }),
            ],
        });
    },
    We = 'InProgressContent_a8ca87b2',
    Me = 'InProgressContent_content_524dcedb',
    He = 'InProgressContent_rewards_2fa1b734',
    Ae = 'InProgressContent_unlockBattlePass_c7983742',
    Ge = 'InProgressContent_claim_4bd431ea',
    $e = R.strings.battle_pass.tooltips,
    Ue = a(() => {
        const { model: s } = L(),
            { timeTillEnd: a, isBattlePassPurchased: o, notChosenRewardCount: t } = s.root.get(),
            r = s.rewardsCommon.get(),
            l = s.rewardsElite.get(),
            n = 0 !== a.length,
            i = 0 !== t;
        return e.jsxs('div', {
            className: We,
            children: [
                e.jsxs('div', {
                    className: Me,
                    children: [
                        e.jsx(Ee, {}),
                        e.jsxs(M, {
                            className: He,
                            children: [
                                e.jsx(Le, { label: $e.inProgress.baseReward(), rewards: r }),
                                e.jsx(Le, { label: $e.inProgress.improvedReward(), rewards: l, isLocked: !o }),
                            ],
                        }),
                        !n &&
                            !o &&
                            e.jsx(N, {
                                icon: R.images.gui.maps.icons.battlePass.progression.icon_lock_current_small(),
                                text: $e.unlockBattlePass(),
                                className: Ae,
                            }),
                    ],
                }),
                e.jsx(se, {}),
                i && e.jsxs(e.Fragment, { children: [e.jsx(v, {}), e.jsx($, { className: Ge })] }),
                n && e.jsx(ce, {}),
            ],
        });
    }),
    De = 'Header_71860ac',
    Fe = 'Header_name_1aee0b18',
    Ye = R.strings.battle_pass.tooltips.inProgress.postProgression,
    qe = ({ className: a = '' }) =>
        e.jsxs('div', {
            className: s(De, a),
            children: [e.jsx('div', { className: Fe, children: Ye.header() }), e.jsx(he, {}), e.jsx(je, {})],
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
    Ve = (e, s) => ({
        name: e.item || e.name,
        image: p(e, s),
        special: e.overlayType,
        value: e.value,
        valueType: x(e.name),
    }),
    Xe = ({ rewards: { items: a }, className: o = '' }) => {
        const t = a.length < 3 ? h.S180x135 : h.Big;
        return e.jsxs('div', {
            className: s(ze.base, o),
            children: [
                e.jsx('div', { className: ze.ribbon }),
                e.jsx('div', {
                    className: ze.rewards,
                    children: a.map((s, a) =>
                        e.jsx(f, { ...Ve(s.value, t), className: ze[`reward__${t}`], size: t }, `${s.name}_${a}`),
                    ),
                }),
            ],
        });
    },
    Je = 'PostProgressionContent_61673cb3',
    Ke = 'PostProgressionContent_header_d2b5683d',
    Qe = 'PostProgressionContent_content_208e84c4',
    Ze = 'PostProgressionContent_rewardsBlock_dbb9691f',
    es = 'PostProgressionContent_claim_1f3e4c4d',
    ss = 'PostProgressionContent_separatorWrapper_6e8e0fa1',
    as = 'PostProgressionContent_unlockBattlePass_4ea37eb7',
    os = R.strings.battle_pass.tooltips,
    ts = a(() => {
        const { model: s } = L(),
            { isBattlePassPurchased: a, notChosenRewardCount: o } = s.root.get(),
            t = 0 !== o;
        return e.jsxs('div', {
            className: Je,
            children: [
                e.jsx(qe, { className: Ke }),
                e.jsx(Xe, { rewards: s.rewardsCommon.get(), className: Ze }),
                e.jsx(se, {}),
                (t || !a) && e.jsx(v, {}),
                e.jsxs('div', {
                    className: Qe,
                    children: [
                        t && e.jsx($, { className: a && es }),
                        t && !a && e.jsx(v, { className: ss }),
                        !a &&
                            e.jsx('div', {
                                children: e.jsx(N, {
                                    icon: R.images.gui.maps.icons.battlePass.progression.icon_lock_current_small(),
                                    text: os.unlockBattlePassForPostProgression(),
                                    className: as,
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    rs = a(() => {
        const { model: s } = L(),
            { chapterType: a } = s.root.get(),
            o = a === S.POST_PROGRESSION ? e.jsx(ts, {}) : e.jsx(Ue, {});
        return e.jsx(w, { children: e.jsx(w.Decorator, { children: o }) });
    });
j(new g().add(P).addWithProps(O, {}).render(e.jsx(rs, {})));
