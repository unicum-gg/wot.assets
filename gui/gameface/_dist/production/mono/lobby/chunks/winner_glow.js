import { r as e, a0 as a, V as t, T as s, I as n, j as r, f as o, S as i, Q as c } from './vendor.js';
import {
    d_ as l,
    d$ as d,
    i as m,
    d2 as _,
    bz as h,
    e0 as u,
    by as p,
    cl as g,
    e1 as x,
    ad as f,
    aK as b,
    a9 as v,
    cr as N,
    co as j,
    as as S,
    ab as w,
    cv as I,
    da as T,
    db as M,
    aw as O,
    cs as F,
    m as y,
    ai as A,
    aL as L,
    M as C,
    a0 as D,
    dc as z,
    cN as k,
    V as B,
    cP as $,
} from './lib.js';
import { I as W, P as U } from './consts.js';
import { D as P } from './divine_glow.js';
import { A as H } from './animated_background.js';
var E = ((e) => ((e.OLS = 'ols'), (e.WCI = 'wci'), (e.NONE = ''), e))(E || {});
const Q = e.createContext({
        mainBgPath: '',
        blurBgPath: '',
        prizeFrameBgPath: '',
        topMatchGlowPath: '',
        winnerGlowPath: '',
        liveBgPath: { small: '', medium: '', large: '', extraLarge: '' },
        shopFramePath: { extraSmall: '', small: '', medium: '', large: '', extraLarge: '' },
        currencySign: '',
        currencyText: '',
        visitShopHeading: '',
        visitShopDescription: '',
        roundRobinText: '',
        tournamentName: '',
        winnerGlowComponent: null,
    }),
    G = () => {
        const a = e.useContext(Q);
        return (
            a || console.error('useDependencies hook was called with data from TournamentViewDIContext.Provider'),
            a
        );
    };
var q = ((e) => (
        (e.Schedule = 'schedule'),
        (e.Live = 'live'),
        (e.FinalResult = 'finalResult'),
        (e.Error = 'error'),
        e
    ))(q || {}),
    V = ((e) => ((e.Loading = 'loading'), (e.Content = 'content'), e))(V || {});
const K = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function J(a) {
    !(function (a = l.NONE, t = K, s = !1, n = !1) {
        e.useEffect(() => {
            if (a !== l.NONE)
                return (
                    window.addEventListener('keydown', e, s),
                    () => {
                        window.removeEventListener('keydown', e, s);
                    }
                );
            function e(e) {
                if (e.keyCode === a) {
                    if (!n && d.view.isEventHandled()) return;
                    (d.view.setEventHandled(), t(e), s && e.stopPropagation());
                }
            }
        }, [t, a, s, n]);
    })(l.ESCAPE, a);
}
var X = ((e) => ((e.NotStarted = 'notStarted'), (e.Completed = 'completed'), (e.Live = 'live'), e))(X || {}),
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
function Z(e) {
    const t = {};
    for (const s in e)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
            const n = e[s];
            t[s] = a(n);
        }
    return t;
}
const ee = 'overview',
    ae = 'schedule',
    [te, se] = m()(
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
                    currentTab: t.box(ee),
                    hasScheduleAnimated: t.box(!1),
                },
                n = s(
                    () => {
                        const e = a.overviewState.get() === q.Live ? 0 : 1,
                            t = 3 + e;
                        return h(a.schedule.get(), (e) => e.matchState === X.NotStarted).slice(e, t);
                    },
                    { equals: _ },
                ),
                r = s(
                    () => {
                        switch (a.overviewState.get()) {
                            case q.Live:
                                return p(a.schedule.get(), (e) => e.matchState === X.Live);
                            case q.Schedule:
                                return p(a.schedule.get(), (e) => e.matchState === X.NotStarted);
                            case q.FinalResult:
                                return u(a.schedule.get());
                            default:
                                return null;
                        }
                    },
                    { equals: _ },
                ),
                o = s(
                    () => {
                        const e = new Map();
                        return (
                            g(a.schedule.get(), (a) => {
                                const t = new Date(1e3 * a.startOfMatchTimestamp);
                                t.setHours(0, 0, 0, 0);
                                const s = Math.floor(t.getTime() / 1e3);
                                (e.has(s) || e.set(s, []), x(e.get(s), a));
                            }),
                            Array.from(e.entries()).map(([e, a]) => ({
                                dayTimestamp: e,
                                matches: a,
                                isCompleted: f(a, ({ matchState: e }) => e === X.Completed),
                            }))
                        );
                    },
                    { equals: _ },
                );
            return { ...a, computes: { closestMatches: n, scheduleByDate: o, overviewMainMatch: r } };
        },
        ({ model: e, externalModel: a }) => ({
            watchStreamingOne: a.createCallbackNoArgs('onWatchStreamingOne'),
            watchStreamingTwo: a.createCallbackNoArgs('onWatchStreamingTwo'),
            goToShop: a.createCallbackNoArgs('onGoToShop'),
            refresh: a.createCallbackNoArgs('onRefresh'),
            goToTokenStore: a.createCallbackNoArgs('onGoToTokenStore'),
            close: a.createCallbackNoArgs('onClose'),
            ...Z({
                updateCurrentTabId: (a) => {
                    e.currentTab.set(a);
                },
                setScheduleAnimated: () => {
                    e.hasScheduleAnimated.set(!0);
                },
            }),
        }),
    ),
    ne = 'Error_c5522e93',
    re = 'Error_gears_15e3b263',
    oe = 'Error_comeBack_b7a2fb47',
    ie = 'Error_refreshIcon_7f41dcf9',
    ce = 'Error_refreshIcon__refreshing_412c83fa',
    le = n(function () {
        const { model: e, controls: a } = se(),
            t = e.isRefreshing.get(),
            { mediaSize: s } = b();
        return r.jsxs('div', {
            className: ne,
            children: [
                r.jsx('div', { className: re }),
                R.strings.comp7_ext.tournament.error(),
                r.jsx('div', { className: oe, children: R.strings.comp7_ext.tournament.comeBack() }),
                r.jsxs(v, {
                    theme: v.themes.secondary,
                    onClick: a.refresh,
                    size: s >= N.Large ? v.sizes.medium : v.sizes.small,
                    autoAlignContent: !1,
                    disabled: t,
                    children: [
                        r.jsx('div', { className: o(ie, t && ce) }),
                        t ? R.strings.comp7_ext.tournament.refreshing() : R.strings.comp7_ext.tournament.refresh(),
                    ],
                }),
            ],
        });
    }),
    de = 'Frame_centerBorderCommon_d2f72236',
    me = 'Frame_outerBorderCommon_23b37900',
    _e = 'Frame_innerBorderCommon_ffa760cd',
    he = () =>
        r.jsxs(r.Fragment, {
            children: [
                r.jsx('div', { className: de }),
                r.jsx('div', { className: me }),
                r.jsx('div', { className: _e }),
            ],
        }),
    ue = {
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
        teamName: 'TeamLogo_teamName_89587bec',
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
var pe = ((e) => (
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
))(pe || {});
const ge = ({
        teamName: e = '',
        logos: a,
        size: t = 'x38',
        showIsWinner: s = !1,
        showTeamName: n = !0,
        className: i,
        classNames: c,
    }) => {
        const { tournamentName: l } = G(),
            d = ((e, a, t) => {
                const s = R.images.comp7.gui.maps.icons.tournaments.$dyn(t);
                switch (a) {
                    case 'x28':
                    case 'x38':
                    case 'x48':
                        return e.x48 || s.$dyn('placeholder_x48');
                    case 'x68':
                    case 'x86':
                        return e.x86 || s.$dyn('placeholder_x86');
                    case 'x128':
                    case 'x192':
                    case 'x262':
                        return e.x260;
                    case 'x366':
                    case 'x522':
                        return e.x522;
                }
            })(a, t, l);
        return r.jsxs('div', {
            className: o(ue.base, ue[`base__${t}`], i),
            children: [
                r.jsx('div', { className: ue.image, style: { backgroundImage: `url(${d})` } }),
                n &&
                    r.jsx(j, {
                        text: e || R.strings.comp7_ext.tournament.teamPlaceholder(),
                        classMix: o(ue.teamName, null == c ? void 0 : c.teamName),
                    }),
                s && r.jsx('div', { className: ue.winner, children: R.strings.comp7_ext.tournament.winner() }),
            ],
        });
    },
    xe = {
        base: 'FundDistribution_8ba2417b',
        heading: 'FundDistribution_heading_765686bb',
        team: 'FundDistribution_team_d242da75',
        team__position1: 'FundDistribution_team__position1_a51ae262',
        team__position2: 'FundDistribution_team__position2_42cf8fc2',
        team__position3: 'FundDistribution_team__position3_3267b599',
        place: 'FundDistribution_place_4e794bf',
        schedule: 'FundDistribution_schedule_4257e4d6',
        prize: 'FundDistribution_prize_725e894b',
        border: 'FundDistribution_border_46bc667',
        logo: 'FundDistribution_logo_5d5f7edd',
        teamName: 'FundDistribution_teamName_9f67286c',
        text: 'FundDistribution_text_de9a6323',
        gradientText: 'FundDistribution_gradientText_969622e6',
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
    fe = { teamName: xe.teamName },
    be = n(function () {
        const { model: e } = se(),
            a = e.overviewState.get(),
            t = e.fundDistribution.get(),
            { currencyText: s } = G(),
            { logoSize: n } = S(
                { logoSize: pe.x28 },
                { medium: { logoSize: pe.x28 }, large: { logoSize: pe.x38 }, extraLarge: { logoSize: pe.x48 } },
            );
        return r.jsxs('div', {
            className: o(xe.base, xe[`base__${a}`]),
            children: [
                r.jsx(he, {}),
                r.jsx(j, { text: R.strings.comp7_ext.tournament.fundDistribution(), classMix: xe.heading }),
                r.jsx('div', {
                    className: xe.schedule,
                    children: w(
                        t,
                        ({ teamName: e, logos: a, prize: t, sharedPositionFrom: i, sharedPositionTo: c }, l) => {
                            const d =
                                c > i
                                    ? I(R.strings.comp7_ext.tournament.placement(), { firstPlace: i, secondPlace: c })
                                    : i;
                            return r.jsxs(
                                'div',
                                {
                                    className: o(xe.team, xe[`team__position${i}`]),
                                    children: [
                                        r.jsx('div', { className: xe.border }),
                                        r.jsxs('div', {
                                            className: xe.place,
                                            children: [
                                                r.jsx('div', { className: xe.text, children: d }),
                                                r.jsx('div', { className: xe.gradientText, children: d }),
                                            ],
                                        }),
                                        r.jsx(ge, {
                                            teamName: e,
                                            logos: a,
                                            size: n,
                                            className: xe.logo,
                                            classNames: fe,
                                        }),
                                        r.jsx(j, { text: s, binding: { amount: t }, classMix: xe.prize }),
                                    ],
                                },
                                l,
                            );
                        },
                    ),
                }),
            ],
        });
    }),
    ve = {
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
    Ne = n(function ({ buttonSize: e = v.sizes.extraSmall, showSeparator: a = !1 }) {
        const { model: t, controls: s } = se(),
            n = t.streamingWithDrops.get(),
            i = t.streamingWithoutDrops.get(),
            c = t.currentTab.get();
        return r.jsxs('div', {
            className: o(ve.base, ve[`base__${c}`]),
            children: [
                r.jsxs('div', {
                    className: ve.streamingOneContainer,
                    children: [
                        r.jsx('div', {
                            className: ve.buttonWrapper,
                            children: r.jsxs(v, {
                                onClick: s.watchStreamingOne,
                                size: e,
                                autoAlignContent: !1,
                                children: [
                                    r.jsx('div', {
                                        className: ve.streamingIcon,
                                        style: {
                                            backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${n}`)})`,
                                        },
                                    }),
                                    `${R.strings.comp7_ext.tournament.$dyn(n)}`,
                                ],
                            }),
                        }),
                        r.jsxs('div', {
                            className: ve.streamingOne,
                            children: [
                                r.jsx('div', {
                                    className: ve.box,
                                    style: {
                                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${n}_box`)})`,
                                    },
                                }),
                                r.jsx(j, { text: `${R.strings.comp7_ext.tournament.dropsShort.$dyn(n)}` }),
                            ],
                        }),
                    ],
                }),
                a && r.jsx('div', { className: ve.text, children: R.strings.comp7_ext.tournament.separator() }),
                r.jsxs(v, {
                    onClick: s.watchStreamingTwo,
                    theme: v.themes.secondary,
                    size: e,
                    autoAlignContent: !1,
                    className: o(!a && ve.button),
                    children: [
                        r.jsx('div', {
                            className: ve.streamingIcon,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${i}`)})`,
                            },
                        }),
                        `${R.strings.comp7_ext.tournament.$dyn(i)}`,
                    ],
                }),
            ],
        });
    }),
    je = 'Footer_drops_9f07e1ee',
    Se = 'Footer_box_c9efab86',
    we = 'Footer_finalResult_846f6844',
    Ie = 'Footer_separator_85aaf997',
    Te = 'Footer_result_7805495d',
    Me = 'Footer_counter_f418ad46',
    Oe = 'Footer_score_e2ed58a4',
    Fe = 'Footer_score__winner_fce912eb',
    ye = 'Footer_teamLogo_4d32a058',
    Ae = 'Footer_teamLogo__loser_df3967bf',
    Le = n(function ({ team1: e, team2: a, bestOf: t }) {
        const { model: s } = se(),
            n = s.overviewState.get(),
            i = s.streamingWithDrops.get(),
            c = e.score > a.score,
            { size: l } = S(
                { size: v.sizes.small },
                {
                    medium: { size: v.sizes.small },
                    large: { size: v.sizes.medium },
                    extraLarge: { size: v.sizes.large },
                },
            );
        switch (n) {
            case q.Schedule:
                return r.jsxs('div', {
                    className: je,
                    children: [
                        r.jsx('div', {
                            className: Se,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${i}_box`)})`,
                            },
                        }),
                        r.jsx(j, { text: `${R.strings.comp7_ext.tournament.drops.$dyn(i)}` }),
                    ],
                });
            case q.Live:
                return r.jsx(Ne, { buttonSize: l, showSeparator: !0 });
            case q.FinalResult:
                return r.jsxs('div', {
                    className: we,
                    children: [
                        r.jsx(ge, { logos: e.logos, teamName: e.teamName, size: pe.x68, className: o(ye, !c && Ae) }),
                        r.jsxs('div', {
                            className: Te,
                            children: [
                                r.jsxs('div', {
                                    className: Me,
                                    children: [
                                        r.jsx('div', { className: o(Oe, c && Fe), children: e.score }),
                                        r.jsx('div', { className: Ie }),
                                        r.jsx('div', { className: o(Oe, !c && Fe), children: a.score }),
                                    ],
                                }),
                                r.jsx(j, {
                                    text: R.strings.comp7_ext.tournament.bestOf(),
                                    binding: { number: t },
                                    classMix: Oe,
                                }),
                            ],
                        }),
                        r.jsx(ge, { logos: a.logos, teamName: a.teamName, size: pe.x68, className: o(ye, c && Ae) }),
                    ],
                });
            default:
                return null;
        }
    }),
    Ce = ({ phase: e, round: a, matchStage: t, className: s }) => {
        const { roundRobinText: n } = G();
        return r.jsx(j, {
            text: t === Y.RoundRobin ? n : `${R.strings.comp7_ext.tournament.$dyn(t)}`,
            binding: { phase: e, round: a },
            classMix: s,
        });
    },
    De = {
        base: 'Header_9d5dc26e',
        base__finalResult: 'Header_base__finalResult_b495a828',
        date: 'Header_date_87641df0',
        winner: 'Header_winner_904d1ca6',
        time: 'Header_time_8262ce62',
        live: 'Header_live_3a671f8e',
    },
    ze = function ({
        team1: e,
        team2: a,
        phase: t,
        round: s,
        startOfMatchTimestamp: n,
        matchStage: i,
        overviewState: c,
        className: l,
    }) {
        const d = e.score > a.score;
        switch (c) {
            case q.Schedule:
                return r.jsxs('div', {
                    className: o(De.base, l),
                    children: [
                        r.jsx(Ce, { matchStage: i, phase: t, round: s, className: De.round }),
                        r.jsxs('div', {
                            className: De.date,
                            children: [
                                r.jsx(T, { datetime: n, format: M.DayMonthAbbreviated }),
                                r.jsx('div', {
                                    className: De.time,
                                    children: r.jsx(T, { datetime: n, format: M.ShortTime }),
                                }),
                            ],
                        }),
                    ],
                });
            case q.Live:
                return r.jsxs('div', {
                    className: o(De.base, l),
                    children: [
                        r.jsx(Ce, { matchStage: i, phase: t, round: s, className: De.round }),
                        r.jsx('div', { className: De.live }),
                    ],
                });
            case q.FinalResult:
                return r.jsxs('div', {
                    className: o(De.base, De.base__finalResult, l),
                    children: [
                        r.jsx(j, { text: R.strings.comp7_ext.tournament.finalResult(), classMix: De.round }),
                        r.jsx('div', { className: De.winner, children: d ? e.teamName : a.teamName }),
                    ],
                });
            default:
                return null;
        }
    },
    ke = {
        base: 'Opponents_d0bb1f11',
        winner: 'Opponents_winner_ed3cb552',
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
    Re = n(function ({ team1: e, team2: a, bestOf: t }) {
        const { model: s } = se(),
            { winnerGlowComponent: n } = G(),
            i = s.overviewState.get(),
            c = S(
                { logoSize: [pe.x192, pe.x262] },
                {
                    medium: { logoSize: [pe.x192, pe.x366] },
                    large: { logoSize: [pe.x366, pe.x522] },
                    extraLarge: { logoSize: [pe.x522, pe.x522] },
                },
            ),
            [l, d] = c.logoSize;
        return r.jsx('div', {
            className: o(ke.base, ke[`base__${i}`]),
            children:
                i === q.FinalResult
                    ? r.jsxs('div', {
                          className: ke.winner,
                          children: [
                              n,
                              r.jsx(ge, { logos: e.score > a.score ? e.logos : a.logos, size: d, showTeamName: !1 }),
                          ],
                      })
                    : r.jsxs(r.Fragment, {
                          children: [
                              r.jsx(ge, { logos: e.logos, teamName: e.teamName, size: l }),
                              r.jsx('div', {
                                  className: ke.textWrapper,
                                  children: r.jsx(j, {
                                      text: R.strings.comp7_ext.tournament.vsBestOf(),
                                      binding: { number: t },
                                      classMix: ke.bestOf,
                                  }),
                              }),
                              r.jsx(ge, { logos: a.logos, teamName: a.teamName, size: l }),
                          ],
                      }),
        });
    }),
    Be = {
        base: 'MatchDetails_9e0f98f8',
        header: 'MatchDetails_header_89346ded',
        base__live: 'MatchDetails_base__live_bf32d099',
        content: 'MatchDetails_content_b78c981e',
        bg: 'MatchDetails_bg_5ce084cd',
        bg__ols: 'MatchDetails_bg__ols_bcbcaa0e',
        base__finalResult: 'MatchDetails_base__finalResult_bf32d099',
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
    $e = n(function () {
        const { model: e } = se(),
            a = e.overviewState.get(),
            t = e.computes.overviewMainMatch(),
            { tournamentName: s, mainBgPath: n } = G();
        if (a === q.Error || !t) return r.jsx(le, {});
        const { team1: i, team2: c, bestOf: l } = t;
        return r.jsxs('div', {
            className: o(Be.base, Be[`base__${a}`]),
            children: [
                r.jsx('div', { className: o(Be.bg, Be[`bg__${s}`]), style: { backgroundImage: `url('${n}')` } }),
                r.jsxs('div', {
                    className: Be.content,
                    children: [
                        r.jsx(ze, { ...t, overviewState: a, className: Be.header }),
                        r.jsx(Re, { team1: i, team2: c, bestOf: l }),
                        r.jsx(Le, { team1: i, team2: c, bestOf: l }),
                    ],
                }),
            ],
        });
    }),
    We = 'NextMatch_761307a6',
    Ue = 'NextMatch_date_324e5a0a',
    Pe = 'NextMatch_time_73b66f84',
    He = 'NextMatch_teams_d8219813',
    Ee = 'NextMatch_teamName_df96bd91',
    Qe = 'NextMatch_textWrapper_6dd0aab3',
    Ge = 'NextMatch_bestOf_412f98dd',
    qe = 'NextMatch_matchType_5bb91584',
    Ve = [Y.GrandFinals, Y.UBFinals, Y.LBFinals],
    Ke = { teamName: Ee },
    Je = function ({
        startOfMatchTimestamp: e,
        team1: a,
        team2: t,
        bestOf: s,
        matchStage: n,
        phase: i,
        round: c,
        className: l,
    }) {
        const { topMatchGlowPath: d } = G(),
            { logoSize: m } = S(
                { logoSize: pe.x48 },
                { medium: { logoSize: pe.x48 }, large: { logoSize: pe.x68 }, extraLarge: { logoSize: pe.x86 } },
            );
        return r.jsxs('div', {
            className: o(We, l),
            style: { backgroundImage: Ve.includes(n) ? `url(${d})` : '' },
            children: [
                r.jsxs('div', {
                    className: Ue,
                    children: [
                        r.jsx(T, { datetime: e, format: M.DayMonthAbbreviated }),
                        r.jsx('div', { className: Pe, children: r.jsx(T, { datetime: e, format: M.ShortTime }) }),
                    ],
                }),
                r.jsxs('div', {
                    className: He,
                    children: [
                        r.jsx(ge, { teamName: a.teamName, logos: a.logos, size: m, classNames: Ke }),
                        r.jsx('div', {
                            className: Qe,
                            children: r.jsx(O, {
                                text: R.strings.comp7_ext.tournament.vsBestOf(),
                                params: { number: s },
                                className: Ge,
                                upgradeLegacy: !0,
                            }),
                        }),
                        r.jsx(ge, { teamName: t.teamName, logos: t.logos, size: m, classNames: Ke }),
                    ],
                }),
                r.jsx('div', { children: r.jsx(Ce, { matchStage: n, phase: i, round: c, className: qe }) }),
            ],
        });
    },
    Xe = {
        base: 'Schedule_95e67fc5',
        heading: 'Schedule_heading_a10ef5e3',
        noMatches: 'Schedule_noMatches_369ed951',
        addition: 'Schedule_addition_2d0c6aac',
        comingSoon: 'Schedule_comingSoon_831fa506',
        matches: 'Schedule_matches_c2756eaa',
        schedule: 'Schedule_b85b482a',
        container: 'Schedule_container_6aaf031b',
        comeBack: 'Schedule_comeBack_9ea73a67',
        match: 'Schedule_match_79271803',
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
    Ye = n(function ({ className: a }) {
        const { model: t, controls: s } = se(),
            n = t.overviewState.get(),
            i = t.computes.closestMatches(),
            { mediaSize: c } = b();
        return r.jsxs('div', {
            className: o(Xe.base, Xe[`base__${n}`], a),
            children: [
                r.jsx(he, {}),
                n === q.Error
                    ? r.jsx('div', {
                          className: Xe.schedule,
                          children: r.jsxs('div', {
                              className: Xe.container,
                              children: [
                                  R.strings.comp7_ext.tournament.error(),
                                  r.jsx('div', {
                                      className: Xe.comeBack,
                                      children: R.strings.comp7_ext.tournament.comeBack(),
                                  }),
                              ],
                          }),
                      })
                    : r.jsxs(r.Fragment, {
                          children: [
                              r.jsxs('div', {
                                  className: Xe.heading,
                                  children: [
                                      r.jsx(j, {
                                          text: R.strings.comp7_ext.tournament.comingSoon(),
                                          classMix: Xe.comingSoon,
                                          binding: {
                                              addition:
                                                  i.length > 0 &&
                                                  r.jsx(F, {
                                                      content: R.strings.comp7_ext.tournament.comingSoonAddition(),
                                                      className: Xe.addition,
                                                  }),
                                          },
                                      }),
                                      r.jsx(v, {
                                          theme: v.themes.secondary,
                                          onClick: () => s.updateCurrentTabId(ae),
                                          size: c >= N.Large ? v.sizes.medium : v.sizes.small,
                                          autoAlignContent: !1,
                                          children: R.strings.comp7_ext.tournament.viewFull(),
                                      }),
                                  ],
                              }),
                              r.jsx('div', {
                                  className: Xe.schedule,
                                  children:
                                      i.length > 0
                                          ? r.jsx('div', {
                                                className: Xe.matches,
                                                children: y(3, (a) => {
                                                    const t = i[a];
                                                    return (
                                                        t &&
                                                        e.createElement(Je, {
                                                            ...t,
                                                            className: o(a < 2 && Xe.match),
                                                            key: a,
                                                        })
                                                    );
                                                }),
                                            })
                                          : r.jsx('div', {
                                                className: Xe.noMatches,
                                                children: R.strings.comp7_ext.tournament.noMatches(),
                                            }),
                              }),
                          ],
                      }),
            ],
        });
    }),
    Ze = 'ShopBlock_8f055a9e',
    ea = 'ShopBlock_background_27d8781c',
    aa = 'ShopBlock_content_ec069a9d',
    ta = 'ShopBlock_description_9d99ec10',
    sa = 'ShopBlock_buttonWrapper_a5da9ae8',
    na = n(() => {
        const { controls: e } = se(),
            { shopFramePath: a, visitShopHeading: t, visitShopDescription: s } = G(),
            { mediaSize: n } = b(),
            { shopIcon: o } = S(
                { shopIcon: a.extraSmall },
                {
                    small: { shopIcon: a.small },
                    medium: { shopIcon: a.medium },
                    large: { shopIcon: a.large },
                    extraLarge: { shopIcon: a.extraLarge },
                },
            );
        return r.jsxs('div', {
            className: Ze,
            children: [
                r.jsx(he, {}),
                r.jsx('div', { className: ea, style: { backgroundImage: `url('${o}')` } }),
                r.jsxs('div', {
                    className: aa,
                    children: [
                        r.jsxs('div', { children: [t, n >= N.Large && r.jsx(j, { text: s, classMix: ta })] }),
                        r.jsx('div', {
                            className: sa,
                            children: r.jsx(v, {
                                onClick: e.goToShop,
                                autoAlignContent: !1,
                                size: n >= N.Large ? v.sizes.medium : v.sizes.small,
                                children: R.strings.comp7_ext.tournament.toShop(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ra = 'TokenStore_1ec98ed6',
    oa = 'TokenStore_background_8bf67484',
    ia = 'TokenStore_content_3b0a9561',
    ca = 'TokenStore_buttonWrapper_a751996c',
    la = n(({ className: e }) => {
        const { controls: a } = se(),
            { mediaSize: t } = b();
        return r.jsxs('div', {
            className: o(ra, e),
            children: [
                r.jsx(he, {}),
                r.jsx('div', { className: oa }),
                r.jsxs('div', {
                    className: ia,
                    children: [
                        R.strings.comp7_ext.tournament.tokenStore.ols(),
                        r.jsx('div', {
                            className: ca,
                            children: r.jsx(v, {
                                onClick: a.goToTokenStore,
                                autoAlignContent: !1,
                                theme: v.themes.secondary,
                                size: t >= N.Large ? v.sizes.medium : v.sizes.small,
                                children: R.strings.comp7_ext.tournament.tokenStore.button.ols(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    da = {
        base: 'OverviewTabContent_b5815562',
        matchDetails: 'OverviewTabContent_matchDetails_a9aecb25',
        eventDetails: 'OverviewTabContent_eventDetails_5ff26e18',
        prizeFrame: 'OverviewTabContent_prizeFrame_d30a6b33',
        frameBg: 'OverviewTabContent_frameBg_59bad249',
        text: 'OverviewTabContent_text_1f4aa79e',
        text__overflow: 'OverviewTabContent_text__overflow_24242dde',
        addition: 'OverviewTabContent_addition_bb457693',
        schedule: 'OverviewTabContent_schedule_dcf34407',
        container: 'OverviewTabContent_container_6c92dd42',
        tokenStore: 'OverviewTabContent_tokenStore_e4307878',
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
    ma = n(function () {
        const { model: e } = se(),
            a = e.overviewState.get(),
            { prizeFrameBgPath: t, tournamentName: s, currencySign: n } = G();
        return r.jsxs('div', {
            className: o(da.base, da[`base__${a}`]),
            children: [
                r.jsx('div', { className: da.matchDetails, children: r.jsx($e, {}) }),
                r.jsxs('div', {
                    className: da.eventDetails,
                    children: [
                        a !== q.FinalResult &&
                            r.jsxs('div', {
                                className: da.prizeFrame,
                                children: [
                                    r.jsx(he, {}),
                                    r.jsx('div', { className: da.frameBg, style: { backgroundImage: `url('${t}')` } }),
                                    r.jsx(j, {
                                        text: R.strings.comp7_ext.tournament.prize(),
                                        binding: {
                                            addition: r.jsx(F, {
                                                content: R.strings.comp7_ext.tournament.prizeAddition(),
                                                className: da.addition,
                                            }),
                                        },
                                        classMix: o(da.text, da.text__overflow),
                                    }),
                                    a === q.Error
                                        ? r.jsx('div', { className: da.text, children: R.strings.comp7_ext.dash() })
                                        : r.jsx(j, {
                                              text: n,
                                              binding: { amount: e.prizeFund.get() },
                                              classMix: da.text,
                                          }),
                                ],
                            }),
                        r.jsxs('div', {
                            className: da.container,
                            children: [r.jsx(na, {}), s === E.OLS && r.jsx(la, { className: da.tokenStore })],
                        }),
                        a === q.FinalResult ? r.jsx(be, {}) : r.jsx(Ye, { className: da.schedule }),
                    ],
                }),
            ],
        });
    }),
    _a = 'Counter_a16c7d25',
    ha = 'Counter_5b6ef903',
    ua = 'Counter_score_198f54c8',
    pa = 'Counter_score__winner_fdc5bffa',
    ga = 'Counter_separator_b7ec0c4a',
    xa = 'Counter_bestOf_4929e990',
    fa = n(function ({ isCompleted: e, team1Score: a, team2Score: t, bestOf: s }) {
        const n = a > t;
        return r.jsxs('div', {
            className: _a,
            children: [
                e &&
                    r.jsxs('div', {
                        className: ha,
                        children: [
                            r.jsx('div', { className: o(ua, n && pa), children: a }),
                            r.jsx('div', { className: ga }),
                            r.jsx('div', { className: o(ua, !n && pa), children: t }),
                        ],
                    }),
                r.jsx(j, {
                    text: e ? R.strings.comp7_ext.tournament.bestOf() : R.strings.comp7_ext.tournament.vsBestOf(),
                    binding: { number: s },
                    classMix: xa,
                }),
            ],
        });
    }),
    ba = 'MatchByDate_50709007',
    va = 'MatchByDate_match_967a5c63',
    Na = 'MatchByDate_match__topFinals_8944c4ce',
    ja = 'MatchByDate_match__live_33ff8dd0',
    Sa = 'MatchByDate_border_af9334a2',
    wa = 'MatchByDate_logoWrapper_e52e6a64',
    Ia = 'MatchByDate_liveImage_ec9696ea',
    Ta = 'MatchByDate_completed_6500368b',
    Ma = 'MatchByDate_matchType_c1acb88b',
    Oa = 'MatchByDate_teams_6593dcc5',
    Fa = 'MatchByDate_glow_7e4b4988',
    ya = 'MatchByDate_teamName_233c3b64',
    Aa = 'MatchByDate_time_11f525f2',
    La = 'MatchByDate_loser_90c34627',
    Ca = [Y.GrandFinals, Y.UBFinals, Y.LBFinals],
    Da = { teamName: ya },
    za = (e, a) => {
        switch (e) {
            case X.Completed:
                return r.jsx('div', { className: Ta, children: R.strings.comp7_ext.tournament.completed() });
            case X.Live:
                return r.jsx('div', { className: Ia });
            case X.NotStarted:
                return r.jsx('div', { className: Aa, children: r.jsx(T, { datetime: a, format: M.ShortTime }) });
            default:
                return null;
        }
    },
    ka = function ({ match: e }) {
        const {
                startOfMatchTimestamp: a,
                team1: t,
                team2: s,
                bestOf: n,
                matchState: i,
                matchStage: c,
                phase: l,
                round: d,
            } = e,
            m = i === X.Completed,
            _ = t.score > s.score,
            h = i === X.Live,
            { liveBgPath: u, winnerGlowPath: p, topMatchGlowPath: g } = G(),
            x = i === X.NotStarted && Ca.includes(c),
            { logoSize: f, liveImage: b } = S(
                { logoSize: h ? pe.x68 : pe.x48, liveImage: u.small },
                {
                    medium: { logoSize: h ? pe.x68 : pe.x48, liveImage: u.medium },
                    large: { logoSize: h ? pe.x128 : pe.x68, liveImage: u.large },
                    extraLarge: { logoSize: h ? pe.x128 : pe.x86, liveImage: u.extraLarge },
                },
            );
        return r.jsx('div', {
            className: ba,
            children: r.jsxs('div', {
                className: o(va, x && Na, h && ja),
                style: { backgroundImage: (x && `url('${g}')`) || (h && `url('${b}')`) || '' },
                children: [
                    r.jsx('div', { className: Sa }),
                    r.jsxs('div', {
                        className: Oa,
                        children: [
                            za(i, a),
                            r.jsxs('div', {
                                className: wa,
                                children: [
                                    _ && m && r.jsx('div', { className: Fa, style: { backgroundImage: `url(${p})` } }),
                                    r.jsx(ge, {
                                        teamName: t.teamName,
                                        logos: t.logos,
                                        size: f,
                                        showIsWinner: _ && m,
                                        className: o(!_ && m && La),
                                        classNames: Da,
                                    }),
                                ],
                            }),
                            r.jsx(fa, { bestOf: n, isCompleted: m, team1Score: t.score, team2Score: s.score }),
                            r.jsxs('div', {
                                className: wa,
                                children: [
                                    !_ && m && r.jsx('div', { className: Fa, style: { backgroundImage: `url(${p})` } }),
                                    r.jsx(ge, {
                                        teamName: s.teamName,
                                        logos: s.logos,
                                        size: f,
                                        showIsWinner: !_ && m,
                                        className: o(_ && m && La),
                                        classNames: Da,
                                    }),
                                ],
                            }),
                            r.jsx(Ce, { matchStage: c, phase: l, round: d, className: Ma }),
                        ],
                    }),
                    h && r.jsx(Ne, {}),
                ],
            }),
        });
    },
    Ra = 'DailySchedule_date_a677e43d',
    Ba = 'DailySchedule_arrow_79f2d923',
    $a = function ({
        isCompleted: a,
        dayTimestamp: t,
        matches: s,
        isLastDay: n,
        setNearestMatchRef: o,
        onAnimationEnd: i,
        immediate: c,
    }) {
        const [l, d] = e.useState(!a);
        return r.jsxs(A, {
            opened: l,
            children: [
                r.jsxs(A.Summary, {
                    className: Ra,
                    onClick: () => d(!l),
                    children: [r.jsx(A.Arrow, { className: Ba }), r.jsx(T, { datetime: t, format: M.FullDate })],
                }),
                r.jsx(A.AnimatedDetails, {
                    animationSettings: { immediate: c, onRest: i },
                    opened: l,
                    children: w(s, (e, a) => {
                        const t = n && a === s.length - 1,
                            i = e.matchState !== X.Completed || t;
                        return r.jsx('div', { ref: i ? o : null, children: r.jsx(ka, { match: e }) }, a);
                    }),
                }),
            ],
        });
    },
    Wa = 'ScheduleTabContent_6d083e2e',
    Ua = 'ScheduleTabContent_base__withMask_fbcb0d72',
    Pa = n(function () {
        const { model: a, controls: t } = se(),
            s = a.overviewState.get(),
            n = a.computes.scheduleByDate(),
            l = a.hasScheduleAnimated.get(),
            d = e.useRef(null),
            [m, _] = e.useState(s === q.FinalResult),
            h = i(W),
            u = L(),
            [p, g] = e.useState(!0),
            { api: x } = C(),
            f = e.useCallback(() => {
                const e = x.getWrapperSize(),
                    a = x.contentRef,
                    t = x.animationScroll.scrollPosition.get(),
                    s = d.current;
                if (!(s && e && a.current)) return;
                const n =
                    (s
                        ? s.getBoundingClientRect().top - a.current.getBoundingClientRect().top + a.current.scrollTop
                        : 0) -
                    e / 2 +
                    s.getBoundingClientRect().height / 2;
                (0 === t && n < 0) || t === n || x.applyScroll(n, { immediate: l });
            }, [x, l]),
            b = e.useCallback((e) => {
                e && !d.current && (d.current = e);
            }, []),
            v = e.useCallback(() => {
                (x.recalculateContent(), m || (u.run(() => f()), t.setScheduleAnimated(), _(!0)));
            }, [x, t, u, m, f]);
        return (
            e.useEffect(() => {
                const e = (e) => {
                    const a = e.value.scrollPosition;
                    if (void 0 !== a) {
                        const [e, t] = x.getBounds();
                        g(a < t - 20);
                    }
                };
                return (
                    x.events.on('change', e),
                    () => {
                        x.events.off('change', e);
                    }
                );
            }, [x]),
            r.jsx(c.div, {
                className: o(Wa, p && Ua),
                style: h,
                children: r.jsx(D, {
                    children: w(n, ({ dayTimestamp: e, matches: a, isCompleted: t }, s) => {
                        const o = s === n.length - 1;
                        return r.jsx(
                            $a,
                            {
                                isCompleted: t,
                                dayTimestamp: e,
                                matches: a,
                                isLastDay: o,
                                setNearestMatchRef: b,
                                onAnimationEnd: v,
                                immediate: !m,
                            },
                            s,
                        );
                    }),
                }),
            })
        );
    }),
    Ha = {
        base: 'App_b829de78',
        page: 'App_page_8b428d62',
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
    Ea = n(function () {
        const { model: e, controls: a } = se(),
            t = e.currentTab.get(),
            s = e.overviewState.get(),
            n = e.pageState.get(),
            l = i(U),
            { blurBgPath: d } = G(),
            m = S({ tabSize: $.small }, { large: { tabSize: $.medium } });
        return (
            J(a.close),
            r.jsx('div', {
                className: Ha.base,
                style: { backgroundImage: `url('${d}')` },
                children: r.jsx(c.div, {
                    className: o(Ha.page, Ha[`base__${s}`]),
                    style: { ...l },
                    children:
                        n === V.Loading
                            ? r.jsx(z, { message: R.strings.comp7_ext.waitingSpinner.message() })
                            : r.jsxs(k, {
                                  active: t,
                                  theme: 'primary',
                                  size: m.tabSize,
                                  onActiveChange: a.updateCurrentTabId,
                                  children: [
                                      r.jsxs(k.Switcher, {
                                          children: [
                                              r.jsx(
                                                  k.Tab,
                                                  {
                                                      tabId: ee,
                                                      className: Ha.tab,
                                                      children: `${R.strings.comp7_ext.tournament.tab.$dyn(ee)}`,
                                                  },
                                                  `tab_${ee}`,
                                              ),
                                              r.jsx(
                                                  k.Tab,
                                                  {
                                                      tabId: ae,
                                                      className: Ha.tab,
                                                      children: `${R.strings.comp7_ext.tournament.tab.$dyn(ae)}`,
                                                  },
                                                  `tab_${ae}`,
                                              ),
                                          ],
                                      }),
                                      r.jsx(k.Content, {
                                          children: (e) => {
                                              switch (e) {
                                                  case ee:
                                                      return r.jsx(ma, {});
                                                  case ae:
                                                      return s === q.Error
                                                          ? r.jsx(le, {})
                                                          : r.jsx(B, { children: r.jsx(Pa, {}) });
                                                  default:
                                                      return (console.error('Unreachable branch in tabs'), null);
                                              }
                                          },
                                      }),
                                  ],
                              }),
                }),
            })
        );
    }),
    Qa = 'WinnerGlow_wciWinnerGlow_7c899fb',
    Ga = 'WinnerGlow_olsWinnerGlow_9d477dc8',
    qa = () => r.jsx(H, { className: Qa }),
    Va = () => {
        const e = i(W);
        return r.jsx(c.div, { className: Ga, style: e, children: r.jsx(P, {}) });
    };
export { Ea as A, Va as O, te as T, qa as W, Q as a, E as b };
