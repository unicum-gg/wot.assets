import { o as e, g as a, e as s, t, H as i, j as r, f as n, n as o, r as l, k as d } from '../../../chunks/vendor.js';
import {
    i as c,
    c as _,
    m,
    ae as p,
    u,
    b,
    G as w,
    p as g,
    bB as h,
    bA as T,
    bz as A,
    R as f,
    w as x,
    C as v,
    B as P,
    q as y,
    e as S,
    t as B,
    bv as L,
    bN as j,
    bq as N,
    bU as E,
    bC as k,
    bV as U,
    o as I,
    T as V,
    Q as C,
    J as W,
    U as $,
    j as Y,
} from '../../../chunks/lib.js';
import { u as F, H as O } from '../../../chunks/useKeyup.js';
import { g as z } from '../../../chunks/filename.js';
import { e as D, i as M, d as G } from '../../../chunks/utils.js';
var H = ((e) => (
    (e.BUY_BATTLE_PASS = 'buyBattlePassReason'),
    (e.BUY_BATTLE_PASS_LEVELS = 'buyBattlePassLevelsReason'),
    (e.BUY_MULTIPLE_BATTLE_PASS = 'buyMultipleBattlePassReason'),
    (e.BUY_BATTLE_PASS_WITH_LEVELS = 'buyBattlePassWithLevelsReason'),
    (e.STYLE_UPGRADE = 'styleUpgradeReason'),
    (e.DEFAULT = 'defaultReason'),
    e
))(H || {});
const [q, J] = c()(
        ({ observableModel: s }) => {
            const t = {
                    root: s.object(),
                    mainRewards: s.array('mainRewards.items'),
                    additionalRewards: s.array('additionalRewards.items'),
                    packageRewards: s.array('packageRewards.items'),
                    starterPackRewards: s.array('starterPackRewards.items'),
                    canToOpenAdditionView: e.box(!1),
                },
                i = a(() => {
                    const { reason: e } = t.root.get();
                    return e === H.BUY_BATTLE_PASS;
                }),
                r = a(() => {
                    const { reason: e } = t.root.get();
                    return e === H.BUY_BATTLE_PASS_WITH_LEVELS;
                }),
                n = a(() => {
                    const { reason: e } = t.root.get();
                    return e === H.BUY_MULTIPLE_BATTLE_PASS;
                }),
                o = a(() => i() || n() || r()),
                l = a(() => {
                    const { reason: e } = t.root.get();
                    return e === H.STYLE_UPGRADE;
                }),
                d = a(
                    () =>
                        o() && !t.canToOpenAdditionView.get()
                            ? [...m(t.starterPackRewards.get(), p), ...m(t.packageRewards.get(), p)]
                            : m(t.additionalRewards.get(), p),
                    { equals: _ },
                ),
                c = a(() => d().length),
                u = a(() => c() > 0),
                b = a(() => m(t.mainRewards.get(), p), { equals: _ }),
                w = a(() => {
                    const e = b();
                    if (1 === e.length) return e;
                    const a = [...e],
                        s = a[0];
                    return ((a[0] = a[1]), (a[1] = s), a);
                }),
                g = a(() => (t.root.get().isFinalReward ? w() : b())),
                h = a(() => g().length),
                T = a(() => {
                    const { isFinalReward: e } = t.root.get();
                    return 1 === h() || e;
                }),
                A = a(() => {
                    const { isFinalReward: e } = t.root.get();
                    return (2 !== g().length && e) || o() || l();
                }),
                f = [H.BUY_BATTLE_PASS_LEVELS, H.BUY_BATTLE_PASS_WITH_LEVELS, H.DEFAULT].includes(t.root.get().reason),
                R = a(() => {
                    const { isPostProgressionUnlocked: e, isExtra: a, isFinalReward: s } = t.root.get();
                    return e && !a && s && f;
                });
            return {
                ...t,
                computes: {
                    isReasonBuy: i,
                    isReasonBuyWithLevels: r,
                    isMultiplePurchase: n,
                    isReasonBuyCurrently: o,
                    isReasonStyleUpgrade: l,
                    getAdditionalRewards: d,
                    getAdditionalRewardsLength: c,
                    hasAdditionalRewards: u,
                    getRewards: g,
                    getRewardsLength: h,
                    hasBigSizeReward: T,
                    getFinalRewards: w,
                    hasGlowAnimation: A,
                    hasPostProgressionBanner: R,
                },
            };
        },
        ({ model: e, externalModel: a }) => ({
            enableToOpenAdditionView: s(() => {
                e.canToOpenAdditionView.set(!0);
            }),
            buy: a.createCallbackNoArgs('onBuyClick'),
            close: a.createCallbackNoArgs('onClose'),
            onShowPostProgression: a.createCallbackNoArgs('onShowPostProgression'),
        }),
    ),
    K = 'AdditionalRewards_c7f66cac',
    Q = 'AdditionalRewards_title_3afa6e1a',
    X = 'AdditionalRewards_title__updateAnimation_3afa6e1a',
    Z = 'AdditionalRewards_reward_79ca4edb',
    ee = 'AdditionalRewards_rewardsList_532db93b',
    ae = R.strings.battle_pass.battlePassAwardsView,
    se = t(({ rewards: e, pageNumber: a, className: s }) => {
        const { model: t } = J(),
            l = t.canToOpenAdditionView.get(),
            { breakpoint: d } = u(),
            c = d.weight >= b.large.weight ? w.Big : w.Small,
            _ = i(e, {
                from: { opacity: 0, y: '20rem' },
                enter: { opacity: 1, y: '0rem' },
                trail: 100,
                config: { duration: 300, easing: D },
                onStart: () => g.sound(R.sounds.bp_reward()),
                delay: 1 === a ? 1600 - (l ? 800 : 0) : 100,
            });
        return r.jsxs('div', {
            className: n(K, s),
            children: [
                r.jsx('div', { className: n(Q, l && X), children: ae.additionalRewards.subText() }),
                r.jsx('div', {
                    className: ee,
                    children: _((e, a) => {
                        const s = a.item || a.name,
                            t = h(a, c),
                            i = T(a.name),
                            n = A({ tooltipId: a.tooltipId }, Number(a.tooltipContentId), { ignoreShowDelay: !0 });
                        return r.jsx(o.div, {
                            className: Z,
                            style: e,
                            children: r.jsx(f, {
                                name: s,
                                image: t,
                                special: a.overlayType,
                                value: a.value,
                                valueType: i,
                                size: c,
                                tooltipArgs: n,
                            }),
                        });
                    }),
                }),
            ],
        });
    }),
    te = 'Banner_d226745a',
    ie = 'Banner_content_b0220cfe',
    re = 'Banner_icon_5d6fa4df',
    ne = 'Banner_description_ac932ff',
    oe = 'Banner_title_f8c86772',
    le = 'Banner_text_6a6f5026',
    de = 'Banner_buttonContainer_9bae7c89',
    ce = 'Banner_buttonWrapper_4e9f1fa3',
    _e = 'Banner_buttonGlow_d6f79d6a',
    me = R.strings.battle_pass.battlePassAwardsView.footer,
    pe = t(({ className: e, parentRef: a }) => {
        const { model: s, controls: t } = J(),
            { seasonStopped: i, currentLevel: o } = s.root.get();
        F({ [x.ENTER]: t.buy, [x.SPACE]: t.buy });
        const { breakpoint: l } = u(),
            d = l.weight >= b.medium.weight;
        return r.jsxs('div', {
            ref: a,
            className: n(te, e),
            children: [
                r.jsxs('div', {
                    className: ie,
                    children: [
                        r.jsx('div', { className: re }),
                        r.jsxs('div', {
                            className: ne,
                            children: [
                                r.jsx('div', { className: oe, children: me.bpTitle() }),
                                r.jsx('div', {
                                    className: le,
                                    children: o >= 45 ? me.bpLastStagesTitle() : me.bpInProgressTitle(),
                                }),
                            ],
                        }),
                    ],
                }),
                r.jsxs('div', {
                    className: de,
                    children: [
                        r.jsx('div', { className: _e }),
                        r.jsx('div', {
                            className: ce,
                            children: r.jsx(v, {
                                disabled: i,
                                type: y.main,
                                size: d ? P.medium : P.small,
                                onClick: t.buy,
                                children: me.bpButtonTitle(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ue = 'Footer_f09fca09',
    be = 'Footer_base__withPostProgressionPath_67ee05f9',
    we = 'Footer_postProgressionInfo_90b6969f',
    ge = 'Footer_lockImage_39ae8112',
    he = 'Footer_title_d3857cd',
    Te = 'Footer_title__highlight_97414ca4',
    Ae = 'Footer_buttonContainer_873ac017',
    fe = 'Footer_postProgressionButton_45a39895',
    Re = R.strings.battle_pass.battlePassAwardsView,
    xe = t(({ button: e, className: a }) => {
        const { model: s, controls: t } = J(),
            { breakpoint: i } = u(),
            { reason: o, chapterID: l, isBaseStyleLevel: d, isPostProgressionUnlocked: c } = s.root.get(),
            _ = s.computes.hasPostProgressionBanner(),
            m = s.computes.isReasonBuyCurrently(),
            p = ((e, a, s) => {
                switch (e) {
                    case H.BUY_BATTLE_PASS:
                        return r.jsx(S, {
                            text: Re.mainReward.bpBuyAwardsCaption(),
                            binding: { chapter: R.strings.battle_pass.chapter.fullName.$num(a) },
                        });
                    case H.BUY_BATTLE_PASS_WITH_LEVELS:
                        return r.jsx(S, {
                            text: Re.mainReward.bpBuyWithLevels(),
                            binding: { chapter: R.strings.battle_pass.chapter.fullName.$num(a) },
                        });
                    case H.BUY_MULTIPLE_BATTLE_PASS:
                        return Re.footer.allChaptersText();
                    case H.STYLE_UPGRADE:
                        return s ? Re.footer.bpDescriptionGotStyle() : '';
                    default:
                        return '';
                }
            })(o, l, d),
            w = i.weight >= b.medium.weight;
        return r.jsxs('div', {
            className: n(ue, a, c && be),
            children: [
                _
                    ? r.jsxs('div', {
                          className: we,
                          children: [
                              r.jsx('div', { className: ge }),
                              r.jsx('div', { children: Re.footer.postProgressionText() }),
                          ],
                      })
                    : Boolean(p) && r.jsx('div', { className: n(he, m && Te), children: p }),
                r.jsxs('div', {
                    className: Ae,
                    'data-test-id': 'buttonContainer',
                    children: [
                        r.jsx(v, {
                            type: y.primary,
                            size: w ? P.medium : P.small,
                            onClick: e.onClick,
                            children: e.text,
                        }),
                        _ &&
                            e.hasPostProgressionButton &&
                            r.jsx(v, {
                                type: y.secondary,
                                size: w ? P.medium : P.small,
                                onClick: t.onShowPostProgression,
                                mixClass: fe,
                                children: Re.footer.postProgressionButton(),
                            }),
                    ],
                }),
            ],
        });
    }),
    ve = (e, a) => {
        const s = a.postfix ? `_${a.postfix}` : '';
        return ((e) => {
            const a = e.path.$dyn(`${e.name}_${e.id}`),
                s = e.path.$dyn('default');
            return a || s;
        })(e).$dyn(`${a.name}${s}`);
    };
var Pe = ((e) => ((e.Season = 'season'), (e.Chapter = 'chapter'), e))(Pe || {});
const ye = 'ChapterLogo_aa1334cf',
    Se = t(() => {
        const { model: e } = J(),
            { chapterID: a } = e.root.get(),
            s = (() => {
                if (e.computes.isMultiplePurchase())
                    return { backgroundImage: 'url(R.images.gui.maps.icons.battlePass.rewards.bp_icon_triple)' };
                const s = { path: R.images.gui.maps.icons.battlePass.rewards.chapterLogo, name: Pe.Chapter, id: a };
                return { backgroundImage: `url(${ve(s, { name: 'bp_icon' })})` };
            })();
        return r.jsx('div', { className: ye, style: s });
    }),
    Be = 'Glow_ae7a850f',
    Le = 'Glow_91b75819',
    je = ({ className: e }) =>
        r.jsx('div', {
            className: n(Be, e),
            children: r.jsx('img', { className: Le, src: 'swf://gui/flash/animations/battlePass/rays.swf', alt: '' }),
        }),
    Ne = 'AttachmentOverlay_cb258ef',
    Ee = ({ overlayType: e, rewardSize: a, className: s }) =>
        r.jsx('div', {
            className: n(Ne, s),
            style: { backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${a}.${e})` },
        }),
    ke = { base: 'TankName_6f5fa973', base__wide: 'TankName_base__wide_bdc02313', type: 'TankName_type_be575ae0' },
    Ue = (e, a) => ({
        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.big.${`${e.replace('-', '_')}${a ? '_elite' : ''}`}`})`,
    }),
    Ie = ({ isElite: e, vehicleName: a, vehicleType: s, vehicleLvl: t, isWide: i }) =>
        r.jsxs('div', {
            className: n(ke.base, i && ke.base__wide),
            children: [
                r.jsx('div', { className: ke.level, children: B(t) }),
                r.jsx('div', { className: ke.type, style: Ue(s, e) }),
                r.jsx('div', { className: ke.name, children: a }),
            ],
        }),
    Ve = 'Text_textCenter_a832bab6',
    Ce = R.strings.battle_pass,
    We = ({ type: e, value: a }) => {
        switch (e) {
            case j.BattlaPassFinalAchievement:
                return r.jsx(S, { text: Ce.battlePassAwardsView.mainReward.reward(), binding: { name: a } });
            case j.TmanToken:
                return r.jsx(S, {
                    classMix: Ve,
                    text: Ce.battlePassAwardsView.mainReward.commander(),
                    binding: { name: a },
                });
            case j.Gold:
            case j.Credits:
            case j.Crystal:
            case j.EquipCoin:
                return r.jsx(N, { format: 'integral', value: Number(a) });
            default:
                return r.jsx(r.Fragment, { children: L(a) });
        }
    },
    $e = {
        root: 'Title_root_2e63cf3',
        base: 'Title_ddf5c9be',
        title: 'Title_37b34825',
        base__wide: 'Title_base__wide_2e63cf3',
        base__credits: 'Title_base__credits_2e63cf3',
        base__gold: 'Title_base__gold_2e63cf3',
        base__bptaler: 'Title_base__bptaler_2e63cf3',
        base__crystal: 'Title_base__crystal_2e63cf3',
        subtitle: 'Title_subtitle_918f7dda',
        fadeInWithScale: 'Title_fadeInWithScale_2e63cf3',
        slideUp: 'Title_slideUp_2e63cf3',
        blink: 'Title_blink_2e63cf3',
        scale: 'Title_scale_2e63cf3',
        rotate: 'Title_rotate_2e63cf3',
        windowIn: 'Title_windowIn_2e63cf3',
        fadeOut: 'Title_fadeOut_2e63cf3',
        fadeIn: 'Title_fadeIn_2e63cf3',
    },
    Ye = R.strings.battle_pass,
    Fe = ({ reward: e, size: a, className: s }) => {
        const {
                name: t,
                userName: i,
                vehicleLvl: o,
                vehicleName: l,
                vehicleType: d,
                isElite: c,
                isCollectionEntity: _,
            } = e,
            m = t === j.Vehicles;
        return r.jsxs('div', {
            className: n($e.base, $e[`base__${a}`], $e[`base__${t}`], s),
            children: [
                r.jsx('div', {
                    className: $e.title,
                    children:
                        m && o && l && d
                            ? r.jsx(Ie, {
                                  vehicleLvl: o,
                                  vehicleName: l,
                                  vehicleType: d,
                                  isElite: c || !1,
                                  isWide: a === De.Wide,
                              })
                            : r.jsx(We, { type: t, value: i }),
                }),
                _ && r.jsx('div', { className: $e.subtitle, children: Ye.common.collectionText() }),
            ],
        });
    },
    Oe = {
        root: 'Reward_root_21f091ec',
        base: 'Reward_c14bb065',
        imageWrapper: 'Reward_imageWrapper_ee9e0933',
        image: 'Reward_image_39bfebdb',
        fadeInWithScale: 'Reward_fadeInWithScale_21f091ec',
        base__updateAnimation: 'Reward_base__updateAnimation_21f091ec',
        base__wide: 'Reward_base__wide_21f091ec',
        base__small: 'Reward_base__small_21f091ec',
        attachment: 'Reward_attachment_48a1a96b',
        title: 'Reward_title_eac8d89d',
        fadeIn: 'Reward_fadeIn_21f091ec',
        count: 'Reward_count_b77b0d34',
        slideUp: 'Reward_slideUp_21f091ec',
        blink: 'Reward_blink_21f091ec',
        scale: 'Reward_scale_21f091ec',
        rotate: 'Reward_rotate_21f091ec',
        windowIn: 'Reward_windowIn_21f091ec',
        fadeOut: 'Reward_fadeOut_21f091ec',
    },
    ze = R.strings.battle_pass;
var De = ((e) => ((e.Normal = 'normal'), (e.Wide = 'wide'), (e.Small = 'small'), e))(De || {});
const Me = [j.BattlaPassFinalAchievement, j.TmanToken, j.Vehicles],
    Ge = [
        E.credits,
        E.gold,
        E.crystal,
        E.xp,
        E.freeXP,
        E.equipCoin,
        j.BattlaPassFinalAchievement,
        j.TmanToken,
        j.Vehicles,
        j.PremiumPlus,
        j.BattlePassTaler,
    ],
    He = t(({ reward: e, rewardListIndex: a }) => {
        const { model: s } = J(),
            t = s.canToOpenAdditionView.get(),
            i = s.computes.hasBigSizeReward(),
            o = s.computes.getRewardsLength(),
            { overlayType: l, tooltipContentId: d, tooltipId: c, name: _, userName: m, value: p } = e,
            u = ((b = _), !Ge.includes(b) && Number(p) > 1);
        var b;
        const g = ((e) => Me.includes(e))(_) || (m && m.length > 0),
            h = () => (i ? (1 === o || 1 === a ? 'wide' : 'small') : 'normal');
        return r.jsxs('div', {
            className: n(Oe.base, Oe[`base__${h()}`], t && Oe.base__updateAnimation),
            children: [
                r.jsx(k, {
                    ignoreShowDelay: !0,
                    contentId: Number(d),
                    args: { tooltipId: c },
                    children: r.jsxs('div', {
                        className: Oe.imageWrapper,
                        children: [
                            r.jsx('div', { className: Oe.image, style: G(e) }),
                            M(_) && r.jsx(Ee, { overlayType: l, rewardSize: w.S600x450, className: Oe.attachment }),
                            u &&
                                r.jsx('div', {
                                    className: Oe.count,
                                    children: r.jsx(S, { text: ze.common.multiplier(), binding: { multiplier: p } }),
                                }),
                        ],
                    }),
                }),
                g && r.jsx(Fe, { reward: e, size: h(), className: Oe.title }),
            ],
        });
    }),
    qe = 'Rewards_1a8854f',
    Je = 'Rewards_base__updateSize_222a87fa',
    Ke = t(() => {
        const { model: e } = J(),
            a = e.canToOpenAdditionView.get(),
            s = e.computes.getRewards();
        return r.jsx('div', {
            className: n(qe, a && Je),
            children: s.map((e, a) => r.jsx(He, { reward: e, rewardListIndex: a }, `reward-${a}`)),
        });
    }),
    Qe = 'Ribbon_2234841',
    Xe = 'Ribbon_base__indentWide_72bb1f1',
    Ze = t(() => {
        const { model: e } = J(),
            { isBattlePassPurchased: a, chapterID: s } = e.root.get(),
            t = e.computes.hasBigSizeReward(),
            i = e.computes.isReasonBuyCurrently(),
            o = t || i,
            { breakpoint: l } = u(),
            d = ((e) => {
                switch (e) {
                    case b.small.name:
                        return 'small';
                    case b.medium.name:
                        return 'medium';
                    default:
                        return 'large';
                }
            })(l.name),
            c = (() => {
                const e = { path: R.images.gui.maps.icons.battlePass.logo.ribbon, name: Pe.Chapter, id: s };
                return { backgroundImage: `url(${ve(e, { name: 'ribbon', postfix: `${d}${a ? '_with_bp' : ''}` })})` };
            })();
        return r.jsx('div', { className: n(Qe, o && Xe), style: c });
    }),
    ea = 'MainRewards_c825d49e',
    aa = 'MainRewards_glow_31c8c598',
    sa = 'MainRewards_rays_11ac61d3',
    ta = t(({ className: e }) => {
        const { model: a } = J(),
            s = a.canToOpenAdditionView.get(),
            t = a.computes.isReasonBuyCurrently(),
            i = a.computes.hasGlowAnimation(),
            [c, _] = l.useState(!1),
            { contentOpacity: m } = d({
                from: { contentOpacity: 1 },
                contentOpacity: s ? 1 : 0,
                config: { duration: 400 },
                onResolve: () => {
                    s && _(!0);
                },
            });
        return r.jsxs('div', {
            className: n(ea, e),
            children: [
                i && !s && r.jsx(je, { className: aa }),
                r.jsx('div', { className: sa }),
                r.jsx(Ze, {}),
                t && !c
                    ? r.jsx(o.div, { style: { opacity: m.to({ output: [1, 0] }) }, children: r.jsx(Se, {}) })
                    : r.jsx(Ke, {}),
            ],
        });
    }),
    ia = 'App_ab56c836',
    ra = 'App_overlay_ce1d3259',
    na = 'App_overlay__common_f6f1f131',
    oa = 'App_main_20c49be8',
    la = 'App_close_110976dc',
    da = 'App_content_d2251eca',
    ca = 'App_header_c3dc2c23',
    _a = 'App_rewards_927ebd71',
    ma = 'App_rewards__additionalCentring_6f33396d',
    pa = 'App_additionalRewards_2598f029',
    ua = 'App_additionalRewards__slideTop_bc21615e',
    ba = 'App_additionalRewards__animateSlide_9db8979b',
    wa = 'App_base__buyWithLevels_0',
    ga = 'App_mainRewards_de1e5f92',
    ha = 'App_mainRewards__slideTop_bc21615e',
    Ta = 'App_mainRewards__animateSlide_7838291c',
    Aa = 'App_footer_e0204304',
    fa = 'App_footer__hide_642d4e09',
    Ra = 'App_footer__diffTop_8dc6cdec',
    xa = 'App_banner_e0204304',
    va = 'App_banner__showPreparation_ca795627',
    Pa = R.strings.battle_pass,
    ya = (e) =>
        e
            ? r.jsx(S, {
                  text: Pa.battlePassAwardsView.header.bpTitle(),
                  binding: { chapter: Pa.chapter.fullNameUppercased.$num(e) },
              })
            : Pa.battlePassAwardsView.header.bpTitleWithoutChapter(),
    Sa = (e, a) => {
        switch (e) {
            case H.BUY_BATTLE_PASS:
            case H.BUY_MULTIPLE_BATTLE_PASS:
            case H.BUY_BATTLE_PASS_WITH_LEVELS:
                return Pa.battlePassAwardsView.header.bpTitleWithoutChapter();
            case H.BUY_BATTLE_PASS_LEVELS:
            case H.STYLE_UPGRADE:
            case H.DEFAULT:
                return ya(a);
        }
        return (console.warn('Unknown title reason: ', e), ya(a));
    },
    Ba = (e, a, s) => {
        switch (e) {
            case H.BUY_BATTLE_PASS:
            case H.BUY_MULTIPLE_BATTLE_PASS:
            case H.BUY_BATTLE_PASS_WITH_LEVELS:
                return Pa.battlePassAwardsView.header.bpBoughtText();
            case H.BUY_BATTLE_PASS_LEVELS:
                return a
                    ? Pa.battlePassAwardsView.header.bpFinalLevelText()
                    : Pa.battlePassAwardsView.header.bpLevelsText();
            case H.STYLE_UPGRADE:
                return s
                    ? Pa.battlePassAwardsView.header.styleReceivedText()
                    : Pa.battlePassAwardsView.header.styleUpgradedText();
            case H.DEFAULT:
                return a
                    ? Pa.battlePassAwardsView.header.bpFinalLevelText()
                    : Pa.battlePassAwardsView.header.bpLevelsText();
        }
        return (console.warn('Unknown status reason: ', e), '');
    },
    La = (e, a, s, t, i, n) => {
        const o = ((e, a, s) =>
            s
                ? Pa.battlePassAwardsView.additionalRewards.seeMoreButtonText()
                : e
                  ? r.jsx(S, {
                        text: Pa.battlePassAwardsView.additionalRewards.bpRemainLevelsAwardsText(),
                        binding: { remainingAwardsCount: a },
                    })
                  : Pa.battlePassAwardsView.additionalRewards.button())(i, a > t * (s + 1) ? 10 : a - t * s, e);
        return { onClick: n, text: o, hasPostProgressionButton: !e && !i };
    },
    ja = t(() => {
        const { model: e, controls: a } = J(),
            { reason: s, chapterID: t, isFinalReward: i, isBaseStyleLevel: o, isNeedToShowOffer: d } = e.root.get(),
            c = e.canToOpenAdditionView.get(),
            _ = e.computes.getAdditionalRewards(),
            m = e.computes.getAdditionalRewardsLength(),
            p = e.computes.hasAdditionalRewards(),
            u = e.computes.isReasonBuyCurrently(),
            b = e.computes.isReasonBuyWithLevels(),
            w = e.computes.isReasonStyleUpgrade(),
            g = e.computes.hasPostProgressionBanner(),
            h = e.computes.hasBigSizeReward(),
            T = e.computes.getRewards().length > 0,
            [A, f] = l.useState(1),
            [x, v] = l.useState(0),
            [P, y] = l.useState(!1),
            S = u && T && !c,
            B = `${U(x)}rem`;
        I(a.close);
        const L = { title: Sa(s, t), subtitle: Ba(s, i, o) },
            j = _.slice(10 * (A - 1), 10 * A),
            N = j.length,
            E = Math.ceil(m / 10),
            k = A < E,
            W = E > 1,
            $ = d && !w && !k && !g,
            Y = $ && W,
            F = !$ || Y,
            D = l.useRef(null),
            M = () => {
                C(() => {
                    D && D.current && v(D.current.offsetHeight);
                });
            };
        (l.useEffect(() => {
            (M(), y(!1));
        }, [$, Y]),
            l.useEffect(() => {
                const e = () => {
                    (M(), y(!0));
                };
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, []));
        const G = La(S, m, A, N, k, () => {
                S ? a.enableToOpenAdditionView() : k ? f(A + 1) : a.close();
            }),
            H = h && p,
            q = {
                backgroundImage: t
                    ? `url(${z(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, t)})`
                    : 'url(R.images.gui.maps.icons.battlePass.backgrounds.common)',
                '--banner-height': B,
            };
        return r.jsxs('div', {
            className: n(ia, b && c && wa),
            style: q,
            children: [
                r.jsx('div', { className: n(ra, !t && na) }),
                r.jsxs('div', {
                    className: oa,
                    children: [
                        r.jsx('div', {
                            className: la,
                            children: r.jsx(V, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: a.close,
                            }),
                        }),
                        r.jsxs('div', {
                            className: da,
                            children: [
                                r.jsx('div', {
                                    className: ca,
                                    children: r.jsx(O, { title: L.title, status: L.subtitle }),
                                }),
                                r.jsxs('div', {
                                    className: n(_a, H && ma),
                                    children: [
                                        r.jsx(ta, { className: n(ga, Y && ha, Y && !P && Ta) }),
                                        p &&
                                            r.jsx(se, {
                                                rewards: j,
                                                pageNumber: A,
                                                className: n(pa, Y && ua, Y && !P && ba),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        F && r.jsx(xe, { button: G, className: n(Aa, Y && fa, !$ && Ra) }),
                        $ && r.jsx(pe, { className: n(xa, W && va), parentRef: D }),
                    ],
                }),
            ],
        });
    });
Y(new W().add($).addWithProps(q, {}).render(r.jsx(ja, {})));
