import {
    j as e,
    J as a,
    r as s,
    S as t,
    I as r,
    T as i,
    R as n,
    Q as o,
    P as c,
    U as d,
    V as l,
    W as _,
    X as m,
    Y as u,
    f as h,
    O as g,
} from '../../../chunks/vendor.js';
import {
    cg as p,
    cR as x,
    an as b,
    cS as f,
    aI as v,
    ch as S,
    cT as j,
    i as w,
    cU as N,
    a9 as C,
    cV as k,
    aB as P,
    a7 as I,
    cW as y,
    cX as A,
    P as B,
    m as T,
    U as D,
    cY as L,
    cZ as E,
    O as z,
    a$ as M,
    c_ as W,
    c$ as V,
    cf as H,
    cm as U,
    cd as Q,
    d0 as $,
    d1 as q,
    d2 as O,
    ad as F,
    bp as Y,
    s as G,
    ah as X,
    d3 as K,
    d4 as J,
    bZ as Z,
    d5 as ee,
    d6 as ae,
    d7 as se,
    d8 as te,
    aJ as re,
    am as ie,
    a8 as ne,
    ao as oe,
    aR as ce,
    d9 as de,
    da as le,
    db as _e,
    cc as me,
    dc as ue,
    dd as he,
    de as ge,
    ce as pe,
    aD as xe,
    df as be,
    bQ as fe,
    dg as ve,
    b3 as Se,
    dh as je,
    di as we,
    dj as Ne,
    dk as Ce,
    dl as ke,
    dm as Pe,
    dn as Re,
    au as Ie,
    dp as ye,
    dq as Ae,
    dr as Be,
    ds as Te,
    dt as De,
    bx as Le,
    du as Ee,
    ci as ze,
    aw as Me,
    dv as We,
    dw as Ve,
    ct as He,
    cu as Ue,
    dx as Qe,
    dy as $e,
    dz as qe,
    bq as Oe,
    aL as Fe,
    aO as Ye,
    ac as Ge,
    ap as Xe,
    aN as Ke,
    dA as Je,
    cP as Ze,
    cn as ea,
} from '../../../chunks/lib.js';
import { u as aa, S as sa } from '../../../chunks/schedule_model.js';
import { M as ta, R as ra, S as ia, a as na, b as oa } from '../../../chunks/enums.js';
import { P as ca } from '../../../chunks/consts.js';
import { g as da } from '../../../chunks/get_button_size.js';
import { R as la, a as _a, i as ma, g as ua } from '../../../chunks/rank_emblem.js';
import { g as ha, R as ga, a as pa, b as xa } from '../../../chunks/get_rank_name.js';
import { S as ba, g as fa } from '../../../chunks/schedule_subheading.js';
import { g as va, a as Sa } from '../../../chunks/get_division_name.js';
import { S as ja, g as wa } from '../../../chunks/get_division_points_step.js';
import { D as Na } from '../../../chunks/divine_glow.js';
import { P as Ca } from '../../../chunks/index.js';
import { A as ka } from '../../../chunks/arrow_button.js';
import { D as Pa } from '../../../chunks/diff.js';
import { F as Ra } from '../../../chunks/formatted_statistic_value.js';
import { Q as Ia } from '../../../chunks/qualification_emblem.js';
import { g as ya, N as Aa, f as Ba } from '../../../chunks/get_statistic_value.js';
import { V as Ta, a as Da } from '../../../chunks/vehicle_name.js';
import { Q as La } from '../../../chunks/qualification_battle_item.js';
import { g as Ea, m as za } from '../../../chunks/get_comp7_reward.js';
import { P as Ma, a as Wa, Q as Va } from '../../../chunks/quoted_locale.js';
import { Q as Ha, C as Ua } from '../../../chunks/weekly_quests_model.js';
import { c as Qa } from '../../../chunks/animation_api_factory.js';
import { S as $a, a as qa } from '../../../chunks/season_point.js';
import { S as Oa } from '../../../chunks/season_model.js';
import { L as Fa } from '../../../chunks/lace_divider.js';
/* empty css                     */ import '../../../chunks/get_season_name.js';
import '../../../chunks/use_server_time_polling.js';
const Ya = {
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
    Ga = ({ isHover: s, size: t, disabled: r = !1 }) =>
        e.jsx('div', {
            className: a(Ya.base, Ya[`base__${t}`], s && Ya.base__hovered),
            children: r
                ? e.jsx('div', { className: Ya.bgDisabled })
                : e.jsxs(e.Fragment, {
                      children: [e.jsx('div', { className: Ya.bg }), e.jsx('div', { className: Ya.bgHover })],
                  }),
        }),
    Xa = {
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
    Ka = ({ isHover: s, size: t, disabled: r = !1 }) =>
        e.jsx('div', {
            className: a(Xa.base, Xa[`base__${t}`], s && Xa.base__hovered),
            children: r
                ? e.jsx('div', { className: Xa.borderDisabled })
                : e.jsxs(e.Fragment, {
                      children: [e.jsx('div', { className: Xa.border }), e.jsx('div', { className: Xa.borderHover })],
                  }),
        }),
    Ja = {
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
var Za = ((e) => ((e.Small = 'small'), (e.Big = 'big'), e))(Za || {});
const es = ({ count: t, disabled: r = !1, size: i, onClick: n }) => {
        const [o, c] = s.useState(!1),
            d = r
                ? R.strings.comp7_ext.awardsWidget.description.awardDisabled()
                : R.strings.comp7_ext.awardsWidget.description.award();
        return e.jsx(p, {
            body: d,
            children: e.jsxs('div', {
                className: a(Ja.base, Ja[`base__${i}`], r ? Ja.base__disabled : Ja.base__hasAppearAnimation),
                onMouseEnter: () => {
                    (b.sound(R.sounds.highlight()), c(!0));
                },
                onMouseLeave: () => {
                    c(!1);
                },
                onClick: () => {
                    r || (b.click(), n());
                },
                children: [
                    e.jsx(Ka, { size: i, isHover: o, disabled: r }),
                    e.jsx(Ga, { size: i, isHover: o, disabled: r }),
                    e.jsx('div', { className: Ja.icon }),
                    e.jsx('div', { className: Ja.count, children: e.jsx(x, { format: 'integral', value: t }) }),
                    e.jsx('div', { className: Ja.label, children: R.strings.comp7_ext.awardsWidget.title(t) }),
                    !r &&
                        e.jsxs(e.Fragment, {
                            children: [
                                e.jsx('div', { className: a(Ja.shine, Ja.shine__left) }),
                                e.jsx('div', { className: a(Ja.shine, Ja.shine__right) }),
                                e.jsx('div', { className: Ja.arrow }),
                                e.jsx('div', {
                                    className: Ja.blinkShape,
                                    children: e.jsx('div', { className: Ja.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    as = () => f.isHigh(),
    ss = () => {
        const { mediaSize: e, screenHeightRem: a } = v(),
            s = e >= S.Medium && a >= j.Large ? 'medium' : 'small';
        return { size: s, isSmall: 'small' === s, isMedium: 'medium' === s };
    },
    ts = {
        [ta.Progression]: 'progression',
        [ta.RankRewards]: 'rankRewards',
        [ta.WeeklyQuests]: 'weeklyQuests',
        [ta.Leaderboard]: 'leaderboard',
        [ta.YearlyRewards]: 'yearlyRewards',
        [ta.Shop]: 'shop',
        [ta.YearlyStatistics]: 'yearlyStatistics',
    },
    rs = {
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
    [is, ns] = w()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), claimRewardsModel: e.object('claimRewardsModel') },
                s = e.object('progressionModel.qualificationModel'),
                r = t(() => a.root.get().pageViewId === ta.Progression && s.get().isActive);
            return { ...a, computes: { isProgressionInQualification: r } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openRewardsSelectionScreen: e.createCallbackNoArgs('claimRewardsModel.onGoToRewardSelection'),
        }),
    ),
    os = R.images.comp7.gui.maps.icons.metaTabs,
    cs = (e, a) => {
        const s = ts[e];
        return a ? `${os.$dyn(s)}` : `${os.small.$dyn(s)}`;
    },
    [ds, ls] = w()(
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
                                items: C(s.get(), ({ id: a, hasNotification: s }) => ({
                                    id: a,
                                    icon: cs(a, e),
                                    ...(s && { notification: { type: 'dot' } }),
                                })),
                            },
                        ],
                        { equals: N },
                    ),
                },
            };
        },
        ({ externalModel: e }) => ({ changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange') }),
    ),
    _s = R.strings.comp7_ext.sidebar.tabs.tooltip,
    ms = ({ children: a, id: s }) => {
        const t = ts[s];
        return e.jsx(p, { header: `${_s.header.$dyn(t)}`, body: `${_s.body.$dyn(t)}`, children: a });
    },
    us = 'Tabs_icon_8dfa0155',
    hs = 'Tabs_icon__medium_bec6a176',
    gs = r(({ pageView: t, className: r }) => {
        const { model: i, controls: n } = ls(),
            o = ss(),
            c = s.useCallback((e) => n.changeSidebarTab(e), [n]),
            d = i.computes.tabs(o.isMedium);
        return e.jsx(k, {
            tabs: d,
            onClick: c,
            active: t,
            size: o.size,
            className: r,
            classNames: { icon: a(us, o.isMedium && hs) },
            WrapperElement: ms,
        });
    });
var ps = ((e) => ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e))(
    ps || {},
);
const xs = 'ErrorState_3a925db8',
    bs = 'ErrorState_gears_3117ef8b',
    fs = 'ErrorState_title_438c797b',
    vs = 'ErrorState_description_77d453ca',
    Ss = ({
        className: s,
        classNames: t,
        title: r = R.strings.comp7_ext.dataError.title(),
        description: i = R.strings.comp7_ext.dataError.description(),
        children: n,
    }) =>
        e.jsxs('div', {
            className: a(xs, s),
            children: [
                e.jsx('div', { className: a(bs, null == t ? void 0 : t.gears) }),
                e.jsx('div', { className: a(fs, null == t ? void 0 : t.title), children: r }),
                e.jsx('div', { className: a(vs, null == t ? void 0 : t.description), children: i }),
                n,
            ],
        }),
    [js, ws] = w()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), items: e.array('items') },
                s = t(
                    (e) => {
                        const s = P(a.items.get(), e);
                        if (!s) throw new Error(`leaderboard item with index ${e} was not found`);
                        return { ...s };
                    },
                    { equals: N },
                ),
                r = t(() => {
                    const { state: e, leaderboardUpdateTimestamp: s } = a.root.get();
                    return e !== ps.Initial && s > 0;
                }),
                n = t(() => s(0).rank),
                o = t(() => a.root.get().lastBestUserPosition + 1),
                c = t((e) => a.root.get().ownSpaID === s(e).spaID),
                d = t(() => -1 !== a.root.get().lastBestUserPosition),
                l = t(() => ({ first: s(0).position, last: s(a.items.get().length - 1).position }), {
                    equals: i.shallow,
                }),
                _ = t(() => d() && o() >= l().first && o() <= l().last),
                m = t(
                    (e) => {
                        const s = Math.ceil(a.root.get().recordsCount / e);
                        return { amount: s, hasPagination: s > 1, active: Math.floor(l().first / e) + 1 };
                    },
                    { equals: i.shallow },
                ),
                u = t((e) => s(e).position < 3),
                h = t(() => -1 === a.root.get().personalPosition);
            return {
                ...a,
                computes: {
                    leaderboardItem: s,
                    hasUpdateInfo: r,
                    firstItemRank: n,
                    rowsDividerPosition: o,
                    hasRowsDivider: _,
                    isPersonalRow: c,
                    hasPositionIcon: u,
                    isDefaultPersonalPosition: h,
                    hasLastBestUserPosition: d,
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
    Ns = 'ErrorState_886b4dce',
    Cs = 'ErrorState_buttonWrapper_7130f1d1',
    ks = 'ErrorState_button_3b8b6fd9',
    Ps = r(({ className: s }) => {
        const { model: t, controls: r } = ws(),
            { isLoading: i } = t.root.get(),
            { mediaSize: n } = v();
        return e.jsx('div', {
            className: a(Ns, s),
            children: e.jsx(Ss, {
                children: e.jsx('div', {
                    className: Cs,
                    children: e.jsx(I, {
                        theme: I.themes.secondary,
                        disabled: i,
                        size: da(n),
                        className: ks,
                        onClick: () => {
                            i || (b.click(), r.refresh());
                        },
                        onMouseEnter: () => {
                            i || b.highlight();
                        },
                        silent: !0,
                        children: R.strings.comp7_ext.leaderboard.error.buttonText(),
                    }),
                }),
            }),
        });
    }),
    Rs = {
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
var Is = ((e) => ((e.None = 'None'), (e.Active = 'Active'), e))(Is || {});
const ys = { None: 'none', Active: 'active' },
    As = r(({ state: s, height: t, onClick: r, className: i }) => {
        const { model: n } = ws(),
            { personalPosition: o, personalBattlesCount: c, personalScore: d } = n.root.get();
        return e.jsxs('div', {
            className: a(Rs.base, Rs[`base__${ys[s]}`], i),
            onClick: r,
            style: { '--height': t ? `${t}rem` : 'auto' },
            children: [
                e.jsx('div', { className: a(Rs.screwIcon, Rs.screwIcon__left) }),
                {
                    None: e.jsx('div', {
                        className: a(Rs.cell),
                        children: R.strings.comp7_ext.leaderboard.currentPosition.none(),
                    }),
                    Active: e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: a(Rs.cell, Rs.cell__order), children: o + 1 }),
                            e.jsx('div', {
                                className: a(Rs.cell, Rs.cell__currentPosition),
                                children: R.strings.comp7_ext.leaderboard.currentPosition.body(),
                            }),
                            e.jsx('div', { className: a(Rs.cell, Rs.cell__battles), children: e.jsx(x, { value: c }) }),
                            e.jsx('div', { className: a(Rs.cell, Rs.cell__score), children: e.jsx(x, { value: d }) }),
                        ],
                    }),
                }[s],
                e.jsx('div', { className: a(Rs.screwIcon, Rs.screwIcon__right) }),
            ],
        });
    }),
    Bs = 'RowsDivider_5e67d3df',
    Ts = 'RowsDivider_rankText_d814efd9',
    Ds = r(({ index: s, className: t, onClick: r }) => {
        const { model: i } = ws(),
            { model: n } = aa(),
            o = i.computes.leaderboardItem(s).rank;
        return e.jsxs('div', {
            className: a(Bs, t),
            onClick: r,
            children: [
                e.jsx(la, { seasonName: n.season.name.get(), rank: o, size: _a.x64 }),
                e.jsx('div', { className: Ts, children: ha(o) }),
            ],
        });
    }),
    Ls = 'Header_4ab794c6',
    Es = 'Header_separator_510e8c90',
    zs = 'Header_cell_ae11a84e',
    Ms = 'Header_cell__order_8c3c2448',
    Ws = 'Header_cell__player_4feb9cb9',
    Vs = 'Header_cell__score_d05be4b3',
    Hs = () =>
        e.jsxs('div', {
            className: Ls,
            children: [
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.order.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.order.body(),
                    children: e.jsx('div', {
                        className: a(zs, Ms),
                        children: R.strings.comp7_ext.leaderboard.table.header.order(),
                    }),
                }),
                e.jsx('div', { className: Es }),
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.player.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.player.body(),
                    children: e.jsx('div', {
                        className: a(zs, Ws),
                        children: R.strings.comp7_ext.leaderboard.table.header.player(),
                    }),
                }),
                e.jsx('div', { className: Es }),
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.body(),
                    children: e.jsx('div', {
                        className: a(zs, Vs),
                        children: R.strings.comp7_ext.leaderboard.table.header.battlesCount(),
                    }),
                }),
                e.jsx('div', { className: Es }),
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.score.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.score.body(),
                    children: e.jsx('div', {
                        className: a(zs, Vs),
                        children: R.strings.comp7_ext.leaderboard.table.header.score(),
                    }),
                }),
            ],
        }),
    Us = ({ children: a, isEnabled: s, contextMenuArgs: t }) => (s ? e.jsx(y, { args: t, children: a }) : a),
    Qs = {
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
    $s = { 0: 'first', 1: 'second', 2: 'third' },
    qs = r(({ index: s, className: t }) => {
        const { model: r } = ws(),
            {
                position: i,
                battlesCount: n,
                userName: o,
                clanTag: c,
                clanTagColor: d,
                score: l,
                spaID: _,
            } = r.computes.leaderboardItem(s),
            m = r.computes.isPersonalRow(s),
            u = r.computes.hasPositionIcon(s);
        return e.jsxs('div', {
            className: a(Qs.base, m && Qs.base__personal, t),
            style: { '--clanTagColor': d },
            children: [
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.order.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.order.body(),
                    children: e.jsx('div', {
                        className: a(Qs.order, u && Qs[`order__${$s[i]}`]),
                        children: !u && i + 1,
                    }),
                }),
                e.jsx(Us, {
                    contextMenuArgs: { spaID: _, userName: o },
                    isEnabled: !m,
                    children: e.jsx('div', {
                        className: Qs.playerContainer,
                        children: e.jsx(p, {
                            header: R.strings.comp7_ext.leaderboard.table.tooltip.player.header(),
                            body: R.strings.comp7_ext.leaderboard.table.tooltip.player.body(),
                            children: e.jsx('div', {
                                className: Qs.player,
                                children: e.jsx(A, { userName: o, clanAbbrev: c, clanTagClassName: d && Qs.clanTag }),
                            }),
                        }),
                    }),
                }),
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.body(),
                    children: e.jsx('div', { className: Qs.battles, children: e.jsx(x, { value: n }) }),
                }),
                e.jsx(p, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.score.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.score.body(),
                    children: e.jsx('div', { className: Qs.score, children: e.jsx(x, { value: l }) }),
                }),
            ],
        });
    }),
    Os = 'Leaderboard_d61e47c3',
    Fs = 'Leaderboard_content_22252fe0',
    Ys = 'Leaderboard_shadowsContainer_676cb358',
    Gs = 'Leaderboard_shadowsContainer__bottom_592c0d95',
    Xs = 'Leaderboard_shadow_5e1e6caa',
    Ks = 'Leaderboard_shadow__left_e19dd6f3',
    Js = 'Leaderboard_shadow__center_3661a2a7',
    Zs = 'Leaderboard_shadow__right_e3bc83fc',
    et = 'Leaderboard_area_ba84a652',
    at = 'Leaderboard_row_4ed6f164',
    st = 'Leaderboard_rowsDivider_32196381',
    tt = r(({ limit: s, rowHeight: t = 0, rowsDividerHeight: r = 0 }) => {
        const { model: i } = ws(),
            o = i.computes.hasRowsDivider(),
            c = i.computes.rowsDividerPosition() % s;
        return e.jsxs('div', {
            className: Os,
            style: { '--rowHeight': t ? `${t}rem` : 'auto', '--rowsDividerHeight': `${r}rem` },
            children: [
                e.jsx(Hs, {}),
                e.jsxs('div', {
                    className: Fs,
                    children: [
                        e.jsxs('div', {
                            className: Ys,
                            children: [
                                e.jsx('div', { className: a(Xs, Ks) }),
                                e.jsx('div', { className: a(Xs, Js) }),
                                e.jsx('div', { className: a(Xs, Zs) }),
                            ],
                        }),
                        e.jsx(B, {
                            className: et,
                            children: T(i.items.get().length, (a) =>
                                e.jsxs(
                                    n.Fragment,
                                    {
                                        children: [
                                            o && a === c && e.jsx(Ds, { index: a, className: st }),
                                            e.jsx(qs, { className: at, index: a }),
                                        ],
                                    },
                                    a,
                                ),
                            ),
                        }),
                        e.jsxs('div', {
                            className: a(Ys, Gs),
                            children: [
                                e.jsx('div', { className: a(Xs, Ks) }),
                                e.jsx('div', { className: a(Xs, Js) }),
                                e.jsx('div', { className: a(Xs, Zs) }),
                            ],
                        }),
                        e.jsx(D, {}),
                    ],
                }),
            ],
        });
    }),
    rt = {
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
    it = Math.trunc(4),
    nt = ({ pagesAmount: s, activePage: t, className: r, onPageClick: i, onControlEvent: n }) => {
        const o = t > 1,
            c = t < s,
            d = s < 9 ? s : 9,
            l = (e) => () => {
                null == n || n(e);
            };
        return e.jsxs('div', {
            className: a(rt.base, r),
            children: [
                e.jsx('div', {
                    className: a(rt.control, rt.control__prev, o && rt.control__active),
                    onClick: o ? l('prevClick') : void 0,
                    children: R.strings.comp7_ext.pagination.prev(),
                }),
                T(d, (r) => {
                    const n = ((e, a, s) => {
                            const t = a > it + 1,
                                r = s > 9 && a + it < s;
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
                                          : e - it + a;
                        })(r, t, s),
                        o = ((e, a) => (Number.isInteger(e) ? (a === e ? 'active' : 'inactive') : 'disabled'))(n, t);
                    return e.jsx(
                        'div',
                        {
                            className: a(rt.pageButton, rt[`pageButton__${o}`]),
                            onClick:
                                'disabled' !== o && 'number' == typeof n
                                    ? ((c = n),
                                      () => {
                                          null == i || i(c);
                                      })
                                    : void 0,
                            children: e.jsx('div', { className: rt.pageValue, children: n }),
                        },
                        r,
                    );
                    var c;
                }),
                e.jsx('div', {
                    className: a(rt.control, rt.control__next, c && rt.control__active),
                    onClick: c ? l('nextClick') : void 0,
                    children: R.strings.comp7_ext.pagination.next(),
                }),
            ],
        });
    },
    ot = 'HasRecordsState_c43fe3c6',
    ct = 'HasRecordsState_base__withoutPagination_3fb8255a',
    dt = 'HasRecordsState_tableContainer_e5526099',
    lt = 'HasRecordsState_pagination_26230442',
    _t = { settings: { ...L, animationConfig: { ...L.animationConfig, round: 1 } } },
    mt = r(
        ({ limit: t, onCurrentRankTabChange: r, positionToScroll: i, onPositionToScrollChange: n, className: o }) => {
            const { model: c, controls: d } = ws(),
                { personalPosition: l, lastBestUserPosition: _ } = c.root.get(),
                m = E(_t),
                {
                    animationScroll: { scrollPosition: u },
                    applyScroll: h,
                    events: g,
                    getBounds: p,
                } = m,
                x = c.computes.isDefaultPersonalPosition() ? Is.None : Is.Active,
                f = c.computes.pages(t),
                v = c.computes.pagePositions(),
                S = c.computes.rowsDividerPosition(),
                j = c.computes.hasRowsDivider(),
                w = ((e, a) => M(44) * ((e + 1) % a))(_, t);
            s.useEffect(
                () =>
                    z(() => {
                        if (void 0 !== i) {
                            switch (i.type) {
                                case 'rank': {
                                    const e = i.rank === ra.Fifth ? w : 0;
                                    h(e);
                                    break;
                                }
                                case 'personalPosition': {
                                    const e = M(44) * (l % t),
                                        a = j && l > _ ? e + M(70) : e;
                                    h(a);
                                    break;
                                }
                                case 'page':
                                    h(0);
                            }
                            n(void 0);
                        }
                    }),
                [h, j, _, t, l, i, w, n],
            );
            const N = s.useCallback(() => {
                const e = v.first > _ ? ra.Fifth : ra.Sixth;
                r(e);
            }, [v.first, _, r]);
            (s.useEffect(() => {
                N();
            }, [N]),
                s.useEffect(() => {
                    const e = () => {
                        if (j && S > v.first) {
                            const [, e] = p(),
                                a = 0 !== e && u.goal === e && w >= e;
                            r(u.goal >= w || a ? ra.Fifth : ra.Sixth);
                        } else l >= v.first && l <= v.last ? r(l > _ ? ra.Fifth : ra.Sixth) : N();
                    };
                    return (g.on('change', e), () => g.off('change', e));
                }, [g, v.first, j, _, v.last, t, l, w, S, u.goal, r, N, p]));
            const C = s.useCallback(() => {
                    x !== Is.None && (b.yes1(), d.getTableRecords(t, l - (l % t)), n({ type: 'personalPosition' }));
                }, [d, t, x, l, n]),
                k = s.useCallback(
                    (e) => {
                        (b.yes1(), d.getTableRecords(t, (e - 1) * t), n({ type: 'page' }));
                    },
                    [d, t, n],
                ),
                P = s.useCallback(
                    (e) => {
                        b.yes1();
                        const a = (() => {
                            switch (e) {
                                case 'prevClick':
                                    return f.active - 1;
                                case 'nextClick':
                                    return f.active + 1;
                                default:
                                    return 1;
                            }
                        })();
                        (d.getTableRecords(t, (a - 1) * t), n({ type: 'page' }));
                    },
                    [f.active, d, t, n],
                );
            return e.jsxs('div', {
                className: a(ot, !f.hasPagination && ct, o),
                children: [
                    e.jsx('div', {
                        className: dt,
                        children: e.jsx(W, {
                            api: m,
                            children: e.jsx(tt, { limit: t, rowHeight: 44, rowsDividerHeight: 70 }),
                        }),
                    }),
                    e.jsx(As, { state: x, onClick: C, height: 44 }),
                    f.hasPagination &&
                        e.jsx(nt, {
                            pagesAmount: f.amount,
                            activePage: f.active,
                            className: lt,
                            onPageClick: k,
                            onControlEvent: P,
                        }),
                ],
            });
        },
    ),
    ut = R.views.comp7.mono.lobby.tooltips,
    ht = ({ rank: a, divisions: s, from: t, to: r, topPercentage: i, children: n, className: o, ...c }) => {
        const d = (({ rank: e, topPercentage: a, from: s, to: t, divisions: r = '' }) => {
            switch (e) {
                case ra.Sixth:
                    return { contentId: ut.sixth_rank_tooltip('resId'), args: { topPercentage: a } };
                case ra.Fifth:
                    return { contentId: ut.fifth_rank_tooltip('resId'), args: { from: s } };
                default:
                    return {
                        contentId: ut.general_rank_tooltip('resId'),
                        args: { rank: e, divisions: r, from: s, to: t },
                    };
            }
        })({ rank: a, divisions: s, from: t, to: r, topPercentage: i });
        return e.jsx(V, { ...d, ...c, children: e.jsx('div', { className: o, children: n }) });
    };
var gt = ((e) => ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'), e))(gt || {});
const pt = {
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
    xt = ({ tabs: s, seasonName: t, className: r, onTabClick: i }) => {
        const n = (e) => () => {
            null == i || i(e);
        };
        return e.jsxs('div', {
            className: a(pt.base, r),
            children: [
                e.jsx('div', { className: pt.dividersDot }),
                e.jsx('div', { className: a(pt.line, pt.line__toRight) }),
                e.jsx('div', {
                    className: pt.ranksContainer,
                    children: s.map(({ rank: s, state: r, args: i = {} }) => {
                        const o = r !== gt.Disabled;
                        return e.jsxs(
                            'div',
                            {
                                className: a(pt.rank, pt[`rank__${r}`]),
                                children: [
                                    e.jsxs(ht, {
                                        rank: s,
                                        from: null == i ? void 0 : i.from,
                                        topPercentage: null == i ? void 0 : i.topPercentage,
                                        onClick: o ? n(s) : void 0,
                                        onMouseEnter: o ? b.highlight : void 0,
                                        children: [
                                            e.jsx('div', { className: pt.rankTabHighlight }),
                                            e.jsx(la, {
                                                seasonName: t,
                                                rank: s,
                                                size: _a.x64,
                                                className: pt.rankEmblem,
                                            }),
                                        ],
                                    }),
                                    r !== gt.Disabled && e.jsx('div', { className: pt.label, children: ha(s) }),
                                ],
                            },
                            s,
                        );
                    }),
                }),
                e.jsx('div', { className: a(pt.line, pt.line__toLeft) }),
            ],
        });
    },
    bt = ({ rank: e, lastBestUserPosition: a, currentRankTab: s, recordsCount: t }) =>
        (e === ra.Sixth && -1 === a) || 0 === t ? gt.Disabled : e === s ? gt.Active : gt.Inactive,
    ft = 'HasRecordsStateContainer_c67207b9',
    vt = 'HasRecordsStateContainer_content_6298db9',
    St = [ra.Sixth, ra.Fifth],
    jt = r(({ className: t }) => {
        const { model: r, controls: i } = ws(),
            { model: n } = aa(),
            { lastBestUserPosition: o, recordsCount: c, from: d, topPercentage: l } = r.root.get(),
            _ = r.computes.hasLastBestUserPosition(),
            m = r.computes.rowsDividerPosition(),
            [u, h] = s.useState(r.computes.firstItemRank()),
            [g, p] = s.useState(),
            x = St.map((e) => ({
                rank: e,
                state: bt({ rank: e, lastBestUserPosition: o, currentRankTab: u, recordsCount: c }),
                args: { from: d, topPercentage: l },
            })),
            f = s.useCallback(
                (e) => {
                    const a = e === ra.Fifth && _ ? m - (m % 50) : 0;
                    (b.click(), i.getTableRecords(50, a), p({ type: 'rank', rank: e }));
                },
                [i, m, _, 50],
            );
        return e.jsxs('div', {
            className: a(ft, t),
            children: [
                e.jsx(xt, { tabs: x, seasonName: n.season.name.get(), onTabClick: f }),
                e.jsx(mt, {
                    limit: 50,
                    positionToScroll: g,
                    onCurrentRankTabChange: h,
                    onPositionToScrollChange: p,
                    className: vt,
                }),
            ],
        });
    }),
    wt = {
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
    Nt = r(({ className: s }) => {
        const { model: t } = ws(),
            { from: r } = t.root.get(),
            { model: i } = aa();
        return e.jsxs('div', {
            className: a(wt.base, s),
            children: [
                e.jsx('div', {
                    className: wt.imageContainer,
                    children: e.jsx('div', { className: a(wt.image, wt[`image__season_${i.season.name.get()}`]) }),
                }),
                e.jsx('div', { className: wt.title, children: R.strings.comp7_ext.leaderboard.noRecords.title() }),
                e.jsx(H, {
                    text: R.strings.comp7_ext.leaderboard.noRecords.subtitle(),
                    binding: { pointsCount: e.jsx(x, { value: r }) },
                    classMix: wt.subtitle,
                }),
            ],
        });
    }),
    Ct = U(R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.description(), { count: 5 }),
    kt = 'LastUpdateNote_6d3d7bea',
    Pt = 'LastUpdateNote_infoIcon_e0adf03b',
    Rt = ({
        timestamp: s,
        className: t,
        classNames: r,
        dateTimeFormat: i = q.ShortTime,
        contentId: n = R.views.comp7.mono.lobby.tooltips.last_update_tooltip('resId'),
        tooltipDescription: o = Ct,
        ...c
    }) =>
        e.jsxs('div', {
            className: a(kt, t),
            children: [
                e.jsx(Q, {
                    text: `${R.strings.comp7_ext.lastUpdateNote.info()}`,
                    binding: { date: e.jsx($, { datetime: s, format: i }) },
                }),
                e.jsx(V, {
                    ignoreShowDelay: !0,
                    contentId: n,
                    args: { description: o },
                    ...c,
                    children: e.jsx('div', { className: a(Pt, null == r ? void 0 : r.icon) }),
                }),
            ],
        }),
    It = 'SubheadingContainer_c1ac09ea',
    yt = 'SubheadingContainer_updateInfo_d86a6c67',
    At = 'SubheadingContainer_updateInfoText_8739d0a',
    Bt = r(({ className: s }) => {
        const { model: t } = ws(),
            { leaderboardUpdateTimestamp: r } = t.root.get(),
            i = t.computes.hasUpdateInfo(),
            n = U(R.strings.comp7_ext.lastUpdateNote.ratingPositions.description(), { count: 5 });
        return e.jsxs('div', {
            className: a(It, s),
            children: [
                e.jsx(ba, {}),
                i &&
                    e.jsx('div', {
                        className: yt,
                        children: e.jsx(Rt, { timestamp: r, className: At, tooltipDescription: n }),
                    }),
            ],
        });
    }),
    Tt = {
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
    Dt = { [ps.Initial]: 'initial', [ps.Success]: 'success', [ps.Error]: 'error' },
    Lt = r(() => {
        const { model: s } = ws(),
            { state: t, isLoading: r } = s.root.get(),
            i = o(ca);
        return e.jsxs('div', {
            className: a(Tt.base, Tt[`base__${Dt[t]}`], r && Tt.base__loading),
            'data-test-id': 'leaderboard-page',
            children: [
                e.jsx(Bt, { className: Tt.subHeading }),
                e.jsxs(c.div, {
                    className: Tt.animationContainer,
                    style: i,
                    children: [
                        e.jsx('div', {
                            className: Tt.content,
                            children: (() => {
                                switch (t) {
                                    case ps.Initial:
                                        return null;
                                    case ps.Success:
                                        return s.items.get().length > 0
                                            ? e.jsx(jt, { className: Tt.hasRecords })
                                            : e.jsx(Nt, { className: Tt.noRecords });
                                    case ps.Error:
                                        return e.jsx(Ps, { className: Tt.error });
                                    default:
                                        console.error('Unreachable branch: add component for proper leaderboard state');
                                }
                            })(),
                        }),
                        r && e.jsx(O, { message: R.strings.comp7_ext.waitingSpinner.message(), className: Tt.spinner }),
                    ],
                }),
            ],
        });
    }),
    Et = (e) => C(e, (e) => va(e.name)).join(R.strings.comp7_ext.listSeparator()),
    zt = -1;
var Mt = ((e) => ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e))(
    Mt || {},
);
const [Wt, Vt] = w()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    items: e.array('items'),
                    statisticsByDay: e.array('statisticsByDay'),
                    topVehiclesStatistics: e.array('topVehiclesStatistics'),
                    customizationTasks: e.array('customizationTasks'),
                    qualificationModel: e.primitives(
                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                        'qualificationModel',
                    ),
                    seasonStatisticsModel: e.object('seasonStatisticsModel'),
                    qualificationBattles: e.array('qualificationModel.battles'),
                    isRewardLayerVisible: d.box(!1),
                    isParallaxPreloaded: d.box(!1),
                    currentSlideIndex: d.box(0),
                    previousSlideIndex: d.box(0),
                },
                s = t(
                    (e) => {
                        const s = P(a.items.get(), e);
                        if (!s) throw new Error(`item with index ${e} was not found`);
                        const { hasRankInactivity: t, rank: r, from: i, to: n } = s;
                        return { hasRankInactivity: t, rank: r, from: i, to: n };
                    },
                    { equals: i.shallow },
                ),
                r = t(
                    (e) => {
                        const s = P(a.items.get(), e);
                        if (!s) throw new Error(`item with index ${e} was not found`);
                        return C(s.divisions, (e) => ({ ...e }));
                    },
                    { equals: N },
                ),
                n = t(
                    (e) => {
                        const a = r(e);
                        return {
                            list: Et(a),
                            count: a.length,
                            currentDivisionIndex: F(a, (e) => e.state === ja.Current),
                        };
                    },
                    { equals: i.shallow },
                ),
                o = t(
                    (e) => {
                        var a;
                        return {
                            division: null == (a = Y(r(e), (e) => e.state === ja.Current)) ? void 0 : a.name,
                            hasInfo: !ma(s(e).rank),
                        };
                    },
                    { equals: i.shallow },
                ),
                c = t(
                    (e) => {
                        const s = P(a.qualificationBattles.get(), e);
                        if (!s) throw new Error(`qualification battle with index ${e} was not found`);
                        return s;
                    },
                    { equals: N },
                ),
                l = t(
                    (e) => {
                        const s = P(a.customizationTasks.get(), e);
                        return (G(void 0 !== s, `Could not find slide with index ${e}.`), { ...s });
                    },
                    { equals: i.shallow },
                ),
                _ = t(
                    (e) => {
                        const s = P(a.statisticsByDay.get(), e);
                        return (
                            G(void 0 !== s, `Could not find day statistics with index ${e} in statisticsByDay array.`),
                            { ...s }
                        );
                    },
                    { equals: i.shallow },
                ),
                m = t(() => X(a.statisticsByDay.get(), (e, a) => Math.max(e, a.ratingPoints), 0)),
                u = t(
                    (e) =>
                        e === zt
                            ? { prevIndex: -1, nextIndex: -1 }
                            : X(
                                  a.statisticsByDay.get(),
                                  (a, s, t) =>
                                      s.hasBattles
                                          ? (t < e
                                                ? (a.prevIndex = t)
                                                : t > e && -1 === a.nextIndex && (a.nextIndex = t),
                                            a)
                                          : a,
                                  { prevIndex: -1, nextIndex: -1 },
                              ),
                    { equals: i.shallow },
                ),
                h = t(() => {
                    const e = a.root.get().currentDayIndex,
                        s = a.root.get().selectedDayIndex,
                        t = a.statisticsByDay.get().length - 1;
                    return s === zt ? (e < t ? e : t) : s;
                });
            return {
                ...a,
                computes: {
                    item: s,
                    qualificationBattle: c,
                    rankSettings: o,
                    divisions: r,
                    divisionsConfig: n,
                    dayStatistics: _,
                    getSlideByIndex: l,
                    otherDayIndexes: u,
                    targetScrollIndex: h,
                    maxDayRatingPoints: m,
                },
            };
        },
        ({ externalModel: e, model: a }) => {
            const s = l((e) => a.isRewardLayerVisible.set(e));
            return {
                setIsParallaxPreloaded: l((e) => a.isParallaxPreloaded.set(e)),
                setRewardLayerVisible: s,
                setCurrentSlideIndex: l((e) => {
                    (a.previousSlideIndex.set(a.currentSlideIndex.get()), a.currentSlideIndex.set(e));
                }),
                openCustomization: e.createCallback((e) => ({ customizationId: e }), 'onOpenCustomization'),
                selectDay: e.createCallback((e) => ({ index: e }), 'onSelectDay'),
                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                openVehicleStats: e.createCallbackNoArgs('onOpenVehicleStats'),
                refresh: e.createCallbackNoArgs('onRefresh'),
                customizationProgressShown: e.createCallback(
                    (e) => ({ customizationId: e }),
                    'onCustomizationProgressShown',
                ),
            };
        },
    ),
    Ht = [
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_5(), speedX: -0.053, speedY: -0.01 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_4(), speedX: -0.037, speedY: -0.0055 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_3(), speedX: -0.025, speedY: -0.0016 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1(), speedX: 0.015, speedY: 0.002 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(), speedX: 0.015, speedY: 0.002 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0(), speedX: 0.03, speedY: 0.014 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(), speedX: 0.03, speedY: 0.014 },
    ],
    Ut = 'Parallax_642396e4',
    Qt = 'Parallax_layer_823dd2ef',
    $t = 'Parallax_shadow_e2763b91',
    qt = [
        R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
        R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
    ],
    Ot = Ht.reduce((e, a) => {
        const s = Math.abs(a.speedX);
        return s > e ? s : e;
    }, 0),
    Ft = r(({ className: t }) => {
        const { model: r } = Vt(),
            { screenWidthRem: i } = v(),
            n = s.createRef(),
            d = Ot * i,
            l = o({ to: { opacity: r.isRewardLayerVisible.get() ? 1 : 0 }, config: { duration: 300 } }),
            [_] = K(n);
        return e.jsx('div', {
            ref: n,
            className: a(Ut, t),
            children: Ht.map((a, s) =>
                e.jsx(
                    c.div,
                    {
                        className: Qt,
                        style: {
                            width: `${i + 2 * d}rem`,
                            left: -d + 'rem',
                            x: _.x.to((e) => e * a.speedX),
                            y: _.y.to((e) => e * a.speedY),
                            backgroundImage: `url(${a.path})`,
                            ...(qt.includes(a.path) && l),
                        },
                        children: 3 === s && e.jsx(c.div, { className: $t, style: l }),
                    },
                    s,
                ),
            ),
        });
    }),
    Yt = 'ParallaxContainer_ea8010a4',
    Gt = Ht.map((e) => e.path),
    Xt = r(({ className: t }) => {
        const { model: r, controls: i } = Vt(),
            n = r.isParallaxPreloaded.get(),
            d = o({ to: { opacity: n ? 1 : 0 }, config: { duration: 300 } }),
            l = J(Gt);
        return (
            s.useLayoutEffect(() => {
                'success' === l && i.setIsParallaxPreloaded(!0);
            }, [i, l]),
            e.jsx(c.div, { className: a(Yt, t), style: d, children: e.jsx(Ft, {}) })
        );
    }),
    Kt = {
        base: 'Bar_d3cdbf54',
        base__fluid: 'Bar_base__fluid_2495db2f',
        base__noBattles: 'Bar_base__noBattles_2697e844',
        base__muted: 'Bar_base__muted_0',
        base__qualification: 'Bar_base__qualification_0',
        base__rank: 'Bar_base__rank_bf7ecb58',
        layersContainer: 'Bar_layersContainer_6ce41b8a',
        base__noRank: 'Bar_base__noRank_5b05452',
        inner: 'Bar_inner_124f9ca3',
        holder: 'Bar_holder_7d1f9938',
        qualificationBg: 'Bar_qualificationBg_d41ae62d',
        qualificationHatch: 'Bar_qualificationHatch_2e7062aa',
        hatch: 'Bar_hatch_e5c9fe66',
        light: 'Bar_light_eb4cde1',
        sharp: 'Bar_sharp_6bb25dce',
        bar: 'Bar_450b6dff',
        selectedFrame: 'Bar_selectedFrame_2ea7e605',
        base__selected: 'Bar_base__selected_0',
        base__rank_first: 'Bar_base__rank_first_0',
        base__rank_second: 'Bar_base__rank_second_0',
        base__rank_third: 'Bar_base__rank_third_0',
        base__rank_fourth: 'Bar_base__rank_fourth_0',
        base__rank_fifth: 'Bar_base__rank_fifth_0',
        base__rank_sixth: 'Bar_base__rank_sixth_0',
        qualificationIcon: 'Bar_qualificationIcon_712da423',
        topShadow: 'Bar_topShadow_294e9f06',
        topShadow__selected: 'Bar_topShadow__selected_da07ae80',
        topLine: 'Bar_topLine_686acd4',
        barContainer: 'Bar_barContainer_e881fb5',
        selectedLeftLine: 'Bar_selectedLeftLine_ce661008',
        selectedRightLine: 'Bar_selectedRightLine_2a3d88fb',
        selectedTopLine: 'Bar_selectedTopLine_0',
        selectedBottomLine: 'Bar_selectedBottomLine_4618a141',
        fadeIn: 'Bar_fadeIn_0',
        fadeInThreeQuarters: 'Bar_fadeInThreeQuarters_0',
        fadeInHalf: 'Bar_fadeInHalf_0',
        fadeOut: 'Bar_fadeOut_0',
        fadeInWithScale: 'Bar_fadeInWithScale_0',
        slideUp: 'Bar_slideUp_0',
        scale: 'Bar_scale_0',
        raysAppearance: 'Bar_raysAppearance_0',
        rotate: 'Bar_rotate_0',
        'reverse-rotate': 'Bar_reverse-rotate_0',
        glowAppearance: 'Bar_glowAppearance_0',
        highlightAppearance: 'Bar_highlightAppearance_0',
        blink: 'Bar_blink_0',
        slideUpIn: 'Bar_slideUpIn_0',
    };
const Jt = ({
        index: e,
        currentDayIndex: s,
        isFluidWidth: t,
        hasBattles: r,
        maxAchievedRank: i,
        selectedDayIndex: n,
        isQualification: o,
        className: c,
    }) => {
        const d = a(
            Kt.base,
            t && Kt.base__fluid,
            !r && Kt.base__noBattles,
            n !== zt && e !== n && Kt.base__muted,
            e === n && Kt.base__selected,
        );
        return o
            ? a(d, Kt.base__qualification, c)
            : e <= s && i > 0
              ? a(d, Kt.base__rank, Kt[`base__rank_${ga[i]}`], c)
              : a(d, Kt.base__noRank, c);
    },
    Zt = r(function ({ index: s, heightRem: t, isSelected: r }) {
        const { model: i } = Vt(),
            { hasBattles: n } = i.computes.dayStatistics(s),
            d = _(),
            l = _(),
            h = _(),
            g = M(t),
            p = o({ ref: d, from: { height: 0 }, to: { height: g }, config: m.slow }),
            x = o({ ref: l, from: { bottom: 0 }, to: { bottom: M(Math.max(t - 1, 0)) }, config: m.slow }),
            b = o({ ref: h, from: { opacity: 0 }, to: { opacity: 1 }, config: m.molasses });
        return (
            u([d, l, h], [0, 0, 0.8]),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx(c.div, {
                        className: a(Kt.topShadow, r && Kt.topShadow__selected),
                        style: { bottom: g, ...b },
                    }),
                    e.jsx(c.div, { className: Kt.topLine, style: x }),
                    e.jsxs(
                        c.div,
                        {
                            className: Kt.barContainer,
                            style: p,
                            children: [
                                e.jsx('div', { className: Kt.bar }),
                                n
                                    ? e.jsxs(e.Fragment, {
                                          children: [
                                              e.jsx('div', { className: Kt.light }),
                                              e.jsx('div', { className: Kt.sharp }),
                                          ],
                                      })
                                    : e.jsx('div', { className: Kt.hatch }),
                            ],
                        },
                        `barContainer_${s}_${r}`,
                    ),
                ],
            })
        );
    }),
    er = r(function ({ index: a }) {
        const { model: s } = Vt(),
            { hasBattles: t } = s.computes.dayStatistics(a);
        return e.jsxs(e.Fragment, {
            children: [
                t
                    ? e.jsx('div', { className: Kt.qualificationBg })
                    : e.jsx('div', { className: Kt.qualificationHatch }),
                e.jsx('div', { className: Kt.qualificationIcon }),
            ],
        });
    }),
    ar = r(function ({ index: a, heightRem: s, isInitialAnimation: t }) {
        const { model: r } = Vt(),
            { isQualification: i } = r.computes.dayStatistics(a),
            n = _(),
            d = _(),
            l = o({ ref: n, from: { opacity: 0 }, to: { opacity: 1 } }),
            m = o({ ref: d, from: { height: '0%' }, to: { height: '100%' } });
        return (
            u([d, n], t ? [0, 1] : [0, 0]),
            e.jsxs(c.div, {
                className: Kt.selectedFrame,
                style: l,
                children: [
                    e.jsx(c.div, { className: Kt.selectedLeftLine, style: m }),
                    e.jsx(c.div, { className: Kt.selectedRightLine, style: m }),
                    e.jsx('div', {
                        className: Kt.selectedTopLine,
                        style: !i && s > 5 ? { bottom: s - 1 + 'rem' } : { display: 'none' },
                    }),
                    e.jsx('div', { className: Kt.selectedBottomLine }),
                ],
            })
        );
    }),
    sr = r(
        s.forwardRef(
            (
                {
                    index: a,
                    mediaSize: t,
                    seasonName: r,
                    selectCallback: i,
                    unSelectCallback: n,
                    className: o,
                    isFluidWidth: c = !1,
                },
                d,
            ) => {
                const { model: l } = Vt(),
                    { selectedDayIndex: _, currentDayIndex: m } = l.root.get(),
                    {
                        isQualification: u,
                        maxAchievedRank: h,
                        hasBattles: g,
                        ratingPoints: p,
                        division: x,
                        rankInactivityPenalty: f,
                        diff: v,
                    } = l.computes.dayStatistics(a),
                    j = l.computes.maxDayRatingPoints(),
                    w =
                        j > 0
                            ? (function (e, a, s) {
                                  let t;
                                  return (
                                      (t = s >= S.ExtraLarge ? 320 : s >= S.Large ? 260 : s >= S.Medium ? 230 : 160),
                                      Math.floor((e * t) / a)
                                  );
                              })(p, j, t)
                            : 0,
                    N = a === _,
                    C = Z(),
                    k = N ? n : i(a),
                    P = s.useMemo(
                        () => ({
                            index: a,
                            isQualification: u,
                            seasonName: r,
                            diff: v,
                            rank: h,
                            division: x,
                            ratingPoints: p,
                            rankInactivityPenalty: f,
                            currentDayIndex: m,
                            hasBattles: g,
                        }),
                        [m, v, x, a, u, h, f, p, r, g],
                    );
                return e.jsx(V, {
                    contentId: R.views.comp7.mono.lobby.tooltips.day_tooltip('resId'),
                    args: P,
                    children: e.jsx('div', {
                        className: Jt({
                            index: a,
                            currentDayIndex: m,
                            isFluidWidth: c,
                            hasBattles: g,
                            maxAchievedRank: h,
                            selectedDayIndex: _,
                            isQualification: u,
                            className: o,
                        }),
                        onClick: g ? k : void 0,
                        onMouseEnter: g ? b.highlight : void 0,
                        ref: d,
                        children: e.jsxs('div', {
                            className: Kt.inner,
                            children: [
                                e.jsx('div', { className: Kt.holder }),
                                e.jsx('div', {
                                    className: Kt.layersContainer,
                                    children: u
                                        ? e.jsx(er, { index: a })
                                        : e.jsx(Zt, { index: a, heightRem: w, isSelected: N }),
                                }),
                                N && e.jsx(ar, { index: a, heightRem: w, isInitialAnimation: C }),
                            ],
                        }),
                    }),
                });
            },
        ),
    ),
    tr = {
        base: 'ChartScroll_10e4d55',
        areaWrapper: 'ChartScroll_areaWrapper_58c1069e',
        areaContent: 'ChartScroll_areaContent_ccca9fa5',
    };
function rr({ children: a, api: s, ...t }) {
    return e.jsx(ae, { api: s, children: e.jsx(ir, { ...t, children: a }) });
}
function ir({ itemsOffset: s = 0, children: t, className: r, areaClassNames: i, barClassNames: n, style: o }) {
    return e.jsxs('div', {
        className: a(tr.base, r),
        style: { '--offset': `${s}rem`, ...o },
        children: [
            e.jsx(se, {
                className: null == i ? void 0 : i.base,
                classNames: {
                    wrapper: a(tr.areaWrapper, null == i ? void 0 : i.wrapper),
                    content: a(tr.areaContent, null == i ? void 0 : i.content),
                },
                children: t,
            }),
            e.jsx(te, { classNames: n }),
        ],
    });
}
const nr = 'Chart_8bf3ed9a',
    or = 'Chart_base__hasScroll_b9b95413',
    cr = (e, a) => () => {
        e || (a(), b.sound('arrow'), b.sound('comp_7_gui_chart_select'));
    },
    dr = { wrapper: 'Chart_areaWrapper_1478348e', content: 'Chart_areaContent_2fe4c7ee' },
    lr = { base: 'Chart_bar_df3ebe0c' },
    _r = r(({ width: t, className: r }) => {
        const { model: i, controls: n } = Vt(),
            { selectedDayIndex: o } = i.root.get(),
            { mediaSize: c } = v(),
            d = s.useRef(null),
            l = ((e) => {
                const a = s.useMemo(
                    () => ({
                        settings: {
                            step: { type: 'fixed', value: M(e), clampedArrowStepTimeout: 100 },
                            animationConfig: { tension: 120, friction: 40, frequency: 0.6 },
                        },
                    }),
                    [e],
                );
                return ee(a);
            })(22),
            _ = re(),
            m = aa().model.season.name.get(),
            u = i.statisticsByDay.get().length,
            h = 22 * u > t,
            { prevIndex: g, nextIndex: p } = i.computes.otherDayIndexes(o),
            x = i.computes.targetScrollIndex(),
            f = cr(-1 === g, () => n.selectDay(g)),
            S = cr(-1 === p, () => n.selectDay(p));
        (ie(ne.ARROW_LEFT, f), ie(ne.ARROW_RIGHT, S));
        const j = s.useCallback(
                (e) => () => {
                    (n.selectDay(e), b.click(), b.sound('comp_7_gui_chart_select'));
                },
                [n],
            ),
            w = s.useCallback(() => {
                (n.selectDay(zt), b.click());
            }, [n]),
            N = oe((e) => {
                var a, s;
                const t = null == (a = l.wrapperRef.current) ? void 0 : a.getBoundingClientRect(),
                    r = null == (s = d.current) ? void 0 : s.getBoundingClientRect();
                t &&
                    r &&
                    (((e, a) => e.left >= a.left && e.left + e.width <= a.left + a.width)(r, t) ||
                        _.run(() => {
                            d.current && l.applyScroll(d.current.offsetLeft, e);
                        }));
            });
        return (
            ce(() => {
                h && N();
            }),
            ce(() => {
                b.sound('comp_7_gui_chart_bars');
            }),
            s.useEffect(
                () =>
                    de(() => {
                        h && N();
                    }, 200),
                [h, N, o],
            ),
            le(() => {
                h && N({ immediate: !0, reset: !0 });
            }, [h, N]),
            e.jsx(rr, {
                api: l,
                className: a(nr, h && or, r),
                areaClassNames: dr,
                barClassNames: lr,
                style: { '--selectedBarYOffset': (h ? 10 : 30) + 'rem' },
                children: T(u, (a) =>
                    e.jsx(
                        sr,
                        {
                            index: a,
                            mediaSize: c,
                            seasonName: m,
                            selectCallback: j,
                            unSelectCallback: w,
                            isFluidWidth: 22 * u < t,
                            ref: a === x ? d : void 0,
                        },
                        a,
                    ),
                ),
            })
        );
    }),
    mr = 'Separator_714453d5',
    ur = 'Separator_line_a7ffd056',
    hr = 'Separator_venzel_5f6e04a2',
    gr = ({ className: a }) =>
        e.jsxs('div', {
            className: h(mr, a),
            children: [e.jsx('div', { className: ur }), e.jsx('div', { className: hr })],
        }),
    pr = [];
function xr(e) {
    const [a, t] = s.useState(!1),
        r = (function (e) {
            const a = s.useRef(e);
            return (
                s.useLayoutEffect(() => {
                    a.current = e;
                }),
                s.useCallback((...e) => (0, a.current)(...e), pr)
            );
        })(() => {
            (t(!0), e());
        });
    return (
        s.useEffect(
            () =>
                de(() => {
                    a && t(!1);
                }, 15e3),
            [a],
        ),
        [a, r]
    );
}
const br = 'LoadingSpinner_13d3cf96',
    fr = 'LoadingSpinner_base__loading_2e28c0b5',
    vr = function ({ loading: a, className: s }) {
        return e.jsx('div', { className: h(br, a && fr, s) });
    },
    Sr = 'ChartHeader_a57c6360',
    jr = 'ChartHeader_heading_44e48769',
    wr = 'ChartHeader_generalStatistics_5111bfe9',
    Nr = 'ChartHeader_generalStatistics__clickable_c9c7aa1d',
    Cr = 'ChartHeader_generalStatisticsText_64eed80c',
    kr = 'ChartHeader_icon_9956b8a5',
    Pr = 'ChartHeader_separator_86596e18',
    Rr = 'ChartHeader_dailyStatistic_cc6b42c9',
    Ir = 'ChartHeader_dailyStatistic__visible_259ce014',
    yr = 'ChartHeader_update_90744a3e',
    Ar = 'ChartHeader_updateText_594e621b',
    Br = 'ChartHeader_infoIcon_84a3a650',
    Tr = 'ChartHeader_infoIcon__daily_f5e8856e',
    Dr = 'ChartHeader_venzelSeparator_3a7df730',
    Lr = 'ChartHeader_spinner_5688475e',
    Er = 'ChartHeader_button_53d907eb',
    zr = r(function () {
        const { model: a, controls: s } = Vt(),
            { statisticsUpdateTimestamp: t, isStatisticsLoading: r } = a.root.get(),
            { mediaSize: i } = v(),
            [n, o] = xr(s.refresh);
        return e.jsxs('div', {
            className: yr,
            children: [
                e.jsx(Q, {
                    text: R.strings.comp7_ext.progressionPage.chartHeader.update(),
                    binding: {
                        time: e.jsx($, { datetime: t, format: q.ShortTime }),
                        info: e.jsx(p, {
                            body: R.strings.comp7_ext.progressionPage.chartHeader.tooltip.update(),
                            children: e.jsx('div', { className: Br }),
                        }),
                    },
                    classMix: Ar,
                }),
                e.jsx(I, {
                    size: i >= S.Large ? I.sizes.small : I.sizes.extraSmall,
                    theme: I.themes.secondary,
                    autoAlignContent: !1,
                    onClick: o,
                    disabled: Boolean(n || r),
                    className: Er,
                    children: e.jsx(vr, { loading: r, className: Lr }),
                }),
            ],
        });
    }),
    Mr = r(function ({ className: s }) {
        const { model: t, controls: r } = Vt(),
            { selectedDayIndex: i, currentDayIndex: n } = t.root.get(),
            o = i === n,
            c = i !== zt;
        return e.jsxs('div', {
            className: a(Sr, s),
            children: [
                e.jsxs('div', {
                    className: jr,
                    children: [
                        e.jsxs('div', {
                            className: a(wr, c && Nr),
                            onClick: c ? () => r.selectDay(zt) : void 0,
                            onMouseEnter: c ? b.highlight : void 0,
                            children: [
                                e.jsx('div', { className: kr }),
                                e.jsx('div', {
                                    className: Cr,
                                    children: String(
                                        R.strings.comp7_ext.progressionPage.chartHeader.$dyn(
                                            c ? 'backToGeneral' : 'general',
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: a(Rr, c && Ir),
                            children: [
                                e.jsx('div', { className: Pr }),
                                o
                                    ? e.jsx(Q, {
                                          text: R.strings.comp7_ext.progressionPage.chartHeader.todayStatistic(),
                                      })
                                    : e.jsx(Q, {
                                          text: R.strings.comp7_ext.progressionPage.chartHeader.statisticDay(),
                                          binding: { day: i + 1 },
                                      }),
                                e.jsx(p, {
                                    body: o
                                        ? R.strings.comp7_ext.progressionPage.chartHeader.tooltip.todayInfo()
                                        : R.strings.comp7_ext.progressionPage.chartHeader.tooltip.info(),
                                    children: e.jsx('div', { className: a(Br, Tr) }),
                                }),
                            ],
                        }),
                        e.jsx(zr, {}),
                    ],
                }),
                e.jsx(gr, { className: Dr }),
            ],
        });
    }),
    Wr = 'LastUpdate_ea4456f',
    Vr = 'LastUpdate_dataUpdate_4273867c',
    Hr = ({ timestamp: s, className: t, isLastBestUserPointsValueLoading: r = !1 }) =>
        e.jsx('div', {
            className: a(Wr, t),
            children: r
                ? e.jsx(Q, { text: R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.update(), classMix: Vr })
                : e.jsx(Rt, { timestamp: s }),
        }),
    Ur = (e, a) => e > 0 || a,
    Qr = 'RankInfo_d0b952ed',
    $r = 'RankInfo_highlight_23f2f1b1',
    qr = 'RankInfo_formattedText_6a63affe',
    Or = ({ rank: s, from: t, topPercentage: r, className: i, classNames: n }) =>
        e.jsxs('div', {
            className: a(Qr, i),
            children: [
                e.jsx('div', { className: $r }),
                e.jsx(H, {
                    text: String(R.strings.comp7_ext.rankInfo.current.$dyn(ua(s))),
                    binding: { topPercentage: r, fromScore: e.jsx(x, { value: t }) },
                    classMix: a(qr, null == n ? void 0 : n.text),
                }),
            ],
        }),
    Fr = ({ rank: a, division: s, from: t, to: r, className: i, children: n }) =>
        e.jsx(V, {
            contentId: R.views.comp7.mono.lobby.tooltips.division_tooltip('resId'),
            args: { rank: a, division: s, from: t, to: r },
            children: e.jsx('div', { className: i, children: n }),
        }),
    Yr = 'RankProgressDivisions_db142f88',
    Gr = 'RankProgressDivisions_divisionItem_5be72f57',
    Xr = 'RankProgressDivisions_divisionItem__current_6ced0f10',
    Kr = 'RankProgressDivisions_highlightContainer_70c42138',
    Jr = 'RankProgressDivisions_radialBack_57eba5b8',
    Zr = 'RankProgressDivisions_mainBack_8fe6b2d0',
    ei = 'RankProgressDivisions_bottomLine_60e68b1c',
    ai = 'RankProgressDivisions_bottomLine__first_cd7ca41d',
    si = 'RankProgressDivisions_bottomLine__second_787c2960',
    ti = 'RankProgressDivisions_bottomLine__third_b38a7c3b',
    ri = 'RankProgressDivisions_container_a9b2b1f0',
    ii = 'RankProgressDivisions_divisionName_bce75f3f',
    ni = 'RankProgressDivisions_note_5ffe2513',
    oi = r(({ itemIndex: s, rank: t, from: r, step: i }) => {
        const { model: n } = Vt(),
            o = n.computes.divisions(s);
        return e.jsx('div', {
            className: Yr,
            children: C(o, (s, n) => {
                const o = s.state === ja.Current;
                return e.jsxs(
                    Fr,
                    {
                        rank: t,
                        division: s.name,
                        from: r + i * n,
                        to: r + i * (n + 1),
                        className: a(Gr, o && Xr),
                        children: [
                            o &&
                                e.jsxs('div', {
                                    className: Kr,
                                    children: [
                                        e.jsx('div', { className: Jr }),
                                        e.jsx('div', { className: Zr }),
                                        e.jsx('div', { className: a(ei, ai) }),
                                        e.jsx('div', { className: a(ei, si) }),
                                        e.jsx('div', { className: a(ei, ti) }),
                                    ],
                                }),
                            e.jsxs('div', {
                                className: ri,
                                children: [
                                    o && e.jsx('div', { className: ni, children: R.strings.comp7_ext.division.note() }),
                                    e.jsx('div', { className: ii, children: va(s.name) }),
                                ],
                            }),
                        ],
                    },
                    n,
                );
            }),
        });
    }),
    ci = {
        '--pointLineWidth': '$lineWidth',
        base: 'RankProgressPoints_d4478c46',
        point: 'RankProgressPoints_point_1b3696e3',
        base__top: 'RankProgressPoints_base__top_aa2f1644',
        base__bottom: 'RankProgressPoints_base__bottom_aa2f1644',
        pointLine: 'RankProgressPoints_pointLine_355cb3a7',
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
var di = ((e) => ((e.Top = 'top'), (e.Bottom = 'bottom'), e))(di || {});
const li = (e, a) => {
        const s = a > 0 ? (100 / a) * e + '%' : '0%';
        return e === a ? { left: s, transform: `translateX(-${ci['--pointLineWidth']})` } : { left: s };
    },
    _i = ({ step: s, divisionsCount: t, from: r, currentDivisionIndex: i, direction: n = 'bottom', className: o }) =>
        e.jsx('div', {
            className: a(ci.base, ci[`base__${n}`], o),
            children: T(t + 1, (n) => {
                const o = void 0 !== i && n === i + 1;
                return e.jsxs(
                    'div',
                    {
                        className: ci.point,
                        style: li(n, t),
                        children: [
                            e.jsx('div', { className: ci.pointLine }),
                            void 0 !== r &&
                                e.jsx('div', {
                                    className: a(ci.pointValue, o && ci.pointValue__next),
                                    children: r + s * n,
                                }),
                        ],
                    },
                    n,
                );
            }),
        }),
    mi = 'RankProgress_ea8c22b5',
    ui = 'RankProgress_linesWithValues_658c3ba6',
    hi = 'RankProgress_progress_80ee363',
    gi = {
        freezed: !0,
        withStack: !1,
        type: _e.Simple,
        delta: { duration: 0, delay: 0 },
        line: { duration: 0, delay: 0 },
    },
    pi = r(({ rank: s, itemIndex: t, from: r, to: i, className: n }) => {
        const { model: o } = Vt(),
            { currentScore: c } = o.root.get(),
            d = o.computes.divisionsConfig(t),
            l = i - r,
            _ = wa(r, i, d.count);
        return e.jsxs('div', {
            className: a(mi, n),
            children: [
                e.jsx(oi, { itemIndex: t, rank: s, from: r, step: _ }),
                e.jsx(_i, {
                    step: _,
                    divisionsCount: d.count,
                    direction: di.Top,
                    currentDivisionIndex: d.currentDivisionIndex,
                }),
                e.jsx('div', {
                    className: hi,
                    children: e.jsx(Ca, { maxValue: l, value: c - r, animationSettings: gi }),
                }),
                e.jsx(_i, {
                    step: _,
                    divisionsCount: d.count,
                    from: r,
                    currentDivisionIndex: d.currentDivisionIndex,
                    className: ui,
                }),
            ],
        });
    }),
    xi = 'RankStatusDescription_9595d0d5',
    bi = ({ text: s, binding: t, className: r }) => {
        const i = ((a) =>
            'number' == typeof (null == a ? void 0 : a.pointsCount)
                ? { ...a, pointsCount: e.jsx(x, { value: a.pointsCount }) }
                : a)(t);
        return e.jsx(H, { text: s, binding: i, classMix: a(xi, r) });
    },
    fi = (e) => {
        switch (!0) {
            case e >= S.ExtraLarge:
                return _a.x600;
            case e >= S.Medium:
                return _a.x420;
            default:
                return _a.x260;
        }
    },
    vi = 'CurrentProgressionItem_b8f697f9',
    Si = 'CurrentProgressionItem_base__hasProgressBar_b62d9047',
    ji = 'CurrentProgressionItem_rankNameContainer_55288ef7',
    wi = 'CurrentProgressionItem_rankName_1e1b1825',
    Ni = 'CurrentProgressionItem_rankEmblem_e2cd2db8',
    Ci = 'CurrentProgressionItem_rankDescription_d49d0f8f',
    ki = 'CurrentProgressionItem_rankEmblemContainer_8c8f8a5c',
    Pi = 'CurrentProgressionItem_glowContainer_ec20c1aa',
    Ri = 'CurrentProgressionItem_scoreContainer_17d6ab11',
    Ii = 'CurrentProgressionItem_score_f00041d6',
    yi = 'CurrentProgressionItem_rankInactivity_57ff2e5b',
    Ai = 'CurrentProgressionItem_rankInactivityCount_3cc2bb4',
    Bi = 'CurrentProgressionItem_rankInactivity__red_3f79612b',
    Ti = 'CurrentProgressionItem_rankInactivityIconContainer_74adfe0d',
    Di = 'CurrentProgressionItem_rankInactivityIcon_ea8a1cf4',
    Li = 'CurrentProgressionItem_rankInfo_48615e94',
    Ei = 'CurrentProgressionItem_rankProgress_1e9f9625',
    zi = 'CurrentProgressionItem_status_d3c6050e',
    Mi = 'CurrentProgressionItem_centered_88354ddf',
    Wi = 'CurrentProgressionItem_lastUpdate_ef85f29f',
    Vi = { glow: 'CurrentProgressionItem_glow_4cf800c7' },
    Hi = r(() => {
        const { model: s } = Vt(),
            { model: t } = aa(),
            { mediaSize: r } = v(),
            {
                currentItemIndex: i,
                topPercentage: n,
                currentScore: o,
                rankInactivityCount: c,
                lastBestUserPointsValue: d,
                isLastBestUserPointsValueLoading: l,
                leaderboardUpdateTimestamp: _,
            } = s.root.get(),
            m = s.computes.item(i),
            { division: u, hasInfo: h } = s.computes.rankSettings(i),
            g = ma(m.rank);
        return e.jsxs('div', {
            className: a(vi, g && Si),
            children: [
                e.jsxs('div', {
                    className: ji,
                    children: [
                        e.jsx('div', { className: wi, children: ha(m.rank, { upperCase: !0 }) }),
                        e.jsx('div', { className: Ci, children: R.strings.comp7_ext.rank.current() }),
                    ],
                }),
                e.jsxs('div', {
                    className: ki,
                    children: [
                        e.jsx(Na, { className: Pi, classNames: Vi }),
                        e.jsx(V, {
                            contentId: R.views.comp7.mono.lobby.tooltips.progression_table_tooltip('resId'),
                            ignoreShowDelay: !0,
                            children: e.jsx('div', {
                                children: e.jsx(la, {
                                    rank: m.rank,
                                    division: u,
                                    size: fi(r),
                                    seasonName: t.season.name.get(),
                                    className: Ni,
                                }),
                            }),
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: Ri,
                    children: [
                        e.jsx('div', { className: Ii, children: e.jsx(x, { value: o }) }),
                        m.hasRankInactivity &&
                            e.jsx(V, {
                                ignoreShowDelay: !0,
                                contentId: R.views.comp7.mono.lobby.tooltips.rank_inactivity_tooltip('resId'),
                                args: { rankInactivityCount: c },
                                children: e.jsxs('div', {
                                    className: a(yi, 0 === c && Bi),
                                    children: [
                                        e.jsx('div', { className: Ai, children: c }),
                                        e.jsx('div', { className: Ti, children: e.jsx('div', { className: Di }) }),
                                    ],
                                }),
                            }),
                    ],
                }),
                h &&
                    e.jsx('div', {
                        className: Li,
                        children: e.jsx(Or, { rank: m.rank, from: m.from, topPercentage: n, classNames: { text: Mi } }),
                    }),
                g
                    ? e.jsx(pi, { rank: m.rank, itemIndex: i, from: m.from, to: m.to, className: Ei })
                    : e.jsxs('div', {
                          className: zi,
                          children: [
                              e.jsx(bi, {
                                  text: Ur(d, l)
                                      ? pa(R.strings.comp7_ext.rankItemStatus.current.extendedDescription, m.rank)
                                      : pa(R.strings.comp7_ext.rankItemStatus.current.description, m.rank),
                                  binding: { topPercentage: n, pointsCount: d },
                                  className: Mi,
                              }),
                              e.jsx(Hr, { timestamp: _, isLastBestUserPointsValueLoading: l, className: Wi }),
                          ],
                      }),
            ],
        });
    }),
    Ui = 'Slide_7ce2110c',
    Qi = 'Slide_icon_61f1d96d',
    $i = 'Slide_progressionLevel_af90939f',
    qi = 'Slide_description_721d1080',
    Oi = 'Slide_progress_c9912192',
    Fi = 'Slide_progressHeading_760b3b5d',
    Yi = 'Slide_current_aff8e83c',
    Gi = { ...me, delta: { delay: 1e3, duration: 500 } },
    Xi = { line: 'Slide_line_4b7a6b8d' };
function Ki(e) {
    const a = e.split('_')[0];
    return 'inscription' === a
        ? `${R.images.gui.maps.vehicles.decals.inscriptions.special.$dyn(e)}`
        : 'sticker' === a
          ? `${R.images.gui.maps.vehicles.decals.player_stickers.special.$dyn(e)}`
          : void 0;
}
function Ji(e) {
    return {
        backgroundImage: `url(${R.images.gui.maps.icons.customization.progression_styles.icons.$dyn(`level_${e}`)})`,
    };
}
const Zi = r(function ({ index: a, style: t }) {
        const { model: r, controls: i } = Vt(),
            {
                iconKey: n,
                description: o,
                currentProgress: d,
                maxProgress: l,
                delta: _,
                customizationId: m,
                progressionLevel: u,
            } = r.computes.getSlideByIndex(a),
            h = s.useCallback((e) => {
                switch (e) {
                    case ue.Grow:
                        return b.sound('comp_7_progressbar_delta_start');
                    case ue.Shrink:
                        return b.sound('comp_7_progressbar_delta_stop');
                }
            }, []);
        return e.jsxs(c.div, {
            className: Ui,
            style: t,
            children: [
                e.jsx(he, {
                    args: { tooltipId: 'techCustomizationItem', customizationId: m, progressionLevel: u },
                    children: e.jsx('div', {
                        className: Qi,
                        style: { backgroundImage: `url(${Ki(n)})` },
                        children: u > 0 && e.jsx('div', { className: $i, style: Ji(u) }),
                    }),
                }),
                e.jsx(ge, { text: o, lines: 3, className: qi, classNames: Xi }),
                l > 1 &&
                    e.jsxs('div', {
                        className: Oi,
                        children: [
                            e.jsx(Q, {
                                text: R.strings.comp7_ext.progressionPage.customization.counter(),
                                binding: {
                                    currentProgress: e.jsx('span', { className: Yi, children: d }),
                                    maxProgress: l,
                                },
                                classMix: Fi,
                            }),
                            e.jsx(Ca, {
                                size: pe.Small,
                                value: d,
                                maxValue: l,
                                deltaFrom: d - _,
                                animationSettings: Gi,
                                onChangeAnimationState: h,
                                onEndAnimation: () => i.customizationProgressShown(m),
                            }),
                        ],
                    }),
            ],
        });
    }),
    en = 'Slider_a3fcde01',
    an = 'Slider_arrow_cef005fb',
    sn = 'Slider_arrow__left_2541745',
    tn = 'Slider_arrow__right_b3c063d2',
    rn = 'Slider_clippedContainer_2855c48e',
    nn = (e, a) => () => {
        e || (a(), b.sound('arrow'));
    },
    on = r(function ({ className: s }) {
        const { model: t, controls: r } = Vt(),
            i = t.previousSlideIndex.get(),
            n = t.currentSlideIndex.get(),
            o = t.customizationTasks.get(),
            c = 0 === n,
            d = n === o.length - 1,
            l = nn(c, () => r.setCurrentSlideIndex(n - 1)),
            _ = nn(d, () => r.setCurrentSlideIndex(n + 1)),
            m = n < i,
            u = g(n, {
                initial: { opacity: 0 },
                from: { opacity: 0, transform: m ? 'translateX(-30%)' : 'translateX(30%)' },
                enter: { opacity: 1, transform: 'translateX(0%)' },
                leave: { opacity: 0, transform: m ? 'translateX(30%)' : 'translateX(-30%)' },
                config: { duration: 200, delay: 0, easing: xe.easeOutCubic },
                exitBeforeEnter: !0,
            });
        return e.jsxs('div', {
            className: a(en, s),
            children: [
                e.jsx(
                    ka,
                    { size: 'extraSmall', direction: 'left', disabled: c, className: a(an, sn), onClick: l },
                    `prev_${n}`,
                ),
                e.jsx(
                    ka,
                    { size: 'extraSmall', direction: 'right', disabled: d, className: a(an, tn), onClick: _ },
                    `next_${n}`,
                ),
                u((a, s) => e.jsx('div', { className: rn, children: e.jsx(Zi, { index: s, style: a }) })),
            ],
        });
    }),
    cn = 'Customization_b5005863',
    dn = 'Customization_header_d905d185',
    ln = 'Customization_heading_22abf2a8',
    _n = 'Customization_headingText_84ca034d',
    mn = 'Customization_separator_cff8fe1d',
    un = 'Customization_noTasks_3d376941',
    hn = 'Customization_doneText_5ffca92b',
    gn = r(function ({ className: a }) {
        const { model: s, controls: t } = Vt(),
            { mediaSize: r } = v(),
            i = s.customizationTasks.get(),
            n = P(i, s.currentSlideIndex.get()),
            o = i.length > 0;
        return e.jsxs('div', {
            className: h(cn, a),
            children: [
                e.jsxs('div', {
                    className: dn,
                    children: [
                        e.jsx('div', {
                            className: ln,
                            children: e.jsx(p, {
                                body: R.strings.comp7_ext.progressionPage.customization.headingTooltip(),
                                isEnabled: o,
                                children: e.jsx('div', {
                                    children: e.jsx(Q, {
                                        text: o
                                            ? R.strings.comp7_ext.progressionPage.customization.tasks(i.length)
                                            : R.strings.comp7_ext.progressionPage.customization.tasksDone(),
                                        binding: { taskNumber: i.length },
                                        classMix: _n,
                                    }),
                                }),
                            }),
                        }),
                        e.jsx(I, {
                            size: r >= S.Large ? I.sizes.small : I.sizes.extraSmall,
                            theme: I.themes.secondary,
                            autoAlignContent: !1,
                            onClick: () => t.openCustomization((null == n ? void 0 : n.customizationId) ?? 0),
                            children: R.strings.comp7_ext.progressionPage.customization.toStyle(),
                        }),
                    ],
                }),
                e.jsx(gr, { className: mn }),
                o
                    ? e.jsx(on, {})
                    : e.jsxs('div', {
                          className: un,
                          children: [
                              e.jsx('div', {
                                  className: hn,
                                  children: R.strings.comp7_ext.progressionPage.customization.completed(),
                              }),
                              e.jsx(Q, {
                                  text: R.strings.comp7_ext.progressionPage.customization.completedDescription(),
                              }),
                          ],
                      }),
            ],
        });
    }),
    pn = r(function ({ classNames: a }) {
        const { mediaSize: s } = v(),
            { model: t, controls: r } = Vt(),
            { isStatisticsLoading: i } = t.root.get(),
            [n, o] = xr(r.refresh);
        return e.jsx(Ss, {
            children: e.jsxs(I, {
                theme: I.themes.secondary,
                onClick: o,
                size: s >= S.Large ? I.sizes.medium : I.sizes.small,
                disabled: Boolean(n || i),
                className: null == a ? void 0 : a.button,
                children: [
                    e.jsx(vr, { loading: i, className: null == a ? void 0 : a.spinner }),
                    i
                        ? R.strings.comp7_ext.progressionPage.error.refreshing()
                        : R.strings.comp7_ext.progressionPage.error.refresh(),
                ],
            }),
        });
    }),
    xn = s.createContext(null),
    bn = () => {
        const e = s.useContext(xn);
        if (null === e)
            throw new Error('useIndicators hook was called in component, which is not wrapped in IndicatorsProvider');
        return e;
    },
    fn = r(({ children: a }) => {
        const { mediaSize: t } = v(),
            { model: r } = aa(),
            i = ((e) => (e >= S.Medium ? _a.x64 : _a.x40))(t),
            { model: n } = Vt(),
            { statisticsMode: o, selectedDayIndex: c } = n.root.get(),
            d = r.season.name.get(),
            l = s.useMemo(
                () => ({ isCompact: t < S.Medium, emblemSize: i, statisticsMode: o, seasonName: d }),
                [i, o, t, d],
            );
        return e.jsx(xn.Provider, { value: l, children: a });
    }),
    vn = {
        base: 'StatisticsIndicators_b51640da',
        blockContainer: 'StatisticsIndicators_blockContainer_3542f044',
        blockContainer__rank: 'StatisticsIndicators_blockContainer__rank_c1b1351b',
        blockContainer__qualification: 'StatisticsIndicators_blockContainer__qualification_7be14031',
        blockContainer__battles: 'StatisticsIndicators_blockContainer__battles_c8cb4e5d',
        blockContainer__wins: 'StatisticsIndicators_blockContainer__wins_37236dae',
        blockContainer__damage: 'StatisticsIndicators_blockContainer__damage_684733ae',
        noRankDescription: 'StatisticsIndicators_noRankDescription_915e6fda',
        rankEmblem: 'StatisticsIndicators_rankEmblem_b39dce8e',
        blockInfo: 'StatisticsIndicators_blockInfo_2f8fa787',
        indicatorValue: 'StatisticsIndicators_indicatorValue_c9a4901d',
        indicatorValue__compact: 'StatisticsIndicators_indicatorValue__compact_a000cb0a',
        additionalInfo: 'StatisticsIndicators_additionalInfo_417d1755',
        diffDescription: 'StatisticsIndicators_diffDescription_9e134252',
        subIndicator: 'StatisticsIndicators_subIndicator_4a61a07c',
        subIndicator__victory: 'StatisticsIndicators_subIndicator__victory_c1b1351b',
        subIndicatorValue: 'StatisticsIndicators_subIndicatorValue_1431d50a',
        subIndicator__defeat: 'StatisticsIndicators_subIndicator__defeat_c1b1351b',
        subIndicator__draw: 'StatisticsIndicators_subIndicator__draw_c1b1351b',
        icon: 'StatisticsIndicators_icon_cbe85555',
        subIndicator__solo: 'StatisticsIndicators_subIndicator__solo_c1b1351b',
        subIndicator__platoon: 'StatisticsIndicators_subIndicator__platoon_c1b1351b',
        indicatorIcon: 'StatisticsIndicators_indicatorIcon_b82fc36a',
        blockContainer__prestigePoints: 'StatisticsIndicators_blockContainer__prestigePoints_c1b1351b',
        link: 'StatisticsIndicators_link_3a7046ef',
        linkText: 'StatisticsIndicators_linkText_1efae1a9',
    };
function Sn({
    value: s,
    iconSlot: t = e.jsx('div', { className: vn.indicatorIcon }),
    tooltipArgs: r,
    className: i,
    children: n,
}) {
    const { isCompact: o } = bn();
    return e.jsx(be, {
        tooltipArgs: r,
        children: e.jsxs('div', {
            className: a(vn.blockContainer, i),
            children: [
                !o && t,
                e.jsxs('div', {
                    className: vn.blockInfo,
                    children: [
                        e.jsxs('div', {
                            className: a(vn.indicatorValue, o && vn.indicatorValue__compact),
                            children: [o && t, 'number' == typeof s ? e.jsx(x, { value: s }) : s],
                        }),
                        e.jsx('div', { className: vn.additionalInfo, children: n }),
                    ],
                }),
            ],
        }),
    });
}
function jn({ value: s, className: t }) {
    return e.jsxs('div', {
        className: a(vn.subIndicator, t),
        children: [
            e.jsx('div', { className: vn.icon }),
            e.jsx('div', { className: vn.subIndicatorValue, children: e.jsx(Ra, { value: s }) }),
        ],
    });
}
function wn() {
    const { emblemSize: s, seasonName: t } = bn();
    return e.jsxs('div', {
        className: a(vn.blockContainer, vn.blockContainer__qualification),
        children: [
            e.jsx(Ia, { size: s, seasonName: t, className: vn.rankEmblem }),
            e.jsx('div', { className: vn.noRankDescription, children: R.strings.comp7_ext.rank.qualification() }),
        ],
    });
}
function Nn({ rank: a, value: t, tooltipArgs: r, children: i }) {
    const { emblemSize: n, seasonName: o, statisticsMode: c } = bn(),
        d = s.useMemo(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.rank_indicator_tooltip('resId'),
                args: {
                    statisticsMode: c,
                    seasonName: o,
                    rank: a,
                    division: ma(a) ? (null == r ? void 0 : r.division) : void 0,
                    ratingPoints: null == r ? void 0 : r.ratingPoints,
                    diff: null == r ? void 0 : r.diff,
                    maxAchievedRatingPoints: null == r ? void 0 : r.maxAchievedRatingPoints,
                    dayOfMaxRatingIndex: null == r ? void 0 : r.dayOfMaxRatingIndex,
                },
                ignoreShowDelay: !0,
            }),
            [r, a, o, c],
        );
    return e.jsx(Sn, {
        className: vn.blockContainer__rank,
        iconSlot: e.jsx(la, { rank: a, size: n, seasonName: o, className: vn.rankEmblem }),
        value: t,
        tooltipArgs: d,
        children: i,
    });
}
function Cn({ soloBattlesCount: a, superPlatoonBattlesCount: t }) {
    const { statisticsMode: r } = bn(),
        i = s.useMemo(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.battles_indicator_tooltip('resId'),
                args: { soloBattlesCount: a, superPlatoonBattlesCount: t, statisticsMode: r },
                ignoreShowDelay: !0,
            }),
            [a, r, t],
        );
    return e.jsxs(Sn, {
        className: vn.blockContainer__battles,
        value: a + t,
        tooltipArgs: i,
        children: [
            e.jsx(jn, { value: a, className: vn.subIndicator__solo }),
            e.jsx(jn, { value: t, className: vn.subIndicator__platoon }),
        ],
    });
}
function kn({ value: a, winsCount: t, lossCount: r, drawCount: i }) {
    const { statisticsMode: n } = bn(),
        o = s.useMemo(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.wins_indicator_tooltip('resId'),
                args: { winRate: a, winsCount: t, lossCount: r, drawCount: i, statisticsMode: n },
                ignoreShowDelay: !0,
            }),
            [i, r, n, a, t],
        ),
        c = 0 === a ? Aa : a;
    return e.jsxs(Sn, {
        className: vn.blockContainer__wins,
        value: ya({ value: c, isPercentage: !0 }),
        tooltipArgs: o,
        children: [
            e.jsx(jn, { value: t, className: vn.subIndicator__victory }),
            e.jsx(jn, { value: r, className: vn.subIndicator__defeat }),
            e.jsx(jn, { value: i, className: vn.subIndicator__draw }),
        ],
    });
}
function Pn({ value: a, recordDamageDealt: t, recordDamageDealtVehicleName: r }) {
    const { statisticsMode: i } = bn(),
        n = s.useMemo(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.damage_indicator_tooltip('resId'),
                args: {
                    statisticsMode: i,
                    averageDamageDealt: a,
                    recordDamageDealt: t,
                    recordDamageDealtVehicleName: r,
                },
                ignoreShowDelay: !0,
            }),
            [t, r, i, a],
        );
    return e.jsx(Sn, {
        className: vn.blockContainer__damage,
        value: a,
        tooltipArgs: n,
        children: e.jsx(Q, { text: R.strings.comp7_ext.progressionPage.statistic.averageDamage() }),
    });
}
function Rn({ value: a, recordPrestige: t, recordPrestigeVehicleName: r }) {
    const { statisticsMode: i } = bn(),
        n = s.useMemo(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.prestige_indicator_tooltip('resId'),
                args: { statisticsMode: i, averagePrestige: a, recordPrestige: t, recordPrestigeVehicleName: r },
                ignoreShowDelay: !0,
            }),
            [t, r, i, a],
        );
    return e.jsx(Sn, {
        className: vn.blockContainer__prestigePoints,
        value: a,
        tooltipArgs: n,
        children: e.jsx(Q, { text: R.strings.comp7_ext.progressionPage.statistic.averagePrestigePoints() }),
    });
}
const In = r(({ index: a }) => {
        const { model: s } = Vt(),
            {
                isQualification: t,
                ratingPoints: r,
                maxAchievedRatingPoints: i,
                maxAchievedRank: n,
                division: o,
                diff: c,
                soloBattlesCount: d,
                superPlatoonBattlesCount: l,
                winRate: _,
                winsCount: m,
                lossCount: u,
                drawCount: h,
                averageDamageDealt: g,
                averagePrestige: p,
                recordDamageDealt: x,
                recordDamageDealtVehicleName: b,
                recordPrestige: f,
                recordPrestigeVehicleName: v,
            } = s.computes.dayStatistics(a);
        return e.jsxs(e.Fragment, {
            children: [
                t
                    ? e.jsx(wn, {})
                    : e.jsx(Nn, {
                          rank: n,
                          value: r,
                          tooltipArgs: { maxAchievedRatingPoints: i, division: o, rank: n, diff: c, ratingPoints: r },
                          children: e.jsx(Q, {
                              text: R.strings.comp7_ext.progressionPage.statistic.dayRecordDescription(),
                              binding: { diff: e.jsx(Pa, { value: c }) },
                              classMix: vn.diffDescription,
                          }),
                      }),
                e.jsx(Cn, { soloBattlesCount: d, superPlatoonBattlesCount: l }),
                e.jsx(kn, { value: _, winsCount: m, lossCount: u, drawCount: h }),
                e.jsx(Pn, { value: g, recordDamageDealt: x, recordDamageDealtVehicleName: b }),
                e.jsx(Rn, { value: p, recordPrestige: f, recordPrestigeVehicleName: v }),
            ],
        });
    }),
    yn = r(() => {
        const { model: a, controls: s } = Vt(),
            {
                maxAchievedRatingPoints: t,
                maxAchievedRank: r,
                soloBattlesCount: i,
                superPlatoonBattlesCount: n,
                winRate: o,
                winsCount: c,
                lossCount: d,
                drawCount: l,
                averageDamageDealt: _,
                averagePrestige: m,
                dayOfMaxRatingIndex: u,
                recordDamageDealt: h,
                recordDamageDealtVehicleName: g,
                recordPrestige: p,
                recordPrestigeVehicleName: x,
            } = a.seasonStatisticsModel.get();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(Nn, {
                    rank: r,
                    value: t,
                    tooltipArgs: {
                        maxAchievedRatingPoints: t,
                        rank: r,
                        division: a.computes.dayStatistics(u).division,
                        dayOfMaxRatingIndex: u,
                    },
                    children: e.jsx(Q, {
                        text: R.strings.comp7_ext.progressionPage.statistic.seasonRecordDescription(),
                        binding: {
                            seasonRecordDescriptionDay: e.jsx('div', {
                                className: vn.link,
                                onClick: () => s.selectDay(u),
                                children: e.jsx(Q, {
                                    text: R.strings.comp7_ext.progressionPage.statistic.seasonRecordDescriptionDay(),
                                    binding: { day: u + 1 },
                                    classMix: vn.linkText,
                                }),
                            }),
                        },
                    }),
                }),
                e.jsx(Cn, { soloBattlesCount: i, superPlatoonBattlesCount: n }),
                e.jsx(kn, { value: o, winsCount: c, lossCount: d, drawCount: l }),
                e.jsx(Pn, { value: _, recordDamageDealt: h, recordDamageDealtVehicleName: g }),
                e.jsx(Rn, { value: m, recordPrestige: p, recordPrestigeVehicleName: x }),
            ],
        });
    }),
    An = ({ className: s }) => {
        const { model: t } = Vt(),
            { statisticsMode: r, selectedDayIndex: i } = t.root.get();
        return e.jsx('div', {
            className: a(vn.base, s),
            children: r === ia.Day && i !== zt ? e.jsx(In, { index: i }) : e.jsx(yn, {}),
        });
    },
    Bn = ['vehicles', 'battles', 'winSeries', 'damage', 'assist', 'prestigePoints', 'maxFrags', 'destruction'],
    Tn = {
        base: 'VehiclesStatistic_ac99ffab',
        base__expanded: 'VehiclesStatistic_base__expanded_df09ab9a',
        header: 'VehiclesStatistic_header_59a87428',
        headerText: 'VehiclesStatistic_headerText_d98bc724',
        table: 'VehiclesStatistic_table_21d93ed0',
        tableHeader: 'VehiclesStatistic_tableHeader_2117af40',
        row: 'VehiclesStatistic_row_9c1a21d8',
        row__highlighted: 'VehiclesStatistic_row__highlighted_9063cb96',
        column: 'VehiclesStatistic_column_e20f82a',
        column__vehicles: 'VehiclesStatistic_column__vehicles_bb42c9a9',
        column__winSeries: 'VehiclesStatistic_column__winSeries_e4e86d0',
        column__prestigePoints: 'VehiclesStatistic_column__prestigePoints_f824eb4b',
        image: 'VehiclesStatistic_image_123ccd8a',
        tableContent: 'VehiclesStatistic_tableContent_c21e80b4',
        fadeIn: 'VehiclesStatistic_fadeIn_e4e86d0',
        fadeInThreeQuarters: 'VehiclesStatistic_fadeInThreeQuarters_e4e86d0',
        fadeInHalf: 'VehiclesStatistic_fadeInHalf_e4e86d0',
        fadeOut: 'VehiclesStatistic_fadeOut_e4e86d0',
        fadeInWithScale: 'VehiclesStatistic_fadeInWithScale_e4e86d0',
        slideUp: 'VehiclesStatistic_slideUp_e4e86d0',
        scale: 'VehiclesStatistic_scale_e4e86d0',
        raysAppearance: 'VehiclesStatistic_raysAppearance_e4e86d0',
        rotate: 'VehiclesStatistic_rotate_e4e86d0',
        'reverse-rotate': 'VehiclesStatistic_reverse-rotate_e4e86d0',
        glowAppearance: 'VehiclesStatistic_glowAppearance_e4e86d0',
        highlightAppearance: 'VehiclesStatistic_highlightAppearance_e4e86d0',
        blink: 'VehiclesStatistic_blink_e4e86d0',
        slideUpIn: 'VehiclesStatistic_slideUpIn_e4e86d0',
    },
    Dn = function () {
        return e.jsx('div', {
            className: Tn.tableHeader,
            children: Bn.map((a) =>
                e.jsx(
                    'div',
                    {
                        className: h(Tn.column, Tn[`column__${a}`]),
                        children: e.jsx(p, {
                            header: `${R.strings.comp7_ext.progressionPage.tooltips.header.$dyn(a)}`,
                            body: `${R.strings.comp7_ext.progressionPage.tooltips.body.$dyn(a)}`,
                            children: e.jsx('div', {
                                className: Tn.image,
                                style: {
                                    backgroundImage: `url(${R.images.comp7.gui.maps.icons.statistics.$dyn(`${a}_32x32`)})`,
                                },
                            }),
                        }),
                    },
                    a,
                ),
            ),
        });
    },
    Ln = 'VehicleSlot_7c412eb1',
    En = 'VehicleSlot_vehicleImage_bebb3f54',
    zn = 'VehicleSlot_name_b6b086dd',
    Mn = 'VehicleSlot_text_7419b709',
    Wn = function ({ vehicle: a }) {
        const s = a ? a.techName.toLowerCase() : 'vehicle_placeholder';
        return e.jsxs('div', {
            className: Ln,
            children: [
                e.jsx('div', {
                    className: En,
                    style: { backgroundImage: `url(${R.images.gui.maps.icons.vehicle.x120x96.$dyn(`${s}`)})` },
                }),
                a
                    ? e.jsx(Ta, {
                          name: a.name,
                          tier: a.tier,
                          type: a.type,
                          vehicleCD: a.vehicleCD,
                          className: zn,
                          tooltipArgs: { vehicleCD: a.vehicleCD, tooltipId: 'shopVehicle' },
                      })
                    : e.jsx('div', { className: Mn, children: R.strings.comp7_ext.dash() }),
            ],
        });
    },
    Vn = (e, a) => {
        if (!a) return R.strings.comp7_ext.dash();
        const s = Number(a[e]);
        return Ba(s, 'winSeries' === e, 2);
    },
    Hn = r(function () {
        const { model: a } = Vt(),
            s = a.topVehiclesStatistics.get();
        return e.jsx('div', {
            className: Tn.tableContent,
            children: T(3, (a) => {
                const t = P(s, a);
                return e.jsx(
                    'div',
                    {
                        className: h(Tn.row, 1 !== a && Tn.row__highlighted),
                        children: Bn.map((a, s) =>
                            e.jsx(
                                'div',
                                {
                                    className: h(Tn.column, Tn[`column__${a}`]),
                                    children: 'vehicles' === a ? e.jsx(Wn, { vehicle: t }) : Vn(a, t),
                                },
                                s,
                            ),
                        ),
                    },
                    a,
                );
            }),
        });
    }),
    Un = r(function () {
        const { model: t, controls: r } = Vt(),
            { statisticsMode: i, currentDayIndex: n, selectedDayIndex: o } = t.root.get(),
            { mediaSize: c } = v(),
            d = i !== ia.Season && n !== o,
            l = s.useRef(d);
        return (
            s.useEffect(() => {
                (l.current !== d && b.sound('comp_7_gui_cust_tasks_slide'), (l.current = d));
            }, [d]),
            e.jsxs('div', {
                className: a(Tn.base, d && Tn.base__expanded),
                children: [
                    e.jsxs('div', {
                        className: Tn.header,
                        children: [
                            e.jsx('div', {
                                className: Tn.headerText,
                                children: R.strings.comp7_ext.progressionPage.vehicleStatistic(),
                            }),
                            e.jsx(I, {
                                theme: I.themes.secondary,
                                autoAlignContent: !1,
                                size: c >= S.Large ? I.sizes.small : I.sizes.extraSmall,
                                onClick: r.openVehicleStats,
                                children: R.strings.comp7_ext.progressionPage.toAllStatistic(),
                            }),
                        ],
                    }),
                    e.jsx(gr, {}),
                    e.jsxs('div', { className: Tn.table, children: [e.jsx(Dn, {}), e.jsx(Hn, {})] }),
                ],
            })
        );
    });
const Qn = 'ProgressionLayout_b39a022a',
    $n = 'ProgressionLayout_leftPanel_29b1139',
    qn = 'ProgressionLayout_rightPanel_42d86627',
    On = 'ProgressionLayout_divider_7bed07ed',
    Fn = 'ProgressionLayout_topContent_5774ce8',
    Yn = 'ProgressionLayout_indicators_a373d8ae',
    Gn = 'ProgressionLayout_bottomContent_dafa55d',
    Xn = 'ProgressionLayout_initialSpinner_9430136',
    Kn = { button: 'ProgressionLayout_button_1eb45096', spinner: 'ProgressionLayout_spinner_97f4b1d9' },
    Jn = r(() => {
        const { model: a, controls: s } = Vt(),
            { pageState: t, isStatisticsLoading: r } = a.root.get(),
            { mediaSize: i } = v(),
            n = o(ca),
            d = (function (e) {
                return e >= S.ExtraLarge ? 1278 : e >= S.Large ? 990 : e >= S.Medium ? 960 : 740;
            })(i);
        return e.jsxs('div', {
            className: Qn,
            children: [
                e.jsx(c.div, { className: $n, style: n, children: e.jsx(Hi, {}) }),
                e.jsx('div', { className: On }),
                e.jsx('div', {
                    className: qn,
                    style: { '--chartWidth': `${d}rem` },
                    children: (() => {
                        switch (t) {
                            case Mt.Initial:
                                return r
                                    ? e.jsx(O, { message: R.strings.comp7_ext.waitingSpinner.message(), className: Xn })
                                    : null;
                            case Mt.Success:
                                return e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsxs('div', {
                                            className: Fn,
                                            children: [
                                                e.jsx(Mr, {}),
                                                e.jsx(_r, { width: d }),
                                                e.jsx(fn, { children: e.jsx(An, { className: Yn }) }),
                                            ],
                                        }),
                                        e.jsxs('div', { className: Gn, children: [e.jsx(Un, {}), e.jsx(gn, {})] }),
                                    ],
                                });
                            case Mt.Error:
                                return e.jsx(pn, { classNames: Kn });
                            default:
                                console.error('Unreachable branch: add component for proper state');
                        }
                    })(),
                }),
            ],
        });
    }),
    Zn = { hasHtmlContent: !0 },
    eo = ({ maxBattlesCount: a, children: s }) =>
        e.jsx(p, {
            header: R.strings.comp7_ext.qualification.conditionTooltip.header(),
            body: U(R.strings.comp7_ext.qualification.conditionTooltip.body(a), { maxBattlesCount: a }),
            args: Zn,
            children: e.jsx('div', { children: s }),
        }),
    ao = 'BattlesCounter_5f193124',
    so = 'BattlesCounter_battlesCount_73d2731e',
    to = 'BattlesCounter_battlesDivider_7dbb3a33',
    ro = ({ battlesCount: s, maxBattlesCount: t, className: r }) =>
        e.jsx(Q, {
            text: R.strings.comp7_ext.qualification.counter(),
            binding: {
                battlesCount: e.jsx('div', { className: so, children: s }),
                divider: e.jsx('div', { className: to, children: '/' }),
                maxBattlesCount: t,
            },
            classMix: a(ao, r),
        }),
    io = r(({ index: a, className: s }) => {
        const { model: t } = Vt(),
            { mediaSize: r } = v(),
            i = t.computes.qualificationBattle(a);
        return e.jsx(La, { state: i.state, className: s, size: r >= S.ExtraLarge ? 'x234' : 'x173' }, a);
    }),
    no = 'BattlesProgression_c0296cbd',
    oo = 'BattlesProgression_item_e40a305e',
    co = r(({ className: s }) => {
        const { model: t } = Vt();
        return e.jsx('div', {
            className: a(no, s),
            children: T(t.qualificationBattles.get().length, (a) => e.jsx(io, { index: a, className: oo }, a)),
        });
    }),
    lo = (e) => {
        switch (!0) {
            case e >= S.ExtraLarge:
                return _a.x600;
            case e >= S.Large:
                return _a.x420;
            case e >= S.Medium:
                return _a.x260;
            default:
                return _a.x200;
        }
    },
    _o = 'Qualification_8f910914',
    mo = 'Qualification_content_8a6d7d92',
    uo = 'Qualification_footer_143b827d',
    ho = 'Qualification_qualificationEmblemContainer_dbf79dc7',
    go = 'Qualification_glowContainer_3a05eb3',
    po = 'Qualification_glow_8e19a98c',
    xo = 'Qualification_qualificationEmblem_a7436cbb',
    bo = 'Qualification_battlesProgression_d6ca81d2',
    fo = 'Qualification_counterDescription_7f2dd37b',
    vo = 'Qualification_ratingCalculationDescription_7d2ba061',
    So = 'Qualification_timerIcon_b77227aa',
    jo = 'Qualification_conditionContainer_3d81a257',
    wo = 'Qualification_condition_1f31ad6a',
    No = 'Qualification_rewardsDescription_1d74932c',
    Co = 'Qualification_infoIcon_139d9dc7',
    ko = 'Qualification_rewardsButton_7672a5e',
    Po = 'Qualification_buttonContent_9ef49ca6',
    Ro = 'Qualification_waiting_8e273156';
function Io(e) {
    return e >= S.Large ? I.sizes.small : I.sizes.extraSmall;
}
const yo = r(({ className: s }) => {
        const { model: t, controls: r } = Vt(),
            { model: i } = aa(),
            { mediaSize: n } = v(),
            d = t.qualificationModel.battlesCount.get(),
            l = t.qualificationModel.maxBattlesCount.get(),
            _ = t.qualificationModel.isRatingCalculation.get(),
            m = t.isParallaxPreloaded.get(),
            u = o({
                from: { opacity: 0 },
                to: as() ? { opacity: m ? 1 : 0 } : { opacity: 1 },
                delay: 300,
                config: { duration: 300 },
            });
        return as() && !m
            ? e.jsx('div', { className: Ro, children: e.jsx(O, {}) })
            : e.jsxs(c.div, {
                  style: u,
                  className: a(_o, s),
                  children: [
                      e.jsxs('div', {
                          className: mo,
                          children: [
                              e.jsxs('div', {
                                  className: ho,
                                  children: [
                                      e.jsx(Na, { className: go, classNames: { glow: po } }),
                                      e.jsx(Ia, { size: lo(n), seasonName: i.season.name.get(), className: xo }),
                                  ],
                              }),
                              e.jsx(ro, { battlesCount: d, maxBattlesCount: l }),
                              _
                                  ? e.jsx(p, {
                                        body: R.strings.comp7_ext.qualification.ratingCalculationTooltip(),
                                        children: e.jsx('div', {
                                            children: e.jsx(Q, {
                                                text: R.strings.comp7_ext.qualification.ratingCalculationDescription(),
                                                binding: { timerIcon: e.jsx('div', { className: So }) },
                                                classMix: vo,
                                            }),
                                        }),
                                    })
                                  : e.jsx(H, {
                                        text: R.strings.comp7_ext.qualification.counterWithDescription(),
                                        classMix: fo,
                                    }),
                              e.jsx(co, { className: bo }),
                          ],
                      }),
                      e.jsxs('div', {
                          className: uo,
                          children: [
                              e.jsxs('div', {
                                  className: jo,
                                  children: [
                                      e.jsx(H, {
                                          text: R.strings.comp7_ext.qualification.condition(l),
                                          classMix: wo,
                                          binding: { maxBattlesCount: l },
                                      }),
                                      e.jsx(eo, { maxBattlesCount: l, children: e.jsx('div', { className: Co }) }),
                                  ],
                              }),
                              e.jsx(Q, { text: R.strings.comp7_ext.qualification.rewardsDescription(), classMix: No }),
                              e.jsx(I, {
                                  classNames: { base: ko, content: Po },
                                  theme: I.themes.secondary,
                                  onMouseEnter: () => {
                                      (r.setRewardLayerVisible(!0), b.sound('comp_7_rank_rewards_hover'));
                                  },
                                  onMouseLeave: () => r.setRewardLayerVisible(!1),
                                  size: Io(n),
                                  onClick: r.goToRankRewardsPage,
                                  silent: !0,
                                  children: R.strings.comp7_ext.qualification.rewardsButton(),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    Ao = 'ProgressionPage_abde0f3e',
    Bo = 'ProgressionPage_scheduleSubheading_f92469b5',
    To = 'ProgressionPage_parallaxContainer_f5c5fb63',
    Do = 'ProgressionPage_contentWrapper_728d5d97',
    Lo = 'ProgressionPage_contentInner_78229ad9',
    Eo = 'ProgressionPage_content_f7a37594',
    zo = r(() => {
        const { model: a } = Vt(),
            [t, r] = s.useState(0),
            i = s.useRef(null),
            n = a.qualificationModel.isActive.get(),
            o = s.useCallback(() => {
                var e;
                if (!i.current) return;
                const a = fe(Math.round(null == (e = i.current) ? void 0 : e.getBoundingClientRect().height));
                r(a % 2 == 0 ? a : a - 1);
            }, []);
        return (
            le(() => o(), [o]),
            s.useLayoutEffect(() => {
                o();
            }, [o]),
            e.jsxs('div', {
                className: Ao,
                'data-test-id': 'progression-page',
                children: [
                    as() && n && e.jsx(Xt, { className: To }),
                    e.jsx(ba, { className: Bo }),
                    n
                        ? e.jsx('div', { className: Do, children: e.jsx(yo, { className: Eo }) })
                        : e.jsx('div', {
                              className: Do,
                              ref: i,
                              children: e.jsx('div', {
                                  className: Lo,
                                  style: { height: `${t}rem` },
                                  children: e.jsx(Jn, {}),
                              }),
                          }),
                ],
            })
        );
    }),
    [Mo, Wo] = w()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), qualification: e.primitives(['isActive'], 'qualificationModel') },
                s = e.array('items'),
                r = t(() => s.get().length),
                n = t(
                    (e) => {
                        const a = P(s.get(), e);
                        if (!a) throw new Error(`rank rewards item with index ${e} was not found`);
                        const { hasRewardsReceived: t, rank: r, from: i, to: n } = a;
                        return { hasRewardsReceived: t, rank: r, from: i, to: n };
                    },
                    { equals: N },
                ),
                o = t(
                    (e) => {
                        const a = P(s.get(), e);
                        if (!a) throw new Error(`rank rewards item with index ${e} was not found`);
                        return C(a.rewards, (e) => ({ ...e }));
                    },
                    { equals: N },
                ),
                c = t(
                    (e) => {
                        const a = P(o(e), 0);
                        if (!a) throw new Error(`rank rewards item with index ${e} has no any main reward at index: 0`);
                        return a;
                    },
                    { equals: N },
                ),
                d = t((e) => [...ve(o(e), 1)], { equals: N }),
                l = t((e) => {
                    const a = P(s.get(), e);
                    if (!a) throw new Error(`item with index ${e} was not found`);
                    const t = C(a.divisions, (e) => ({ ...e }));
                    return Et(t);
                }),
                _ = t((e) => !a.qualification.isActive.get() && e === a.root.get().currentItemIndex),
                m = t(
                    () => ({
                        nextNotAchievedItemIndex: F(s.get(), (e) => !e.hasRewardsReceived) ?? r(),
                        hasForceScroll: -1 !== a.root.get().initialItemIndex,
                    }),
                    { equals: i.shallow },
                );
            return {
                ...a,
                computes: {
                    rankRewardsItemsLength: r,
                    rankRewardsItem: n,
                    mainReward: c,
                    additionalRewards: d,
                    additionalRewardsCount: t((e) => d(e).length),
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
    Vo = 'ProgressionScroll_21d7f49a',
    Ho = 'ProgressionScroll_areaWrapper_ef84dc73',
    Uo = 'ProgressionScroll_areaContent_d2de9b28',
    Qo = ({
        stuckIndex: t,
        itemWidth: r,
        itemsOffset: i = 0,
        children: n,
        onStick: o,
        className: c,
        areaClassNames: d,
        barClassNames: l,
        staticContent: _,
    }) => {
        const m = M(r),
            { api: u } = Se(),
            { animationScroll: h, events: g, applyScroll: p } = u,
            x = je(u, u.settings.animationConfig),
            b = s.useCallback(
                (e) => {
                    p(t * m, e);
                },
                [p, m, t],
            ),
            f = s.useCallback(() => {
                null == o || o(Math.round(h.scrollPosition.goal / m));
            }, [o, h.scrollPosition, m]);
        (s.useEffect(() => (g.on('rest', f), () => g.off('rest', f)), [g, f]),
            s.useEffect(() => {
                const e = () => {
                    b({ immediate: !0, reset: !0 });
                };
                return (
                    g.on('resizeHandled', e),
                    () => {
                        g.off('resizeHandled', e);
                    }
                );
            }, [b, g]),
            s.useEffect(
                () =>
                    z(() => {
                        'idle' === x.type && h.scrollPosition.idle && b();
                    }),
                [h.scrollPosition, x, b],
            ));
        const v = s.useCallback(
            (e) => {
                'dragEnd' === e.type && p(t * m);
            },
            [p, m, t],
        );
        return e.jsxs('div', {
            className: a(Vo, c),
            style: { '--offset': `${i}rem` },
            children: [
                e.jsx(se, {
                    className: null == d ? void 0 : d.base,
                    classNames: {
                        wrapper: a(Ho, null == d ? void 0 : d.wrapper),
                        content: a(Uo, null == d ? void 0 : d.content),
                    },
                    children: n,
                }),
                _,
                e.jsx(te, { onDrag: v, classNames: l }),
            ],
        });
    },
    $o = (e, a = 100) => ((fe(we('px').width) * a) / 100 - e) / 2;
function qo({ children: a, api: s, ...t }) {
    return e.jsx(ae, { api: s, children: e.jsx(Qo, { ...t, children: a }) });
}
const Oo = (e, a) => (e > a ? a - 1 : void 0),
    Fo = 'AdditionalRewards_reward_793c62bc',
    Yo = 'AdditionalRewards_vehiclesRentBase_20861c60',
    Go = 'AdditionalRewards_vehiclesRentLabel_bed51da4',
    Xo = Ne.Small,
    Ko = r(({ rank: s, itemIndex: t, visibleRewardsCount: r, className: i }) => {
        const { model: n } = Wo(),
            o = n.computes.additionalRewards(t),
            c = n.computes.additionalRewardsCount(t),
            d = C(o, (e) => {
                const t = 'vehicles_rent' === e.name;
                return {
                    ...Ea({ reward: e, size: Xo, rank: s }),
                    className: a(t && Yo),
                    classNames: { info: a(t && Go) },
                };
            });
        return e.jsx(Ce, {
            data: d,
            size: Xo,
            count: Oo(c, r),
            rewardItemClassMix: Fo,
            boxRewardTooltip: {
                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                args: { fromIndex: r, rank: s },
            },
            classMix: i,
        });
    });
var Jo = ((e) => (
    (e[(e.NotStarted = 0)] = 'NotStarted'),
    (e[(e.Active = 1)] = 'Active'),
    (e[(e.OffSeason = 3)] = 'OffSeason'),
    (e[(e.Finished = 4)] = 'Finished'),
    e
))(Jo || {});
const Zo = {
        base: 'Heading_93b0c1e7',
        rankEmblemContainer: 'Heading_rankEmblemContainer_fe6484a4',
        godRays: 'Heading_godRays_170abada',
        rankEmblem__inactive: 'Heading_rankEmblem__inactive_df04c1d1',
        lock: 'Heading_lock_8c7ecce7',
        description: 'Heading_description_f5763105',
        rankName: 'Heading_rankName_c505c75',
        rankStatus: 'Heading_rankStatus_364e575b',
    },
    ec = (e) => {
        switch (e) {
            case Jo.OffSeason:
            case Jo.Finished:
                return R.strings.comp7_ext.rank.achieved();
            case Jo.Active:
                return R.strings.comp7_ext.rank.current();
            default:
                return '';
        }
    },
    ac = r(({ index: s, rankEmblemSize: t }) => {
        const { model: r } = Wo(),
            { model: i } = aa(),
            { topPercentage: n } = r.root.get(),
            { rank: o, from: c, to: d, hasRewardsReceived: l } = r.computes.rankRewardsItem(s),
            _ = r.computes.divisionsString(s),
            m = r.computes.isCurrentRank(s);
        return e.jsxs('div', {
            className: Zo.base,
            children: [
                e.jsxs(ht, {
                    rank: o,
                    from: c,
                    to: d,
                    topPercentage: n,
                    divisions: _,
                    className: Zo.rankEmblemContainer,
                    ignoreShowDelay: !0,
                    children: [
                        m &&
                            e.jsx(ke, {
                                className: Zo.godRays,
                                src: String(R.videos.comp7.godRaysNew_130x130()),
                                autoplay: !0,
                                loop: !0,
                            }),
                        e.jsx(la, {
                            seasonName: i.season.name.get(),
                            size: t,
                            rank: o,
                            className: a(Zo.rankEmblem, !l && Zo.rankEmblem__inactive),
                        }),
                        !l && e.jsx('div', { className: Zo.lock }),
                    ],
                }),
                e.jsxs('div', {
                    className: Zo.description,
                    children: [
                        e.jsx('div', { className: Zo.rankName, children: ha(o) }),
                        m && e.jsx('div', { className: Zo.rankStatus, children: ec(i.year.state.get()) }),
                    ],
                }),
            ],
        });
    }),
    sc = (e) => 'styleProgress' === e.name,
    tc = 'MainReward_de250efb',
    rc = 'MainReward_imageContainer_20c097c',
    ic = 'MainReward_glowContainer_570aee25',
    nc = 'MainReward_glow_aa880e51',
    oc = 'MainReward_preview_f2a964a3',
    cc = 'MainReward_info_dc048bbb',
    dc = 'MainReward_title_7cbb5d41',
    lc = 'MainReward_subTitle_247ccde3',
    _c = r(({ index: s, rank: t, size: r, hasHighlight: i, onPreviewClick: n, className: o }) => {
        const { model: c } = Wo(),
            d = c.computes.mainReward(s);
        return e.jsxs('div', {
            className: a(tc, o),
            children: [
                e.jsxs('div', {
                    className: rc,
                    children: [
                        i && e.jsx(Na, { className: ic, classNames: { glow: nc } }),
                        e.jsx(Pe, { ...Ea({ reward: d, size: r, rank: t }) }),
                        sc(d) &&
                            e.jsx('div', {
                                className: oc,
                                children: e.jsx(Re, {
                                    type: 'preview',
                                    onClick: n,
                                    children: R.strings.comp7_ext.rewards.preview(),
                                }),
                            }),
                    ],
                }),
                e.jsxs('div', {
                    className: cc,
                    children: [
                        e.jsx('div', { className: dc, children: d.label }),
                        e.jsx(Ie, {
                            text: String(R.strings.comp7_ext.rewards.subtitle.$dyn(d.name)),
                            params: { vehicleLevel: ye(10) },
                            className: lc,
                            upgradeLegacy: !0,
                            split: !0,
                        }),
                    ],
                }),
            ],
        });
    }),
    mc = 'RankRewardsItem_97feb95e',
    uc = 'RankRewardsItem_mainRewardContainer_85d98e1d',
    hc = 'RankRewardsItem_rewardsContainer_aa9fb54',
    gc = 'RankRewardsItem_statusContainer_32c29dc9',
    pc = 'RankRewardsItem_statusContainer__hidden_1627e91e',
    xc = 'RankRewardsItem_icon_c6768aea',
    bc = r(
        ({
            itemIndex: s,
            itemWidth: t,
            mainRewardSize: r,
            hasHighlight: i,
            visibleRewardsCount: n,
            rankEmblemSize: o,
            onPreviewClick: c,
        }) => {
            const { model: d } = Wo(),
                { rank: l, hasRewardsReceived: _ } = d.computes.rankRewardsItem(s);
            return e.jsxs('div', {
                className: mc,
                style: { '--itemWidth': `${t}rem` },
                children: [
                    e.jsx(ac, { index: s, rankEmblemSize: o }),
                    e.jsx(_c, { index: s, rank: l, size: r, hasHighlight: i, onPreviewClick: c, className: uc }),
                    e.jsx('div', {
                        className: hc,
                        children: e.jsx(Ko, { itemIndex: s, visibleRewardsCount: n, rank: l }),
                    }),
                    e.jsxs('div', {
                        className: a(gc, !_ && pc),
                        children: [e.jsx('div', { className: xc }), R.strings.comp7_ext.rewards.status.achieved()],
                    }),
                ],
            });
        },
    ),
    fc = (e) => (e >= S.Large ? _a.x110 : e >= S.Medium ? _a.x64 : _a.x48),
    vc = (e) =>
        e >= S.ExtraLarge ? Ne.S600x450 : e >= S.Large ? Ne.S400x300 : e >= S.Medium ? Ne.S296x222 : Ne.S232x174,
    Sc = (e) => (e >= Ae.Medium ? 5 : 4),
    jc = 'RankRewardsPage_966eba9d',
    wc = 'RankRewardsPage_content_470e75a1',
    Nc = 'RankRewardsPage_scrollContainer_22b6e09b',
    Cc = 'RankRewardsPage_areaContainer_ca7d8c25',
    kc = 'RankRewardsPage_areaWrapper_d63bb593',
    Pc = 'RankRewardsPage_bar_4df7da7f',
    Rc = { duration: 700, easing: (e) => Math.pow(e, 4) },
    Ic = r(() => {
        const { mediaSize: a, mediaWidth: t } = v(),
            { model: r, controls: i } = Wo(),
            { initialItemIndex: n } = r.root.get(),
            d = r.computes.rankRewardsItemsLength(),
            { nextNotAchievedItemIndex: l, hasForceScroll: _ } = r.computes.scrollingSettings(),
            [m, u] = s.useState(_ ? 'idle' : 'initial'),
            [h, g] = s.useState(_ ? n : l),
            p = ((e) =>
                e >= S.ExtraLarge ? 600 : e >= S.Large ? 460 : e >= S.Medium ? 400 : e >= S.Small ? 340 : 300)(a),
            x = d * p,
            f = ((e, a = 150, t) => {
                const r = M(e),
                    i = s.useMemo(
                        () => ({
                            settings: {
                                step: { type: 'fixed', value: r, clampedArrowStepTimeout: a },
                                animationConfig: { frequency: 0.5, ...t },
                            },
                        }),
                        [t, r, a],
                    );
                return ee(i);
            })(p),
            { scrollPosition: j, clampPosition: w, contentRef: N } = f,
            C = Be();
        (s.useLayoutEffect(() => {
            'idle' === m
                ? j.start({ scrollPosition: M(n * p), immediate: !0 })
                : 'initial' === m && j.start({ scrollPosition: M(x), immediate: !0 });
        }, []),
            s.useEffect(
                () =>
                    z(() => {
                        const e = N.current;
                        if (e && 'initial' === m) {
                            const a = w(e, M(l * p)),
                                s = w(e, M(x));
                            if (a === s) return void u('idle');
                            j.start({
                                scrollPosition: a,
                                from: { scrollPosition: s },
                                config: Rc,
                                onStart: () => {
                                    (u('scrolling'), b.sound('comp_7_rank_rewards_enter'));
                                },
                                onRest: () => {
                                    C.current || u('idle');
                                },
                            });
                        }
                    }),
                [w, N, C, p, l, m, x, j],
            ));
        const k = (e) => 'idle' === m && e === l,
            P = o(ca);
        return e.jsxs('div', {
            className: jc,
            'data-test-id': 'rank-rewards-page',
            children: [
                e.jsx(ba, {}),
                e.jsx(c.div, {
                    className: wc,
                    style: P,
                    children: e.jsx(qo, {
                        api: f,
                        stuckIndex: h,
                        itemWidth: p,
                        itemsOffset: $o(p),
                        onStick: g,
                        className: Nc,
                        areaClassNames: { base: Cc, wrapper: kc },
                        barClassNames: { base: Pc },
                        children: T(d, (s) =>
                            e.jsx(
                                bc,
                                {
                                    itemIndex: s,
                                    visibleRewardsCount: Sc(t),
                                    rankEmblemSize: fc(a),
                                    mainRewardSize: vc(a),
                                    itemWidth: p,
                                    hasHighlight: k(s),
                                    onPreviewClick: () => i.goToPreview(s, h),
                                },
                                s,
                            ),
                        ),
                    }),
                }),
            ],
        });
    });
var yc = ((e) => ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e))(
    yc || {},
);
const Ac = [Ma.Locked, Ma.ReadyToPurchase],
    Bc = [Wa.Vehicle, Wa.Style3d],
    [Tc, Dc] = w()(
        ({ observableModel: e, mode: a }) => {
            const s = e.array('rankDiscounts'),
                r = e.array('products'),
                n = { root: e.object() },
                o = t(
                    () =>
                        C(r.get(), (e) => ({
                            ...e,
                            price: { ...e.price },
                            ...('vehicleInfo' in e && { vehicleInfo: { ...e.vehicleInfo } }),
                            ...('reward' in e && { reward: { ...e.reward } }),
                        })),
                    { equals: N },
                ),
                c = t(
                    (e) => {
                        const a = P(o(), e);
                        if (!a) throw new Error(`product with index ${e} is not found`);
                        return a;
                    },
                    { equals: N },
                ),
                d = t(
                    () => {
                        const e = new Set(),
                            a = X(
                                o(),
                                (a, s, t) => {
                                    const r = s.rank,
                                        i = a.get(r);
                                    return void 0 === i ? (0 !== t && e.add(t), a.set(r, 1)) : a.set(r, i + 1);
                                },
                                new Map(),
                            );
                        return { recordsArray: Array.from(a.entries()), groupIndexesSet: e };
                    },
                    { equals: N },
                ),
                l = t(
                    (e) => {
                        const a = c(e);
                        return {
                            hasDiscount: a.state === Ma.ReadyToPurchase && a.price.discountValue > 0,
                            isEnough: !Ac.includes(a.state) || a.price.isEnough,
                        };
                    },
                    { equals: i.shallow },
                ),
                _ = t(() => {
                    const e = n.root.get().selectedProductId,
                        a = F(o(), (a) => a.id === e);
                    if (void 0 === a) throw new Error(`selectedProductId: ${e} is not found in products array`);
                    return a;
                }),
                m = t(
                    () => {
                        const e = _(),
                            a = c(e);
                        if (!a) throw new Error(`product with selected index ${e} is not found in products array`);
                        return a;
                    },
                    { equals: N },
                ),
                u = t(() => n.root.get().shopState === yc.Success && m().type !== Wa.Reward),
                h = t(() => {
                    const e = m();
                    return e.type === Wa.Vehicle && e.state !== Ma.ReadyToRestore && e.description;
                }),
                g = t(() => m().type === Wa.Reward),
                p = t(
                    () => {
                        const e = m(),
                            a = e.type === Wa.Vehicle && e.state !== Ma.Purchased;
                        return {
                            hasControls: Bc.includes(e.type),
                            hasAddToCompare: e.type === Wa.Vehicle,
                            hasPreview: a || e.type === Wa.Style3d,
                        };
                    },
                    { equals: i.shallow },
                ),
                x = t(() => C(s.get(), (e) => ({ ...e, divisions: Et(C(e.divisions, (e) => ({ ...e }))) })), {
                    equals: N,
                }),
                b = t(
                    (e) => {
                        const a = P(x(), e);
                        if (!a) throw new Error(`rank discount with index ${e} is not found`);
                        return a;
                    },
                    { equals: N },
                );
            return {
                ...n,
                computes: {
                    productsLength: t(() => o().length),
                    rankDiscountsLength: t(() => x().length),
                    product: c,
                    productsDividersConfig: d,
                    priceConfig: l,
                    selectedProductIndex: _,
                    selectedProduct: m,
                    hasSceneWrapper: u,
                    hasVehicleDescription: h,
                    hasLimitedQuantity: g,
                    controlsConfig: p,
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
    Lc = {
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
    Ec = ({ className: t, classNames: r, children: i }) => {
        const { api: n } = Se(),
            {
                events: o,
                getBounds: c,
                getWrapperSize: d,
                getContainerSize: l,
                applyStepTo: _,
                animationScroll: { scrollPosition: m },
            } = n,
            u = s.useRef(null),
            [h, g] = s.useState('visible'),
            p = re();
        je(n);
        const x = oe(() => {
                p.run(() => {
                    const [e, a] = c(),
                        s = d(),
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
            [f, v] = Te((e) => _(e), 150, [_]),
            S = s.useCallback(
                (e) => () => {
                    const a = e === De.Next && 'prevDisabled' === h,
                        s = e === De.Prev && 'nextDisabled' === h;
                    a || s || (b.click(), f(e));
                },
                [h, f],
            );
        return (
            ce(() => {
                x();
            }),
            Le(() => {
                x();
            }, [x]),
            s.useEffect(() => {
                const e = Ee(200, x);
                return (o.on('change', e), () => o.off('change', e));
            }, [o, x]),
            s.useEffect(
                () => (
                    document.addEventListener('mouseup', v, !0),
                    () => document.removeEventListener('mouseup', v, !0)
                ),
                [v],
            ),
            e.jsxs('div', {
                className: a(Lc.base, t),
                ref: u,
                children: [
                    e.jsx(se, {
                        classNames: {
                            wrapper: a(
                                Lc.areaWrapper,
                                null == r ? void 0 : r.areaWrapper,
                                'hidden' !== h && Lc.areaWrapper__hasScroll,
                            ),
                            content: a(Lc.areaContent, null == r ? void 0 : r.areaContent),
                        },
                        children: i,
                    }),
                    e.jsx(ka, {
                        size: 'small',
                        direction: 'left',
                        disabled: 'prevDisabled' === h,
                        className: a(Lc.arrow, Lc.arrow__prev, Lc[`arrow__${h}`]),
                        onMouseEnter: 'prevDisabled' === h ? void 0 : b.highlight,
                        onMouseDown: S(De.Next),
                        onMouseUp: v,
                    }),
                    e.jsx(ka, {
                        size: 'small',
                        direction: 'right',
                        disabled: 'nextDisabled' === h,
                        className: a(Lc.arrow, Lc.arrow__next, Lc[`arrow__${h}`]),
                        onMouseEnter: 'nextDisabled' === h ? void 0 : b.highlight,
                        onMouseDown: S(De.Prev),
                        onMouseUp: v,
                    }),
                ],
            })
        );
    },
    zc = 'ProductCardImage_e1f40b93',
    Mc = R.images.comp7.gui.maps.icons.products,
    Wc = r(({ index: s, className: t }) => {
        const { model: r } = Dc(),
            i = r.computes.product(s);
        return e.jsx('div', { className: a(zc, t), style: { backgroundImage: `url('${Mc.$num(i.id)}')` } });
    }),
    Vc = 'ProductCardName_ce866ed9',
    Hc = 'ProductCardName_vehicleName_a1701a73',
    Uc = 'ProductCardName_nation_e06370d7',
    Qc = 'ProductCardName_style3dContainer_59247316',
    $c = 'ProductCardName_overflowedName_8c3f6093',
    qc = 'ProductCardName_style3dDescription_3f9b224',
    Oc = r(({ index: s, className: t }) => {
        const { model: r } = Dc(),
            i = r.computes.product(s),
            { mediaSize: n } = v();
        switch (i.type) {
            case Wa.Vehicle: {
                const { name: s, tier: r, type: n, nation: o, isPremium: c } = i.vehicleInfo;
                return e.jsxs('div', {
                    className: a(Vc, t),
                    children: [
                        e.jsx('div', {
                            className: Uc,
                            style: { backgroundImage: `url('${R.images.gui.maps.icons.flags.c_20x12.$dyn(o)}')` },
                        }),
                        e.jsx(Ta, { name: s, tier: r, type: n, isPremium: c, className: Hc }),
                    ],
                });
            }
            case Wa.Style3d: {
                const { name: s, vehicleInfo: r } = i,
                    o = U(R.strings.comp7_ext.products.style3d(), {
                        name: U(R.strings.comp7_ext.quotesWrapper(), { name: s }),
                    });
                return e.jsxs('div', {
                    className: a(Vc, Qc, t),
                    children: [
                        e.jsx(ze, { classMix: $c, content: o }, n),
                        e.jsx(Q, {
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: { vehicleName: r.name },
                            classMix: qc,
                        }),
                    ],
                });
            }
            case Wa.Reward:
                return e.jsx(Q, { text: i.reward.label, classMix: a(Vc, t) });
            default:
                return (console.error(`Provide ProductCardName for ProductType:${i.type}`), null);
        }
    }),
    Fc = {
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
    Yc = { base: Fc.currencyValue },
    Gc = r(({ index: s, className: t }) => {
        const { model: r } = Dc(),
            { price: i } = r.computes.product(s),
            n = r.computes.priceConfig(s).hasDiscount;
        return e.jsxs('div', {
            className: a(Fc.base, t),
            children: [
                n &&
                    e.jsxs('div', {
                        className: a(Fc.discount, Fc[`discount__${i.name}`]),
                        children: [e.jsx(x, { value: i.value }), e.jsx('div', { className: Fc.discountLine })],
                    }),
                e.jsx(Me, {
                    type: i.name,
                    reverse: !0,
                    size: Me.sizes.extraSmall,
                    classNames: Yc,
                    children: n ? i.discountValue : i.value,
                }),
            ],
        });
    }),
    Xc = 'ProductCardPurchased_2961b484',
    Kc = 'ProductCardPurchased_icon_8b2c6156',
    Jc = 'ProductCardPurchased_text_4c3e5e17',
    Zc = ({ className: s }) =>
        e.jsxs('div', {
            className: a(Xc, s),
            children: [
                e.jsx('div', { className: Kc }),
                e.jsx('div', { className: Jc, children: R.strings.comp7_ext.products.purchased() }),
            ],
        }),
    ed = 'ProductCardReadyToRestore_f4520fe',
    ad = ({ className: s }) =>
        e.jsx('div', {
            className: a(ed, s),
            children: e.jsx(Q, { text: R.strings.comp7_ext.products.readyToRestore() }),
        }),
    sd = {
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
    td = {
        [Wa.Vehicle]: 'comp_7_shop_carousel_click_tank',
        [Wa.Style3d]: 'comp_7_shop_carousel_click_style',
        [Wa.Reward]: 'comp_7_shop_carousel_click_module',
        [Wa.Base]: '',
    },
    rd = r(({ index: s, className: t, classNames: r }) => {
        const { model: i, controls: n } = Dc(),
            { id: o, state: c, isNew: d, rank: l, type: _, tooltipId: m } = i.computes.product(s),
            u = i.computes.priceConfig(s).hasDiscount,
            h = i.computes.selectedProductIndex(),
            g = s === h;
        return e.jsx(he, {
            args: { id: o, tooltipId: m },
            ignoreShowDelay: !0,
            children: e.jsxs('div', {
                className: a(sd.base, g && sd.base__selected, sd[`base__${c}`], t),
                onClick: () => {
                    g || (b.click(), b.sound(td[_]), n.selectProduct(o), n.markProductSeen(o));
                },
                children: [
                    e.jsx('div', {
                        className: a(sd.background, null == r ? void 0 : r.background),
                        style: {
                            backgroundImage: `url(${pa(R.images.comp7.gui.maps.icons.products.cardsBackgrounds, l)})`,
                        },
                    }),
                    e.jsxs('div', {
                        className: sd.corners,
                        children: [
                            e.jsx('div', {
                                className: a(sd.corner, sd.corner__top, sd.corner__left, null == r ? void 0 : r.corner),
                            }),
                            e.jsx('div', {
                                className: a(
                                    sd.corner,
                                    sd.corner__top,
                                    sd.corner__right,
                                    null == r ? void 0 : r.corner,
                                ),
                            }),
                            e.jsx('div', {
                                className: a(
                                    sd.corner,
                                    sd.corner__bottom,
                                    sd.corner__left,
                                    null == r ? void 0 : r.corner,
                                ),
                            }),
                            e.jsx('div', {
                                className: a(
                                    sd.corner,
                                    sd.corner__bottom,
                                    sd.corner__right,
                                    null == r ? void 0 : r.corner,
                                ),
                            }),
                        ],
                    }),
                    e.jsx('div', { className: a(sd.stroke, null == r ? void 0 : r.stroke) }),
                    e.jsx(Wc, { index: s, className: a(sd.imageContainer, null == r ? void 0 : r.imageContainer) }),
                    e.jsx('div', { className: sd.backgroundGradient }),
                    u && e.jsx('div', { className: sd.discountBackground }),
                    d && e.jsx('div', { className: a(sd.notification, null == r ? void 0 : r.notification) }),
                    e.jsxs('div', {
                        className: sd.container,
                        children: [
                            e.jsx(Oc, { index: s, className: sd.name }),
                            (() => {
                                switch (c) {
                                    case Ma.ReadyToRestore:
                                        return e.jsx(ad, { className: a(sd.bottomString, sd.bottomString__withIcon) });
                                    case Ma.Purchased:
                                        return e.jsx(Zc, { className: a(sd.bottomString, sd.bottomString__withIcon) });
                                    default:
                                        return e.jsx(Gc, { index: s, className: sd.bottomString });
                                }
                            })(),
                        ],
                    }),
                    c === Ma.Locked && e.jsx('div', { className: sd.lock }),
                ],
            }),
        });
    }),
    id = 'RankSection_c990c598',
    nd = 'RankSection_dividerContainer_811b1b79',
    od = 'RankSection_dividerContainer__right_551e2893',
    cd = 'RankSection_verticalDivider_3a6d642f',
    dd = 'RankSection_centralContainer_755b9082',
    ld = 'RankSection_rankDescription_fb9e5f48',
    _d = 'RankSection_rankImage_8c4cf71f',
    md = 'RankSection_rankString_514c111b',
    ud = 'RankSection_horizontalDivider_95048bb6',
    hd = 'RankSection_peak_9d148568',
    gd = 'RankSection_peak__right_551e2893',
    pd = 'RankSection_line_2a5d3241',
    xd = ({ rank: s, seasonName: t, className: r }) =>
        e.jsxs('div', {
            className: a(id, r),
            children: [
                e.jsxs('div', {
                    className: nd,
                    children: [
                        e.jsx('div', { className: cd }),
                        e.jsxs('div', {
                            className: ud,
                            children: [
                                e.jsx('div', { className: hd }),
                                e.jsx('div', { className: pd }),
                                e.jsx('div', { className: a(hd, gd) }),
                            ],
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: dd,
                    children: [
                        e.jsx(la, { rank: s, size: _a.x40, seasonName: t, className: _d }),
                        e.jsx(Q, {
                            classMix: ld,
                            text: R.strings.comp7_ext.products.rankAccess(),
                            binding: {
                                rank: e.jsx('div', {
                                    className: md,
                                    children: U(R.strings.comp7_ext.quotesWrapper(), { name: xa(s) }),
                                }),
                            },
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: a(nd, od),
                    children: [
                        e.jsx('div', { className: cd }),
                        e.jsxs('div', {
                            className: ud,
                            children: [
                                e.jsx('div', { className: hd }),
                                e.jsx('div', { className: pd }),
                                e.jsx('div', { className: a(hd, gd) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    bd = 'Carousel_dividersSections_1b165bca',
    fd = 'Carousel_areaContent_38720fd1',
    vd = 'Carousel_areaWrapper_8d15463',
    Sd = 'Carousel_section_239ec09e',
    jd = 'Carousel_scrollItem_75645375',
    wd = 'Carousel_scrollItem__group_d0111639',
    Nd = 'Carousel_productCard_bca51e20',
    Cd = 'Carousel_selectedGlowContainer_d798cbe',
    kd = 'Carousel_glow_17d85254',
    Pd = 'Carousel_selectedGlowContainer__active_bca51e20',
    Rd = { areaWrapper: vd, areaContent: fd },
    Id = { glow: kd },
    yd = r(({ className: t }) => {
        const { model: r } = Dc(),
            { model: i } = aa(),
            { mediaSize: n } = v(),
            o = s.useRef(null),
            c = r.computes.selectedProductIndex(),
            d = r.computes.productsDividersConfig(),
            l = ((e) => (e >= S.Medium ? 180 : e >= S.Small ? 150 : 120))(n),
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
                return ee(a);
            })(),
            m = re(),
            u = n >= S.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
            h = oe((e) => {
                m.run(() => {
                    if (o && o.current) {
                        const a = o.current.offsetLeft - M(l);
                        _.applyScroll(a, e);
                    }
                });
            });
        return (
            ce(() => {
                h();
            }),
            le(() => {
                h({ immediate: !0, reset: !0 });
            }, [h]),
            e.jsx('div', {
                style: {
                    '--shopOffset': `${l}rem`,
                    '--itemOffset': `${u.offset}rem`,
                    '--groupOffset': 2 * u.offset + 'rem',
                    '--itemWidth': `${u.width}rem`,
                },
                children: e.jsx(ae, {
                    api: _,
                    children: e.jsxs(Ec, {
                        className: t,
                        classNames: Rd,
                        children: [
                            e.jsx('div', {
                                className: bd,
                                children: d.recordsArray.map(([a, s]) =>
                                    e.jsx(
                                        'div',
                                        {
                                            className: Sd,
                                            style: { width: u.width * s + u.offset * (s - 1) + 'rem' },
                                            children: e.jsx(xd, { rank: a, seasonName: i.season.name.get() }),
                                        },
                                        a,
                                    ),
                                ),
                            }),
                            T(r.computes.productsLength(), (s) =>
                                e.jsxs(
                                    'div',
                                    {
                                        className: a(jd, d.groupIndexesSet.has(s) && wd),
                                        onMouseEnter: c === s ? void 0 : b.highlight,
                                        ref: c === s ? o : void 0,
                                        children: [
                                            e.jsx(Na, { className: a(Cd, s === c && Pd), classNames: Id }),
                                            e.jsx(rd, { index: s, className: Nd }),
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
    Ad = 'ProductControls_control_9de2450c',
    Bd = { label: 'ProductControls_label_f6830376' },
    Td = r(() => {
        const { mediaSize: a } = v(),
            { model: s, controls: t } = Dc(),
            { isVehiclesCompareEnabled: r, vehicleCompareTooltipId: i } = s.root.get(),
            { hasAddToCompare: n, hasPreview: o } = s.computes.controlsConfig(),
            c = a >= S.Medium ? 'normal' : 'small';
        return e.jsxs(e.Fragment, {
            children: [
                n &&
                    e.jsx(he, {
                        args: { tooltipId: i },
                        isEnabled: !r,
                        children: e.jsx('div', {
                            className: Ad,
                            children: e.jsx(Re, {
                                type: 'compare',
                                disabled: !r,
                                onClick: t.addToVehicleCompare,
                                size: c,
                                classNames: Bd,
                                children: R.strings.comp7_ext.controls.compare(),
                            }),
                        }),
                    }),
                o &&
                    e.jsx(Re, {
                        type: 'preview',
                        onClick: t.goToPreview,
                        size: c,
                        className: Ad,
                        classNames: Bd,
                        children: R.strings.comp7_ext.controls.preview(),
                    }),
            ],
        });
    }),
    Dd = 'PeaksContainer_ac84c920',
    Ld = 'PeaksContainer_venzel_8ceb268e',
    Ed = 'PeaksContainer_venzel__right_786d2e11',
    zd = 'PeaksContainer_icon_938427c2',
    Md = 'PeaksContainer_line_c8c429d2',
    Wd = 'PeaksContainer_content_fa8f58a4',
    Vd = ({ className: t, classNames: r, children: i }) => {
        const n = s.Children.toArray(i).length;
        return e.jsxs('div', {
            className: a(Dd, t),
            children: [
                0 === n &&
                    e.jsxs('div', {
                        className: a(Ld, null == r ? void 0 : r.venzel),
                        children: [
                            e.jsx('div', { className: a(zd, null == r ? void 0 : r.icon) }),
                            e.jsx('div', { className: a(Md, null == r ? void 0 : r.line) }),
                        ],
                    }),
                n > 0 && e.jsx('div', { className: a(Wd, null == r ? void 0 : r.content), children: i }),
                e.jsxs('div', {
                    className: a(Ld, null == r ? void 0 : r.venzel, Ed),
                    children: [
                        e.jsx('div', { className: a(zd, null == r ? void 0 : r.icon) }),
                        e.jsx('div', { className: a(Md, null == r ? void 0 : r.line) }),
                    ],
                }),
            ],
        });
    },
    Hd = 'RankDiscount_9bb75367',
    Ud = 'RankDiscount_godRays_4c25e606',
    Qd = 'RankDiscount_rank_5f187f66',
    $d = 'RankDiscount_disabledRankEmblem_47ff911f',
    qd = 'RankDiscount_lock_c41f1a10',
    Od = 'RankDiscount_footer_6f406c1d',
    Fd = 'RankDiscount_rankAccessString_a1920cc8',
    Yd = 'RankDiscount_footer__maxRank_88b30d74',
    Gd = 'RankDiscount_valueContainer_513d8a27',
    Xd = 'RankDiscount_discountBackground_9a06158d',
    Kd = r(({ index: s }) => {
        const { model: t } = Dc(),
            { maxAchievedRank: r } = t.root.get(),
            i = t.computes.rankDiscount(s),
            n = t.computes.selectedProduct(),
            o = i.rank === r;
        return i.rank === n.rank
            ? e.jsx('div', {
                  className: a(Fd),
                  children: e.jsx(Q, { text: R.strings.comp7_ext.products.productAccess() }),
              })
            : i.value > 0
              ? e.jsxs('div', {
                    className: Gd,
                    children: [
                        o && e.jsx('div', { className: Xd }),
                        e.jsx(Q, {
                            text: R.strings.comp7_ext.products.discount(),
                            binding: { discountPercentage: i.value },
                        }),
                    ],
                })
              : null;
    }),
    Jd = r(({ index: s, className: t }) => {
        const { model: r } = Dc(),
            { model: i } = aa(),
            { currentRank: n, maxAchievedRank: o } = r.root.get(),
            c = r.computes.rankDiscount(s),
            d = c.rank === o,
            l = !c.wasUnlocked;
        return e.jsxs('div', {
            className: a(Hd, t),
            children: [
                c.rank === n &&
                    e.jsx(ke, {
                        className: Ud,
                        src: String(R.videos.comp7.godRaysNew_130x130()),
                        autoplay: !0,
                        loop: !0,
                    }),
                e.jsx(ht, {
                    rank: c.rank,
                    from: c.from,
                    to: c.to,
                    divisions: c.divisions,
                    className: Qd,
                    ignoreShowDelay: !0,
                    children: e.jsx(la, {
                        seasonName: i.season.name.get(),
                        size: _a.x48,
                        rank: c.rank,
                        className: a(l && $d),
                    }),
                }),
                l && e.jsx('div', { className: qd }),
                e.jsx('div', { className: a(Od, d && Yd), children: e.jsx(Kd, { index: s }) }),
            ],
        });
    }),
    Zd = 'DiscountSection_9acad8ef',
    el = 'DiscountSection_discounts_c60041bb',
    al = 'DiscountSection_rankDiscount_21ec2bb9',
    sl = 'DiscountSection_discountDescription_20f9cc53',
    tl = r(({ className: s }) => {
        const { model: t } = Dc();
        return e.jsxs('div', {
            className: a(Zd, s),
            children: [
                e.jsx(Vd, { children: R.strings.comp7_ext.products.discountSectionName() }),
                e.jsx('div', {
                    className: el,
                    children: T(t.computes.rankDiscountsLength(), (a) => e.jsx(Jd, { index: a, className: al }, a)),
                }),
                e.jsx(H, { text: R.strings.comp7_ext.products.discountDescription(), classMix: sl }),
            ],
        });
    }),
    rl = 'InProgressSection_fefaeb32',
    il = 'InProgressSection_content_b04c3856',
    nl = 'InProgressSection_background_a19a49db',
    ol = 'InProgressSection_highlight_f936c9ac',
    cl = 'InProgressSection_state_2d79ab7d',
    dl = 'InProgressSection_inProgressString_9cafd080',
    ll = 'InProgressSection_inProgressStringIcon_a4a5b2ae',
    _l = ({ className: s }) =>
        e.jsxs('div', {
            className: a(rl, s),
            children: [
                e.jsx(Vd, {}),
                e.jsxs('div', {
                    className: il,
                    children: [
                        e.jsx('div', { className: nl }),
                        e.jsx('div', { className: ol }),
                        e.jsx('div', {
                            className: cl,
                            children: e.jsxs('div', {
                                className: dl,
                                children: [e.jsx('div', { className: ll }), R.strings.comp7_ext.products.inProgress()],
                            }),
                        }),
                    ],
                }),
                e.jsx(Vd, {}),
            ],
        }),
    ml = 'NationFlag_42e58a02',
    ul = 'NationFlag_nationFlag_2f0a2e52',
    hl = R.images.gui.maps.icons.eventBoards.flagsOverlay,
    gl = ({ nation: s, className: t }) =>
        e.jsxs('div', {
            className: a(ml, t),
            children: [
                e.jsx('div', { className: ul, style: { backgroundImage: `url(${hl.$dyn(s)})` } }),
                e.jsx('div', { className: ul, style: { backgroundImage: `url(${hl.$dyn(s)})` } }),
            ],
        }),
    pl = 'NameSection_be509601',
    xl = 'NameSection_nationFlag_53badb0a',
    bl = 'NameSection_productName_ebab47bb',
    fl = 'NameSection_style3dSubtitle_f11dae45',
    vl = 'NameSection_style3dSubtitleVehicleText_6fb3b14',
    Sl = 'NameSection_vehicleDescription_71fefa0',
    jl = (e) => (e >= S.Medium ? Da.x64 : Da.x48),
    wl = (e) => (e >= S.Large ? Da.x48 : Da.x24),
    Nl = r(({ className: s }) => {
        const { model: t } = Dc(),
            { mediaSize: r } = v(),
            i = t.computes.selectedProduct(),
            n = { id: i.id, tooltipId: i.tooltipId };
        switch (i.type) {
            case Wa.Vehicle: {
                const { tier: o, name: c, type: d, isPremium: l, roleKey: _, nation: m, vehicleCD: u } = i.vehicleInfo;
                return e.jsxs('div', {
                    className: a(pl, s),
                    children: [
                        e.jsx(gl, { nation: m, className: xl }),
                        e.jsx(Ta, {
                            tier: o,
                            name: c,
                            type: d,
                            tooltipArgs: n,
                            isPremium: l,
                            size: jl(r),
                            role: _,
                            vehicleCD: u,
                            className: bl,
                        }),
                        t.computes.hasVehicleDescription() && e.jsx(Q, { text: i.description, classMix: Sl }),
                    ],
                });
            }
            case Wa.Style3d: {
                const { tier: t, name: o, type: c, isPremium: d } = i.vehicleInfo;
                return e.jsxs('div', {
                    className: a(pl, s),
                    children: [
                        e.jsx(he, {
                            args: n,
                            children: e.jsx('div', {
                                children: e.jsx(Q, {
                                    text: R.strings.comp7_ext.products.style3d(),
                                    binding: { name: e.jsx(Va, { name: i.name }) },
                                    classMix: bl,
                                }),
                            }),
                        }),
                        e.jsx(Q, {
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: {
                                vehicleName: e.jsx(Ta, {
                                    name: o,
                                    tier: t,
                                    type: c,
                                    isPremium: d,
                                    size: wl(r),
                                    className: vl,
                                }),
                            },
                            classMix: fl,
                        }),
                    ],
                });
            }
            case Wa.Reward:
                return e.jsx('div', {
                    className: a(pl, s),
                    children: e.jsx(he, {
                        args: n,
                        children: e.jsx('div', { className: bl, children: i.reward.label }),
                    }),
                });
            default:
                return (console.error(`Provide NameSection case for ProductTypes:${i.type}`), null);
        }
    }),
    Cl = {
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
    kl = r(() => {
        const { model: a, controls: s } = Dc(),
            { mediaSize: t } = v(),
            r = a.computes.selectedProductIndex(),
            i = a.computes.selectedProduct(),
            { isEnough: n } = a.computes.priceConfig(r),
            o = () => {
                n && (b.sound(R.sounds.comp_7_shop_purchase_preview()), s.purchase());
            };
        switch (i.state) {
            case Ma.Locked:
                return e.jsxs(e.Fragment, {
                    children: [
                        e.jsx('div', { className: Cl.separator }),
                        e.jsxs('div', {
                            className: Cl.accessContainer,
                            children: [
                                e.jsx('div', {
                                    className: Cl.rankBackground,
                                    style: {
                                        backgroundImage: `url(${pa(R.images.comp7.gui.maps.icons.products.accessBackgrounds, i.rank)})`,
                                    },
                                }),
                                e.jsxs('div', {
                                    className: Cl.accessBlock,
                                    children: [
                                        e.jsx('div', { className: Cl.lock }),
                                        e.jsx(Q, {
                                            text: R.strings.comp7_ext.products.message.rankAccess(),
                                            binding: {
                                                rank: e.jsx('span', { className: Cl.rankString, children: ha(i.rank) }),
                                            },
                                            classMix: Cl.accessString,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            case Ma.ReadyToPurchase:
                return e.jsx(p, {
                    isEnabled: !n,
                    body: R.strings.comp7_ext.products.message.notEnough(),
                    children: e.jsx('div', {
                        className: Cl.buttonContainer,
                        children: e.jsx(I, {
                            theme: I.themes.primary,
                            size: da(t),
                            onClick: o,
                            onMouseEnter: () => {
                                n && b.highlight();
                            },
                            className: Cl.button,
                            disabled: !n,
                            silent: !0,
                            children: R.strings.comp7_ext.products.actions.buy(),
                        }),
                    }),
                });
            default:
                return (
                    console.error(`ActionsContainer in PriceSection was called for unappropriated state ${i.state}`),
                    null
                );
        }
    }),
    Pl = { base: Cl.currencyValue },
    Rl = r(({ className: s }) => {
        const { model: t } = Dc(),
            r = t.computes.selectedProduct(),
            i = t.computes.selectedProductIndex(),
            { hasDiscount: n, isEnough: o } = t.computes.priceConfig(i);
        return e.jsxs('div', {
            className: a(Cl.base, s),
            children: [
                e.jsx(Vd, { children: R.strings.comp7_ext.products.priceSectionName() }),
                e.jsxs('div', {
                    className: Cl.container,
                    children: [
                        e.jsxs('div', {
                            className: Cl.priceContainer,
                            children: [
                                e.jsxs('div', {
                                    className: Cl.price,
                                    children: [
                                        n &&
                                            e.jsxs('div', {
                                                className: a(Cl.discount, Cl[`discount__${r.price.name}`]),
                                                children: [
                                                    e.jsx(x, { value: r.price.value }),
                                                    e.jsx('div', { className: Cl.discountLine }),
                                                ],
                                            }),
                                        e.jsx(Me, {
                                            type: r.price.name,
                                            reverse: !0,
                                            enough: o,
                                            size: Me.sizes.large,
                                            classNames: Pl,
                                            children: n ? r.price.discountValue : r.price.value,
                                        }),
                                    ],
                                }),
                                t.computes.hasLimitedQuantity() &&
                                    e.jsx('div', {
                                        className: Cl.limitString,
                                        children: e.jsx(Q, {
                                            text: R.strings.comp7_ext.products.limitedQuantitySeason(),
                                            binding: {
                                                count: e.jsx('span', {
                                                    className: Cl.count,
                                                    children: r.limitedQuantity,
                                                }),
                                            },
                                        }),
                                    }),
                            ],
                        }),
                        e.jsx(kl, {}),
                    ],
                }),
            ],
        });
    }),
    Il = 'PurchasedSection_6164cf64',
    yl = 'PurchasedSection_content_d868988b',
    Al = 'PurchasedSection_state_30f7765d',
    Bl = 'PurchasedSection_purchasedString_f2d4b10a',
    Tl = 'PurchasedSection_purchasedStringIcon_396eb88c',
    Dl = 'PurchasedSection_quantityOfferString_9c521da',
    Ll = 'PurchasedSection_background_7dd21da0',
    El = 'PurchasedSection_highlight_8cd4f52',
    zl = 'PurchasedSection_buttonContainer_f3e259c2',
    Ml = 'PurchasedSection_button_c980ad41',
    Wl = r(() => {
        const { model: a, controls: s } = Dc(),
            t = a.computes.selectedProduct(),
            { mediaSize: r } = v();
        switch (t.type) {
            case Wa.Vehicle:
                return t.canGoToHangar
                    ? e.jsx('div', {
                          className: zl,
                          children: e.jsx(I, {
                              theme: I.themes.primary,
                              size: da(r),
                              onClick: s.goToHangar,
                              className: Ml,
                              children: R.strings.comp7_ext.products.actions.toHangar(),
                          }),
                      })
                    : null;
            case Wa.Style3d: {
                const a = !t.canGoToCustomization;
                return e.jsx(p, {
                    isEnabled: a,
                    header: R.strings.comp7_ext.products.customizationUnavailable.title(),
                    body: R.strings.comp7_ext.products.customizationUnavailable.body(),
                    children: e.jsx('div', {
                        className: zl,
                        children: e.jsx(I, {
                            theme: I.themes.primary,
                            size: da(r),
                            onMouseEnter: () => {
                                a || b.highlight();
                            },
                            onClick: () => {
                                a || (b.click(), s.goToCustomization());
                            },
                            silent: !0,
                            className: Ml,
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
    Vl = r(({ className: s }) => {
        const { model: t } = Dc(),
            r = t.computes.selectedProduct();
        return e.jsxs('div', {
            className: a(Il, s),
            children: [
                e.jsx(Vd, {}),
                e.jsxs('div', {
                    className: yl,
                    children: [
                        e.jsx('div', { className: Ll }),
                        e.jsx('div', { className: El }),
                        e.jsxs('div', {
                            className: Al,
                            children: [
                                e.jsxs('div', {
                                    className: Bl,
                                    children: [
                                        e.jsx('div', { className: Tl }),
                                        R.strings.comp7_ext.products.purchased(),
                                    ],
                                }),
                                r.type === Wa.Reward &&
                                    e.jsx('div', {
                                        className: Dl,
                                        children: U(R.strings.comp7_ext.products.limitedQuantitySeason(), {
                                            count: r.limitedQuantity,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
                e.jsx(Vd, {}),
                e.jsx(Wl, {}),
            ],
        });
    }),
    Hl = 'ReadyToRestoreSection_2e7dcd59',
    Ul = 'ReadyToRestoreSection_content_65d667a0',
    Ql = 'ReadyToRestoreSection_description_67d7fa6f',
    $l = 'ReadyToRestoreSection_buttonContainer_37adf442',
    ql = 'ReadyToRestoreSection_button_8778f905',
    Ol = r(({ className: s }) => {
        const { controls: t } = Dc(),
            { mediaSize: r } = v();
        return e.jsxs('div', {
            className: a(Hl, s),
            children: [
                e.jsx(Vd, {}),
                e.jsxs('div', {
                    className: Ul,
                    children: [
                        e.jsx('div', {
                            className: Ql,
                            children: e.jsx(Q, { text: R.strings.comp7_ext.products.readyToRestoreDescription() }),
                        }),
                        e.jsx('div', {
                            className: $l,
                            children: e.jsx(I, {
                                theme: I.themes.primary,
                                size: da(r),
                                onClick: () => {
                                    (b.sound(R.sounds.comp_7_shop_purchase_preview()), t.restore());
                                },
                                className: ql,
                                children: R.strings.comp7_ext.products.actions.restore(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Fl = 'ProductDetails_8c03fb32',
    Yl = 'ProductDetails_section_dcf92365',
    Gl = [Ma.Locked, Ma.ReadyToPurchase],
    Xl = r(({ className: s }) => {
        const { model: t } = Dc(),
            r = t.computes.selectedProduct();
        return e.jsxs('div', {
            className: a(Fl, s),
            children: [
                e.jsx(Nl, { className: Yl }),
                Gl.includes(r.state) && e.jsx(tl, { className: Yl }),
                (() => {
                    switch (r.state) {
                        case Ma.Purchased:
                            return e.jsx(Vl, { className: Yl });
                        case Ma.InProgress:
                            return e.jsx(_l, { className: Yl });
                        case Ma.ReadyToRestore:
                            return e.jsx(Ol, { className: Yl });
                        default:
                            return e.jsx(Rl, { className: Yl });
                    }
                })(),
            ],
        });
    }),
    Kl = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
    Jl = {
        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        config: { duration: 100 },
    },
    Zl = 'ShopPage_7caee38d',
    e_ = 'ShopPage_sceneWrapper_d44346fd',
    a_ = 'ShopPage_vignette_287ac90',
    s_ = 'ShopPage_headersWrapper_3bd5a059',
    t_ = 'ShopPage_activeSeasonState_bb0c25d9',
    r_ = 'ShopPage_contentWrapper_d401697c',
    i_ = 'ShopPage_rewardContainer_99ec190d',
    n_ = 'ShopPage_rewardBase_bb0c25d9',
    o_ = 'ShopPage_rewardHighlight_c5563e7',
    c_ = 'ShopPage_controls_b6cdda75',
    d_ = 'ShopPage_mainContainer_f2e01656',
    l_ = 'ShopPage_details_11208d85',
    __ = 'ShopPage_carousel_1cf76ba5',
    m_ = (e) => (e >= S.Large ? Ne.S600x450 : e >= S.Small ? Ne.S400x300 : Ne.S296x222),
    u_ = r(() => {
        const { model: a } = Dc(),
            { mediaSize: t } = v(),
            r = o(ca),
            i = a.computes.selectedProduct(),
            { hasControls: n } = a.computes.controlsConfig(),
            [d, l] = o(() => Kl),
            [_, m] = o(() => Jl);
        return (
            s.useLayoutEffect(() => {
                (m.set(Jl.from), l.set(Kl.from));
            }, [m, l, i.id, i.state]),
            s.useEffect(() => {
                (m.start({ ...Jl, delay: 300 }), l.start({ ...Kl, delay: 100 }));
            }, [m, l, i.id, i.state]),
            e.jsxs(e.Fragment, {
                children: [
                    i.type === Wa.Reward &&
                        e.jsxs('div', {
                            className: i_,
                            children: [
                                e.jsx('div', { className: o_ }),
                                e.jsx(c.div, {
                                    style: d,
                                    children: e.jsx(Pe, {
                                        ...Ea({ reward: i.reward, size: m_(t) }),
                                        tooltipArgs: We({ tooltipId: i.tooltipId, id: i.id }),
                                        className: n_,
                                    }),
                                }),
                            ],
                        }),
                    n && e.jsx(c.div, { style: _, className: c_, children: e.jsx(Td, {}, i.id) }),
                    e.jsx(c.div, { style: d, className: d_, children: e.jsx(Xl, { className: l_ }) }),
                    e.jsx(c.div, { style: r, children: e.jsx(yd, { className: __ }) }),
                ],
            })
        );
    }),
    h_ = { activeSeasonState: t_ },
    g_ = { [yc.Initial]: () => e.jsx('div', {}), [yc.Success]: u_, [yc.Error]: Ss },
    p_ = r(() => {
        const a = o(ca),
            { model: s, controls: t } = Dc(),
            r = s.root.get().shopState,
            i = s.computes.hasSceneWrapper(),
            n = g_[r];
        return n
            ? e.jsxs('div', {
                  className: Zl,
                  'data-test-id': 'shop-page',
                  children: [
                      i &&
                          e.jsx('div', {
                              className: e_,
                              children: e.jsx(Ve, { moveSpace: t.moveSpace, onMouseOver3dScene: t.mouseOver3dScene }),
                          }),
                      r !== yc.Error && e.jsx('div', { className: a_ }),
                      e.jsx('div', { className: s_, children: e.jsx(ba, { classNames: h_ }) }),
                      e.jsx(c.div, { className: r_, style: a, children: e.jsx(n, {}) }),
                  ],
              })
            : (console.error('Unreachable code: ShopPage.tsx'), null);
    });
var x_ = ((e) => (
    (e.LOCKED_BY_NO_X_VEHICLES = 'lockedByNoXVehicles'),
    (e.LOCKED_BY_INACTIVE_SEASON = 'lockedByInactiveSeason'),
    (e.LOCKED_BY_PREVIOUS_QUEST = 'lockedByPreviousQuest'),
    (e.ACTIVE = 'active'),
    (e.COMPLETED = 'completed'),
    e
))(x_ || {});
const b_ = [x_.LOCKED_BY_NO_X_VEHICLES, x_.LOCKED_BY_INACTIVE_SEASON, x_.LOCKED_BY_PREVIOUS_QUEST],
    [f_, v_] = w()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    questCards: e.array('questCards'),
                    progressPoints: e.array('progressPoints'),
                },
                s = t(
                    (e) => {
                        const s = e * Ha,
                            t = [...ve(a.questCards.get(), s, s + Ha - 1)];
                        if (t.length !== Ha)
                            throw new Error(`Unexpected weekly list length: ${t.length} expected: ${Ha}`);
                        return t;
                    },
                    { equals: N },
                ),
                r = t(
                    (e, a) => {
                        const t = s(e),
                            r = P(t, a);
                        if (!r) throw new Error(`Unexpected card index: ${a}`);
                        return { ...r };
                    },
                    { equals: N },
                ),
                i = t(
                    (e, a, s) => {
                        const t = r(e, a).rewards;
                        return za({ rewards: t, size: s });
                    },
                    { equals: N },
                ),
                n = t((e, a) => b_.includes(r(e, a).state));
            return {
                ...a,
                computes: { questCardsLength: t((e) => s(e).length), questCard: r, questRewards: i, isQuestLocked: n },
            };
        },
        ({ externalModel: e }) => ({
            animationStart: e.createCallbackNoArgs('onAnimationStart'),
            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
            goToRewardsSelection: e.createCallbackNoArgs('onGoToRewardsSelection'),
        }),
    ),
    S_ = 'CountdownStatus_8bd2c608',
    j_ = 'CountdownStatus_content_ba867330',
    w_ = 'CountdownStatus_shine_11fd24ed',
    N_ = 'CountdownStatus_text_23310da3',
    C_ = 'CountdownStatus_countDownWrapper_772ca654',
    k_ = 'CountdownStatus_countDownIcon_94b471ff',
    P_ = 'CountdownStatus_timer_f5350620',
    R_ = r(({ className: s }) => {
        const { model: t } = v_(),
            { timeToNewQuests: r } = t.root.get();
        return e.jsx('div', {
            className: a(S_, s),
            children: e.jsxs('div', {
                className: j_,
                children: [
                    e.jsx('div', { className: w_ }),
                    -1 === r
                        ? e.jsx('div', {
                              className: N_,
                              children: R.strings.comp7_ext.weeklyQuests.CountdownStatus.done(),
                          })
                        : e.jsx(Q, {
                              text: R.strings.comp7_ext.weeklyQuests.CountdownStatus.active(Ha),
                              binding: {
                                  value: Ha,
                                  countdown: e.jsxs('div', {
                                      className: C_,
                                      children: [
                                          e.jsx('div', { className: k_ }),
                                          e.jsx(He, { icon: Ue.None, duration: r, classNames: { text: P_ } }),
                                      ],
                                  }),
                              },
                              classMix: N_,
                          }),
                ],
            }),
        });
    }),
    I_ = 'Progress_868e8f6f',
    y_ = 'Progress_counter_28173a36',
    A_ = 'Progress_current_89c6d7a7',
    B_ = 'Progress_progressBar_8570680b',
    T_ = ({ current: s, total: t, isDisabled: r, className: i }) =>
        e.jsxs('div', {
            className: a(I_, i),
            children: [
                e.jsx(Q, {
                    classMix: y_,
                    text: R.strings.comp7_ext.weeklyQuests.card.progress.counter(),
                    binding: {
                        current: e.jsx('div', { className: A_, children: e.jsx(x, { value: s }) }),
                        total: e.jsx(x, { value: t }),
                    },
                }),
                e.jsx('div', {
                    className: B_,
                    children: e.jsx(Ca, { size: pe.Small, value: s, maxValue: t, disabled: r }),
                }),
            ],
        }),
    D_ = {
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
    L_ = r(({ weeklyIndex: s, index: t, className: r }) => {
        const { model: i } = v_(),
            { state: n } = i.computes.questCard(s, t),
            o = i.computes.isQuestLocked(s, t);
        return e.jsx(p, {
            isEnabled: o,
            header: R.strings.comp7_ext.weeklyQuests.card.statusLockedTooltip.header(),
            body: String(R.strings.comp7_ext.weeklyQuests.card.statusLockedTooltip.body.$dyn(n)),
            children: e.jsxs('div', {
                className: a(D_.base, o ? D_.base__locked : D_[`base__${n}`], r),
                children: [
                    e.jsx('div', { className: D_.icon }),
                    e.jsx('div', {
                        className: D_.text,
                        children: String(
                            o
                                ? R.strings.comp7_ext.weeklyQuests.card.status.locked()
                                : R.strings.comp7_ext.weeklyQuests.card.status.$dyn(n),
                        ),
                    }),
                ],
            }),
        });
    }),
    E_ = {
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
    z_ = (e) => (b_.includes(e) ? 'locked' : e),
    M_ = r(({ weeklyIndex: s, index: t }) => {
        const { model: r } = v_(),
            { state: i, currentProgress: n, totalProgress: o, description: c, iconKey: d } = r.computes.questCard(s, t),
            { mediaSize: l } = v(),
            _ = l > S.Large ? Ne.Big : Ne.Small;
        return e.jsxs('div', {
            className: a(E_.base, E_[`base__${z_(i)}`]),
            children: [
                i === x_.ACTIVE &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', {
                                className: E_.highlightContainer,
                                children: e.jsx('div', { className: E_.highlight }),
                            }),
                            e.jsx(Na, { className: E_.glowContainer, classNames: { glow: E_.glow } }),
                        ],
                    }),
                e.jsx('div', {
                    className: E_.icon,
                    style: { backgroundImage: `url(R.images.comp7.gui.maps.icons.weekly_quests.${d})` },
                }),
                e.jsxs('div', {
                    className: E_.content,
                    children: [
                        e.jsx(T_, { current: n, total: o, isDisabled: i !== x_.ACTIVE, className: E_.progress }),
                        e.jsx('div', { className: E_.description, children: c }),
                        e.jsx(Ce, { data: r.computes.questRewards(s, t, _), size: _, rewardItemClassMix: E_.reward }),
                    ],
                }),
                e.jsx(L_, { weeklyIndex: s, index: t, className: E_.status }),
            ],
        });
    }),
    W_ = {
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
var V_ = ((e) => (
    (e.Normal = 'normal'),
    (e.Highlighted = 'highlighted'),
    (e.SideLeft = 'sideLeft'),
    (e.SideRight = 'sideRight'),
    e
))(V_ || {});
const H_ = ({ type: s }) =>
        'sideLeft' === s || 'sideRight' === s
            ? e.jsx('div', {
                  className: W_.line,
                  children: e.jsx('div', { className: a(W_.shine, W_[`shine__${s}`]) }),
              })
            : e.jsxs('div', {
                  className: a(W_.base, W_[`base__${s}`]),
                  children: [
                      e.jsx('div', { className: a(W_.line, W_.line__top) }),
                      e.jsx('div', { className: W_.arrowContainer, children: e.jsx('div', { className: W_.arrow }) }),
                      e.jsx('div', { className: a(W_.line, W_.line__bottom) }),
                  ],
              }),
    U_ = 'WeeklyList_6acdc358',
    Q_ = r(({ weeklyIndex: t, className: r }) => {
        const { model: i } = v_(),
            { computes: n } = i;
        return e.jsxs('div', {
            className: a(U_, r),
            children: [
                e.jsx(H_, { type: V_.SideLeft }),
                T(Ha, (a) =>
                    e.jsxs(
                        s.Fragment,
                        {
                            children: [
                                a > 0 && e.jsx(H_, { type: n.isQuestLocked(t, a) ? V_.Normal : V_.Highlighted }),
                                e.jsx(M_, { weeklyIndex: t, index: a }),
                            ],
                        },
                        a,
                    ),
                ),
                e.jsx(H_, { type: V_.SideRight }),
            ],
        });
    }),
    $_ = 'QuestsList_f1b4ae36',
    q_ = 'QuestsList_scrollWrapper_f3107796',
    O_ = 'QuestsList_weeklyList_832ee756',
    F_ = 'QuestsList_countdownStatus_b8e9a999',
    Y_ = 'QuestsList_countdownStatus__show_80949577',
    G_ = { wrapper: 'QuestsList_contentWrapper_d60860bf', content: 'QuestsList_scrollContent_c8f7fb3d' },
    X_ = r(({ className: t }) => {
        const [r, i] = s.useState(!1),
            { model: n } = v_(),
            o = Math.floor(n.questCards.get().length / Ha),
            c = o > 1,
            { api: d } = Se();
        return (
            je(d, d.settings.animationConfig),
            s.useEffect(() => {
                const e = () => {
                    const [, e] = d.getBounds();
                    i(e - d.animationScroll.scrollPosition.get() < 20);
                };
                return (
                    d.events.on('change', e),
                    d.events.on('resizeHandled', e),
                    d.events.on('recalculateContent', e),
                    () => {
                        (d.events.off('change', e),
                            d.events.off('resizeHandled', e),
                            d.events.off('recalculateContent', e));
                    }
                );
            }, [d]),
            e.jsxs('div', {
                className: a($_, t),
                children: [
                    e.jsx(se, {
                        className: q_,
                        classNames: G_,
                        children: T(o, (a) => e.jsx(Q_, { weeklyIndex: a, className: O_ }, a)),
                    }),
                    e.jsx('div', { className: a(F_, (r || !c) && Y_), children: e.jsx(R_, {}) }),
                ],
            })
        );
    }),
    K_ = 'ClaimRewardsButton_18e5447e',
    J_ = 'ClaimRewardsButton_light_be50b778',
    Z_ = 'ClaimRewardsButton_inner_7b993d26',
    em = 'ClaimRewardsButton_inner__disabled_d2c4d3fe',
    am = 'ClaimRewardsButton_button_878a517b',
    sm = 'ClaimRewardsButton_button__disabled_47a644a1',
    tm = 'ClaimRewardsButton_buttonBlink_6b3105f0',
    rm = 'ClaimRewardsButton_buttonText_c765bc66',
    im = { from: { opacity: 0 }, to: { opacity: 0.6 }, delay: 500, config: { duration: 300 } },
    nm = ({ isDisabled: s, onClick: t, children: r, className: i }) => {
        const n = o(im);
        return e.jsx(p, {
            isEnabled: s,
            body: R.strings.comp7_ext.claimRewards.rewardsUnavailable(),
            children: e.jsxs('div', {
                className: a(K_, i),
                children: [
                    !s && e.jsx(c.div, { className: J_, style: n }),
                    e.jsx('div', {
                        className: a(Z_, s && em),
                        children: e.jsxs(Qe, {
                            type: qe.ghost,
                            size: $e.small,
                            disabled: s,
                            onClick: t,
                            mixClass: a(am, s && sm),
                            children: [
                                !s && e.jsx('div', { className: tm }),
                                e.jsx('div', {
                                    className: rm,
                                    children: r || R.strings.comp7_ext.claimRewards.button(),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    },
    om = {
        base: 'AnimatedReward_4c41ec42',
        claimRewardsButton: 'AnimatedReward_claimRewardsButton_ce13cc98',
        shine: 'AnimatedReward_shine_8034dda6',
    },
    cm = {
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 600,
        config: { duration: 300 },
        onStart: () => {
            b.sound(R.sounds.bp_pick_up_award());
        },
    },
    dm = ({ reward: s, onClick: t, isDisabled: r, className: i }) => {
        const n = o(cm);
        return e.jsxs('div', {
            className: a(om.base, i),
            children: [
                e.jsx(c.div, { className: om.shine, style: n }),
                e.jsx('div', { className: om.claimRewardsButton, children: e.jsx(nm, { isDisabled: r, onClick: t }) }),
                e.jsx(Pe, { ...s, className: om.reward }),
            ],
        });
    },
    lm = 'FinalRewards_9a8bf88c',
    _m = 'FinalRewards_wrapper_170e19ff',
    mm = 'FinalRewards_reward_21094ad5',
    um = 'FinalRewards_reward__achieved_4f37d4ba',
    hm = 'FinalRewards_check_e0f8cdc4',
    gm = r(({ rewards: s, className: t }) => {
        const { model: r, controls: i } = v_(),
            { choiceRewardState: n } = r.root.get(),
            { model: o } = ns(),
            { isDisabled: c } = o.claimRewardsModel.get();
        return e.jsxs('div', {
            className: a(lm, t),
            children: [
                C(s, (s, t) =>
                    e.jsx(
                        'div',
                        {
                            className: _m,
                            children:
                                'deluxe_gift' === s.name && n === Ua.Active
                                    ? e.jsx(dm, {
                                          reward: s,
                                          onClick: i.goToRewardsSelection,
                                          isDisabled: c,
                                          className: mm,
                                      })
                                    : e.jsx(Pe, { ...s, className: a(mm, n === Ua.Claimed && um) }),
                        },
                        t,
                    ),
                ),
                n === Ua.Claimed && e.jsx('div', { className: hm }),
            ],
        });
    }),
    pm = 'TokenPoint_b2c16526',
    xm = 'TokenPoint_tokenValue_9a7b3b15',
    bm = 'TokenPoint_tokenValue__passed_90164b9e',
    fm = 'TokenPoint_serif_397af316',
    vm = 'TokenPoint_rewards_b91973cd',
    Sm = 'TokenPoint_rewards__passed_f41dfa43',
    jm = 'TokenPoint_reward_a1f93701',
    wm = 'TokenPoint_check_df0c82c9',
    Nm = Ne.Small,
    Cm = r(({ tokenValue: s, rewards: t }) => {
        const { model: r } = v_(),
            { questsPassed: i } = r.root.get(),
            n = i > 0 && i >= s;
        return e.jsxs('div', {
            className: pm,
            children: [
                e.jsx('div', { className: a(xm, n && bm), children: s }),
                e.jsx('div', { className: fm }),
                t &&
                    e.jsx(Ce, {
                        data: za({ rewards: t, size: Nm }),
                        size: Nm,
                        classMix: a(vm, n && Sm),
                        rewardItemClassMix: jm,
                    }),
                n && 0 !== s && t && e.jsx('div', { className: wm }),
            ],
        });
    }),
    km = 'TokenProgress_6a6dc31c',
    Pm = 'TokenProgress_header_13e02096',
    Rm = 'TokenProgress_subheader_aafe2591',
    Im = 'TokenProgress_content_d23c6c0c',
    ym = 'TokenProgress_progress_fae098e6',
    Am = 'TokenProgress_progressBar_8b59b672',
    Bm = 'TokenProgress_points_984654f1',
    Tm = 'TokenProgress_point_b0b7f70e',
    Dm = 'TokenProgress_finalRewards_9e9ca6b',
    Lm = (e, a) => ({ left: (100 / e) * a + '%' }),
    Em = Ne.Big,
    zm = r(({ className: t }) => {
        const { model: r, controls: i } = v_(),
            { previousQuestsPassed: n, questsPassed: o } = r.root.get(),
            c = r.progressPoints.get(),
            d = P(c, c.length - 1),
            l = (null == d ? void 0 : d.count) ?? 0,
            _ = s.useRef(ue.Idle);
        return e.jsxs('div', {
            className: a(km, t),
            children: [
                e.jsx(H, {
                    text: R.strings.comp7_ext.weeklyQuests.TokenProgress.header(),
                    binding: { passed: o, total: l },
                    classMix: Pm,
                }),
                e.jsx(Q, {
                    text: R.strings.comp7_ext.weeklyQuests.TokenProgress.subheader(Ha),
                    binding: { value: Ha },
                    classMix: Rm,
                }),
                e.jsxs('div', {
                    className: Im,
                    children: [
                        e.jsxs('div', {
                            className: ym,
                            children: [
                                e.jsx('div', {
                                    className: Am,
                                    children: e.jsx(Ca, {
                                        value: o,
                                        maxValue: l,
                                        deltaFrom: n,
                                        onChangeAnimationState: (e) => {
                                            ((_.current = e), e === ue.Shrink && i.animationStart());
                                        },
                                        onEndAnimation: i.animationEnd,
                                    }),
                                }),
                                e.jsxs('div', {
                                    className: Bm,
                                    children: [
                                        e.jsx('div', { className: Tm, children: e.jsx(Cm, { tokenValue: 0 }) }),
                                        C(c, (a, s) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: Tm,
                                                    style: Lm(l, a.count),
                                                    children: e.jsx(Cm, {
                                                        tokenValue: a.count,
                                                        rewards: s === c.length - 1 ? void 0 : a.rewards,
                                                    }),
                                                },
                                                s,
                                            ),
                                        ),
                                    ],
                                }),
                            ],
                        }),
                        d && e.jsx(gm, { rewards: za({ rewards: d.rewards, size: Em }), className: Dm }),
                    ],
                }),
            ],
        });
    }),
    Mm = 'WeeklyQuestsPage_e1246e87',
    Wm = 'WeeklyQuestsPage_content_968b1834',
    Vm = 'WeeklyQuestsPage_questsList_d039410f',
    Hm = 'WeeklyQuestsPage_progression_ad79fcdc',
    Um = () => {
        const a = o(ca),
            s = ee();
        return e.jsxs('div', {
            className: Mm,
            'data-test-id': 'weekly-quests-page',
            children: [
                e.jsx(ba, {}),
                e.jsxs(c.div, {
                    className: Wm,
                    style: a,
                    children: [
                        e.jsx(ae, { api: s, children: e.jsx(X_, { className: Vm }) }),
                        e.jsx(zm, { className: Hm }),
                    ],
                }),
            ],
        });
    },
    Qm = {
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
    $m = [Qm.firstStage, Qm.secondStage, Qm.thirdStage, Qm.fourthStage, Qm.fifthStage, Qm.sixthStage],
    qm = $m.map((e) => e.name),
    Om = s.createContext(null),
    Fm = () => {
        const e = s.useContext(Om);
        if (null === e)
            throw new Error(
                'useAnimationApi was called in component, which is not wrapped in YearlyRewardsPageAnimationContext',
            );
        return e;
    },
    Ym = Qa({
        steps: [
            Qm.inactiveProgression,
            Qm.firstStageSeasonPoints,
            Qm.firstStage,
            Qm.secondStageSeasonPoints,
            Qm.secondStage,
            Qm.thirdStageSeasonPoints,
            Qm.thirdStage,
            Qm.fourthStageSeasonPoints,
            Qm.fourthStage,
            Qm.fifthStageSeasonPoints,
            Qm.fifthStage,
            Qm.sixthStageSeasonPoints,
            Qm.sixthStage,
            Qm.showLegend,
            Qm.transitionToRealData,
            Qm.realData,
        ],
    }),
    Gm = ({ children: a }) => {
        const s = Ym();
        return e.jsx(Om.Provider, { value: s, children: a });
    };
var Xm = ((e) => (
        (e.Guaranteed = 'guaranteed'),
        (e.Possible = 'possible'),
        (e.NotAvailable = 'notAvailable'),
        (e.Claimed = 'claimed'),
        e
    ))(Xm || {}),
    Km = ((e) => (
        (e.Default = 'default'),
        (e.NotAccruedRewards = 'notAccruedRewards'),
        (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
        (e.RewardsReceived = 'rewardsReceived'),
        e
    ))(Km || {});
const Jm = ['customizations', 'modernized_devices_t1_gift', 'modernized_devices_t2_gift', 'modernized_devices_t3_gift'],
    Zm = ['vehicles', 'premiumTank'],
    eu = ['styleProgressToken'],
    au = ['modernized_devices_t1_gift', 'modernized_devices_t2_gift', 'modernized_devices_t3_gift', 'deluxe_gift'];
const su = (e) => Jm.includes(e.name),
    tu = (e) => Zm.includes(e.name),
    ru = (e) => au.includes(e.name);
function iu(e) {
    return X(
        e,
        (e, a, s) => (
            void 0 === e.vehicleIndex && tu(a)
                ? (e.vehicleIndex = s)
                : void 0 === e.style3dIndex && ((e) => eu.includes(e.name))(a)
                  ? (e.style3dIndex = s)
                  : void 0 === e.claimableRewardIndex && ru(a) && (e.claimableRewardIndex = s),
            e
        ),
        { vehicleIndex: void 0, style3dIndex: void 0, claimableRewardIndex: void 0 },
    );
}
function nu({ reward: e, bannerState: a, cardIndex: s, maxAchievedCardIndex: t }) {
    return a === Km.RewardsSelectionAvailable && s <= t && ru(e) && !e.claimed;
}
const [ou, cu] = w()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    cards: e.array('cards'),
                    ranks: e.array('ranks'),
                    hoveredCardIndex: d.box(-1),
                },
                s = t(
                    (e) => {
                        const s = P(a.cards.get(), e);
                        if (!s) throw new Error(`card with index ${e} was not found`);
                        const { rewardsState: t } = s;
                        return { rewardsState: t };
                    },
                    { equals: i.shallow },
                ),
                r = t(
                    (e) => {
                        const s = P(a.cards.get(), e);
                        if (!s) throw new Error(`rewards: card with index ${e} was not found`);
                        return C(s.rewards, (e) => ({ ...e }));
                    },
                    { equals: N },
                ),
                n = t(
                    (e) => {
                        const s = P(a.cards.get(), e);
                        if (!s) throw new Error(`card with index ${e} was not found`);
                        return C(s.seasonPoints, (e) => ({ ...e }));
                    },
                    { equals: N },
                ),
                o = t(
                    (e, a) => {
                        const s = n(e);
                        if (!s) throw new Error(`season points array with card index ${e} was not found`);
                        const t = P(s, a);
                        if (!t) throw new Error(`season point with index ${a} in card with index ${e} was not found`);
                        return t;
                    },
                    { equals: N },
                ),
                c = t((e) => [...ve(a.cards.get(), 0, e)].reduce((e, a) => (e += a.seasonPoints.length), 0)),
                l = t((e) =>
                    X(
                        a.cards.get(),
                        (a, s) =>
                            a +
                            (function (e, a) {
                                return Oe(e, ({ season: e }) => e === a).length;
                            })(s.seasonPoints, e),
                        0,
                    ),
                ),
                _ = t(
                    () => {
                        const e = a.cards.get();
                        return {
                            possible: Ge(e, (e) => e.rewardsState === Xm.Possible),
                            guaranteed: Ge(e, (e) => e.rewardsState === Xm.Guaranteed),
                        };
                    },
                    { equals: i.shallow },
                ),
                m = t(
                    () => {
                        const e = (function (e, a) {
                            for (let s = 0; s < e.length; s++) {
                                const t = Fe(e, s),
                                    r = Y(t.rewards, a);
                                if (r) return r;
                            }
                        })(a.cards.get(), tu);
                        if (!e) throw new Error('no one card consists vehicle, please change config with rewards');
                        return { ...e };
                    },
                    { equals: N },
                ),
                u = t(
                    () => {
                        const e = Y(a.cards.get(), (e) => void 0 !== Y(e.rewards, tu));
                        if (!e) throw new Error('no one card consists vehicle, please change config with rewards');
                        return { ...e.vehicle };
                    },
                    { equals: N },
                ),
                h = t(() => {
                    const { possible: e, guaranteed: s } = _();
                    return (function ({ maxIndex: e, possible: a, guaranteed: s }) {
                        return void 0 !== a ? Ye(0, e, a + 1) : void 0 !== s ? Ye(0, e, s + 1) : 0;
                    })({ maxIndex: a.cards.get().length - 1, possible: e, guaranteed: s });
                }),
                g = t(() => {
                    const e = a.cards.get();
                    return Ge(e, (e) => !Xe(e.seasonPoints, (e) => e.state === na.NotAchieved)) ?? -1;
                }),
                p = t((e) => Y(r(e), su), { equals: N }),
                x = t((e) => {
                    const s = p(e);
                    if (!s) return !1;
                    const t = g(),
                        { bannerState: r } = a.root.get();
                    return nu({ reward: s, bannerState: r, cardIndex: e, maxAchievedCardIndex: t });
                }),
                b = t((e) => {
                    const s = P(a.ranks.get(), e);
                    if (!s) throw new Error(`rank with index ${e} was not found`);
                    return { ...s };
                }),
                f = t((e) => {
                    const a = C(b(e).divisions, (e) => ({ ...e }));
                    return Et(a);
                }),
                v = t((e) => {
                    const a = r(e),
                        s = F(a, su);
                    return void 0 === s ? a : Oe(a, (e, a) => a !== s);
                }),
                S = t(
                    (e) => {
                        const s = v(e),
                            { vehicleIndex: t, style3dIndex: r, claimableRewardIndex: i } = iu(s);
                        return {
                            hasStyle3d: void 0 !== r,
                            showClaimableReward:
                                void 0 !== i &&
                                nu({
                                    reward: s[i],
                                    bannerState: a.root.get().bannerState,
                                    cardIndex: e,
                                    maxAchievedCardIndex: g(),
                                }),
                            showPlus: void 0 !== t && void 0 !== r && r - t == 1 && t % 2 == 0,
                            vehicleIndex: t,
                            style3dIndex: r,
                            claimableRewardIndex: i,
                        };
                    },
                    { equals: i.shallow },
                ),
                j = t(() => {
                    const { bannerState: e } = a.root.get();
                    if (e !== Km.RewardsSelectionAvailable) return !1;
                    const s = g();
                    return Xe(a.cards.get(), (a, t) =>
                        Xe(a.rewards, (a) => nu({ reward: a, bannerState: e, cardIndex: t, maxAchievedCardIndex: s })),
                    );
                }),
                w = t(() => {
                    const e = a.root.get().currentRank,
                        s = F(a.ranks.get(), (a) => a.rank === e);
                    if (void 0 === s)
                        throw new Error(
                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                        );
                    return s;
                }),
                k = t((e) => !a.root.get().isQualificationActive && e <= w());
            return {
                ...a,
                computes: {
                    card: s,
                    seasonPoint: o,
                    mainReward: p,
                    shouldShowAsClaimableMainReward: x,
                    hasAnyClaimableReward: j,
                    additionalRewards: v,
                    additionalRewardsConfig: S,
                    activeCardIndex: h,
                    maxAchievedCardIndex: g,
                    currentSeasonPointsCount: l,
                    seasonPointsTotalByIndex: c,
                    seasonPointsLength: t((e) => n(e).length),
                    isActiveLegendItem: k,
                    vehicleReward: m,
                    vehicle: u,
                    rankItem: b,
                    divisions: f,
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
    du = {
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
    lu = r(({ className: s }) => {
        const { model: t } = cu(),
            { model: r } = aa(),
            { withIntro: i } = t.root.get(),
            n = t.hoveredCardIndex.get(),
            o = r.year.state.get() === Jo.Finished,
            c = t.computes.maxAchievedCardIndex(),
            d = t.cards.get().length - 1;
        return e.jsxs('div', {
            className: a(
                du.base,
                i && du.base__withIntro,
                du[`base__hoveredCardIndex_${n}`],
                o && du.base__finishedYear,
                s,
            ),
            children: [
                T(d, (s) =>
                    e.jsx(
                        'div',
                        { className: a(du.overlay, du[`overlay__${qm[s]}`], o && s === c && du.overlay__achieved) },
                        s,
                    ),
                ),
                e.jsx('div', { className: a(du.overlay, du.overlay__full, o && d === c && du.overlay__achieved) }),
            ],
        });
    }),
    _u = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 600, config: { duration: 300 } },
    mu = ca.delay + ca.config.duration + 500,
    uu = 'ActiveCardHighlight_16b6f82b',
    hu = 'ActiveCardHighlight_glow_423a69f4',
    gu = ({ isAnimated: s, visible: t, hasDelay: r, className: i }) => {
        const n = o({ from: { opacity: 0 }, to: { opacity: t ? 1 : 0 }, delay: r ? mu : 0, config: { duration: 300 } });
        return e.jsx(c.div, { className: a(uu, i), style: n, children: e.jsx(Na, { className: hu, animated: s }) });
    },
    pu = 'AdditionalRewards_rewardItem_ee31ff1d',
    xu = 'AdditionalRewards_reward_3c5d7930',
    bu = 'AdditionalRewards_reward__withPlus_309d3136',
    fu = 'AdditionalRewards_reward__claimable_1ed2adc5',
    vu = 'AdditionalRewards_info_fcdb5694',
    Su = 'AdditionalRewards_rewardWithPlusImage_275019e0',
    ju = 'AdditionalRewards_claimableReward_c7f66cac',
    wu = 'AdditionalRewards_shine_982567ad',
    Nu = 'AdditionalRewards_claimRewardsButton_5eb60b4d',
    Cu = ({ onClick: a, children: s }) => {
        const t = o(_u);
        return e.jsxs('div', {
            className: ju,
            children: [
                e.jsx(c.div, { className: wu, style: t }),
                s,
                e.jsx('div', {
                    className: Nu,
                    children: e.jsx(nm, {
                        isDisabled: !1,
                        onClick: a,
                        children: R.strings.comp7_ext.yearlyRewards.claim(),
                    }),
                }),
            ],
        });
    },
    ku = Ne.Small,
    Pu = xu,
    Ru = { info: vu },
    Iu = r(({ cardIndex: t, visibleRewardsCount: r, className: i, rewardItemClassMix: n }) => {
        const { model: o, controls: c } = cu(),
            d = o.computes.additionalRewards(t),
            l = o.computes.additionalRewardsConfig(t),
            _ = s.useCallback((e, a) => () => c.goToRewardsSelection(e, a), [c]),
            m = s.useMemo(
                () =>
                    C(d, (e, s) => {
                        const i = l.showPlus && s === l.vehicleIndex && r >= 3,
                            n = l.showClaimableReward && s === l.claimableRewardIndex;
                        return {
                            ...Ea({ reward: e, size: ku, index: t }),
                            className: a(Pu, n && fu, i && bu),
                            classNames: { ...Ru, ...(i && { image: Su }) },
                            ...(n && { RewardWrapper: Cu, rewardWrapperProps: { onClick: _(e.name, t) } }),
                        };
                    }),
                [d, l.claimableRewardIndex, l.showClaimableReward, l.showPlus, l.vehicleIndex, t, _, r],
            );
        return e.jsx(Ce, {
            data: m,
            size: ku,
            count: Oo(d.length, r),
            rewardItemClassMix: a(pu, n),
            boxRewardTooltip: {
                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                args: { fromIndex: r, index: t },
            },
            classMix: i,
            boxRewardClassName: Pu,
            boxRewardClassNames: Ru,
        });
    }),
    yu = r(({ cardIndex: a, pointIndex: s, size: t, className: r, classNames: i }) => {
        const { model: n } = cu(),
            o = n.computes.seasonPoint(a, s);
        return e.jsx(V, {
            contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
            args: { state: o.state },
            ignoreShowDelay: !0,
            children: e.jsx('div', {
                className: r,
                children: e.jsx($a, { ...o, className: null == i ? void 0 : i.point, size: t }),
            }),
        });
    }),
    Au = 'CardSeasonPoints_654279b7',
    Bu = r(({ cardIndex: s, size: t, className: r, classNames: i }) => {
        const { model: n } = cu();
        return e.jsx('div', {
            className: a(Au, r),
            children: T(n.computes.seasonPointsLength(s), (a) =>
                e.jsx(
                    yu,
                    {
                        cardIndex: s,
                        pointIndex: a,
                        size: t,
                        className: null == i ? void 0 : i.pointWrapper,
                        classNames: { point: null == i ? void 0 : i.point },
                    },
                    a,
                ),
            ),
        });
    }),
    Tu = [
        [{ season: oa.First }, { season: oa.First }, { season: oa.First }],
        [{ season: oa.First }, { season: oa.First }, { season: oa.First }],
        [{ season: oa.Second }, { season: oa.Second }, { season: oa.Second }],
        [{ season: oa.Second }, { season: oa.Second }, { season: oa.Second }],
        [{ season: oa.Third }, { season: oa.Third }, { season: oa.Third }],
        [{ season: oa.Third }, { season: oa.Third }, { season: oa.Third }],
    ],
    Du = {
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
    Lu = ['first', 'second', 'third'],
    Eu = ({ cardIndex: s, size: t, className: r, classNames: i }) => {
        const n = Tu[s];
        return e.jsxs('div', {
            className: a(Du.base, Du[`base__${qm[s]}`], r),
            children: [
                e.jsx('div', {
                    className: Du.notAchievedSeasonPoints,
                    children: n.map(({ season: s }, r) =>
                        e.jsx(
                            'div',
                            {
                                className: null == i ? void 0 : i.pointWrapper,
                                children: e.jsx($a, {
                                    state: na.NotAchieved,
                                    season: s,
                                    size: t,
                                    className: a(
                                        Du.notAchievedPoint,
                                        Du[`notAchievedPoint__${Lu[r]}`],
                                        null == i ? void 0 : i.point,
                                    ),
                                }),
                            },
                            r,
                        ),
                    ),
                }),
                e.jsx('div', {
                    className: Du.achievedSeasonPoints,
                    children: n.map(({ season: s }, r) =>
                        e.jsx(
                            'div',
                            {
                                className: null == i ? void 0 : i.pointWrapper,
                                children: e.jsx($a, {
                                    state: na.Achieved,
                                    season: s,
                                    size: t,
                                    className: a(
                                        Du.achievedPoint,
                                        Du[`achievedPoint__${Lu[r]}`],
                                        null == i ? void 0 : i.point,
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
    zu = r(({ cardIndex: a, size: s, className: t, classNames: r }) => {
        const { model: i } = cu(),
            n = i.computes.mainReward(a);
        if (!n) throw new Error(`no mainReward in card with index ${a}`);
        return e.jsx(Pe, {
            ...Ea({ reward: n, size: s, index: a }),
            className: t,
            classNames: { rewardIcon: null == r ? void 0 : r.icon, image: null == r ? void 0 : r.iconContainer },
        });
    }),
    Mu = {
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
    Wu = ({ seasonPointsCount: s, rewardsState: t, className: r }) =>
        e.jsx('div', {
            className: a(Mu.base, Mu[`base__${t}`], r),
            children: e.jsx(p, {
                body: `${R.strings.comp7_ext.yearlyRewards.rewardsState.tooltip.$dyn(t)}`,
                isEnabled: t !== Xm.Claimed,
                children: e.jsxs('div', {
                    className: Mu.description,
                    children: [
                        t === Xm.NotAvailable && e.jsx('div', { className: Mu.shadow }),
                        e.jsx('div', { className: Mu.statusIcon }),
                        U(`${R.strings.comp7_ext.yearlyRewards.rewardsState.$dyn(t)}`, { count: s }),
                    ],
                }),
            }),
        }),
    Vu = r(({ index: a, className: s, classNames: t }) => {
        const { mediaSize: r } = v(),
            { model: i, controls: n } = cu(),
            o = i.computes.mainReward(a),
            c = i.computes.vehicle(),
            d = r >= S.Large;
        return o && 'customizations' === o.name
            ? e.jsx('div', {
                  className: s,
                  children: e.jsx(Re, {
                      type: 'preview',
                      onClick: () => n.goToStylePreview(a),
                      isVisibleLabel: d,
                      className: null == t ? void 0 : t.preview,
                      classNames: { label: null == t ? void 0 : t.label },
                      children: d ? R.strings.comp7_ext.yearlyRewards.preview.style2d() : '',
                  }),
              })
            : i.computes.additionalRewardsConfig(a).hasStyle3d
              ? e.jsx('div', {
                    className: s,
                    children: e.jsx(Re, {
                        type: 'preview',
                        onClick: () => n.goToVehiclePreview(c.vehicleCD, a),
                        isVisibleLabel: d,
                        className: null == t ? void 0 : t.preview,
                        classNames: { label: null == t ? void 0 : t.label },
                        children: d ? R.strings.comp7_ext.yearlyRewards.preview.style3d() : '',
                    }),
                })
              : null;
    }),
    Hu = {
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
    Uu = { preview: Hu.preview, label: Hu.previewLabel },
    Qu = { pointWrapper: Hu.seasonPointWrapper },
    $u = r(
        ({
            index: t,
            mainRewardSize: r,
            seasonPointSize: i,
            visibleAdditionalRewardsCount: n,
            hasHighlightDelay: d,
            highlightVisible: l,
            className: _,
        }) => {
            const { mediaSize: m } = v(),
                { model: u, controls: h } = cu(),
                { model: g } = aa(),
                p = g.year.state.get(),
                { withIntro: x } = u.root.get(),
                { rewardsState: f } = u.computes.card(t),
                j = u.computes.mainReward(t),
                w = u.computes.seasonPointsTotalByIndex(t),
                N = u.computes.activeCardIndex(),
                C = u.computes.maxAchievedCardIndex(),
                k = u.hoveredCardIndex.get(),
                P = u.computes.shouldShowAsClaimableMainReward(t),
                I = o(_u),
                y = t === u.cards.get().length - 1,
                A = (({ index: e, hoveredCardIndex: a, maxAchievedCardIndex: s, withIntro: t, yearState: r }) =>
                    t || -1 !== a ? e > a : r === Jo.Finished && e > s)({
                    withIntro: x,
                    hoveredCardIndex: k,
                    maxAchievedCardIndex: C,
                    index: t,
                    yearState: p,
                }),
                B = !x && p !== Jo.Finished && t === N;
            return (
                s.useEffect(() => {
                    t === k && b.sound('comp_7_annual_reward_column');
                }, [k, t]),
                e.jsxs('div', {
                    className: a(Hu.base, A && 'grayscaledColumn', x && Hu.base__withIntro, _),
                    onMouseEnter: () => h.setHoveredCardIndex(t),
                    onMouseLeave: () => h.setHoveredCardIndex(-1),
                    children: [
                        e.jsx('div', { className: a(Hu.hoverArea, y && Hu.hoverArea__last) }),
                        e.jsxs('div', {
                            className: Hu.fakeSeasonPointsContainer,
                            children: [
                                e.jsx(Eu, { cardIndex: t, size: i, classNames: Qu }),
                                !y && e.jsx(Vd, { className: a(Hu.divider, t <= k && Hu.divider__highlighted) }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: Hu.seasonPointsContainer,
                            children: [
                                e.jsx(Bu, { cardIndex: t, size: i, classNames: Qu }),
                                !y && e.jsx(Vd, { className: a(Hu.divider, t < N && Hu.divider__highlighted) }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: Hu.mainRewardOuterContainer,
                            children: [
                                P && e.jsx(c.div, { className: Hu.shine, style: I }),
                                e.jsx('div', {
                                    className: a(Hu.mainRewardContainer, Hu[`mainRewardContainer__${r}`]),
                                    children:
                                        j &&
                                        e.jsx(zu, {
                                            cardIndex: t,
                                            size: r,
                                            className: a(Hu.mainReward, P && Hu.mainReward__claimable),
                                        }),
                                }),
                                j &&
                                    P &&
                                    e.jsx('div', {
                                        className: Hu.claimRewardsButton,
                                        children: e.jsx(nm, {
                                            isDisabled: !1,
                                            onClick: () => h.goToRewardsSelection(j.name, t),
                                            children:
                                                m >= S.Medium
                                                    ? R.strings.comp7_ext.yearlyRewards.claimReward()
                                                    : R.strings.comp7_ext.yearlyRewards.claim(),
                                        }),
                                    }),
                            ],
                        }),
                        e.jsx(Vu, { index: t, className: Hu.previewContainer, classNames: Uu }),
                        e.jsx(Wu, { seasonPointsCount: w, rewardsState: f, className: Hu.rewardsStatus }),
                        e.jsx(Iu, { cardIndex: t, visibleRewardsCount: n, className: Hu.additionalRewards }),
                        e.jsxs('div', {
                            className: a(Hu.description, B && Hu.description__visible),
                            children: [
                                e.jsx(gu, { hasDelay: d, visible: l, isAnimated: B, className: Hu.glowContainer }),
                                R.strings.comp7_ext.yearlyRewards.stageDescription.active(),
                            ],
                        }),
                    ],
                })
            );
        },
    ),
    qu = 'Columns_e3ccf77b',
    Ou = r(({ className: t }) => {
        const { mediaSize: r } = v(),
            { model: i } = cu(),
            { model: n } = aa(),
            d = i.computes.hasAnyClaimableReward(),
            { withIntro: l } = i.root.get(),
            _ = n.year.state.get(),
            m = Fm(),
            u = ((e) => (e >= S.Large ? Ne.S296x222 : e >= S.Small ? Ne.S232x174 : Ne.Big))(r),
            h = ((e) => (e >= S.Medium ? 5 : 2))(r),
            g = ((e) => (e >= S.ExtraLarge ? qa.x32 : qa.x24))(r),
            p = o(ca),
            [x, f] = (({ api: e, withIntro: a, yearState: t }) => {
                const [r, i] = s.useState(!1),
                    n = Z(),
                    o = !a && n;
                return (
                    ce(() => {
                        if (a && t !== Jo.Finished) {
                            const a = () => {
                                i(!0);
                            };
                            return (
                                e.events.on('end', a),
                                () => {
                                    e.events.off('end', a);
                                }
                            );
                        }
                    }),
                    ce(() => {
                        if (o && t !== Jo.Finished)
                            return de(() => {
                                i(!0);
                            }, mu);
                    }),
                    s.useEffect(() => {
                        r && b.sound(R.sounds.comp_7_ranks_shine());
                    }, [r]),
                    [o, r]
                );
            })({ api: m, withIntro: l, yearState: _ });
        return (
            s.useEffect(() => {
                if (d)
                    return de(() => {
                        b.sound(R.sounds.bp_pick_up_award());
                    }, 600);
            }, [d]),
            e.jsx(c.div, {
                className: a(qu, t),
                style: p,
                children: T(i.cards.get().length, (a) =>
                    e.jsx(
                        $u,
                        {
                            index: a,
                            mainRewardSize: u,
                            seasonPointSize: g,
                            hasHighlightDelay: x,
                            highlightVisible: f,
                            visibleAdditionalRewardsCount: h,
                        },
                        a,
                    ),
                ),
            })
        );
    }),
    Fu = (e) => (e >= S.Large ? qa.x32 : qa.x24),
    Yu = {
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
    Gu = r(({ index: s, size: t, seasonName: r, className: i }) => {
        const { model: n } = cu(),
            { currentRank: o, topPercentage: c, withIntro: d } = n.root.get(),
            l = n.computes.isActiveLegendItem(s),
            _ = n.computes.rankItem(s);
        return e.jsx(
            'div',
            {
                className: i,
                children: e.jsxs('div', {
                    className: a(Yu.rankWrapper, d && Yu.rankWrapper__withIntro),
                    children: [
                        _.rank === o &&
                            e.jsx(ke, {
                                className: Yu.highlight,
                                src: String(R.videos.comp7.godRaysNew_130x130()),
                                autoplay: !0,
                                loop: !0,
                            }),
                        e.jsx(ht, {
                            rank: _.rank,
                            from: _.from,
                            to: _.to,
                            topPercentage: c,
                            divisions: n.computes.divisions(s),
                            className: Yu.tooltipArea,
                            ignoreShowDelay: !0,
                            children: e.jsx(la, {
                                seasonName: r,
                                rank: _.rank,
                                size: t,
                                className: a(Yu.rankEmblem, l && Yu.rankEmblem__active),
                            }),
                        }),
                    ],
                }),
            },
            s,
        );
    }),
    Xu = 'possible',
    Ku = { state: Xu, ignoreState: !0 },
    Ju = r(({ className: s }) => {
        const { mediaSize: t } = v(),
            { model: r } = cu(),
            { model: i } = aa(),
            { currentRank: n, isQualificationActive: o, withIntro: c } = r.root.get(),
            d = i.season.name.get(),
            l = i.year.state.get(),
            _ = r.computes.currentSeasonPointsCount(i.season.name.get()),
            m = ((e) => {
                switch (e) {
                    case Jo.Active:
                        return {
                            rank: R.strings.comp7_ext.yearlyRewards.rank.current(),
                            description: R.strings.comp7_ext.yearlyRewards.description.current(),
                        };
                    case Jo.OffSeason:
                    case Jo.Finished:
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
            u = ((e) => (e >= S.Large ? _a.x64 : _a.x48))(t);
        return e.jsxs('div', {
            className: a(Yu.base, c && Yu.base__withIntro, s),
            children: [
                e.jsxs('div', {
                    className: Yu.status,
                    children: [
                        !o &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx(Q, {
                                        text: m.rank,
                                        binding: {
                                            rank: e.jsx('div', {
                                                className: Yu.rank,
                                                children: U(R.strings.comp7_ext.quotesWrapper(), { name: xa(n) }),
                                            }),
                                        },
                                        classMix: Yu.secondaryText,
                                    }),
                                    e.jsx('div', { className: Yu.verticalSeparator }),
                                ],
                            }),
                        e.jsx(Q, {
                            text: m.description,
                            binding: {
                                seasonPointIcon: e.jsx(V, {
                                    contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
                                    args: Ku,
                                    ignoreShowDelay: !0,
                                    children: e.jsx('div', {
                                        children: e.jsx($a, {
                                            state: Xu,
                                            season: d,
                                            size: qa.x16,
                                            className: Yu.seasonPointIcon,
                                        }),
                                    }),
                                }),
                            },
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: Yu.inner,
                    children: [
                        T(r.ranks.get().length, (a) =>
                            e.jsx(Gu, { index: a, size: u, seasonName: d, className: Yu.item }, a),
                        ),
                        e.jsx('div', { className: Yu.arrowContainer, children: e.jsx('div', { className: Yu.arrow }) }),
                        e.jsxs('div', {
                            className: Yu.pointsCount,
                            children: [
                                e.jsxs('div', {
                                    className: Yu.countContainer,
                                    children: [
                                        e.jsx('div', { className: Yu.fakeCount, children: '0' }),
                                        e.jsx('div', { className: Yu.count, children: _ }),
                                    ],
                                }),
                                e.jsx('div', {
                                    className: Yu.seasonPoint,
                                    children: e.jsx(V, {
                                        contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
                                        args: Ku,
                                        ignoreShowDelay: !0,
                                        children: e.jsx('div', {
                                            children: e.jsx($a, { state: Xu, season: d, size: Fu(t) }),
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
    Zu = 'StatusBanner_38fab065',
    eh = 'StatusBanner_description_b2b220da',
    ah = r(({ className: s }) => {
        const { model: t } = cu(),
            { bannerState: r } = t.root.get();
        return e.jsx('div', {
            className: a(Zu, s),
            children: e.jsx('div', {
                className: eh,
                children: String(R.strings.comp7_ext.yearlyRewards.banner.$dyn(r)),
            }),
        });
    }),
    sh = {
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
    th = [2, 3, 4, 5],
    rh = r(({ className: t }) => {
        const { model: r } = cu(),
            { model: i } = aa(),
            { withIntro: n } = r.root.get(),
            o = r.hoveredCardIndex.get(),
            c = Z(),
            d = i.year.state.get() === Jo.Finished ? r.computes.maxAchievedCardIndex() : r.computes.activeCardIndex(),
            l = !n && th.includes(d) && -1 === o ? d : o;
        return (
            s.useEffect(() => {
                !c && th.includes(l) && b.sound('comp_7_annual_reward_tank_emergence_style');
            }, [c, l, n]),
            e.jsxs('div', {
                className: a(sh.base, sh[`base__selectedIndex_${l}`], t),
                children: [
                    e.jsx('div', { className: a(sh.vehicleBg, sh.vehicleBg__inactive) }),
                    th.map((s) => e.jsx('div', { className: a(sh.vehicleBg, sh[`vehicleBg__${s}`]) }, s)),
                ],
            })
        );
    }),
    ih = 'VehicleInfo_a6ed28fa',
    nh = 'VehicleInfo_background_2a7e0ec',
    oh = 'VehicleInfo_content_536b4958',
    ch = 'VehicleInfo_title_8c67bd16',
    dh = (e) => (e >= S.Large ? Da.x64 : Da.x48),
    lh = r(({ className: s, classNames: t }) => {
        const { mediaSize: r } = v(),
            { model: i } = cu(),
            n = i.computes.vehicleReward(),
            o = i.computes.vehicle();
        return e.jsxs('div', {
            className: a(ih, s),
            children: [
                e.jsx('div', { className: nh }),
                e.jsx('div', {
                    className: oh,
                    children: e.jsx(Q, {
                        text: R.strings.comp7_ext.yearlyRewards.mainYearlyRewardTitle(),
                        binding: {
                            vehicle: e.jsx(Ta, {
                                ...o,
                                size: dh(r),
                                tooltipArgs: { tooltipId: n.tooltipId },
                                vehicleCD: o.vehicleCD,
                                role: o.roleKey,
                            }),
                        },
                        classMix: a(ch, null == t ? void 0 : t.title),
                    }),
                }),
            ],
        });
    }),
    _h = 'YearlyRewardsPage_b4fabdfc',
    mh = 'YearlyRewardsPage_bgContainer_7b9c0dc4',
    uh = 'YearlyRewardsPage_error_481edb10',
    hh = 'YearlyRewardsPage_contentWrapper_b226b3ee',
    gh = 'YearlyRewardsPage_vehicle_7cb1ad5e',
    ph = 'YearlyRewardsPage_columns_884e15ad',
    xh = 'YearlyRewardsPage_schedule_8841c048',
    bh = 'YearlyRewardsPage_legend_1c8fdbce',
    fh = 'YearlyRewardsPage_status_9f92f1db',
    vh = 'YearlyRewardsPage_contentWrapper__withIntro_9c60e274',
    Sh = 'YearlyRewardsPage_vehicleInfoContainer_7cb1ad5e',
    jh = 'YearlyRewardsPage_vehicleInfo_b56e25f6',
    wh = (e) => window.setTimeout(() => b.sound(R.sounds.comp_7_annual_reward_rank_points()), e),
    Nh = r(() => {
        const { model: t, controls: r } = cu(),
            { hasDataError: i, withIntro: n } = t.root.get(),
            d = o(ca),
            l = Fm();
        return (
            ie(ne.ESCAPE, () => l.skipAll(), n),
            ce(() =>
                Ke.move(([, e]) => {
                    'outside' !== e || n || r.setHoveredCardIndex(-1);
                }),
            ),
            s.useEffect(() => {
                l.rootRef.current && (l.rootRef.current.style.pointerEvents = n ? 'none' : 'auto');
            }, [l.rootRef, n]),
            s.useEffect(() => {
                if (!n) return;
                const e = [],
                    a = (a) => {
                        switch (($m.includes(a) && r.setHoveredCardIndex($m.findIndex((e) => e === a)), a)) {
                            case Qm.firstStageSeasonPoints:
                            case Qm.secondStageSeasonPoints:
                            case Qm.thirdStageSeasonPoints:
                            case Qm.fourthStageSeasonPoints:
                            case Qm.fifthStageSeasonPoints:
                            case Qm.sixthStageSeasonPoints:
                                e.push(wh(0), wh(200), wh(400));
                        }
                    };
                return (
                    l.events.on('change', a),
                    () => {
                        (l.events.off('change', a), e.forEach((e) => clearTimeout(e)));
                    }
                );
            }, [l.events, r, n]),
            s.useEffect(() => {
                if (!n) return;
                const e = () => {
                    (r.setHoveredCardIndex(-1), r.setIntroViewed());
                };
                return (
                    l.events.on('end', e),
                    () => {
                        l.events.off('end', e);
                    }
                );
            }, [l.events, l.rootRef, r, n]),
            e.jsxs('div', {
                className: _h,
                ref: l.rootRef,
                'data-test-id': 'yearly-rewards-page',
                children: [
                    e.jsx('div', { className: mh, children: e.jsx(lu, {}) }),
                    !i &&
                        e.jsxs(e.Fragment, { children: [e.jsx(rh, { className: gh }), e.jsx(Ou, { className: ph })] }),
                    e.jsx(c.div, {
                        style: d,
                        className: a(hh, n && vh),
                        children: i
                            ? e.jsx(Ss, { className: uh })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('div', { className: bh, children: e.jsx(Ju, {}) }),
                                      e.jsx('div', { className: Sh, children: e.jsx(lh, { className: jh }) }),
                                      e.jsx('div', { className: fh, children: e.jsx(ah, {}) }),
                                  ],
                              }),
                    }),
                    e.jsx(ba, { className: xh }),
                ],
            })
        );
    }),
    Ch = [Oa.JustStarted, Oa.Active, Oa.EndSoon],
    [kh, Ph] = w()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), seasonCards: e.array('seasonCards') },
                s = t(
                    (e) => {
                        const s = P(a.seasonCards.get(), e);
                        if (!s) throw new Error(`Unexpected card index: ${e}`);
                        return { ...s };
                    },
                    { equals: N },
                ),
                r = t((e) => s(e).season, { equals: N }),
                i = t((e) => r(e).state),
                n = t((e) => i(e) === Oa.NotStarted),
                o = t((e) => Ch.includes(i(e))),
                c = t((e) => s(e).rank),
                d = t((e) => s(e).hasRankReceived);
            return {
                ...a,
                computes: {
                    seasonCard: s,
                    seasonState: i,
                    seasonScheduleInfo: r,
                    isSeasonNotStarted: n,
                    isSeasonActive: o,
                    rank: c,
                    hasRankReceived: d,
                },
            };
        },
        ({ externalModel: e }) => ({
            goToSeasonStatistics: e.createCallback((e) => ({ seasonName: e }), 'onGoToSeasonStatistics'),
        }),
    ),
    Rh = 'Background_37b3a646',
    Ih = r(({ index: s, className: t }) => {
        const { model: r } = Ph(),
            { name: i } = r.computes.seasonScheduleInfo(s),
            n = r.computes.hasRankReceived(s),
            o = R.images.comp7.gui.maps.icons.backgrounds.$dyn(i),
            c = n ? ga[r.computes.rank(s)] : 'qualification';
        return e.jsx('div', { className: a(Rh, t), style: { backgroundImage: `url(${o.$dyn(c)})` } });
    }),
    yh = 'CardFooter_2e091ae9',
    Ah = 'CardFooter_statisticsAvailability_cb0a44a8',
    Bh = 'CardFooter_generationOfStatistics_47c91b6a',
    Th = 'CardFooter_icon_dca570a2',
    Dh = r(({ index: s, className: t }) => {
        const { model: r, controls: i } = Ph(),
            { hasStatisticsCalculated: n } = r.computes.seasonCard(s),
            { name: o } = r.computes.seasonScheduleInfo(s);
        return e.jsx('div', {
            className: a(yh, t),
            children: n
                ? e.jsx('div', {
                      onClick: () => i.goToSeasonStatistics(o),
                      children: e.jsx(Q, {
                          text: R.strings.comp7_ext.yearlyStatistics.goToSeasonStatistics(),
                          classMix: Ah,
                          binding: { icon: e.jsx('div', { className: Th }) },
                      }),
                  })
                : e.jsx(Q, { text: R.strings.comp7_ext.yearlyStatistics.generationOfStatistics(), classMix: Bh }),
        });
    }),
    Lh = 'RankStatus_481bd341',
    Eh = 'RankStatus_rank_b62f7c6',
    zh = 'RankStatus_division_36b5f382',
    Mh = r(({ index: a }) => {
        const { model: s } = Ph(),
            { hasRankReceived: t, rank: r, division: i } = s.computes.seasonCard(a);
        return e.jsx('div', {
            className: Lh,
            children: t
                ? e.jsxs(e.Fragment, {
                      children: [
                          e.jsx(Q, {
                              classMix: Eh,
                              text: R.strings.comp7_ext.yearlyStatistics.rankStatus.received(),
                              binding: { rank: xa(r) },
                          }),
                          ma(r) && e.jsx(Q, { classMix: zh, text: Sa(i) }),
                      ],
                  })
                : e.jsx('div', {
                      className: Eh,
                      children: R.strings.comp7_ext.yearlyStatistics.rankStatus.notReceived(),
                  }),
        });
    }),
    Wh = 'SeasonStatus_276e8c3f',
    Vh = r(({ index: s }) => {
        const { model: t } = Ph(),
            { endTimestamp: r, startTimestamp: i, state: n, hasTentativeDates: o } = t.computes.seasonScheduleInfo(s);
        return e.jsx('div', {
            className: a(Wh),
            children: (() => {
                switch (n) {
                    case Oa.NotStarted:
                        return e.jsx('div', {
                            children: o
                                ? String(R.strings.comp7_ext.yearlyStatistics.seasonDate.$num(s))
                                : e.jsx(Q, { text: R.strings.comp7_ext.season.range(), binding: fa(i, r) }),
                        });
                    case Oa.JustStarted:
                    case Oa.EndSoon:
                    case Oa.Active:
                        return e.jsx('div', { children: R.strings.comp7_ext.yearlyStatistics.seasonStatus.active() });
                    case Oa.End:
                        return e.jsx('div', { children: R.strings.comp7_ext.yearlyStatistics.seasonStatus.end() });
                    default:
                        return (console.error(`Unreachable season state ${n}`), null);
                }
            })(),
        });
    }),
    Hh = 'Row_4b92d9b1',
    Uh = 'Row_base__percentage_dff07ba',
    Qh = 'Row_dashes_6f0ebb88',
    $h = 'Row_value_4ffd89b6',
    qh = ({ text: s, value: t, className: r, isPercentage: i = !1 }) =>
        e.jsxs('div', {
            className: a(Hh, r, i && Uh),
            children: [
                s,
                e.jsx('div', { className: Qh }),
                e.jsx('div', { className: $h, children: ya({ value: t, isPercentage: i }) }),
            ],
        }),
    Oh = 'Table_b0baa470',
    Fh = 'Table_container_8ee049b2',
    Yh = 'Table_row_aa1a4564',
    Gh = r(({ index: s }) => {
        const { model: t } = Ph(),
            {
                rating: r,
                singleBattlesCount: i,
                singleBattlesWinRate: n,
                superPlatoonBattlesCount: o,
                superPlatoonBattlesWinRate: c,
            } = t.computes.seasonCard(s);
        return e.jsxs('div', {
            className: a(Oh),
            children: [
                e.jsx('div', {
                    className: Fh,
                    children: e.jsx(qh, {
                        text: R.strings.comp7_ext.yearlyStatistics.rating(),
                        value: r,
                        className: Yh,
                    }),
                }),
                e.jsxs('div', {
                    className: Fh,
                    children: [
                        e.jsx(qh, { text: R.strings.comp7_ext.yearlyStatistics.battles(), value: i, className: Yh }),
                        e.jsx(qh, {
                            text: R.strings.comp7_ext.yearlyStatistics.wins(),
                            value: n,
                            isPercentage: !0,
                            className: Yh,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: Fh,
                    children: [
                        e.jsx(qh, {
                            text: R.strings.comp7_ext.yearlyStatistics.superPlatoonBattles(),
                            value: o,
                            className: Yh,
                        }),
                        e.jsx(qh, {
                            text: R.strings.comp7_ext.yearlyStatistics.wins(),
                            value: c,
                            isPercentage: !0,
                            className: Yh,
                        }),
                    ],
                }),
            ],
        });
    }),
    Xh = (e) => {
        switch (!0) {
            case e >= S.ExtraLarge:
                return _a.x420;
            case e >= S.Large:
                return _a.x260;
            case e >= S.Medium:
                return _a.x200;
            default:
                return _a.x150;
        }
    },
    Kh = 'SeasonCard_2725976b',
    Jh = 'SeasonCard_name_f71e7711',
    Zh = 'SeasonCard_rankImage_4800d152',
    eg = 'SeasonCard_cardFooter_596f8b9d',
    ag = 'SeasonCard_divider_8113e306',
    sg = 'SeasonCard_divider__left_455077e5',
    tg = 'SeasonCard_divider__right_a8eb920c',
    rg = 'SeasonCard_laceBase_9c22a5c9',
    ig = 'SeasonCard_laceContainer_2dd0d837',
    ng = 'SeasonCard_laceContainer__active_af829f8a',
    og = r(({ index: s, className: t }) => {
        const { model: r } = Ph(),
            { rank: i, division: n, hasRankReceived: o } = r.computes.seasonCard(s),
            { state: c, name: d } = r.computes.seasonScheduleInfo(s),
            l = r.computes.isSeasonActive(s),
            { mediaSize: _ } = v();
        return e.jsxs('div', {
            className: a(Kh, t),
            children: [
                0 === s && e.jsx('div', { className: a(ag, sg) }),
                e.jsx('div', {
                    className: Jh,
                    children: String(R.strings.comp7_ext.yearlyStatistics.seasonName.$num(s)),
                }),
                e.jsx(Vh, { index: s }),
                o
                    ? e.jsx(la, { rank: i, size: Xh(_), seasonName: d, division: n, className: Zh })
                    : e.jsx(Ia, { size: Xh(_), seasonName: d, className: Zh }),
                e.jsx(Mh, { index: s }),
                e.jsx(Gh, { index: s }),
                e.jsx(Fa, { className: rg, classNames: { lace: a(ig, l && ng) } }),
                c === Oa.End && o && e.jsx(Dh, { index: s, className: eg }),
                e.jsx('div', { className: a(ag, tg) }),
            ],
        });
    }),
    cg = {
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
    dg = r(({ index: s, className: t }) => {
        const { model: r } = Ph(),
            i = r.computes.isSeasonNotStarted(s),
            n = r.seasonCards.get().length,
            o = r.computes.isSeasonActive(s);
        return e.jsxs(
            'div',
            {
                className: a(cg.cardWrapper, 0 === s && cg.cardWrapper__left, s === n - 1 && cg.cardWrapper__right),
                children: [
                    e.jsx(Ih, { index: s, className: a(cg.bg, i && cg.bg__disabled) }),
                    e.jsxs('div', {
                        className: a(cg.seasonCard, i && cg.seasonCard__disabled),
                        children: [o && e.jsx('div', { className: cg.glow }), e.jsx(og, { index: s })],
                    }),
                ],
            },
            s,
        );
    }),
    lg = r(() => {
        const { model: a } = Ph(),
            s = o(ca);
        return e.jsxs('div', {
            className: cg.base,
            'data-test-id': 'yearly-statistics-page',
            children: [
                e.jsx('div', { className: cg.heading, children: e.jsx(ba, {}) }),
                e.jsx(c.div, {
                    style: s,
                    className: cg.contentWrapper,
                    children: T(a.seasonCards.get().length, (a) => e.jsx(dg, { index: a })),
                }),
            ],
        });
    }),
    _g = {
        [ta.Progression]: () => e.jsx(Wt, { options: rs.PROGRESSION_PAGE, children: e.jsx(zo, {}) }),
        [ta.RankRewards]: () => e.jsx(Mo, { options: rs.RANK_REWARDS_PAGE, children: e.jsx(Ic, {}) }),
        [ta.WeeklyQuests]: () => e.jsx(f_, { options: rs.WEEKLY_QUESTS_PAGE, children: e.jsx(Um, {}) }),
        [ta.Leaderboard]: () => e.jsx(js, { options: rs.LEADERBOARD_PAGE, children: e.jsx(Lt, {}) }),
        [ta.YearlyRewards]: () =>
            e.jsx(ou, { options: rs.YEARLY_REWARDS_PAGE, children: e.jsx(Gm, { children: e.jsx(Nh, {}) }) }),
        [ta.Shop]: () => e.jsx(Tc, { options: rs.SHOP_PAGE, children: e.jsx(p_, {}) }),
        [ta.YearlyStatistics]: () => e.jsx(kh, { options: rs.YEARLY_STATISTICS_PAGE, children: e.jsx(lg, {}) }),
    },
    mg = ({ pageView: a }) => {
        const s = _g[a];
        return s ? e.jsx(s, {}) : (console.error('Unreachable code: ViewResolver'), null);
    },
    ug = {
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
        choiceAward: 'App_choiceAward_8f89ec08',
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
    hg = r(() => {
        const { model: s, controls: t } = ns(),
            { model: r } = aa(),
            i = ss(),
            { pageViewId: n } = s.root.get(),
            { isDisabled: o, rewardsCount: c } = s.claimRewardsModel.get(),
            { mediaSize: d } = v();
        Je(t.close);
        const l = s.computes.isProgressionInQualification();
        return e.jsxs('div', {
            className: a(
                ug.base,
                l && !as() && ug.base__qualification,
                !l && ug[`base__${ts[n]}`],
                ug[`season__${r.season.name.get()}`],
            ),
            children: [
                e.jsx('div', { className: ug.viewContainer, children: e.jsx(mg, { pageView: n }) }),
                e.jsx(ds, {
                    options: rs.TABS,
                    children: e.jsx(gs, { pageView: n, className: a(ug.sidebar, i.isMedium && ug.sidebar__medium) }),
                }),
                c > 0 &&
                    e.jsx('div', {
                        className: ug.choiceAward,
                        children: e.jsx(es, {
                            size: d >= S.Large ? Za.Big : Za.Small,
                            count: c,
                            disabled: o,
                            onClick: t.openRewardsSelectionScreen,
                        }),
                    }),
            ],
        });
    });
Ze(e.jsx(ea, { children: e.jsx(is, { children: e.jsx(sa, { options: rs.SCHEDULE, children: e.jsx(hg, {}) }) }) }), {
    fullScreen: !0,
});
