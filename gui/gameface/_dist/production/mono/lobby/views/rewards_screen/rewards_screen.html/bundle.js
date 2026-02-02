import {
    S as e,
    I as a,
    j as s,
    J as n,
    r,
    Q as t,
    P as i,
    R as d,
    X as o,
    O as l,
    Z as c,
} from '../../../chunks/vendor.js';
import {
    i as _,
    aB as p,
    cU as m,
    ah as u,
    a9 as h,
    dC as f,
    aR as w,
    an as g,
    b_ as b,
    aI as S,
    a7 as x,
    cf as k,
    cd as y,
    C as v,
    ch as j,
    m as A,
    dj as N,
    d9 as I,
    dg as C,
    dm as L,
    cm as T,
    dD as B,
    dl as M,
    cP as Q,
    cn as $,
} from '../../../chunks/lib.js';
import { g as H, a as U } from '../../../chunks/get_division_name.js';
import { b as V, a as P, g as E } from '../../../chunks/get_rank_name.js';
import { R as Y, a as O, i as q, g as W } from '../../../chunks/rank_emblem.js';
import { A as z } from '../../../chunks/animated_background.js';
import { R as D } from '../../../chunks/enums.js';
import { C as F } from '../../../chunks/close_button.js';
import { g as K } from '../../../chunks/get_button_size.js';
import { c as G } from '../../../chunks/animation_api_factory.js';
import { Q as J } from '../../../chunks/qualification_battle_item.js';
import { g as X } from '../../../chunks/get_comp7_reward.js';
import { L as Z } from '../../../chunks/lace_divider.js';
import { Q as ee } from '../../../chunks/qualification_emblem.js';
import { g as ae } from '../../../chunks/get_season_name.js';
import { V as se, a as ne } from '../../../chunks/vehicle_name.js';
/* empty css                     */ var re = ((e) => (
        (e[(e.Rank = 0)] = 'Rank'),
        (e[(e.Division = 1)] = 'Division'),
        (e[(e.RankRewards = 2)] = 'RankRewards'),
        (e[(e.TokensRewards = 3)] = 'TokensRewards'),
        (e[(e.QualificationRewards = 4)] = 'QualificationRewards'),
        (e[(e.QualificationRank = 5)] = 'QualificationRank'),
        (e[(e.YearlyVehicle = 6)] = 'YearlyVehicle'),
        (e[(e.YearlyRewards = 7)] = 'YearlyRewards'),
        (e[(e.SelectedRewards = 8)] = 'SelectedRewards'),
        e
    ))(re || {}),
    te = ((e) => ((e.None = 'none'), (e.Open = 'open'), (e.Discount = 'discount'), e))(te || {}),
    ie = ((e) => (
        (e[(e.NotStarted = 0)] = 'NotStarted'),
        (e[(e.Started = 1)] = 'Started'),
        (e[(e.Paused = 2)] = 'Paused'),
        (e[(e.Resumed = 3)] = 'Resumed'),
        (e[(e.Ended = 4)] = 'Ended'),
        e
    ))(ie || {});
const de = [re.RankRewards, re.QualificationRewards],
    [oe, le] = _()(
        ({ observableModel: a }) => {
            const s = {
                    root: a.object(),
                    additionalRewards: a.array('additionalRewards'),
                    mainRewards: a.array('mainRewards'),
                    qualificationBattles: a.array('qualificationBattles'),
                    rankList: a.array('rankList'),
                    seasonsResults: a.array('seasonsResults'),
                    vehicle: a.object('vehicle'),
                },
                n = e((e) => {
                    const a = p(s.qualificationBattles.get(), e);
                    if (!a) throw new Error(`qualification battle with index ${e} was not found`);
                    return a.state;
                }),
                r = e(
                    (e) => {
                        const a = p(s.seasonsResults.get(), e);
                        if (!a) throw new Error(`seasonResult with index ${e} was not found`);
                        return { ...a };
                    },
                    { equals: m },
                ),
                t = e(() => u(s.seasonsResults.get(), (e, a) => e + a.seasonPointsCount, 0)),
                i = e(() => {
                    const { type: e, shopInfoType: a } = s.root.get();
                    return de.includes(e) && a !== te.None;
                }),
                d = e(() =>
                    h(s.rankList.get(), (e) => V(e)).join(
                        R.strings.comp7_ext.rewardsScreen.subtitle.qualificationRewardsSeparator(),
                    ),
                ),
                o = e(() => (1 !== s.mainRewards.get().length || i() ? (i() ? 'shopInfo' : '') : 'singleMainReward'));
            return {
                ...s,
                computes: {
                    ranksList: d,
                    qualificationBattleState: n,
                    seasonResult: r,
                    seasonPointsAmount: t,
                    hasShopInfo: i,
                    styleModifier: o,
                },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openShop: e.createCallbackNoArgs('onOpenShop'),
            openNextScreen: e.createCallbackNoArgs('onOpenNextScreen'),
            changeType: e.createCallback((e) => ({ newType: e }), 'onChangeType'),
            changeVideoState: e.createCallback((e) => ({ state: e }), 'onVideoStateChange'),
        }),
    ),
    ce = 'DivisionAchievement_baac6f31',
    _e = 'DivisionAchievement_backLayer_419ba39d',
    pe = a(({ rankClassname: e }) => {
        const { model: a } = le(),
            { rank: n, division: r, seasonName: t } = a.root.get();
        return s.jsxs('div', {
            className: ce,
            children: [
                s.jsx(z, { className: _e }),
                s.jsx(Y, { seasonName: t, rank: n, division: r, size: O.x600, className: e }),
            ],
        });
    }),
    me = 'Notice_357328d',
    ue = 'Notice_noticeTitle_ed6239aa',
    he = 'Notice_noticeIcon_c8b8f56f',
    fe = ({ className: e }) =>
        s.jsxs('div', {
            className: n(me, e),
            children: [
                s.jsxs('div', {
                    className: ue,
                    children: [s.jsx('span', { className: he }), R.strings.comp7_ext.rewardsScreen.notice.title()],
                }),
                R.strings.comp7_ext.rewardsScreen.notice.subTitle(),
            ],
        }),
    we = {
        0: 'comp_7_rank_iron',
        2: 'comp_7_rank_bronze',
        4: 'comp_7_rank_silver',
        6: 'comp_7_rank_gold',
        9: 'comp_7_rank_champion',
        12: 'comp_7_rank_legend',
    },
    Re = {
        [D.First]: { start: 0, end: 2 },
        [D.Second]: { start: 2, end: 4 },
        [D.Third]: { start: 4, end: 6 },
        [D.Fourth]: { start: 6, end: 9 },
        [D.Fifth]: { start: 9, end: 12 },
        [D.Sixth]: { start: 12, end: 15 },
    },
    ge = {
        [re.Rank]: 'rank',
        [re.Division]: 'division',
        [re.RankRewards]: 'rankRewards',
        [re.TokensRewards]: 'tokensRewards',
        [re.QualificationRewards]: 'qualificationRewards',
        [re.QualificationRank]: 'qualificationRank',
        [re.YearlyVehicle]: 'yearlyVehicle',
        [re.YearlyRewards]: 'yearlyRewards',
        [re.SelectedRewards]: 'selectedRewards',
    },
    be = 'RankAnimation_bad289e4',
    Se = 'RankAnimation_rank_4e1e89ce',
    xe = 'RankAnimation_backLayer_9b56b7aa',
    ke = 'RankAnimation_backLayer__visible_ec12c9bd',
    ye = 'RankAnimation_rankEmblemGhost_667d48b7',
    ve = 'RankAnimation_rankEmblemGhost__visible_ec12c9bd',
    je = new Set(),
    Ae = a(({ playerRef: e, onKeyframesLoaded: a, onAnimationComplete: t, className: i, classNames: d }) => {
        const { model: o } = le(),
            { rank: l, division: c, seasonName: _ } = o.root.get(),
            p = Re[l],
            m = q(l),
            [u, h] = r.useState(!1),
            S = r.useRef(!1),
            x = r.useCallback(() => {
                var a;
                (null == (a = e.current) || a.goToAndStop(p.end), h(!0), null == t || t(), (S.current = !0));
            }, [t, e, p.end]),
            [k, y] = f(() => {
                var s;
                const n = null == (s = e.current) ? void 0 : s.getCachedKeyframes();
                return !(null == n ? void 0 : n.length) || (null == a || a(), !1);
            });
        return (
            w(() => (k(), y)),
            r.useEffect(() => {
                var a;
                null == (a = e.current) ||
                    a.onChangeTime((e) => {
                        if (S && !S.current) {
                            const a = Math.trunc(e.currentTime),
                                s = we[a];
                            if (a >= p.end) return void x();
                            s && !je.has(s) && (g.sound(s), je.add(s));
                        }
                    });
            }, [x, e, p.end]),
            r.useEffect(() => {
                u && g.sound(R.sounds.comp_7_ranks_shine());
            }, [u]),
            s.jsxs('div', {
                className: n(be, i),
                children: [
                    s.jsx(z, { className: n(xe, u && ke, null == d ? void 0 : d.backLayer) }),
                    s.jsx(b, {
                        className: n(Se, null == d ? void 0 : d.rank),
                        src: String(R.videos.comp7.$dyn(`rankAnimation_${_}`)),
                        ref: e,
                        autoplay: !1,
                        preload: 'auto',
                    }),
                    m &&
                        s.jsx(Y, {
                            seasonName: _,
                            rank: l,
                            division: c,
                            size: O.x600,
                            className: n(Se, ye, u && ve, null == d ? void 0 : d.rank),
                        }),
                ],
            })
        );
    }),
    Ne = a(({ className: e }) => {
        const { model: a } = le(),
            { rank: n } = a.root.get(),
            t = r.useRef(null);
        return s.jsx(Ae, {
            playerRef: t,
            onKeyframesLoaded: () => {
                var e;
                return null == (e = t.current) ? void 0 : e.goToAndPlay(Re[n].start);
            },
            classNames: { rank: e },
        });
    }),
    Ie = 'Achievement_b612c728',
    Ce = 'Achievement_container_2b000480',
    Le = 'Achievement_container__withNotice_f69304b3',
    Te = 'Achievement_rank_8fc6e94',
    Be = 'Achievement_notice_17bb36b',
    Me = a(() => {
        const { model: e } = le(),
            { type: a, hasRankInactivity: d } = e.root.get();
        r.useEffect(() => g.sound(R.sounds.comp_7_new_rank()), []);
        const o = t({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400, config: { duration: 400 } });
        return s.jsxs('div', {
            className: Ie,
            children: [
                s.jsx(i.div, {
                    className: n(Ce, d && Le),
                    style: o,
                    children: (() => {
                        switch (a) {
                            case re.Rank:
                                return s.jsx(Ne, { className: Te });
                            case re.Division:
                                return s.jsx(pe, { rankClassname: Te });
                            default:
                                return (
                                    console.error('[Achievement] Unreachable branch: add separate Achievement type'),
                                    null
                                );
                        }
                    })(),
                }),
                d && s.jsx(fe, { className: Be }),
            ],
        });
    }),
    Qe = 'AppContainer_a6708fb6',
    $e = 'AppContainer_close_8c51fefb',
    He = a(
        d.forwardRef(({ children: e, className: a, classNames: r, closeCallback: t }, i) => {
            const { controls: d } = le();
            return s.jsxs('div', {
                className: n(Qe, a),
                ref: i,
                children: [
                    e,
                    s.jsx(F, { className: n($e, null == r ? void 0 : r.closeButton), onClick: t ?? d.close }),
                ],
            });
        }),
    ),
    Ue = 'AppHeader_a92b2706',
    Ve = 'AppHeader_description_9e9d375d',
    Pe = 'AppHeader_subTitle_31b055c6',
    Ee = 'AppHeader_title_d9d173d5',
    Ye = ({ description: e, title: a, subTitle: r, className: t, classNames: i }) =>
        s.jsxs('div', {
            className: n(Ue, t),
            children: [
                e && s.jsx('div', { className: n(Ve, null == i ? void 0 : i.description), children: e }),
                a && s.jsx('div', { className: n(Ee, null == i ? void 0 : i.title), children: a }),
                r && s.jsx('div', { className: n(Pe, null == i ? void 0 : i.subTitle), children: r }),
            ],
        }),
    Oe = (e) => `${R.strings.comp7_ext.rewardsScreen.title.$dyn(ge[e])}`,
    qe = (e) => `${R.strings.comp7_ext.rewardsScreen.subtitle.$dyn(ge[e])}`,
    We = 'Buttons_38c48650',
    ze = 'Buttons_button_9889e05c',
    De = a(({ className: e, mainButtonText: a = R.strings.comp7_ext.rewardsScreen.button(), onClick: r }) => {
        const { model: t, controls: i } = le(),
            { mediaSize: d } = S(),
            o = K(d);
        return s.jsxs('div', {
            className: n(We, e),
            children: [
                s.jsx(x, { theme: x.themes.primary, size: o, onClick: r ?? i.close, className: ze, children: a }),
                t.computes.hasShopInfo() &&
                    s.jsx(x, {
                        theme: x.themes.secondary,
                        size: o,
                        onClick: i.openShop,
                        className: ze,
                        children: R.strings.comp7_ext.rewardsScreen.buttonToShop(),
                    }),
            ],
        });
    }),
    Fe = ({ children: e, className: a }) => {
        const n = t({ from: { opacity: 0 }, to: { opacity: 1 }, leave: { opacity: 0 }, config: o.molasses });
        return s.jsx(i.div, { className: a, style: { ...n }, children: e });
    },
    Ke = 'ScreenBackground_89f63203',
    Ge = 'ScreenBackground_layer_492c4adb',
    Je = 'ScreenBackground_layer__blurred_9ac55ca6',
    Xe = ({ bgImage: e, isBlurred: a = !1, className: r, classNames: t }) =>
        s.jsx('div', {
            className: n(Ke, r),
            children: s.jsx('div', {
                className: n(Ge, a && Je, null == t ? void 0 : t.layer),
                style: { backgroundImage: `url(${e})` },
            }),
        }),
    Ze = (e, a) => {
        var s;
        const n = null == (s = R.images.comp7.gui.maps.icons.backgrounds.$dyn(e)) ? void 0 : s.$dyn(W(a));
        return n ? `${n}` : (console.error(`no background was found for rank ${a}, season ${e}`), R.invalid());
    },
    ea = 'DivisionApp_achievement_826bdec5',
    aa = 'DivisionApp_content_1a0c9a1e',
    sa = a(() => {
        const { model: e } = le(),
            { type: a, seasonName: n, rank: r, division: t } = e.root.get();
        return s.jsxs(He, {
            children: [
                s.jsx(Xe, { bgImage: Ze(n, r), isBlurred: !0 }),
                s.jsxs(Fe, {
                    className: aa,
                    children: [
                        s.jsx(Ye, {
                            description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(n)}`,
                            title: s.jsx(y, { text: Oe(a), binding: { division: H(t) } }),
                            subTitle: s.jsx(k, { text: qe(a), binding: { rank: V(r) } }),
                        }),
                        s.jsx('div', { className: ea, children: s.jsx(Me, {}) }),
                        s.jsx(De, {}),
                    ],
                }),
            ],
        });
    }),
    na = {
        OpeningContent: { name: 'openingContent', delay: 100 },
        ShowBattlesList: { name: 'showBattlesList', delay: 400 },
        FillBattles: { name: 'fillBattles', delay: 500 },
        PauseBeforeRank: { name: 'pauseBeforeShowRank', delay: 1e3 },
        ShowRank: { name: 'showRank', delay: 200, stopNextSteps: !0 },
        ChangeBack: { name: 'changeBack', delay: 0 },
        ShowHeader: { name: 'showHeader', delay: 1e3 },
        ShowFooter: { name: 'showFooter', delay: 700 },
    },
    ra = G({
        steps: [
            na.OpeningContent,
            na.ShowBattlesList,
            na.FillBattles,
            na.PauseBeforeRank,
            na.ShowRank,
            na.ChangeBack,
            na.ShowHeader,
            na.ShowFooter,
        ],
        autoStart: !1,
    }),
    ta = r.createContext(null),
    ia = () => {
        const e = r.useContext(ta);
        if (null === e)
            throw new Error('useAnimationApi was called in component, which is not wrapped in AnimationProvider');
        return e;
    },
    da = ({ children: e }) => {
        const a = ra();
        return s.jsx(ta.Provider, { value: a, children: e });
    },
    oa = 'QualificationBackground_rankBg_a6f53201',
    la = 'QualificationBackground_rankBg__blurred_e4de0e50',
    ca = 'QualificationBackground_rankBg__active_bbd82e51',
    _a = 'QualificationBackground_qualification_a4d51d94',
    pa = a(() => {
        var e;
        const { model: a } = le(),
            { seasonName: t, rank: i, type: d } = a.root.get(),
            [o, l] = r.useState(!1),
            c = `url(${null == (e = R.images.comp7.gui.maps.icons.backgrounds.$dyn(t)) ? void 0 : e.$dyn('qualification')})`,
            _ = `url(${Ze(t, i)})`,
            p = ia();
        return (
            r.useEffect(() => {
                const e = (e) => {
                    e === na.ChangeBack && l(!0);
                };
                return (
                    p.events.on('change', e),
                    () => {
                        p.events.off('change', e);
                    }
                );
            }, [p.events]),
            s.jsxs(s.Fragment, {
                children: [
                    s.jsx('div', { className: _a, style: { backgroundImage: c } }),
                    s.jsx('div', {
                        className: n(oa, d === re.QualificationRank && la, o && ca),
                        style: { backgroundImage: _ },
                    }),
                ],
            })
        );
    });
var ma = ((e) => (
    (e.NotPlayed = 'notPlayed'),
    (e.InProgress = 'inProgress'),
    (e.Victory = 'victory'),
    (e.Defeat = 'defeat'),
    e
))(ma || {});
const ua = 'BattleItem_14e04a96',
    ha = 'BattleItem_item_b8e00cd3',
    fa = a(({ index: e, className: a }) => {
        const { model: t } = le(),
            { mediaSize: d } = S(),
            c = ia(),
            _ = 100 * e,
            p = v(),
            m = t.computes.qualificationBattleState(e),
            [u, h] = r.useState('notPlayed'),
            f = l(u, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { ...o.molasses, duration: 100 },
                initial: { opacity: 1 },
            });
        return (
            r.useEffect(() => {
                const e = (e) => {
                    e === na.FillBattles &&
                        p.run(() => {
                            (g.sound(
                                ((e) => {
                                    switch (e) {
                                        case ma.Victory:
                                            return 'comp_7_rank_swords_green';
                                        case ma.Defeat:
                                            return 'comp_7_rank_swords_red';
                                        default:
                                            return (
                                                console.error(`sound for battleState ${e} was not implemented`),
                                                ''
                                            );
                                    }
                                })(m),
                            ),
                                h(m));
                        }, _);
                };
                return (
                    c.events.on('change', e),
                    () => {
                        (c.events.off('change', e), p.clear());
                    }
                );
            }, [c.events, m, p, _]),
            s.jsx('div', {
                className: n(ua, a),
                children: f((e, a) =>
                    s.jsx(i.div, {
                        style: e,
                        className: ha,
                        children: s.jsx(J, { state: a, size: d >= j.Medium ? 'x234' : 'x173' }),
                    }),
                ),
            })
        );
    }),
    wa = 'QualificationRank_d56c988a',
    Ra = 'QualificationRank_rank_3886a852',
    ga = 'QualificationRank_rankAnimation_55e40415',
    ba = 'QualificationRank_battleList_53e81164',
    Sa = 'QualificationRank_battleItem_ddd308eb',
    xa = 'QualificationRank_notice_6d3c429d',
    ka = { rank: ga },
    ya = a(() => {
        const { model: e } = le(),
            { hasRankInactivity: a } = e.root.get(),
            n = r.useRef(null),
            t = ia();
        return (
            r.useEffect(() => {
                const e = (e) => {
                    var a;
                    switch (e) {
                        case na.OpeningContent:
                            g.sound(R.sounds.comp_7_rank_appear());
                            break;
                        case na.ShowRank:
                            null == (a = n.current) || a.goToAndPlay(0);
                    }
                };
                return (
                    t.events.on('change', e),
                    () => {
                        t.events.off('change', e);
                    }
                );
            }, [t.events]),
            s.jsxs('div', {
                className: wa,
                children: [
                    s.jsx('div', {
                        className: Ra,
                        children: s.jsx(Ae, {
                            playerRef: n,
                            onAnimationComplete: t.resume,
                            onKeyframesLoaded: () => t.start(),
                            classNames: ka,
                        }),
                    }),
                    s.jsx('div', {
                        className: ba,
                        children: A(e.qualificationBattles.get().length, (e) =>
                            s.jsx(fa, { index: e, className: Sa }, e),
                        ),
                    }),
                    a && s.jsx(fe, { className: xa }),
                ],
            })
        );
    }),
    va = {
        header: 'QualificationApp_header_3d749c70',
        qualificationRank: 'QualificationApp_qualificationRank_4d2a8d30',
        rewardList: 'QualificationApp_rewardList_6e0bcfc2',
        rewardList__singleMainReward: 'QualificationApp_rewardList__singleMainReward_fcba74bd',
        buttons: 'QualificationApp_buttons_e44cbb30',
        fadeIn: 'QualificationApp_fadeIn_fcf3f670',
        fadeInThreeQuarters: 'QualificationApp_fadeInThreeQuarters_fcf3f670',
        fadeInHalf: 'QualificationApp_fadeInHalf_fcf3f670',
        fadeOut: 'QualificationApp_fadeOut_fcf3f670',
        fadeInWithScale: 'QualificationApp_fadeInWithScale_fcf3f670',
        slideUp: 'QualificationApp_slideUp_fcf3f670',
        scale: 'QualificationApp_scale_fcf3f670',
        raysAppearance: 'QualificationApp_raysAppearance_fcf3f670',
        rotate: 'QualificationApp_rotate_fcf3f670',
        'reverse-rotate': 'QualificationApp_reverse-rotate_fcf3f670',
        glowAppearance: 'QualificationApp_glowAppearance_fcf3f670',
        highlightAppearance: 'QualificationApp_highlightAppearance_fcf3f670',
        blink: 'QualificationApp_blink_fcf3f670',
        slideUpIn: 'QualificationApp_slideUpIn_fcf3f670',
    },
    ja = a(() => {
        const { model: e } = le(),
            { type: a, rank: n, division: r } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ye, {
                    className: va.header,
                    description: R.strings.comp7_ext.rewardsScreen.description.qualificationEnded(),
                    title: s.jsx(k, { text: Oe(a), binding: { rankUpperName: P(R.strings.comp7_ext.rankUpper, n) } }),
                    subTitle: q(n) ? U(r) : void 0,
                }),
                s.jsx('div', { className: va.qualificationRank, children: s.jsx(ya, {}) }),
            ],
        });
    }),
    Aa = {
        base: 'AnimatedReward_c301d772',
        entering: 'AnimatedReward_entering_1f24eb41',
        entered: 'AnimatedReward_entered_6b7fc3b5',
        fadeIn: 'AnimatedReward_fadeIn_acd88dcf',
        fadeInThreeQuarters: 'AnimatedReward_fadeInThreeQuarters_acd88dcf',
        fadeInHalf: 'AnimatedReward_fadeInHalf_acd88dcf',
        fadeOut: 'AnimatedReward_fadeOut_acd88dcf',
        fadeInWithScale: 'AnimatedReward_fadeInWithScale_acd88dcf',
        slideUp: 'AnimatedReward_slideUp_acd88dcf',
        scale: 'AnimatedReward_scale_acd88dcf',
        raysAppearance: 'AnimatedReward_raysAppearance_acd88dcf',
        rotate: 'AnimatedReward_rotate_acd88dcf',
        'reverse-rotate': 'AnimatedReward_reverse-rotate_acd88dcf',
        glowAppearance: 'AnimatedReward_glowAppearance_acd88dcf',
        highlightAppearance: 'AnimatedReward_highlightAppearance_acd88dcf',
        blink: 'AnimatedReward_blink_acd88dcf',
        slideUpIn: 'AnimatedReward_slideUpIn_acd88dcf',
    },
    Na = (e, a = 0) => ({ appear: a + 400 + 200 * e, enter: 600 }),
    Ia = () => {
        g.sound(R.sounds.bp_reward());
    },
    Ca = ({ rewardIndex: e, delay: a = 0, children: r }) =>
        s.jsx(c, {
            appear: !0,
            in: !0,
            timeout: Na(e, a),
            onEntered: Ia,
            children: (e) => s.jsx('div', { className: n(Aa.base, Aa[e]), children: r }),
        }),
    La = 10,
    Ta = 'AdditionalRewards_81a45598',
    Ba = 'AdditionalRewards_reward_f7b41ae4',
    Ma = 'AdditionalRewards_vehiclesRentBase_3afa6e1a',
    Qa = 'AdditionalRewards_vehiclesRentLabel_bed51da4',
    $a = ({ delay: e, onAnimationComplete: a, className: t, classNames: i }) => {
        const { model: d } = le(),
            { mediaSize: o } = S(),
            l = o >= j.Medium ? N.Big : N.Small,
            c = d.additionalRewards.get().length,
            _ = c > La;
        const { appear: p, enter: m } = Na(Math.min(d.additionalRewards.get().length, La), e),
            u = m + p;
        r.useEffect(
            () =>
                I(() => {
                    null == a || a();
                }, u),
            [u, a],
        );
        const f = _ ? [...C(d.additionalRewards.get(), 0, 8)] : d.additionalRewards.get();
        return s.jsxs('div', {
            className: n(Ta, t),
            children: [
                h(f, (a, r) => {
                    const t = 'vehicles_rent' === a.name;
                    return s.jsx(
                        Ca,
                        {
                            rewardIndex: r,
                            delay: e,
                            children: s.jsx('div', {
                                className: n(Ba, null == i ? void 0 : i.reward),
                                children: s.jsx(L, {
                                    ...X({ reward: a, size: l }),
                                    className: n(t && Ma),
                                    classNames: { info: n(t && Qa) },
                                }),
                            }),
                        },
                        r,
                    );
                }),
                _ &&
                    s.jsx(Ca, {
                        rewardIndex: f.length,
                        delay: e,
                        children: s.jsx('div', {
                            className: Ba,
                            children: s.jsx(L, {
                                name: '',
                                image: `R.images.gui.maps.icons.quests.bonuses.${l}.default`,
                                size: l,
                                value: T(R.strings.tooltips.quests.awards.additional.bottom(), { count: c - La + 1 }),
                                tooltipArgs: {
                                    contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                    args: { showCount: 9 },
                                },
                            }),
                        }),
                    }),
            ],
        });
    },
    Ha = {
        base: 'MainRewards_c825d49e',
        ribbon: 'MainRewards_ribbon_53534c60',
        fadeIn: 'MainRewards_fadeIn_56da68ed',
        base__singleMainReward: 'MainRewards_base__singleMainReward_56da68ed',
        base__shopInfo: 'MainRewards_base__shopInfo_56da68ed',
        rewardWrapper: 'MainRewards_rewardWrapper_584145f1',
        reward: 'MainRewards_reward_19b30582',
        rewardTimer: 'MainRewards_rewardTimer_5492399b',
        rewardInfo: 'MainRewards_rewardInfo_65adb9e1',
        rewardLabel: 'MainRewards_rewardLabel_f3a69e55',
        rewardLabel__multi: 'MainRewards_rewardLabel__multi_5b534722',
        rewardLabel__credits: 'MainRewards_rewardLabel__credits_eb8a109e',
        rewardLabel__gold: 'MainRewards_rewardLabel__gold_c0a82576',
        rewardLabel__crystal: 'MainRewards_rewardLabel__crystal_11ae604a',
        rewardLabel__currency: 'MainRewards_rewardLabel__currency_68781aae',
        fadeInThreeQuarters: 'MainRewards_fadeInThreeQuarters_56da68ed',
        fadeInHalf: 'MainRewards_fadeInHalf_56da68ed',
        fadeOut: 'MainRewards_fadeOut_56da68ed',
        fadeInWithScale: 'MainRewards_fadeInWithScale_56da68ed',
        slideUp: 'MainRewards_slideUp_56da68ed',
        scale: 'MainRewards_scale_56da68ed',
        raysAppearance: 'MainRewards_raysAppearance_56da68ed',
        rotate: 'MainRewards_rotate_56da68ed',
        'reverse-rotate': 'MainRewards_reverse-rotate_56da68ed',
        glowAppearance: 'MainRewards_glowAppearance_56da68ed',
        highlightAppearance: 'MainRewards_highlightAppearance_56da68ed',
        blink: 'MainRewards_blink_56da68ed',
        slideUpIn: 'MainRewards_slideUpIn_56da68ed',
    },
    Ua = { periodicIcon: Ha.rewardTimer, info: Ha.rewardInfo },
    Va = a(({ className: e, classNames: a, rewardClassNames: t, onAnimationComplete: i }) => {
        const { model: d } = le(),
            o = d.mainRewards.get(),
            { mediaSize: l } = S(),
            c = ((e, a, s) =>
                1 !== a || s
                    ? e >= j.Large
                        ? N.S400x300
                        : e >= j.Small
                          ? N.S296x222
                          : N.S232x174
                    : e >= j.Large
                      ? N.S600x450
                      : N.S400x300)(l, o.length, d.computes.hasShopInfo()),
            { appear: _ } = Na(o.length);
        return (
            r.useEffect(() => I(() => (null == i ? void 0 : i()), _), [_, i]),
            s.jsxs('div', {
                className: n(Ha.base, e, Ha[`base__${d.computes.styleModifier()}`]),
                children: [
                    s.jsx('div', { className: n(Ha.ribbon, null == a ? void 0 : a.ribbon) }),
                    h(o, (e, r) => {
                        const i = B(e.name);
                        return s.jsx(
                            Ca,
                            {
                                rewardIndex: r,
                                children: s.jsxs('div', {
                                    className: Ha.rewardWrapper,
                                    children: [
                                        s.jsx(L, {
                                            ...X({ reward: e, size: c }),
                                            className: Ha.reward,
                                            classNames: { ...Ua, ...t },
                                        }),
                                        s.jsx('div', {
                                            className: n(
                                                Ha.rewardLabel,
                                                Ha[`rewardLabel__${e.name}`],
                                                Ha[`rewardLabel__${i}`],
                                                null == a ? void 0 : a.rewardLabel,
                                            ),
                                            children: e.label,
                                        }),
                                    ],
                                }),
                            },
                            r,
                        );
                    }),
                ],
            })
        );
    }),
    Pa = {
        base: 'ShopInfo_ffa91be7',
        icon: 'ShopInfo_icon_e4270d60',
        icon__open: 'ShopInfo_icon__open_68f60f0',
        icon__discount: 'ShopInfo_icon__discount_50f7fcb3',
        content: 'ShopInfo_content_951f83d',
        header: 'ShopInfo_header_87c79a2f',
        text: 'ShopInfo_text_c874c0cd',
        fadeIn: 'ShopInfo_fadeIn_5bddd9f',
        fadeInThreeQuarters: 'ShopInfo_fadeInThreeQuarters_5bddd9f',
        fadeInHalf: 'ShopInfo_fadeInHalf_5bddd9f',
        fadeOut: 'ShopInfo_fadeOut_5bddd9f',
        fadeInWithScale: 'ShopInfo_fadeInWithScale_5bddd9f',
        slideUp: 'ShopInfo_slideUp_5bddd9f',
        scale: 'ShopInfo_scale_5bddd9f',
        raysAppearance: 'ShopInfo_raysAppearance_5bddd9f',
        rotate: 'ShopInfo_rotate_5bddd9f',
        'reverse-rotate': 'ShopInfo_reverse-rotate_5bddd9f',
        glowAppearance: 'ShopInfo_glowAppearance_5bddd9f',
        highlightAppearance: 'ShopInfo_highlightAppearance_5bddd9f',
        blink: 'ShopInfo_blink_5bddd9f',
        slideUpIn: 'ShopInfo_slideUpIn_5bddd9f',
    },
    Ea = a(({ className: e }) => {
        const { model: a } = le(),
            { shopInfoType: r } = a.root.get();
        return s.jsxs('div', {
            className: n(Pa.base, e),
            children: [
                s.jsx('div', { className: n(Pa.icon, Pa[`icon__${r}`]) }),
                s.jsxs('div', {
                    className: Pa.content,
                    children: [
                        s.jsx('div', {
                            className: Pa.header,
                            children: `${R.strings.comp7_ext.rewardsScreen.shopInfo.header.$dyn(r)}`,
                        }),
                        s.jsx('div', {
                            className: Pa.text,
                            children: `${R.strings.comp7_ext.rewardsScreen.shopInfo.text.$dyn(r)}`,
                        }),
                    ],
                }),
            ],
        });
    }),
    Ya = 'RewardList_ea855648',
    Oa = 'RewardList_additional_5346cd7f',
    qa = 'RewardList_additionalTitle_73a7506c',
    Wa = 'RewardList_shopInfoContainer_df512c7a',
    za = a(
        ({
            className: e,
            mainRewardsClassName: a,
            mainRewardsClassNames: t,
            rewardClassNames: i,
            additionalContainerClassName: d,
            additionalTitleClassName: o,
            additionalRewardsClassNames: l,
            onMainRewardsAnimationComplete: c,
            onAdditionalRewardsAnimationComplete: _,
        }) => {
            const { model: p } = le(),
                m = p.mainRewards.get(),
                u = p.additionalRewards.get().length,
                h = p.computes.hasShopInfo(),
                f = Na(m.length),
                w = Na(Math.min(La, u)),
                b = f.enter + f.appear,
                S = b + (w.enter + w.appear);
            return (
                r.useEffect(() => I(() => g.sound(R.sounds.gui_reward_screen_general()), 400), []),
                r.useEffect(
                    () =>
                        I(() => {
                            h && g.sound(R.sounds.comp_7_shop_info());
                        }, S - 300),
                    [h, S],
                ),
                s.jsxs('div', {
                    className: n(Ya, e),
                    style: {
                        '--additionalTitleDelay': `${b}ms`,
                        '--additionalTitleDuration': '300ms',
                        '--shopInfoDelay': `${S}ms`,
                        '--shopInfoDuration': '300ms',
                    },
                    children: [
                        s.jsx(Va, { className: a, classNames: t, rewardClassNames: i, onAnimationComplete: c }),
                        s.jsx('div', {
                            className: n(Oa, d),
                            children:
                                Boolean(u) &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        s.jsx('div', {
                                            className: n(qa, o),
                                            children: R.strings.comp7_ext.rewardsScreen.additionalRewards(),
                                        }),
                                        s.jsx($a, { delay: b, classNames: l, onAnimationComplete: _ }),
                                    ],
                                }),
                        }),
                        h && s.jsx(Ea, { className: Wa }),
                    ],
                })
            );
        },
    ),
    Da = {
        base: 'BaseRewardList_ce527f64',
        base__singleMainReward: 'BaseRewardList_base__singleMainReward_4a33e8f3',
        base__shopInfo: 'BaseRewardList_base__shopInfo_9db8a5cc',
        additionalContainer: 'BaseRewardList_additionalContainer_357468b2',
        additionalTitle: 'BaseRewardList_additionalTitle_4abc3a65',
        fadeIn: 'BaseRewardList_fadeIn_c549e72e',
        fadeInThreeQuarters: 'BaseRewardList_fadeInThreeQuarters_c549e72e',
        fadeInHalf: 'BaseRewardList_fadeInHalf_c549e72e',
        fadeOut: 'BaseRewardList_fadeOut_c549e72e',
        fadeInWithScale: 'BaseRewardList_fadeInWithScale_c549e72e',
        slideUp: 'BaseRewardList_slideUp_c549e72e',
        scale: 'BaseRewardList_scale_c549e72e',
        raysAppearance: 'BaseRewardList_raysAppearance_c549e72e',
        rotate: 'BaseRewardList_rotate_c549e72e',
        'reverse-rotate': 'BaseRewardList_reverse-rotate_c549e72e',
        glowAppearance: 'BaseRewardList_glowAppearance_c549e72e',
        highlightAppearance: 'BaseRewardList_highlightAppearance_c549e72e',
        blink: 'BaseRewardList_blink_c549e72e',
        slideUpIn: 'BaseRewardList_slideUpIn_c549e72e',
    },
    Fa = a(() => {
        const { model: e } = le();
        return s.jsx(za, {
            className: n(Da.base, Da[`base__${e.computes.styleModifier()}`]),
            additionalContainerClassName: Da.additionalContainer,
            additionalTitleClassName: Da.additionalTitle,
        });
    }),
    Ka = a(() => {
        const { model: e } = le(),
            { type: a } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ye, {
                    className: va.header,
                    description: String(R.strings.comp7_ext.rewardsScreen.description.qualificationEnded()),
                    title: Oe(a),
                    subTitle: s.jsx(k, {
                        text: String(R.strings.comp7_ext.rewardsScreen.subtitle.qualificationRewards()),
                        binding: { ranks: e.computes.ranksList() },
                    }),
                }),
                s.jsx('div', {
                    className: n(va.rewardList, va[`rewardList__${e.computes.styleModifier()}`]),
                    children: s.jsx(Fa, {}),
                }),
            ],
        });
    }),
    Ga = a(() => {
        const { model: e, controls: a } = le(),
            { type: n } = e.root.get(),
            t = ia(),
            i = r.useCallback(() => {
                (a.close(), t.skipAll());
            }, [t, a]);
        return s.jsxs(He, {
            closeCallback: i,
            ref: t.rootRef,
            children: [
                s.jsx(pa, {}),
                n === re.QualificationRank && s.jsx(ja, {}),
                n === re.QualificationRewards && s.jsx(Ka, {}),
                s.jsx(De, { className: va.buttons, onClick: i }),
            ],
        });
    }),
    Ja = {
        content: 'RankApp_content_66d29bb3',
        achievement: 'RankApp_achievement_169652cd',
        rewardList: 'RankApp_rewardList_2d10626d',
        rewardList__singleMainReward: 'RankApp_rewardList__singleMainReward_acbe8146',
        fadeIn: 'RankApp_fadeIn_f89d8164',
        fadeInThreeQuarters: 'RankApp_fadeInThreeQuarters_f89d8164',
        fadeInHalf: 'RankApp_fadeInHalf_f89d8164',
        fadeOut: 'RankApp_fadeOut_f89d8164',
        fadeInWithScale: 'RankApp_fadeInWithScale_f89d8164',
        slideUp: 'RankApp_slideUp_f89d8164',
        scale: 'RankApp_scale_f89d8164',
        raysAppearance: 'RankApp_raysAppearance_f89d8164',
        rotate: 'RankApp_rotate_f89d8164',
        'reverse-rotate': 'RankApp_reverse-rotate_f89d8164',
        glowAppearance: 'RankApp_glowAppearance_f89d8164',
        highlightAppearance: 'RankApp_highlightAppearance_f89d8164',
        blink: 'RankApp_blink_f89d8164',
        slideUpIn: 'RankApp_slideUpIn_f89d8164',
    },
    Xa = a(() => {
        const { model: e } = le(),
            { type: a, rank: n, division: r, seasonName: t } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ye, {
                    description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(t)}`,
                    title: s.jsx(k, { text: Oe(a), binding: { rankUpperName: P(R.strings.comp7_ext.rankUpper, n) } }),
                    subTitle: q(n) ? U(r) : void 0,
                }),
                s.jsx('div', { className: Ja.achievement, children: s.jsx(Me, {}) }),
            ],
        });
    }),
    Za = a(() => {
        const { model: e } = le(),
            { type: a, rank: r, seasonName: t } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ye, {
                    description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(t)}`,
                    title: s.jsx(k, { text: Oe(a) }),
                    subTitle: s.jsx(k, { text: qe(a), binding: { rank: V(r) } }),
                }),
                s.jsx('div', {
                    className: n(Ja.rewardList, Ja[`rewardList__${e.computes.styleModifier()}`]),
                    children: s.jsx(Fa, {}),
                }),
            ],
        });
    }),
    es = a(() => {
        const { model: e } = le(),
            { type: a, seasonName: n, rank: r } = e.root.get();
        return s.jsxs(He, {
            children: [
                s.jsx(Xe, { bgImage: Ze(n, r), isBlurred: a === re.Rank }),
                s.jsxs(Fe, {
                    className: Ja.content,
                    children: [
                        a === re.Rank && s.jsx(Xa, {}),
                        a === re.RankRewards && s.jsx(Za, {}),
                        s.jsx(De, {
                            mainButtonText:
                                a === re.Rank
                                    ? R.strings.comp7_ext.rewardsScreen.buttonToRewards()
                                    : R.strings.comp7_ext.rewardsScreen.button(),
                        }),
                    ],
                }),
            ],
        });
    }),
    as = {
        content: 'SelectedRewardsApp_content_682138ba',
        rewardList: 'SelectedRewardsApp_rewardList_e37a3b47',
        mainRewards: 'SelectedRewardsApp_mainRewards_f764bab3',
        rewardList__singleMainReward: 'SelectedRewardsApp_rewardList__singleMainReward_c67bf1e4',
        rewardLabel: 'SelectedRewardsApp_rewardLabel_95ad1240',
        fadeIn: 'SelectedRewardsApp_fadeIn_c67bf1e4',
        fadeInThreeQuarters: 'SelectedRewardsApp_fadeInThreeQuarters_c67bf1e4',
        fadeInHalf: 'SelectedRewardsApp_fadeInHalf_c67bf1e4',
        fadeOut: 'SelectedRewardsApp_fadeOut_c67bf1e4',
        fadeInWithScale: 'SelectedRewardsApp_fadeInWithScale_c67bf1e4',
        slideUp: 'SelectedRewardsApp_slideUp_c67bf1e4',
        scale: 'SelectedRewardsApp_scale_c67bf1e4',
        raysAppearance: 'SelectedRewardsApp_raysAppearance_c67bf1e4',
        rotate: 'SelectedRewardsApp_rotate_c67bf1e4',
        'reverse-rotate': 'SelectedRewardsApp_reverse-rotate_c67bf1e4',
        glowAppearance: 'SelectedRewardsApp_glowAppearance_c67bf1e4',
        highlightAppearance: 'SelectedRewardsApp_highlightAppearance_c67bf1e4',
        blink: 'SelectedRewardsApp_blink_c67bf1e4',
        slideUpIn: 'SelectedRewardsApp_slideUpIn_c67bf1e4',
    },
    ss = a(() => {
        const { model: e } = le(),
            a = e.mainRewards.get().length;
        return (
            w(() => {
                g.sound(R.sounds.comp_7_shop_purchase_module());
            }),
            s.jsxs(He, {
                children: [
                    s.jsx(Xe, { bgImage: R.images.comp7.gui.maps.icons.backgrounds.yearly_rewards_screen_bg() }),
                    s.jsxs(Fe, {
                        className: as.content,
                        children: [
                            s.jsx(Ye, {
                                description: R.strings.comp7_ext.featureNameCapitalized(),
                                title: R.strings.comp7_ext.rewardsScreen.title.selectedRewards(a),
                            }),
                            s.jsx('div', {
                                className: n(as.rewardList, as[`rewardList__${e.computes.styleModifier()}`]),
                                children:
                                    e.additionalRewards.get().length > 0
                                        ? s.jsx(Fa, {})
                                        : s.jsx(Va, {
                                              className: as.mainRewards,
                                              classNames: { rewardLabel: as.rewardLabel },
                                          }),
                            }),
                            s.jsx(De, {}),
                        ],
                    }),
                ],
            })
        );
    }),
    ns = {
        content: 'TokensRewardsApp_content_51e506d0',
        rewardList: 'TokensRewardsApp_rewardList_6df98225',
        rewardList__singleMainReward: 'TokensRewardsApp_rewardList__singleMainReward_f81b0e20',
        fadeIn: 'TokensRewardsApp_fadeIn_98129126',
        fadeInThreeQuarters: 'TokensRewardsApp_fadeInThreeQuarters_98129126',
        fadeInHalf: 'TokensRewardsApp_fadeInHalf_98129126',
        fadeOut: 'TokensRewardsApp_fadeOut_98129126',
        fadeInWithScale: 'TokensRewardsApp_fadeInWithScale_98129126',
        slideUp: 'TokensRewardsApp_slideUp_98129126',
        scale: 'TokensRewardsApp_scale_98129126',
        raysAppearance: 'TokensRewardsApp_raysAppearance_98129126',
        rotate: 'TokensRewardsApp_rotate_98129126',
        'reverse-rotate': 'TokensRewardsApp_reverse-rotate_98129126',
        glowAppearance: 'TokensRewardsApp_glowAppearance_98129126',
        highlightAppearance: 'TokensRewardsApp_highlightAppearance_98129126',
        blink: 'TokensRewardsApp_blink_98129126',
        slideUpIn: 'TokensRewardsApp_slideUpIn_98129126',
    },
    rs = a(() => {
        const { model: e, controls: a } = le(),
            { type: r, tokensCount: t, hasNextScreen: i } = e.root.get();
        return s.jsxs(He, {
            children: [
                s.jsx(Xe, { bgImage: R.images.comp7.gui.maps.icons.backgrounds.tokens() }),
                s.jsxs(Fe, {
                    className: ns.content,
                    children: [
                        s.jsx(Ye, {
                            description: R.strings.comp7_ext.featureNameCapitalized(),
                            title: Oe(r),
                            subTitle: s.jsx(k, {
                                text: String(R.strings.comp7_ext.rewardsScreen.subtitle.tokensRewards(t)),
                                binding: { tokensCount: t },
                            }),
                        }),
                        s.jsx('div', {
                            className: n(ns.rewardList, ns[`rewardList__${e.computes.styleModifier()}`]),
                            children: s.jsx(Fa, {}),
                        }),
                        s.jsx(De, {
                            mainButtonText: i
                                ? R.strings.comp7_ext.rewardsScreen.buttonToSelectedRewards()
                                : R.strings.comp7_ext.rewardsScreen.button(),
                            onClick: i ? a.openNextScreen : a.close,
                        }),
                    ],
                }),
            ],
        });
    }),
    ts = {
        ShowHeader: { name: 'showHeader', delay: 500 },
        ShowResultsRanks: { name: 'showResultsRanks', delay: 400 },
        HideResultsRanks: { name: 'hideResultsRanks', delay: 900 },
        ShowSeasonPoints: { name: 'showSeasonPoints', delay: 400 },
        YearResult: { name: 'yearResult', delay: 800 },
        ShowYearlyRewardsContent: { name: 'showYearlyRewardsContent', delay: 600, stopNextSteps: !0 },
        ShowButtons: { name: 'showButtons', delay: 0 },
    },
    is = r.createContext(null),
    ds = {
        steps: [
            ts.ShowHeader,
            ts.ShowResultsRanks,
            ts.HideResultsRanks,
            ts.ShowSeasonPoints,
            ts.YearResult,
            ts.ShowYearlyRewardsContent,
            ts.ShowButtons,
        ],
    },
    os = { steps: [ts.ShowHeader, ts.ShowYearlyRewardsContent, ts.ShowButtons] },
    ls = a(({ children: e }) => {
        const { model: a } = le(),
            { showSeasonResults: n } = a.root.get(),
            r = G(n ? ds : os)();
        return s.jsx(is.Provider, { value: r, children: e });
    }),
    cs = 'Header_laceBase_89d35087',
    _s = 'Header_laceContainer_c5a1ca97',
    ps = 'Header_titleInner_3b7107a2',
    ms = ({ className: e }) =>
        s.jsx(Ye, {
            description: R.strings.comp7_ext.featureNameCapitalized(),
            title: s.jsx(Z, {
                className: cs,
                classNames: { lace: _s },
                children: s.jsx('div', {
                    className: ps,
                    children: R.strings.comp7_ext.rewardsScreen.title.yearlyRewards(),
                }),
            }),
            className: e,
        }),
    us = 'SeasonResult_20bdef6c',
    hs = 'SeasonResult_animatedContainer_60dea867',
    fs = 'SeasonResult_rank_558c76da',
    ws = 'SeasonResult_seasonPointsCounter_bd975b4a',
    Rs = 'SeasonResult_count_3457a029',
    gs = 'SeasonResult_icon_38b9685d',
    bs = 'SeasonResult_container_2287c7c2',
    Ss = 'SeasonResult_result_72f16a1e',
    xs = 'SeasonResult_seasonName_d5602aaa',
    ks = O.x40,
    ys = a(({ index: e, className: a }) => {
        const { model: r } = le(),
            { rank: t, seasonName: i, seasonPointsCount: d } = r.computes.seasonResult(e),
            o = 0 === d;
        return s.jsxs('div', {
            className: n(us, a),
            children: [
                s.jsxs('div', {
                    className: hs,
                    children: [
                        o
                            ? s.jsx(ee, { size: ks, seasonName: i, className: fs })
                            : s.jsx(Y, { rank: t, size: ks, seasonName: i, className: fs }),
                        s.jsxs('div', {
                            className: ws,
                            children: [
                                s.jsx('div', { className: Rs, children: d }),
                                s.jsx('div', {
                                    className: gs,
                                    style: {
                                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.icons.$dyn(`season_point_${i}_x48`)})`,
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                s.jsxs('div', {
                    className: bs,
                    children: [
                        s.jsx('div', {
                            className: Ss,
                            children: o ? R.strings.comp7_ext.rewardsScreen.noSeasonResult() : E(t),
                        }),
                        s.jsx('div', { className: xs, children: ae(i) }),
                    ],
                }),
            ],
        });
    }),
    vs = 'YearResult_b6387af1',
    js = 'YearResult_counter_b6387af1',
    As = 'YearResult_count_d1b1a8cf',
    Ns = 'YearResult_icon_d50fb6a2',
    Is = 'YearResult_iconBg_cdb73af4',
    Cs = 'YearResult_description_cb2502d5',
    Ls = a(({ className: e }) => {
        const { model: a } = le(),
            r = a.computes.seasonPointsAmount();
        return s.jsxs('div', {
            className: n(vs, e),
            children: [
                s.jsxs('div', {
                    className: js,
                    children: [
                        s.jsx('div', { className: As, children: r }),
                        s.jsx('div', { className: Ns, children: s.jsx('div', { className: Is }) }),
                    ],
                }),
                s.jsx('div', {
                    className: Cs,
                    children: s.jsx(k, { text: R.strings.comp7_ext.rewardsScreen.seasonPointsAmount() }),
                }),
            ],
        });
    }),
    Ts = 'SeasonsResultsHeading_8abb830c',
    Bs = 'SeasonsResultsHeading_plus_1622f752',
    Ms = 'SeasonsResultsHeading_divider_a2d049dc',
    Qs = 'SeasonsResultsHeading_yearResult_272164c1',
    $s = a(({ className: e }) => {
        const { model: a } = le(),
            r = a.seasonsResults.get().length;
        return s.jsxs('div', {
            className: n(Ts, e),
            children: [
                A(r, (e) =>
                    s.jsxs(
                        d.Fragment,
                        { children: [s.jsx(ys, { index: e }), e !== r - 1 && s.jsx('div', { className: Bs })] },
                        e,
                    ),
                ),
                s.jsx('div', { className: Ms }),
                s.jsx(Ls, { className: Qs }),
            ],
        });
    }),
    Hs = {
        content: 'SharedStyles_content_546bae26',
        header: 'SharedStyles_header_c8489435',
        close: 'SharedStyles_close_ad38a864',
        background: 'SharedStyles_background_9ef0fcab',
        backgroundImage: 'SharedStyles_backgroundImage_750e22ab',
        yearlyVehicleContent: 'SharedStyles_yearlyVehicleContent_67af7da8',
        rewardList: 'SharedStyles_rewardList_a69c4271',
        mainRewards: 'SharedStyles_mainRewards_3ae6cb89',
        rewardInfo: 'SharedStyles_rewardInfo_fc361660',
        rewardList__singleMainReward: 'SharedStyles_rewardList__singleMainReward_4200e245',
        ribbon: 'SharedStyles_ribbon_b04028e6',
        additionalRewardsContainer: 'SharedStyles_additionalRewardsContainer_ff0f5579',
        additionalTitle: 'SharedStyles_additionalTitle_53cf4761',
        yearlyVehicleAdditionalRewards: 'SharedStyles_yearlyVehicleAdditionalRewards_b00d5773',
        reward: 'SharedStyles_reward_8089bb74',
        vehicleName: 'SharedStyles_vehicleName_9e2fb0a',
        buttons: 'SharedStyles_buttons_ad38a864',
        fadeIn: 'SharedStyles_fadeIn_4200e245',
        fadeInThreeQuarters: 'SharedStyles_fadeInThreeQuarters_4200e245',
        fadeInHalf: 'SharedStyles_fadeInHalf_4200e245',
        fadeOut: 'SharedStyles_fadeOut_4200e245',
        fadeInWithScale: 'SharedStyles_fadeInWithScale_4200e245',
        slideUp: 'SharedStyles_slideUp_4200e245',
        scale: 'SharedStyles_scale_4200e245',
        raysAppearance: 'SharedStyles_raysAppearance_4200e245',
        rotate: 'SharedStyles_rotate_4200e245',
        'reverse-rotate': 'SharedStyles_reverse-rotate_4200e245',
        glowAppearance: 'SharedStyles_glowAppearance_4200e245',
        highlightAppearance: 'SharedStyles_highlightAppearance_4200e245',
        blink: 'SharedStyles_blink_4200e245',
        slideUpIn: 'SharedStyles_slideUpIn_4200e245',
    },
    Us = (e, a) =>
        e
            ? R.strings.comp7_ext.rewardsScreen.goToVehicle()
            : a
              ? R.strings.comp7_ext.rewardsScreen.buttonToSelectedRewards()
              : R.strings.comp7_ext.rewardsScreen.button(),
    Vs = a(() => {
        const [e, a] = r.useState(!1),
            { model: t, controls: i } = le(),
            { hasYearlyVehicle: d, showSeasonResults: o, hasNextScreen: l } = t.root.get(),
            c = (() => {
                const e = r.useContext(is);
                if (null === e)
                    throw new Error(
                        'useYearlyRewardsApi was called in component, which is not wrapped in YearlyRewardsAnimationContext',
                    );
                return e;
            })(),
            _ = t.additionalRewards.get().length > 0,
            p = r.useCallback(() => (d ? i.changeType(re.YearlyVehicle) : i.close()), [i, d]);
        return (
            r.useEffect(() => {
                let e = 0;
                const s = (s) => {
                    switch (s) {
                        case ts.ShowHeader:
                            g.sound(R.sounds.comp_7_ranks_shine());
                            break;
                        case ts.ShowSeasonPoints:
                            g.sound(R.sounds.comp_7_annual_reward_rank_points());
                            break;
                        case ts.YearResult:
                            e = window.setTimeout(() => g.sound(R.sounds.comp_7_annual_reward_rank_points()), 300);
                            break;
                        case ts.ShowYearlyRewardsContent:
                            a(!0);
                    }
                };
                return (
                    c.events.on('change', s),
                    () => {
                        (c.events.off('change', s), window.clearTimeout(e));
                    }
                );
            }, [c.events]),
            s.jsxs(He, {
                ref: c.rootRef,
                closeCallback: p,
                classNames: { closeButton: Hs.close },
                children: [
                    s.jsx('div', {
                        className: Hs.background,
                        children: s.jsx('div', {
                            className: Hs.backgroundImage,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.backgrounds.yearly_rewards_screen_bg()})`,
                            },
                        }),
                    }),
                    s.jsxs('div', {
                        className: Hs.content,
                        children: [
                            s.jsx(ms, { className: Hs.header }),
                            o && s.jsx($s, {}),
                            e &&
                                s.jsx(za, {
                                    className: n(Hs.rewardList, Hs[`rewardList__${t.computes.styleModifier()}`]),
                                    mainRewardsClassName: Hs.mainRewards,
                                    mainRewardsClassNames: { ribbon: Hs.ribbon },
                                    rewardClassNames: { info: Hs.rewardInfo },
                                    additionalContainerClassName: Hs.additionalRewardsContainer,
                                    additionalTitleClassName: Hs.additionalTitle,
                                    onMainRewardsAnimationComplete: _ ? void 0 : c.resume,
                                    onAdditionalRewardsAnimationComplete: _ ? c.resume : void 0,
                                }),
                            s.jsx(De, {
                                className: Hs.buttons,
                                mainButtonText: Us(d, l),
                                onClick: d ? () => i.changeType(re.YearlyVehicle) : i.close,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Ps = {
        ShowHeader: { name: 'showHeader', delay: 500 },
        ShowPoints: { name: 'showPoints', delay: 1200 },
        ShowContent: { name: 'showContent', delay: 1e3 },
        ShowCrew: { name: 'showCrew', delay: 700, stopNextSteps: !0 },
        ShowButtons: { name: 'showButtons', delay: 0 },
    },
    Es = r.createContext(null),
    Ys = () => {
        const e = r.useContext(Es);
        if (null === e)
            throw new Error(
                'useYearlyVehicleApi was called in component, which is not wrapped in YearlyVehicleAnimationContext',
            );
        return e;
    },
    Os = { steps: [Ps.ShowHeader, Ps.ShowPoints, Ps.ShowContent, Ps.ShowCrew, Ps.ShowButtons], autoStart: !1 },
    qs = { steps: [Ps.ShowHeader, Ps.ShowContent, Ps.ShowCrew, Ps.ShowButtons], autoStart: !1 },
    Ws = a(({ children: e }) => {
        const { model: a } = le(),
            { showSeasonResults: n } = a.root.get(),
            r = G(n ? Os : qs)();
        return s.jsx(Es.Provider, { value: r, children: e });
    }),
    zs = 16 / 9,
    Ds = 'VehicleVideo_fff13cb5',
    Fs = 'VehicleVideo_video_c308965d',
    Ks = 'VehicleVideo_loopedVideo_bd56ccea',
    Gs = 'VehicleVideo_loopedVideo__visible_179edfc0',
    Js = a(({ rank: e, playerRef: a, className: t, onEnded: i, ...d }) => {
        const { model: o, controls: l } = le(),
            { videoState: c } = o.root.get(),
            _ = Ys(),
            p = r.useRef(null),
            { screenWidthRem: m, screenHeightRem: u } = S(),
            h = `yearly_style_${W(e)}`,
            g = c === ie.Ended,
            b = r.useMemo(
                () =>
                    (({ screenWidthRem: e, screenHeightRem: a }) => {
                        let s, n;
                        return (
                            e / a > zs ? ((s = e), (n = e / zs)) : ((s = a * zs), (n = a)),
                            { width: `${s}rem`, height: `${n}rem` }
                        );
                    })({ screenWidthRem: m, screenHeightRem: u }),
                [u, m],
            ),
            x = r.useCallback(() => {
                var e;
                (null == (e = a.current) || e.play(), l.changeVideoState(ie.Started));
            }, [l, a]),
            k = r.useCallback(() => {
                l.changeVideoState(ie.Ended);
            }, [l]),
            y = r.useCallback(() => {
                var e;
                null == (e = a.current) || e.pause();
            }, [a]),
            v = r.useCallback(() => {
                var e;
                null == (e = a.current) || e.play();
            }, [a]),
            j = r.useCallback(
                (e) => {
                    var a;
                    (null == i || i(e), k(), null == (a = p.current) || a.play());
                },
                [k, i],
            ),
            [A, N] = f(() => {
                var e;
                const s = null == (e = a.current) ? void 0 : e.getCachedKeyframes();
                return !(null == s ? void 0 : s.length) || (x(), !1);
            });
        return (
            w(() => (A(), N)),
            r.useLayoutEffect(() => {
                switch (c) {
                    case ie.Paused:
                        return y();
                    case ie.Resumed:
                        return v();
                }
            }, [y, v, c]),
            r.useLayoutEffect(() => {
                const e = (e) => (e ? y() : v());
                return (
                    engine.on('clientMinimized', e),
                    () => {
                        engine.off('clientMinimized', e);
                    }
                );
            }, [y, v]),
            r.useEffect(() => {
                g && _.start();
            }, [g, _]),
            s.jsxs('div', {
                className: n(Ds, t),
                children: [
                    !g &&
                        s.jsx(M, {
                            ...d,
                            className: Fs,
                            ref: a,
                            autoplay: !1,
                            preload: 'auto',
                            src: String(R.videos.comp7.$dyn(h)),
                            style: b,
                            onEnded: j,
                        }),
                    s.jsx(M, {
                        className: n(Ks, g && Gs),
                        autoplay: !1,
                        ref: p,
                        loop: !0,
                        preload: 'auto',
                        src: String(R.videos.comp7.$dyn(`${h}_loop`)),
                        style: b,
                    }),
                ],
            })
        );
    }),
    Xs = a(() => {
        const [e, a] = r.useState(!1),
            { model: n, controls: t } = le(),
            { showSeasonResults: i, hasNextScreen: d, rank: o } = n.root.get(),
            l = n.vehicle.get(),
            c = r.useRef(null),
            _ = Ys(),
            p = r.useCallback(() => {
                var e, a, s;
                const n = null == (e = c.current) ? void 0 : e.getCurrentTime(),
                    r = null == (a = c.current) ? void 0 : a.getDuration();
                return 'number' == typeof n && 'number' == typeof r && n <= r
                    ? null == (s = c.current)
                        ? void 0
                        : s.setCurrentTime(r)
                    : d
                      ? t.openNextScreen()
                      : t.close();
            }, [t, d]);
        return (
            r.useEffect(() => {
                const e = (e) => {
                    switch (e) {
                        case Ps.ShowHeader:
                            g.sound(R.sounds.comp_7_ranks_shine());
                            break;
                        case Ps.ShowPoints:
                        case Ps.ShowContent:
                            g.sound(R.sounds.comp_7_annual_reward_rank_points());
                            break;
                        case Ps.ShowCrew:
                            a(!0);
                    }
                };
                return (
                    _.events.on('change', e),
                    () => {
                        _.events.off('change', e);
                    }
                );
            }, [_.events]),
            s.jsxs(He, {
                ref: _.rootRef,
                closeCallback: p,
                classNames: { closeButton: Hs.close },
                children: [
                    s.jsx('div', { className: Hs.background, children: s.jsx(Js, { rank: o, playerRef: c }) }),
                    s.jsxs('div', {
                        className: Hs.content,
                        children: [
                            s.jsx(ms, { className: Hs.header }),
                            i && s.jsx($s, {}),
                            s.jsxs('div', {
                                className: Hs.yearlyVehicleContent,
                                children: [
                                    s.jsx(se, {
                                        ...l,
                                        size: ne.x48,
                                        className: Hs.vehicleName,
                                        tooltipArgs: { vehicleCD: l.vehicleCD, tooltipId: 'shopVehicle' },
                                        role: l.roleKey,
                                        vehicleCD: l.vehicleCD,
                                    }),
                                    s.jsx('div', {
                                        className: Hs.additionalTitle,
                                        children: R.strings.comp7_ext.rewardsScreen.yearlyVehicleCrew(),
                                    }),
                                    s.jsx('div', {
                                        className: Hs.yearlyVehicleAdditionalRewards,
                                        children:
                                            e &&
                                            s.jsx($a, {
                                                delay: 0,
                                                onAnimationComplete: _.resume,
                                                classNames: { reward: Hs.reward },
                                            }),
                                    }),
                                ],
                            }),
                            s.jsx(De, {
                                className: Hs.buttons,
                                mainButtonText: d
                                    ? R.strings.comp7_ext.rewardsScreen.selectEquipment()
                                    : R.strings.comp7_ext.rewardsScreen.button(),
                                onClick: d ? t.openNextScreen : t.close,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Zs = a(() => {
        const { model: e } = le(),
            { type: a } = e.root.get();
        switch (a) {
            case re.QualificationRank:
            case re.QualificationRewards:
                return s.jsx(da, { children: s.jsx(Ga, {}) });
            case re.Rank:
            case re.RankRewards:
                return s.jsx(es, {});
            case re.Division:
                return s.jsx(sa, {});
            case re.TokensRewards:
                return s.jsx(rs, {});
            case re.YearlyRewards:
                return s.jsx(ls, { children: s.jsx(Vs, {}) });
            case re.YearlyVehicle:
                return s.jsx(Ws, { children: s.jsx(Xs, {}) });
            case re.SelectedRewards:
                return s.jsx(ss, {});
            default:
                return (console.error('[AppFactory]: Provide application for reward screen type: ', a), null);
        }
    });
Q(s.jsx($, { children: s.jsx(oe, { children: s.jsx(Zs, {}) }) }));
