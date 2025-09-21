import {
    j as e,
    x as a,
    r as s,
    T as t,
    y as r,
    U as n,
    R as i,
    z as o,
    A as d,
    V as c,
    W as l,
} from '../../../chunks/vendor.js';
import {
    b$ as _,
    cA as m,
    p as u,
    cB as p,
    e as h,
    M as g,
    cC as f,
    i as b,
    cD as x,
    aO as v,
    cE as S,
    av as w,
    B as k,
    cF as P,
    cG as j,
    a6 as C,
    m as N,
    aa as I,
    cH as y,
    cI as A,
    c as T,
    aF as L,
    cJ as B,
    cK as E,
    b_ as D,
    c4 as W,
    F as U,
    cb as M,
    cc as Q,
    cL as z,
    aS as H,
    b3 as V,
    cM as $,
    cN as F,
    aD as q,
    cO as O,
    cP as Y,
    cQ as G,
    by as X,
    cR as K,
    cS as J,
    cT as Z,
    cU as ee,
    cV as ae,
    cW as se,
    cX as te,
    cY as re,
    cZ as ne,
    c_ as ie,
    ck as oe,
    c$ as de,
    d0 as ce,
    d1 as le,
    aV as _e,
    aJ as me,
    bi as ue,
    d2 as pe,
    d3 as he,
    u as ge,
    d4 as fe,
    d5 as be,
    c0 as xe,
    as as ve,
    d6 as Se,
    d7 as we,
    d8 as ke,
    d9 as Re,
    C as Pe,
    a as je,
    bZ as Ce,
    da as Ne,
    db as Ie,
    dc as ye,
    dd as Ae,
    b4 as Te,
    de as Le,
    df as Be,
    aR as Ee,
    bX as De,
    bJ as We,
    d as Ue,
    b as Me,
    k as Qe,
    ba as ze,
    f as He,
    r as Ve,
    U as $e,
} from '../../../chunks/lib.js';
import { u as Fe, S as qe } from '../../../chunks/schedule_model.js';
import { M as Oe, R as Ye, S as Ge, a as Xe } from '../../../chunks/enums.js';
import { P as Ke } from '../../../chunks/consts.js';
import { g as Je } from '../../../chunks/get_button_size.js';
import { R as Ze, a as ea, i as aa, g as sa } from '../../../chunks/rank_emblem.js';
import { g as ta, a as ra, b as na, R as ia } from '../../../chunks/get_rank_name.js';
import { S as oa, g as da } from '../../../chunks/schedule_subheading.js';
import { g as ca, a as la } from '../../../chunks/get_division_name.js';
import { D as _a, S as ma, a as ua, g as pa } from '../../../chunks/get_statistic_value.js';
import { P as ha } from '../../../chunks/index.js';
import { Q as ga } from '../../../chunks/qualification_emblem.js';
import { Q as fa } from '../../../chunks/qualification_battle_item.js';
import { g as ba, m as xa } from '../../../chunks/get_comp7_reward.js';
import { P as va, a as Sa, Q as wa } from '../../../chunks/quoted_locale.js';
import { A as ka } from '../../../chunks/arrow_button.js';
import { V as Ra, a as Pa } from '../../../chunks/vehicle_name.js';
import { Q as ja, C as Ca } from '../../../chunks/weekly_quests_model.js';
import { c as Na } from '../../../chunks/animation_api_factory.js';
import { S as Ia } from '../../../chunks/season_model.js';
import { L as ya } from '../../../chunks/lace_divider.js';
/* empty css                     */ import '../../../chunks/get_time_left.js';
import '../../../chunks/get_season_name.js';
import '../../../chunks/use_server_time_polling.js';
const Aa = {
        base: 'Background_8e48022f',
        bg: 'Background_bg_62833965',
        bgDisabled: 'Background_bgDisabled_452e3cee',
        bgHover: 'Background_bgHover_c1375183',
        base__big: 'Background_base__big_26effab7',
        base__hovered: 'Background_base__hovered_26effab7',
        fadeIn: 'Background_fadeIn_26effab7',
        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_26effab7',
        fadeInHalf: 'Background_fadeInHalf_26effab7',
        fadeOut: 'Background_fadeOut_26effab7',
        fadeInWithScale: 'Background_fadeInWithScale_26effab7',
        slideUp: 'Background_slideUp_26effab7',
        scale: 'Background_scale_26effab7',
        raysAppearance: 'Background_raysAppearance_26effab7',
        rotate: 'Background_rotate_26effab7',
        'reverse-rotate': 'Background_reverse-rotate_26effab7',
        glowAppearance: 'Background_glowAppearance_26effab7',
        highlightAppearance: 'Background_highlightAppearance_26effab7',
        blink: 'Background_blink_26effab7',
        slideUpIn: 'Background_slideUpIn_26effab7',
    },
    Ta = ({ isHover: s, size: t, disabled: r = !1 }) =>
        e.jsx('div', {
            className: a(Aa.base, Aa[`base__${t}`], s && Aa.base__hovered),
            children: r
                ? e.jsx('div', { className: Aa.bgDisabled })
                : e.jsxs(e.Fragment, {
                      children: [e.jsx('div', { className: Aa.bg }), e.jsx('div', { className: Aa.bgHover })],
                  }),
        }),
    La = {
        base: 'Border_3359fba1',
        border: 'Border_b559a98b',
        borderHover: 'Border_borderHover_fea1fee5',
        base__big: 'Border_base__big_b559a98b',
        base__hovered: 'Border_base__hovered_b559a98b',
        borderDisabled: 'Border_borderDisabled_536a8def',
        fadeIn: 'Border_fadeIn_b559a98b',
        fadeInThreeQuarters: 'Border_fadeInThreeQuarters_b559a98b',
        fadeInHalf: 'Border_fadeInHalf_b559a98b',
        fadeOut: 'Border_fadeOut_b559a98b',
        fadeInWithScale: 'Border_fadeInWithScale_b559a98b',
        slideUp: 'Border_slideUp_b559a98b',
        scale: 'Border_scale_b559a98b',
        raysAppearance: 'Border_raysAppearance_b559a98b',
        rotate: 'Border_rotate_b559a98b',
        'reverse-rotate': 'Border_reverse-rotate_b559a98b',
        glowAppearance: 'Border_glowAppearance_b559a98b',
        highlightAppearance: 'Border_highlightAppearance_b559a98b',
        blink: 'Border_blink_b559a98b',
        slideUpIn: 'Border_slideUpIn_b559a98b',
    },
    Ba = ({ isHover: s, size: t, disabled: r = !1 }) =>
        e.jsx('div', {
            className: a(La.base, La[`base__${t}`], s && La.base__hovered),
            children: r
                ? e.jsx('div', { className: La.borderDisabled })
                : e.jsxs(e.Fragment, {
                      children: [e.jsx('div', { className: La.border }), e.jsx('div', { className: La.borderHover })],
                  }),
        }),
    Ea = {
        base: 'ClaimRewardsWidget_1dba49fb',
        base__big: 'ClaimRewardsWidget_base__big_645b8c59',
        base__disabled: 'ClaimRewardsWidget_base__disabled_e355d01f',
        base__hasAppearAnimation: 'ClaimRewardsWidget_base__hasAppearAnimation_909b73e9',
        baseAppear: 'ClaimRewardsWidget_baseAppear_19f0a5a4',
        icon: 'ClaimRewardsWidget_icon_506a8894',
        count: 'ClaimRewardsWidget_count_1a366f42',
        label: 'ClaimRewardsWidget_label_8e37fc4a',
        shine: 'ClaimRewardsWidget_shine_79a6f19e',
        shine_big: 'ClaimRewardsWidget_shine_big_19f0a5a4',
        shine__left: 'ClaimRewardsWidget_shine__left_b5dc4847',
        shine__right: 'ClaimRewardsWidget_shine__right_7bb87761',
        arrow: 'ClaimRewardsWidget_arrow_a32932eb',
        blinkShape: 'ClaimRewardsWidget_blinkShape_50c9fd57',
        blink: 'ClaimRewardsWidget_blink_26d47c92',
        blinker: 'ClaimRewardsWidget_blinker_19f0a5a4',
        fadeIn: 'ClaimRewardsWidget_fadeIn_19f0a5a4',
        fadeInThreeQuarters: 'ClaimRewardsWidget_fadeInThreeQuarters_19f0a5a4',
        fadeInHalf: 'ClaimRewardsWidget_fadeInHalf_19f0a5a4',
        fadeOut: 'ClaimRewardsWidget_fadeOut_19f0a5a4',
        fadeInWithScale: 'ClaimRewardsWidget_fadeInWithScale_19f0a5a4',
        slideUp: 'ClaimRewardsWidget_slideUp_19f0a5a4',
        scale: 'ClaimRewardsWidget_scale_19f0a5a4',
        raysAppearance: 'ClaimRewardsWidget_raysAppearance_19f0a5a4',
        rotate: 'ClaimRewardsWidget_rotate_19f0a5a4',
        'reverse-rotate': 'ClaimRewardsWidget_reverse-rotate_19f0a5a4',
        glowAppearance: 'ClaimRewardsWidget_glowAppearance_19f0a5a4',
        highlightAppearance: 'ClaimRewardsWidget_highlightAppearance_19f0a5a4',
        slideUpIn: 'ClaimRewardsWidget_slideUpIn_19f0a5a4',
    };
var Da = ((e) => ((e.Small = 'small'), (e.Big = 'big'), e))(Da || {});
const Wa = ({ count: t, disabled: r = !1, size: n, onClick: i }) => {
        const [o, d] = s.useState(!1),
            c = r
                ? R.strings.comp7_ext.awardsWidget.description.awardDisabled()
                : R.strings.comp7_ext.awardsWidget.description.award();
        return e.jsx(_, {
            body: c,
            children: e.jsxs('div', {
                className: a(Ea.base, Ea[`base__${n}`], r ? Ea.base__disabled : Ea.base__hasAppearAnimation),
                onMouseEnter: () => {
                    (u.sound(R.sounds.highlight()), d(!0));
                },
                onMouseLeave: () => {
                    d(!1);
                },
                onClick: () => {
                    r || (u.click(), i());
                },
                children: [
                    e.jsx(Ba, { size: n, isHover: o, disabled: r }),
                    e.jsx(Ta, { size: n, isHover: o, disabled: r }),
                    e.jsx('div', { className: Ea.icon }),
                    e.jsx('div', { className: Ea.count, children: e.jsx(m, { format: 'integral', value: t }) }),
                    e.jsx('div', { className: Ea.label, children: R.strings.comp7_ext.awardsWidget.title(t) }),
                    !r &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(Ea.shine, Ea.shine__left) }),
                                e.jsx('div', { className: a(Ea.shine, Ea.shine__right) }),
                                e.jsx('div', { className: Ea.arrow }),
                                e.jsx('div', {
                                    className: Ea.blinkShape,
                                    children: e.jsx('div', { className: Ea.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    Ua = () => p.isHigh(),
    Ma = () => {
        const { mediaSize: e, screenHeightRem: a } = h(),
            s = e >= g.Medium && a >= f.Large ? 'medium' : 'small';
        return { size: s, isSmall: 'small' === s, isMedium: 'medium' === s };
    },
    Qa = {
        [Oe.Progression]: 'progression',
        [Oe.RankRewards]: 'rankRewards',
        [Oe.WeeklyQuests]: 'weeklyQuests',
        [Oe.Leaderboard]: 'leaderboard',
        [Oe.YearlyRewards]: 'yearlyRewards',
        [Oe.Shop]: 'shop',
        [Oe.YearlyStatistics]: 'yearlyStatistics',
    },
    za = {
        TABS: { context: 'model.sidebar' },
        SCHEDULE: { context: 'model.scheduleInfo' },
        PROGRESSION_PAGE: { context: 'model.progressionModel' },
        RANK_REWARDS_PAGE: { context: 'model.rankRewardsModel' },
        WEEKLY_QUESTS_PAGE: { context: 'model.weeklyQuestsModel' },
        LEADERBOARD_PAGE: { context: 'model.leaderboardModel' },
        YEARLY_REWARDS_PAGE: { context: 'model.yearlyRewardsModel' },
        SHOP_PAGE: { context: 'model.shopModel' },
        YEARLY_STATISTICS_PAGE: { context: 'model.yearlyStatisticsModel' },
    },
    [Ha, Va] = b()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), claimRewardsModel: e.object('claimRewardsModel') },
                s = e.object('progressionModel.qualificationModel'),
                r = t(() => a.root.get().pageViewId === Oe.Progression && s.get().isActive);
            return { ...a, computes: { isProgressionInQualification: r } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openRewardsSelectionScreen: e.createCallbackNoArgs('claimRewardsModel.onGoToRewardSelection'),
        }),
    ),
    $a = R.images.comp7.gui.maps.icons.metaTabs,
    Fa = (e, a) => {
        const s = Qa[e];
        return a ? `${$a.$dyn(s)}` : `${$a.small.$dyn(s)}`;
    },
    [qa, Oa] = b()(
        ({ observableModel: e }) => {
            const a = { root: e.object() },
                s = e.array('items');
            return {
                ...a,
                computes: {
                    tabs: t(
                        (e) => [
                            {
                                id: 0,
                                items: v(s.get(), ({ id: a, hasNotification: s }) => ({
                                    id: a,
                                    icon: Fa(a, e),
                                    ...(s && { notification: { type: 'dot' } }),
                                })),
                            },
                        ],
                        { equals: x },
                    ),
                },
            };
        },
        ({ externalModel: e }) => ({ changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange') }),
    ),
    Ya = R.strings.comp7_ext.sidebar.tabs.tooltip,
    Ga = ({ children: a, id: s }) => {
        const t = Qa[s];
        return e.jsx(_, { header: `${Ya.header.$dyn(t)}`, body: `${Ya.body.$dyn(t)}`, children: a });
    },
    Xa = 'Tabs_icon_8dfa0155',
    Ka = 'Tabs_icon__medium_bec6a176',
    Ja = r(({ pageView: t, className: r }) => {
        const { model: n, controls: i } = Oa(),
            o = Ma(),
            d = s.useCallback((e) => i.changeSidebarTab(e), [i]),
            c = n.computes.tabs(o.isMedium);
        return e.jsx(S, {
            tabs: c,
            onClick: d,
            active: t,
            size: o.size,
            className: r,
            classNames: { icon: a(Xa, o.isMedium && Ka) },
            WrapperElement: Ga,
        });
    });
var Za = ((e) => ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e))(
    Za || {},
);
const es = 'ErrorState_3a925db8',
    as = 'ErrorState_titleContainer_c7b9881d',
    ss = 'ErrorState_alertIcon_357c2b16',
    ts = 'ErrorState_title_e12a1ab4',
    rs = 'ErrorState_description_5df676c6',
    ns = ({
        className: s,
        classNames: t,
        title: r = R.strings.comp7_ext.dataError.title(),
        description: n = R.strings.comp7_ext.dataError.description(),
        children: i,
    }) =>
        e.jsxs('div', {
            className: a(es, s),
            children: [
                e.jsxs('div', {
                    className: a(as, null == t ? void 0 : t.titleContainer),
                    children: [
                        e.jsx('div', { className: a(ss, null == t ? void 0 : t.alertIcon) }),
                        e.jsx('div', { className: a(ts, null == t ? void 0 : t.title), children: r }),
                    ],
                }),
                e.jsx('div', { className: a(rs, null == t ? void 0 : t.description), children: n }),
                i,
            ],
        }),
    [is, os] = b()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), items: e.array('items') },
                s = t(
                    (e) => {
                        const s = w(a.items.get(), e);
                        if (!s) throw new Error(`leaderboard item with index ${e} was not found`);
                        return { ...s };
                    },
                    { equals: x },
                ),
                r = t(() => {
                    const { state: e, leaderboardUpdateTimestamp: s } = a.root.get();
                    return e !== Za.Initial && s > 0;
                }),
                i = t(() => s(0).rank),
                o = t(() => a.root.get().lastBestUserPosition + 1),
                d = t((e) => a.root.get().ownSpaID === s(e).spaID),
                c = t(() => -1 !== a.root.get().lastBestUserPosition),
                l = t(() => ({ first: s(0).position, last: s(a.items.get().length - 1).position }), {
                    equals: n.shallow,
                }),
                _ = t(() => c() && o() >= l().first && o() <= l().last),
                m = t(
                    (e) => {
                        const s = Math.ceil(a.root.get().recordsCount / e);
                        return { amount: s, hasPagination: s > 1, active: Math.floor(l().first / e) + 1 };
                    },
                    { equals: n.shallow },
                ),
                u = t((e) => s(e).position < 3),
                p = t(() => -1 === a.root.get().personalPosition);
            return {
                ...a,
                computes: {
                    leaderboardItem: s,
                    hasUpdateInfo: r,
                    firstItemRank: i,
                    rowsDividerPosition: o,
                    hasRowsDivider: _,
                    isPersonalRow: d,
                    hasPositionIcon: u,
                    isDefaultPersonalPosition: p,
                    hasLastBestUserPosition: c,
                    pages: m,
                    pagePositions: l,
                },
            };
        },
        ({ externalModel: e }) => ({
            refresh: e.createCallbackNoArgs('onRefresh'),
            getTableRecords: e.createCallback((e, a) => ({ limit: e, offset: a }), 'getTableRecords'),
        }),
    ),
    ds = 'ErrorState_886b4dce',
    cs = 'ErrorState_buttonWrapper_7130f1d1',
    ls = 'ErrorState_button_3b8b6fd9',
    _s = r(({ className: s }) => {
        const { model: t, controls: r } = os(),
            { isLoading: n } = t.root.get(),
            { mediaSize: i } = h();
        return e.jsx('div', {
            className: a(ds, s),
            children: e.jsx(ns, {
                children: e.jsx('div', {
                    className: cs,
                    children: e.jsx(k, {
                        theme: k.themes.secondary,
                        disabled: n,
                        size: Je(i),
                        className: ls,
                        onClick: () => {
                            n || (u.click(), r.refresh());
                        },
                        onMouseEnter: () => {
                            n || u.highlight();
                        },
                        silent: !0,
                        children: R.strings.comp7_ext.leaderboard.error.buttonText(),
                    }),
                }),
            }),
        });
    }),
    ms = {
        base: 'CurrentPositionPanel_5c9fd05c',
        base__active: 'CurrentPositionPanel_base__active_93cc4287',
        cell: 'CurrentPositionPanel_cell_41b95f68',
        cell__order: 'CurrentPositionPanel_cell__order_f039f004',
        cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_cdd5a115',
        cell__battles: 'CurrentPositionPanel_cell__battles_a186a8bb',
        cell__score: 'CurrentPositionPanel_cell__score_a186a8bb',
        screwIcon: 'CurrentPositionPanel_screwIcon_dd603d2e',
        screwIcon__left: 'CurrentPositionPanel_screwIcon__left_5e5413ae',
        screwIcon__right: 'CurrentPositionPanel_screwIcon__right_457865f',
        fadeIn: 'CurrentPositionPanel_fadeIn_2579d8a0',
        fadeInThreeQuarters: 'CurrentPositionPanel_fadeInThreeQuarters_2579d8a0',
        fadeInHalf: 'CurrentPositionPanel_fadeInHalf_2579d8a0',
        fadeOut: 'CurrentPositionPanel_fadeOut_2579d8a0',
        fadeInWithScale: 'CurrentPositionPanel_fadeInWithScale_2579d8a0',
        slideUp: 'CurrentPositionPanel_slideUp_2579d8a0',
        scale: 'CurrentPositionPanel_scale_2579d8a0',
        raysAppearance: 'CurrentPositionPanel_raysAppearance_2579d8a0',
        rotate: 'CurrentPositionPanel_rotate_2579d8a0',
        'reverse-rotate': 'CurrentPositionPanel_reverse-rotate_2579d8a0',
        glowAppearance: 'CurrentPositionPanel_glowAppearance_2579d8a0',
        highlightAppearance: 'CurrentPositionPanel_highlightAppearance_2579d8a0',
        blink: 'CurrentPositionPanel_blink_2579d8a0',
        slideUpIn: 'CurrentPositionPanel_slideUpIn_2579d8a0',
    };
var us = ((e) => ((e.None = 'None'), (e.Active = 'Active'), e))(us || {});
const ps = { None: 'none', Active: 'active' },
    hs = r(({ state: s, height: t, onClick: r, className: n }) => {
        const { model: i } = os(),
            { personalPosition: o, personalBattlesCount: d, personalScore: c } = i.root.get();
        return e.jsxs('div', {
            className: a(ms.base, ms[`base__${ps[s]}`], n),
            onClick: r,
            style: { '--height': t ? `${t}rem` : 'auto' },
            children: [
                e.jsx('div', { className: a(ms.screwIcon, ms.screwIcon__left) }),
                {
                    None: e.jsx('div', {
                        className: a(ms.cell),
                        children: R.strings.comp7_ext.leaderboard.currentPosition.none(),
                    }),
                    Active: e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: a(ms.cell, ms.cell__order), children: o + 1 }),
                            e.jsx('div', {
                                className: a(ms.cell, ms.cell__currentPosition),
                                children: R.strings.comp7_ext.leaderboard.currentPosition.body(),
                            }),
                            e.jsx('div', { className: a(ms.cell, ms.cell__battles), children: e.jsx(m, { value: d }) }),
                            e.jsx('div', { className: a(ms.cell, ms.cell__score), children: e.jsx(m, { value: c }) }),
                        ],
                    }),
                }[s],
                e.jsx('div', { className: a(ms.screwIcon, ms.screwIcon__right) }),
            ],
        });
    }),
    gs = 'RowsDivider_5e67d3df',
    fs = 'RowsDivider_rankText_d814efd9',
    bs = r(({ index: s, className: t, onClick: r }) => {
        const { model: n } = os(),
            { model: i } = Fe(),
            o = n.computes.leaderboardItem(s).rank;
        return e.jsxs('div', {
            className: a(gs, t),
            onClick: r,
            children: [
                e.jsx(Ze, { seasonName: i.season.name.get(), rank: o, size: ea.x64 }),
                e.jsx('div', { className: fs, children: ta(o) }),
            ],
        });
    }),
    xs = 'Header_4ab794c6',
    vs = 'Header_separator_510e8c90',
    Ss = 'Header_cell_ae11a84e',
    ws = 'Header_cell__order_8c3c2448',
    ks = 'Header_cell__player_4feb9cb9',
    Rs = 'Header_cell__score_d05be4b3',
    Ps = () =>
        e.jsxs('div', {
            className: xs,
            children: [
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.order.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.order.body(),
                    children: e.jsx('div', {
                        className: a(Ss, ws),
                        children: R.strings.comp7_ext.leaderboard.table.header.order(),
                    }),
                }),
                e.jsx('div', { className: vs }),
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.player.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.player.body(),
                    children: e.jsx('div', {
                        className: a(Ss, ks),
                        children: R.strings.comp7_ext.leaderboard.table.header.player(),
                    }),
                }),
                e.jsx('div', { className: vs }),
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.body(),
                    children: e.jsx('div', {
                        className: a(Ss, Rs),
                        children: R.strings.comp7_ext.leaderboard.table.header.battlesCount(),
                    }),
                }),
                e.jsx('div', { className: vs }),
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.score.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.score.body(),
                    children: e.jsx('div', {
                        className: a(Ss, Rs),
                        children: R.strings.comp7_ext.leaderboard.table.header.score(),
                    }),
                }),
            ],
        }),
    js = ({ children: a, isEnabled: s, contextMenuArgs: t }) => (s ? e.jsx(P, { args: t, children: a }) : a),
    Cs = {
        base: 'Row_c0c9eb7f',
        base__personal: 'Row_base__personal_c123bba9',
        order: 'Row_order_f88b8932',
        order__first: 'Row_order__first_cc78863e',
        order__second: 'Row_order__second_2b096ea7',
        order__third: 'Row_order__third_7175aba1',
        playerContainer: 'Row_playerContainer_e84846fe',
        player: 'Row_player_b3c980c7',
        clanTag: 'Row_clanTag_a1b9453b',
        battles: 'Row_battles_221de39e',
        score: 'Row_score_221de39e',
        fadeIn: 'Row_fadeIn_0',
        fadeInThreeQuarters: 'Row_fadeInThreeQuarters_0',
        fadeInHalf: 'Row_fadeInHalf_0',
        fadeOut: 'Row_fadeOut_0',
        fadeInWithScale: 'Row_fadeInWithScale_0',
        slideUp: 'Row_slideUp_0',
        scale: 'Row_scale_0',
        raysAppearance: 'Row_raysAppearance_0',
        rotate: 'Row_rotate_0',
        'reverse-rotate': 'Row_reverse-rotate_0',
        glowAppearance: 'Row_glowAppearance_0',
        highlightAppearance: 'Row_highlightAppearance_0',
        blink: 'Row_blink_0',
        slideUpIn: 'Row_slideUpIn_0',
    },
    Ns = { 0: 'first', 1: 'second', 2: 'third' },
    Is = r(({ index: s, className: t }) => {
        const { model: r } = os(),
            {
                position: n,
                battlesCount: i,
                userName: o,
                clanTag: d,
                clanTagColor: c,
                score: l,
                spaID: u,
            } = r.computes.leaderboardItem(s),
            p = r.computes.isPersonalRow(s),
            h = r.computes.hasPositionIcon(s);
        return e.jsxs('div', {
            className: a(Cs.base, p && Cs.base__personal, t),
            style: { '--clanTagColor': c },
            children: [
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.order.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.order.body(),
                    children: e.jsx('div', {
                        className: a(Cs.order, h && Cs[`order__${Ns[n]}`]),
                        children: !h && n + 1,
                    }),
                }),
                e.jsx(js, {
                    contextMenuArgs: { spaID: u, userName: o },
                    isEnabled: !p,
                    children: e.jsx('div', {
                        className: Cs.playerContainer,
                        children: e.jsx(_, {
                            header: R.strings.comp7_ext.leaderboard.table.tooltip.player.header(),
                            body: R.strings.comp7_ext.leaderboard.table.tooltip.player.body(),
                            children: e.jsx('div', {
                                className: Cs.player,
                                children: e.jsx(j, { userName: o, clanAbbrev: d, clanTagClassName: c && Cs.clanTag }),
                            }),
                        }),
                    }),
                }),
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.body(),
                    children: e.jsx('div', { className: Cs.battles, children: e.jsx(m, { value: i }) }),
                }),
                e.jsx(_, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.score.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.score.body(),
                    children: e.jsx('div', { className: Cs.score, children: e.jsx(m, { value: l }) }),
                }),
            ],
        });
    }),
    ys = 'Leaderboard_d61e47c3',
    As = 'Leaderboard_content_22252fe0',
    Ts = 'Leaderboard_shadowsContainer_676cb358',
    Ls = 'Leaderboard_shadowsContainer__bottom_592c0d95',
    Bs = 'Leaderboard_shadow_5e1e6caa',
    Es = 'Leaderboard_shadow__left_e19dd6f3',
    Ds = 'Leaderboard_shadow__center_3661a2a7',
    Ws = 'Leaderboard_shadow__right_e3bc83fc',
    Us = 'Leaderboard_area_ba84a652',
    Ms = 'Leaderboard_row_4ed6f164',
    Qs = 'Leaderboard_rowsDivider_32196381',
    zs = r(({ limit: s, rowHeight: t = 0, rowsDividerHeight: r = 0 }) => {
        const { model: n } = os(),
            o = n.computes.hasRowsDivider(),
            d = n.computes.rowsDividerPosition() % s;
        return e.jsxs('div', {
            className: ys,
            style: { '--rowHeight': t ? `${t}rem` : 'auto', '--rowsDividerHeight': `${r}rem` },
            children: [
                e.jsx(Ps, {}),
                e.jsxs('div', {
                    className: As,
                    children: [
                        e.jsxs('div', {
                            className: Ts,
                            children: [
                                e.jsx('div', { className: a(Bs, Es) }),
                                e.jsx('div', { className: a(Bs, Ds) }),
                                e.jsx('div', { className: a(Bs, Ws) }),
                            ],
                        }),
                        e.jsx(C, {
                            className: Us,
                            children: N(n.items.get().length, (a) =>
                                e.jsxs(
                                    i.Fragment,
                                    {
                                        children: [
                                            o && a === d && e.jsx(bs, { index: a, className: Qs }),
                                            e.jsx(Is, { className: Ms, index: a }),
                                        ],
                                    },
                                    a,
                                ),
                            ),
                        }),
                        e.jsxs('div', {
                            className: a(Ts, Ls),
                            children: [
                                e.jsx('div', { className: a(Bs, Es) }),
                                e.jsx('div', { className: a(Bs, Ds) }),
                                e.jsx('div', { className: a(Bs, Ws) }),
                            ],
                        }),
                        e.jsx(I, {}),
                    ],
                }),
            ],
        });
    }),
    Hs = {
        base: 'Pagination_37469748',
        pageButton: 'Pagination_pageButton_8b116ad7',
        pageButton__active: 'Pagination_pageButton__active_2b683ba8',
        pageButton__inactive: 'Pagination_pageButton__inactive_803b8463',
        pageButton__disabled: 'Pagination_pageButton__disabled_bba0d255',
        pageValue: 'Pagination_pageValue_3da2b9bb',
        control: 'Pagination_control_11d0377c',
        control__active: 'Pagination_control__active_163b5c73',
        control__prev: 'Pagination_control__prev_345dcd35',
        control__next: 'Pagination_control__next_5563e13d',
        fadeIn: 'Pagination_fadeIn_3cfb8f4f',
        fadeInThreeQuarters: 'Pagination_fadeInThreeQuarters_3cfb8f4f',
        fadeInHalf: 'Pagination_fadeInHalf_3cfb8f4f',
        fadeOut: 'Pagination_fadeOut_3cfb8f4f',
        fadeInWithScale: 'Pagination_fadeInWithScale_3cfb8f4f',
        slideUp: 'Pagination_slideUp_3cfb8f4f',
        scale: 'Pagination_scale_3cfb8f4f',
        raysAppearance: 'Pagination_raysAppearance_3cfb8f4f',
        rotate: 'Pagination_rotate_3cfb8f4f',
        'reverse-rotate': 'Pagination_reverse-rotate_3cfb8f4f',
        glowAppearance: 'Pagination_glowAppearance_3cfb8f4f',
        highlightAppearance: 'Pagination_highlightAppearance_3cfb8f4f',
        blink: 'Pagination_blink_3cfb8f4f',
        slideUpIn: 'Pagination_slideUpIn_3cfb8f4f',
    },
    Vs = Math.trunc(4),
    $s = ({ pagesAmount: s, activePage: t, className: r, onPageClick: n, onControlEvent: i }) => {
        const o = t > 1,
            d = t < s,
            c = s < 9 ? s : 9,
            l = (e) => () => {
                null == i || i(e);
            };
        return e.jsxs('div', {
            className: a(Hs.base, r),
            children: [
                e.jsx('div', {
                    className: a(Hs.control, Hs.control__prev, o && Hs.control__active),
                    onClick: o ? l('prevClick') : void 0,
                    children: R.strings.comp7_ext.pagination.prev(),
                }),
                N(c, (r) => {
                    const i = ((e, a, s) => {
                            const t = a > Vs + 1,
                                r = s > 9 && a + Vs < s;
                            return s <= 9
                                ? e + 1
                                : 0 === e
                                  ? 1
                                  : (1 === e && t) || (7 === e && r)
                                    ? R.strings.comp7_ext.pagination.dots()
                                    : 8 === e
                                      ? s
                                      : t && !r
                                        ? s - 8 + e
                                        : !t && r
                                          ? e + 1
                                          : e - Vs + a;
                        })(r, t, s),
                        o = ((e, a) => (Number.isInteger(e) ? (a === e ? 'active' : 'inactive') : 'disabled'))(i, t);
                    return e.jsx(
                        'div',
                        {
                            className: a(Hs.pageButton, Hs[`pageButton__${o}`]),
                            onClick:
                                'disabled' !== o && 'number' == typeof i
                                    ? ((d = i),
                                      () => {
                                          null == n || n(d);
                                      })
                                    : void 0,
                            children: e.jsx('div', { className: Hs.pageValue, children: i }),
                        },
                        r,
                    );
                    var d;
                }),
                e.jsx('div', {
                    className: a(Hs.control, Hs.control__next, d && Hs.control__active),
                    onClick: d ? l('nextClick') : void 0,
                    children: R.strings.comp7_ext.pagination.next(),
                }),
            ],
        });
    },
    Fs = 'HasRecordsState_c43fe3c6',
    qs = 'HasRecordsState_base__withoutPagination_3fb8255a',
    Os = 'HasRecordsState_tableContainer_e5526099',
    Ys = 'HasRecordsState_pagination_26230442',
    Gs = { settings: { ...y, animationConfig: { ...y.animationConfig, round: 1 } } },
    Xs = r(
        ({ limit: t, onCurrentRankTabChange: r, positionToScroll: n, onPositionToScrollChange: i, className: o }) => {
            const { model: d, controls: c } = os(),
                { personalPosition: l, lastBestUserPosition: _ } = d.root.get(),
                m = A(Gs),
                {
                    animationScroll: { scrollPosition: p },
                    applyScroll: h,
                    events: g,
                    getBounds: f,
                } = m,
                b = d.computes.isDefaultPersonalPosition() ? us.None : us.Active,
                x = d.computes.pages(t),
                v = d.computes.pagePositions(),
                S = d.computes.rowsDividerPosition(),
                w = d.computes.hasRowsDivider(),
                k = ((e, a) => L(44) * ((e + 1) % a))(_, t);
            s.useEffect(
                () =>
                    T(() => {
                        if (void 0 !== n) {
                            switch (n.type) {
                                case 'rank': {
                                    const e = n.rank === Ye.Fifth ? k : 0;
                                    h(e);
                                    break;
                                }
                                case 'personalPosition': {
                                    const e = L(44) * (l % t),
                                        a = w && l > _ ? e + L(70) : e;
                                    h(a);
                                    break;
                                }
                                case 'page':
                                    h(0);
                            }
                            i(void 0);
                        }
                    }),
                [h, w, _, t, l, n, k, i],
            );
            const R = s.useCallback(() => {
                const e = v.first > _ ? Ye.Fifth : Ye.Sixth;
                r(e);
            }, [v.first, _, r]);
            (s.useEffect(() => {
                R();
            }, [R]),
                s.useEffect(() => {
                    const e = () => {
                        if (w && S > v.first) {
                            const [, e] = f(),
                                a = 0 !== e && p.goal === e && k >= e;
                            r(p.goal >= k || a ? Ye.Fifth : Ye.Sixth);
                        } else l >= v.first && l <= v.last ? r(l > _ ? Ye.Fifth : Ye.Sixth) : R();
                    };
                    return (g.on('change', e), () => g.off('change', e));
                }, [g, v.first, w, _, v.last, t, l, k, S, p.goal, r, R, f]));
            const P = s.useCallback(() => {
                    b !== us.None && (u.yes1(), c.getTableRecords(t, l - (l % t)), i({ type: 'personalPosition' }));
                }, [c, t, b, l, i]),
                j = s.useCallback(
                    (e) => {
                        (u.yes1(), c.getTableRecords(t, (e - 1) * t), i({ type: 'page' }));
                    },
                    [c, t, i],
                ),
                C = s.useCallback(
                    (e) => {
                        u.yes1();
                        const a = (() => {
                            switch (e) {
                                case 'prevClick':
                                    return x.active - 1;
                                case 'nextClick':
                                    return x.active + 1;
                                default:
                                    return 1;
                            }
                        })();
                        (c.getTableRecords(t, (a - 1) * t), i({ type: 'page' }));
                    },
                    [x.active, c, t, i],
                );
            return e.jsxs('div', {
                className: a(Fs, !x.hasPagination && qs, o),
                children: [
                    e.jsx('div', {
                        className: Os,
                        children: e.jsx(B, {
                            api: m,
                            children: e.jsx(zs, { limit: t, rowHeight: 44, rowsDividerHeight: 70 }),
                        }),
                    }),
                    e.jsx(hs, { state: b, onClick: P, height: 44 }),
                    x.hasPagination &&
                        e.jsx($s, {
                            pagesAmount: x.amount,
                            activePage: x.active,
                            className: Ys,
                            onPageClick: j,
                            onControlEvent: C,
                        }),
                ],
            });
        },
    ),
    Ks = R.views.comp7.mono.lobby.tooltips,
    Js = ({ rank: a, divisions: s, from: t, to: r, topPercentage: n, children: i, className: o, ...d }) => {
        const c = (({ rank: e, topPercentage: a, from: s, to: t, divisions: r = '' }) => {
            switch (e) {
                case Ye.Sixth:
                    return { contentId: Ks.sixth_rank_tooltip('resId'), args: { topPercentage: a } };
                case Ye.Fifth:
                    return { contentId: Ks.fifth_rank_tooltip('resId'), args: { from: s } };
                default:
                    return {
                        contentId: Ks.general_rank_tooltip('resId'),
                        args: { rank: e, divisions: r, from: s, to: t },
                    };
            }
        })({ rank: a, divisions: s, from: t, to: r, topPercentage: n });
        return e.jsx(E, { ...c, ...d, children: e.jsx('div', { className: o, children: i }) });
    };
var Zs = ((e) => ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'), e))(Zs || {});
const et = {
        base: 'RankTabs_6fc88656',
        line: 'RankTabs_line_af43f27d',
        line__toRight: 'RankTabs_line__toRight_a38d9f9c',
        line__toLeft: 'RankTabs_line__toLeft_e25cc1cf',
        ranksContainer: 'RankTabs_ranksContainer_bd00e941',
        dividersDot: 'RankTabs_dividersDot_da45ad02',
        rank: 'RankTabs_rank_e04916b3',
        rankEmblem: 'RankTabs_rankEmblem_35da26af',
        rank__disabled: 'RankTabs_rank__disabled_eae521b6',
        label: 'RankTabs_label_f262d6f9',
        rank__active: 'RankTabs_rank__active_eae521b6',
        rankTabHighlight: 'RankTabs_rankTabHighlight_24293113',
        fadeIn: 'RankTabs_fadeIn_eae521b6',
        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_eae521b6',
        fadeInHalf: 'RankTabs_fadeInHalf_eae521b6',
        fadeOut: 'RankTabs_fadeOut_eae521b6',
        fadeInWithScale: 'RankTabs_fadeInWithScale_eae521b6',
        slideUp: 'RankTabs_slideUp_eae521b6',
        scale: 'RankTabs_scale_eae521b6',
        raysAppearance: 'RankTabs_raysAppearance_eae521b6',
        rotate: 'RankTabs_rotate_eae521b6',
        'reverse-rotate': 'RankTabs_reverse-rotate_eae521b6',
        glowAppearance: 'RankTabs_glowAppearance_eae521b6',
        highlightAppearance: 'RankTabs_highlightAppearance_eae521b6',
        blink: 'RankTabs_blink_eae521b6',
        slideUpIn: 'RankTabs_slideUpIn_eae521b6',
    },
    at = ({ tabs: s, seasonName: t, className: r, onTabClick: n }) => {
        const i = (e) => () => {
            null == n || n(e);
        };
        return e.jsxs('div', {
            className: a(et.base, r),
            children: [
                e.jsx('div', { className: et.dividersDot }),
                e.jsx('div', { className: a(et.line, et.line__toRight) }),
                e.jsx('div', {
                    className: et.ranksContainer,
                    children: s.map(({ rank: s, state: r, args: n = {} }) => {
                        const o = r !== Zs.Disabled;
                        return e.jsxs(
                            'div',
                            {
                                className: a(et.rank, et[`rank__${r}`]),
                                children: [
                                    e.jsxs(Js, {
                                        rank: s,
                                        from: null == n ? void 0 : n.from,
                                        topPercentage: null == n ? void 0 : n.topPercentage,
                                        onClick: o ? i(s) : void 0,
                                        onMouseEnter: o ? u.highlight : void 0,
                                        children: [
                                            e.jsx('div', { className: et.rankTabHighlight }),
                                            e.jsx(Ze, {
                                                seasonName: t,
                                                rank: s,
                                                size: ea.x64,
                                                className: et.rankEmblem,
                                            }),
                                        ],
                                    }),
                                    r !== Zs.Disabled && e.jsx('div', { className: et.label, children: ta(s) }),
                                ],
                            },
                            s,
                        );
                    }),
                }),
                e.jsx('div', { className: a(et.line, et.line__toLeft) }),
            ],
        });
    },
    st = ({ rank: e, lastBestUserPosition: a, currentRankTab: s, recordsCount: t }) =>
        (e === Ye.Sixth && -1 === a) || 0 === t ? Zs.Disabled : e === s ? Zs.Active : Zs.Inactive,
    tt = 'HasRecordsStateContainer_c67207b9',
    rt = 'HasRecordsStateContainer_content_6298db9',
    nt = [Ye.Sixth, Ye.Fifth],
    it = r(({ className: t }) => {
        const { model: r, controls: n } = os(),
            { model: i } = Fe(),
            { lastBestUserPosition: o, recordsCount: d, from: c, topPercentage: l } = r.root.get(),
            _ = r.computes.hasLastBestUserPosition(),
            m = r.computes.rowsDividerPosition(),
            [p, h] = s.useState(r.computes.firstItemRank()),
            [g, f] = s.useState(),
            b = nt.map((e) => ({
                rank: e,
                state: st({ rank: e, lastBestUserPosition: o, currentRankTab: p, recordsCount: d }),
                args: { from: c, topPercentage: l },
            })),
            x = s.useCallback(
                (e) => {
                    const a = e === Ye.Fifth && _ ? m - (m % 50) : 0;
                    (u.click(), n.getTableRecords(50, a), f({ type: 'rank', rank: e }));
                },
                [n, m, _, 50],
            );
        return e.jsxs('div', {
            className: a(tt, t),
            children: [
                e.jsx(at, { tabs: b, seasonName: i.season.name.get(), onTabClick: x }),
                e.jsx(Xs, {
                    limit: 50,
                    positionToScroll: g,
                    onCurrentRankTabChange: h,
                    onPositionToScrollChange: f,
                    className: rt,
                }),
            ],
        });
    }),
    ot = {
        base: 'NoRecordsState_d5cb4008',
        imageContainer: 'NoRecordsState_imageContainer_114fc4ea',
        image: 'NoRecordsState_image_8538b81d',
        image__season_first: 'NoRecordsState_image__season_first_f1601a6e',
        image__season_second: 'NoRecordsState_image__season_second_2ba175',
        image__season_third: 'NoRecordsState_image__season_third_5e8cb752',
        title: 'NoRecordsState_title_d6e36681',
        subtitle: 'NoRecordsState_subtitle_590c8cfe',
        fadeIn: 'NoRecordsState_fadeIn_32c10e47',
        fadeInThreeQuarters: 'NoRecordsState_fadeInThreeQuarters_32c10e47',
        fadeInHalf: 'NoRecordsState_fadeInHalf_32c10e47',
        fadeOut: 'NoRecordsState_fadeOut_32c10e47',
        fadeInWithScale: 'NoRecordsState_fadeInWithScale_32c10e47',
        slideUp: 'NoRecordsState_slideUp_32c10e47',
        scale: 'NoRecordsState_scale_32c10e47',
        raysAppearance: 'NoRecordsState_raysAppearance_32c10e47',
        rotate: 'NoRecordsState_rotate_32c10e47',
        'reverse-rotate': 'NoRecordsState_reverse-rotate_32c10e47',
        glowAppearance: 'NoRecordsState_glowAppearance_32c10e47',
        highlightAppearance: 'NoRecordsState_highlightAppearance_32c10e47',
        blink: 'NoRecordsState_blink_32c10e47',
        slideUpIn: 'NoRecordsState_slideUpIn_32c10e47',
    },
    dt = r(({ className: s }) => {
        const { model: t } = os(),
            { from: r } = t.root.get(),
            { model: n } = Fe();
        return e.jsxs('div', {
            className: a(ot.base, s),
            children: [
                e.jsx('div', {
                    className: ot.imageContainer,
                    children: e.jsx('div', { className: a(ot.image, ot[`image__season_${n.season.name.get()}`]) }),
                }),
                e.jsx('div', { className: ot.title, children: R.strings.comp7_ext.leaderboard.noRecords.title() }),
                e.jsx(D, {
                    text: R.strings.comp7_ext.leaderboard.noRecords.subtitle(),
                    binding: { pointsCount: e.jsx(m, { value: r }) },
                    classMix: ot.subtitle,
                }),
            ],
        });
    }),
    ct = W(R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.description(), { count: 5 }),
    lt = 'LastUpdateNote_6d3d7bea',
    _t = 'LastUpdateNote_infoIcon_e0adf03b',
    mt = ({
        timestamp: s,
        className: t,
        classNames: r,
        dateTimeFormat: n = Q.ShortTime,
        contentId: i = R.views.comp7.mono.lobby.tooltips.last_update_tooltip('resId'),
        tooltipDescription: o = ct,
        ...d
    }) =>
        e.jsxs('div', {
            className: a(lt, t),
            children: [
                e.jsx(U, {
                    text: `${R.strings.comp7_ext.lastUpdateNote.info()}`,
                    binding: { date: e.jsx(M, { datetime: s, format: n }) },
                }),
                e.jsx(E, {
                    ignoreShowDelay: !0,
                    contentId: i,
                    args: { description: o },
                    ...d,
                    children: e.jsx('div', { className: a(_t, null == r ? void 0 : r.icon) }),
                }),
            ],
        }),
    ut = 'SubheadingContainer_c1ac09ea',
    pt = 'SubheadingContainer_updateInfo_d86a6c67',
    ht = 'SubheadingContainer_updateInfoText_8739d0a',
    gt = r(({ className: s }) => {
        const { model: t } = os(),
            { leaderboardUpdateTimestamp: r } = t.root.get(),
            n = t.computes.hasUpdateInfo(),
            i = W(R.strings.comp7_ext.lastUpdateNote.ratingPositions.description(), { count: 5 });
        return e.jsxs('div', {
            className: a(ut, s),
            children: [
                e.jsx(oa, {}),
                n &&
                    e.jsx('div', {
                        className: pt,
                        children: e.jsx(mt, { timestamp: r, className: ht, tooltipDescription: i }),
                    }),
            ],
        });
    }),
    ft = {
        base: 'LeaderboardPage_fe5ea195',
        animationContainer: 'LeaderboardPage_animationContainer_82ac54a3',
        subHeading: 'LeaderboardPage_subHeading_5cbf5020',
        content: 'LeaderboardPage_content_2f70e5e7',
        base__loading: 'LeaderboardPage_base__loading_f104266a',
        hasRecords: 'LeaderboardPage_hasRecords_c87748b0',
        error: 'LeaderboardPage_error_f104266a',
        noRecords: 'LeaderboardPage_noRecords_4ac2ddc5',
        spinner: 'LeaderboardPage_spinner_b414a75a',
        fadeIn: 'LeaderboardPage_fadeIn_f104266a',
        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_f104266a',
        fadeInHalf: 'LeaderboardPage_fadeInHalf_f104266a',
        fadeOut: 'LeaderboardPage_fadeOut_f104266a',
        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_f104266a',
        slideUp: 'LeaderboardPage_slideUp_f104266a',
        scale: 'LeaderboardPage_scale_f104266a',
        raysAppearance: 'LeaderboardPage_raysAppearance_f104266a',
        rotate: 'LeaderboardPage_rotate_f104266a',
        'reverse-rotate': 'LeaderboardPage_reverse-rotate_f104266a',
        glowAppearance: 'LeaderboardPage_glowAppearance_f104266a',
        highlightAppearance: 'LeaderboardPage_highlightAppearance_f104266a',
        blink: 'LeaderboardPage_blink_f104266a',
        slideUpIn: 'LeaderboardPage_slideUpIn_f104266a',
    },
    bt = { [Za.Initial]: 'initial', [Za.Success]: 'success', [Za.Error]: 'error' },
    xt = r(() => {
        const { model: s } = os(),
            { state: t, isLoading: r } = s.root.get(),
            n = o(Ke);
        return e.jsxs('div', {
            className: a(ft.base, ft[`base__${bt[t]}`], r && ft.base__loading),
            'data-test-id': 'leaderboard-page',
            children: [
                e.jsx(gt, { className: ft.subHeading }),
                e.jsxs(d.div, {
                    className: ft.animationContainer,
                    style: n,
                    children: [
                        e.jsx('div', {
                            className: ft.content,
                            children: (() => {
                                switch (t) {
                                    case Za.Initial:
                                        return null;
                                    case Za.Success:
                                        return s.items.get().length > 0
                                            ? e.jsx(it, { className: ft.hasRecords })
                                            : e.jsx(dt, { className: ft.noRecords });
                                    case Za.Error:
                                        return e.jsx(_s, { className: ft.error });
                                    default:
                                        console.error('Unreachable branch: add component for proper leaderboard state');
                                }
                            })(),
                        }),
                        r && e.jsx(z, { message: R.strings.comp7_ext.waitingSpinner.message(), className: ft.spinner }),
                    ],
                }),
            ],
        });
    }),
    vt = (e) => v(e, (e) => ca(e.name)).join(R.strings.comp7_ext.listSeparator());
var St = ((e) => (
        (e[(e.Achieved = 0)] = 'Achieved'),
        (e[(e.Current = 1)] = 'Current'),
        (e[(e.Inactive = 2)] = 'Inactive'),
        e
    ))(St || {}),
    wt = ((e) => ((e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future'), e))(wt || {});
const [kt, Rt] = b()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    items: e.array('items'),
                    qualificationModel: e.primitives(
                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                        'qualificationModel',
                    ),
                    qualificationBattles: e.array('qualificationModel.battles'),
                    isRewardLayerVisible: c.box(!1),
                    isParallaxPreloaded: c.box(!1),
                },
                s = t(
                    (e) => {
                        const s = w(a.items.get(), e);
                        if (!s) throw new Error(`item with index ${e} was not found`);
                        const { hasRankInactivity: t, rank: r, from: n, to: i } = s;
                        return { hasRankInactivity: t, rank: r, from: n, to: i };
                    },
                    { equals: n.shallow },
                ),
                r = t(
                    (e) => {
                        const s = w(a.items.get(), e);
                        if (!s) throw new Error(`item with index ${e} was not found`);
                        return v(s.divisions, (e) => ({ ...e }));
                    },
                    { equals: x },
                ),
                i = t(
                    (e) => {
                        const a = r(e);
                        return {
                            list: vt(a),
                            count: a.length,
                            currentDivisionIndex: H(a, (e) => e.state === St.Current),
                        };
                    },
                    { equals: n.shallow },
                ),
                o = t(
                    (e) => {
                        var t;
                        const n =
                            ((i = e),
                            (o = a.root.get().currentItemIndex),
                            i > o ? wt.Future : i < o ? wt.Previous : wt.Current);
                        var i, o;
                        return {
                            state: n,
                            division: null == (t = V(r(e), (e) => e.state === St.Current)) ? void 0 : t.name,
                            hasInfo: n === wt.Current && !aa(s(e).rank),
                        };
                    },
                    { equals: n.shallow },
                ),
                d = t(
                    (e) => {
                        const s = w(a.qualificationBattles.get(), e);
                        if (!s) throw new Error(`qualification battle with index ${e} was not found`);
                        return s;
                    },
                    { equals: x },
                );
            return {
                ...a,
                computes: { item: s, qualificationBattle: d, rankSettings: o, divisions: r, divisionsConfig: i },
            };
        },
        ({ externalModel: e, model: a }) => {
            const s = l((e) => a.isRewardLayerVisible.set(e));
            return {
                setIsParallaxPreloaded: l((e) => a.isParallaxPreloaded.set(e)),
                setRewardLayerVisible: s,
                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
            };
        },
    ),
    Pt = 'RatingScore_9e23ba40',
    jt = 'RatingScore_rating_c6cb04e8',
    Ct = 'RatingScore_score_c108213e',
    Nt = 'RatingScore_rankInactivity_136eebbc',
    It = 'RatingScore_rankInactivityCount_accf943c',
    yt = 'RatingScore_rankInactivityIconContainer_fe7da696',
    At = 'RatingScore_rankInactivityIcon_aa24f629',
    Tt = 'RatingScore_title_a77375dc',
    Lt = ({ currentScore: s, hasRankInactivity: t, rankInactivityCount: r, className: n }) =>
        e.jsxs('div', {
            className: a(Pt, n),
            children: [
                e.jsxs('div', {
                    className: jt,
                    children: [
                        e.jsx('div', { className: Ct, children: s }),
                        t &&
                            e.jsx(E, {
                                ignoreShowDelay: !0,
                                contentId: R.views.comp7.mono.lobby.tooltips.rank_inactivity_tooltip('resId'),
                                args: { rankInactivityCount: r },
                                children: e.jsxs('div', {
                                    className: Nt,
                                    children: [
                                        e.jsx('div', { className: It, children: r }),
                                        e.jsx('div', { className: yt, children: e.jsx('div', { className: At }) }),
                                    ],
                                }),
                            }),
                    ],
                }),
                e.jsx('div', { className: Tt, children: R.strings.comp7_ext.ratingScore.title() }),
            ],
        }),
    Bt = 'ItemFooter_526b657b',
    Et = 'ItemFooter_background_b8180a',
    Dt = 'ItemFooter_divider_822336bf',
    Wt = 'ItemFooter_light_df95876',
    Ut = 'ItemFooter_footer_704cf2ad',
    Mt = 'ItemFooter_rankItemFooter_4502398c',
    Qt = r(({ className: s }) => {
        const { model: t } = Rt(),
            { currentScore: r, rankInactivityCount: n, currentItemIndex: i } = t.root.get(),
            o = t.computes.item(i).hasRankInactivity;
        return e.jsxs('div', {
            className: a(Bt, s),
            children: [
                e.jsx('div', { className: Et }),
                e.jsx('div', { className: Dt }),
                e.jsx('div', { className: Wt }),
                e.jsx('div', {
                    className: Ut,
                    children: e.jsx(Lt, {
                        currentScore: r,
                        hasRankInactivity: o,
                        rankInactivityCount: n,
                        className: Mt,
                    }),
                }),
            ],
        });
    }),
    zt = [
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_5(), speedX: -0.053, speedY: -0.01 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_4(), speedX: -0.037, speedY: -0.0055 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_3(), speedX: -0.025, speedY: -0.0016 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1(), speedX: 0.015, speedY: 0.002 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(), speedX: 0.015, speedY: 0.002 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0(), speedX: 0.03, speedY: 0.014 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(), speedX: 0.03, speedY: 0.014 },
    ],
    Ht = 'Parallax_642396e4',
    Vt = 'Parallax_layer_823dd2ef',
    $t = 'Parallax_shadow_e2763b91',
    Ft = [
        R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
        R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
    ],
    qt = zt.reduce((e, a) => {
        const s = Math.abs(a.speedX);
        return s > e ? s : e;
    }, 0),
    Ot = r(({ className: t }) => {
        const { model: r } = Rt(),
            { screenWidthRem: n } = h(),
            i = s.createRef(),
            c = qt * n,
            l = o({ to: { opacity: r.isRewardLayerVisible.get() ? 1 : 0 }, config: { duration: 300 } }),
            [_] = $(i);
        return e.jsx('div', {
            ref: i,
            className: a(Ht, t),
            children: zt.map((a, s) =>
                e.jsx(
                    d.div,
                    {
                        className: Vt,
                        style: {
                            width: `${n + 2 * c}rem`,
                            left: -c + 'rem',
                            x: _.x.to((e) => e * a.speedX),
                            y: _.y.to((e) => e * a.speedY),
                            backgroundImage: `url(${a.path})`,
                            ...(Ft.includes(a.path) && l),
                        },
                        children: 3 === s && e.jsx(d.div, { className: $t, style: l }),
                    },
                    s,
                ),
            ),
        });
    }),
    Yt = 'ParallaxContainer_ea8010a4',
    Gt = zt.map((e) => e.path),
    Xt = r(({ className: t }) => {
        const { model: r, controls: n } = Rt(),
            i = r.isParallaxPreloaded.get(),
            c = o({ to: { opacity: i ? 1 : 0 }, config: { duration: 300 } }),
            l = F(Gt);
        return (
            s.useLayoutEffect(() => {
                'success' === l && n.setIsParallaxPreloaded(!0);
            }, [n, l]),
            e.jsx(d.div, { className: a(Yt, t), style: c, children: e.jsx(Ot, {}) })
        );
    }),
    Kt = 'ProgressionScroll_21d7f49a',
    Jt = 'ProgressionScroll_areaWrapper_ef84dc73',
    Zt = 'ProgressionScroll_areaContent_d2de9b28',
    er = ({
        stuckIndex: t,
        itemWidth: r,
        itemsOffset: n = 0,
        children: i,
        onStick: o,
        className: d,
        areaClassNames: c,
        barClassNames: l,
        staticContent: _,
    }) => {
        const m = L(r),
            { api: u } = q(),
            { animationScroll: p, events: h, applyScroll: g } = u,
            f = O(u, u.settings.animationConfig),
            b = s.useCallback(
                (e) => {
                    g(t * m, e);
                },
                [g, m, t],
            ),
            x = s.useCallback(() => {
                null == o || o(Math.round(p.scrollPosition.goal / m));
            }, [o, p.scrollPosition, m]);
        (s.useEffect(() => (h.on('rest', x), () => h.off('rest', x)), [h, x]),
            s.useEffect(() => {
                const e = () => {
                    b({ immediate: !0, reset: !0 });
                };
                return (
                    h.on('resizeHandled', e),
                    () => {
                        h.off('resizeHandled', e);
                    }
                );
            }, [b, h]),
            s.useEffect(
                () =>
                    T(() => {
                        'idle' === f.type && p.scrollPosition.idle && b();
                    }),
                [p.scrollPosition, f, b],
            ));
        const v = s.useCallback(
            (e) => {
                'dragEnd' === e.type && g(t * m);
            },
            [g, m, t],
        );
        return e.jsxs('div', {
            className: a(Kt, d),
            style: { '--offset': `${n}rem` },
            children: [
                e.jsx(Y, {
                    className: null == c ? void 0 : c.base,
                    classNames: {
                        wrapper: a(Jt, null == c ? void 0 : c.wrapper),
                        content: a(Zt, null == c ? void 0 : c.content),
                    },
                    children: i,
                }),
                _,
                e.jsx(G, { onDrag: v, classNames: l }),
            ],
        });
    },
    ar = (e, a = 100) => ((X(K('px').width) * a) / 100 - e) / 2,
    sr = (e, a = 150, t) => {
        const r = L(e),
            n = s.useMemo(
                () => ({
                    settings: {
                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: a },
                        animationConfig: { frequency: 0.5, ...t },
                    },
                }),
                [t, r, a],
            );
        return J(n);
    };
function tr({ children: a, api: s, ...t }) {
    return e.jsx(Z, { api: s, children: e.jsx(er, { ...t, children: a }) });
}
const rr = 'RankInfo_d0b952ed',
    nr = 'RankInfo_highlight_23f2f1b1',
    ir = 'RankInfo_formattedText_ce757c5e',
    or = ({ rank: s, from: t, topPercentage: r, className: n, classNames: i }) =>
        e.jsxs('div', {
            className: a(rr, n),
            children: [
                e.jsx('div', { className: nr }),
                e.jsx(D, {
                    text: String(R.strings.comp7_ext.rankInfo.current.$dyn(sa(s))),
                    binding: { topPercentage: r, fromScore: e.jsx(m, { value: t }) },
                    classMix: a(ir, null == i ? void 0 : i.text),
                }),
            ],
        }),
    dr = 'RankItemDivider_4cb62c5',
    cr = () => e.jsx('div', { className: dr }),
    lr = ({ rank: a, division: s, from: t, to: r, className: n, children: i }) =>
        e.jsx(E, {
            contentId: R.views.comp7.mono.lobby.tooltips.division_tooltip('resId'),
            args: { rank: a, division: s, from: t, to: r },
            children: e.jsx('div', { className: n, children: i }),
        }),
    _r = 'RankProgressDivisions_db142f88',
    mr = 'RankProgressDivisions_divisionItem_5be72f57',
    ur = 'RankProgressDivisions_divisionItem__current_6ced0f10',
    pr = 'RankProgressDivisions_highlightContainer_70c42138',
    hr = 'RankProgressDivisions_radialBack_57eba5b8',
    gr = 'RankProgressDivisions_mainBack_8fe6b2d0',
    fr = 'RankProgressDivisions_bottomLine_60e68b1c',
    br = 'RankProgressDivisions_bottomLine__first_cd7ca41d',
    xr = 'RankProgressDivisions_bottomLine__second_787c2960',
    vr = 'RankProgressDivisions_bottomLine__third_b38a7c3b',
    Sr = 'RankProgressDivisions_divisionText_acccca06',
    wr = 'RankProgressDivisions_note_3f3eed15',
    kr = r(({ itemIndex: s, rank: t, from: r, step: n }) => {
        const { model: i } = Rt(),
            o = i.computes.divisions(s);
        return e.jsx('div', {
            className: _r,
            children: v(o, (s, i) => {
                const o = s.state === St.Current;
                return e.jsxs(
                    lr,
                    {
                        rank: t,
                        division: s.name,
                        from: r + n * i,
                        to: r + n * (i + 1),
                        className: a(mr, o && ur),
                        children: [
                            o &&
                                e.jsxs('div', {
                                    className: pr,
                                    children: [
                                        e.jsx('div', { className: hr }),
                                        e.jsx('div', { className: gr }),
                                        e.jsx('div', { className: a(fr, br) }),
                                        e.jsx('div', { className: a(fr, xr) }),
                                        e.jsx('div', { className: a(fr, vr) }),
                                    ],
                                }),
                            e.jsxs('div', {
                                className: Sr,
                                children: [
                                    o && e.jsx('div', { className: wr, children: R.strings.comp7_ext.division.note() }),
                                    ca(s.name),
                                ],
                            }),
                        ],
                    },
                    i,
                );
            }),
        });
    }),
    Rr = {
        '--pointLineWidth': '$lineWidth',
        base: 'RankProgressPoints_93da85b9',
        point: 'RankProgressPoints_point_1b3696e3',
        base__top: 'RankProgressPoints_base__top_aa2f1644',
        base__bottom: 'RankProgressPoints_base__bottom_aa2f1644',
        pointLine: 'RankProgressPoints_pointLine_355cb3a7',
        pointLine__extended: 'RankProgressPoints_pointLine__extended_32989f19',
        pointValue: 'RankProgressPoints_pointValue_81b21b0c',
        pointValue__next: 'RankProgressPoints_pointValue__next_2dbef254',
        fadeIn: 'RankProgressPoints_fadeIn_aa2f1644',
        fadeInThreeQuarters: 'RankProgressPoints_fadeInThreeQuarters_aa2f1644',
        fadeInHalf: 'RankProgressPoints_fadeInHalf_aa2f1644',
        fadeOut: 'RankProgressPoints_fadeOut_aa2f1644',
        fadeInWithScale: 'RankProgressPoints_fadeInWithScale_aa2f1644',
        slideUp: 'RankProgressPoints_slideUp_aa2f1644',
        scale: 'RankProgressPoints_scale_aa2f1644',
        raysAppearance: 'RankProgressPoints_raysAppearance_aa2f1644',
        rotate: 'RankProgressPoints_rotate_aa2f1644',
        'reverse-rotate': 'RankProgressPoints_reverse-rotate_aa2f1644',
        glowAppearance: 'RankProgressPoints_glowAppearance_aa2f1644',
        highlightAppearance: 'RankProgressPoints_highlightAppearance_aa2f1644',
        blink: 'RankProgressPoints_blink_aa2f1644',
        slideUpIn: 'RankProgressPoints_slideUpIn_aa2f1644',
    };
var Pr = ((e) => ((e.Top = 'top'), (e.Bottom = 'bottom'), e))(Pr || {});
const jr = (e, a) => {
        const s = a > 0 ? (100 / a) * e + '%' : '0%';
        return e === a ? { left: s, transform: `translateX(-${Rr['--pointLineWidth']})` } : { left: s };
    },
    Cr = ({ step: s, divisionsCount: t, from: r, currentDivisionIndex: n, direction: i = 'bottom', className: o }) =>
        e.jsx('div', {
            className: a(Rr.base, Rr[`base__${i}`], o),
            children: N(t + 1, (i) => {
                const o = void 0 !== n && i === n + 1,
                    d = void 0 === r && (i === n || o);
                return e.jsxs(
                    'div',
                    {
                        className: Rr.point,
                        style: jr(i, t),
                        children: [
                            e.jsx('div', { className: a(Rr.pointLine, d && Rr.pointLine__extended) }),
                            void 0 !== r &&
                                e.jsx('div', {
                                    className: a(Rr.pointValue, o && Rr.pointValue__next),
                                    children: r + s * i,
                                }),
                        ],
                    },
                    i,
                );
            }),
        }),
    Nr = {
        base: 'RankProgress_ea8c22b5',
        base__hidden: 'RankProgress_base__hidden_9ddfcd45',
        base__inactive: 'RankProgress_base__inactive_60fd1626',
        base__active: 'RankProgress_base__active_c3cb6489',
        progressWrapper: 'RankProgress_progressWrapper_fe6a7e32',
        finishedProgress: 'RankProgress_finishedProgress_6c45aa82',
        fadeIn: 'RankProgress_fadeIn_821fcc6e',
        fadeInThreeQuarters: 'RankProgress_fadeInThreeQuarters_821fcc6e',
        fadeInHalf: 'RankProgress_fadeInHalf_821fcc6e',
        fadeOut: 'RankProgress_fadeOut_821fcc6e',
        fadeInWithScale: 'RankProgress_fadeInWithScale_821fcc6e',
        slideUp: 'RankProgress_slideUp_821fcc6e',
        scale: 'RankProgress_scale_821fcc6e',
        raysAppearance: 'RankProgress_raysAppearance_821fcc6e',
        rotate: 'RankProgress_rotate_821fcc6e',
        'reverse-rotate': 'RankProgress_reverse-rotate_821fcc6e',
        glowAppearance: 'RankProgress_glowAppearance_821fcc6e',
        highlightAppearance: 'RankProgress_highlightAppearance_821fcc6e',
        blink: 'RankProgress_blink_821fcc6e',
        slideUpIn: 'RankProgress_slideUpIn_821fcc6e',
    },
    Ir = {
        freezed: !0,
        withStack: !1,
        type: ee.Simple,
        delta: { duration: 0, delay: 0 },
        line: { duration: 0, delay: 0 },
    },
    yr = r(({ rank: s, state: t, itemIndex: r, from: n, to: i, progressState: o }) => {
        const { model: d } = Rt(),
            { currentScore: c } = d.root.get(),
            l = d.computes.divisionsConfig(r),
            _ = i - n,
            m = ((e, a, s) => Math.round((a - e) / s))(n, i, l.count);
        return e.jsxs('div', {
            className: a(Nr.base, Nr[`base__${o}`]),
            children: [
                e.jsx(kr, { itemIndex: r, rank: s, from: n, step: m }),
                e.jsx(Cr, {
                    step: m,
                    divisionsCount: l.count,
                    direction: Pr.Top,
                    currentDivisionIndex: l.currentDivisionIndex,
                }),
                e.jsx('div', {
                    className: Nr.progressWrapper,
                    children:
                        t === wt.Current
                            ? e.jsx(ha, { maxValue: _, value: c - n, animationSettings: Ir })
                            : e.jsx(ha, {
                                  maxValue: _,
                                  value: c < n ? 0 : _,
                                  disabled: c < n,
                                  className: Nr.finishedProgress,
                              }),
                }),
                e.jsx(Cr, { step: m, divisionsCount: l.count, from: n, currentDivisionIndex: l.currentDivisionIndex }),
            ],
        });
    }),
    Ar = 'RankStatusDescription_b553c8df',
    Tr = ({ text: s, binding: t, className: r }) => {
        const n = ((a) =>
            'number' == typeof (null == a ? void 0 : a.pointsCount)
                ? { ...a, pointsCount: e.jsx(m, { value: a.pointsCount }) }
                : a)(t);
        return e.jsx(D, { text: s, binding: n, classMix: a(Ar, r) });
    },
    Lr = 'AchievedRankStatus_232dd777',
    Br = ({ rank: a, rankState: s, itemIndex: t, from: r, to: n, progressState: i }) => {
        switch (a) {
            case Ye.First:
            case Ye.Second:
            case Ye.Third:
            case Ye.Fourth:
                return e.jsx(yr, { rank: a, state: s, itemIndex: t, from: r, to: n, progressState: i });
            case Ye.Fifth:
                return e.jsx('div', {
                    className: Lr,
                    children: e.jsx(Tr, {
                        text: ra(R.strings.comp7_ext.rankItemStatus.previous.description, a),
                        binding: { fromScore: r },
                    }),
                });
            default:
                return (console.warn(`Status for rank '${a}' was not mapped to any react component.`), null);
        }
    },
    Er = 'LastUpdate_c5b1de35',
    Dr = 'LastUpdate_dataUpdate_4273867c',
    Wr = ({ timestamp: s, className: t, isLastBestUserPointsValueLoading: r = !1 }) =>
        e.jsx('div', {
            className: a(Er, t),
            children: r
                ? e.jsx(U, { text: R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.update(), classMix: Dr })
                : e.jsx(mt, { timestamp: s }),
        }),
    Ur = (e, a) => e > 0 || a;
var Mr = ((e) => ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden'), e))(Mr || {});
const Qr = 'CurrentRankStatus_bb5b501f',
    zr = ({
        rank: a,
        rankState: t,
        itemIndex: r,
        from: n,
        to: i,
        progressState: o,
        topPercentage: d,
        pointsCount: c,
        isLastBestUserPointsValueLoading: l,
        timestamp: _,
    }) => {
        const m = { topPercentage: d, pointsCount: c };
        return (
            s.useEffect(() => {
                o === Mr.Active && u.sound(R.sounds.comp_7_progression_rank_active());
            }, [o]),
            e.jsx('div', {
                className: Qr,
                children: (() => {
                    switch (a) {
                        case Ye.First:
                        case Ye.Second:
                        case Ye.Third:
                        case Ye.Fourth:
                            return e.jsx(yr, { rank: a, state: t, itemIndex: r, from: n, to: i, progressState: o });
                        case Ye.Fifth:
                        case Ye.Sixth:
                            return e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Tr, {
                                        text: Ur(c, l)
                                            ? ra(R.strings.comp7_ext.rankItemStatus.current.extendedDescription, a)
                                            : ra(R.strings.comp7_ext.rankItemStatus.current.description, a),
                                        binding: m,
                                    }),
                                    e.jsx(Wr, { timestamp: _, isLastBestUserPointsValueLoading: l }),
                                ],
                            });
                        default:
                            return (
                                console.warn(`Status for rank '${a}' was not mapped to any react component.`),
                                null
                            );
                    }
                })(),
            })
        );
    },
    Hr = 'FutureRankStatus_6c8b6b5',
    Vr = 'FutureRankStatus_lock_acee5167',
    $r = [Ye.Sixth],
    Fr = ({
        rank: a,
        topPercentage: t,
        from: r,
        to: n,
        pointsCount: i,
        isLastBestUserPointsValueLoading: o,
        timestamp: d,
    }) => {
        const c = s.useMemo(
                () =>
                    a === Ye.Sixth
                        ? { topPercentage: t, pointsCount: i }
                        : a === Ye.Fifth
                          ? { fromScore: r }
                          : { fromScore: r, toScore: n },
                [t, i, r, n, a],
            ),
            l = $r.includes(a) && Ur(i, o);
        return e.jsxs('div', {
            className: Hr,
            children: [
                e.jsx('div', { className: Vr }),
                e.jsx(Tr, {
                    text: ra(
                        l
                            ? R.strings.comp7_ext.rankItemStatus.future.extendedDescription
                            : R.strings.comp7_ext.rankItemStatus.future.description,
                        a,
                    ),
                    binding: c,
                }),
                l && e.jsx(Wr, { timestamp: d, isLastBestUserPointsValueLoading: o }),
            ],
        });
    },
    qr = ({
        rankState: a,
        rank: s,
        itemIndex: t,
        from: r,
        to: n,
        progressState: i,
        pointsCount: o,
        isLastBestUserPointsValueLoading: d,
        topPercentage: c,
        timestamp: l,
    }) => {
        switch (a) {
            case wt.Previous:
                return e.jsx(Br, { rank: s, rankState: a, itemIndex: t, from: r, to: n, progressState: i });
            case wt.Current:
                return e.jsx(zr, {
                    rank: s,
                    rankState: a,
                    itemIndex: t,
                    from: r,
                    to: n,
                    progressState: i,
                    pointsCount: o,
                    isLastBestUserPointsValueLoading: d,
                    topPercentage: c,
                    timestamp: l,
                });
            case wt.Future:
                return e.jsx(Fr, {
                    rank: s,
                    topPercentage: c,
                    from: r,
                    to: n,
                    pointsCount: o,
                    isLastBestUserPointsValueLoading: d,
                    timestamp: l,
                });
            default:
                return (console.error(`Unreachable code for state '${a}' in RankStatusResolver.`), null);
        }
    },
    Or = {
        base: 'RankItem_9bf8d104',
        rankEmblemContainer: 'RankItem_rankEmblemContainer_c035dc36',
        glowContainer: 'RankItem_glowContainer_4543ed62',
        glow: 'RankItem_glow_6c9b62fe',
        rankEmblemContainer__future: 'RankItem_rankEmblemContainer__future_f8555db3',
        rankEmblem: 'RankItem_rankEmblem_5c709472',
        rankDescription: 'RankItem_rankDescription_576a11cb',
        fadeOut: 'RankItem_fadeOut_f8555db3',
        rankDescription__text: 'RankItem_rankDescription__text_f660f169',
        rankDescription__progress: 'RankItem_rankDescription__progress_6ed66068',
        rankDescription__viewed: 'RankItem_rankDescription__viewed_a7910a61',
        fadeIn: 'RankItem_fadeIn_f8555db3',
        rankInfo: 'RankItem_rankInfo_b2883ef4',
        dividerContainer: 'RankItem_dividerContainer_dc978367',
        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_f8555db3',
        fadeInHalf: 'RankItem_fadeInHalf_f8555db3',
        fadeInWithScale: 'RankItem_fadeInWithScale_f8555db3',
        slideUp: 'RankItem_slideUp_f8555db3',
        scale: 'RankItem_scale_f8555db3',
        raysAppearance: 'RankItem_raysAppearance_f8555db3',
        rotate: 'RankItem_rotate_f8555db3',
        'reverse-rotate': 'RankItem_reverse-rotate_f8555db3',
        glowAppearance: 'RankItem_glowAppearance_f8555db3',
        highlightAppearance: 'RankItem_highlightAppearance_f8555db3',
        blink: 'RankItem_blink_f8555db3',
        slideUpIn: 'RankItem_slideUpIn_f8555db3',
    },
    Yr = r(({ itemIndex: s, isViewed: t, hasDivider: r = !0 }) => {
        const { model: n } = Rt(),
            { model: i } = Fe(),
            {
                topPercentage: o,
                lastBestUserPointsValue: d,
                leaderboardUpdateTimestamp: c,
                isLastBestUserPointsValueLoading: l,
            } = n.root.get(),
            { mediaSize: _ } = h(),
            { rank: m, from: u, to: p } = n.computes.item(s),
            f = n.computes.divisionsConfig(s),
            { state: b, division: x, hasInfo: v } = n.computes.rankSettings(s),
            S = ((e) => {
                switch (!0) {
                    case e >= g.ExtraLarge:
                        return ea.x420;
                    case e >= g.Large:
                        return ea.x320;
                    case e >= g.Medium:
                        return ea.x260;
                    default:
                        return ea.x200;
                }
            })(_),
            w = ((e, a) => (a ? (e === wt.Current ? Mr.Active : Mr.Inactive) : Mr.Hidden))(b, t),
            k = ((e, a) => {
                const s = aa(a);
                switch (e) {
                    case wt.Previous:
                    case wt.Current:
                        return s ? 'progress' : 'text';
                    default:
                        return 'text';
                }
            })(b, m);
        return e.jsxs('div', {
            className: Or.base,
            children: [
                e.jsxs(Js, {
                    rank: m,
                    from: u,
                    to: p,
                    topPercentage: o,
                    divisions: f.list,
                    className: a(Or.rankEmblemContainer, Or[`rankEmblemContainer__${b}`]),
                    children: [
                        b === wt.Current && e.jsx(_a, { className: Or.glowContainer, classNames: { glow: Or.glow } }),
                        e.jsx(Ze, {
                            seasonName: i.season.name.get(),
                            size: S,
                            rank: m,
                            division: x,
                            className: Or.rankEmblem,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: a(Or.rankDescription, Or[`rankDescription__${k}`], t && Or.rankDescription__viewed),
                    children: [
                        v &&
                            e.jsx('div', {
                                className: Or.rankInfo,
                                children: e.jsx(or, { rank: m, from: u, topPercentage: o }),
                            }),
                        e.jsx(qr, {
                            rankState: b,
                            rank: m,
                            itemIndex: s,
                            from: u,
                            to: p,
                            progressState: w,
                            pointsCount: d,
                            isLastBestUserPointsValueLoading: l,
                            topPercentage: o,
                            timestamp: c,
                        }),
                    ],
                }),
                r &&
                    e.jsx('div', {
                        className: Or.dividerContainer,
                        style: { '--emblemSize': `${S}rem` },
                        children: e.jsx(cr, {}),
                    }),
            ],
        });
    }),
    Gr = 'RankItemContainer_e5ab1f7a',
    Xr = 'RankItemContainer_title_10e820a0',
    Kr = 'RankItemContainer_title__active_f6e74656',
    Jr = r(({ itemIndex: s, itemWidth: t, isViewed: r, onMouseDown: n, hasDivider: i }) => {
        const { model: o } = Rt(),
            d = o.computes.item(s);
        return e.jsxs('div', {
            className: Gr,
            style: { '--itemWidth': `${t}rem` },
            onMouseDown: n,
            children: [
                e.jsx('div', { className: a(Xr, r && Kr), children: ta(d.rank) }),
                e.jsx(Yr, { itemIndex: s, isViewed: r, hasDivider: i }),
            ],
        });
    }),
    Zr = 'Progression_3ba24e0d',
    en = {
        base: 'Progression_areaContainer_9f4387a7',
        wrapper: 'Progression_areaWrapper_a0f4f242',
        content: 'Progression_areaContent_d38bb4ff',
    },
    an = { base: 'Progression_bar_618bc509' },
    sn = r(({ staticContent: t, className: r }) => {
        const { model: n } = Rt(),
            { currentItemIndex: i } = n.root.get(),
            o = n.items.get().length,
            { mediaSize: d } = h(),
            c = ((e) => (e >= g.ExtraLarge ? 640 : e >= g.Large ? 500 : e >= g.Medium ? 440 : 400))(d),
            l = ar(c),
            _ = sr(c),
            [m, p] = s.useState(i),
            f = s.useCallback(
                (e) => () => {
                    (u.click(), p(e));
                },
                [],
            );
        return (
            s.useLayoutEffect(() => {
                _.scrollPosition.start({ scrollPosition: L(i * c), immediate: !0 });
            }, []),
            s.useLayoutEffect(() => {
                p(i);
            }, [i]),
            e.jsx(tr, {
                api: _,
                stuckIndex: m,
                itemWidth: c,
                itemsOffset: l,
                staticContent: t,
                onStick: p,
                className: a(Zr, r),
                areaClassNames: en,
                barClassNames: an,
                children: N(o, (a) =>
                    e.jsx(
                        Jr,
                        { itemIndex: a, isViewed: m === a, hasDivider: a < o - 1, itemWidth: c, onMouseDown: f(a) },
                        a,
                    ),
                ),
            })
        );
    }),
    tn = { hasHtmlContent: !0 },
    rn = ({ maxBattlesCount: a, children: s }) =>
        e.jsx(_, {
            header: R.strings.comp7_ext.qualification.conditionTooltip.header(),
            body: W(R.strings.comp7_ext.qualification.conditionTooltip.body(a), { maxBattlesCount: a }),
            args: tn,
            children: e.jsx('div', { children: s }),
        }),
    nn = 'BattlesCounter_5f193124',
    on = 'BattlesCounter_battlesCount_73d2731e',
    dn = 'BattlesCounter_battlesDivider_7dbb3a33',
    cn = ({ battlesCount: s, maxBattlesCount: t, className: r }) =>
        e.jsx(U, {
            text: R.strings.comp7_ext.qualification.counter(),
            binding: {
                battlesCount: e.jsx('div', { className: on, children: s }),
                divider: e.jsx('div', { className: dn, children: '/' }),
                maxBattlesCount: t,
            },
            classMix: a(nn, r),
        }),
    ln = r(({ index: a, className: s }) => {
        const { model: t } = Rt(),
            { mediaSize: r } = h(),
            n = t.computes.qualificationBattle(a);
        return e.jsx(fa, { state: n.state, className: s, size: r >= g.ExtraLarge ? 'x234' : 'x173' }, a);
    }),
    _n = 'BattlesProgression_c0296cbd',
    mn = 'BattlesProgression_item_e40a305e',
    un = r(({ className: s }) => {
        const { model: t } = Rt();
        return e.jsx('div', {
            className: a(_n, s),
            children: N(t.qualificationBattles.get().length, (a) => e.jsx(ln, { index: a, className: mn }, a)),
        });
    }),
    pn = (e) => {
        switch (!0) {
            case e >= g.ExtraLarge:
                return ea.x600;
            case e >= g.Large:
                return ea.x420;
            case e >= g.Medium:
                return ea.x260;
            default:
                return ea.x200;
        }
    },
    hn = 'Qualification_8f910914',
    gn = 'Qualification_content_8a6d7d92',
    fn = 'Qualification_footer_143b827d',
    bn = 'Qualification_qualificationEmblemContainer_dbf79dc7',
    xn = 'Qualification_glowContainer_3a05eb3',
    vn = 'Qualification_glow_8e19a98c',
    Sn = 'Qualification_qualificationEmblem_a7436cbb',
    wn = 'Qualification_battlesProgression_d6ca81d2',
    kn = 'Qualification_counterDescription_7f2dd37b',
    Rn = 'Qualification_ratingCalculationDescription_7d2ba061',
    Pn = 'Qualification_timerIcon_b77227aa',
    jn = 'Qualification_conditionContainer_3d81a257',
    Cn = 'Qualification_condition_1f31ad6a',
    Nn = 'Qualification_rewardsDescription_1d74932c',
    In = 'Qualification_infoIcon_139d9dc7',
    yn = 'Qualification_rewardsButton_7672a5e',
    An = 'Qualification_buttonContent_9ef49ca6',
    Tn = 'Qualification_waiting_8e273156';
function Ln(e) {
    return e >= g.Large ? k.sizes.small : k.sizes.extraSmall;
}
const Bn = r(({ className: s }) => {
        const { model: t, controls: r } = Rt(),
            { model: n } = Fe(),
            { mediaSize: i } = h(),
            c = t.qualificationModel.battlesCount.get(),
            l = t.qualificationModel.maxBattlesCount.get(),
            m = t.qualificationModel.isRatingCalculation.get(),
            p = t.isParallaxPreloaded.get(),
            g = o({
                from: { opacity: 0 },
                to: Ua() ? { opacity: p ? 1 : 0 } : { opacity: 1 },
                delay: 300,
                config: { duration: 300 },
            });
        return Ua() && !p
            ? e.jsx('div', { className: Tn, children: e.jsx(z, {}) })
            : e.jsxs(d.div, {
                  style: g,
                  className: a(hn, s),
                  children: [
                      e.jsxs('div', {
                          className: gn,
                          children: [
                              e.jsxs('div', {
                                  className: bn,
                                  children: [
                                      e.jsx(_a, { className: xn, classNames: { glow: vn } }),
                                      e.jsx(ga, { size: pn(i), seasonName: n.season.name.get(), className: Sn }),
                                  ],
                              }),
                              e.jsx(cn, { battlesCount: c, maxBattlesCount: l }),
                              m
                                  ? e.jsx(_, {
                                        body: R.strings.comp7_ext.qualification.ratingCalculationTooltip(),
                                        children: e.jsx('div', {
                                            children: e.jsx(U, {
                                                text: R.strings.comp7_ext.qualification.ratingCalculationDescription(),
                                                binding: { timerIcon: e.jsx('div', { className: Pn }) },
                                                classMix: Rn,
                                            }),
                                        }),
                                    })
                                  : e.jsx(D, {
                                        text: R.strings.comp7_ext.qualification.counterWithDescription(),
                                        classMix: kn,
                                    }),
                              e.jsx(un, { className: wn }),
                          ],
                      }),
                      e.jsxs('div', {
                          className: fn,
                          children: [
                              e.jsxs('div', {
                                  className: jn,
                                  children: [
                                      e.jsx(D, {
                                          text: R.strings.comp7_ext.qualification.condition(l),
                                          classMix: Cn,
                                          binding: { maxBattlesCount: l },
                                      }),
                                      e.jsx(rn, { maxBattlesCount: l, children: e.jsx('div', { className: In }) }),
                                  ],
                              }),
                              e.jsx(U, { text: R.strings.comp7_ext.qualification.rewardsDescription(), classMix: Nn }),
                              e.jsx(k, {
                                  classNames: { base: yn, content: An },
                                  theme: k.themes.secondary,
                                  onMouseEnter: () => {
                                      (r.setRewardLayerVisible(!0), u.sound('comp_7_rank_rewards_hover'));
                                  },
                                  onMouseLeave: () => r.setRewardLayerVisible(!1),
                                  size: Ln(i),
                                  onClick: r.goToRankRewardsPage,
                                  silent: !0,
                                  children: R.strings.comp7_ext.qualification.rewardsButton(),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    En = 'ProgressionPage_abde0f3e',
    Dn = 'ProgressionPage_scheduleSubheading_f92469b5',
    Wn = 'ProgressionPage_parallaxContainer_f5c5fb63',
    Un = 'ProgressionPage_contentWrapper_eb02b9a7',
    Mn = 'ProgressionPage_content_f7a37594',
    Qn = 'ProgressionPage_content__progression_cfa37aa6',
    zn = 'ProgressionPage_footer_727fa835',
    Hn = r(() => {
        const { model: s } = Rt(),
            t = s.qualificationModel.isActive.get(),
            r = o(Ke);
        return e.jsxs('div', {
            className: En,
            'data-test-id': 'progression-page',
            children: [
                Ua() && t && e.jsx(Xt, { className: Wn }),
                e.jsx(oa, { className: Dn }),
                t
                    ? e.jsx('div', { className: Un, children: e.jsx(Bn, { className: Mn }) })
                    : e.jsx(d.div, {
                          style: r,
                          className: Un,
                          children: e.jsx(sn, { className: a(Mn, Qn), staticContent: e.jsx(Qt, { className: zn }) }),
                      }),
            ],
        });
    }),
    [Vn, $n] = b()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), qualification: e.primitives(['isActive'], 'qualificationModel') },
                s = e.array('items'),
                r = t(() => s.get().length),
                i = t(
                    (e) => {
                        const a = w(s.get(), e);
                        if (!a) throw new Error(`rank rewards item with index ${e} was not found`);
                        const { hasRewardsReceived: t, rank: r, from: n, to: i } = a;
                        return { hasRewardsReceived: t, rank: r, from: n, to: i };
                    },
                    { equals: x },
                ),
                o = t(
                    (e) => {
                        const a = w(s.get(), e);
                        if (!a) throw new Error(`rank rewards item with index ${e} was not found`);
                        return v(a.rewards, (e) => ({ ...e }));
                    },
                    { equals: x },
                ),
                d = t(
                    (e) => {
                        const a = w(o(e), 0);
                        if (!a) throw new Error(`rank rewards item with index ${e} has no any main reward at index: 0`);
                        return a;
                    },
                    { equals: x },
                ),
                c = t((e) => [...ae(o(e), 1)], { equals: x }),
                l = t((e) => {
                    const a = w(s.get(), e);
                    if (!a) throw new Error(`item with index ${e} was not found`);
                    const t = v(a.divisions, (e) => ({ ...e }));
                    return vt(t);
                }),
                _ = t((e) => !a.qualification.isActive.get() && e === a.root.get().currentItemIndex),
                m = t(
                    () => ({
                        nextNotAchievedItemIndex: H(s.get(), (e) => !e.hasRewardsReceived) ?? r(),
                        hasForceScroll: -1 !== a.root.get().initialItemIndex,
                    }),
                    { equals: n.shallow },
                );
            return {
                ...a,
                computes: {
                    rankRewardsItemsLength: r,
                    rankRewardsItem: i,
                    mainReward: d,
                    additionalRewards: c,
                    additionalRewardsCount: t((e) => c(e).length),
                    divisionsString: l,
                    isCurrentRank: _,
                    scrollingSettings: m,
                },
            };
        },
        ({ externalModel: e, model: a }) => {
            const s = e.createCallback((e, a) => ({ rank: e, index: a }), 'onPreviewOpen');
            return {
                goToPreview: l((e, t) => {
                    const r = a.computes.rankRewardsItem(e).rank;
                    s(r, t);
                }),
            };
        },
    ),
    Fn = (e, a) => (e > a ? a - 1 : void 0),
    qn = 'AdditionalRewards_reward_793c62bc',
    On = 'AdditionalRewards_vehiclesRentBase_20861c60',
    Yn = 'AdditionalRewards_vehiclesRentLabel_bed51da4',
    Gn = se.Small,
    Xn = r(({ rank: s, itemIndex: t, visibleRewardsCount: r, className: n }) => {
        const { model: i } = $n(),
            o = i.computes.additionalRewards(t),
            d = i.computes.additionalRewardsCount(t),
            c = v(o, (e) => {
                const t = 'vehicles_rent' === e.name;
                return {
                    ...ba({ reward: e, size: Gn, rank: s }),
                    className: a(t && On),
                    classNames: { info: a(t && Yn) },
                };
            });
        return e.jsx(te, {
            data: c,
            size: Gn,
            count: Fn(d, r),
            rewardItemClassMix: qn,
            boxRewardTooltip: {
                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                args: { fromIndex: r, rank: s },
            },
            classMix: n,
        });
    });
var Kn = ((e) => (
    (e[(e.NotStarted = 0)] = 'NotStarted'),
    (e[(e.Active = 1)] = 'Active'),
    (e[(e.OffSeason = 3)] = 'OffSeason'),
    (e[(e.Finished = 4)] = 'Finished'),
    e
))(Kn || {});
const Jn = {
        base: 'Heading_93b0c1e7',
        rankEmblemContainer: 'Heading_rankEmblemContainer_fe6484a4',
        godRays: 'Heading_godRays_170abada',
        rankEmblem__inactive: 'Heading_rankEmblem__inactive_df04c1d1',
        lock: 'Heading_lock_8c7ecce7',
        description: 'Heading_description_f5763105',
        rankName: 'Heading_rankName_c505c75',
        rankStatus: 'Heading_rankStatus_364e575b',
    },
    Zn = (e) => {
        switch (e) {
            case Kn.OffSeason:
            case Kn.Finished:
                return R.strings.comp7_ext.rank.achieved();
            case Kn.Active:
                return R.strings.comp7_ext.rank.current();
            default:
                return '';
        }
    },
    ei = r(({ index: s, rankEmblemSize: t }) => {
        const { model: r } = $n(),
            { model: n } = Fe(),
            { topPercentage: i } = r.root.get(),
            { rank: o, from: d, to: c, hasRewardsReceived: l } = r.computes.rankRewardsItem(s),
            _ = r.computes.divisionsString(s),
            m = r.computes.isCurrentRank(s);
        return e.jsxs('div', {
            className: Jn.base,
            children: [
                e.jsxs(Js, {
                    rank: o,
                    from: d,
                    to: c,
                    topPercentage: i,
                    divisions: _,
                    className: Jn.rankEmblemContainer,
                    ignoreShowDelay: !0,
                    children: [
                        m &&
                            e.jsx(re, {
                                className: Jn.godRays,
                                src: String(R.videos.comp7.godRaysNew_130x130()),
                                autoplay: !0,
                                loop: !0,
                            }),
                        e.jsx(Ze, {
                            seasonName: n.season.name.get(),
                            size: t,
                            rank: o,
                            className: a(Jn.rankEmblem, !l && Jn.rankEmblem__inactive),
                        }),
                        !l && e.jsx('div', { className: Jn.lock }),
                    ],
                }),
                e.jsxs('div', {
                    className: Jn.description,
                    children: [
                        e.jsx('div', { className: Jn.rankName, children: ta(o) }),
                        m && e.jsx('div', { className: Jn.rankStatus, children: Zn(n.year.state.get()) }),
                    ],
                }),
            ],
        });
    }),
    ai = (e) => 'styleProgress' === e.name,
    si = 'MainReward_de250efb',
    ti = 'MainReward_imageContainer_20c097c',
    ri = 'MainReward_glowContainer_570aee25',
    ni = 'MainReward_glow_aa880e51',
    ii = 'MainReward_preview_f2a964a3',
    oi = 'MainReward_info_dc048bbb',
    di = 'MainReward_title_7cbb5d41',
    ci = 'MainReward_subTitle_247ccde3',
    li = r(({ index: s, rank: t, size: r, hasHighlight: n, onPreviewClick: i, className: o }) => {
        const { model: d } = $n(),
            c = d.computes.mainReward(s);
        return e.jsxs('div', {
            className: a(si, o),
            children: [
                e.jsxs('div', {
                    className: ti,
                    children: [
                        n && e.jsx(_a, { className: ri, classNames: { glow: ni } }),
                        e.jsx(ne, { ...ba({ reward: c, size: r, rank: t }) }),
                        ai(c) &&
                            e.jsx('div', {
                                className: ii,
                                children: e.jsx(ie, {
                                    type: 'preview',
                                    onClick: i,
                                    children: R.strings.comp7_ext.rewards.preview(),
                                }),
                            }),
                    ],
                }),
                e.jsxs('div', {
                    className: oi,
                    children: [
                        e.jsx('div', { className: di, children: c.label }),
                        e.jsx(oe, {
                            text: String(R.strings.comp7_ext.rewards.subtitle.$dyn(c.name)),
                            params: { vehicleLevel: de(10) },
                            className: ci,
                            upgradeLegacy: !0,
                            split: !0,
                        }),
                    ],
                }),
            ],
        });
    }),
    _i = 'RankRewardsItem_97feb95e',
    mi = 'RankRewardsItem_mainRewardContainer_85d98e1d',
    ui = 'RankRewardsItem_rewardsContainer_aa9fb54',
    pi = 'RankRewardsItem_statusContainer_32c29dc9',
    hi = 'RankRewardsItem_statusContainer__hidden_1627e91e',
    gi = 'RankRewardsItem_icon_c6768aea',
    fi = r(
        ({
            itemIndex: s,
            itemWidth: t,
            mainRewardSize: r,
            hasHighlight: n,
            visibleRewardsCount: i,
            rankEmblemSize: o,
            onPreviewClick: d,
        }) => {
            const { model: c } = $n(),
                { rank: l, hasRewardsReceived: _ } = c.computes.rankRewardsItem(s);
            return e.jsxs('div', {
                className: _i,
                style: { '--itemWidth': `${t}rem` },
                children: [
                    e.jsx(ei, { index: s, rankEmblemSize: o }),
                    e.jsx(li, { index: s, rank: l, size: r, hasHighlight: n, onPreviewClick: d, className: mi }),
                    e.jsx('div', {
                        className: ui,
                        children: e.jsx(Xn, { itemIndex: s, visibleRewardsCount: i, rank: l }),
                    }),
                    e.jsxs('div', {
                        className: a(pi, !_ && hi),
                        children: [e.jsx('div', { className: gi }), R.strings.comp7_ext.rewards.status.achieved()],
                    }),
                ],
            });
        },
    ),
    bi = (e) => (e >= g.Large ? ea.x110 : e >= g.Medium ? ea.x64 : ea.x48),
    xi = (e) =>
        e >= g.ExtraLarge ? se.S600x450 : e >= g.Large ? se.S400x300 : e >= g.Medium ? se.S296x222 : se.S232x174,
    vi = (e) => (e >= ce.Medium ? 5 : 4),
    Si = 'RankRewardsPage_966eba9d',
    wi = 'RankRewardsPage_content_470e75a1',
    ki = 'RankRewardsPage_scrollContainer_22b6e09b',
    Ri = 'RankRewardsPage_areaContainer_ca7d8c25',
    Pi = 'RankRewardsPage_areaWrapper_d63bb593',
    ji = 'RankRewardsPage_bar_4df7da7f',
    Ci = { duration: 700, easing: (e) => Math.pow(e, 4) },
    Ni = r(() => {
        const { mediaSize: a, mediaWidth: t } = h(),
            { model: r, controls: n } = $n(),
            { initialItemIndex: i } = r.root.get(),
            c = r.computes.rankRewardsItemsLength(),
            { nextNotAchievedItemIndex: l, hasForceScroll: _ } = r.computes.scrollingSettings(),
            [m, p] = s.useState(_ ? 'idle' : 'initial'),
            [f, b] = s.useState(_ ? i : l),
            x = ((e) =>
                e >= g.ExtraLarge ? 600 : e >= g.Large ? 460 : e >= g.Medium ? 400 : e >= g.Small ? 340 : 300)(a),
            v = c * x,
            S = sr(x),
            { scrollPosition: w, clampPosition: k, contentRef: R } = S,
            P = le();
        (s.useLayoutEffect(() => {
            'idle' === m
                ? w.start({ scrollPosition: L(i * x), immediate: !0 })
                : 'initial' === m && w.start({ scrollPosition: L(v), immediate: !0 });
        }, []),
            s.useEffect(
                () =>
                    T(() => {
                        const e = R.current;
                        if (e && 'initial' === m) {
                            const a = k(e, L(l * x)),
                                s = k(e, L(v));
                            if (a === s) return void p('idle');
                            w.start({
                                scrollPosition: a,
                                from: { scrollPosition: s },
                                config: Ci,
                                onStart: () => {
                                    (p('scrolling'), u.sound('comp_7_rank_rewards_enter'));
                                },
                                onRest: () => {
                                    P.current || p('idle');
                                },
                            });
                        }
                    }),
                [k, R, P, x, l, m, v, w],
            ));
        const j = (e) => 'idle' === m && e === l,
            C = o(Ke);
        return e.jsxs('div', {
            className: Si,
            'data-test-id': 'rank-rewards-page',
            children: [
                e.jsx(oa, {}),
                e.jsx(d.div, {
                    className: wi,
                    style: C,
                    children: e.jsx(tr, {
                        api: S,
                        stuckIndex: f,
                        itemWidth: x,
                        itemsOffset: ar(x),
                        onStick: b,
                        className: ki,
                        areaClassNames: { base: Ri, wrapper: Pi },
                        barClassNames: { base: ji },
                        children: N(c, (s) =>
                            e.jsx(
                                fi,
                                {
                                    itemIndex: s,
                                    visibleRewardsCount: vi(t),
                                    rankEmblemSize: bi(a),
                                    mainRewardSize: xi(a),
                                    itemWidth: x,
                                    hasHighlight: j(s),
                                    onPreviewClick: () => n.goToPreview(s, f),
                                },
                                s,
                            ),
                        ),
                    }),
                }),
            ],
        });
    });
var Ii = ((e) => ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e))(
    Ii || {},
);
const yi = [va.Locked, va.ReadyToPurchase],
    Ai = [Sa.Vehicle, Sa.Style3d],
    [Ti, Li] = b()(
        ({ observableModel: e, mode: a }) => {
            const s = e.array('rankDiscounts'),
                r = e.array('products'),
                i = { root: e.object() },
                o = t(
                    () =>
                        v(r.get(), (e) => ({
                            ...e,
                            price: { ...e.price },
                            ...('vehicleInfo' in e && { vehicleInfo: { ...e.vehicleInfo } }),
                            ...('reward' in e && { reward: { ...e.reward } }),
                        })),
                    { equals: x },
                ),
                d = t(
                    (e) => {
                        const a = w(o(), e);
                        if (!a) throw new Error(`product with index ${e} is not found`);
                        return a;
                    },
                    { equals: x },
                ),
                c = t(
                    () => {
                        const e = new Set(),
                            a = _e(
                                o(),
                                (a, s, t) => {
                                    const r = s.rank,
                                        n = a.get(r);
                                    return void 0 === n ? (0 !== t && e.add(t), a.set(r, 1)) : a.set(r, n + 1);
                                },
                                new Map(),
                            );
                        return { recordsArray: Array.from(a.entries()), groupIndexesSet: e };
                    },
                    { equals: x },
                ),
                l = t(
                    (e) => {
                        const a = d(e);
                        return {
                            hasDiscount: a.state === va.ReadyToPurchase && a.price.discountValue > 0,
                            isEnough: !yi.includes(a.state) || a.price.isEnough,
                        };
                    },
                    { equals: n.shallow },
                ),
                _ = t(() => {
                    const e = i.root.get().selectedProductId,
                        a = H(o(), (a) => a.id === e);
                    if (void 0 === a) throw new Error(`selectedProductId: ${e} is not found in products array`);
                    return a;
                }),
                m = t(
                    () => {
                        const e = _(),
                            a = d(e);
                        if (!a) throw new Error(`product with selected index ${e} is not found in products array`);
                        return a;
                    },
                    { equals: x },
                ),
                u = t(() => i.root.get().shopState === Ii.Success && m().type !== Sa.Reward),
                p = t(() => {
                    const e = m();
                    return e.type === Sa.Vehicle && e.state !== va.ReadyToRestore && e.description;
                }),
                h = t(() => m().type === Sa.Reward),
                g = t(
                    () => {
                        const e = m(),
                            a = e.type === Sa.Vehicle && e.state !== va.Purchased;
                        return {
                            hasControls: Ai.includes(e.type),
                            hasAddToCompare: e.type === Sa.Vehicle,
                            hasPreview: a || e.type === Sa.Style3d,
                        };
                    },
                    { equals: n.shallow },
                ),
                f = t(() => v(s.get(), (e) => ({ ...e, divisions: vt(v(e.divisions, (e) => ({ ...e }))) })), {
                    equals: x,
                }),
                b = t(
                    (e) => {
                        const a = w(f(), e);
                        if (!a) throw new Error(`rank discount with index ${e} is not found`);
                        return a;
                    },
                    { equals: x },
                );
            return {
                ...i,
                computes: {
                    productsLength: t(() => o().length),
                    rankDiscountsLength: t(() => f().length),
                    product: d,
                    productsDividersConfig: c,
                    priceConfig: l,
                    selectedProductIndex: _,
                    selectedProduct: m,
                    hasSceneWrapper: u,
                    hasVehicleDescription: p,
                    hasLimitedQuantity: h,
                    controlsConfig: g,
                    rankDiscount: b,
                },
                ...('mocks' === a && { internal: { rankDiscounts: s, computes: { products: o } } }),
            };
        },
        ({ externalModel: e }) => ({
            markProductSeen: e.createCallback((e) => ({ cd: e }), 'onProductSeen'),
            selectProduct: e.createCallback((e) => ({ cd: e }), 'onProductSelect'),
            purchase: e.createCallbackNoArgs('onProductPurchase'),
            restore: e.createCallbackNoArgs('onProductRestore'),
            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
            goToPreview: e.createCallbackNoArgs('onGoToPreview'),
            goToCustomization: e.createCallbackNoArgs('onGoToCustomization'),
            addToVehicleCompare: e.createCallbackNoArgs('onAddToVehicleCompare'),
            mouseOver3dScene: e.createCallback(({ isOver3dScene: e }) => ({ isOver3dScene: e }), 'onMouseOver3dScene'),
            moveSpace: e.createCallback(({ dx: e, dy: a, dz: s }) => ({ dx: e, dy: a, dz: s }), 'onMoveSpace'),
        }),
    ),
    Bi = {
        base: 'CarouselScroll_77332728',
        areaWrapper: 'CarouselScroll_areaWrapper_98a35119',
        areaWrapper__hasScroll: 'CarouselScroll_areaWrapper__hasScroll_60e49834',
        areaContent: 'CarouselScroll_areaContent_7b8573',
        arrow: 'CarouselScroll_arrow_ab55ce86',
        arrow__prev: 'CarouselScroll_arrow__prev_ff2dcb3b',
        arrow__next: 'CarouselScroll_arrow__next_6aaebc59',
        arrow__hidden: 'CarouselScroll_arrow__hidden_946c2a1c',
        fadeIn: 'CarouselScroll_fadeIn_57c79593',
        fadeInThreeQuarters: 'CarouselScroll_fadeInThreeQuarters_57c79593',
        fadeInHalf: 'CarouselScroll_fadeInHalf_57c79593',
        fadeOut: 'CarouselScroll_fadeOut_57c79593',
        fadeInWithScale: 'CarouselScroll_fadeInWithScale_57c79593',
        slideUp: 'CarouselScroll_slideUp_57c79593',
        scale: 'CarouselScroll_scale_57c79593',
        raysAppearance: 'CarouselScroll_raysAppearance_57c79593',
        rotate: 'CarouselScroll_rotate_57c79593',
        'reverse-rotate': 'CarouselScroll_reverse-rotate_57c79593',
        glowAppearance: 'CarouselScroll_glowAppearance_57c79593',
        highlightAppearance: 'CarouselScroll_highlightAppearance_57c79593',
        blink: 'CarouselScroll_blink_57c79593',
        slideUpIn: 'CarouselScroll_slideUpIn_57c79593',
    },
    Ei = ({ className: t, classNames: r, children: n }) => {
        const { api: i } = q(),
            {
                events: o,
                getBounds: d,
                getWrapperSize: c,
                getContainerSize: l,
                applyStepTo: _,
                animationScroll: { scrollPosition: m },
            } = i,
            p = s.useRef(null),
            [h, g] = s.useState('visible'),
            f = me();
        O(i);
        const b = ue(() => {
                f.run(() => {
                    const [e, a] = d(),
                        s = c(),
                        t = l();
                    if (s && t)
                        return t <= s
                            ? g('hidden')
                            : m.goal === e
                              ? g('prevDisabled')
                              : m.goal === a
                                ? g('nextDisabled')
                                : g('visible');
                });
            }),
            [x, v] = pe((e) => _(e), 150, [_]),
            S = s.useCallback(
                (e) => () => {
                    const a = e === he.Next && 'prevDisabled' === h,
                        s = e === he.Prev && 'nextDisabled' === h;
                    a || s || (u.click(), x(e));
                },
                [h, x],
            );
        return (
            ge(() => {
                b();
            }),
            fe(() => {
                b();
            }, [b]),
            s.useEffect(() => {
                const e = be(200, b);
                return (o.on('change', e), () => o.off('change', e));
            }, [o, b]),
            s.useEffect(
                () => (
                    document.addEventListener('mouseup', v, !0),
                    () => document.removeEventListener('mouseup', v, !0)
                ),
                [v],
            ),
            e.jsxs('div', {
                className: a(Bi.base, t),
                ref: p,
                children: [
                    e.jsx(Y, {
                        classNames: {
                            wrapper: a(
                                Bi.areaWrapper,
                                null == r ? void 0 : r.areaWrapper,
                                'hidden' !== h && Bi.areaWrapper__hasScroll,
                            ),
                            content: a(Bi.areaContent, null == r ? void 0 : r.areaContent),
                        },
                        children: n,
                    }),
                    e.jsx(ka, {
                        size: 'small',
                        direction: 'left',
                        disabled: 'prevDisabled' === h,
                        className: a(Bi.arrow, Bi.arrow__prev, Bi[`arrow__${h}`]),
                        onMouseEnter: 'prevDisabled' === h ? void 0 : u.highlight,
                        onMouseDown: S(he.Next),
                        onMouseUp: v,
                    }),
                    e.jsx(ka, {
                        size: 'small',
                        direction: 'right',
                        disabled: 'nextDisabled' === h,
                        className: a(Bi.arrow, Bi.arrow__next, Bi[`arrow__${h}`]),
                        onMouseEnter: 'nextDisabled' === h ? void 0 : u.highlight,
                        onMouseDown: S(he.Prev),
                        onMouseUp: v,
                    }),
                ],
            })
        );
    },
    Di = 'ProductCardImage_e1f40b93',
    Wi = R.images.comp7.gui.maps.icons.products,
    Ui = r(({ index: s, className: t }) => {
        const { model: r } = Li(),
            n = r.computes.product(s);
        return e.jsx('div', { className: a(Di, t), style: { backgroundImage: `url('${Wi.$num(n.id)}')` } });
    }),
    Mi = 'ProductCardName_ce866ed9',
    Qi = 'ProductCardName_vehicleName_a1701a73',
    zi = 'ProductCardName_nation_e06370d7',
    Hi = 'ProductCardName_style3dContainer_59247316',
    Vi = 'ProductCardName_overflowedName_8c3f6093',
    $i = 'ProductCardName_style3dDescription_3f9b224',
    Fi = r(({ index: s, className: t }) => {
        const { model: r } = Li(),
            n = r.computes.product(s),
            { mediaSize: i } = h();
        switch (n.type) {
            case Sa.Vehicle: {
                const { name: s, tier: r, type: i, nation: o, isPremium: d } = n.vehicleInfo;
                return e.jsxs('div', {
                    className: a(Mi, t),
                    children: [
                        e.jsx('div', {
                            className: zi,
                            style: { backgroundImage: `url('${R.images.gui.maps.icons.flags.c_20x12.$dyn(o)}')` },
                        }),
                        e.jsx(Ra, { name: s, tier: r, type: i, isPremium: d, className: Qi }),
                    ],
                });
            }
            case Sa.Style3d: {
                const { name: s, vehicleInfo: r } = n,
                    o = W(R.strings.comp7_ext.products.style3d(), {
                        name: W(R.strings.comp7_ext.quotesWrapper(), { name: s }),
                    });
                return e.jsxs('div', {
                    className: a(Mi, Hi, t),
                    children: [
                        e.jsx(xe, { classMix: Vi, content: o }, i),
                        e.jsx(U, {
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: { vehicleName: r.name },
                            classMix: $i,
                        }),
                    ],
                });
            }
            case Sa.Reward:
                return e.jsx(U, { text: n.reward.label, classMix: a(Mi, t) });
            default:
                return (console.error(`Provide ProductCardName for ProductType:${n.type}`), null);
        }
    }),
    qi = {
        base: 'ProductCardPrice_a5fa8e54',
        currencyValue: 'ProductCardPrice_currencyValue_9fe43227',
        discount: 'ProductCardPrice_discount_179b3f2e',
        discount__freeXP: 'ProductCardPrice_discount__freeXP_ddf6bb6',
        discount__credits: 'ProductCardPrice_discount__credits_33607135',
        discount__gold: 'ProductCardPrice_discount__gold_41838016',
        discount__xp: 'ProductCardPrice_discount__xp_fe239aa7',
        discount__crystal: 'ProductCardPrice_discount__crystal_fe239aa7',
        discount__equipCoin: 'ProductCardPrice_discount__equipCoin_a4138771',
        discountLine: 'ProductCardPrice_discountLine_cdca68df',
        fadeIn: 'ProductCardPrice_fadeIn_fe239aa7',
        fadeInThreeQuarters: 'ProductCardPrice_fadeInThreeQuarters_fe239aa7',
        fadeInHalf: 'ProductCardPrice_fadeInHalf_fe239aa7',
        fadeOut: 'ProductCardPrice_fadeOut_fe239aa7',
        fadeInWithScale: 'ProductCardPrice_fadeInWithScale_fe239aa7',
        slideUp: 'ProductCardPrice_slideUp_fe239aa7',
        scale: 'ProductCardPrice_scale_fe239aa7',
        raysAppearance: 'ProductCardPrice_raysAppearance_fe239aa7',
        rotate: 'ProductCardPrice_rotate_fe239aa7',
        'reverse-rotate': 'ProductCardPrice_reverse-rotate_fe239aa7',
        glowAppearance: 'ProductCardPrice_glowAppearance_fe239aa7',
        highlightAppearance: 'ProductCardPrice_highlightAppearance_fe239aa7',
        blink: 'ProductCardPrice_blink_fe239aa7',
        slideUpIn: 'ProductCardPrice_slideUpIn_fe239aa7',
    },
    Oi = { base: qi.currencyValue },
    Yi = r(({ index: s, className: t }) => {
        const { model: r } = Li(),
            { price: n } = r.computes.product(s),
            i = r.computes.priceConfig(s).hasDiscount;
        return e.jsxs('div', {
            className: a(qi.base, t),
            children: [
                i &&
                    e.jsxs('div', {
                        className: a(qi.discount, qi[`discount__${n.name}`]),
                        children: [e.jsx(m, { value: n.value }), e.jsx('div', { className: qi.discountLine })],
                    }),
                e.jsx(ve, {
                    type: n.name,
                    reverse: !0,
                    size: ve.sizes.extraSmall,
                    classNames: Oi,
                    children: i ? n.discountValue : n.value,
                }),
            ],
        });
    }),
    Gi = 'ProductCardPurchased_2961b484',
    Xi = 'ProductCardPurchased_icon_8b2c6156',
    Ki = 'ProductCardPurchased_text_4c3e5e17',
    Ji = ({ className: s }) =>
        e.jsxs('div', {
            className: a(Gi, s),
            children: [
                e.jsx('div', { className: Xi }),
                e.jsx('div', { className: Ki, children: R.strings.comp7_ext.products.purchased() }),
            ],
        }),
    Zi = 'ProductCardReadyToRestore_f4520fe',
    eo = ({ className: s }) =>
        e.jsx('div', {
            className: a(Zi, s),
            children: e.jsx(U, { text: R.strings.comp7_ext.products.readyToRestore() }),
        }),
    ao = {
        base: 'ProductCard_eb37a243',
        base__selected: 'ProductCard_base__selected_e3c5e133',
        background: 'ProductCard_background_fb2902bf',
        backgroundGradient: 'ProductCard_backgroundGradient_488a7693',
        imageContainer: 'ProductCard_imageContainer_377fb874',
        corners: 'ProductCard_corners_78aef17e',
        discountBackground: 'ProductCard_discountBackground_7dc879db',
        stroke: 'ProductCard_stroke_8347e6e7',
        base__purchased: 'ProductCard_base__purchased_3cd387de',
        corner: 'ProductCard_corner_3804793a',
        corner__top: 'ProductCard_corner__top_cec72d1d',
        corner__bottom: 'ProductCard_corner__bottom_f9f9228e',
        corner__left: 'ProductCard_corner__left_3ca42dc',
        corner__right: 'ProductCard_corner__right_eb810c16',
        container: 'ProductCard_container_403a9cc9',
        name: 'ProductCard_name_52b35520',
        lock: 'ProductCard_lock_4f608a09',
        bottomString: 'ProductCard_bottomString_af3efe18',
        bottomString__withIcon: 'ProductCard_bottomString__withIcon_883bc7c',
        notification: 'ProductCard_notification_22469d9e',
        fadeIn: 'ProductCard_fadeIn_3cd387de',
        fadeInThreeQuarters: 'ProductCard_fadeInThreeQuarters_3cd387de',
        fadeInHalf: 'ProductCard_fadeInHalf_3cd387de',
        fadeOut: 'ProductCard_fadeOut_3cd387de',
        fadeInWithScale: 'ProductCard_fadeInWithScale_3cd387de',
        slideUp: 'ProductCard_slideUp_3cd387de',
        scale: 'ProductCard_scale_3cd387de',
        raysAppearance: 'ProductCard_raysAppearance_3cd387de',
        rotate: 'ProductCard_rotate_3cd387de',
        'reverse-rotate': 'ProductCard_reverse-rotate_3cd387de',
        glowAppearance: 'ProductCard_glowAppearance_3cd387de',
        highlightAppearance: 'ProductCard_highlightAppearance_3cd387de',
        blink: 'ProductCard_blink_3cd387de',
        slideUpIn: 'ProductCard_slideUpIn_3cd387de',
    },
    so = {
        [Sa.Vehicle]: 'comp_7_shop_carousel_click_tank',
        [Sa.Style3d]: 'comp_7_shop_carousel_click_style',
        [Sa.Reward]: 'comp_7_shop_carousel_click_module',
        [Sa.Base]: '',
    },
    to = r(({ index: s, className: t, classNames: r }) => {
        const { model: n, controls: i } = Li(),
            { id: o, state: d, isNew: c, rank: l, type: _, tooltipId: m } = n.computes.product(s),
            p = n.computes.priceConfig(s).hasDiscount,
            h = n.computes.selectedProductIndex(),
            g = s === h;
        return e.jsx(Se, {
            args: { id: o, tooltipId: m },
            ignoreShowDelay: !0,
            children: e.jsxs('div', {
                className: a(ao.base, g && ao.base__selected, ao[`base__${d}`], t),
                onClick: () => {
                    g || (u.click(), u.sound(so[_]), i.selectProduct(o), i.markProductSeen(o));
                },
                children: [
                    e.jsx('div', {
                        className: a(ao.background, null == r ? void 0 : r.background),
                        style: {
                            backgroundImage: `url(${ra(R.images.comp7.gui.maps.icons.products.cardsBackgrounds, l)})`,
                        },
                    }),
                    e.jsxs('div', {
                        className: ao.corners,
                        children: [
                            e.jsx('div', {
                                className: a(ao.corner, ao.corner__top, ao.corner__left, null == r ? void 0 : r.corner),
                            }),
                            e.jsx('div', {
                                className: a(
                                    ao.corner,
                                    ao.corner__top,
                                    ao.corner__right,
                                    null == r ? void 0 : r.corner,
                                ),
                            }),
                            e.jsx('div', {
                                className: a(
                                    ao.corner,
                                    ao.corner__bottom,
                                    ao.corner__left,
                                    null == r ? void 0 : r.corner,
                                ),
                            }),
                            e.jsx('div', {
                                className: a(
                                    ao.corner,
                                    ao.corner__bottom,
                                    ao.corner__right,
                                    null == r ? void 0 : r.corner,
                                ),
                            }),
                        ],
                    }),
                    e.jsx('div', { className: a(ao.stroke, null == r ? void 0 : r.stroke) }),
                    e.jsx(Ui, { index: s, className: a(ao.imageContainer, null == r ? void 0 : r.imageContainer) }),
                    e.jsx('div', { className: ao.backgroundGradient }),
                    p && e.jsx('div', { className: ao.discountBackground }),
                    c && e.jsx('div', { className: a(ao.notification, null == r ? void 0 : r.notification) }),
                    e.jsxs('div', {
                        className: ao.container,
                        children: [
                            e.jsx(Fi, { index: s, className: ao.name }),
                            (() => {
                                switch (d) {
                                    case va.ReadyToRestore:
                                        return e.jsx(eo, { className: a(ao.bottomString, ao.bottomString__withIcon) });
                                    case va.Purchased:
                                        return e.jsx(Ji, { className: a(ao.bottomString, ao.bottomString__withIcon) });
                                    default:
                                        return e.jsx(Yi, { index: s, className: ao.bottomString });
                                }
                            })(),
                        ],
                    }),
                    d === va.Locked && e.jsx('div', { className: ao.lock }),
                ],
            }),
        });
    }),
    ro = 'RankSection_c990c598',
    no = 'RankSection_dividerContainer_811b1b79',
    io = 'RankSection_dividerContainer__right_551e2893',
    oo = 'RankSection_verticalDivider_3a6d642f',
    co = 'RankSection_centralContainer_755b9082',
    lo = 'RankSection_rankDescription_fb9e5f48',
    _o = 'RankSection_rankImage_8c4cf71f',
    mo = 'RankSection_rankString_514c111b',
    uo = 'RankSection_horizontalDivider_95048bb6',
    po = 'RankSection_peak_9d148568',
    ho = 'RankSection_peak__right_551e2893',
    go = 'RankSection_line_2a5d3241',
    fo = ({ rank: s, seasonName: t, className: r }) =>
        e.jsxs('div', {
            className: a(ro, r),
            children: [
                e.jsxs('div', {
                    className: no,
                    children: [
                        e.jsx('div', { className: oo }),
                        e.jsxs('div', {
                            className: uo,
                            children: [
                                e.jsx('div', { className: po }),
                                e.jsx('div', { className: go }),
                                e.jsx('div', { className: a(po, ho) }),
                            ],
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: co,
                    children: [
                        e.jsx(Ze, { rank: s, size: ea.x40, seasonName: t, className: _o }),
                        e.jsx(U, {
                            classMix: lo,
                            text: R.strings.comp7_ext.products.rankAccess(),
                            binding: {
                                rank: e.jsx('div', {
                                    className: mo,
                                    children: W(R.strings.comp7_ext.quotesWrapper(), { name: na(s) }),
                                }),
                            },
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: a(no, io),
                    children: [
                        e.jsx('div', { className: oo }),
                        e.jsxs('div', {
                            className: uo,
                            children: [
                                e.jsx('div', { className: po }),
                                e.jsx('div', { className: go }),
                                e.jsx('div', { className: a(po, ho) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    bo = 'Carousel_dividersSections_1b165bca',
    xo = 'Carousel_areaContent_38720fd1',
    vo = 'Carousel_areaWrapper_8d15463',
    So = 'Carousel_section_239ec09e',
    wo = 'Carousel_scrollItem_75645375',
    ko = 'Carousel_scrollItem__group_d0111639',
    Ro = 'Carousel_productCard_bca51e20',
    Po = 'Carousel_selectedGlowContainer_d798cbe',
    jo = 'Carousel_glow_17d85254',
    Co = 'Carousel_selectedGlowContainer__active_bca51e20',
    No = { areaWrapper: vo, areaContent: xo },
    Io = { glow: jo },
    yo = r(({ className: t }) => {
        const { model: r } = Li(),
            { model: n } = Fe(),
            { mediaSize: i } = h(),
            o = s.useRef(null),
            d = r.computes.selectedProductIndex(),
            c = r.computes.productsDividersConfig(),
            l = ((e) => (e >= g.Medium ? 180 : e >= g.Small ? 150 : 120))(i),
            _ = ((e) => {
                const a = s.useMemo(
                    () => ({
                        settings: {
                            step: { type: 'proportional', factor: 8 },
                            animationConfig: { tension: 120, friction: 20, ...e },
                        },
                    }),
                    [e],
                );
                return J(a);
            })(),
            m = me(),
            p = i >= g.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
            f = ue((e) => {
                m.run(() => {
                    if (o && o.current) {
                        const a = o.current.offsetLeft - L(l);
                        _.applyScroll(a, e);
                    }
                });
            });
        return (
            ge(() => {
                f();
            }),
            we(() => {
                f({ immediate: !0, reset: !0 });
            }, [f]),
            e.jsx('div', {
                style: {
                    '--shopOffset': `${l}rem`,
                    '--itemOffset': `${p.offset}rem`,
                    '--groupOffset': 2 * p.offset + 'rem',
                    '--itemWidth': `${p.width}rem`,
                },
                children: e.jsx(Z, {
                    api: _,
                    children: e.jsxs(Ei, {
                        className: t,
                        classNames: No,
                        children: [
                            e.jsx('div', {
                                className: bo,
                                children: c.recordsArray.map(([a, s]) =>
                                    e.jsx(
                                        'div',
                                        {
                                            className: So,
                                            style: { width: p.width * s + p.offset * (s - 1) + 'rem' },
                                            children: e.jsx(fo, { rank: a, seasonName: n.season.name.get() }),
                                        },
                                        a,
                                    ),
                                ),
                            }),
                            N(r.computes.productsLength(), (s) =>
                                e.jsxs(
                                    'div',
                                    {
                                        className: a(wo, c.groupIndexesSet.has(s) && ko),
                                        onMouseEnter: d === s ? void 0 : u.highlight,
                                        ref: d === s ? o : void 0,
                                        children: [
                                            e.jsx(_a, { className: a(Po, s === d && Co), classNames: Io }),
                                            e.jsx(to, { index: s, className: Ro }),
                                        ],
                                    },
                                    s,
                                ),
                            ),
                        ],
                    }),
                }),
            })
        );
    }),
    Ao = 'ProductControls_control_9de2450c',
    To = { label: 'ProductControls_label_f6830376' },
    Lo = r(() => {
        const { mediaSize: a } = h(),
            { model: s, controls: t } = Li(),
            { isVehiclesCompareEnabled: r, vehicleCompareTooltipId: n } = s.root.get(),
            { hasAddToCompare: i, hasPreview: o } = s.computes.controlsConfig(),
            d = a >= g.Medium ? 'normal' : 'small';
        return e.jsxs(e.Fragment, {
            children: [
                i &&
                    e.jsx(Se, {
                        args: { tooltipId: n },
                        isEnabled: !r,
                        children: e.jsx('div', {
                            className: Ao,
                            children: e.jsx(ie, {
                                type: 'compare',
                                disabled: !r,
                                onClick: t.addToVehicleCompare,
                                size: d,
                                classNames: To,
                                children: R.strings.comp7_ext.controls.compare(),
                            }),
                        }),
                    }),
                o &&
                    e.jsx(ie, {
                        type: 'preview',
                        onClick: t.goToPreview,
                        size: d,
                        className: Ao,
                        classNames: To,
                        children: R.strings.comp7_ext.controls.preview(),
                    }),
            ],
        });
    }),
    Bo = 'PeaksContainer_ac84c920',
    Eo = 'PeaksContainer_venzel_8ceb268e',
    Do = 'PeaksContainer_venzel__right_786d2e11',
    Wo = 'PeaksContainer_icon_938427c2',
    Uo = 'PeaksContainer_line_c8c429d2',
    Mo = 'PeaksContainer_content_fa8f58a4',
    Qo = ({ className: t, classNames: r, children: n }) => {
        const i = s.Children.toArray(n).length;
        return e.jsxs('div', {
            className: a(Bo, t),
            children: [
                0 === i &&
                    e.jsxs('div', {
                        className: a(Eo, null == r ? void 0 : r.venzel),
                        children: [
                            e.jsx('div', { className: a(Wo, null == r ? void 0 : r.icon) }),
                            e.jsx('div', { className: a(Uo, null == r ? void 0 : r.line) }),
                        ],
                    }),
                i > 0 && e.jsx('div', { className: a(Mo, null == r ? void 0 : r.content), children: n }),
                e.jsxs('div', {
                    className: a(Eo, null == r ? void 0 : r.venzel, Do),
                    children: [
                        e.jsx('div', { className: a(Wo, null == r ? void 0 : r.icon) }),
                        e.jsx('div', { className: a(Uo, null == r ? void 0 : r.line) }),
                    ],
                }),
            ],
        });
    },
    zo = 'RankDiscount_9bb75367',
    Ho = 'RankDiscount_godRays_4c25e606',
    Vo = 'RankDiscount_rank_5f187f66',
    $o = 'RankDiscount_disabledRankEmblem_47ff911f',
    Fo = 'RankDiscount_lock_c41f1a10',
    qo = 'RankDiscount_footer_6f406c1d',
    Oo = 'RankDiscount_rankAccessString_a1920cc8',
    Yo = 'RankDiscount_footer__maxRank_88b30d74',
    Go = 'RankDiscount_valueContainer_513d8a27',
    Xo = 'RankDiscount_discountBackground_9a06158d',
    Ko = r(({ index: s }) => {
        const { model: t } = Li(),
            { maxAchievedRank: r } = t.root.get(),
            n = t.computes.rankDiscount(s),
            i = t.computes.selectedProduct(),
            o = n.rank === r;
        return n.rank === i.rank
            ? e.jsx('div', {
                  className: a(Oo),
                  children: e.jsx(U, { text: R.strings.comp7_ext.products.productAccess() }),
              })
            : n.value > 0
              ? e.jsxs('div', {
                    className: Go,
                    children: [
                        o && e.jsx('div', { className: Xo }),
                        e.jsx(U, {
                            text: R.strings.comp7_ext.products.discount(),
                            binding: { discountPercentage: n.value },
                        }),
                    ],
                })
              : null;
    }),
    Jo = r(({ index: s, className: t }) => {
        const { model: r } = Li(),
            { model: n } = Fe(),
            { currentRank: i, maxAchievedRank: o } = r.root.get(),
            d = r.computes.rankDiscount(s),
            c = d.rank === o,
            l = !d.wasUnlocked;
        return e.jsxs('div', {
            className: a(zo, t),
            children: [
                d.rank === i &&
                    e.jsx(re, {
                        className: Ho,
                        src: String(R.videos.comp7.godRaysNew_130x130()),
                        autoplay: !0,
                        loop: !0,
                    }),
                e.jsx(Js, {
                    rank: d.rank,
                    from: d.from,
                    to: d.to,
                    divisions: d.divisions,
                    className: Vo,
                    ignoreShowDelay: !0,
                    children: e.jsx(Ze, {
                        seasonName: n.season.name.get(),
                        size: ea.x48,
                        rank: d.rank,
                        className: a(l && $o),
                    }),
                }),
                l && e.jsx('div', { className: Fo }),
                e.jsx('div', { className: a(qo, c && Yo), children: e.jsx(Ko, { index: s }) }),
            ],
        });
    }),
    Zo = 'DiscountSection_9acad8ef',
    ed = 'DiscountSection_discounts_c60041bb',
    ad = 'DiscountSection_rankDiscount_21ec2bb9',
    sd = 'DiscountSection_discountDescription_20f9cc53',
    td = r(({ className: s }) => {
        const { model: t } = Li();
        return e.jsxs('div', {
            className: a(Zo, s),
            children: [
                e.jsx(Qo, { children: R.strings.comp7_ext.products.discountSectionName() }),
                e.jsx('div', {
                    className: ed,
                    children: N(t.computes.rankDiscountsLength(), (a) => e.jsx(Jo, { index: a, className: ad }, a)),
                }),
                e.jsx(D, { text: R.strings.comp7_ext.products.discountDescription(), classMix: sd }),
            ],
        });
    }),
    rd = 'InProgressSection_fefaeb32',
    nd = 'InProgressSection_content_b04c3856',
    id = 'InProgressSection_background_a19a49db',
    od = 'InProgressSection_highlight_f936c9ac',
    dd = 'InProgressSection_state_2d79ab7d',
    cd = 'InProgressSection_inProgressString_9cafd080',
    ld = 'InProgressSection_inProgressStringIcon_a4a5b2ae',
    _d = ({ className: s }) =>
        e.jsxs('div', {
            className: a(rd, s),
            children: [
                e.jsx(Qo, {}),
                e.jsxs('div', {
                    className: nd,
                    children: [
                        e.jsx('div', { className: id }),
                        e.jsx('div', { className: od }),
                        e.jsx('div', {
                            className: dd,
                            children: e.jsxs('div', {
                                className: cd,
                                children: [e.jsx('div', { className: ld }), R.strings.comp7_ext.products.inProgress()],
                            }),
                        }),
                    ],
                }),
                e.jsx(Qo, {}),
            ],
        }),
    md = 'NationFlag_42e58a02',
    ud = 'NationFlag_nationFlag_2f0a2e52',
    pd = R.images.gui.maps.icons.eventBoards.flagsOverlay,
    hd = ({ nation: s, className: t }) =>
        e.jsxs('div', {
            className: a(md, t),
            children: [
                e.jsx('div', { className: ud, style: { backgroundImage: `url(${pd.$dyn(s)})` } }),
                e.jsx('div', { className: ud, style: { backgroundImage: `url(${pd.$dyn(s)})` } }),
            ],
        }),
    gd = 'NameSection_be509601',
    fd = 'NameSection_nationFlag_53badb0a',
    bd = 'NameSection_productName_ebab47bb',
    xd = 'NameSection_style3dSubtitle_f11dae45',
    vd = 'NameSection_style3dSubtitleVehicleText_6fb3b14',
    Sd = 'NameSection_vehicleDescription_71fefa0',
    wd = (e) => (e >= g.Medium ? Pa.x64 : Pa.x48),
    kd = (e) => (e >= g.Large ? Pa.x48 : Pa.x24),
    Rd = r(({ className: s }) => {
        const { model: t } = Li(),
            { mediaSize: r } = h(),
            n = t.computes.selectedProduct(),
            i = { id: n.id, tooltipId: n.tooltipId };
        switch (n.type) {
            case Sa.Vehicle: {
                const { tier: o, name: d, type: c, isPremium: l, roleKey: _, nation: m, vehicleCD: u } = n.vehicleInfo;
                return e.jsxs('div', {
                    className: a(gd, s),
                    children: [
                        e.jsx(hd, { nation: m, className: fd }),
                        e.jsx(Ra, {
                            tier: o,
                            name: d,
                            type: c,
                            tooltipArgs: i,
                            isPremium: l,
                            size: wd(r),
                            role: _,
                            vehicleCD: u,
                            className: bd,
                        }),
                        t.computes.hasVehicleDescription() && e.jsx(U, { text: n.description, classMix: Sd }),
                    ],
                });
            }
            case Sa.Style3d: {
                const { tier: t, name: o, type: d, isPremium: c } = n.vehicleInfo;
                return e.jsxs('div', {
                    className: a(gd, s),
                    children: [
                        e.jsx(Se, {
                            args: i,
                            children: e.jsx('div', {
                                children: e.jsx(U, {
                                    text: R.strings.comp7_ext.products.style3d(),
                                    binding: { name: e.jsx(wa, { name: n.name }) },
                                    classMix: bd,
                                }),
                            }),
                        }),
                        e.jsx(U, {
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: {
                                vehicleName: e.jsx(Ra, {
                                    name: o,
                                    tier: t,
                                    type: d,
                                    isPremium: c,
                                    size: kd(r),
                                    className: vd,
                                }),
                            },
                            classMix: xd,
                        }),
                    ],
                });
            }
            case Sa.Reward:
                return e.jsx('div', {
                    className: a(gd, s),
                    children: e.jsx(Se, {
                        args: i,
                        children: e.jsx('div', { className: bd, children: n.reward.label }),
                    }),
                });
            default:
                return (console.error(`Provide NameSection case for ProductTypes:${n.type}`), null);
        }
    }),
    Pd = {
        base: 'PriceSection_d9d9a2a',
        container: 'PriceSection_container_3c5a950d',
        priceContainer: 'PriceSection_priceContainer_32f8a37b',
        price: 'PriceSection_price_7c7f23d6',
        limitString: 'PriceSection_limitString_4cc1ce88',
        count: 'PriceSection_count_ad9afd04',
        separator: 'PriceSection_separator_ab73f43a',
        accessContainer: 'PriceSection_accessContainer_7e38d32c',
        rankBackground: 'PriceSection_rankBackground_ae4ad0de',
        accessBlock: 'PriceSection_accessBlock_c52d6cb4',
        lock: 'PriceSection_lock_f0dfa41c',
        accessString: 'PriceSection_accessString_e229614',
        rankString: 'PriceSection_rankString_103cc1a6',
        currencyValue: 'PriceSection_currencyValue_e28a8198',
        discount: 'PriceSection_discount_ab028597',
        discount__freeXP: 'PriceSection_discount__freeXP_fc01a1a4',
        discount__credits: 'PriceSection_discount__credits_d7b8d0c4',
        discount__gold: 'PriceSection_discount__gold_c0bae272',
        discount__xp: 'PriceSection_discount__xp_6b657bf',
        discount__crystal: 'PriceSection_discount__crystal_6b657bf',
        discount__equipCoin: 'PriceSection_discount__equipCoin_6fde7d66',
        discountLine: 'PriceSection_discountLine_f899c35d',
        buttonContainer: 'PriceSection_buttonContainer_7f4544ab',
        button: 'PriceSection_button_23c25f29',
        fadeIn: 'PriceSection_fadeIn_6b657bf',
        fadeInThreeQuarters: 'PriceSection_fadeInThreeQuarters_6b657bf',
        fadeInHalf: 'PriceSection_fadeInHalf_6b657bf',
        fadeOut: 'PriceSection_fadeOut_6b657bf',
        fadeInWithScale: 'PriceSection_fadeInWithScale_6b657bf',
        slideUp: 'PriceSection_slideUp_6b657bf',
        scale: 'PriceSection_scale_6b657bf',
        raysAppearance: 'PriceSection_raysAppearance_6b657bf',
        rotate: 'PriceSection_rotate_6b657bf',
        'reverse-rotate': 'PriceSection_reverse-rotate_6b657bf',
        glowAppearance: 'PriceSection_glowAppearance_6b657bf',
        highlightAppearance: 'PriceSection_highlightAppearance_6b657bf',
        blink: 'PriceSection_blink_6b657bf',
        slideUpIn: 'PriceSection_slideUpIn_6b657bf',
    },
    jd = r(() => {
        const { model: a, controls: s } = Li(),
            { mediaSize: t } = h(),
            r = a.computes.selectedProductIndex(),
            n = a.computes.selectedProduct(),
            { isEnough: i } = a.computes.priceConfig(r),
            o = () => {
                i && (u.sound(R.sounds.comp_7_shop_purchase_preview()), s.purchase());
            };
        switch (n.state) {
            case va.Locked:
                return e.jsxs(e.Fragment, {
                    children: [
                        e.jsx('div', { className: Pd.separator }),
                        e.jsxs('div', {
                            className: Pd.accessContainer,
                            children: [
                                e.jsx('div', {
                                    className: Pd.rankBackground,
                                    style: {
                                        backgroundImage: `url(${ra(R.images.comp7.gui.maps.icons.products.accessBackgrounds, n.rank)})`,
                                    },
                                }),
                                e.jsxs('div', {
                                    className: Pd.accessBlock,
                                    children: [
                                        e.jsx('div', { className: Pd.lock }),
                                        e.jsx(U, {
                                            text: R.strings.comp7_ext.products.message.rankAccess(),
                                            binding: {
                                                rank: e.jsx('span', { className: Pd.rankString, children: ta(n.rank) }),
                                            },
                                            classMix: Pd.accessString,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            case va.ReadyToPurchase:
                return e.jsx(_, {
                    isEnabled: !i,
                    body: R.strings.comp7_ext.products.message.notEnough(),
                    children: e.jsx('div', {
                        className: Pd.buttonContainer,
                        children: e.jsx(k, {
                            theme: k.themes.primary,
                            size: Je(t),
                            onClick: o,
                            onMouseEnter: () => {
                                i && u.highlight();
                            },
                            className: Pd.button,
                            disabled: !i,
                            silent: !0,
                            children: R.strings.comp7_ext.products.actions.buy(),
                        }),
                    }),
                });
            default:
                return (
                    console.error(`ActionsContainer in PriceSection was called for unappropriated state ${n.state}`),
                    null
                );
        }
    }),
    Cd = { base: Pd.currencyValue },
    Nd = r(({ className: s }) => {
        const { model: t } = Li(),
            r = t.computes.selectedProduct(),
            n = t.computes.selectedProductIndex(),
            { hasDiscount: i, isEnough: o } = t.computes.priceConfig(n);
        return e.jsxs('div', {
            className: a(Pd.base, s),
            children: [
                e.jsx(Qo, { children: R.strings.comp7_ext.products.priceSectionName() }),
                e.jsxs('div', {
                    className: Pd.container,
                    children: [
                        e.jsxs('div', {
                            className: Pd.priceContainer,
                            children: [
                                e.jsxs('div', {
                                    className: Pd.price,
                                    children: [
                                        i &&
                                            e.jsxs('div', {
                                                className: a(Pd.discount, Pd[`discount__${r.price.name}`]),
                                                children: [
                                                    e.jsx(m, { value: r.price.value }),
                                                    e.jsx('div', { className: Pd.discountLine }),
                                                ],
                                            }),
                                        e.jsx(ve, {
                                            type: r.price.name,
                                            reverse: !0,
                                            enough: o,
                                            size: ve.sizes.large,
                                            classNames: Cd,
                                            children: i ? r.price.discountValue : r.price.value,
                                        }),
                                    ],
                                }),
                                t.computes.hasLimitedQuantity() &&
                                    e.jsx('div', {
                                        className: Pd.limitString,
                                        children: e.jsx(U, {
                                            text: R.strings.comp7_ext.products.limitedQuantitySeason(),
                                            binding: {
                                                count: e.jsx('span', {
                                                    className: Pd.count,
                                                    children: r.limitedQuantity,
                                                }),
                                            },
                                        }),
                                    }),
                            ],
                        }),
                        e.jsx(jd, {}),
                    ],
                }),
            ],
        });
    }),
    Id = 'PurchasedSection_6164cf64',
    yd = 'PurchasedSection_content_d868988b',
    Ad = 'PurchasedSection_state_30f7765d',
    Td = 'PurchasedSection_purchasedString_f2d4b10a',
    Ld = 'PurchasedSection_purchasedStringIcon_396eb88c',
    Bd = 'PurchasedSection_quantityOfferString_9c521da',
    Ed = 'PurchasedSection_background_7dd21da0',
    Dd = 'PurchasedSection_highlight_8cd4f52',
    Wd = 'PurchasedSection_buttonContainer_f3e259c2',
    Ud = 'PurchasedSection_button_c980ad41',
    Md = r(() => {
        const { model: a, controls: s } = Li(),
            t = a.computes.selectedProduct(),
            { mediaSize: r } = h();
        switch (t.type) {
            case Sa.Vehicle:
                return t.canGoToHangar
                    ? e.jsx('div', {
                          className: Wd,
                          children: e.jsx(k, {
                              theme: k.themes.primary,
                              size: Je(r),
                              onClick: s.goToHangar,
                              className: Ud,
                              children: R.strings.comp7_ext.products.actions.toHangar(),
                          }),
                      })
                    : null;
            case Sa.Style3d: {
                const a = !t.canGoToCustomization;
                return e.jsx(_, {
                    isEnabled: a,
                    header: R.strings.comp7_ext.products.customizationUnavailable.title(),
                    body: R.strings.comp7_ext.products.customizationUnavailable.body(),
                    children: e.jsx('div', {
                        className: Wd,
                        children: e.jsx(k, {
                            theme: k.themes.primary,
                            size: Je(r),
                            onMouseEnter: () => {
                                a || u.highlight();
                            },
                            onClick: () => {
                                a || (u.click(), s.goToCustomization());
                            },
                            silent: !0,
                            className: Ud,
                            disabled: a,
                            children: R.strings.comp7_ext.products.actions.toCustomization(),
                        }),
                    }),
                });
            }
            default:
                return null;
        }
    }),
    Qd = r(({ className: s }) => {
        const { model: t } = Li(),
            r = t.computes.selectedProduct();
        return e.jsxs('div', {
            className: a(Id, s),
            children: [
                e.jsx(Qo, {}),
                e.jsxs('div', {
                    className: yd,
                    children: [
                        e.jsx('div', { className: Ed }),
                        e.jsx('div', { className: Dd }),
                        e.jsxs('div', {
                            className: Ad,
                            children: [
                                e.jsxs('div', {
                                    className: Td,
                                    children: [
                                        e.jsx('div', { className: Ld }),
                                        R.strings.comp7_ext.products.purchased(),
                                    ],
                                }),
                                r.type === Sa.Reward &&
                                    e.jsx('div', {
                                        className: Bd,
                                        children: W(R.strings.comp7_ext.products.limitedQuantitySeason(), {
                                            count: r.limitedQuantity,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
                e.jsx(Qo, {}),
                e.jsx(Md, {}),
            ],
        });
    }),
    zd = 'ReadyToRestoreSection_2e7dcd59',
    Hd = 'ReadyToRestoreSection_content_65d667a0',
    Vd = 'ReadyToRestoreSection_description_67d7fa6f',
    $d = 'ReadyToRestoreSection_buttonContainer_37adf442',
    Fd = 'ReadyToRestoreSection_button_8778f905',
    qd = r(({ className: s }) => {
        const { controls: t } = Li(),
            { mediaSize: r } = h();
        return e.jsxs('div', {
            className: a(zd, s),
            children: [
                e.jsx(Qo, {}),
                e.jsxs('div', {
                    className: Hd,
                    children: [
                        e.jsx('div', {
                            className: Vd,
                            children: e.jsx(U, { text: R.strings.comp7_ext.products.readyToRestoreDescription() }),
                        }),
                        e.jsx('div', {
                            className: $d,
                            children: e.jsx(k, {
                                theme: k.themes.primary,
                                size: Je(r),
                                onClick: () => {
                                    (u.sound(R.sounds.comp_7_shop_purchase_preview()), t.restore());
                                },
                                className: Fd,
                                children: R.strings.comp7_ext.products.actions.restore(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Od = 'ProductDetails_8c03fb32',
    Yd = 'ProductDetails_section_dcf92365',
    Gd = [va.Locked, va.ReadyToPurchase],
    Xd = r(({ className: s }) => {
        const { model: t } = Li(),
            r = t.computes.selectedProduct();
        return e.jsxs('div', {
            className: a(Od, s),
            children: [
                e.jsx(Rd, { className: Yd }),
                Gd.includes(r.state) && e.jsx(td, { className: Yd }),
                (() => {
                    switch (r.state) {
                        case va.Purchased:
                            return e.jsx(Qd, { className: Yd });
                        case va.InProgress:
                            return e.jsx(_d, { className: Yd });
                        case va.ReadyToRestore:
                            return e.jsx(qd, { className: Yd });
                        default:
                            return e.jsx(Nd, { className: Yd });
                    }
                })(),
            ],
        });
    }),
    Kd = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
    Jd = {
        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        config: { duration: 100 },
    },
    Zd = 'ShopPage_7caee38d',
    ec = 'ShopPage_sceneWrapper_d44346fd',
    ac = 'ShopPage_vignette_287ac90',
    sc = 'ShopPage_headersWrapper_3bd5a059',
    tc = 'ShopPage_activeSeasonState_bb0c25d9',
    rc = 'ShopPage_contentWrapper_d401697c',
    nc = 'ShopPage_rewardContainer_99ec190d',
    ic = 'ShopPage_rewardBase_bb0c25d9',
    oc = 'ShopPage_rewardHighlight_c5563e7',
    dc = 'ShopPage_controls_b6cdda75',
    cc = 'ShopPage_mainContainer_f2e01656',
    lc = 'ShopPage_details_11208d85',
    _c = 'ShopPage_carousel_1cf76ba5',
    mc = (e) => (e >= g.Large ? se.S600x450 : e >= g.Small ? se.S400x300 : se.S296x222),
    uc = r(() => {
        const { model: a } = Li(),
            { mediaSize: t } = h(),
            r = o(Ke),
            n = a.computes.selectedProduct(),
            { hasControls: i } = a.computes.controlsConfig(),
            [c, l] = o(() => Kd),
            [_, m] = o(() => Jd);
        return (
            s.useLayoutEffect(() => {
                (m.set(Jd.from), l.set(Kd.from));
            }, [m, l, n.id, n.state]),
            s.useEffect(() => {
                (m.start({ ...Jd, delay: 300 }), l.start({ ...Kd, delay: 100 }));
            }, [m, l, n.id, n.state]),
            e.jsxs(e.Fragment, {
                children: [
                    n.type === Sa.Reward &&
                        e.jsxs('div', {
                            className: nc,
                            children: [
                                e.jsx('div', { className: oc }),
                                e.jsx(d.div, {
                                    style: c,
                                    children: e.jsx(ne, {
                                        ...ba({ reward: n.reward, size: mc(t) }),
                                        tooltipArgs: ke({ tooltipId: n.tooltipId, id: n.id }),
                                        className: ic,
                                    }),
                                }),
                            ],
                        }),
                    i && e.jsx(d.div, { style: _, className: dc, children: e.jsx(Lo, {}, n.id) }),
                    e.jsx(d.div, { style: c, className: cc, children: e.jsx(Xd, { className: lc }) }),
                    e.jsx(d.div, { style: r, children: e.jsx(yo, { className: _c }) }),
                ],
            })
        );
    }),
    pc = { activeSeasonState: tc },
    hc = { [Ii.Initial]: () => e.jsx('div', {}), [Ii.Success]: uc, [Ii.Error]: ns },
    gc = r(() => {
        const a = o(Ke),
            { model: s, controls: t } = Li(),
            r = s.root.get().shopState,
            n = s.computes.hasSceneWrapper(),
            i = hc[r];
        return i
            ? e.jsxs('div', {
                  className: Zd,
                  'data-test-id': 'shop-page',
                  children: [
                      n &&
                          e.jsx('div', {
                              className: ec,
                              children: e.jsx(Re, { moveSpace: t.moveSpace, onMouseOver3dScene: t.mouseOver3dScene }),
                          }),
                      r !== Ii.Error && e.jsx('div', { className: ac }),
                      e.jsx('div', { className: sc, children: e.jsx(oa, { classNames: pc }) }),
                      e.jsx(d.div, { className: rc, style: a, children: e.jsx(i, {}) }),
                  ],
              })
            : (console.error('Unreachable code: ShopPage.tsx'), null);
    });
var fc = ((e) => (
    (e.LOCKED_BY_NO_X_VEHICLES = 'lockedByNoXVehicles'),
    (e.LOCKED_BY_INACTIVE_SEASON = 'lockedByInactiveSeason'),
    (e.LOCKED_BY_PREVIOUS_QUEST = 'lockedByPreviousQuest'),
    (e.ACTIVE = 'active'),
    (e.COMPLETED = 'completed'),
    e
))(fc || {});
const bc = [fc.LOCKED_BY_NO_X_VEHICLES, fc.LOCKED_BY_INACTIVE_SEASON, fc.LOCKED_BY_PREVIOUS_QUEST],
    [xc, vc] = b()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    questCards: e.array('questCards'),
                    progressPoints: e.array('progressPoints'),
                },
                s = t(
                    (e) => {
                        const s = e * ja,
                            t = [...ae(a.questCards.get(), s, s + ja - 1)];
                        if (t.length !== ja)
                            throw new Error(`Unexpected weekly list length: ${t.length} expected: ${ja}`);
                        return t;
                    },
                    { equals: x },
                ),
                r = t(
                    (e, a) => {
                        const t = s(e),
                            r = w(t, a);
                        if (!r) throw new Error(`Unexpected card index: ${a}`);
                        return { ...r };
                    },
                    { equals: x },
                ),
                n = t(
                    (e, a, s) => {
                        const t = r(e, a).rewards;
                        return xa({ rewards: t, size: s });
                    },
                    { equals: x },
                ),
                i = t((e, a) => bc.includes(r(e, a).state));
            return {
                ...a,
                computes: { questCardsLength: t((e) => s(e).length), questCard: r, questRewards: n, isQuestLocked: i },
            };
        },
        ({ externalModel: e }) => ({
            animationStart: e.createCallbackNoArgs('onAnimationStart'),
            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
            goToRewardsSelection: e.createCallbackNoArgs('onGoToRewardsSelection'),
        }),
    ),
    Sc = 'CountdownStatus_8bd2c608',
    wc = 'CountdownStatus_content_ba867330',
    kc = 'CountdownStatus_shine_11fd24ed',
    Rc = 'CountdownStatus_text_23310da3',
    Pc = 'CountdownStatus_countDownWrapper_772ca654',
    jc = 'CountdownStatus_countDownIcon_94b471ff',
    Cc = 'CountdownStatus_timer_f5350620',
    Nc = r(({ className: s }) => {
        const { model: t } = vc(),
            { timeToNewQuests: r } = t.root.get();
        return e.jsx('div', {
            className: a(Sc, s),
            children: e.jsxs('div', {
                className: wc,
                children: [
                    e.jsx('div', { className: kc }),
                    -1 === r
                        ? e.jsx('div', {
                              className: Rc,
                              children: R.strings.comp7_ext.weeklyQuests.CountdownStatus.done(),
                          })
                        : e.jsx(U, {
                              text: R.strings.comp7_ext.weeklyQuests.CountdownStatus.active(ja),
                              binding: {
                                  value: ja,
                                  countdown: e.jsxs('div', {
                                      className: Pc,
                                      children: [
                                          e.jsx('div', { className: jc }),
                                          e.jsx(Pe, { icon: je.None, duration: r, classNames: { text: Cc } }),
                                      ],
                                  }),
                              },
                              classMix: Rc,
                          }),
                ],
            }),
        });
    }),
    Ic = 'Progress_868e8f6f',
    yc = 'Progress_counter_28173a36',
    Ac = 'Progress_current_89c6d7a7',
    Tc = 'Progress_progressBar_8570680b',
    Lc = ({ current: s, total: t, isDisabled: r, className: n }) =>
        e.jsxs('div', {
            className: a(Ic, n),
            children: [
                e.jsx(U, {
                    classMix: yc,
                    text: R.strings.comp7_ext.weeklyQuests.card.progress.counter(),
                    binding: {
                        current: e.jsx('div', { className: Ac, children: e.jsx(m, { value: s }) }),
                        total: e.jsx(m, { value: t }),
                    },
                }),
                e.jsx('div', {
                    className: Tc,
                    children: e.jsx(ha, { size: Ce.Small, value: s, maxValue: t, disabled: r }),
                }),
            ],
        }),
    Bc = {
        base: 'Status_8705d4b8',
        base__locked: 'Status_base__locked_aa01c207',
        icon: 'Status_icon_40b5503c',
        base__active: 'Status_base__active_35b9a31c',
        base__completed: 'Status_base__completed_35b9a31c',
        text: 'Status_text_b0594007',
        fadeIn: 'Status_fadeIn_35b9a31c',
        fadeInThreeQuarters: 'Status_fadeInThreeQuarters_35b9a31c',
        fadeInHalf: 'Status_fadeInHalf_35b9a31c',
        fadeOut: 'Status_fadeOut_35b9a31c',
        fadeInWithScale: 'Status_fadeInWithScale_35b9a31c',
        slideUp: 'Status_slideUp_35b9a31c',
        scale: 'Status_scale_35b9a31c',
        raysAppearance: 'Status_raysAppearance_35b9a31c',
        rotate: 'Status_rotate_35b9a31c',
        'reverse-rotate': 'Status_reverse-rotate_35b9a31c',
        glowAppearance: 'Status_glowAppearance_35b9a31c',
        highlightAppearance: 'Status_highlightAppearance_35b9a31c',
        blink: 'Status_blink_35b9a31c',
        slideUpIn: 'Status_slideUpIn_35b9a31c',
    },
    Ec = r(({ weeklyIndex: s, index: t, className: r }) => {
        const { model: n } = vc(),
            { state: i } = n.computes.questCard(s, t),
            o = n.computes.isQuestLocked(s, t);
        return e.jsx(_, {
            isEnabled: o,
            header: R.strings.comp7_ext.weeklyQuests.card.statusLockedTooltip.header(),
            body: String(R.strings.comp7_ext.weeklyQuests.card.statusLockedTooltip.body.$dyn(i)),
            children: e.jsxs('div', {
                className: a(Bc.base, o ? Bc.base__locked : Bc[`base__${i}`], r),
                children: [
                    e.jsx('div', { className: Bc.icon }),
                    e.jsx('div', {
                        className: Bc.text,
                        children: String(
                            o
                                ? R.strings.comp7_ext.weeklyQuests.card.status.locked()
                                : R.strings.comp7_ext.weeklyQuests.card.status.$dyn(i),
                        ),
                    }),
                ],
            }),
        });
    }),
    Dc = {
        base: 'QuestCard_8b0f7600',
        highlightContainer: 'QuestCard_highlightContainer_73d15dda',
        highlight: 'QuestCard_highlight_d23503f3',
        glowContainer: 'QuestCard_glowContainer_3dd7ef2d',
        glow: 'QuestCard_glow_432a3cc7',
        glowAppearance: 'QuestCard_glowAppearance_9c76dd70',
        icon: 'QuestCard_icon_179f870b',
        base__completed: 'QuestCard_base__completed_9c76dd70',
        base__locked: 'QuestCard_base__locked_9c76dd70',
        content: 'QuestCard_content_ebb4ebad',
        progress: 'QuestCard_progress_82e4abd1',
        description: 'QuestCard_description_1ca786f2',
        reward: 'QuestCard_reward_154f687d',
        status: 'QuestCard_status_f7d52362',
        fadeIn: 'QuestCard_fadeIn_9c76dd70',
        fadeInThreeQuarters: 'QuestCard_fadeInThreeQuarters_9c76dd70',
        fadeInHalf: 'QuestCard_fadeInHalf_9c76dd70',
        fadeOut: 'QuestCard_fadeOut_9c76dd70',
        fadeInWithScale: 'QuestCard_fadeInWithScale_9c76dd70',
        slideUp: 'QuestCard_slideUp_9c76dd70',
        scale: 'QuestCard_scale_9c76dd70',
        raysAppearance: 'QuestCard_raysAppearance_9c76dd70',
        rotate: 'QuestCard_rotate_9c76dd70',
        'reverse-rotate': 'QuestCard_reverse-rotate_9c76dd70',
        highlightAppearance: 'QuestCard_highlightAppearance_9c76dd70',
        blink: 'QuestCard_blink_9c76dd70',
        slideUpIn: 'QuestCard_slideUpIn_9c76dd70',
    },
    Wc = (e) => (bc.includes(e) ? 'locked' : e),
    Uc = r(({ weeklyIndex: s, index: t }) => {
        const { model: r } = vc(),
            { state: n, currentProgress: i, totalProgress: o, description: d, iconKey: c } = r.computes.questCard(s, t),
            { mediaSize: l } = h(),
            _ = l > g.Large ? se.Big : se.Small;
        return e.jsxs('div', {
            className: a(Dc.base, Dc[`base__${Wc(n)}`]),
            children: [
                n === fc.ACTIVE &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', {
                                className: Dc.highlightContainer,
                                children: e.jsx('div', { className: Dc.highlight }),
                            }),
                            e.jsx(_a, { className: Dc.glowContainer, classNames: { glow: Dc.glow } }),
                        ],
                    }),
                e.jsx('div', {
                    className: Dc.icon,
                    style: { backgroundImage: `url(R.images.comp7.gui.maps.icons.weekly_quests.${c})` },
                }),
                e.jsxs('div', {
                    className: Dc.content,
                    children: [
                        e.jsx(Lc, { current: i, total: o, isDisabled: n !== fc.ACTIVE, className: Dc.progress }),
                        e.jsx('div', { className: Dc.description, children: d }),
                        e.jsx(te, { data: r.computes.questRewards(s, t, _), size: _, rewardItemClassMix: Dc.reward }),
                    ],
                }),
                e.jsx(Ec, { weeklyIndex: s, index: t, className: Dc.status }),
            ],
        });
    }),
    Mc = {
        base: 'Separator_a28fd211',
        line: 'Separator_line_d9470d1d',
        line__top: 'Separator_line__top_cc72e6fd',
        line__bottom: 'Separator_line__bottom_e3b65942',
        shine: 'Separator_shine_afbe5b6c',
        shine__sideRight: 'Separator_shine__sideRight_135c602f',
        arrowContainer: 'Separator_arrowContainer_65da755d',
        arrow: 'Separator_arrow_42ab3099',
        base__highlighted: 'Separator_base__highlighted_68dca4b0',
        fadeIn: 'Separator_fadeIn_68dca4b0',
        fadeInThreeQuarters: 'Separator_fadeInThreeQuarters_68dca4b0',
        fadeInHalf: 'Separator_fadeInHalf_68dca4b0',
        fadeOut: 'Separator_fadeOut_68dca4b0',
        fadeInWithScale: 'Separator_fadeInWithScale_68dca4b0',
        slideUp: 'Separator_slideUp_68dca4b0',
        scale: 'Separator_scale_68dca4b0',
        raysAppearance: 'Separator_raysAppearance_68dca4b0',
        rotate: 'Separator_rotate_68dca4b0',
        'reverse-rotate': 'Separator_reverse-rotate_68dca4b0',
        glowAppearance: 'Separator_glowAppearance_68dca4b0',
        highlightAppearance: 'Separator_highlightAppearance_68dca4b0',
        blink: 'Separator_blink_68dca4b0',
        slideUpIn: 'Separator_slideUpIn_68dca4b0',
    };
var Qc = ((e) => (
    (e.Normal = 'normal'),
    (e.Highlighted = 'highlighted'),
    (e.SideLeft = 'sideLeft'),
    (e.SideRight = 'sideRight'),
    e
))(Qc || {});
const zc = ({ type: s }) =>
        'sideLeft' === s || 'sideRight' === s
            ? e.jsx('div', {
                  className: Mc.line,
                  children: e.jsx('div', { className: a(Mc.shine, Mc[`shine__${s}`]) }),
              })
            : e.jsxs('div', {
                  className: a(Mc.base, Mc[`base__${s}`]),
                  children: [
                      e.jsx('div', { className: a(Mc.line, Mc.line__top) }),
                      e.jsx('div', { className: Mc.arrowContainer, children: e.jsx('div', { className: Mc.arrow }) }),
                      e.jsx('div', { className: a(Mc.line, Mc.line__bottom) }),
                  ],
              }),
    Hc = 'WeeklyList_6acdc358',
    Vc = r(({ weeklyIndex: t, className: r }) => {
        const { model: n } = vc(),
            { computes: i } = n;
        return e.jsxs('div', {
            className: a(Hc, r),
            children: [
                e.jsx(zc, { type: Qc.SideLeft }),
                N(ja, (a) =>
                    e.jsxs(
                        s.Fragment,
                        {
                            children: [
                                a > 0 && e.jsx(zc, { type: i.isQuestLocked(t, a) ? Qc.Normal : Qc.Highlighted }),
                                e.jsx(Uc, { weeklyIndex: t, index: a }),
                            ],
                        },
                        a,
                    ),
                ),
                e.jsx(zc, { type: Qc.SideRight }),
            ],
        });
    }),
    $c = 'QuestsList_f1b4ae36',
    Fc = 'QuestsList_scrollWrapper_f3107796',
    qc = 'QuestsList_weeklyList_832ee756',
    Oc = 'QuestsList_countdownStatus_b8e9a999',
    Yc = 'QuestsList_countdownStatus__show_80949577',
    Gc = { wrapper: 'QuestsList_contentWrapper_d60860bf', content: 'QuestsList_scrollContent_c8f7fb3d' },
    Xc = r(({ className: t }) => {
        const [r, n] = s.useState(!1),
            { model: i } = vc(),
            o = Math.floor(i.questCards.get().length / ja),
            d = o > 1,
            { api: c } = q();
        return (
            O(c, c.settings.animationConfig),
            s.useEffect(() => {
                const e = () => {
                    const [, e] = c.getBounds();
                    n(e - c.animationScroll.scrollPosition.get() < 20);
                };
                return (
                    c.events.on('change', e),
                    c.events.on('resizeHandled', e),
                    c.events.on('recalculateContent', e),
                    () => {
                        (c.events.off('change', e),
                            c.events.off('resizeHandled', e),
                            c.events.off('recalculateContent', e));
                    }
                );
            }, [c]),
            e.jsxs('div', {
                className: a($c, t),
                children: [
                    e.jsx(Y, {
                        className: Fc,
                        classNames: Gc,
                        children: N(o, (a) => e.jsx(Vc, { weeklyIndex: a, className: qc }, a)),
                    }),
                    e.jsx('div', { className: a(Oc, (r || !d) && Yc), children: e.jsx(Nc, {}) }),
                ],
            })
        );
    }),
    Kc = 'ClaimRewardsButton_18e5447e',
    Jc = 'ClaimRewardsButton_light_be50b778',
    Zc = 'ClaimRewardsButton_inner_7b993d26',
    el = 'ClaimRewardsButton_inner__disabled_d2c4d3fe',
    al = 'ClaimRewardsButton_button_878a517b',
    sl = 'ClaimRewardsButton_button__disabled_47a644a1',
    tl = 'ClaimRewardsButton_buttonBlink_6b3105f0',
    rl = 'ClaimRewardsButton_buttonText_c765bc66',
    nl = { from: { opacity: 0 }, to: { opacity: 0.6 }, delay: 500, config: { duration: 300 } },
    il = ({ isDisabled: s, onClick: t, children: r, className: n }) => {
        const i = o(nl);
        return e.jsx(_, {
            isEnabled: s,
            body: R.strings.comp7_ext.claimRewards.rewardsUnavailable(),
            children: e.jsxs('div', {
                className: a(Kc, n),
                children: [
                    !s && e.jsx(d.div, { className: Jc, style: i }),
                    e.jsx('div', {
                        className: a(Zc, s && el),
                        children: e.jsxs(Ne, {
                            type: ye.ghost,
                            size: Ie.small,
                            disabled: s,
                            onClick: t,
                            mixClass: a(al, s && sl),
                            children: [
                                !s && e.jsx('div', { className: tl }),
                                e.jsx('div', {
                                    className: rl,
                                    children: r || R.strings.comp7_ext.claimRewards.button(),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    },
    ol = {
        base: 'AnimatedReward_4c41ec42',
        claimRewardsButton: 'AnimatedReward_claimRewardsButton_ce13cc98',
        shine: 'AnimatedReward_shine_8034dda6',
    },
    dl = {
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 600,
        config: { duration: 300 },
        onStart: () => {
            u.sound(R.sounds.bp_pick_up_award());
        },
    },
    cl = ({ reward: s, onClick: t, isDisabled: r, className: n }) => {
        const i = o(dl);
        return e.jsxs('div', {
            className: a(ol.base, n),
            children: [
                e.jsx(d.div, { className: ol.shine, style: i }),
                e.jsx('div', { className: ol.claimRewardsButton, children: e.jsx(il, { isDisabled: r, onClick: t }) }),
                e.jsx(ne, { ...s, className: ol.reward }),
            ],
        });
    },
    ll = 'FinalRewards_9a8bf88c',
    _l = 'FinalRewards_wrapper_170e19ff',
    ml = 'FinalRewards_reward_21094ad5',
    ul = 'FinalRewards_reward__achieved_4f37d4ba',
    pl = 'FinalRewards_check_e0f8cdc4',
    hl = r(({ rewards: s, className: t }) => {
        const { model: r, controls: n } = vc(),
            { choiceRewardState: i } = r.root.get(),
            { model: o } = Va(),
            { isDisabled: d } = o.claimRewardsModel.get();
        return e.jsxs('div', {
            className: a(ll, t),
            children: [
                v(s, (s, t) =>
                    e.jsx(
                        'div',
                        {
                            className: _l,
                            children:
                                'deluxe_gift' === s.name && i === Ca.Active
                                    ? e.jsx(cl, {
                                          reward: s,
                                          onClick: n.goToRewardsSelection,
                                          isDisabled: d,
                                          className: ml,
                                      })
                                    : e.jsx(ne, { ...s, className: a(ml, i === Ca.Claimed && ul) }),
                        },
                        t,
                    ),
                ),
                i === Ca.Claimed && e.jsx('div', { className: pl }),
            ],
        });
    }),
    gl = 'TokenPoint_b2c16526',
    fl = 'TokenPoint_tokenValue_9a7b3b15',
    bl = 'TokenPoint_tokenValue__passed_90164b9e',
    xl = 'TokenPoint_serif_397af316',
    vl = 'TokenPoint_rewards_b91973cd',
    Sl = 'TokenPoint_rewards__passed_f41dfa43',
    wl = 'TokenPoint_reward_a1f93701',
    kl = 'TokenPoint_check_df0c82c9',
    Rl = se.Small,
    Pl = r(({ tokenValue: s, rewards: t }) => {
        const { model: r } = vc(),
            { questsPassed: n } = r.root.get(),
            i = n > 0 && n >= s;
        return e.jsxs('div', {
            className: gl,
            children: [
                e.jsx('div', { className: a(fl, i && bl), children: s }),
                e.jsx('div', { className: xl }),
                t &&
                    e.jsx(te, {
                        data: xa({ rewards: t, size: Rl }),
                        size: Rl,
                        classMix: a(vl, i && Sl),
                        rewardItemClassMix: wl,
                    }),
                i && 0 !== s && t && e.jsx('div', { className: kl }),
            ],
        });
    }),
    jl = 'TokenProgress_6a6dc31c',
    Cl = 'TokenProgress_header_13e02096',
    Nl = 'TokenProgress_subheader_aafe2591',
    Il = 'TokenProgress_content_d23c6c0c',
    yl = 'TokenProgress_progress_fae098e6',
    Al = 'TokenProgress_progressBar_8b59b672',
    Tl = 'TokenProgress_points_984654f1',
    Ll = 'TokenProgress_point_b0b7f70e',
    Bl = 'TokenProgress_finalRewards_9e9ca6b',
    El = (e, a) => ({ left: (100 / e) * a + '%' }),
    Dl = se.Big,
    Wl = r(({ className: t }) => {
        const { model: r, controls: n } = vc(),
            { previousQuestsPassed: i, questsPassed: o } = r.root.get(),
            d = r.progressPoints.get(),
            c = w(d, d.length - 1),
            l = (null == c ? void 0 : c.count) ?? 0,
            _ = s.useRef(Ae.Idle);
        return e.jsxs('div', {
            className: a(jl, t),
            children: [
                e.jsx(D, {
                    text: R.strings.comp7_ext.weeklyQuests.TokenProgress.header(),
                    binding: { passed: o, total: l },
                    classMix: Cl,
                }),
                e.jsx(U, {
                    text: R.strings.comp7_ext.weeklyQuests.TokenProgress.subheader(ja),
                    binding: { value: ja },
                    classMix: Nl,
                }),
                e.jsxs('div', {
                    className: Il,
                    children: [
                        e.jsxs('div', {
                            className: yl,
                            children: [
                                e.jsx('div', {
                                    className: Al,
                                    children: e.jsx(ha, {
                                        value: o,
                                        maxValue: l,
                                        deltaFrom: i,
                                        onChangeAnimationState: (e) => {
                                            ((_.current = e), e === Ae.Shrink && n.animationStart());
                                        },
                                        onEndAnimation: n.animationEnd,
                                    }),
                                }),
                                e.jsxs('div', {
                                    className: Tl,
                                    children: [
                                        e.jsx('div', { className: Ll, children: e.jsx(Pl, { tokenValue: 0 }) }),
                                        v(d, (a, s) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: Ll,
                                                    style: El(l, a.count),
                                                    children: e.jsx(Pl, {
                                                        tokenValue: a.count,
                                                        rewards: s === d.length - 1 ? void 0 : a.rewards,
                                                    }),
                                                },
                                                s,
                                            ),
                                        ),
                                    ],
                                }),
                            ],
                        }),
                        c && e.jsx(hl, { rewards: xa({ rewards: c.rewards, size: Dl }), className: Bl }),
                    ],
                }),
            ],
        });
    }),
    Ul = 'WeeklyQuestsPage_e1246e87',
    Ml = 'WeeklyQuestsPage_content_968b1834',
    Ql = 'WeeklyQuestsPage_questsList_d039410f',
    zl = 'WeeklyQuestsPage_progression_ad79fcdc',
    Hl = () => {
        const a = o(Ke),
            s = J();
        return e.jsxs('div', {
            className: Ul,
            'data-test-id': 'weekly-quests-page',
            children: [
                e.jsx(oa, {}),
                e.jsxs(d.div, {
                    className: Ml,
                    style: a,
                    children: [
                        e.jsx(Z, { api: s, children: e.jsx(Xc, { className: Ql }) }),
                        e.jsx(Wl, { className: zl }),
                    ],
                }),
            ],
        });
    },
    Vl = {
        inactiveProgression: { name: 'inactiveProgression', delay: 600 },
        firstStageSeasonPoints: { name: 'firstStageSeasonPoints', delay: 100 },
        firstStage: { name: 'firstStage', delay: 800 },
        secondStageSeasonPoints: { name: 'secondStageSeasonPoints', delay: 100 },
        secondStage: { name: 'secondStage', delay: 800 },
        thirdStageSeasonPoints: { name: 'thirdStageSeasonPoints', delay: 100 },
        thirdStage: { name: 'thirdStage', delay: 800 },
        fourthStageSeasonPoints: { name: 'fourthStageSeasonPoints', delay: 100 },
        fourthStage: { name: 'fourthStage', delay: 800 },
        fifthStageSeasonPoints: { name: 'fifthStageSeasonPoints', delay: 100 },
        fifthStage: { name: 'fifthStage', delay: 800 },
        sixthStageSeasonPoints: { name: 'sixthStageSeasonPoints', delay: 100 },
        sixthStage: { name: 'sixthStage', delay: 800 },
        showLegend: { name: 'showLegend', delay: 700 },
        transitionToRealData: { name: 'transitionToRealData', delay: 1e3 },
        realData: { name: 'realData', delay: 0 },
    },
    $l = [Vl.firstStage, Vl.secondStage, Vl.thirdStage, Vl.fourthStage, Vl.fifthStage, Vl.sixthStage],
    Fl = $l.map((e) => e.name),
    ql = s.createContext(null),
    Ol = () => {
        const e = s.useContext(ql);
        if (null === e)
            throw new Error(
                'useAnimationApi was called in component, which is not wrapped in YearlyRewardsPageAnimationContext',
            );
        return e;
    },
    Yl = Na({
        steps: [
            Vl.inactiveProgression,
            Vl.firstStageSeasonPoints,
            Vl.firstStage,
            Vl.secondStageSeasonPoints,
            Vl.secondStage,
            Vl.thirdStageSeasonPoints,
            Vl.thirdStage,
            Vl.fourthStageSeasonPoints,
            Vl.fourthStage,
            Vl.fifthStageSeasonPoints,
            Vl.fifthStage,
            Vl.sixthStageSeasonPoints,
            Vl.sixthStage,
            Vl.showLegend,
            Vl.transitionToRealData,
            Vl.realData,
        ],
    }),
    Gl = ({ children: a }) => {
        const s = Yl();
        return e.jsx(ql.Provider, { value: s, children: a });
    };
var Xl = ((e) => (
        (e.Guaranteed = 'guaranteed'),
        (e.Possible = 'possible'),
        (e.NotAvailable = 'notAvailable'),
        (e.Claimed = 'claimed'),
        e
    ))(Xl || {}),
    Kl = ((e) => (
        (e.Default = 'default'),
        (e.NotAccruedRewards = 'notAccruedRewards'),
        (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
        (e.RewardsReceived = 'rewardsReceived'),
        e
    ))(Kl || {});
const Jl = ['customizations', 'modernized_devices_t1_gift', 'modernized_devices_t2_gift', 'modernized_devices_t3_gift'],
    Zl = ['vehicles', 'premiumTank'],
    e_ = ['styleProgressToken'],
    a_ = ['modernized_devices_t1_gift', 'modernized_devices_t2_gift', 'modernized_devices_t3_gift', 'deluxe_gift'];
const s_ = (e) => Jl.includes(e.name),
    t_ = (e) => Zl.includes(e.name),
    r_ = (e) => a_.includes(e.name);
function n_(e) {
    return _e(
        e,
        (e, a, s) => (
            void 0 === e.vehicleIndex && t_(a)
                ? (e.vehicleIndex = s)
                : void 0 === e.style3dIndex && ((e) => e_.includes(e.name))(a)
                  ? (e.style3dIndex = s)
                  : void 0 === e.claimableRewardIndex && r_(a) && (e.claimableRewardIndex = s),
            e
        ),
        { vehicleIndex: void 0, style3dIndex: void 0, claimableRewardIndex: void 0 },
    );
}
function i_({ reward: e, bannerState: a, cardIndex: s, maxAchievedCardIndex: t }) {
    return a === Kl.RewardsSelectionAvailable && s <= t && r_(e) && !e.claimed;
}
const [o_, d_] = b()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    cards: e.array('cards'),
                    ranks: e.array('ranks'),
                    hoveredCardIndex: c.box(-1),
                },
                s = t(
                    (e) => {
                        const s = w(a.cards.get(), e);
                        if (!s) throw new Error(`card with index ${e} was not found`);
                        const { rewardsState: t } = s;
                        return { rewardsState: t };
                    },
                    { equals: n.shallow },
                ),
                r = t(
                    (e) => {
                        const s = w(a.cards.get(), e);
                        if (!s) throw new Error(`rewards: card with index ${e} was not found`);
                        return v(s.rewards, (e) => ({ ...e }));
                    },
                    { equals: x },
                ),
                i = t(
                    (e) => {
                        const s = w(a.cards.get(), e);
                        if (!s) throw new Error(`card with index ${e} was not found`);
                        return v(s.seasonPoints, (e) => ({ ...e }));
                    },
                    { equals: x },
                ),
                o = t(
                    (e, a) => {
                        const s = i(e);
                        if (!s) throw new Error(`season points array with card index ${e} was not found`);
                        const t = w(s, a);
                        if (!t) throw new Error(`season point with index ${a} in card with index ${e} was not found`);
                        return t;
                    },
                    { equals: x },
                ),
                d = t((e) => [...ae(a.cards.get(), 0, e)].reduce((e, a) => (e += a.seasonPoints.length), 0)),
                l = t((e) =>
                    _e(
                        a.cards.get(),
                        (a, s) =>
                            a +
                            (function (e, a) {
                                return Te(e, ({ season: e }) => e === a).length;
                            })(s.seasonPoints, e),
                        0,
                    ),
                ),
                _ = t(
                    () => {
                        const e = a.cards.get();
                        return {
                            possible: Ee(e, (e) => e.rewardsState === Xl.Possible),
                            guaranteed: Ee(e, (e) => e.rewardsState === Xl.Guaranteed),
                        };
                    },
                    { equals: n.shallow },
                ),
                m = t(
                    () => {
                        const e = (function (e, a) {
                            for (let s = 0; s < e.length; s++) {
                                const t = Le(e, s),
                                    r = V(t.rewards, a);
                                if (r) return r;
                            }
                        })(a.cards.get(), t_);
                        if (!e) throw new Error('no one card consists vehicle, please change config with rewards');
                        return { ...e };
                    },
                    { equals: x },
                ),
                u = t(
                    () => {
                        const e = V(a.cards.get(), (e) => void 0 !== V(e.rewards, t_));
                        if (!e) throw new Error('no one card consists vehicle, please change config with rewards');
                        return { ...e.vehicle };
                    },
                    { equals: x },
                ),
                p = t(() => {
                    const { possible: e, guaranteed: s } = _();
                    return (function ({ maxIndex: e, possible: a, guaranteed: s }) {
                        return void 0 !== a ? Be(0, e, a + 1) : void 0 !== s ? Be(0, e, s + 1) : 0;
                    })({ maxIndex: a.cards.get().length - 1, possible: e, guaranteed: s });
                }),
                h = t(() => {
                    const e = a.cards.get();
                    return Ee(e, (e) => !De(e.seasonPoints, (e) => e.state === Ge.NotAchieved)) ?? -1;
                }),
                g = t((e) => V(r(e), s_), { equals: x }),
                f = t((e) => {
                    const s = g(e);
                    if (!s) return !1;
                    const t = h(),
                        { bannerState: r } = a.root.get();
                    return i_({ reward: s, bannerState: r, cardIndex: e, maxAchievedCardIndex: t });
                }),
                b = t((e) => {
                    const s = w(a.ranks.get(), e);
                    if (!s) throw new Error(`rank with index ${e} was not found`);
                    return { ...s };
                }),
                S = t((e) => {
                    const a = v(b(e).divisions, (e) => ({ ...e }));
                    return vt(a);
                }),
                k = t((e) => {
                    const a = r(e),
                        s = H(a, s_);
                    return void 0 === s ? a : Te(a, (e, a) => a !== s);
                }),
                R = t(
                    (e) => {
                        const s = k(e),
                            { vehicleIndex: t, style3dIndex: r, claimableRewardIndex: n } = n_(s);
                        return {
                            hasStyle3d: void 0 !== r,
                            showClaimableReward:
                                void 0 !== n &&
                                i_({
                                    reward: s[n],
                                    bannerState: a.root.get().bannerState,
                                    cardIndex: e,
                                    maxAchievedCardIndex: h(),
                                }),
                            showPlus: void 0 !== t && void 0 !== r && r - t == 1 && t % 2 == 0,
                            vehicleIndex: t,
                            style3dIndex: r,
                            claimableRewardIndex: n,
                        };
                    },
                    { equals: n.shallow },
                ),
                P = t(() => {
                    const { bannerState: e } = a.root.get();
                    if (e !== Kl.RewardsSelectionAvailable) return !1;
                    const s = h();
                    return De(a.cards.get(), (a, t) =>
                        De(a.rewards, (a) => i_({ reward: a, bannerState: e, cardIndex: t, maxAchievedCardIndex: s })),
                    );
                }),
                j = t(() => {
                    const e = a.root.get().currentRank,
                        s = H(a.ranks.get(), (a) => a.rank === e);
                    if (void 0 === s)
                        throw new Error(
                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                        );
                    return s;
                }),
                C = t((e) => !a.root.get().isQualificationActive && e <= j());
            return {
                ...a,
                computes: {
                    card: s,
                    seasonPoint: o,
                    mainReward: g,
                    shouldShowAsClaimableMainReward: f,
                    hasAnyClaimableReward: P,
                    additionalRewards: k,
                    additionalRewardsConfig: R,
                    activeCardIndex: p,
                    maxAchievedCardIndex: h,
                    currentSeasonPointsCount: l,
                    seasonPointsTotalByIndex: d,
                    seasonPointsLength: t((e) => i(e).length),
                    isActiveLegendItem: C,
                    vehicleReward: m,
                    vehicle: u,
                    rankItem: b,
                    divisions: S,
                },
            };
        },
        ({ externalModel: e, model: a }) => ({
            setHoveredCardIndex: l((e) => a.hoveredCardIndex.set(e)),
            goToStylePreview: e.createCallback((e) => ({ cardIndex: e }), 'onGoToStylePreview'),
            goToVehiclePreview: e.createCallback((e, a) => ({ cd: e, cardIndex: a }), 'onGoToVehiclePreview'),
            goToRewardsSelection: e.createCallback((e, a) => ({ name: e, cardIndex: a }), 'onGoToRewardsSelection'),
            setIntroViewed: e.createCallbackNoArgs('onIntroViewed'),
        }),
    ),
    c_ = {
        base: 'Background_9898d9f',
        overlay: 'Background_overlay_3f4fea3a',
        base__hoveredCardIndex_0: 'Background_base__hoveredCardIndex_0_26effab7',
        overlay__firstStage: 'Background_overlay__firstStage_87b450f5',
        base__hoveredCardIndex_1: 'Background_base__hoveredCardIndex_1_26effab7',
        overlay__secondStage: 'Background_overlay__secondStage_f8c46b40',
        base__hoveredCardIndex_2: 'Background_base__hoveredCardIndex_2_26effab7',
        overlay__thirdStage: 'Background_overlay__thirdStage_79ef4d4a',
        base__hoveredCardIndex_3: 'Background_base__hoveredCardIndex_3_26effab7',
        overlay__fourthStage: 'Background_overlay__fourthStage_74091b76',
        base__hoveredCardIndex_4: 'Background_base__hoveredCardIndex_4_26effab7',
        overlay__fifthStage: 'Background_overlay__fifthStage_e37e33b',
        base__hoveredCardIndex_5: 'Background_base__hoveredCardIndex_5_26effab7',
        overlay__full: 'Background_overlay__full_1c3fbea6',
        'base__hoveredCardIndex_-1': 'Background_base__hoveredCardIndex_-1_26effab7',
        base__finishedYear: 'Background_base__finishedYear_26effab7',
        overlay__achieved: 'Background_overlay__achieved_3063fd89',
        base__withIntro: 'Background_base__withIntro_26effab7',
        fadeIn: 'Background_fadeIn_26effab7',
        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_26effab7',
        fadeInHalf: 'Background_fadeInHalf_26effab7',
        fadeOut: 'Background_fadeOut_26effab7',
        fadeInWithScale: 'Background_fadeInWithScale_26effab7',
        slideUp: 'Background_slideUp_26effab7',
        scale: 'Background_scale_26effab7',
        raysAppearance: 'Background_raysAppearance_26effab7',
        rotate: 'Background_rotate_26effab7',
        'reverse-rotate': 'Background_reverse-rotate_26effab7',
        glowAppearance: 'Background_glowAppearance_26effab7',
        highlightAppearance: 'Background_highlightAppearance_26effab7',
        blink: 'Background_blink_26effab7',
        slideUpIn: 'Background_slideUpIn_26effab7',
    },
    l_ = r(({ className: s }) => {
        const { model: t } = d_(),
            { model: r } = Fe(),
            { withIntro: n } = t.root.get(),
            i = t.hoveredCardIndex.get(),
            o = r.year.state.get() === Kn.Finished,
            d = t.computes.maxAchievedCardIndex(),
            c = t.cards.get().length - 1;
        return e.jsxs('div', {
            className: a(
                c_.base,
                n && c_.base__withIntro,
                c_[`base__hoveredCardIndex_${i}`],
                o && c_.base__finishedYear,
                s,
            ),
            children: [
                N(c, (s) =>
                    e.jsx(
                        'div',
                        { className: a(c_.overlay, c_[`overlay__${Fl[s]}`], o && s === d && c_.overlay__achieved) },
                        s,
                    ),
                ),
                e.jsx('div', { className: a(c_.overlay, c_.overlay__full, o && c === d && c_.overlay__achieved) }),
            ],
        });
    }),
    __ = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 600, config: { duration: 300 } },
    m_ = Ke.delay + Ke.config.duration + 500,
    u_ = 'ActiveCardHighlight_16b6f82b',
    p_ = 'ActiveCardHighlight_glow_423a69f4',
    h_ = ({ isAnimated: s, visible: t, hasDelay: r, className: n }) => {
        const i = o({ from: { opacity: 0 }, to: { opacity: t ? 1 : 0 }, delay: r ? m_ : 0, config: { duration: 300 } });
        return e.jsx(d.div, { className: a(u_, n), style: i, children: e.jsx(_a, { className: p_, animated: s }) });
    },
    g_ = 'AdditionalRewards_rewardItem_ee31ff1d',
    f_ = 'AdditionalRewards_reward_3c5d7930',
    b_ = 'AdditionalRewards_reward__withPlus_309d3136',
    x_ = 'AdditionalRewards_reward__claimable_1ed2adc5',
    v_ = 'AdditionalRewards_info_fcdb5694',
    S_ = 'AdditionalRewards_rewardWithPlusImage_275019e0',
    w_ = 'AdditionalRewards_claimableReward_c7f66cac',
    k_ = 'AdditionalRewards_shine_982567ad',
    R_ = 'AdditionalRewards_claimRewardsButton_5eb60b4d',
    P_ = ({ onClick: a, children: s }) => {
        const t = o(__);
        return e.jsxs('div', {
            className: w_,
            children: [
                e.jsx(d.div, { className: k_, style: t }),
                s,
                e.jsx('div', {
                    className: R_,
                    children: e.jsx(il, {
                        isDisabled: !1,
                        onClick: a,
                        children: R.strings.comp7_ext.yearlyRewards.claim(),
                    }),
                }),
            ],
        });
    },
    j_ = se.Small,
    C_ = f_,
    N_ = { info: v_ },
    I_ = r(({ cardIndex: t, visibleRewardsCount: r, className: n, rewardItemClassMix: i }) => {
        const { model: o, controls: d } = d_(),
            c = o.computes.additionalRewards(t),
            l = o.computes.additionalRewardsConfig(t),
            _ = s.useCallback((e, a) => () => d.goToRewardsSelection(e, a), [d]),
            m = s.useMemo(
                () =>
                    v(c, (e, s) => {
                        const n = l.showPlus && s === l.vehicleIndex && r >= 3,
                            i = l.showClaimableReward && s === l.claimableRewardIndex;
                        return {
                            ...ba({ reward: e, size: j_, index: t }),
                            className: a(C_, i && x_, n && b_),
                            classNames: { ...N_, ...(n && { image: S_ }) },
                            ...(i && { RewardWrapper: P_, rewardWrapperProps: { onClick: _(e.name, t) } }),
                        };
                    }),
                [c, l.claimableRewardIndex, l.showClaimableReward, l.showPlus, l.vehicleIndex, t, _, r],
            );
        return e.jsx(te, {
            data: m,
            size: j_,
            count: Fn(c.length, r),
            rewardItemClassMix: a(g_, i),
            boxRewardTooltip: {
                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                args: { fromIndex: r, index: t },
            },
            classMix: n,
            boxRewardClassName: C_,
            boxRewardClassNames: N_,
        });
    }),
    y_ = r(({ cardIndex: a, pointIndex: s, size: t, className: r, classNames: n }) => {
        const { model: i } = d_(),
            o = i.computes.seasonPoint(a, s);
        return e.jsx(E, {
            contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
            args: { state: o.state },
            ignoreShowDelay: !0,
            children: e.jsx('div', {
                className: r,
                children: e.jsx(ma, { ...o, className: null == n ? void 0 : n.point, size: t }),
            }),
        });
    }),
    A_ = 'CardSeasonPoints_654279b7',
    T_ = r(({ cardIndex: s, size: t, className: r, classNames: n }) => {
        const { model: i } = d_();
        return e.jsx('div', {
            className: a(A_, r),
            children: N(i.computes.seasonPointsLength(s), (a) =>
                e.jsx(
                    y_,
                    {
                        cardIndex: s,
                        pointIndex: a,
                        size: t,
                        className: null == n ? void 0 : n.pointWrapper,
                        classNames: { point: null == n ? void 0 : n.point },
                    },
                    a,
                ),
            ),
        });
    }),
    L_ = [
        [{ season: Xe.First }, { season: Xe.First }, { season: Xe.First }],
        [{ season: Xe.First }, { season: Xe.First }, { season: Xe.First }],
        [{ season: Xe.Second }, { season: Xe.Second }, { season: Xe.Second }],
        [{ season: Xe.Second }, { season: Xe.Second }, { season: Xe.Second }],
        [{ season: Xe.Third }, { season: Xe.Third }, { season: Xe.Third }],
        [{ season: Xe.Third }, { season: Xe.Third }, { season: Xe.Third }],
    ],
    B_ = {
        base: 'FakeCardSeasonPoints_8074e42b',
        notAchievedSeasonPoints: 'FakeCardSeasonPoints_notAchievedSeasonPoints_75ad61b2',
        achievedSeasonPoints: 'FakeCardSeasonPoints_achievedSeasonPoints_9a61143e',
        notAchievedPoint: 'FakeCardSeasonPoints_notAchievedPoint_fb7e8fdb',
        achievedPoint: 'FakeCardSeasonPoints_achievedPoint_8586e27d',
        notAchievedPoint__first: 'FakeCardSeasonPoints_notAchievedPoint__first_afd598a0',
        achievedPoint__first: 'FakeCardSeasonPoints_achievedPoint__first_a86c8a7',
        notAchievedPoint__second: 'FakeCardSeasonPoints_notAchievedPoint__second_afd598a0',
        achievedPoint__second: 'FakeCardSeasonPoints_achievedPoint__second_aea8db2d',
        notAchievedPoint__third: 'FakeCardSeasonPoints_notAchievedPoint__third_afd598a0',
        achievedPoint__third: 'FakeCardSeasonPoints_achievedPoint__third_5189fc14',
        base__firstStage: 'FakeCardSeasonPoints_base__firstStage_afd598a0',
        base__secondStage: 'FakeCardSeasonPoints_base__secondStage_afd598a0',
        base__thirdStage: 'FakeCardSeasonPoints_base__thirdStage_afd598a0',
        base__fourthStage: 'FakeCardSeasonPoints_base__fourthStage_afd598a0',
        base__fifthStage: 'FakeCardSeasonPoints_base__fifthStage_afd598a0',
        base__sixthStage: 'FakeCardSeasonPoints_base__sixthStage_afd598a0',
        fadeIn: 'FakeCardSeasonPoints_fadeIn_afd598a0',
        fadeInThreeQuarters: 'FakeCardSeasonPoints_fadeInThreeQuarters_afd598a0',
        fadeInHalf: 'FakeCardSeasonPoints_fadeInHalf_afd598a0',
        fadeOut: 'FakeCardSeasonPoints_fadeOut_afd598a0',
        fadeInWithScale: 'FakeCardSeasonPoints_fadeInWithScale_afd598a0',
        slideUp: 'FakeCardSeasonPoints_slideUp_afd598a0',
        scale: 'FakeCardSeasonPoints_scale_afd598a0',
        raysAppearance: 'FakeCardSeasonPoints_raysAppearance_afd598a0',
        rotate: 'FakeCardSeasonPoints_rotate_afd598a0',
        'reverse-rotate': 'FakeCardSeasonPoints_reverse-rotate_afd598a0',
        glowAppearance: 'FakeCardSeasonPoints_glowAppearance_afd598a0',
        highlightAppearance: 'FakeCardSeasonPoints_highlightAppearance_afd598a0',
        blink: 'FakeCardSeasonPoints_blink_afd598a0',
        slideUpIn: 'FakeCardSeasonPoints_slideUpIn_afd598a0',
    },
    E_ = ['first', 'second', 'third'],
    D_ = ({ cardIndex: s, size: t, className: r, classNames: n }) => {
        const i = L_[s];
        return e.jsxs('div', {
            className: a(B_.base, B_[`base__${Fl[s]}`], r),
            children: [
                e.jsx('div', {
                    className: B_.notAchievedSeasonPoints,
                    children: i.map(({ season: s }, r) =>
                        e.jsx(
                            'div',
                            {
                                className: null == n ? void 0 : n.pointWrapper,
                                children: e.jsx(ma, {
                                    state: Ge.NotAchieved,
                                    season: s,
                                    size: t,
                                    className: a(
                                        B_.notAchievedPoint,
                                        B_[`notAchievedPoint__${E_[r]}`],
                                        null == n ? void 0 : n.point,
                                    ),
                                }),
                            },
                            r,
                        ),
                    ),
                }),
                e.jsx('div', {
                    className: B_.achievedSeasonPoints,
                    children: i.map(({ season: s }, r) =>
                        e.jsx(
                            'div',
                            {
                                className: null == n ? void 0 : n.pointWrapper,
                                children: e.jsx(ma, {
                                    state: Ge.Achieved,
                                    season: s,
                                    size: t,
                                    className: a(
                                        B_.achievedPoint,
                                        B_[`achievedPoint__${E_[r]}`],
                                        null == n ? void 0 : n.point,
                                    ),
                                }),
                            },
                            r,
                        ),
                    ),
                }),
            ],
        });
    },
    W_ = r(({ cardIndex: a, size: s, className: t, classNames: r }) => {
        const { model: n } = d_(),
            i = n.computes.mainReward(a);
        if (!i) throw new Error(`no mainReward in card with index ${a}`);
        return e.jsx(ne, {
            ...ba({ reward: i, size: s, index: a }),
            className: t,
            classNames: { rewardIcon: null == r ? void 0 : r.icon, image: null == r ? void 0 : r.iconContainer },
        });
    }),
    U_ = {
        base: 'RewardsStatus_5602450b',
        description: 'RewardsStatus_description_386cd981',
        base__guaranteed: 'RewardsStatus_base__guaranteed_d2a6c8c5',
        base__claimed: 'RewardsStatus_base__claimed_d2a6c8c5',
        base__notAvailable: 'RewardsStatus_base__notAvailable_d2a6c8c5',
        base__possible: 'RewardsStatus_base__possible_d2a6c8c5',
        shadow: 'RewardsStatus_shadow_7f056ff7',
        statusIcon: 'RewardsStatus_statusIcon_9042d7f5',
        fadeIn: 'RewardsStatus_fadeIn_d2a6c8c5',
        fadeInThreeQuarters: 'RewardsStatus_fadeInThreeQuarters_d2a6c8c5',
        fadeInHalf: 'RewardsStatus_fadeInHalf_d2a6c8c5',
        fadeOut: 'RewardsStatus_fadeOut_d2a6c8c5',
        fadeInWithScale: 'RewardsStatus_fadeInWithScale_d2a6c8c5',
        slideUp: 'RewardsStatus_slideUp_d2a6c8c5',
        scale: 'RewardsStatus_scale_d2a6c8c5',
        raysAppearance: 'RewardsStatus_raysAppearance_d2a6c8c5',
        rotate: 'RewardsStatus_rotate_d2a6c8c5',
        'reverse-rotate': 'RewardsStatus_reverse-rotate_d2a6c8c5',
        glowAppearance: 'RewardsStatus_glowAppearance_d2a6c8c5',
        highlightAppearance: 'RewardsStatus_highlightAppearance_d2a6c8c5',
        blink: 'RewardsStatus_blink_d2a6c8c5',
        slideUpIn: 'RewardsStatus_slideUpIn_d2a6c8c5',
    },
    M_ = ({ seasonPointsCount: s, rewardsState: t, className: r }) =>
        e.jsx('div', {
            className: a(U_.base, U_[`base__${t}`], r),
            children: e.jsx(_, {
                body: `${R.strings.comp7_ext.yearlyRewards.rewardsState.tooltip.$dyn(t)}`,
                isEnabled: t !== Xl.Claimed,
                children: e.jsxs('div', {
                    className: U_.description,
                    children: [
                        t === Xl.NotAvailable && e.jsx('div', { className: U_.shadow }),
                        e.jsx('div', { className: U_.statusIcon }),
                        W(`${R.strings.comp7_ext.yearlyRewards.rewardsState.$dyn(t)}`, { count: s }),
                    ],
                }),
            }),
        }),
    Q_ = r(({ index: a, className: s, classNames: t }) => {
        const { mediaSize: r } = h(),
            { model: n, controls: i } = d_(),
            o = n.computes.mainReward(a),
            d = n.computes.vehicle(),
            c = r >= g.Large;
        return o && 'customizations' === o.name
            ? e.jsx('div', {
                  className: s,
                  children: e.jsx(ie, {
                      type: 'preview',
                      onClick: () => i.goToStylePreview(a),
                      isVisibleLabel: c,
                      className: null == t ? void 0 : t.preview,
                      classNames: { label: null == t ? void 0 : t.label },
                      children: c ? R.strings.comp7_ext.yearlyRewards.preview.style2d() : '',
                  }),
              })
            : n.computes.additionalRewardsConfig(a).hasStyle3d
              ? e.jsx('div', {
                    className: s,
                    children: e.jsx(ie, {
                        type: 'preview',
                        onClick: () => i.goToVehiclePreview(d.vehicleCD, a),
                        isVisibleLabel: c,
                        className: null == t ? void 0 : t.preview,
                        classNames: { label: null == t ? void 0 : t.label },
                        children: c ? R.strings.comp7_ext.yearlyRewards.preview.style3d() : '',
                    }),
                })
              : null;
    }),
    z_ = {
        base: 'Column_555cd2ce',
        claimRewardsButton: 'Column_claimRewardsButton_35fb9a51',
        shine: 'Column_shine_6c1adb33',
        mainRewardOuterContainer: 'Column_mainRewardOuterContainer_e11437cb',
        mainRewardContainer: 'Column_mainRewardContainer_4a2886f5',
        mainRewardContainer__big: 'Column_mainRewardContainer__big_bb0aa1a9',
        mainRewardContainer__s232x174: 'Column_mainRewardContainer__s232x174_6b603fc',
        mainRewardContainer__s296x222: 'Column_mainRewardContainer__s296x222_687719f7',
        mainReward: 'Column_mainReward_b23f0a5',
        mainReward__claimable: 'Column_mainReward__claimable_bf17223b',
        previewContainer: 'Column_previewContainer_9a69f18a',
        preview: 'Column_preview_562a11a7',
        previewLabel: 'Column_previewLabel_544eebfa',
        fakeSeasonPointsContainer: 'Column_fakeSeasonPointsContainer_a3acf977',
        seasonPointsContainer: 'Column_seasonPointsContainer_6aa418f5',
        base__withIntro: 'Column_base__withIntro_c28ef31',
        divider: 'Column_divider_889aa3f0',
        divider__highlighted: 'Column_divider__highlighted_5a88a0c7',
        seasonPointWrapper: 'Column_seasonPointWrapper_ee4a132',
        rewardsStatus: 'Column_rewardsStatus_c2c0caa9',
        additionalRewards: 'Column_additionalRewards_7349e314',
        description: 'Column_description_445f7b8c',
        description__visible: 'Column_description__visible_ba690dcb',
        glowContainer: 'Column_glowContainer_bcdfc661',
        hoverArea: 'Column_hoverArea_2e49fb37',
        hoverArea__last: 'Column_hoverArea__last_79e0ed74',
        fadeIn: 'Column_fadeIn_c28ef31',
        fadeInThreeQuarters: 'Column_fadeInThreeQuarters_c28ef31',
        fadeInHalf: 'Column_fadeInHalf_c28ef31',
        fadeOut: 'Column_fadeOut_c28ef31',
        fadeInWithScale: 'Column_fadeInWithScale_c28ef31',
        slideUp: 'Column_slideUp_c28ef31',
        scale: 'Column_scale_c28ef31',
        raysAppearance: 'Column_raysAppearance_c28ef31',
        rotate: 'Column_rotate_c28ef31',
        'reverse-rotate': 'Column_reverse-rotate_c28ef31',
        glowAppearance: 'Column_glowAppearance_c28ef31',
        highlightAppearance: 'Column_highlightAppearance_c28ef31',
        blink: 'Column_blink_c28ef31',
        slideUpIn: 'Column_slideUpIn_c28ef31',
    },
    H_ = { preview: z_.preview, label: z_.previewLabel },
    V_ = { pointWrapper: z_.seasonPointWrapper },
    $_ = r(
        ({
            index: t,
            mainRewardSize: r,
            seasonPointSize: n,
            visibleAdditionalRewardsCount: i,
            hasHighlightDelay: c,
            highlightVisible: l,
            className: _,
        }) => {
            const { mediaSize: m } = h(),
                { model: p, controls: f } = d_(),
                { model: b } = Fe(),
                x = b.year.state.get(),
                { withIntro: v } = p.root.get(),
                { rewardsState: S } = p.computes.card(t),
                w = p.computes.mainReward(t),
                k = p.computes.seasonPointsTotalByIndex(t),
                P = p.computes.activeCardIndex(),
                j = p.computes.maxAchievedCardIndex(),
                C = p.hoveredCardIndex.get(),
                N = p.computes.shouldShowAsClaimableMainReward(t),
                I = o(__),
                y = t === p.cards.get().length - 1,
                A = (({ index: e, hoveredCardIndex: a, maxAchievedCardIndex: s, withIntro: t, yearState: r }) =>
                    t || -1 !== a ? e > a : r === Kn.Finished && e > s)({
                    withIntro: v,
                    hoveredCardIndex: C,
                    maxAchievedCardIndex: j,
                    index: t,
                    yearState: x,
                }),
                T = !v && x !== Kn.Finished && t === P;
            return (
                s.useEffect(() => {
                    t === C && u.sound('comp_7_annual_reward_column');
                }, [C, t]),
                e.jsxs('div', {
                    className: a(z_.base, A && 'grayscaledColumn', v && z_.base__withIntro, _),
                    onMouseEnter: () => f.setHoveredCardIndex(t),
                    onMouseLeave: () => f.setHoveredCardIndex(-1),
                    children: [
                        e.jsx('div', { className: a(z_.hoverArea, y && z_.hoverArea__last) }),
                        e.jsxs('div', {
                            className: z_.fakeSeasonPointsContainer,
                            children: [
                                e.jsx(D_, { cardIndex: t, size: n, classNames: V_ }),
                                !y && e.jsx(Qo, { className: a(z_.divider, t <= C && z_.divider__highlighted) }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: z_.seasonPointsContainer,
                            children: [
                                e.jsx(T_, { cardIndex: t, size: n, classNames: V_ }),
                                !y && e.jsx(Qo, { className: a(z_.divider, t < P && z_.divider__highlighted) }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: z_.mainRewardOuterContainer,
                            children: [
                                N && e.jsx(d.div, { className: z_.shine, style: I }),
                                e.jsx('div', {
                                    className: a(z_.mainRewardContainer, z_[`mainRewardContainer__${r}`]),
                                    children:
                                        w &&
                                        e.jsx(W_, {
                                            cardIndex: t,
                                            size: r,
                                            className: a(z_.mainReward, N && z_.mainReward__claimable),
                                        }),
                                }),
                                w &&
                                    N &&
                                    e.jsx('div', {
                                        className: z_.claimRewardsButton,
                                        children: e.jsx(il, {
                                            isDisabled: !1,
                                            onClick: () => f.goToRewardsSelection(w.name, t),
                                            children:
                                                m >= g.Medium
                                                    ? R.strings.comp7_ext.yearlyRewards.claimReward()
                                                    : R.strings.comp7_ext.yearlyRewards.claim(),
                                        }),
                                    }),
                            ],
                        }),
                        e.jsx(Q_, { index: t, className: z_.previewContainer, classNames: H_ }),
                        e.jsx(M_, { seasonPointsCount: k, rewardsState: S, className: z_.rewardsStatus }),
                        e.jsx(I_, { cardIndex: t, visibleRewardsCount: i, className: z_.additionalRewards }),
                        e.jsxs('div', {
                            className: a(z_.description, T && z_.description__visible),
                            children: [
                                e.jsx(h_, { hasDelay: c, visible: l, isAnimated: T, className: z_.glowContainer }),
                                R.strings.comp7_ext.yearlyRewards.stageDescription.active(),
                            ],
                        }),
                    ],
                })
            );
        },
    ),
    F_ = 'Columns_e3ccf77b',
    q_ = r(({ className: t }) => {
        const { mediaSize: r } = h(),
            { model: n } = d_(),
            { model: i } = Fe(),
            c = n.computes.hasAnyClaimableReward(),
            { withIntro: l } = n.root.get(),
            _ = i.year.state.get(),
            m = Ol(),
            p = ((e) => (e >= g.Large ? se.S296x222 : e >= g.Small ? se.S232x174 : se.Big))(r),
            f = ((e) => (e >= g.Medium ? 5 : 2))(r),
            b = ((e) => (e >= g.ExtraLarge ? ua.x32 : ua.x24))(r),
            x = o(Ke),
            [v, S] = (({ api: e, withIntro: a, yearState: t }) => {
                const [r, n] = s.useState(!1),
                    i = We(),
                    o = !a && i;
                return (
                    ge(() => {
                        if (a && t !== Kn.Finished) {
                            const a = () => {
                                n(!0);
                            };
                            return (
                                e.events.on('end', a),
                                () => {
                                    e.events.off('end', a);
                                }
                            );
                        }
                    }),
                    ge(() => {
                        if (o && t !== Kn.Finished)
                            return Ue(() => {
                                n(!0);
                            }, m_);
                    }),
                    s.useEffect(() => {
                        r && u.sound(R.sounds.comp_7_ranks_shine());
                    }, [r]),
                    [o, r]
                );
            })({ api: m, withIntro: l, yearState: _ });
        return (
            s.useEffect(() => {
                if (c)
                    return Ue(() => {
                        u.sound(R.sounds.bp_pick_up_award());
                    }, 600);
            }, [c]),
            e.jsx(d.div, {
                className: a(F_, t),
                style: x,
                children: N(n.cards.get().length, (a) =>
                    e.jsx(
                        $_,
                        {
                            index: a,
                            mainRewardSize: p,
                            seasonPointSize: b,
                            hasHighlightDelay: v,
                            highlightVisible: S,
                            visibleAdditionalRewardsCount: f,
                        },
                        a,
                    ),
                ),
            })
        );
    }),
    O_ = (e) => (e >= g.Large ? ua.x32 : ua.x24),
    Y_ = {
        base: 'Legend_1d8cea3',
        inner: 'Legend_inner_355ec7bd',
        item: 'Legend_item_37466004',
        rankWrapper: 'Legend_rankWrapper_1f69ba8',
        highlight: 'Legend_highlight_83e351af',
        rankWrapper__withIntro: 'Legend_rankWrapper__withIntro_b3134d98',
        rankEmblem: 'Legend_rankEmblem_aadf1d28',
        rankEmblem__active: 'Legend_rankEmblem__active_de67b4ea',
        arrowContainer: 'Legend_arrowContainer_76235e8',
        arrow: 'Legend_arrow_e9fde619',
        pointsCount: 'Legend_pointsCount_17907e53',
        countContainer: 'Legend_countContainer_4e95cc4a',
        fakeCount: 'Legend_fakeCount_71dc7639',
        count: 'Legend_count_ae57c3bf',
        base__withIntro: 'Legend_base__withIntro_b3134d98',
        seasonPoint: 'Legend_seasonPoint_b0261b6c',
        status: 'Legend_status_89b99fd5',
        rank: 'Legend_rank_752e311',
        verticalSeparator: 'Legend_verticalSeparator_64e3de8a',
        seasonPointIcon: 'Legend_seasonPointIcon_89b57fd8',
    },
    G_ = r(({ index: s, size: t, seasonName: r, className: n }) => {
        const { model: i } = d_(),
            { currentRank: o, topPercentage: d, withIntro: c } = i.root.get(),
            l = i.computes.isActiveLegendItem(s),
            _ = i.computes.rankItem(s);
        return e.jsx(
            'div',
            {
                className: n,
                children: e.jsxs('div', {
                    className: a(Y_.rankWrapper, c && Y_.rankWrapper__withIntro),
                    children: [
                        _.rank === o &&
                            e.jsx(re, {
                                className: Y_.highlight,
                                src: String(R.videos.comp7.godRaysNew_130x130()),
                                autoplay: !0,
                                loop: !0,
                            }),
                        e.jsx(Js, {
                            rank: _.rank,
                            from: _.from,
                            to: _.to,
                            topPercentage: d,
                            divisions: i.computes.divisions(s),
                            className: Y_.tooltipArea,
                            ignoreShowDelay: !0,
                            children: e.jsx(Ze, {
                                seasonName: r,
                                rank: _.rank,
                                size: t,
                                className: a(Y_.rankEmblem, l && Y_.rankEmblem__active),
                            }),
                        }),
                    ],
                }),
            },
            s,
        );
    }),
    X_ = 'possible',
    K_ = { state: X_, ignoreState: !0 },
    J_ = r(({ className: s }) => {
        const { mediaSize: t } = h(),
            { model: r } = d_(),
            { model: n } = Fe(),
            { currentRank: i, isQualificationActive: o, withIntro: d } = r.root.get(),
            c = n.season.name.get(),
            l = n.year.state.get(),
            _ = r.computes.currentSeasonPointsCount(n.season.name.get()),
            m = ((e) => {
                switch (e) {
                    case Kn.Active:
                        return {
                            rank: R.strings.comp7_ext.yearlyRewards.rank.current(),
                            description: R.strings.comp7_ext.yearlyRewards.description.current(),
                        };
                    case Kn.OffSeason:
                    case Kn.Finished:
                        return {
                            rank: R.strings.comp7_ext.yearlyRewards.rank.achieved(),
                            description: R.strings.comp7_ext.yearlyRewards.description.achieved(),
                        };
                    default:
                        return (
                            console.error(`Provide text strings for current/achieved rank for YearState: ${e}`),
                            { rank: '', description: '' }
                        );
                }
            })(l),
            u = ((e) => (e >= g.Large ? ea.x64 : ea.x48))(t);
        return e.jsxs('div', {
            className: a(Y_.base, d && Y_.base__withIntro, s),
            children: [
                e.jsxs('div', {
                    className: Y_.status,
                    children: [
                        !o &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(U, {
                                        text: m.rank,
                                        binding: {
                                            rank: e.jsx('div', {
                                                className: Y_.rank,
                                                children: W(R.strings.comp7_ext.quotesWrapper(), { name: na(i) }),
                                            }),
                                        },
                                        classMix: Y_.secondaryText,
                                    }),
                                    e.jsx('div', { className: Y_.verticalSeparator }),
                                ],
                            }),
                        e.jsx(U, {
                            text: m.description,
                            binding: {
                                seasonPointIcon: e.jsx(E, {
                                    contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
                                    args: K_,
                                    ignoreShowDelay: !0,
                                    children: e.jsx('div', {
                                        children: e.jsx(ma, {
                                            state: X_,
                                            season: c,
                                            size: ua.x16,
                                            className: Y_.seasonPointIcon,
                                        }),
                                    }),
                                }),
                            },
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: Y_.inner,
                    children: [
                        N(r.ranks.get().length, (a) =>
                            e.jsx(G_, { index: a, size: u, seasonName: c, className: Y_.item }, a),
                        ),
                        e.jsx('div', { className: Y_.arrowContainer, children: e.jsx('div', { className: Y_.arrow }) }),
                        e.jsxs('div', {
                            className: Y_.pointsCount,
                            children: [
                                e.jsxs('div', {
                                    className: Y_.countContainer,
                                    children: [
                                        e.jsx('div', { className: Y_.fakeCount, children: '0' }),
                                        e.jsx('div', { className: Y_.count, children: _ }),
                                    ],
                                }),
                                e.jsx('div', {
                                    className: Y_.seasonPoint,
                                    children: e.jsx(E, {
                                        contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
                                        args: K_,
                                        ignoreShowDelay: !0,
                                        children: e.jsx('div', {
                                            children: e.jsx(ma, { state: X_, season: c, size: O_(t) }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Z_ = 'StatusBanner_38fab065',
    em = 'StatusBanner_description_b2b220da',
    am = r(({ className: s }) => {
        const { model: t } = d_(),
            { bannerState: r } = t.root.get();
        return e.jsx('div', {
            className: a(Z_, s),
            children: e.jsx('div', {
                className: em,
                children: String(R.strings.comp7_ext.yearlyRewards.banner.$dyn(r)),
            }),
        });
    }),
    sm = {
        base: 'Vehicle_d31a82f4',
        vehicleBg: 'Vehicle_vehicleBg_28702555',
        vehicleBg__inactive: 'Vehicle_vehicleBg__inactive_2034ba44',
        vehicleBg__2: 'Vehicle_vehicleBg__2_b33ff168',
        base__selectedIndex_2: 'Vehicle_base__selectedIndex_2_c03ad304',
        vehicleBg__3: 'Vehicle_vehicleBg__3_629a5bfe',
        base__selectedIndex_3: 'Vehicle_base__selectedIndex_3_c03ad304',
        vehicleBg__4: 'Vehicle_vehicleBg__4_7a979a04',
        base__selectedIndex_4: 'Vehicle_base__selectedIndex_4_c03ad304',
        vehicleBg__5: 'Vehicle_vehicleBg__5_2199df38',
        base__selectedIndex_5: 'Vehicle_base__selectedIndex_5_c03ad304',
        fadeIn: 'Vehicle_fadeIn_c03ad304',
        fadeInThreeQuarters: 'Vehicle_fadeInThreeQuarters_c03ad304',
        fadeInHalf: 'Vehicle_fadeInHalf_c03ad304',
        fadeOut: 'Vehicle_fadeOut_c03ad304',
        fadeInWithScale: 'Vehicle_fadeInWithScale_c03ad304',
        slideUp: 'Vehicle_slideUp_c03ad304',
        scale: 'Vehicle_scale_c03ad304',
        raysAppearance: 'Vehicle_raysAppearance_c03ad304',
        rotate: 'Vehicle_rotate_c03ad304',
        'reverse-rotate': 'Vehicle_reverse-rotate_c03ad304',
        glowAppearance: 'Vehicle_glowAppearance_c03ad304',
        highlightAppearance: 'Vehicle_highlightAppearance_c03ad304',
        blink: 'Vehicle_blink_c03ad304',
        slideUpIn: 'Vehicle_slideUpIn_c03ad304',
    },
    tm = [2, 3, 4, 5],
    rm = r(({ className: t }) => {
        const { model: r } = d_(),
            { model: n } = Fe(),
            { withIntro: i } = r.root.get(),
            o = r.hoveredCardIndex.get(),
            d = We(),
            c = n.year.state.get() === Kn.Finished ? r.computes.maxAchievedCardIndex() : r.computes.activeCardIndex(),
            l = !i && tm.includes(c) && -1 === o ? c : o;
        return (
            s.useEffect(() => {
                !d && tm.includes(l) && u.sound('comp_7_annual_reward_tank_emergence_style');
            }, [d, l, i]),
            e.jsxs('div', {
                className: a(sm.base, sm[`base__selectedIndex_${l}`], t),
                children: [
                    e.jsx('div', { className: a(sm.vehicleBg, sm.vehicleBg__inactive) }),
                    tm.map((s) => e.jsx('div', { className: a(sm.vehicleBg, sm[`vehicleBg__${s}`]) }, s)),
                ],
            })
        );
    }),
    nm = 'VehicleInfo_a6ed28fa',
    im = 'VehicleInfo_background_2a7e0ec',
    om = 'VehicleInfo_content_536b4958',
    dm = 'VehicleInfo_title_8c67bd16',
    cm = (e) => (e >= g.Large ? Pa.x64 : Pa.x48),
    lm = r(({ className: s, classNames: t }) => {
        const { mediaSize: r } = h(),
            { model: n } = d_(),
            i = n.computes.vehicleReward(),
            o = n.computes.vehicle();
        return e.jsxs('div', {
            className: a(nm, s),
            children: [
                e.jsx('div', { className: im }),
                e.jsx('div', {
                    className: om,
                    children: e.jsx(U, {
                        text: R.strings.comp7_ext.yearlyRewards.mainYearlyRewardTitle(),
                        binding: {
                            vehicle: e.jsx(Ra, {
                                ...o,
                                size: cm(r),
                                tooltipArgs: { tooltipId: i.tooltipId },
                                vehicleCD: o.vehicleCD,
                                role: o.roleKey,
                            }),
                        },
                        classMix: a(dm, null == t ? void 0 : t.title),
                    }),
                }),
            ],
        });
    }),
    _m = 'YearlyRewardsPage_b4fabdfc',
    mm = 'YearlyRewardsPage_bgContainer_7b9c0dc4',
    um = 'YearlyRewardsPage_error_481edb10',
    pm = 'YearlyRewardsPage_contentWrapper_b226b3ee',
    hm = 'YearlyRewardsPage_vehicle_7cb1ad5e',
    gm = 'YearlyRewardsPage_columns_884e15ad',
    fm = 'YearlyRewardsPage_schedule_8841c048',
    bm = 'YearlyRewardsPage_legend_1c8fdbce',
    xm = 'YearlyRewardsPage_status_9f92f1db',
    vm = 'YearlyRewardsPage_contentWrapper__withIntro_9c60e274',
    Sm = 'YearlyRewardsPage_vehicleInfoContainer_7cb1ad5e',
    wm = 'YearlyRewardsPage_vehicleInfo_b56e25f6',
    km = (e) => window.setTimeout(() => u.sound(R.sounds.comp_7_annual_reward_rank_points()), e),
    Rm = r(() => {
        const { model: t, controls: r } = d_(),
            { hasDataError: n, withIntro: i } = t.root.get(),
            c = o(Ke),
            l = Ol();
        return (
            Me(Qe.ESCAPE, () => l.skipAll(), i),
            ge(() =>
                ze.move(([, e]) => {
                    'outside' !== e || i || r.setHoveredCardIndex(-1);
                }),
            ),
            s.useEffect(() => {
                l.rootRef.current && (l.rootRef.current.style.pointerEvents = i ? 'none' : 'auto');
            }, [l.rootRef, i]),
            s.useEffect(() => {
                if (!i) return;
                const e = [],
                    a = (a) => {
                        switch (($l.includes(a) && r.setHoveredCardIndex($l.findIndex((e) => e === a)), a)) {
                            case Vl.firstStageSeasonPoints:
                            case Vl.secondStageSeasonPoints:
                            case Vl.thirdStageSeasonPoints:
                            case Vl.fourthStageSeasonPoints:
                            case Vl.fifthStageSeasonPoints:
                            case Vl.sixthStageSeasonPoints:
                                e.push(km(0), km(200), km(400));
                        }
                    };
                return (
                    l.events.on('change', a),
                    () => {
                        (l.events.off('change', a), e.forEach((e) => clearTimeout(e)));
                    }
                );
            }, [l.events, r, i]),
            s.useEffect(() => {
                if (!i) return;
                const e = () => {
                    (r.setHoveredCardIndex(-1), r.setIntroViewed());
                };
                return (
                    l.events.on('end', e),
                    () => {
                        l.events.off('end', e);
                    }
                );
            }, [l.events, l.rootRef, r, i]),
            e.jsxs('div', {
                className: _m,
                ref: l.rootRef,
                'data-test-id': 'yearly-rewards-page',
                children: [
                    e.jsx('div', { className: mm, children: e.jsx(l_, {}) }),
                    !n &&
                        e.jsxs(e.Fragment, { children: [e.jsx(rm, { className: hm }), e.jsx(q_, { className: gm })] }),
                    e.jsx(d.div, {
                        style: c,
                        className: a(pm, i && vm),
                        children: n
                            ? e.jsx(ns, { className: um })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('div', { className: bm, children: e.jsx(J_, {}) }),
                                      e.jsx('div', { className: Sm, children: e.jsx(lm, { className: wm }) }),
                                      e.jsx('div', { className: xm, children: e.jsx(am, {}) }),
                                  ],
                              }),
                    }),
                    e.jsx(oa, { className: fm }),
                ],
            })
        );
    }),
    Pm = [Ia.JustStarted, Ia.Active, Ia.EndSoon],
    [jm, Cm] = b()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), seasonCards: e.array('seasonCards') },
                s = t(
                    (e) => {
                        const s = w(a.seasonCards.get(), e);
                        if (!s) throw new Error(`Unexpected card index: ${e}`);
                        return { ...s };
                    },
                    { equals: x },
                ),
                r = t((e) => s(e).season, { equals: x }),
                n = t((e) => r(e).state),
                i = t((e) => n(e) === Ia.NotStarted),
                o = t((e) => Pm.includes(n(e))),
                d = t((e) => s(e).rank),
                c = t((e) => s(e).hasRankReceived);
            return {
                ...a,
                computes: {
                    seasonCard: s,
                    seasonState: n,
                    seasonScheduleInfo: r,
                    isSeasonNotStarted: i,
                    isSeasonActive: o,
                    rank: d,
                    hasRankReceived: c,
                },
            };
        },
        ({ externalModel: e }) => ({
            goToSeasonStatistics: e.createCallback((e) => ({ seasonName: e }), 'onGoToSeasonStatistics'),
        }),
    ),
    Nm = 'Background_37b3a646',
    Im = r(({ index: s, className: t }) => {
        const { model: r } = Cm(),
            { name: n } = r.computes.seasonScheduleInfo(s),
            i = r.computes.hasRankReceived(s),
            o = R.images.comp7.gui.maps.icons.backgrounds.$dyn(n),
            d = i ? ia[r.computes.rank(s)] : 'qualification';
        return e.jsx('div', { className: a(Nm, t), style: { backgroundImage: `url(${o.$dyn(d)})` } });
    }),
    ym = 'CardFooter_2e091ae9',
    Am = 'CardFooter_statisticsAvailability_cb0a44a8',
    Tm = 'CardFooter_generationOfStatistics_47c91b6a',
    Lm = 'CardFooter_icon_dca570a2',
    Bm = r(({ index: s, className: t }) => {
        const { model: r, controls: n } = Cm(),
            { hasStatisticsCalculated: i } = r.computes.seasonCard(s),
            { name: o } = r.computes.seasonScheduleInfo(s);
        return e.jsx('div', {
            className: a(ym, t),
            children: i
                ? e.jsx('div', {
                      onClick: () => n.goToSeasonStatistics(o),
                      children: e.jsx(U, {
                          text: R.strings.comp7_ext.yearlyStatistics.goToSeasonStatistics(),
                          classMix: Am,
                          binding: { icon: e.jsx('div', { className: Lm }) },
                      }),
                  })
                : e.jsx(U, { text: R.strings.comp7_ext.yearlyStatistics.generationOfStatistics(), classMix: Tm }),
        });
    }),
    Em = 'RankStatus_481bd341',
    Dm = 'RankStatus_rank_b62f7c6',
    Wm = 'RankStatus_division_36b5f382',
    Um = r(({ index: a }) => {
        const { model: s } = Cm(),
            { hasRankReceived: t, rank: r, division: n } = s.computes.seasonCard(a);
        return e.jsx('div', {
            className: Em,
            children: t
                ? e.jsxs(e.Fragment, {
                      children: [
                          e.jsx(U, {
                              classMix: Dm,
                              text: R.strings.comp7_ext.yearlyStatistics.rankStatus.received(),
                              binding: { rank: na(r) },
                          }),
                          aa(r) && e.jsx(U, { classMix: Wm, text: la(n) }),
                      ],
                  })
                : e.jsx('div', {
                      className: Dm,
                      children: R.strings.comp7_ext.yearlyStatistics.rankStatus.notReceived(),
                  }),
        });
    }),
    Mm = 'SeasonStatus_276e8c3f',
    Qm = r(({ index: s }) => {
        const { model: t } = Cm(),
            { endTimestamp: r, startTimestamp: n, state: i, hasTentativeDates: o } = t.computes.seasonScheduleInfo(s);
        return e.jsx('div', {
            className: a(Mm),
            children: (() => {
                switch (i) {
                    case Ia.NotStarted:
                        return e.jsx('div', {
                            children: o
                                ? String(R.strings.comp7_ext.yearlyStatistics.seasonDate.$num(s))
                                : e.jsx(U, { text: R.strings.comp7_ext.season.range(), binding: da(n, r) }),
                        });
                    case Ia.JustStarted:
                    case Ia.EndSoon:
                    case Ia.Active:
                        return e.jsx('div', { children: R.strings.comp7_ext.yearlyStatistics.seasonStatus.active() });
                    case Ia.End:
                        return e.jsx('div', { children: R.strings.comp7_ext.yearlyStatistics.seasonStatus.end() });
                    default:
                        return (console.error(`Unreachable season state ${i}`), null);
                }
            })(),
        });
    }),
    zm = 'Row_4b92d9b1',
    Hm = 'Row_base__percentage_dff07ba',
    Vm = 'Row_dashes_6f0ebb88',
    $m = 'Row_value_4ffd89b6',
    Fm = ({ text: s, value: t, className: r, isPercentage: n = !1 }) =>
        e.jsxs('div', {
            className: a(zm, r, n && Hm),
            children: [
                s,
                e.jsx('div', { className: Vm }),
                e.jsx('div', { className: $m, children: pa({ value: t, isPercentage: n }) }),
            ],
        }),
    qm = 'Table_b0baa470',
    Om = 'Table_container_8ee049b2',
    Ym = 'Table_row_aa1a4564',
    Gm = r(({ index: s }) => {
        const { model: t } = Cm(),
            {
                rating: r,
                singleBattlesCount: n,
                singleBattlesWinRate: i,
                superPlatoonBattlesCount: o,
                superPlatoonBattlesWinRate: d,
            } = t.computes.seasonCard(s);
        return e.jsxs('div', {
            className: a(qm),
            children: [
                e.jsx('div', {
                    className: Om,
                    children: e.jsx(Fm, {
                        text: R.strings.comp7_ext.yearlyStatistics.rating(),
                        value: r,
                        className: Ym,
                    }),
                }),
                e.jsxs('div', {
                    className: Om,
                    children: [
                        e.jsx(Fm, { text: R.strings.comp7_ext.yearlyStatistics.battles(), value: n, className: Ym }),
                        e.jsx(Fm, {
                            text: R.strings.comp7_ext.yearlyStatistics.wins(),
                            value: i,
                            isPercentage: !0,
                            className: Ym,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: Om,
                    children: [
                        e.jsx(Fm, {
                            text: R.strings.comp7_ext.yearlyStatistics.superPlatoonBattles(),
                            value: o,
                            className: Ym,
                        }),
                        e.jsx(Fm, {
                            text: R.strings.comp7_ext.yearlyStatistics.wins(),
                            value: d,
                            isPercentage: !0,
                            className: Ym,
                        }),
                    ],
                }),
            ],
        });
    }),
    Xm = (e) => {
        switch (!0) {
            case e >= g.ExtraLarge:
                return ea.x420;
            case e >= g.Large:
                return ea.x260;
            case e >= g.Medium:
                return ea.x200;
            default:
                return ea.x150;
        }
    },
    Km = 'SeasonCard_2725976b',
    Jm = 'SeasonCard_name_f71e7711',
    Zm = 'SeasonCard_rankImage_4800d152',
    eu = 'SeasonCard_cardFooter_596f8b9d',
    au = 'SeasonCard_divider_8113e306',
    su = 'SeasonCard_divider__left_455077e5',
    tu = 'SeasonCard_divider__right_a8eb920c',
    ru = 'SeasonCard_laceBase_9c22a5c9',
    nu = 'SeasonCard_laceContainer_2dd0d837',
    iu = 'SeasonCard_laceContainer__active_af829f8a',
    ou = r(({ index: s, className: t }) => {
        const { model: r } = Cm(),
            { rank: n, division: i, hasRankReceived: o } = r.computes.seasonCard(s),
            { state: d, name: c } = r.computes.seasonScheduleInfo(s),
            l = r.computes.isSeasonActive(s),
            { mediaSize: _ } = h();
        return e.jsxs('div', {
            className: a(Km, t),
            children: [
                0 === s && e.jsx('div', { className: a(au, su) }),
                e.jsx('div', {
                    className: Jm,
                    children: String(R.strings.comp7_ext.yearlyStatistics.seasonName.$num(s)),
                }),
                e.jsx(Qm, { index: s }),
                o
                    ? e.jsx(Ze, { rank: n, size: Xm(_), seasonName: c, division: i, className: Zm })
                    : e.jsx(ga, { size: Xm(_), seasonName: c, className: Zm }),
                e.jsx(Um, { index: s }),
                e.jsx(Gm, { index: s }),
                e.jsx(ya, { className: ru, classNames: { lace: a(nu, l && iu) } }),
                d === Ia.End && o && e.jsx(Bm, { index: s, className: eu }),
                e.jsx('div', { className: a(au, tu) }),
            ],
        });
    }),
    du = {
        base: 'YearlyStatisticsPage_61069c0',
        heading: 'YearlyStatisticsPage_heading_f13f5889',
        contentWrapper: 'YearlyStatisticsPage_contentWrapper_98d0619a',
        cardWrapper: 'YearlyStatisticsPage_cardWrapper_904992f5',
        cardWrapper__left: 'YearlyStatisticsPage_cardWrapper__left_3e387385',
        cardWrapper__right: 'YearlyStatisticsPage_cardWrapper__right_54b1ef77',
        bg__disabled: 'YearlyStatisticsPage_bg__disabled_10c00e50',
        seasonCard__disabled: 'YearlyStatisticsPage_seasonCard__disabled_71e253d2',
        seasonCard: 'YearlyStatisticsPage_seasonCard_3b05718e',
        glow: 'YearlyStatisticsPage_glow_b5eb9295',
    },
    cu = r(({ index: s, className: t }) => {
        const { model: r } = Cm(),
            n = r.computes.isSeasonNotStarted(s),
            i = r.seasonCards.get().length,
            o = r.computes.isSeasonActive(s);
        return e.jsxs(
            'div',
            {
                className: a(du.cardWrapper, 0 === s && du.cardWrapper__left, s === i - 1 && du.cardWrapper__right),
                children: [
                    e.jsx(Im, { index: s, className: a(du.bg, n && du.bg__disabled) }),
                    e.jsxs('div', {
                        className: a(du.seasonCard, n && du.seasonCard__disabled),
                        children: [o && e.jsx('div', { className: du.glow }), e.jsx(ou, { index: s })],
                    }),
                ],
            },
            s,
        );
    }),
    lu = r(() => {
        const { model: a } = Cm(),
            s = o(Ke);
        return e.jsxs('div', {
            className: du.base,
            'data-test-id': 'yearly-statistics-page',
            children: [
                e.jsx('div', { className: du.heading, children: e.jsx(oa, {}) }),
                e.jsx(d.div, {
                    style: s,
                    className: du.contentWrapper,
                    children: N(a.seasonCards.get().length, (a) => e.jsx(cu, { index: a })),
                }),
            ],
        });
    }),
    _u = {
        [Oe.Progression]: () => e.jsx(kt, { options: za.PROGRESSION_PAGE, children: e.jsx(Hn, {}) }),
        [Oe.RankRewards]: () => e.jsx(Vn, { options: za.RANK_REWARDS_PAGE, children: e.jsx(Ni, {}) }),
        [Oe.WeeklyQuests]: () => e.jsx(xc, { options: za.WEEKLY_QUESTS_PAGE, children: e.jsx(Hl, {}) }),
        [Oe.Leaderboard]: () => e.jsx(is, { options: za.LEADERBOARD_PAGE, children: e.jsx(xt, {}) }),
        [Oe.YearlyRewards]: () =>
            e.jsx(o_, { options: za.YEARLY_REWARDS_PAGE, children: e.jsx(Gl, { children: e.jsx(Rm, {}) }) }),
        [Oe.Shop]: () => e.jsx(Ti, { options: za.SHOP_PAGE, children: e.jsx(gc, {}) }),
        [Oe.YearlyStatistics]: () => e.jsx(jm, { options: za.YEARLY_STATISTICS_PAGE, children: e.jsx(lu, {}) }),
    },
    mu = ({ pageView: a }) => {
        const s = _u[a];
        return s ? e.jsx(s, {}) : (console.error('Unreachable code: ViewResolver'), null);
    },
    uu = {
        base: 'App_94d2f69c',
        base__qualification: 'App_base__qualification_48f8ca46',
        base__progression: 'App_base__progression_3ad5bf0f',
        base__leaderboard: 'App_base__leaderboard_0',
        season__first: 'App_season__first_23917983',
        season__second: 'App_season__second_db10f9aa',
        season__third: 'App_season__third_86277c36',
        base__rankRewards: 'App_base__rankRewards_54c8537a',
        base__weeklyQuests: 'App_base__weeklyQuests_ac682f6d',
        base__shop: 'App_base__shop_f5d027a5',
        viewContainer: 'App_viewContainer_4a4552d3',
        sidebar: 'App_sidebar_5608b102',
        sidebar__medium: 'App_sidebar__medium_400586fe',
        choiceAward: 'App_choiceAward_113fdf00',
        fadeIn: 'App_fadeIn_0',
        fadeInThreeQuarters: 'App_fadeInThreeQuarters_0',
        fadeInHalf: 'App_fadeInHalf_0',
        fadeOut: 'App_fadeOut_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideUp: 'App_slideUp_0',
        scale: 'App_scale_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        'reverse-rotate': 'App_reverse-rotate_0',
        glowAppearance: 'App_glowAppearance_0',
        highlightAppearance: 'App_highlightAppearance_0',
        blink: 'App_blink_0',
        slideUpIn: 'App_slideUpIn_0',
    },
    pu = r(() => {
        const { model: s, controls: t } = Va(),
            { model: r } = Fe(),
            n = Ma(),
            { pageViewId: i } = s.root.get(),
            { isDisabled: o, rewardsCount: d } = s.claimRewardsModel.get(),
            { mediaSize: c } = h();
        He(t.close);
        const l = s.computes.isProgressionInQualification();
        return e.jsxs('div', {
            className: a(
                uu.base,
                l && !Ua() && uu.base__qualification,
                !l && uu[`base__${Qa[i]}`],
                uu[`season__${r.season.name.get()}`],
            ),
            children: [
                e.jsx('div', { className: uu.viewContainer, children: e.jsx(mu, { pageView: i }) }),
                e.jsx(qa, {
                    options: za.TABS,
                    children: e.jsx(Ja, { pageView: i, className: a(uu.sidebar, n.isMedium && uu.sidebar__medium) }),
                }),
                d > 0 &&
                    e.jsx('div', {
                        className: uu.choiceAward,
                        children: e.jsx(Wa, {
                            size: c >= g.Large ? Da.Big : Da.Small,
                            count: d,
                            disabled: o,
                            onClick: t.openRewardsSelectionScreen,
                        }),
                    }),
            ],
        });
    });
Ve(e.jsx($e, { children: e.jsx(Ha, { children: e.jsx(qe, { options: za.SCHEDULE, children: e.jsx(pu, {}) }) }) }), {
    fullScreen: !0,
});
