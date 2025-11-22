import {
    S as e,
    x as a,
    j as s,
    w as n,
    r,
    Q as t,
    P as i,
    R as d,
    T as o,
    O as l,
    U as c,
} from '../../../chunks/vendor.js';
import {
    i as _,
    at as p,
    cM as m,
    aF as u,
    al as h,
    cN as f,
    u as w,
    p as g,
    cO as b,
    e as S,
    B as x,
    c8 as k,
    F as y,
    T as v,
    ca as j,
    m as A,
    cP as N,
    d as I,
    cQ as C,
    cR as T,
    cf as L,
    cS as B,
    r as M,
    U as Q,
} from '../../../chunks/lib.js';
import { g as $, a as H } from '../../../chunks/get_division_name.js';
import { g as U, a as V, b as P } from '../../../chunks/get_rank_name.js';
import { R as E, a as Y, i as O, g as q } from '../../../chunks/rank_emblem.js';
import { A as W } from '../../../chunks/animated_background.js';
import { R as z } from '../../../chunks/enums.js';
import { C as D } from '../../../chunks/close_button.js';
import { g as F } from '../../../chunks/get_button_size.js';
import { c as K } from '../../../chunks/animation_api_factory.js';
import { Q as G } from '../../../chunks/qualification_battle_item.js';
import { g as J } from '../../../chunks/get_comp7_reward.js';
import { L as X } from '../../../chunks/lace_divider.js';
import { Q as Z } from '../../../chunks/qualification_emblem.js';
import { g as ee } from '../../../chunks/get_season_name.js';
import { V as ae, a as se } from '../../../chunks/vehicle_name.js';
/* empty css                     */ var ne = ((e) => (
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
    ))(ne || {}),
    re = ((e) => ((e.None = 'none'), (e.Open = 'open'), (e.Discount = 'discount'), e))(re || {}),
    te = ((e) => (
        (e[(e.NotStarted = 0)] = 'NotStarted'),
        (e[(e.Started = 1)] = 'Started'),
        (e[(e.Paused = 2)] = 'Paused'),
        (e[(e.Resumed = 3)] = 'Resumed'),
        (e[(e.Ended = 4)] = 'Ended'),
        e
    ))(te || {});
const ie = [ne.RankRewards, ne.QualificationRewards],
    [de, oe] = _()(
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
                    const a = u(s.qualificationBattles.get(), e);
                    if (!a) throw new Error(`qualification battle with index ${e} was not found`);
                    return a.state;
                }),
                r = e(
                    (e) => {
                        const a = u(s.seasonsResults.get(), e);
                        if (!a) throw new Error(`seasonResult with index ${e} was not found`);
                        return { ...a };
                    },
                    { equals: m },
                ),
                t = e(() => p(s.seasonsResults.get(), (e, a) => e + a.seasonPointsCount, 0)),
                i = e(() => {
                    const { type: e, shopInfoType: a } = s.root.get();
                    return ie.includes(e) && a !== re.None;
                }),
                d = e(() =>
                    h(s.rankList.get(), (e) => U(e)).join(
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
    le = 'DivisionAchievement_baac6f31',
    ce = 'DivisionAchievement_backLayer_419ba39d',
    _e = a(({ rankClassname: e }) => {
        const { model: a } = oe(),
            { rank: n, division: r, seasonName: t } = a.root.get();
        return s.jsxs('div', {
            className: le,
            children: [
                s.jsx(W, { className: ce }),
                s.jsx(E, { seasonName: t, rank: n, division: r, size: Y.x600, className: e }),
            ],
        });
    }),
    pe = 'Notice_357328d',
    me = 'Notice_noticeTitle_ed6239aa',
    ue = 'Notice_noticeIcon_c8b8f56f',
    he = ({ className: e }) =>
        s.jsxs('div', {
            className: n(pe, e),
            children: [
                s.jsxs('div', {
                    className: me,
                    children: [s.jsx('span', { className: ue }), R.strings.comp7_ext.rewardsScreen.notice.title()],
                }),
                R.strings.comp7_ext.rewardsScreen.notice.subTitle(),
            ],
        }),
    fe = {
        0: 'comp_7_rank_iron',
        2: 'comp_7_rank_bronze',
        4: 'comp_7_rank_silver',
        6: 'comp_7_rank_gold',
        9: 'comp_7_rank_champion',
        12: 'comp_7_rank_legend',
    },
    we = {
        [z.First]: { start: 0, end: 2 },
        [z.Second]: { start: 2, end: 4 },
        [z.Third]: { start: 4, end: 6 },
        [z.Fourth]: { start: 6, end: 9 },
        [z.Fifth]: { start: 9, end: 12 },
        [z.Sixth]: { start: 12, end: 15 },
    },
    Re = {
        [ne.Rank]: 'rank',
        [ne.Division]: 'division',
        [ne.RankRewards]: 'rankRewards',
        [ne.TokensRewards]: 'tokensRewards',
        [ne.QualificationRewards]: 'qualificationRewards',
        [ne.QualificationRank]: 'qualificationRank',
        [ne.YearlyVehicle]: 'yearlyVehicle',
        [ne.YearlyRewards]: 'yearlyRewards',
        [ne.SelectedRewards]: 'selectedRewards',
    },
    ge = 'RankAnimation_bad289e4',
    be = 'RankAnimation_rank_4e1e89ce',
    Se = 'RankAnimation_backLayer_9b56b7aa',
    xe = 'RankAnimation_backLayer__visible_ec12c9bd',
    ke = 'RankAnimation_rankEmblemGhost_667d48b7',
    ye = 'RankAnimation_rankEmblemGhost__visible_ec12c9bd',
    ve = new Set(),
    je = a(({ playerRef: e, onKeyframesLoaded: a, onAnimationComplete: t, className: i, classNames: d }) => {
        const { model: o } = oe(),
            { rank: l, division: c, seasonName: _ } = o.root.get(),
            p = we[l],
            m = O(l),
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
                                s = fe[a];
                            if (a >= p.end) return void x();
                            s && !ve.has(s) && (g.sound(s), ve.add(s));
                        }
                    });
            }, [x, e, p.end]),
            r.useEffect(() => {
                u && g.sound(R.sounds.comp_7_ranks_shine());
            }, [u]),
            s.jsxs('div', {
                className: n(ge, i),
                children: [
                    s.jsx(W, { className: n(Se, u && xe, null == d ? void 0 : d.backLayer) }),
                    s.jsx(b, {
                        className: n(be, null == d ? void 0 : d.rank),
                        src: String(R.videos.comp7.$dyn(`rankAnimation_${_}`)),
                        ref: e,
                        autoplay: !1,
                        preload: 'auto',
                    }),
                    m &&
                        s.jsx(E, {
                            seasonName: _,
                            rank: l,
                            division: c,
                            size: Y.x600,
                            className: n(be, ke, u && ye, null == d ? void 0 : d.rank),
                        }),
                ],
            })
        );
    }),
    Ae = a(({ className: e }) => {
        const { model: a } = oe(),
            { rank: n } = a.root.get(),
            t = r.useRef(null);
        return s.jsx(je, {
            playerRef: t,
            onKeyframesLoaded: () => {
                var e;
                return null == (e = t.current) ? void 0 : e.goToAndPlay(we[n].start);
            },
            classNames: { rank: e },
        });
    }),
    Ne = 'Achievement_b612c728',
    Ie = 'Achievement_container_2b000480',
    Ce = 'Achievement_container__withNotice_f69304b3',
    Te = 'Achievement_rank_8fc6e94',
    Le = 'Achievement_notice_17bb36b',
    Be = a(() => {
        const { model: e } = oe(),
            { type: a, hasRankInactivity: d } = e.root.get();
        r.useEffect(() => g.sound(R.sounds.comp_7_new_rank()), []);
        const o = t({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400, config: { duration: 400 } });
        return s.jsxs('div', {
            className: Ne,
            children: [
                s.jsx(i.div, {
                    className: n(Ie, d && Ce),
                    style: o,
                    children: (() => {
                        switch (a) {
                            case ne.Rank:
                                return s.jsx(Ae, { className: Te });
                            case ne.Division:
                                return s.jsx(_e, { rankClassname: Te });
                            default:
                                return (
                                    console.error('[Achievement] Unreachable branch: add separate Achievement type'),
                                    null
                                );
                        }
                    })(),
                }),
                d && s.jsx(he, { className: Le }),
            ],
        });
    }),
    Me = 'AppContainer_a6708fb6',
    Qe = 'AppContainer_close_8c51fefb',
    $e = a(
        d.forwardRef(({ children: e, className: a, classNames: r, closeCallback: t }, i) => {
            const { controls: d } = oe();
            return s.jsxs('div', {
                className: n(Me, a),
                ref: i,
                children: [
                    e,
                    s.jsx(D, { className: n(Qe, null == r ? void 0 : r.closeButton), onClick: t ?? d.close }),
                ],
            });
        }),
    ),
    He = 'AppHeader_a92b2706',
    Ue = 'AppHeader_description_9e9d375d',
    Ve = 'AppHeader_subTitle_31b055c6',
    Pe = 'AppHeader_title_d9d173d5',
    Ee = ({ description: e, title: a, subTitle: r, className: t, classNames: i }) =>
        s.jsxs('div', {
            className: n(He, t),
            children: [
                e && s.jsx('div', { className: n(Ue, null == i ? void 0 : i.description), children: e }),
                a && s.jsx('div', { className: n(Pe, null == i ? void 0 : i.title), children: a }),
                r && s.jsx('div', { className: n(Ve, null == i ? void 0 : i.subTitle), children: r }),
            ],
        }),
    Ye = (e) => `${R.strings.comp7_ext.rewardsScreen.title.$dyn(Re[e])}`,
    Oe = (e) => `${R.strings.comp7_ext.rewardsScreen.subtitle.$dyn(Re[e])}`,
    qe = 'Buttons_38c48650',
    We = 'Buttons_button_9889e05c',
    ze = a(({ className: e, mainButtonText: a = R.strings.comp7_ext.rewardsScreen.button(), onClick: r }) => {
        const { model: t, controls: i } = oe(),
            { mediaSize: d } = S(),
            o = F(d);
        return s.jsxs('div', {
            className: n(qe, e),
            children: [
                s.jsx(x, { theme: x.themes.primary, size: o, onClick: r ?? i.close, className: We, children: a }),
                t.computes.hasShopInfo() &&
                    s.jsx(x, {
                        theme: x.themes.secondary,
                        size: o,
                        onClick: i.openShop,
                        className: We,
                        children: R.strings.comp7_ext.rewardsScreen.buttonToShop(),
                    }),
            ],
        });
    }),
    De = ({ children: e, className: a }) => {
        const n = t({ from: { opacity: 0 }, to: { opacity: 1 }, leave: { opacity: 0 }, config: o.molasses });
        return s.jsx(i.div, { className: a, style: { ...n }, children: e });
    },
    Fe = 'ScreenBackground_89f63203',
    Ke = 'ScreenBackground_layer_492c4adb',
    Ge = 'ScreenBackground_layer__blurred_9ac55ca6',
    Je = ({ bgImage: e, isBlurred: a = !1, className: r, classNames: t }) =>
        s.jsx('div', {
            className: n(Fe, r),
            children: s.jsx('div', {
                className: n(Ke, a && Ge, null == t ? void 0 : t.layer),
                style: { backgroundImage: `url(${e})` },
            }),
        }),
    Xe = (e, a) => {
        var s;
        const n = null == (s = R.images.comp7.gui.maps.icons.backgrounds.$dyn(e)) ? void 0 : s.$dyn(q(a));
        return n ? `${n}` : (console.error(`no background was found for rank ${a}, season ${e}`), R.invalid());
    },
    Ze = 'DivisionApp_achievement_826bdec5',
    ea = 'DivisionApp_content_1a0c9a1e',
    aa = a(() => {
        const { model: e } = oe(),
            { type: a, seasonName: n, rank: r, division: t } = e.root.get();
        return s.jsxs($e, {
            children: [
                s.jsx(Je, { bgImage: Xe(n, r), isBlurred: !0 }),
                s.jsxs(De, {
                    className: ea,
                    children: [
                        s.jsx(Ee, {
                            description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(n)}`,
                            title: s.jsx(y, { text: Ye(a), binding: { division: $(t) } }),
                            subTitle: s.jsx(k, { text: Oe(a), binding: { rank: U(r) } }),
                        }),
                        s.jsx('div', { className: Ze, children: s.jsx(Be, {}) }),
                        s.jsx(ze, {}),
                    ],
                }),
            ],
        });
    }),
    sa = {
        OpeningContent: { name: 'openingContent', delay: 100 },
        ShowBattlesList: { name: 'showBattlesList', delay: 400 },
        FillBattles: { name: 'fillBattles', delay: 500 },
        PauseBeforeRank: { name: 'pauseBeforeShowRank', delay: 1e3 },
        ShowRank: { name: 'showRank', delay: 200, stopNextSteps: !0 },
        ChangeBack: { name: 'changeBack', delay: 0 },
        ShowHeader: { name: 'showHeader', delay: 1e3 },
        ShowFooter: { name: 'showFooter', delay: 700 },
    },
    na = K({
        steps: [
            sa.OpeningContent,
            sa.ShowBattlesList,
            sa.FillBattles,
            sa.PauseBeforeRank,
            sa.ShowRank,
            sa.ChangeBack,
            sa.ShowHeader,
            sa.ShowFooter,
        ],
        autoStart: !1,
    }),
    ra = r.createContext(null),
    ta = () => {
        const e = r.useContext(ra);
        if (null === e)
            throw new Error('useAnimationApi was called in component, which is not wrapped in AnimationProvider');
        return e;
    },
    ia = ({ children: e }) => {
        const a = na();
        return s.jsx(ra.Provider, { value: a, children: e });
    },
    da = 'QualificationBackground_rankBg_a6f53201',
    oa = 'QualificationBackground_rankBg__blurred_e4de0e50',
    la = 'QualificationBackground_rankBg__active_bbd82e51',
    ca = 'QualificationBackground_qualification_a4d51d94',
    _a = a(() => {
        var e;
        const { model: a } = oe(),
            { seasonName: t, rank: i, type: d } = a.root.get(),
            [o, l] = r.useState(!1),
            c = `url(${null == (e = R.images.comp7.gui.maps.icons.backgrounds.$dyn(t)) ? void 0 : e.$dyn('qualification')})`,
            _ = `url(${Xe(t, i)})`,
            p = ta();
        return (
            r.useEffect(() => {
                const e = (e) => {
                    e === sa.ChangeBack && l(!0);
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
                    s.jsx('div', { className: ca, style: { backgroundImage: c } }),
                    s.jsx('div', {
                        className: n(da, d === ne.QualificationRank && oa, o && la),
                        style: { backgroundImage: _ },
                    }),
                ],
            })
        );
    });
var pa = ((e) => (
    (e.NotPlayed = 'notPlayed'),
    (e.InProgress = 'inProgress'),
    (e.Victory = 'victory'),
    (e.Defeat = 'defeat'),
    e
))(pa || {});
const ma = 'BattleItem_14e04a96',
    ua = 'BattleItem_item_b8e00cd3',
    ha = a(({ index: e, className: a }) => {
        const { model: t } = oe(),
            { mediaSize: d } = S(),
            c = ta(),
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
                    e === sa.FillBattles &&
                        p.run(() => {
                            (g.sound(
                                ((e) => {
                                    switch (e) {
                                        case pa.Victory:
                                            return 'comp_7_rank_swords_green';
                                        case pa.Defeat:
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
                className: n(ma, a),
                children: f((e, a) =>
                    s.jsx(i.div, {
                        style: e,
                        className: ua,
                        children: s.jsx(G, { state: a, size: d >= j.Medium ? 'x234' : 'x173' }),
                    }),
                ),
            })
        );
    }),
    fa = 'QualificationRank_d56c988a',
    wa = 'QualificationRank_rank_3886a852',
    Ra = 'QualificationRank_rankAnimation_55e40415',
    ga = 'QualificationRank_battleList_53e81164',
    ba = 'QualificationRank_battleItem_ddd308eb',
    Sa = 'QualificationRank_notice_6d3c429d',
    xa = { rank: Ra },
    ka = a(() => {
        const { model: e } = oe(),
            { hasRankInactivity: a } = e.root.get(),
            n = r.useRef(null),
            t = ta();
        return (
            r.useEffect(() => {
                const e = (e) => {
                    var a;
                    switch (e) {
                        case sa.OpeningContent:
                            g.sound(R.sounds.comp_7_rank_appear());
                            break;
                        case sa.ShowRank:
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
                className: fa,
                children: [
                    s.jsx('div', {
                        className: wa,
                        children: s.jsx(je, {
                            playerRef: n,
                            onAnimationComplete: t.resume,
                            onKeyframesLoaded: () => t.start(),
                            classNames: xa,
                        }),
                    }),
                    s.jsx('div', {
                        className: ga,
                        children: A(e.qualificationBattles.get().length, (e) =>
                            s.jsx(ha, { index: e, className: ba }, e),
                        ),
                    }),
                    a && s.jsx(he, { className: Sa }),
                ],
            })
        );
    }),
    ya = {
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
    va = a(() => {
        const { model: e } = oe(),
            { type: a, rank: n, division: r } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ee, {
                    className: ya.header,
                    description: R.strings.comp7_ext.rewardsScreen.description.qualificationEnded(),
                    title: s.jsx(k, { text: Ye(a), binding: { rankUpperName: V(R.strings.comp7_ext.rankUpper, n) } }),
                    subTitle: O(n) ? H(r) : void 0,
                }),
                s.jsx('div', { className: ya.qualificationRank, children: s.jsx(ka, {}) }),
            ],
        });
    }),
    ja = {
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
    Aa = (e, a = 0) => ({ appear: a + 400 + 200 * e, enter: 600 }),
    Na = () => {
        g.sound(R.sounds.bp_reward());
    },
    Ia = ({ rewardIndex: e, delay: a = 0, children: r }) =>
        s.jsx(c, {
            appear: !0,
            in: !0,
            timeout: Aa(e, a),
            onEntered: Na,
            children: (e) => s.jsx('div', { className: n(ja.base, ja[e]), children: r }),
        }),
    Ca = 10,
    Ta = 'AdditionalRewards_81a45598',
    La = 'AdditionalRewards_reward_f7b41ae4',
    Ba = 'AdditionalRewards_vehiclesRentBase_3afa6e1a',
    Ma = 'AdditionalRewards_vehiclesRentLabel_bed51da4',
    Qa = ({ delay: e, onAnimationComplete: a, className: t, classNames: i }) => {
        const { model: d } = oe(),
            { mediaSize: o } = S(),
            l = o >= j.Medium ? N.Big : N.Small,
            c = d.additionalRewards.get().length,
            _ = c > Ca;
        const { appear: p, enter: m } = Aa(Math.min(d.additionalRewards.get().length, Ca), e),
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
                        Ia,
                        {
                            rewardIndex: r,
                            delay: e,
                            children: s.jsx('div', {
                                className: n(La, null == i ? void 0 : i.reward),
                                children: s.jsx(T, {
                                    ...J({ reward: a, size: l }),
                                    className: n(t && Ba),
                                    classNames: { info: n(t && Ma) },
                                }),
                            }),
                        },
                        r,
                    );
                }),
                _ &&
                    s.jsx(Ia, {
                        rewardIndex: f.length,
                        delay: e,
                        children: s.jsx('div', {
                            className: La,
                            children: s.jsx(T, {
                                name: '',
                                image: `R.images.gui.maps.icons.quests.bonuses.${l}.default`,
                                size: l,
                                value: L(R.strings.tooltips.quests.awards.additional.bottom(), { count: c - Ca + 1 }),
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
    $a = {
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
    Ha = { periodicIcon: $a.rewardTimer, info: $a.rewardInfo },
    Ua = a(({ className: e, classNames: a, rewardClassNames: t, onAnimationComplete: i }) => {
        const { model: d } = oe(),
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
            { appear: _ } = Aa(o.length);
        return (
            r.useEffect(() => I(() => (null == i ? void 0 : i()), _), [_, i]),
            s.jsxs('div', {
                className: n($a.base, e, $a[`base__${d.computes.styleModifier()}`]),
                children: [
                    s.jsx('div', { className: n($a.ribbon, null == a ? void 0 : a.ribbon) }),
                    h(o, (e, r) => {
                        const i = B(e.name);
                        return s.jsx(
                            Ia,
                            {
                                rewardIndex: r,
                                children: s.jsxs('div', {
                                    className: $a.rewardWrapper,
                                    children: [
                                        s.jsx(T, {
                                            ...J({ reward: e, size: c }),
                                            className: $a.reward,
                                            classNames: { ...Ha, ...t },
                                        }),
                                        s.jsx('div', {
                                            className: n(
                                                $a.rewardLabel,
                                                $a[`rewardLabel__${e.name}`],
                                                $a[`rewardLabel__${i}`],
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
    Va = {
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
    Pa = a(({ className: e }) => {
        const { model: a } = oe(),
            { shopInfoType: r } = a.root.get();
        return s.jsxs('div', {
            className: n(Va.base, e),
            children: [
                s.jsx('div', { className: n(Va.icon, Va[`icon__${r}`]) }),
                s.jsxs('div', {
                    className: Va.content,
                    children: [
                        s.jsx('div', {
                            className: Va.header,
                            children: `${R.strings.comp7_ext.rewardsScreen.shopInfo.header.$dyn(r)}`,
                        }),
                        s.jsx('div', {
                            className: Va.text,
                            children: `${R.strings.comp7_ext.rewardsScreen.shopInfo.text.$dyn(r)}`,
                        }),
                    ],
                }),
            ],
        });
    }),
    Ea = 'RewardList_ea855648',
    Ya = 'RewardList_additional_5346cd7f',
    Oa = 'RewardList_additionalTitle_73a7506c',
    qa = 'RewardList_shopInfoContainer_df512c7a',
    Wa = a(
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
            const { model: p } = oe(),
                m = p.mainRewards.get(),
                u = p.additionalRewards.get().length,
                h = p.computes.hasShopInfo(),
                f = Aa(m.length),
                w = Aa(Math.min(Ca, u)),
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
                    className: n(Ea, e),
                    style: {
                        '--additionalTitleDelay': `${b}ms`,
                        '--additionalTitleDuration': '300ms',
                        '--shopInfoDelay': `${S}ms`,
                        '--shopInfoDuration': '300ms',
                    },
                    children: [
                        s.jsx(Ua, { className: a, classNames: t, rewardClassNames: i, onAnimationComplete: c }),
                        s.jsx('div', {
                            className: n(Ya, d),
                            children:
                                Boolean(u) &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        s.jsx('div', {
                                            className: n(Oa, o),
                                            children: R.strings.comp7_ext.rewardsScreen.additionalRewards(),
                                        }),
                                        s.jsx(Qa, { delay: b, classNames: l, onAnimationComplete: _ }),
                                    ],
                                }),
                        }),
                        h && s.jsx(Pa, { className: qa }),
                    ],
                })
            );
        },
    ),
    za = {
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
    Da = a(() => {
        const { model: e } = oe();
        return s.jsx(Wa, {
            className: n(za.base, za[`base__${e.computes.styleModifier()}`]),
            additionalContainerClassName: za.additionalContainer,
            additionalTitleClassName: za.additionalTitle,
        });
    }),
    Fa = a(() => {
        const { model: e } = oe(),
            { type: a } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ee, {
                    className: ya.header,
                    description: String(R.strings.comp7_ext.rewardsScreen.description.qualificationEnded()),
                    title: Ye(a),
                    subTitle: s.jsx(k, {
                        text: String(R.strings.comp7_ext.rewardsScreen.subtitle.qualificationRewards()),
                        binding: { ranks: e.computes.ranksList() },
                    }),
                }),
                s.jsx('div', {
                    className: n(ya.rewardList, ya[`rewardList__${e.computes.styleModifier()}`]),
                    children: s.jsx(Da, {}),
                }),
            ],
        });
    }),
    Ka = a(() => {
        const { model: e, controls: a } = oe(),
            { type: n } = e.root.get(),
            t = ta(),
            i = r.useCallback(() => {
                (a.close(), t.skipAll());
            }, [t, a]);
        return s.jsxs($e, {
            closeCallback: i,
            ref: t.rootRef,
            children: [
                s.jsx(_a, {}),
                n === ne.QualificationRank && s.jsx(va, {}),
                n === ne.QualificationRewards && s.jsx(Fa, {}),
                s.jsx(ze, { className: ya.buttons, onClick: i }),
            ],
        });
    }),
    Ga = {
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
    Ja = a(() => {
        const { model: e } = oe(),
            { type: a, rank: n, division: r, seasonName: t } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ee, {
                    description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(t)}`,
                    title: s.jsx(k, { text: Ye(a), binding: { rankUpperName: V(R.strings.comp7_ext.rankUpper, n) } }),
                    subTitle: O(n) ? H(r) : void 0,
                }),
                s.jsx('div', { className: Ga.achievement, children: s.jsx(Be, {}) }),
            ],
        });
    }),
    Xa = a(() => {
        const { model: e } = oe(),
            { type: a, rank: r, seasonName: t } = e.root.get();
        return s.jsxs(s.Fragment, {
            children: [
                s.jsx(Ee, {
                    description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(t)}`,
                    title: s.jsx(k, { text: Ye(a) }),
                    subTitle: s.jsx(k, { text: Oe(a), binding: { rank: U(r) } }),
                }),
                s.jsx('div', {
                    className: n(Ga.rewardList, Ga[`rewardList__${e.computes.styleModifier()}`]),
                    children: s.jsx(Da, {}),
                }),
            ],
        });
    }),
    Za = a(() => {
        const { model: e } = oe(),
            { type: a, seasonName: n, rank: r } = e.root.get();
        return s.jsxs($e, {
            children: [
                s.jsx(Je, { bgImage: Xe(n, r), isBlurred: a === ne.Rank }),
                s.jsxs(De, {
                    className: Ga.content,
                    children: [
                        a === ne.Rank && s.jsx(Ja, {}),
                        a === ne.RankRewards && s.jsx(Xa, {}),
                        s.jsx(ze, {
                            mainButtonText:
                                a === ne.Rank
                                    ? R.strings.comp7_ext.rewardsScreen.buttonToRewards()
                                    : R.strings.comp7_ext.rewardsScreen.button(),
                        }),
                    ],
                }),
            ],
        });
    }),
    es = {
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
    as = a(() => {
        const { model: e } = oe(),
            a = e.mainRewards.get().length;
        return (
            w(() => {
                g.sound(R.sounds.comp_7_shop_purchase_module());
            }),
            s.jsxs($e, {
                children: [
                    s.jsx(Je, { bgImage: R.images.comp7.gui.maps.icons.backgrounds.yearly_rewards_screen_bg() }),
                    s.jsxs(De, {
                        className: es.content,
                        children: [
                            s.jsx(Ee, {
                                description: R.strings.comp7_ext.featureNameCapitalized(),
                                title: R.strings.comp7_ext.rewardsScreen.title.selectedRewards(a),
                            }),
                            s.jsx('div', {
                                className: n(es.rewardList, es[`rewardList__${e.computes.styleModifier()}`]),
                                children:
                                    e.additionalRewards.get().length > 0
                                        ? s.jsx(Da, {})
                                        : s.jsx(Ua, {
                                              className: es.mainRewards,
                                              classNames: { rewardLabel: es.rewardLabel },
                                          }),
                            }),
                            s.jsx(ze, {}),
                        ],
                    }),
                ],
            })
        );
    }),
    ss = {
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
    ns = a(() => {
        const { model: e, controls: a } = oe(),
            { type: r, tokensCount: t, hasNextScreen: i } = e.root.get();
        return s.jsxs($e, {
            children: [
                s.jsx(Je, { bgImage: R.images.comp7.gui.maps.icons.backgrounds.tokens() }),
                s.jsxs(De, {
                    className: ss.content,
                    children: [
                        s.jsx(Ee, {
                            description: R.strings.comp7_ext.featureNameCapitalized(),
                            title: Ye(r),
                            subTitle: s.jsx(k, {
                                text: String(R.strings.comp7_ext.rewardsScreen.subtitle.tokensRewards(t)),
                                binding: { tokensCount: t },
                            }),
                        }),
                        s.jsx('div', {
                            className: n(ss.rewardList, ss[`rewardList__${e.computes.styleModifier()}`]),
                            children: s.jsx(Da, {}),
                        }),
                        s.jsx(ze, {
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
    rs = {
        ShowHeader: { name: 'showHeader', delay: 500 },
        ShowResultsRanks: { name: 'showResultsRanks', delay: 400 },
        HideResultsRanks: { name: 'hideResultsRanks', delay: 900 },
        ShowSeasonPoints: { name: 'showSeasonPoints', delay: 400 },
        YearResult: { name: 'yearResult', delay: 800 },
        ShowYearlyRewardsContent: { name: 'showYearlyRewardsContent', delay: 600, stopNextSteps: !0 },
        ShowButtons: { name: 'showButtons', delay: 0 },
    },
    ts = r.createContext(null),
    is = {
        steps: [
            rs.ShowHeader,
            rs.ShowResultsRanks,
            rs.HideResultsRanks,
            rs.ShowSeasonPoints,
            rs.YearResult,
            rs.ShowYearlyRewardsContent,
            rs.ShowButtons,
        ],
    },
    ds = { steps: [rs.ShowHeader, rs.ShowYearlyRewardsContent, rs.ShowButtons] },
    os = a(({ children: e }) => {
        const { model: a } = oe(),
            { showSeasonResults: n } = a.root.get(),
            r = K(n ? is : ds)();
        return s.jsx(ts.Provider, { value: r, children: e });
    }),
    ls = 'Header_laceBase_89d35087',
    cs = 'Header_laceContainer_c5a1ca97',
    _s = 'Header_titleInner_3b7107a2',
    ps = ({ className: e }) =>
        s.jsx(Ee, {
            description: R.strings.comp7_ext.featureNameCapitalized(),
            title: s.jsx(X, {
                className: ls,
                classNames: { lace: cs },
                children: s.jsx('div', {
                    className: _s,
                    children: R.strings.comp7_ext.rewardsScreen.title.yearlyRewards(),
                }),
            }),
            className: e,
        }),
    ms = 'SeasonResult_20bdef6c',
    us = 'SeasonResult_animatedContainer_60dea867',
    hs = 'SeasonResult_rank_558c76da',
    fs = 'SeasonResult_seasonPointsCounter_bd975b4a',
    ws = 'SeasonResult_count_3457a029',
    Rs = 'SeasonResult_icon_38b9685d',
    gs = 'SeasonResult_container_2287c7c2',
    bs = 'SeasonResult_result_72f16a1e',
    Ss = 'SeasonResult_seasonName_d5602aaa',
    xs = Y.x40,
    ks = a(({ index: e, className: a }) => {
        const { model: r } = oe(),
            { rank: t, seasonName: i, seasonPointsCount: d } = r.computes.seasonResult(e),
            o = 0 === d;
        return s.jsxs('div', {
            className: n(ms, a),
            children: [
                s.jsxs('div', {
                    className: us,
                    children: [
                        o
                            ? s.jsx(Z, { size: xs, seasonName: i, className: hs })
                            : s.jsx(E, { rank: t, size: xs, seasonName: i, className: hs }),
                        s.jsxs('div', {
                            className: fs,
                            children: [
                                s.jsx('div', { className: ws, children: d }),
                                s.jsx('div', {
                                    className: Rs,
                                    style: {
                                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.icons.$dyn(`season_point_${i}_x48`)})`,
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                s.jsxs('div', {
                    className: gs,
                    children: [
                        s.jsx('div', {
                            className: bs,
                            children: o ? R.strings.comp7_ext.rewardsScreen.noSeasonResult() : P(t),
                        }),
                        s.jsx('div', { className: Ss, children: ee(i) }),
                    ],
                }),
            ],
        });
    }),
    ys = 'YearResult_b6387af1',
    vs = 'YearResult_counter_b6387af1',
    js = 'YearResult_count_d1b1a8cf',
    As = 'YearResult_icon_d50fb6a2',
    Ns = 'YearResult_iconBg_cdb73af4',
    Is = 'YearResult_description_cb2502d5',
    Cs = a(({ className: e }) => {
        const { model: a } = oe(),
            r = a.computes.seasonPointsAmount();
        return s.jsxs('div', {
            className: n(ys, e),
            children: [
                s.jsxs('div', {
                    className: vs,
                    children: [
                        s.jsx('div', { className: js, children: r }),
                        s.jsx('div', { className: As, children: s.jsx('div', { className: Ns }) }),
                    ],
                }),
                s.jsx('div', {
                    className: Is,
                    children: s.jsx(k, { text: R.strings.comp7_ext.rewardsScreen.seasonPointsAmount() }),
                }),
            ],
        });
    }),
    Ts = 'SeasonsResultsHeading_8abb830c',
    Ls = 'SeasonsResultsHeading_plus_1622f752',
    Bs = 'SeasonsResultsHeading_divider_a2d049dc',
    Ms = 'SeasonsResultsHeading_yearResult_272164c1',
    Qs = a(({ className: e }) => {
        const { model: a } = oe(),
            r = a.seasonsResults.get().length;
        return s.jsxs('div', {
            className: n(Ts, e),
            children: [
                A(r, (e) =>
                    s.jsxs(
                        d.Fragment,
                        { children: [s.jsx(ks, { index: e }), e !== r - 1 && s.jsx('div', { className: Ls })] },
                        e,
                    ),
                ),
                s.jsx('div', { className: Bs }),
                s.jsx(Cs, { className: Ms }),
            ],
        });
    }),
    $s = {
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
    Hs = (e, a) =>
        e
            ? R.strings.comp7_ext.rewardsScreen.goToVehicle()
            : a
              ? R.strings.comp7_ext.rewardsScreen.buttonToSelectedRewards()
              : R.strings.comp7_ext.rewardsScreen.button(),
    Us = a(() => {
        const [e, a] = r.useState(!1),
            { model: t, controls: i } = oe(),
            { hasYearlyVehicle: d, showSeasonResults: o, hasNextScreen: l } = t.root.get(),
            c = (() => {
                const e = r.useContext(ts);
                if (null === e)
                    throw new Error(
                        'useYearlyRewardsApi was called in component, which is not wrapped in YearlyRewardsAnimationContext',
                    );
                return e;
            })(),
            _ = t.additionalRewards.get().length > 0,
            p = r.useCallback(() => (d ? i.changeType(ne.YearlyVehicle) : i.close()), [i, d]);
        return (
            r.useEffect(() => {
                let e = 0;
                const s = (s) => {
                    switch (s) {
                        case rs.ShowHeader:
                            g.sound(R.sounds.comp_7_ranks_shine());
                            break;
                        case rs.ShowSeasonPoints:
                            g.sound(R.sounds.comp_7_annual_reward_rank_points());
                            break;
                        case rs.YearResult:
                            e = window.setTimeout(() => g.sound(R.sounds.comp_7_annual_reward_rank_points()), 300);
                            break;
                        case rs.ShowYearlyRewardsContent:
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
            s.jsxs($e, {
                ref: c.rootRef,
                closeCallback: p,
                classNames: { closeButton: $s.close },
                children: [
                    s.jsx('div', {
                        className: $s.background,
                        children: s.jsx('div', {
                            className: $s.backgroundImage,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.backgrounds.yearly_rewards_screen_bg()})`,
                            },
                        }),
                    }),
                    s.jsxs('div', {
                        className: $s.content,
                        children: [
                            s.jsx(ps, { className: $s.header }),
                            o && s.jsx(Qs, {}),
                            e &&
                                s.jsx(Wa, {
                                    className: n($s.rewardList, $s[`rewardList__${t.computes.styleModifier()}`]),
                                    mainRewardsClassName: $s.mainRewards,
                                    mainRewardsClassNames: { ribbon: $s.ribbon },
                                    rewardClassNames: { info: $s.rewardInfo },
                                    additionalContainerClassName: $s.additionalRewardsContainer,
                                    additionalTitleClassName: $s.additionalTitle,
                                    onMainRewardsAnimationComplete: _ ? void 0 : c.resume,
                                    onAdditionalRewardsAnimationComplete: _ ? c.resume : void 0,
                                }),
                            s.jsx(ze, {
                                className: $s.buttons,
                                mainButtonText: Hs(d, l),
                                onClick: d ? () => i.changeType(ne.YearlyVehicle) : i.close,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Vs = {
        ShowHeader: { name: 'showHeader', delay: 500 },
        ShowPoints: { name: 'showPoints', delay: 1200 },
        ShowContent: { name: 'showContent', delay: 1e3 },
        ShowCrew: { name: 'showCrew', delay: 700, stopNextSteps: !0 },
        ShowButtons: { name: 'showButtons', delay: 0 },
    },
    Ps = r.createContext(null),
    Es = () => {
        const e = r.useContext(Ps);
        if (null === e)
            throw new Error(
                'useYearlyVehicleApi was called in component, which is not wrapped in YearlyVehicleAnimationContext',
            );
        return e;
    },
    Ys = { steps: [Vs.ShowHeader, Vs.ShowPoints, Vs.ShowContent, Vs.ShowCrew, Vs.ShowButtons], autoStart: !1 },
    Os = { steps: [Vs.ShowHeader, Vs.ShowContent, Vs.ShowCrew, Vs.ShowButtons], autoStart: !1 },
    qs = a(({ children: e }) => {
        const { model: a } = oe(),
            { showSeasonResults: n } = a.root.get(),
            r = K(n ? Ys : Os)();
        return s.jsx(Ps.Provider, { value: r, children: e });
    }),
    Ws = 16 / 9,
    zs = 'VehicleVideo_fff13cb5',
    Ds = 'VehicleVideo_video_c308965d',
    Fs = 'VehicleVideo_loopedVideo_bd56ccea',
    Ks = 'VehicleVideo_loopedVideo__visible_179edfc0',
    Gs = a(({ rank: e, playerRef: a, className: t, onEnded: i, ...d }) => {
        const { model: o, controls: l } = oe(),
            { videoState: c } = o.root.get(),
            _ = Es(),
            p = r.useRef(null),
            { screenWidthRem: m, screenHeightRem: u } = S(),
            h = `yearly_style_${q(e)}`,
            g = c === te.Ended,
            x = r.useMemo(
                () =>
                    (({ screenWidthRem: e, screenHeightRem: a }) => {
                        let s, n;
                        return (
                            e / a > Ws ? ((s = e), (n = e / Ws)) : ((s = a * Ws), (n = a)),
                            { width: `${s}rem`, height: `${n}rem` }
                        );
                    })({ screenWidthRem: m, screenHeightRem: u }),
                [u, m],
            ),
            k = r.useCallback(() => {
                var e;
                (null == (e = a.current) || e.play(), l.changeVideoState(te.Started));
            }, [l, a]),
            y = r.useCallback(() => {
                l.changeVideoState(te.Ended);
            }, [l]),
            v = r.useCallback(() => {
                var e;
                null == (e = a.current) || e.pause();
            }, [a]),
            j = r.useCallback(() => {
                var e;
                null == (e = a.current) || e.play();
            }, [a]),
            A = r.useCallback(
                (e) => {
                    var a;
                    (null == i || i(e), y(), null == (a = p.current) || a.play());
                },
                [y, i],
            ),
            [N, I] = f(() => {
                var e;
                const s = null == (e = a.current) ? void 0 : e.getCachedKeyframes();
                return !(null == s ? void 0 : s.length) || (k(), !1);
            });
        return (
            w(() => (N(), I)),
            r.useLayoutEffect(() => {
                switch (c) {
                    case te.Paused:
                        return v();
                    case te.Resumed:
                        return j();
                }
            }, [v, j, c]),
            r.useLayoutEffect(() => {
                const e = (e) => (e ? v() : j());
                return (
                    engine.on('clientMinimized', e),
                    () => {
                        engine.off('clientMinimized', e);
                    }
                );
            }, [v, j]),
            r.useEffect(() => {
                g && _.start();
            }, [g, _]),
            s.jsxs('div', {
                className: n(zs, t),
                children: [
                    !g &&
                        s.jsx(b, {
                            ...d,
                            className: Ds,
                            ref: a,
                            autoplay: !1,
                            preload: 'auto',
                            src: String(R.videos.comp7.$dyn(h)),
                            style: x,
                            onEnded: A,
                        }),
                    s.jsx(b, {
                        className: n(Fs, g && Ks),
                        autoplay: !1,
                        ref: p,
                        loop: !0,
                        preload: 'auto',
                        src: String(R.videos.comp7.$dyn(`${h}_loop`)),
                        style: x,
                    }),
                ],
            })
        );
    }),
    Js = a(() => {
        const [e, a] = r.useState(!1),
            { model: n, controls: t } = oe(),
            { showSeasonResults: i, hasNextScreen: d, rank: o } = n.root.get(),
            l = n.vehicle.get(),
            c = r.useRef(null),
            _ = Es(),
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
                        case Vs.ShowHeader:
                            g.sound(R.sounds.comp_7_ranks_shine());
                            break;
                        case Vs.ShowPoints:
                        case Vs.ShowContent:
                            g.sound(R.sounds.comp_7_annual_reward_rank_points());
                            break;
                        case Vs.ShowCrew:
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
            s.jsxs($e, {
                ref: _.rootRef,
                closeCallback: p,
                classNames: { closeButton: $s.close },
                children: [
                    s.jsx('div', { className: $s.background, children: s.jsx(Gs, { rank: o, playerRef: c }) }),
                    s.jsxs('div', {
                        className: $s.content,
                        children: [
                            s.jsx(ps, { className: $s.header }),
                            i && s.jsx(Qs, {}),
                            s.jsxs('div', {
                                className: $s.yearlyVehicleContent,
                                children: [
                                    s.jsx(ae, {
                                        ...l,
                                        size: se.x48,
                                        className: $s.vehicleName,
                                        tooltipArgs: { vehicleCD: l.vehicleCD, tooltipId: 'shopVehicle' },
                                        role: l.roleKey,
                                        vehicleCD: l.vehicleCD,
                                    }),
                                    s.jsx('div', {
                                        className: $s.additionalTitle,
                                        children: R.strings.comp7_ext.rewardsScreen.yearlyVehicleCrew(),
                                    }),
                                    s.jsx('div', {
                                        className: $s.yearlyVehicleAdditionalRewards,
                                        children:
                                            e &&
                                            s.jsx(Qa, {
                                                delay: 0,
                                                onAnimationComplete: _.resume,
                                                classNames: { reward: $s.reward },
                                            }),
                                    }),
                                ],
                            }),
                            s.jsx(ze, {
                                className: $s.buttons,
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
    Xs = a(() => {
        const { model: e } = oe(),
            { type: a } = e.root.get();
        switch (a) {
            case ne.QualificationRank:
            case ne.QualificationRewards:
                return s.jsx(ia, { children: s.jsx(Ka, {}) });
            case ne.Rank:
            case ne.RankRewards:
                return s.jsx(Za, {});
            case ne.Division:
                return s.jsx(aa, {});
            case ne.TokensRewards:
                return s.jsx(ns, {});
            case ne.YearlyRewards:
                return s.jsx(os, { children: s.jsx(Us, {}) });
            case ne.YearlyVehicle:
                return s.jsx(qs, { children: s.jsx(Js, {}) });
            case ne.SelectedRewards:
                return s.jsx(as, {});
            default:
                return (console.error('[AppFactory]: Provide application for reward screen type: ', a), null);
        }
    });
M(s.jsx(Q, { children: s.jsx(de, { children: s.jsx(Xs, {}) }) }));
