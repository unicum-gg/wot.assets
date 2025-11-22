import {
    r as e,
    Y as a,
    W as t,
    S as s,
    x as i,
    j as n,
    w as r,
    f as c,
    Q as o,
    P as l,
} from '../../../chunks/vendor.js';
import {
    du as d,
    dv as _,
    i as m,
    cM as h,
    bd as p,
    dw as x,
    bc as f,
    c3 as u,
    dx as g,
    e as b,
    B as v,
    ca as N,
    cb as j,
    b0 as S,
    F as w,
    al as M,
    cm as T,
    cn as I,
    cu as O,
    m as F,
    a0 as L,
    b5 as A,
    u as D,
    ac as y,
    d1 as C,
    cC as z,
    a5 as k,
    cE as B,
    r as $,
    U as W,
} from '../../../chunks/lib.js';
import { I as U, P as H } from '../../../chunks/consts.js';
import { A as E } from '../../../chunks/animated_background.js';
var Q = ((e) => (
        (e.Schedule = 'schedule'),
        (e.Live = 'live'),
        (e.FinalResult = 'finalResult'),
        (e.Error = 'error'),
        e
    ))(Q || {}),
    P = ((e) => ((e.Loading = 'loading'), (e.Content = 'content'), e))(P || {});
const G = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function q(a) {
    !(function (a = d.NONE, t = G, s = !1, i = !1) {
        e.useEffect(() => {
            if (a !== d.NONE)
                return (
                    window.addEventListener('keydown', e, s),
                    () => {
                        window.removeEventListener('keydown', e, s);
                    }
                );
            function e(e) {
                if (e.keyCode === a) {
                    if (!i && _.view.isEventHandled()) return;
                    (_.view.setEventHandled(), t(e), s && e.stopPropagation());
                }
            }
        }, [t, a, s, i]);
    })(d.ESCAPE, a);
}
var K = ((e) => ((e.NotStarted = 'notStarted'), (e.Completed = 'completed'), (e.Live = 'live'), e))(K || {}),
    Y = ((e) => (
        (e.RoundRobin = 'roundRobin'),
        (e.UBSemifinals = 'UBSemifinals'),
        (e.UBFinals = 'UBFinals'),
        (e.LBRound1 = 'LBRound1'),
        (e.LBRound2 = 'LBRound2'),
        (e.LBSemifinals = 'LBSemifinals'),
        (e.LBFinals = 'LBFinals'),
        (e.GrandFinals = 'grandFinals'),
        e
    ))(Y || {});
function J(e) {
    const t = {};
    for (const s in e)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
            const i = e[s];
            t[s] = a(i);
        }
    return t;
}
const V = 'overview',
    X = 'schedule',
    [Z, ee] = m()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives([
                        'overviewState',
                        'prizeFund',
                        'isRefreshing',
                        'streamingWithDrops',
                        'streamingWithoutDrops',
                        'pageState',
                    ]),
                    schedule: e.arrayClone('schedule'),
                    fundDistribution: e.arrayClone('fundDistribution'),
                    currentTab: t.box(V),
                    hasScheduleScrolled: t.box(!1),
                },
                i = s(
                    () => {
                        const e = a.overviewState.get() === Q.Live,
                            t = e ? 0 : 1,
                            s = e ? 3 : 4;
                        return p(a.schedule.get(), (e) => e.matchState === K.NotStarted).slice(t, s);
                    },
                    { equals: h },
                ),
                n = s(
                    () => {
                        switch (a.overviewState.get()) {
                            case Q.Live:
                                return f(a.schedule.get(), (e) => e.matchState === K.Live);
                            case Q.Schedule:
                                return f(a.schedule.get(), (e) => e.matchState === K.NotStarted);
                            case Q.FinalResult:
                                return x(a.schedule.get());
                            default:
                                return null;
                        }
                    },
                    { equals: h },
                ),
                r = s(
                    () => {
                        const e = new Map();
                        return (
                            u(a.schedule.get(), (a) => {
                                const t = new Date(1e3 * a.startOfMatchTimestamp);
                                t.setHours(0, 0, 0, 0);
                                const s = Math.floor(t.getTime() / 1e3);
                                (e.has(s) || e.set(s, []), g(e.get(s), a));
                            }),
                            Array.from(e.entries()).map(([e, a]) => ({ dayTimestamp: e, matches: a }))
                        );
                    },
                    { equals: h },
                );
            return { ...a, computes: { closestMatches: i, scheduleByDate: r, overviewMainMatch: n } };
        },
        ({ model: e, externalModel: a }) => ({
            watchStreamingOne: a.createCallbackNoArgs('onWatchStreamingOne'),
            watchStreamingTwo: a.createCallbackNoArgs('onWatchStreamingTwo'),
            goToShop: a.createCallbackNoArgs('onGoToShop'),
            refresh: a.createCallbackNoArgs('onRefresh'),
            close: a.createCallbackNoArgs('onClose'),
            ...J({
                updateCurrentTabId: (a) => {
                    e.currentTab.set(a);
                },
                setScheduleScrolled: () => {
                    e.hasScheduleScrolled.set(!0);
                },
            }),
        }),
    ),
    ae = 'Error_c5522e93',
    te = 'Error_gears_15e3b263',
    se = 'Error_comeBack_b7a2fb47',
    ie = 'Error_refreshIcon_7f41dcf9',
    ne = 'Error_refreshIcon__refreshing_412c83fa',
    re = i(function () {
        const { model: e, controls: a } = ee(),
            t = e.isRefreshing.get(),
            { mediaSize: s } = b();
        return n.jsxs('div', {
            className: ae,
            children: [
                n.jsx('div', { className: te }),
                R.strings.comp7_ext.wci.error(),
                n.jsx('div', { className: se, children: R.strings.comp7_ext.wci.comeBack() }),
                n.jsxs(v, {
                    theme: v.themes.secondary,
                    onClick: a.refresh,
                    size: s >= N.Large ? v.sizes.medium : v.sizes.small,
                    autoAlignContent: !1,
                    disabled: t,
                    children: [
                        n.jsx('div', { className: r(ie, t && ne) }),
                        t ? R.strings.comp7_ext.wci.refreshing() : R.strings.comp7_ext.wci.refresh(),
                    ],
                }),
            ],
        });
    }),
    ce = {
        base: 'TeamLogo_7a8c421c',
        image: 'TeamLogo_image_f5af838f',
        base__x38: 'TeamLogo_base__x38_fa6e10c0',
        base__x48: 'TeamLogo_base__x48_fa6e10c0',
        base__x68: 'TeamLogo_base__x68_fa6e10c0',
        base__x86: 'TeamLogo_base__x86_fa6e10c0',
        base__x128: 'TeamLogo_base__x128_fa6e10c0',
        base__x192: 'TeamLogo_base__x192_fa6e10c0',
        base__x262: 'TeamLogo_base__x262_fa6e10c0',
        base__x366: 'TeamLogo_base__x366_fa6e10c0',
        base__x522: 'TeamLogo_base__x522_fa6e10c0',
        teamName: 'TeamLogo_teamName_ed27446e',
        winner: 'TeamLogo_winner_4f446a77',
        fadeIn: 'TeamLogo_fadeIn_fa6e10c0',
        fadeInThreeQuarters: 'TeamLogo_fadeInThreeQuarters_fa6e10c0',
        fadeInHalf: 'TeamLogo_fadeInHalf_fa6e10c0',
        fadeOut: 'TeamLogo_fadeOut_fa6e10c0',
        fadeInWithScale: 'TeamLogo_fadeInWithScale_fa6e10c0',
        slideUp: 'TeamLogo_slideUp_fa6e10c0',
        scale: 'TeamLogo_scale_fa6e10c0',
        raysAppearance: 'TeamLogo_raysAppearance_fa6e10c0',
        rotate: 'TeamLogo_rotate_fa6e10c0',
        'reverse-rotate': 'TeamLogo_reverse-rotate_fa6e10c0',
        glowAppearance: 'TeamLogo_glowAppearance_fa6e10c0',
        highlightAppearance: 'TeamLogo_highlightAppearance_fa6e10c0',
        blink: 'TeamLogo_blink_fa6e10c0',
        slideUpIn: 'TeamLogo_slideUpIn_fa6e10c0',
    };
var oe = ((e) => (
    (e.x28 = 'x28'),
    (e.x38 = 'x38'),
    (e.x48 = 'x48'),
    (e.x68 = 'x68'),
    (e.x86 = 'x86'),
    (e.x128 = 'x128'),
    (e.x192 = 'x192'),
    (e.x262 = 'x262'),
    (e.x366 = 'x366'),
    (e.x522 = 'x522'),
    e
))(oe || {});
const le = ({
        teamName: e = '',
        logos: a,
        size: t = 'x38',
        showIsWinner: s = !1,
        showTeamName: i = !0,
        className: r,
        classNames: o,
    }) => {
        const l = ((e, a) => {
            switch (a) {
                case 'x28':
                case 'x38':
                case 'x48':
                    return e.x48 || R.images.comp7.gui.maps.icons.tournaments.placeholder_x48();
                case 'x68':
                case 'x86':
                    return e.x86 || R.images.comp7.gui.maps.icons.tournaments.placeholder_x86();
                case 'x128':
                case 'x192':
                case 'x262':
                    return e.x260;
                case 'x366':
                case 'x522':
                    return e.x522;
            }
        })(a, t);
        return n.jsxs('div', {
            className: c(ce.base, ce[`base__${t}`], r),
            children: [
                n.jsx('div', { className: ce.image, style: { backgroundImage: `url(${l})` } }),
                i &&
                    n.jsx(j, {
                        content: e || R.strings.comp7_ext.wci.teamPlaceholder(),
                        classMix: c(ce.teamName, null == o ? void 0 : o.teamName),
                    }),
                s && n.jsx('div', { className: ce.winner, children: R.strings.comp7_ext.wci.winner() }),
            ],
        });
    },
    de = 'Frame_centerBorderCommon_d2f72236',
    _e = 'Frame_outerBorderCommon_23b37900',
    me = 'Frame_innerBorderCommon_ffa760cd',
    he = () =>
        n.jsxs(n.Fragment, {
            children: [
                n.jsx('div', { className: de }),
                n.jsx('div', { className: _e }),
                n.jsx('div', { className: me }),
            ],
        }),
    pe = {
        base: 'FundDistribution_8ba2417b',
        heading: 'FundDistribution_heading_e3464f49',
        team: 'FundDistribution_team_d242da75',
        team__position1: 'FundDistribution_team__position1_a51ae262',
        team__position2: 'FundDistribution_team__position2_42cf8fc2',
        team__position3: 'FundDistribution_team__position3_3267b599',
        place: 'FundDistribution_place_47f4b471',
        schedule: 'FundDistribution_schedule_4257e4d6',
        prize: 'FundDistribution_prize_725e894b',
        border: 'FundDistribution_border_46bc667',
        logo: 'FundDistribution_logo_5d5f7edd',
        teamName: 'FundDistribution_teamName_9f67286c',
        text: 'FundDistribution_text_2ce171ef',
        textWithBlend: 'FundDistribution_textWithBlend_17054480',
        textMask: 'FundDistribution_textMask_bad047ae',
        fadeIn: 'FundDistribution_fadeIn_30dbd93f',
        fadeInThreeQuarters: 'FundDistribution_fadeInThreeQuarters_30dbd93f',
        fadeInHalf: 'FundDistribution_fadeInHalf_30dbd93f',
        fadeOut: 'FundDistribution_fadeOut_30dbd93f',
        fadeInWithScale: 'FundDistribution_fadeInWithScale_30dbd93f',
        slideUp: 'FundDistribution_slideUp_30dbd93f',
        scale: 'FundDistribution_scale_30dbd93f',
        raysAppearance: 'FundDistribution_raysAppearance_30dbd93f',
        rotate: 'FundDistribution_rotate_30dbd93f',
        'reverse-rotate': 'FundDistribution_reverse-rotate_30dbd93f',
        glowAppearance: 'FundDistribution_glowAppearance_30dbd93f',
        highlightAppearance: 'FundDistribution_highlightAppearance_30dbd93f',
        blink: 'FundDistribution_blink_30dbd93f',
        slideUpIn: 'FundDistribution_slideUpIn_30dbd93f',
    },
    xe = i(function () {
        const { model: e } = ee(),
            a = e.overviewState.get(),
            t = e.fundDistribution.get(),
            { logoSize: s } = S(
                { logoSize: oe.x28 },
                { medium: { logoSize: oe.x28 }, large: { logoSize: oe.x38 }, extraLarge: { logoSize: oe.x48 } },
            );
        return n.jsxs('div', {
            className: r(pe.base, pe[`base__${a}`]),
            children: [
                n.jsx(he, {}),
                n.jsx(w, { text: R.strings.comp7_ext.wci.fundDistribution(), classMix: pe.heading }),
                n.jsx('div', {
                    className: pe.schedule,
                    children: M(
                        t,
                        ({ teamName: e, logos: a, prize: t, sharedPositionFrom: i, sharedPositionTo: c }, o) =>
                            n.jsxs(
                                'div',
                                {
                                    className: r(pe.team, pe[`team__position${i}`]),
                                    children: [
                                        n.jsx('div', { className: pe.border }),
                                        n.jsx('div', {
                                            className: pe.place,
                                            children: n.jsxs('div', {
                                                className: pe.textWithBlend,
                                                children: [
                                                    n.jsx('div', {
                                                        className: r(pe.text, pe.text__blend),
                                                        children:
                                                            c > i
                                                                ? n.jsx(w, {
                                                                      text: R.strings.comp7_ext.wci.placement(),
                                                                      binding: { firstPlace: i, secondPlace: c },
                                                                  })
                                                                : i,
                                                    }),
                                                    n.jsx('div', { className: pe.textMask }),
                                                ],
                                            }),
                                        }),
                                        n.jsx(le, {
                                            teamName: e,
                                            logos: a,
                                            size: s,
                                            className: pe.logo,
                                            classNames: { teamName: pe.teamName },
                                        }),
                                        n.jsx(w, {
                                            text: R.strings.comp7_ext.wci.cny(),
                                            binding: { amount: t },
                                            classMix: pe.prize,
                                        }),
                                    ],
                                },
                                o,
                            ),
                    ),
                }),
            ],
        });
    }),
    fe = {
        base: 'LiveMatchFooter_b8275269',
        base__overview: 'LiveMatchFooter_base__overview_cb95aa8',
        streamingIcon: 'LiveMatchFooter_streamingIcon_27192270',
        button: 'LiveMatchFooter_button_7bbffec4',
        buttonWrapper: 'LiveMatchFooter_buttonWrapper_c285389',
        streamingOne: 'LiveMatchFooter_streamingOne_85755d99',
        streamingOneContainer: 'LiveMatchFooter_streamingOneContainer_604e3447',
        box: 'LiveMatchFooter_box_acffdc1d',
        text: 'LiveMatchFooter_text_c54972e4',
        fadeIn: 'LiveMatchFooter_fadeIn_67aa606f',
        fadeInThreeQuarters: 'LiveMatchFooter_fadeInThreeQuarters_67aa606f',
        fadeInHalf: 'LiveMatchFooter_fadeInHalf_67aa606f',
        fadeOut: 'LiveMatchFooter_fadeOut_67aa606f',
        fadeInWithScale: 'LiveMatchFooter_fadeInWithScale_67aa606f',
        slideUp: 'LiveMatchFooter_slideUp_67aa606f',
        scale: 'LiveMatchFooter_scale_67aa606f',
        raysAppearance: 'LiveMatchFooter_raysAppearance_67aa606f',
        rotate: 'LiveMatchFooter_rotate_67aa606f',
        'reverse-rotate': 'LiveMatchFooter_reverse-rotate_67aa606f',
        glowAppearance: 'LiveMatchFooter_glowAppearance_67aa606f',
        highlightAppearance: 'LiveMatchFooter_highlightAppearance_67aa606f',
        blink: 'LiveMatchFooter_blink_67aa606f',
        slideUpIn: 'LiveMatchFooter_slideUpIn_67aa606f',
    },
    ue = R.strings.comp7_ext.wci,
    ge = i(function ({ buttonSize: e = v.sizes.extraSmall, showSeparator: a = !1 }) {
        const { model: t, controls: s } = ee(),
            i = t.streamingWithDrops.get(),
            r = t.streamingWithoutDrops.get(),
            o = t.currentTab.get();
        return n.jsxs('div', {
            className: c(fe.base, fe[`base__${o}`]),
            children: [
                n.jsxs('div', {
                    className: fe.streamingOneContainer,
                    children: [
                        n.jsx('div', {
                            className: fe.buttonWrapper,
                            children: n.jsxs(v, {
                                onClick: s.watchStreamingOne,
                                size: e,
                                autoAlignContent: !1,
                                children: [
                                    n.jsx('div', {
                                        className: fe.streamingIcon,
                                        style: {
                                            backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${i}`)})`,
                                        },
                                    }),
                                    `${ue.$dyn(i)}`,
                                ],
                            }),
                        }),
                        n.jsxs('div', {
                            className: fe.streamingOne,
                            children: [
                                n.jsx('div', {
                                    className: fe.box,
                                    style: {
                                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${i}_box`)})`,
                                    },
                                }),
                                n.jsx(w, { text: `${ue.dropsShort.$dyn(i)}` }),
                            ],
                        }),
                    ],
                }),
                a && n.jsx('div', { className: fe.text, children: ue.separator() }),
                n.jsxs(v, {
                    onClick: s.watchStreamingTwo,
                    theme: v.themes.secondary,
                    size: e,
                    autoAlignContent: !1,
                    className: c(!a && fe.button),
                    children: [
                        n.jsx('div', {
                            className: fe.streamingIcon,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${r}`)})`,
                            },
                        }),
                        `${ue.$dyn(r)}`,
                    ],
                }),
            ],
        });
    }),
    be = 'Footer_drops_6713b407',
    ve = 'Footer_box_8c90af12',
    Ne = 'Footer_finalResult_846f6844',
    je = 'Footer_separator_85aaf997',
    Se = 'Footer_result_7805495d',
    we = 'Footer_counter_f418ad46',
    Me = 'Footer_score_d3cc3dc6',
    Te = 'Footer_score__winner_fce912eb',
    Ie = 'Footer_teamLogo_4d32a058',
    Oe = 'Footer_teamLogo__loser_df3967bf',
    Fe = R.strings.comp7_ext.wci,
    Le = i(function ({ team1: e, team2: a, bestOf: t }) {
        const { model: s } = ee(),
            i = s.overviewState.get(),
            c = s.streamingWithDrops.get(),
            o = e.score > a.score,
            { size: l } = S(
                { size: v.sizes.small },
                {
                    medium: { size: v.sizes.small },
                    large: { size: v.sizes.medium },
                    extraLarge: { size: v.sizes.large },
                },
            );
        switch (i) {
            case Q.Schedule:
                return n.jsxs('div', {
                    className: be,
                    children: [
                        n.jsx('div', {
                            className: ve,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${c}_box`)})`,
                            },
                        }),
                        n.jsx(w, { text: `${Fe.drops.$dyn(c)}` }),
                    ],
                });
            case Q.Live:
                return n.jsx(ge, { buttonSize: l, showSeparator: !0 });
            case Q.FinalResult:
                return n.jsxs('div', {
                    className: Ne,
                    children: [
                        n.jsx(le, { logos: e.logos, teamName: e.teamName, size: oe.x68, className: r(Ie, !o && Oe) }),
                        n.jsxs('div', {
                            className: Se,
                            children: [
                                n.jsxs('div', {
                                    className: we,
                                    children: [
                                        n.jsx('div', { className: r(Me, o && Te), children: e.score }),
                                        n.jsx('div', { className: je }),
                                        n.jsx('div', { className: r(Me, !o && Te), children: a.score }),
                                    ],
                                }),
                                n.jsx(w, { text: Fe.bestOf(), binding: { number: t }, classMix: Me }),
                            ],
                        }),
                        n.jsx(le, { logos: a.logos, teamName: a.teamName, size: oe.x68, className: r(Ie, o && Oe) }),
                    ],
                });
            default:
                return null;
        }
    }),
    Ae = {
        base: 'Header_9d5dc26e',
        base__finalResult: 'Header_base__finalResult_b495a828',
        date: 'Header_date_87641df0',
        winner: 'Header_winner_904d1ca6',
        time: 'Header_time_8262ce62',
        live: 'Header_live_3a671f8e',
    },
    De = function ({ team1: e, team2: a, startOfMatchTimestamp: t, matchStage: s, overviewState: i, className: c }) {
        const o = e.score > a.score;
        switch (i) {
            case Q.Schedule:
                return n.jsxs('div', {
                    className: r(Ae.base, c),
                    children: [
                        n.jsx(w, { text: `${R.strings.comp7_ext.wci.$dyn(s)}`, classMix: Ae.round }),
                        n.jsxs('div', {
                            className: Ae.date,
                            children: [
                                n.jsx(T, { datetime: t, format: I.DayMonthAbbreviated }),
                                n.jsx('div', {
                                    className: Ae.time,
                                    children: n.jsx(T, { datetime: t, format: I.ShortTime }),
                                }),
                            ],
                        }),
                    ],
                });
            case Q.Live:
                return n.jsxs('div', {
                    className: r(Ae.base, c),
                    children: [
                        n.jsx(w, { text: `${R.strings.comp7_ext.wci.$dyn(s)}`, classMix: Ae.round }),
                        n.jsx('div', { className: Ae.live }),
                    ],
                });
            case Q.FinalResult:
                return n.jsxs('div', {
                    className: r(Ae.base, Ae.base__finalResult, c),
                    children: [
                        n.jsx(w, { text: R.strings.comp7_ext.wci.finalResult(), classMix: Ae.round }),
                        n.jsx('div', { className: Ae.winner, children: o ? e.teamName : a.teamName }),
                    ],
                });
            default:
                return null;
        }
    },
    ye = {
        base: 'Opponents_d0bb1f11',
        winner: 'Opponents_winner_ed3cb552',
        backLayer: 'Opponents_backLayer_63ec77b0',
        image: 'Opponents_image_b1ec304f',
        textWrapper: 'Opponents_textWrapper_605a8ddd',
        bestOf: 'Opponents_bestOf_711dae3e',
        teamName: 'Opponents_teamName_85f0bdfe',
        fadeIn: 'Opponents_fadeIn_899ffc8c',
        fadeInThreeQuarters: 'Opponents_fadeInThreeQuarters_899ffc8c',
        fadeInHalf: 'Opponents_fadeInHalf_899ffc8c',
        fadeOut: 'Opponents_fadeOut_899ffc8c',
        fadeInWithScale: 'Opponents_fadeInWithScale_899ffc8c',
        slideUp: 'Opponents_slideUp_899ffc8c',
        scale: 'Opponents_scale_899ffc8c',
        raysAppearance: 'Opponents_raysAppearance_899ffc8c',
        rotate: 'Opponents_rotate_899ffc8c',
        'reverse-rotate': 'Opponents_reverse-rotate_899ffc8c',
        glowAppearance: 'Opponents_glowAppearance_899ffc8c',
        highlightAppearance: 'Opponents_highlightAppearance_899ffc8c',
        blink: 'Opponents_blink_899ffc8c',
        slideUpIn: 'Opponents_slideUpIn_899ffc8c',
    },
    Ce = i(function ({ team1: e, team2: a, bestOf: t }) {
        const { model: s } = ee(),
            i = s.overviewState.get(),
            c = S(
                { logoSize: [oe.x192, oe.x262] },
                {
                    medium: { logoSize: [oe.x192, oe.x366] },
                    large: { logoSize: [oe.x366, oe.x522] },
                    extraLarge: { logoSize: [oe.x522, oe.x522] },
                },
            ),
            [o, l] = c.logoSize;
        return n.jsx('div', {
            className: r(ye.base, ye[`base__${i}`]),
            children:
                i === Q.FinalResult
                    ? n.jsxs('div', {
                          className: ye.winner,
                          children: [
                              n.jsx(E, { className: ye.backLayer }),
                              n.jsx(le, { logos: e.score > a.score ? e.logos : a.logos, size: l, showTeamName: !1 }),
                          ],
                      })
                    : n.jsxs(n.Fragment, {
                          children: [
                              n.jsx(le, { logos: e.logos, teamName: e.teamName, size: o }),
                              n.jsx('div', {
                                  className: ye.textWrapper,
                                  children: n.jsx(w, {
                                      text: R.strings.comp7_ext.wci.vsBestOf(),
                                      binding: { number: t },
                                      classMix: ye.bestOf,
                                  }),
                              }),
                              n.jsx(le, { logos: a.logos, teamName: a.teamName, size: o }),
                          ],
                      }),
        });
    }),
    ze = {
        base: 'MatchDetails_9e0f98f8',
        header: 'MatchDetails_header_28197aeb',
        base__live: 'MatchDetails_base__live_bf32d099',
        bg: 'MatchDetails_bg_4406693c',
        fadeIn: 'MatchDetails_fadeIn_bf32d099',
        fadeInThreeQuarters: 'MatchDetails_fadeInThreeQuarters_bf32d099',
        fadeInHalf: 'MatchDetails_fadeInHalf_bf32d099',
        fadeOut: 'MatchDetails_fadeOut_bf32d099',
        fadeInWithScale: 'MatchDetails_fadeInWithScale_bf32d099',
        slideUp: 'MatchDetails_slideUp_bf32d099',
        scale: 'MatchDetails_scale_bf32d099',
        raysAppearance: 'MatchDetails_raysAppearance_bf32d099',
        rotate: 'MatchDetails_rotate_bf32d099',
        'reverse-rotate': 'MatchDetails_reverse-rotate_bf32d099',
        glowAppearance: 'MatchDetails_glowAppearance_bf32d099',
        highlightAppearance: 'MatchDetails_highlightAppearance_bf32d099',
        blink: 'MatchDetails_blink_bf32d099',
        slideUpIn: 'MatchDetails_slideUpIn_bf32d099',
    },
    ke = i(function () {
        const { model: e } = ee(),
            a = e.overviewState.get(),
            t = e.computes.overviewMainMatch();
        if (a === Q.Error || !t) return n.jsx(re, {});
        const { team1: s, team2: i, startOfMatchTimestamp: c, bestOf: o, matchStage: l } = t;
        return n.jsxs('div', {
            className: r(ze.base, ze[`base__${a}`]),
            children: [
                n.jsx('div', { className: ze.bg }),
                n.jsx(De, {
                    team1: s,
                    team2: i,
                    startOfMatchTimestamp: c,
                    matchStage: l,
                    overviewState: a,
                    className: ze.header,
                }),
                n.jsx(Ce, { team1: s, team2: i, bestOf: o }),
                n.jsx(Le, { team1: s, team2: i, bestOf: o }),
            ],
        });
    }),
    Be = 'NextMatch_4050e42d',
    Re = 'NextMatch_base__withBg_7fbe159a',
    $e = 'NextMatch_border_23a4db2b',
    We = 'NextMatch_date_88d4ca3b',
    Ue = 'NextMatch_time_cc8c57bd',
    He = 'NextMatch_teams_d8219813',
    Ee = 'NextMatch_teamName_844880e8',
    Qe = 'NextMatch_textWrapper_6dd0aab3',
    Pe = 'NextMatch_bestOf_412f98dd',
    Ge = 'NextMatch_matchType_bad483be',
    qe = [Y.GrandFinals, Y.UBFinals, Y.LBFinals],
    Ke = function ({
        startOfMatchTimestamp: e,
        team1Name: a,
        team2Name: t,
        team1Logos: s,
        team2Logos: i,
        bestOf: c,
        matchStage: o,
    }) {
        const { logoSize: l } = S(
            { logoSize: oe.x48 },
            { medium: { logoSize: oe.x48 }, large: { logoSize: oe.x68 }, extraLarge: { logoSize: oe.x86 } },
        );
        return n.jsxs('div', {
            className: r(Be, qe.includes(o) && Re),
            children: [
                n.jsx('div', { className: $e }),
                n.jsxs('div', {
                    className: We,
                    children: [
                        n.jsx(T, { datetime: e, format: I.DayMonthAbbreviated }),
                        n.jsx('div', { className: Ue, children: n.jsx(T, { datetime: e, format: I.ShortTime }) }),
                    ],
                }),
                n.jsxs('div', {
                    className: He,
                    children: [
                        n.jsx(le, { teamName: a, logos: s, size: l, classNames: { teamName: Ee } }),
                        n.jsx('div', {
                            className: Qe,
                            children: n.jsx(O, {
                                text: R.strings.comp7_ext.wci.vsBestOf(),
                                params: { number: c },
                                className: Pe,
                                upgradeLegacy: !0,
                            }),
                        }),
                        n.jsx(le, { teamName: t, logos: i, size: l, classNames: { teamName: Ee } }),
                    ],
                }),
                n.jsx('div', {
                    children: n.jsx(O, { text: `${R.strings.comp7_ext.wci.$dyn(o)}`, className: Ge, split: !0 }),
                }),
            ],
        });
    },
    Ye = {
        base: 'Schedule_1fe6cf88',
        heading: 'Schedule_heading_719ccac0',
        noMatches: 'Schedule_noMatches_369ed951',
        addition: 'Schedule_addition_2d0c6aac',
        comingSoon: 'Schedule_comingSoon_831fa506',
        matches: 'Schedule_matches_2cc8646e',
        schedule: 'Schedule_aa4de4d3',
        container: 'Schedule_container_6aaf031b',
        comeBack: 'Schedule_comeBack_9ea73a67',
        fadeIn: 'Schedule_fadeIn_79271803',
        fadeInThreeQuarters: 'Schedule_fadeInThreeQuarters_79271803',
        fadeInHalf: 'Schedule_fadeInHalf_79271803',
        fadeOut: 'Schedule_fadeOut_79271803',
        fadeInWithScale: 'Schedule_fadeInWithScale_79271803',
        slideUp: 'Schedule_slideUp_79271803',
        scale: 'Schedule_scale_79271803',
        raysAppearance: 'Schedule_raysAppearance_79271803',
        rotate: 'Schedule_rotate_79271803',
        'reverse-rotate': 'Schedule_reverse-rotate_79271803',
        glowAppearance: 'Schedule_glowAppearance_79271803',
        highlightAppearance: 'Schedule_highlightAppearance_79271803',
        blink: 'Schedule_blink_79271803',
        slideUpIn: 'Schedule_slideUpIn_79271803',
    },
    Je = R.strings.comp7_ext.wci,
    Ve = i(function () {
        const { model: e, controls: a } = ee(),
            t = e.overviewState.get(),
            s = e.computes.closestMatches(),
            { mediaSize: i } = b();
        return n.jsxs('div', {
            className: r(Ye.base, Ye[`base__${t}`]),
            children: [
                n.jsx(he, {}),
                t === Q.Error
                    ? n.jsx('div', {
                          className: Ye.schedule,
                          children: n.jsxs('div', {
                              className: Ye.container,
                              children: [
                                  R.strings.comp7_ext.wci.error(),
                                  n.jsx('div', {
                                      className: Ye.comeBack,
                                      children: R.strings.comp7_ext.wci.comeBack(),
                                  }),
                              ],
                          }),
                      })
                    : n.jsxs(n.Fragment, {
                          children: [
                              n.jsxs('div', {
                                  className: Ye.heading,
                                  children: [
                                      n.jsx(w, {
                                          text: Je.comingSoon(),
                                          classMix: Ye.comingSoon,
                                          binding: {
                                              addition:
                                                  s.length > 0 &&
                                                  n.jsx(j, {
                                                      content: R.strings.comp7_ext.wci.comingSoonAddition(),
                                                      className: Ye.addition,
                                                  }),
                                          },
                                      }),
                                      n.jsx(v, {
                                          theme: v.themes.secondary,
                                          onClick: () => a.updateCurrentTabId(X),
                                          size: i >= N.Large ? v.sizes.medium : v.sizes.small,
                                          autoAlignContent: !1,
                                          children: Je.viewFull(),
                                      }),
                                  ],
                              }),
                              n.jsx('div', {
                                  className: Ye.schedule,
                                  children:
                                      s.length > 0
                                          ? n.jsx('div', {
                                                className: Ye.matches,
                                                children: F(3, (e) => {
                                                    const a = s[e];
                                                    return a
                                                        ? n.jsx(
                                                              Ke,
                                                              {
                                                                  startOfMatchTimestamp: a.startOfMatchTimestamp,
                                                                  bestOf: a.bestOf,
                                                                  team1Name: a.team1.teamName,
                                                                  team2Name: a.team2.teamName,
                                                                  team1Logos: a.team1.logos,
                                                                  team2Logos: a.team2.logos,
                                                                  matchStage: a.matchStage,
                                                              },
                                                              e,
                                                          )
                                                        : n.jsx(
                                                              'div',
                                                              {
                                                                  className: Ye.match,
                                                                  children: n.jsx('div', { className: Ye.border }),
                                                              },
                                                              e,
                                                          );
                                                }),
                                            })
                                          : n.jsx('div', {
                                                className: Ye.noMatches,
                                                children: R.strings.comp7_ext.wci.noMatches(),
                                            }),
                              }),
                          ],
                      }),
            ],
        });
    }),
    Xe = 'ShopBlock_56237e44',
    Ze = 'ShopBlock_background_8855934c',
    ea = 'ShopBlock_centerBorderCommon_72613a7a',
    aa = 'ShopBlock_outerBorderCommon_79d05d1d',
    ta = 'ShopBlock_innerBorderCommon_3a98eec0',
    sa = 'ShopBlock_content_9ecc6e7e',
    ia = 'ShopBlock_description_650b243a',
    na = 'ShopBlock_buttonWrapper_a5553d58',
    ra = R.strings.comp7_ext.wci,
    ca = i(() => {
        const { controls: e } = ee(),
            { mediaSize: a } = b();
        return n.jsxs('div', {
            className: Xe,
            children: [
                n.jsx('div', { className: ea }),
                n.jsx('div', { className: aa }),
                n.jsx('div', { className: ta }),
                n.jsx('div', { className: Ze }),
                n.jsxs('div', {
                    className: sa,
                    children: [
                        n.jsxs('div', {
                            children: [
                                ra.visitShop.heading(),
                                a >= N.Large && n.jsx(w, { text: ra.visitShop.description(), classMix: ia }),
                            ],
                        }),
                        n.jsx('div', {
                            className: na,
                            children: n.jsx(v, {
                                onClick: e.goToShop,
                                autoAlignContent: !1,
                                size: a >= N.Large ? v.sizes.medium : v.sizes.small,
                                children: ra.toShop(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    oa = {
        base: 'OverviewTabContent_b5815562',
        matchDetails: 'OverviewTabContent_matchDetails_a9aecb25',
        eventDetails: 'OverviewTabContent_eventDetails_5ff26e18',
        prizeFrame: 'OverviewTabContent_prizeFrame_a80b476a',
        frameBg: 'OverviewTabContent_frameBg_59bad249',
        text: 'OverviewTabContent_text_1f4aa79e',
        text__overflow: 'OverviewTabContent_text__overflow_24242dde',
        addition: 'OverviewTabContent_addition_bb457693',
        fadeIn: 'OverviewTabContent_fadeIn_77492658',
        fadeInThreeQuarters: 'OverviewTabContent_fadeInThreeQuarters_77492658',
        fadeInHalf: 'OverviewTabContent_fadeInHalf_77492658',
        fadeOut: 'OverviewTabContent_fadeOut_77492658',
        fadeInWithScale: 'OverviewTabContent_fadeInWithScale_77492658',
        slideUp: 'OverviewTabContent_slideUp_77492658',
        scale: 'OverviewTabContent_scale_77492658',
        raysAppearance: 'OverviewTabContent_raysAppearance_77492658',
        rotate: 'OverviewTabContent_rotate_77492658',
        'reverse-rotate': 'OverviewTabContent_reverse-rotate_77492658',
        glowAppearance: 'OverviewTabContent_glowAppearance_77492658',
        highlightAppearance: 'OverviewTabContent_highlightAppearance_77492658',
        blink: 'OverviewTabContent_blink_77492658',
        slideUpIn: 'OverviewTabContent_slideUpIn_77492658',
    },
    la = i(function () {
        const { model: e } = ee(),
            a = e.overviewState.get();
        return n.jsxs('div', {
            className: r(oa.base, oa[`base__${a}`]),
            children: [
                n.jsx('div', { className: oa.matchDetails, children: n.jsx(ke, {}) }),
                n.jsxs('div', {
                    className: oa.eventDetails,
                    children: [
                        a !== Q.FinalResult &&
                            n.jsxs('div', {
                                className: oa.prizeFrame,
                                children: [
                                    n.jsx(he, {}),
                                    n.jsx('div', { className: oa.frameBg }),
                                    n.jsx(w, {
                                        text: R.strings.comp7_ext.wci.prize(),
                                        binding: {
                                            addition: n.jsx(j, {
                                                content: R.strings.comp7_ext.wci.prizeAddition(),
                                                className: oa.addition,
                                            }),
                                        },
                                        classMix: r(oa.text, oa.text__overflow),
                                    }),
                                    a === Q.Error
                                        ? n.jsx('div', { className: oa.text, children: R.strings.comp7_ext.dash() })
                                        : n.jsx(w, {
                                              text: R.strings.comp7_ext.wci.cnySign(),
                                              binding: { amount: e.prizeFund.get() },
                                              classMix: oa.text,
                                          }),
                                ],
                            }),
                        n.jsx(ca, {}),
                        a === Q.FinalResult ? n.jsx(xe, {}) : n.jsx(Ve, {}),
                    ],
                }),
            ],
        });
    }),
    da = 'Counter_a16c7d25',
    _a = 'Counter_5b6ef903',
    ma = 'Counter_score_198f54c8',
    ha = 'Counter_score__winner_fdc5bffa',
    pa = 'Counter_separator_b7ec0c4a',
    xa = 'Counter_bestOf_4929e990',
    fa = i(function ({ isCompleted: e, team1Score: a, team2Score: t, bestOf: s }) {
        const i = a > t;
        return n.jsxs('div', {
            className: da,
            children: [
                e &&
                    n.jsxs('div', {
                        className: _a,
                        children: [
                            n.jsx('div', { className: r(ma, i && ha), children: a }),
                            n.jsx('div', { className: pa }),
                            n.jsx('div', { className: r(ma, !i && ha), children: t }),
                        ],
                    }),
                n.jsx(w, {
                    text: e ? R.strings.comp7_ext.wci.bestOf() : R.strings.comp7_ext.wci.vsBestOf(),
                    binding: { number: s },
                    classMix: xa,
                }),
            ],
        });
    }),
    ua = 'MatchByDate_50709007',
    ga = 'MatchByDate_match_84bbfae9',
    ba = 'MatchByDate_match__topFinals_4fe12474',
    va = 'MatchByDate_match__live_692d0659',
    Na = 'MatchByDate_border_af9334a2',
    ja = 'MatchByDate_logoWrapper_e52e6a64',
    Sa = 'MatchByDate_liveImage_ec9696ea',
    wa = 'MatchByDate_completed_6500368b',
    Ma = 'MatchByDate_matchType_be8b7ae0',
    Ta = 'MatchByDate_teams_6593dcc5',
    Ia = 'MatchByDate_glow_141054f4',
    Oa = 'MatchByDate_teamName_5ff4caf7',
    Fa = 'MatchByDate_time_11f525f2',
    La = 'MatchByDate_loser_90c34627',
    Aa = R.strings.comp7_ext.wci,
    Da = [Y.GrandFinals, Y.UBFinals, Y.LBFinals],
    ya = (e, a) => {
        switch (e) {
            case K.Completed:
                return n.jsx('div', { className: wa, children: Aa.completed() });
            case K.Live:
                return n.jsx('div', { className: Sa });
            case K.NotStarted:
                return n.jsx('div', { className: Fa, children: n.jsx(T, { datetime: a, format: I.ShortTime }) });
            default:
                return null;
        }
    },
    Ca = i(function ({ match: e }) {
        const { startOfMatchTimestamp: a, team1: t, team2: s, bestOf: i, matchState: c, matchStage: o } = e,
            l = c === K.Completed,
            d = t.score > s.score,
            _ = c === K.Live,
            m = c === K.NotStarted && Da.includes(o),
            { logoSize: h } = S(
                { logoSize: _ ? oe.x68 : oe.x48 },
                {
                    medium: { logoSize: _ ? oe.x68 : oe.x48 },
                    large: { logoSize: _ ? oe.x128 : oe.x68 },
                    extraLarge: { logoSize: _ ? oe.x128 : oe.x86 },
                },
            );
        return n.jsx('div', {
            className: ua,
            children: n.jsxs('div', {
                className: r(ga, m && ba, _ && va),
                children: [
                    n.jsx('div', { className: Na }),
                    n.jsxs('div', {
                        className: Ta,
                        children: [
                            ya(c, a),
                            n.jsxs('div', {
                                className: ja,
                                children: [
                                    d && l && n.jsx('div', { className: Ia }),
                                    n.jsx(le, {
                                        teamName: t.teamName,
                                        logos: t.logos,
                                        size: h,
                                        showIsWinner: d && l,
                                        className: r(!d && l && La),
                                        classNames: { teamName: Oa },
                                    }),
                                ],
                            }),
                            n.jsx(fa, { bestOf: i, isCompleted: l, team1Score: t.score, team2Score: s.score }),
                            n.jsxs('div', {
                                className: ja,
                                children: [
                                    !d && l && n.jsx('div', { className: Ia }),
                                    n.jsx(le, {
                                        teamName: s.teamName,
                                        logos: s.logos,
                                        size: h,
                                        showIsWinner: !d && l,
                                        className: r(d && l && La),
                                        classNames: { teamName: Oa },
                                    }),
                                ],
                            }),
                            n.jsx(w, { text: `${R.strings.comp7_ext.wci.$dyn(o)}`, classMix: Ma }),
                        ],
                    }),
                    _ && n.jsx(ge, {}),
                ],
            }),
        });
    }),
    za = 'ScheduleTabContent_6d083e2e',
    ka = 'ScheduleTabContent_base__withMask_fbcb0d72',
    Ba = 'ScheduleTabContent_date_76afd026',
    Ra = i(function () {
        const { model: a, controls: t } = ee(),
            s = a.computes.scheduleByDate(),
            i = a.hasScheduleScrolled.get(),
            r = e.useRef(null),
            d = o(U),
            [_, m] = e.useState(!1),
            { api: h } = L(),
            p = A(),
            x = e.useCallback(
                function () {
                    const e = h.getWrapperSize(),
                        a = h.animationScroll.scrollPosition.get(),
                        t = r.current;
                    if (!t || !e) return;
                    const s = t.offsetTop - e / 2 + t.getBoundingClientRect().height / 2;
                    (0 === a && s < 0) || a === s || h.applyScroll(s, { immediate: i });
                },
                [h, i],
            );
        (e.useEffect(() => {
            const e = (e) => {
                const a = e.value.scrollPosition;
                if (void 0 !== a) {
                    const [e, t] = h.getBounds();
                    m(a < t - 20);
                }
            };
            return (
                h.events.on('change', e),
                () => {
                    h.events.off('change', e);
                }
            );
        }, [h]),
            D(() => {
                (p.run(() => x()), t.setScheduleScrolled());
            }));
        const f = e.useCallback((e) => {
            e && !r.current && (r.current = e);
        }, []);
        return n.jsx(l.div, {
            className: c(za, _ && ka),
            style: d,
            children: n.jsx(y, {
                children: M(s, ({ dayTimestamp: e, matches: a }, t) => {
                    const i = t === s.length - 1;
                    return n.jsxs(
                        'div',
                        {
                            children: [
                                n.jsx('div', {
                                    className: Ba,
                                    children: n.jsx(T, { datetime: e, format: I.FullDate }),
                                }),
                                M(a, (e, t) => {
                                    const s = i && t === a.length - 1,
                                        r = e.matchState !== K.Completed || s;
                                    return n.jsx('div', { ref: r ? f : null, children: n.jsx(Ca, { match: e }) }, t);
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        });
    }),
    $a = {
        base: 'App_391ae810',
        slider: 'App_slider_87749c8a',
        buttonWrapper: 'App_buttonWrapper_bc918676',
        button: 'App_button_b6edc495',
        content: 'App_content_135f5b39',
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
    Wa = i(function () {
        const { model: e, controls: a } = ee(),
            t = e.currentTab.get(),
            s = e.overviewState.get(),
            i = e.pageState.get(),
            c = o(H),
            d = S({ tabSize: B.small }, { large: { tabSize: B.medium } });
        return (
            q(a.close),
            n.jsx(l.div, {
                className: r($a.base, $a[`base__${s}`]),
                style: c,
                children:
                    i === P.Loading
                        ? n.jsx(C, { message: R.strings.comp7_ext.waitingSpinner.message() })
                        : n.jsxs(z, {
                              active: t,
                              theme: 'primary',
                              size: d.tabSize,
                              onActiveChange: a.updateCurrentTabId,
                              children: [
                                  n.jsxs(z.Switcher, {
                                      children: [
                                          n.jsx(
                                              z.Tab,
                                              {
                                                  tabId: V,
                                                  className: $a.tab,
                                                  children: `${R.strings.comp7_ext.wci.tab.$dyn(V)}`,
                                              },
                                              `tab_${V}`,
                                          ),
                                          n.jsx(
                                              z.Tab,
                                              {
                                                  tabId: X,
                                                  className: $a.tab,
                                                  children: `${R.strings.comp7_ext.wci.tab.$dyn(X)}`,
                                              },
                                              `tab_${X}`,
                                          ),
                                      ],
                                  }),
                                  n.jsx(z.Content, {
                                      children: (e) => {
                                          switch (e) {
                                              case V:
                                                  return n.jsx(la, {});
                                              case X:
                                                  return s === Q.Error
                                                      ? n.jsx(re, {})
                                                      : n.jsx(k, { children: n.jsx(Ra, {}) });
                                              default:
                                                  return (console.error('Unreachable branch in tabs'), null);
                                          }
                                      },
                                  }),
                              ],
                          }),
            })
        );
    });
$(n.jsx(W, { children: n.jsx(Z, { children: n.jsx(Wa, {}) }) }), { fullScreen: !0 });
