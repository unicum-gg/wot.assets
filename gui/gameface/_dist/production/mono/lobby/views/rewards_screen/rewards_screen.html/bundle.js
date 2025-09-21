import {
    T as e,
    j as a,
    x as s,
    y as n,
    r,
    z as t,
    A as i,
    R as d,
    X as o,
    S as l,
    Y as c,
} from '../../../chunks/vendor.js';
import {
    i as _,
    av as p,
    cD as m,
    aV as u,
    aO as h,
    dg as f,
    cB as w,
    dh as g,
    n as b,
    di as x,
    dj as S,
    u as k,
    p as y,
    cY as v,
    e as j,
    B as A,
    b_ as N,
    F as I,
    Y as C,
    M as T,
    m as L,
    cW as B,
    d as M,
    cV as Q,
    cZ as $,
    c4 as H,
    dk as U,
    r as V,
    U as E,
} from '../../../chunks/lib.js';
import { g as P, a as Y } from '../../../chunks/get_division_name.js';
import { b as q, a as O, g as W } from '../../../chunks/get_rank_name.js';
import { R as z, a as D, i as F, g as K } from '../../../chunks/rank_emblem.js';
import { R as G } from '../../../chunks/enums.js';
import { C as X } from '../../../chunks/close_button.js';
import { g as Z } from '../../../chunks/get_button_size.js';
import { c as J } from '../../../chunks/animation_api_factory.js';
import { Q as ee } from '../../../chunks/qualification_battle_item.js';
import { g as ae } from '../../../chunks/get_comp7_reward.js';
import { L as se } from '../../../chunks/lace_divider.js';
import { Q as ne } from '../../../chunks/qualification_emblem.js';
import { g as re } from '../../../chunks/get_season_name.js';
import { V as te, a as ie } from '../../../chunks/vehicle_name.js';
/* empty css                     */ var de = ((e) => (
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
    ))(de || {}),
    oe = ((e) => ((e.None = 'none'), (e.Open = 'open'), (e.Discount = 'discount'), e))(oe || {}),
    le = ((e) => (
        (e[(e.NotStarted = 0)] = 'NotStarted'),
        (e[(e.Started = 1)] = 'Started'),
        (e[(e.Paused = 2)] = 'Paused'),
        (e[(e.Resumed = 3)] = 'Resumed'),
        (e[(e.Ended = 4)] = 'Ended'),
        e
    ))(le || {});
const ce = [de.RankRewards, de.QualificationRewards],
    [_e, pe] = _()(
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
                    return ce.includes(e) && a !== oe.None;
                }),
                d = e(() =>
                    h(s.rankList.get(), (e) => q(e)).join(
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
    me = 'AnimatedBackground_f47e334b',
    ue = 'AnimatedBackground_rays_caf372e5',
    he = 'AnimatedBackground_sunShineCanvas_21aff824',
    fe = 'AnimatedBackground_staticHighlight_4c4023e9',
    we = {
        width: 400,
        height: 400,
        frameCount: 50,
        chunk: { count: 2, rows: 5, columns: 5 },
        getChunkPath: x('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
    },
    Re = f(we),
    ge = ({ className: e }) =>
        a.jsx('div', {
            className: s(me, e),
            children: w.isHigh()
                ? a.jsxs(a.Fragment, {
                      children: [
                          a.jsx(g, {
                              onAnimationDone: b,
                              width: we.width,
                              height: we.height,
                              frameCount: we.frameCount,
                              getImageSource: Re,
                              frameTime: 50,
                              className: he,
                          }),
                          a.jsx('div', { className: ue }),
                      ],
                  })
                : a.jsx('div', { className: fe }),
        }),
    be = 'DivisionAchievement_baac6f31',
    xe = 'DivisionAchievement_backLayer_419ba39d',
    Se = n(({ rankClassname: e }) => {
        const { model: s } = pe(),
            { rank: n, division: r, seasonName: t } = s.root.get();
        return a.jsxs('div', {
            className: be,
            children: [
                a.jsx(ge, { className: xe }),
                a.jsx(z, { seasonName: t, rank: n, division: r, size: D.x600, className: e }),
            ],
        });
    }),
    ke = 'Notice_357328d',
    ye = 'Notice_noticeTitle_ed6239aa',
    ve = 'Notice_noticeIcon_c8b8f56f',
    je = ({ className: e }) =>
        a.jsxs('div', {
            className: s(ke, e),
            children: [
                a.jsxs('div', {
                    className: ye,
                    children: [a.jsx('span', { className: ve }), R.strings.comp7_ext.rewardsScreen.notice.title()],
                }),
                R.strings.comp7_ext.rewardsScreen.notice.subTitle(),
            ],
        }),
    Ae = {
        0: 'comp_7_rank_iron',
        2: 'comp_7_rank_bronze',
        4: 'comp_7_rank_silver',
        6: 'comp_7_rank_gold',
        9: 'comp_7_rank_champion',
        12: 'comp_7_rank_legend',
    },
    Ne = {
        [G.First]: { start: 0, end: 2 },
        [G.Second]: { start: 2, end: 4 },
        [G.Third]: { start: 4, end: 6 },
        [G.Fourth]: { start: 6, end: 9 },
        [G.Fifth]: { start: 9, end: 12 },
        [G.Sixth]: { start: 12, end: 15 },
    },
    Ie = {
        [de.Rank]: 'rank',
        [de.Division]: 'division',
        [de.RankRewards]: 'rankRewards',
        [de.TokensRewards]: 'tokensRewards',
        [de.QualificationRewards]: 'qualificationRewards',
        [de.QualificationRank]: 'qualificationRank',
        [de.YearlyVehicle]: 'yearlyVehicle',
        [de.YearlyRewards]: 'yearlyRewards',
        [de.SelectedRewards]: 'selectedRewards',
    },
    Ce = 'RankAnimation_bad289e4',
    Te = 'RankAnimation_rank_4e1e89ce',
    Le = 'RankAnimation_backLayer_9b56b7aa',
    Be = 'RankAnimation_backLayer__visible_ec12c9bd',
    Me = 'RankAnimation_rankEmblemGhost_667d48b7',
    Qe = 'RankAnimation_rankEmblemGhost__visible_ec12c9bd',
    $e = new Set(),
    He = n(({ playerRef: e, onKeyframesLoaded: n, onAnimationComplete: t, className: i, classNames: d }) => {
        const { model: o } = pe(),
            { rank: l, division: c, seasonName: _ } = o.root.get(),
            p = Ne[l],
            m = F(l),
            [u, h] = r.useState(!1),
            f = r.useRef(!1),
            w = r.useCallback(() => {
                var a;
                (null == (a = e.current) || a.goToAndStop(p.end), h(!0), null == t || t(), (f.current = !0));
            }, [t, e, p.end]),
            [g, b] = S(() => {
                var a;
                const s = null == (a = e.current) ? void 0 : a.getCachedKeyframes();
                return !(null == s ? void 0 : s.length) || (null == n || n(), !1);
            });
        return (
            k(() => (g(), b)),
            r.useEffect(() => {
                var a;
                null == (a = e.current) ||
                    a.onChangeTime((e) => {
                        if (f && !f.current) {
                            const a = Math.trunc(e.currentTime),
                                s = Ae[a];
                            if (a >= p.end) return void w();
                            s && !$e.has(s) && (y.sound(s), $e.add(s));
                        }
                    });
            }, [w, e, p.end]),
            r.useEffect(() => {
                u && y.sound(R.sounds.comp_7_ranks_shine());
            }, [u]),
            a.jsxs('div', {
                className: s(Ce, i),
                children: [
                    a.jsx(ge, { className: s(Le, u && Be, null == d ? void 0 : d.backLayer) }),
                    a.jsx(v, {
                        className: s(Te, null == d ? void 0 : d.rank),
                        src: String(R.videos.comp7.$dyn(`rankAnimation_${_}`)),
                        ref: e,
                        autoplay: !1,
                        preload: 'auto',
                    }),
                    m &&
                        a.jsx(z, {
                            seasonName: _,
                            rank: l,
                            division: c,
                            size: D.x600,
                            className: s(Te, Me, u && Qe, null == d ? void 0 : d.rank),
                        }),
                ],
            })
        );
    }),
    Ue = n(({ className: e }) => {
        const { model: s } = pe(),
            { rank: n } = s.root.get(),
            t = r.useRef(null);
        return a.jsx(He, {
            playerRef: t,
            onKeyframesLoaded: () => {
                var e;
                return null == (e = t.current) ? void 0 : e.goToAndPlay(Ne[n].start);
            },
            classNames: { rank: e },
        });
    }),
    Ve = 'Achievement_b612c728',
    Ee = 'Achievement_container_2b000480',
    Pe = 'Achievement_container__withNotice_f69304b3',
    Ye = 'Achievement_rank_8fc6e94',
    qe = 'Achievement_notice_17bb36b',
    Oe = n(() => {
        const { model: e } = pe(),
            { type: n, hasRankInactivity: d } = e.root.get();
        r.useEffect(() => y.sound(R.sounds.comp_7_new_rank()), []);
        const o = t({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 400, config: { duration: 400 } });
        return a.jsxs('div', {
            className: Ve,
            children: [
                a.jsx(i.div, {
                    className: s(Ee, d && Pe),
                    style: o,
                    children: (() => {
                        switch (n) {
                            case de.Rank:
                                return a.jsx(Ue, { className: Ye });
                            case de.Division:
                                return a.jsx(Se, { rankClassname: Ye });
                            default:
                                return (
                                    console.error('[Achievement] Unreachable branch: add separate Achievement type'),
                                    null
                                );
                        }
                    })(),
                }),
                d && a.jsx(je, { className: qe }),
            ],
        });
    }),
    We = 'AppContainer_a6708fb6',
    ze = 'AppContainer_close_8c51fefb',
    De = n(
        d.forwardRef(({ children: e, className: n, classNames: r, closeCallback: t }, i) => {
            const { controls: d } = pe();
            return a.jsxs('div', {
                className: s(We, n),
                ref: i,
                children: [
                    e,
                    a.jsx(X, { className: s(ze, null == r ? void 0 : r.closeButton), onClick: t ?? d.close }),
                ],
            });
        }),
    ),
    Fe = 'AppHeader_a92b2706',
    Ke = 'AppHeader_description_9e9d375d',
    Ge = 'AppHeader_subTitle_31b055c6',
    Xe = 'AppHeader_title_d9d173d5',
    Ze = ({ description: e, title: n, subTitle: r, className: t, classNames: i }) =>
        a.jsxs('div', {
            className: s(Fe, t),
            children: [
                e && a.jsx('div', { className: s(Ke, null == i ? void 0 : i.description), children: e }),
                n && a.jsx('div', { className: s(Xe, null == i ? void 0 : i.title), children: n }),
                r && a.jsx('div', { className: s(Ge, null == i ? void 0 : i.subTitle), children: r }),
            ],
        }),
    Je = (e) => `${R.strings.comp7_ext.rewardsScreen.title.$dyn(Ie[e])}`,
    ea = (e) => `${R.strings.comp7_ext.rewardsScreen.subtitle.$dyn(Ie[e])}`,
    aa = 'Buttons_38c48650',
    sa = 'Buttons_button_9889e05c',
    na = n(({ className: e, mainButtonText: n = R.strings.comp7_ext.rewardsScreen.button(), onClick: r }) => {
        const { model: t, controls: i } = pe(),
            { mediaSize: d } = j(),
            o = Z(d);
        return a.jsxs('div', {
            className: s(aa, e),
            children: [
                a.jsx(A, { theme: A.themes.primary, size: o, onClick: r ?? i.close, className: sa, children: n }),
                t.computes.hasShopInfo() &&
                    a.jsx(A, {
                        theme: A.themes.secondary,
                        size: o,
                        onClick: i.openShop,
                        className: sa,
                        children: R.strings.comp7_ext.rewardsScreen.buttonToShop(),
                    }),
            ],
        });
    }),
    ra = ({ children: e, className: s }) => {
        const n = t({ from: { opacity: 0 }, to: { opacity: 1 }, leave: { opacity: 0 }, config: o.molasses });
        return a.jsx(i.div, { className: s, style: { ...n }, children: e });
    },
    ta = 'ScreenBackground_89f63203',
    ia = 'ScreenBackground_layer_492c4adb',
    da = 'ScreenBackground_layer__blurred_9ac55ca6',
    oa = ({ bgImage: e, isBlurred: n = !1, className: r, classNames: t }) =>
        a.jsx('div', {
            className: s(ta, r),
            children: a.jsx('div', {
                className: s(ia, n && da, null == t ? void 0 : t.layer),
                style: { backgroundImage: `url(${e})` },
            }),
        }),
    la = (e, a) => {
        var s;
        const n = null == (s = R.images.comp7.gui.maps.icons.backgrounds.$dyn(e)) ? void 0 : s.$dyn(K(a));
        return n ? `${n}` : (console.error(`no background was found for rank ${a}, season ${e}`), R.invalid());
    },
    ca = 'DivisionApp_achievement_826bdec5',
    _a = 'DivisionApp_content_1a0c9a1e',
    pa = n(() => {
        const { model: e } = pe(),
            { type: s, seasonName: n, rank: r, division: t } = e.root.get();
        return a.jsxs(De, {
            children: [
                a.jsx(oa, { bgImage: la(n, r), isBlurred: !0 }),
                a.jsxs(ra, {
                    className: _a,
                    children: [
                        a.jsx(Ze, {
                            description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(n)}`,
                            title: a.jsx(I, { text: Je(s), binding: { division: P(t) } }),
                            subTitle: a.jsx(N, { text: ea(s), binding: { rank: q(r) } }),
                        }),
                        a.jsx('div', { className: ca, children: a.jsx(Oe, {}) }),
                        a.jsx(na, {}),
                    ],
                }),
            ],
        });
    }),
    ma = {
        OpeningContent: { name: 'openingContent', delay: 100 },
        ShowBattlesList: { name: 'showBattlesList', delay: 400 },
        FillBattles: { name: 'fillBattles', delay: 500 },
        PauseBeforeRank: { name: 'pauseBeforeShowRank', delay: 1e3 },
        ShowRank: { name: 'showRank', delay: 200, stopNextSteps: !0 },
        ChangeBack: { name: 'changeBack', delay: 0 },
        ShowHeader: { name: 'showHeader', delay: 1e3 },
        ShowFooter: { name: 'showFooter', delay: 700 },
    },
    ua = J({
        steps: [
            ma.OpeningContent,
            ma.ShowBattlesList,
            ma.FillBattles,
            ma.PauseBeforeRank,
            ma.ShowRank,
            ma.ChangeBack,
            ma.ShowHeader,
            ma.ShowFooter,
        ],
    }),
    ha = r.createContext(null),
    fa = () => {
        const e = r.useContext(ha);
        if (null === e)
            throw new Error('useAnimationApi was called in component, which is not wrapped in AnimationProvider');
        return e;
    },
    wa = ({ children: e }) => {
        const s = ua();
        return a.jsx(ha.Provider, { value: s, children: e });
    },
    Ra = 'QualificationBackground_rankBg_a6f53201',
    ga = 'QualificationBackground_rankBg__blurred_e4de0e50',
    ba = 'QualificationBackground_rankBg__active_bbd82e51',
    xa = 'QualificationBackground_qualification_a4d51d94',
    Sa = n(() => {
        var e;
        const { model: n } = pe(),
            { seasonName: t, rank: i, type: d } = n.root.get(),
            [o, l] = r.useState(!1),
            c = `url(${null == (e = R.images.comp7.gui.maps.icons.backgrounds.$dyn(t)) ? void 0 : e.$dyn('qualification')})`,
            _ = `url(${la(t, i)})`,
            p = fa();
        return (
            r.useEffect(() => {
                const e = (e) => {
                    e === ma.ChangeBack && l(!0);
                };
                return (
                    p.events.on('change', e),
                    () => {
                        p.events.off('change', e);
                    }
                );
            }, [p.events]),
            a.jsxs(a.Fragment, {
                children: [
                    a.jsx('div', { className: xa, style: { backgroundImage: c } }),
                    a.jsx('div', {
                        className: s(Ra, d === de.QualificationRank && ga, o && ba),
                        style: { backgroundImage: _ },
                    }),
                ],
            })
        );
    });
var ka = ((e) => (
    (e.NotPlayed = 'notPlayed'),
    (e.InProgress = 'inProgress'),
    (e.Victory = 'victory'),
    (e.Defeat = 'defeat'),
    e
))(ka || {});
const ya = 'BattleItem_14e04a96',
    va = 'BattleItem_item_b8e00cd3',
    ja = n(({ index: e, className: n }) => {
        const { model: t } = pe(),
            { mediaSize: d } = j(),
            c = fa(),
            _ = 100 * e,
            p = C(),
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
                    e === ma.FillBattles &&
                        p.run(() => {
                            (y.sound(
                                ((e) => {
                                    switch (e) {
                                        case ka.Victory:
                                            return 'comp_7_rank_swords_green';
                                        case ka.Defeat:
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
            a.jsx('div', {
                className: s(ya, n),
                children: f((e, s) =>
                    a.jsx(i.div, {
                        style: e,
                        className: va,
                        children: a.jsx(ee, { state: s, size: d >= T.Medium ? 'x234' : 'x173' }),
                    }),
                ),
            })
        );
    }),
    Aa = 'QualificationRank_d56c988a',
    Na = 'QualificationRank_rank_3886a852',
    Ia = 'QualificationRank_rankAnimation_55e40415',
    Ca = 'QualificationRank_battleList_53e81164',
    Ta = 'QualificationRank_battleItem_ddd308eb',
    La = 'QualificationRank_notice_6d3c429d',
    Ba = { rank: Ia },
    Ma = n(() => {
        const { model: e } = pe(),
            { hasRankInactivity: s } = e.root.get(),
            n = r.useRef(null),
            t = fa();
        return (
            r.useEffect(() => {
                const e = (e) => {
                    var a;
                    switch (e) {
                        case ma.OpeningContent:
                            y.sound(R.sounds.comp_7_rank_appear());
                            break;
                        case ma.ShowRank:
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
            a.jsxs('div', {
                className: Aa,
                children: [
                    a.jsx('div', {
                        className: Na,
                        children: a.jsx(He, { playerRef: n, onAnimationComplete: t.resume, classNames: Ba }),
                    }),
                    a.jsx('div', {
                        className: Ca,
                        children: L(e.qualificationBattles.get().length, (e) =>
                            a.jsx(ja, { index: e, className: Ta }, e),
                        ),
                    }),
                    s && a.jsx(je, { className: La }),
                ],
            })
        );
    }),
    Qa = {
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
    $a = n(() => {
        const { model: e } = pe(),
            { type: s, rank: n, division: r } = e.root.get();
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(Ze, {
                    className: Qa.header,
                    description: R.strings.comp7_ext.rewardsScreen.description.qualificationEnded(),
                    title: a.jsx(N, { text: Je(s), binding: { rankUpperName: O(R.strings.comp7_ext.rankUpper, n) } }),
                    subTitle: F(n) ? Y(r) : void 0,
                }),
                a.jsx('div', { className: Qa.qualificationRank, children: a.jsx(Ma, {}) }),
            ],
        });
    }),
    Ha = {
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
    Ua = (e, a = 0) => ({ appear: a + 400 + 200 * e, enter: 600 }),
    Va = () => {
        y.sound(R.sounds.bp_reward());
    },
    Ea = ({ rewardIndex: e, delay: n = 0, children: r }) =>
        a.jsx(c, {
            appear: !0,
            in: !0,
            timeout: Ua(e, n),
            onEntered: Va,
            children: (e) => a.jsx('div', { className: s(Ha.base, Ha[e]), children: r }),
        }),
    Pa = 10,
    Ya = 'AdditionalRewards_81a45598',
    qa = 'AdditionalRewards_reward_f7b41ae4',
    Oa = 'AdditionalRewards_vehiclesRentBase_3afa6e1a',
    Wa = 'AdditionalRewards_vehiclesRentLabel_bed51da4',
    za = ({ delay: e, onAnimationComplete: n, className: t, classNames: i }) => {
        const { model: d } = pe(),
            { mediaSize: o } = j(),
            l = o >= T.Medium ? B.Big : B.Small,
            c = d.additionalRewards.get().length,
            _ = c > Pa;
        const { appear: p, enter: m } = Ua(Math.min(d.additionalRewards.get().length, Pa), e),
            u = m + p;
        r.useEffect(
            () =>
                M(() => {
                    null == n || n();
                }, u),
            [u, n],
        );
        const f = _ ? [...Q(d.additionalRewards.get(), 0, 8)] : d.additionalRewards.get();
        return a.jsxs('div', {
            className: s(Ya, t),
            children: [
                h(f, (n, r) => {
                    const t = 'vehicles_rent' === n.name;
                    return a.jsx(
                        Ea,
                        {
                            rewardIndex: r,
                            delay: e,
                            children: a.jsx('div', {
                                className: s(qa, null == i ? void 0 : i.reward),
                                children: a.jsx($, {
                                    ...ae({ reward: n, size: l }),
                                    className: s(t && Oa),
                                    classNames: { info: s(t && Wa) },
                                }),
                            }),
                        },
                        r,
                    );
                }),
                _ &&
                    a.jsx(Ea, {
                        rewardIndex: f.length,
                        delay: e,
                        children: a.jsx('div', {
                            className: qa,
                            children: a.jsx($, {
                                name: '',
                                image: `R.images.gui.maps.icons.quests.bonuses.${l}.default`,
                                size: l,
                                value: H(R.strings.tooltips.quests.awards.additional.bottom(), { count: c - Pa + 1 }),
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
    Da = {
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
    Fa = { periodicIcon: Da.rewardTimer, info: Da.rewardInfo },
    Ka = n(({ className: e, classNames: n, rewardClassNames: t, onAnimationComplete: i }) => {
        const { model: d } = pe(),
            o = d.mainRewards.get(),
            { mediaSize: l } = j(),
            c = ((e, a, s) =>
                1 !== a || s
                    ? e >= T.Large
                        ? B.S400x300
                        : e >= T.Small
                          ? B.S296x222
                          : B.S232x174
                    : e >= T.Large
                      ? B.S600x450
                      : B.S400x300)(l, o.length, d.computes.hasShopInfo()),
            { appear: _ } = Ua(o.length);
        return (
            r.useEffect(() => M(() => (null == i ? void 0 : i()), _), [_, i]),
            a.jsxs('div', {
                className: s(Da.base, e, Da[`base__${d.computes.styleModifier()}`]),
                children: [
                    a.jsx('div', { className: s(Da.ribbon, null == n ? void 0 : n.ribbon) }),
                    h(o, (e, r) => {
                        const i = U(e.name);
                        return a.jsx(
                            Ea,
                            {
                                rewardIndex: r,
                                children: a.jsxs('div', {
                                    className: Da.rewardWrapper,
                                    children: [
                                        a.jsx($, {
                                            ...ae({ reward: e, size: c }),
                                            className: Da.reward,
                                            classNames: { ...Fa, ...t },
                                        }),
                                        a.jsx('div', {
                                            className: s(
                                                Da.rewardLabel,
                                                Da[`rewardLabel__${e.name}`],
                                                Da[`rewardLabel__${i}`],
                                                null == n ? void 0 : n.rewardLabel,
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
    Ga = {
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
    Xa = n(({ className: e }) => {
        const { model: n } = pe(),
            { shopInfoType: r } = n.root.get();
        return a.jsxs('div', {
            className: s(Ga.base, e),
            children: [
                a.jsx('div', { className: s(Ga.icon, Ga[`icon__${r}`]) }),
                a.jsxs('div', {
                    className: Ga.content,
                    children: [
                        a.jsx('div', {
                            className: Ga.header,
                            children: `${R.strings.comp7_ext.rewardsScreen.shopInfo.header.$dyn(r)}`,
                        }),
                        a.jsx('div', {
                            className: Ga.text,
                            children: `${R.strings.comp7_ext.rewardsScreen.shopInfo.text.$dyn(r)}`,
                        }),
                    ],
                }),
            ],
        });
    }),
    Za = 'RewardList_ea855648',
    Ja = 'RewardList_additional_5346cd7f',
    es = 'RewardList_additionalTitle_73a7506c',
    as = 'RewardList_shopInfoContainer_df512c7a',
    ss = n(
        ({
            className: e,
            mainRewardsClassName: n,
            mainRewardsClassNames: t,
            rewardClassNames: i,
            additionalContainerClassName: d,
            additionalTitleClassName: o,
            additionalRewardsClassNames: l,
            onMainRewardsAnimationComplete: c,
            onAdditionalRewardsAnimationComplete: _,
        }) => {
            const { model: p } = pe(),
                m = p.mainRewards.get(),
                u = p.additionalRewards.get().length,
                h = p.computes.hasShopInfo(),
                f = Ua(m.length),
                w = Ua(Math.min(Pa, u)),
                g = f.enter + f.appear,
                b = g + (w.enter + w.appear);
            return (
                r.useEffect(() => M(() => y.sound(R.sounds.gui_reward_screen_general()), 400), []),
                r.useEffect(
                    () =>
                        M(() => {
                            h && y.sound(R.sounds.comp_7_shop_info());
                        }, b - 300),
                    [h, b],
                ),
                a.jsxs('div', {
                    className: s(Za, e),
                    style: {
                        '--additionalTitleDelay': `${g}ms`,
                        '--additionalTitleDuration': '300ms',
                        '--shopInfoDelay': `${b}ms`,
                        '--shopInfoDuration': '300ms',
                    },
                    children: [
                        a.jsx(Ka, { className: n, classNames: t, rewardClassNames: i, onAnimationComplete: c }),
                        a.jsx('div', {
                            className: s(Ja, d),
                            children:
                                Boolean(u) &&
                                a.jsxs(a.Fragment, {
                                    children: [
                                        a.jsx('div', {
                                            className: s(es, o),
                                            children: R.strings.comp7_ext.rewardsScreen.additionalRewards(),
                                        }),
                                        a.jsx(za, { delay: g, classNames: l, onAnimationComplete: _ }),
                                    ],
                                }),
                        }),
                        h && a.jsx(Xa, { className: as }),
                    ],
                })
            );
        },
    ),
    ns = {
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
    rs = n(() => {
        const { model: e } = pe();
        return a.jsx(ss, {
            className: s(ns.base, ns[`base__${e.computes.styleModifier()}`]),
            additionalContainerClassName: ns.additionalContainer,
            additionalTitleClassName: ns.additionalTitle,
        });
    }),
    ts = n(() => {
        const { model: e } = pe(),
            { type: n } = e.root.get();
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(Ze, {
                    className: Qa.header,
                    description: String(R.strings.comp7_ext.rewardsScreen.description.qualificationEnded()),
                    title: Je(n),
                    subTitle: a.jsx(N, {
                        text: String(R.strings.comp7_ext.rewardsScreen.subtitle.qualificationRewards()),
                        binding: { ranks: e.computes.ranksList() },
                    }),
                }),
                a.jsx('div', {
                    className: s(Qa.rewardList, Qa[`rewardList__${e.computes.styleModifier()}`]),
                    children: a.jsx(rs, {}),
                }),
            ],
        });
    }),
    is = n(() => {
        const { model: e, controls: s } = pe(),
            { type: n } = e.root.get(),
            t = fa(),
            i = r.useCallback(() => {
                (s.close(), t.skipAll());
            }, [t, s]);
        return a.jsxs(De, {
            closeCallback: i,
            ref: t.rootRef,
            children: [
                a.jsx(Sa, {}),
                n === de.QualificationRank && a.jsx($a, {}),
                n === de.QualificationRewards && a.jsx(ts, {}),
                a.jsx(na, { className: Qa.buttons, onClick: i }),
            ],
        });
    }),
    ds = {
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
    os = n(() => {
        const { model: e } = pe(),
            { type: s, rank: n, division: r, seasonName: t } = e.root.get();
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(Ze, {
                    description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(t)}`,
                    title: a.jsx(N, { text: Je(s), binding: { rankUpperName: O(R.strings.comp7_ext.rankUpper, n) } }),
                    subTitle: F(n) ? Y(r) : void 0,
                }),
                a.jsx('div', { className: ds.achievement, children: a.jsx(Oe, {}) }),
            ],
        });
    }),
    ls = n(() => {
        const { model: e } = pe(),
            { type: n, rank: r, seasonName: t } = e.root.get();
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(Ze, {
                    description: `${R.strings.comp7_ext.rewardsScreen.description.season.$dyn(t)}`,
                    title: a.jsx(N, { text: Je(n) }),
                    subTitle: a.jsx(N, { text: ea(n), binding: { rank: q(r) } }),
                }),
                a.jsx('div', {
                    className: s(ds.rewardList, ds[`rewardList__${e.computes.styleModifier()}`]),
                    children: a.jsx(rs, {}),
                }),
            ],
        });
    }),
    cs = n(() => {
        const { model: e } = pe(),
            { type: s, seasonName: n, rank: r } = e.root.get();
        return a.jsxs(De, {
            children: [
                a.jsx(oa, { bgImage: la(n, r), isBlurred: s === de.Rank }),
                a.jsxs(ra, {
                    className: ds.content,
                    children: [
                        s === de.Rank && a.jsx(os, {}),
                        s === de.RankRewards && a.jsx(ls, {}),
                        a.jsx(na, {
                            mainButtonText:
                                s === de.Rank
                                    ? R.strings.comp7_ext.rewardsScreen.buttonToRewards()
                                    : R.strings.comp7_ext.rewardsScreen.button(),
                        }),
                    ],
                }),
            ],
        });
    }),
    _s = {
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
    ps = n(() => {
        const { model: e } = pe(),
            n = e.mainRewards.get().length;
        return (
            k(() => {
                y.sound(R.sounds.comp_7_shop_purchase_module());
            }),
            a.jsxs(De, {
                children: [
                    a.jsx(oa, { bgImage: R.images.comp7.gui.maps.icons.backgrounds.yearly_rewards_screen_bg() }),
                    a.jsxs(ra, {
                        className: _s.content,
                        children: [
                            a.jsx(Ze, {
                                description: R.strings.comp7_ext.featureNameCapitalized(),
                                title: R.strings.comp7_ext.rewardsScreen.title.selectedRewards(n),
                            }),
                            a.jsx('div', {
                                className: s(_s.rewardList, _s[`rewardList__${e.computes.styleModifier()}`]),
                                children:
                                    e.additionalRewards.get().length > 0
                                        ? a.jsx(rs, {})
                                        : a.jsx(Ka, {
                                              className: _s.mainRewards,
                                              classNames: { rewardLabel: _s.rewardLabel },
                                          }),
                            }),
                            a.jsx(na, {}),
                        ],
                    }),
                ],
            })
        );
    }),
    ms = {
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
    us = n(() => {
        const { model: e, controls: n } = pe(),
            { type: r, tokensCount: t, hasNextScreen: i } = e.root.get();
        return a.jsxs(De, {
            children: [
                a.jsx(oa, { bgImage: R.images.comp7.gui.maps.icons.backgrounds.tokens() }),
                a.jsxs(ra, {
                    className: ms.content,
                    children: [
                        a.jsx(Ze, {
                            description: R.strings.comp7_ext.featureNameCapitalized(),
                            title: Je(r),
                            subTitle: a.jsx(N, {
                                text: String(R.strings.comp7_ext.rewardsScreen.subtitle.tokensRewards(t)),
                                binding: { tokensCount: t },
                            }),
                        }),
                        a.jsx('div', {
                            className: s(ms.rewardList, ms[`rewardList__${e.computes.styleModifier()}`]),
                            children: a.jsx(rs, {}),
                        }),
                        a.jsx(na, {
                            mainButtonText: i
                                ? R.strings.comp7_ext.rewardsScreen.buttonToSelectedRewards()
                                : R.strings.comp7_ext.rewardsScreen.button(),
                            onClick: i ? n.openNextScreen : n.close,
                        }),
                    ],
                }),
            ],
        });
    }),
    hs = {
        ShowHeader: { name: 'showHeader', delay: 500 },
        ShowResultsRanks: { name: 'showResultsRanks', delay: 400 },
        HideResultsRanks: { name: 'hideResultsRanks', delay: 900 },
        ShowSeasonPoints: { name: 'showSeasonPoints', delay: 400 },
        YearResult: { name: 'yearResult', delay: 800 },
        ShowYearlyRewardsContent: { name: 'showYearlyRewardsContent', delay: 600, stopNextSteps: !0 },
        ShowButtons: { name: 'showButtons', delay: 0 },
    },
    fs = r.createContext(null),
    ws = {
        steps: [
            hs.ShowHeader,
            hs.ShowResultsRanks,
            hs.HideResultsRanks,
            hs.ShowSeasonPoints,
            hs.YearResult,
            hs.ShowYearlyRewardsContent,
            hs.ShowButtons,
        ],
    },
    Rs = { steps: [hs.ShowHeader, hs.ShowYearlyRewardsContent, hs.ShowButtons] },
    gs = n(({ children: e }) => {
        const { model: s } = pe(),
            { showSeasonResults: n } = s.root.get(),
            r = J(n ? ws : Rs)();
        return a.jsx(fs.Provider, { value: r, children: e });
    }),
    bs = 'Header_laceBase_89d35087',
    xs = 'Header_laceContainer_c5a1ca97',
    Ss = 'Header_titleInner_3b7107a2',
    ks = ({ className: e }) =>
        a.jsx(Ze, {
            description: R.strings.comp7_ext.featureNameCapitalized(),
            title: a.jsx(se, {
                className: bs,
                classNames: { lace: xs },
                children: a.jsx('div', {
                    className: Ss,
                    children: R.strings.comp7_ext.rewardsScreen.title.yearlyRewards(),
                }),
            }),
            className: e,
        }),
    ys = 'SeasonResult_20bdef6c',
    vs = 'SeasonResult_animatedContainer_60dea867',
    js = 'SeasonResult_rank_558c76da',
    As = 'SeasonResult_seasonPointsCounter_bd975b4a',
    Ns = 'SeasonResult_count_3457a029',
    Is = 'SeasonResult_icon_38b9685d',
    Cs = 'SeasonResult_container_2287c7c2',
    Ts = 'SeasonResult_result_72f16a1e',
    Ls = 'SeasonResult_seasonName_d5602aaa',
    Bs = D.x40,
    Ms = n(({ index: e, className: n }) => {
        const { model: r } = pe(),
            { rank: t, seasonName: i, seasonPointsCount: d } = r.computes.seasonResult(e),
            o = 0 === d;
        return a.jsxs('div', {
            className: s(ys, n),
            children: [
                a.jsxs('div', {
                    className: vs,
                    children: [
                        o
                            ? a.jsx(ne, { size: Bs, seasonName: i, className: js })
                            : a.jsx(z, { rank: t, size: Bs, seasonName: i, className: js }),
                        a.jsxs('div', {
                            className: As,
                            children: [
                                a.jsx('div', { className: Ns, children: d }),
                                a.jsx('div', {
                                    className: Is,
                                    style: {
                                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.icons.$dyn(`season_point_${i}_x48`)})`,
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                a.jsxs('div', {
                    className: Cs,
                    children: [
                        a.jsx('div', {
                            className: Ts,
                            children: o ? R.strings.comp7_ext.rewardsScreen.noSeasonResult() : W(t),
                        }),
                        a.jsx('div', { className: Ls, children: re(i) }),
                    ],
                }),
            ],
        });
    }),
    Qs = 'YearResult_b6387af1',
    $s = 'YearResult_counter_b6387af1',
    Hs = 'YearResult_count_d1b1a8cf',
    Us = 'YearResult_icon_d50fb6a2',
    Vs = 'YearResult_iconBg_cdb73af4',
    Es = 'YearResult_description_cb2502d5',
    Ps = n(({ className: e }) => {
        const { model: n } = pe(),
            r = n.computes.seasonPointsAmount();
        return a.jsxs('div', {
            className: s(Qs, e),
            children: [
                a.jsxs('div', {
                    className: $s,
                    children: [
                        a.jsx('div', { className: Hs, children: r }),
                        a.jsx('div', { className: Us, children: a.jsx('div', { className: Vs }) }),
                    ],
                }),
                a.jsx('div', {
                    className: Es,
                    children: a.jsx(N, { text: R.strings.comp7_ext.rewardsScreen.seasonPointsAmount() }),
                }),
            ],
        });
    }),
    Ys = 'SeasonsResultsHeading_8abb830c',
    qs = 'SeasonsResultsHeading_plus_1622f752',
    Os = 'SeasonsResultsHeading_divider_a2d049dc',
    Ws = 'SeasonsResultsHeading_yearResult_272164c1',
    zs = n(({ className: e }) => {
        const { model: n } = pe(),
            r = n.seasonsResults.get().length;
        return a.jsxs('div', {
            className: s(Ys, e),
            children: [
                L(r, (e) =>
                    a.jsxs(
                        d.Fragment,
                        { children: [a.jsx(Ms, { index: e }), e !== r - 1 && a.jsx('div', { className: qs })] },
                        e,
                    ),
                ),
                a.jsx('div', { className: Os }),
                a.jsx(Ps, { className: Ws }),
            ],
        });
    }),
    Ds = {
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
    Fs = (e, a) =>
        e
            ? R.strings.comp7_ext.rewardsScreen.goToVehicle()
            : a
              ? R.strings.comp7_ext.rewardsScreen.buttonToSelectedRewards()
              : R.strings.comp7_ext.rewardsScreen.button(),
    Ks = n(() => {
        const [e, n] = r.useState(!1),
            { model: t, controls: i } = pe(),
            { hasYearlyVehicle: d, showSeasonResults: o, hasNextScreen: l } = t.root.get(),
            c = (() => {
                const e = r.useContext(fs);
                if (null === e)
                    throw new Error(
                        'useYearlyRewardsApi was called in component, which is not wrapped in YearlyRewardsAnimationContext',
                    );
                return e;
            })(),
            _ = t.additionalRewards.get().length > 0,
            p = r.useCallback(() => (d ? i.changeType(de.YearlyVehicle) : i.close()), [i, d]);
        return (
            r.useEffect(() => {
                let e = 0;
                const a = (a) => {
                    switch (a) {
                        case hs.ShowHeader:
                            y.sound(R.sounds.comp_7_ranks_shine());
                            break;
                        case hs.ShowSeasonPoints:
                            y.sound(R.sounds.comp_7_annual_reward_rank_points());
                            break;
                        case hs.YearResult:
                            e = window.setTimeout(() => y.sound(R.sounds.comp_7_annual_reward_rank_points()), 300);
                            break;
                        case hs.ShowYearlyRewardsContent:
                            n(!0);
                    }
                };
                return (
                    c.events.on('change', a),
                    () => {
                        (c.events.off('change', a), window.clearTimeout(e));
                    }
                );
            }, [c.events]),
            a.jsxs(De, {
                ref: c.rootRef,
                closeCallback: p,
                classNames: { closeButton: Ds.close },
                children: [
                    a.jsx('div', {
                        className: Ds.background,
                        children: a.jsx('div', {
                            className: Ds.backgroundImage,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.backgrounds.yearly_rewards_screen_bg()})`,
                            },
                        }),
                    }),
                    a.jsxs('div', {
                        className: Ds.content,
                        children: [
                            a.jsx(ks, { className: Ds.header }),
                            o && a.jsx(zs, {}),
                            e &&
                                a.jsx(ss, {
                                    className: s(Ds.rewardList, Ds[`rewardList__${t.computes.styleModifier()}`]),
                                    mainRewardsClassName: Ds.mainRewards,
                                    mainRewardsClassNames: { ribbon: Ds.ribbon },
                                    rewardClassNames: { info: Ds.rewardInfo },
                                    additionalContainerClassName: Ds.additionalRewardsContainer,
                                    additionalTitleClassName: Ds.additionalTitle,
                                    onMainRewardsAnimationComplete: _ ? void 0 : c.resume,
                                    onAdditionalRewardsAnimationComplete: _ ? c.resume : void 0,
                                }),
                            a.jsx(na, {
                                className: Ds.buttons,
                                mainButtonText: Fs(d, l),
                                onClick: d ? () => i.changeType(de.YearlyVehicle) : i.close,
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Gs = {
        ShowHeader: { name: 'showHeader', delay: 500 },
        ShowPoints: { name: 'showPoints', delay: 1200 },
        ShowContent: { name: 'showContent', delay: 1e3 },
        ShowCrew: { name: 'showCrew', delay: 700, stopNextSteps: !0 },
        ShowButtons: { name: 'showButtons', delay: 0 },
    },
    Xs = r.createContext(null),
    Zs = () => {
        const e = r.useContext(Xs);
        if (null === e)
            throw new Error(
                'useYearlyVehicleApi was called in component, which is not wrapped in YearlyVehicleAnimationContext',
            );
        return e;
    },
    Js = { steps: [Gs.ShowHeader, Gs.ShowPoints, Gs.ShowContent, Gs.ShowCrew, Gs.ShowButtons], autoStart: !1 },
    en = { steps: [Gs.ShowHeader, Gs.ShowContent, Gs.ShowCrew, Gs.ShowButtons], autoStart: !1 },
    an = n(({ children: e }) => {
        const { model: s } = pe(),
            { showSeasonResults: n } = s.root.get(),
            r = J(n ? Js : en)();
        return a.jsx(Xs.Provider, { value: r, children: e });
    }),
    sn = 16 / 9,
    nn = 'VehicleVideo_fff13cb5',
    rn = 'VehicleVideo_video_c308965d',
    tn = 'VehicleVideo_loopedVideo_bd56ccea',
    dn = 'VehicleVideo_loopedVideo__visible_179edfc0',
    on = n(({ rank: e, playerRef: n, className: t, onEnded: i, ...d }) => {
        const { model: o, controls: l } = pe(),
            { videoState: c } = o.root.get(),
            _ = Zs(),
            p = r.useRef(null),
            { screenWidthRem: m, screenHeightRem: u } = j(),
            h = `yearly_style_${K(e)}`,
            f = c === le.Ended,
            w = r.useMemo(
                () =>
                    (({ screenWidthRem: e, screenHeightRem: a }) => {
                        let s, n;
                        return (
                            e / a > sn ? ((s = e), (n = e / sn)) : ((s = a * sn), (n = a)),
                            { width: `${s}rem`, height: `${n}rem` }
                        );
                    })({ screenWidthRem: m, screenHeightRem: u }),
                [u, m],
            ),
            g = r.useCallback(() => {
                var e;
                (null == (e = n.current) || e.play(), l.changeVideoState(le.Started));
            }, [l, n]),
            b = r.useCallback(() => {
                l.changeVideoState(le.Ended);
            }, [l]),
            x = r.useCallback(() => {
                var e;
                null == (e = n.current) || e.pause();
            }, [n]),
            y = r.useCallback(() => {
                var e;
                null == (e = n.current) || e.play();
            }, [n]),
            A = r.useCallback(
                (e) => {
                    var a;
                    (null == i || i(e), b(), null == (a = p.current) || a.play());
                },
                [b, i],
            ),
            [N, I] = S(() => {
                var e;
                const a = null == (e = n.current) ? void 0 : e.getCachedKeyframes();
                return !(null == a ? void 0 : a.length) || (g(), !1);
            });
        return (
            k(() => (N(), I)),
            r.useLayoutEffect(() => {
                switch (c) {
                    case le.Paused:
                        return x();
                    case le.Resumed:
                        return y();
                }
            }, [x, y, c]),
            r.useLayoutEffect(() => {
                const e = (e) => (e ? x() : y());
                return (
                    engine.on('clientMinimized', e),
                    () => {
                        engine.off('clientMinimized', e);
                    }
                );
            }, [x, y]),
            r.useEffect(() => {
                f && _.start();
            }, [f, _]),
            a.jsxs('div', {
                className: s(nn, t),
                children: [
                    !f &&
                        a.jsx(v, {
                            ...d,
                            className: rn,
                            ref: n,
                            autoplay: !1,
                            preload: 'auto',
                            src: String(R.videos.comp7.$dyn(h)),
                            style: w,
                            onEnded: A,
                        }),
                    a.jsx(v, {
                        className: s(tn, f && dn),
                        autoplay: !1,
                        ref: p,
                        loop: !0,
                        preload: 'auto',
                        src: String(R.videos.comp7.$dyn(`${h}_loop`)),
                        style: w,
                    }),
                ],
            })
        );
    }),
    ln = n(() => {
        const [e, s] = r.useState(!1),
            { model: n, controls: t } = pe(),
            { showSeasonResults: i, hasNextScreen: d, rank: o } = n.root.get(),
            l = n.vehicle.get(),
            c = r.useRef(null),
            _ = Zs(),
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
                        case Gs.ShowHeader:
                            y.sound(R.sounds.comp_7_ranks_shine());
                            break;
                        case Gs.ShowPoints:
                        case Gs.ShowContent:
                            y.sound(R.sounds.comp_7_annual_reward_rank_points());
                            break;
                        case Gs.ShowCrew:
                            s(!0);
                    }
                };
                return (
                    _.events.on('change', e),
                    () => {
                        _.events.off('change', e);
                    }
                );
            }, [_.events]),
            a.jsxs(De, {
                ref: _.rootRef,
                closeCallback: p,
                classNames: { closeButton: Ds.close },
                children: [
                    a.jsx('div', { className: Ds.background, children: a.jsx(on, { rank: o, playerRef: c }) }),
                    a.jsxs('div', {
                        className: Ds.content,
                        children: [
                            a.jsx(ks, { className: Ds.header }),
                            i && a.jsx(zs, {}),
                            a.jsxs('div', {
                                className: Ds.yearlyVehicleContent,
                                children: [
                                    a.jsx(te, {
                                        ...l,
                                        size: ie.x48,
                                        className: Ds.vehicleName,
                                        tooltipArgs: { vehicleCD: l.vehicleCD, tooltipId: 'shopVehicle' },
                                        role: l.roleKey,
                                        vehicleCD: l.vehicleCD,
                                    }),
                                    a.jsx('div', {
                                        className: Ds.additionalTitle,
                                        children: R.strings.comp7_ext.rewardsScreen.yearlyVehicleCrew(),
                                    }),
                                    a.jsx('div', {
                                        className: Ds.yearlyVehicleAdditionalRewards,
                                        children:
                                            e &&
                                            a.jsx(za, {
                                                delay: 0,
                                                onAnimationComplete: _.resume,
                                                classNames: { reward: Ds.reward },
                                            }),
                                    }),
                                ],
                            }),
                            a.jsx(na, {
                                className: Ds.buttons,
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
    cn = n(() => {
        const { model: e } = pe(),
            { type: s } = e.root.get();
        switch (s) {
            case de.QualificationRank:
            case de.QualificationRewards:
                return a.jsx(wa, { children: a.jsx(is, {}) });
            case de.Rank:
            case de.RankRewards:
                return a.jsx(cs, {});
            case de.Division:
                return a.jsx(pa, {});
            case de.TokensRewards:
                return a.jsx(us, {});
            case de.YearlyRewards:
                return a.jsx(gs, { children: a.jsx(Ks, {}) });
            case de.YearlyVehicle:
                return a.jsx(an, { children: a.jsx(ln, {}) });
            case de.SelectedRewards:
                return a.jsx(ps, {});
            default:
                return (console.error('[AppFactory]: Provide application for reward screen type: ', s), null);
        }
    });
V(a.jsx(E, { children: a.jsx(_e, { children: a.jsx(cn, {}) }) }));
