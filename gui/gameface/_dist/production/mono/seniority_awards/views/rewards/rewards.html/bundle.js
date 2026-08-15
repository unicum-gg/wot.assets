import { m as e, q as a, k as s, j as n, l as o, h as t, r, n as i, t as d, s as c } from '../../../chunks/vendor.js';
import {
    i as l,
    O as p,
    d as _,
    r as m,
    P as b,
    R as u,
    Q as w,
    S as h,
    T as A,
    W as x,
    X as g,
    E as v,
    F as f,
    u as C,
    Y as j,
    Z as y,
    c as S,
    l as R,
    z as N,
    D as E,
    H as k,
    C as I,
    J as W,
    K as B,
    L,
    M as V,
    U as O,
    N as T,
} from '../../../chunks/lib.js';
import { t as M } from '../../../chunks/sounds.js';
import { f as F, a as z, c as D, l as U, S as H, d as P, P as Y, I as $ } from '../../../chunks/easings.js';
import { A as K, a as q } from '../../../chunks/category.js';
var G = ((e) => ((e.AVAILABLE = 'available'), (e.NOT_AVAILABLE = 'notAvailable'), (e.DISABLED = 'disabled'), e))(
    G || {},
);
const [J, Q] = l()(
        ({ observableModel: a }) => {
            const s = { root: a.object(), bonuses: a.array('bonuses', []) },
                n = e(() => p(s.bonuses.get(), (e) => ({ ...e })));
            return {
                ...s,
                computes: {
                    bonuses: n,
                    bonusesLength: e(() => s.bonuses.get().length),
                    isShopAvailable: e(() => s.root.get().shopOnOpenState === G.AVAILABLE),
                    coinsCount: e(() => s.root.get().specialCurrencyCount),
                    hasCoins: e(() => s.root.get().specialCurrencyCount > 0),
                },
            };
        },
        ({ externalModel: e }) => ({
            onOpenBtnClick: e.createCallbackNoArgs('onOpenBtnClick'),
            openShop: e.createCallbackNoArgs('onShopBtnClick'),
        }),
    ),
    X = (e) => (e?.match(/^\d/) ? `c_${e}` : e),
    Z = 'AnimatedReward_d4667790',
    ee = 'AnimatedReward_base__withCoins_802dd312',
    ae = a(({ delay: e, duration: a, onRest: r, children: i }) => {
        const { model: d } = Q(),
            c = d.computes.hasCoins(),
            l = _(),
            p = s({
                from: { opacity: 0, transform: c ? 'translateY(30rem)' : 'scale(0.5)' },
                to: { opacity: 1, transform: c ? 'translateY(0)' : 'scale(1)' },
                delay: e,
                config: { duration: a, easing: F },
                onStart: () => l.play('rewardAppear', { target: 'reward' }),
                onRest: r,
            });
        return n.jsx(o.div, { style: p, className: t(Z, c && ee), children: i });
    }),
    se = r.createContext({ rewards: [] }),
    ne = 'AdditionalRewards_3cf62007',
    oe = 'AdditionalRewards_rewards_7b82eb11',
    te = 'AdditionalRewards_heading_462b2f17',
    re = 'AdditionalRewards_info_5e2aeab4',
    ie = 'AdditionalRewards_info__multi_3fd9a25a',
    de = ({ onAnimationEnd: e }) => {
        const { rewards: a } = r.useContext(se),
            i = m.resolve('strings'),
            d = m.resolve('views'),
            c = s({
                from: { opacity: 0, transform: 'translateY(30rem)' },
                to: { opacity: 1, transform: 'translateY(0)' },
                config: { ANIMATION_DURATION: 150, easing: F },
            });
        return n.jsxs('div', {
            className: ne,
            children: [
                n.jsx(o.div, {
                    className: te,
                    style: c,
                    children: i.readOrEmpty('seniority_awards.rewardsView.subTitle.otherRewards'),
                }),
                n.jsx('div', {
                    className: oe,
                    children: a.map((s, o) => {
                        const r = b(s.name);
                        return n.jsx(
                            ae,
                            {
                                delay: 150 * (o + 1),
                                duration: 150,
                                onRest: o === a.length - 1 ? e : void 0,
                                children: n.jsx(u, {
                                    ...s,
                                    name: s.name,
                                    image: A({ ...s, icon: 'icon' in s && X(s.icon) }, h.Big),
                                    size: h.Big,
                                    valueType: r,
                                    tooltipArgs: w(
                                        { tooltipId: s.tooltipId },
                                        d.read((e) =>
                                            e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                'resId',
                                            ),
                                        ),
                                    ),
                                    classNames: { info: t(re, r === x.MULTI && ie) },
                                }),
                            },
                            s.index,
                        );
                    }),
                }),
            ],
        });
    },
    ce = {
        root: 'SeniorityAwardCoin_root_ddcbbe5c',
        base: 'SeniorityAwardCoin_8f919fe5',
        base__large: 'SeniorityAwardCoin_base__large_9e92e14',
        base__medium: 'SeniorityAwardCoin_base__medium_97b5d693',
        base__small: 'SeniorityAwardCoin_base__small_b8402787',
        base__extraSmall: 'SeniorityAwardCoin_base__extraSmall_61f28269',
    },
    le = 'seniority_awards.specialItem',
    pe = 'large',
    _e = 'medium',
    me = ({ size: e, count: a, isTooltipEnabled: s = !0 }) => {
        const o = m.resolve('strings'),
            r = g({
                header: o.readOrEmpty(`${le}.header`).replace('{count}', a.toString()),
                body: o.readOrEmpty(`${le}.body`),
            });
        return n.jsx('div', { className: t(ce.base, ce[`base__${e}`]), ...(s && r) });
    },
    be = 'AnimatedCount_289e911e',
    ue = 'AnimatedCount_value_a13566f1',
    we = ({ goalValue: e, onAnimationEnd: a }) => {
        const [s, o] = r.useState(1),
            [t, i] = r.useState(!1),
            d = _(),
            c = m.resolve('strings');
        return (
            r.useEffect(() => {
                if (t && s < e)
                    return v(() => {
                        (o((e) => e + 1), d.play('rewardAppear', { target: 'coin-count' }));
                    }, 100);
            }, [e, t, s, d]),
            r.useEffect(() => {
                a && s === e && a();
            }, [e, a, s]),
            n.jsx('div', {
                className: be,
                onAnimationEnd: () => i(!0),
                children: n.jsx(f, {
                    text: c.readOrEmpty('seniority_awards.rewardsView.wdrcoin.counter'),
                    params: { count: s },
                    className: ue,
                    upgradeLegacy: !0,
                }),
            })
        );
    },
    he = 'AwardCoin_cb1f70f6',
    Ae = 'AwardCoin_coin_7b7b454f',
    xe = 'AwardCoin_count_1120c4b4',
    ge = ({ count: e, onAnimationEnd: a }) => {
        const [s, o] = r.useState(!1),
            t = _();
        r.useEffect(() => t.play('rewardAppear', { target: 'coin' }), [t]);
        const i = C({ value: _e }, { medium: { value: pe } });
        return n.jsxs('div', {
            className: he,
            children: [
                n.jsx('div', {
                    className: Ae,
                    onAnimationEnd: () => o(!0),
                    children: n.jsx(me, { size: i.value, count: e }),
                }),
                s && n.jsx('div', { className: xe, children: n.jsx(we, { goalValue: e, onAnimationEnd: a }) }),
            ],
        });
    },
    ve = 'Value_1ad9fa26',
    fe = 'Value_currencyValue_2e5d861e',
    Ce = 'Value_label_f36098d',
    je = ({ value: e, name: a, label: s }) => {
        const o = j(e, b(a)),
            t = y.includes(a);
        return n.jsxs(n.Fragment, {
            children: [
                e && n.jsx('div', { className: t ? fe : ve, children: o }),
                !t && n.jsx('div', { className: Ce, children: s }),
            ],
        });
    },
    ye = { base: 'SeniorityReward_5dcf93eb' },
    Se = ({ reward: e }) => {
        const { name: a, tooltipId: s, label: o, value: t, icon: r } = e,
            i = m.resolve('views'),
            d = C({ size: h.S296x222 }, { medium: { size: h.S400x300 } });
        return n.jsxs('div', {
            className: ye.base,
            children: [
                n.jsx(u, {
                    className: ye.reward,
                    name: a,
                    image: A({ ...e, icon: X(r) }, d.size),
                    size: d.size,
                    tooltipArgs: w(
                        { tooltipId: s },
                        i.read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
                    ),
                }),
                n.jsx(je, { value: t, label: o, name: a }),
            ],
        });
    },
    Re = 'Rewards_54691a8d',
    Ne = 'Rewards_fbd70a88',
    Ee = ({ onAnimationEnd: e }) => {
        const { rewards: a } = r.useContext(se);
        return n.jsx('div', {
            className: Re,
            children: n.jsx('div', {
                className: Ne,
                children: a.map((s, o) =>
                    n.jsx(
                        ae,
                        {
                            delay: 300 * o,
                            duration: 300,
                            onRest: o === a.length - 1 ? e : void 0,
                            children: n.jsx(Se, { reward: s }),
                        },
                        s.index,
                    ),
                ),
            }),
        });
    },
    ke = 'Ribbon_3cc0ec72',
    Ie = 'Ribbon_5d49f5db',
    We = 'Ribbon_base__withCoins_18efb3f8',
    Be = 'Ribbon_rewards_223be208',
    Le = 'Ribbon_awardCoin_85654b42',
    Ve = 'Ribbon_radialLines_4d4b0e35',
    Oe = 'Ribbon_linesWrapper_20d691ec',
    Te = 'Ribbon_glow_bbf8d966',
    Me = a(({ onAnimationEnd: e }) => {
        const { model: a } = Q(),
            s = a.computes.coinsCount(),
            o = a.computes.hasCoins(),
            [i, d] = r.useState(!1),
            [c, l] = r.useState(!1);
        return n.jsx('div', {
            className: t(ke, o && We),
            onAnimationEnd: () => {
                o ? d(!0) : l(!0);
            },
            children: n.jsxs('div', {
                className: Ie,
                children: [
                    n.jsx('div', { className: Oe, children: n.jsx('div', { className: Ve }) }),
                    i &&
                        n.jsxs('div', {
                            className: Le,
                            children: [
                                n.jsx('div', { className: Te }),
                                n.jsx(ge, { count: s, onAnimationEnd: () => l(!0) }),
                            ],
                        }),
                    n.jsx('div', {
                        className: Be,
                        children: c && (o ? n.jsx(de, { onAnimationEnd: e }) : n.jsx(Ee, { onAnimationEnd: e })),
                    }),
                ],
            }),
        });
    }),
    Fe = 'Content_5701de48',
    ze = 'Content_ribbon_f0a1a721',
    De = 'Content_ribbon__hidden_8a08fe48',
    Ue = ({ machineState: e, isFirstEnter: a, onAnimationEnd: s }) => {
        const o = _();
        return (
            r.useLayoutEffect(
                () => (
                    a && o.play('rewardsViewAppear', { target: 'first-enter' }),
                    o.play('rewardsViewAppear', { target: 'enter' }),
                    () => o.play('rewardsViewAppear', { target: 'exit' })
                ),
                [a, e, o],
            ),
            r.useEffect(() => {
                a || s();
            }, [a, s]),
            n.jsx('div', {
                className: Fe,
                children: n.jsx('div', { className: t(ze, !a && De), children: n.jsx(Me, { onAnimationEnd: s }) }),
            })
        );
    };
var He = ((e) => ((e.Ribbon = 'ribbon'), e))(He || {}),
    Pe = ((e) => ((e.ShowMoreRewards = 'showMoreRewards'), e))(Pe || {});
const Ye = {
        root: 'App_root_0',
        base: 'App_154e87fb',
        bgWrapper: 'App_bgWrapper_21766699',
        bgWrapper__imageLoaded: 'App_bgWrapper__imageLoaded_aa356d09',
        background: 'App_background_e5e6217b',
        shadow: 'App_shadow_a68941b6',
        gradient: 'App_gradient_7b9f3ac9',
        closeButton: 'App_closeButton_9412a735',
        fadeIn: 'App_fadeIn_0',
        header: 'App_header_52929dd2',
        slideDown: 'App_slideDown_0',
        footer: 'App_footer_94820e0d',
        slideUp: 'App_slideUp_0',
        fadeOut: 'App_fadeOut_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideRibbonUp: 'App_slideRibbonUp_0',
        scale: 'App_scale_0',
    },
    $e = !0,
    Ke = a(() => {
        const { model: e, controls: a } = Q(),
            { computes: s } = e,
            { category: o, maxCategory: l } = e.root.get(),
            p = _(),
            m = () => p.play('rewardsViewAppear', { target: 'exit' }),
            b = S(z),
            [u, w] = R(z),
            [h, A] = r.useState('showHeader'),
            x = s.bonuses(),
            g = s.hasCoins(),
            f = s.isShopAvailable(),
            [C, j] = c(() =>
                ((e, a, s) => {
                    const n = s ? 9 : 3;
                    return i({
                        id: 'seniority-awards',
                        initial: e,
                        context: { visibleRewards: a.slice(0, n), rewardWatchedCount: n, isFirstEnter: !0 },
                        states: {
                            ribbon: {
                                exit: d.assign((e) => ({
                                    visibleRewards: e.visibleRewards,
                                    rewardWatchedCount: e.rewardWatchedCount,
                                    isFirstEnter: !1,
                                })),
                                on: {
                                    showMoreRewards: {
                                        target: 'ribbon',
                                        internal: !0,
                                        actions: d.assign((e) => {
                                            const s = e.rewardWatchedCount + n;
                                            return {
                                                visibleRewards: a.slice(e.rewardWatchedCount, s),
                                                rewardWatchedCount: s,
                                                isRibbonVisited: e.isFirstEnter,
                                            };
                                        }),
                                        cond: (e) => e.rewardWatchedCount < a.length,
                                    },
                                },
                            },
                        },
                    });
                })(He.Ribbon, x, g),
            ),
            y = s.bonusesLength(),
            L = C.context.rewardWatchedCount < y,
            V = y - C.context.rewardWatchedCount,
            O = D(q, K) === U.success,
            T = r.useMemo(() => ({ rewards: C.context.visibleRewards }), [C.context.visibleRewards]),
            M = (e = !1) => {
                (b({ action: e ? I.KeyDown : I.Click, item: $.CloseButton, parentScreen: Y.RewardsScreen }),
                    m(),
                    W.close());
            },
            F = () => {
                'showContent' !== h && (A('showContent'), j(Pe.ShowMoreRewards));
            },
            G = (e = !1) => {
                (b({
                    action: e ? I.KeyDown : I.Click,
                    item: s.isShopAvailable() ? $.GoToShopButton : $.ConfirmButton,
                    parentScreen: Y.RewardsScreen,
                }),
                    m(),
                    f && !L && a.openShop(),
                    a.onOpenBtnClick());
            };
        N(() => {
            L ? F() : M($e);
        });
        const J = () => {
            L ? F() : G($e);
        };
        (E(B.ENTER, J), E(B.SPACE, J));
        const X = r.useCallback(() => {
            A('showFooter');
        }, []);
        return (
            r.useEffect(() => {
                if ('showHeader' === h) return v(() => A('showContent'), 700);
            }, [h]),
            n.jsxs('div', {
                className: t(Ye.base, Ye[`base__${C.value}`]),
                children: [
                    n.jsx('div', {
                        className: t(Ye.bgWrapper, O && Ye.bgWrapper__imageLoaded),
                        children: n.jsx('div', { className: Ye.background }),
                    }),
                    n.jsx('div', { className: Ye.shadow }),
                    n.jsx('div', { className: Ye.gradient }),
                    n.jsx('div', { className: Ye.closeButton, children: n.jsx(k, { onClose: () => M() }) }),
                    n.jsx('div', {
                        className: Ye.header,
                        children: n.jsx(H, {
                            maxCategory: l,
                            category: o,
                            onShowTooltip: () => {
                                u(I.Viewed);
                            },
                            onHideTooltip: () => {
                                w({
                                    action: I.Viewed,
                                    item: $.SeniorityAwardsTooltip,
                                    parentScreen: Y.RewardsScreen,
                                    timeLimit: 0.5,
                                });
                            },
                        }),
                    }),
                    'showHeader' !== h &&
                        n.jsx(se.Provider, {
                            value: T,
                            children: n.jsx(Ue, {
                                machineState: C.value,
                                isFirstEnter: C.context.isFirstEnter,
                                onAnimationEnd: X,
                            }),
                        }),
                    ('showFooter' === h || 'finished' === h) &&
                        n.jsx('div', {
                            className: Ye.footer,
                            children: n.jsx(P, {
                                moreReardsCount: V,
                                hasMoreRewards: L,
                                isShopAvailable: f,
                                onShowMoreClick: () => {
                                    F();
                                },
                                onAcceptClick: () => G(),
                            }),
                        }),
                ],
            })
        );
    }),
    qe = L(M);
T(new V().add(J).addWithProps(O, { soundsOverrides: qe }).render(n.jsx(Ke, {})));
