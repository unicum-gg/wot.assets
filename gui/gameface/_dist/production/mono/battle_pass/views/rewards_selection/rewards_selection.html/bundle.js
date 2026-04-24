import { o as e, g as a, e as s, v as t, j as o, f as n, r as i } from '../../../chunks/vendor.js';
import {
    i as c,
    e as l,
    bw as r,
    aa as d,
    G as _,
    bt as b,
    g as u,
    h as m,
    p,
    n as g,
    bV as f,
    bI as w,
    aA as h,
    W as x,
    K as v,
    Q as C,
    X as j,
    z as y,
    B as N,
    aM as k,
    bA as S,
    C as I,
    q as T,
    c as B,
    bW as $,
    aP as z,
    b as A,
    T as L,
    J as E,
    U as W,
    d as M,
} from '../../../chunks/lib.js';
import { s as O } from '../../../chunks/utils.js';
import { g as U, a as F } from '../../../chunks/filename.js';
var P = ((e) => ((e.None = 'none'), (e.Accepting = 'accepting'), e))(P || {});
const [D, q] = c()(
    ({ observableModel: s }) => {
        const t = {
                root: s.object(),
                tabs: s.array('tabs'),
                rewards: s.array('rewards'),
                animationState: e.box('none'),
            },
            o = a((e) => r(t.tabs.get(), e), { equals: l }),
            n = a((e) => r(t.rewards.get(), e), { equals: l }),
            i = a(() => d(t.tabs.get(), (e, a) => e + a.limit, 0));
        return { ...t, computes: { tabByIndex: o, rewardByIndex: n, rewardsToClaimTotal: i } };
    },
    ({ externalModel: e, model: a }) => {
        const t = s((e) => a.animationState.set(e));
        return {
            close: e.createCallbackNoArgs('onCloseClick'),
            submit: e.createCallbackNoArgs('onOkClick'),
            reduceReward: e.createCallback((e) => ({ type: e }), 'onRewardReduce'),
            addReward: e.createCallback((e) => ({ type: e }), 'onRewardAdd'),
            openTab: e.createCallback((e) => ({ type: e }), 'onTabClick'),
            setAnimationState: t,
        };
    },
);
function G(e) {
    const a = e.match(/(?:_(?:t|tier))?(\d+)\b/);
    return a ? parseInt(a[1], 10) : null;
}
var H = ((e) => (
    (e.None = 'none'),
    (e.Trophy = 'trophy'),
    (e.Deluxe = 'deluxe'),
    (e.Modernized = 'modernized_device'),
    (e.BattleBooster = 'battleBooster'),
    e
))(H || {});
function V(e) {
    return e.includes('delux')
        ? 'deluxe'
        : e.includes('modernized')
          ? 'modernized_device'
          : e.includes('trophy')
            ? 'trophy'
            : e.toLowerCase().endsWith('battleBooster'.toLowerCase())
              ? 'battleBooster'
              : 'none';
}
function J(e, a) {
    return a && 'none' !== a ? a : e;
}
const K = (e, a = _.Small, s) => {
        if ('modernized_device' === s) {
            const s = G(e);
            if (s) return `R.images.gui.maps.icons.quests.bonuses.${a}.modernized_devices_t${s}_gift`;
        }
        return `R.images.gui.maps.icons.quests.bonuses.${a}.${J(e, s)}_gift`;
    },
    Q = (e, a) => {
        const s = e.match(/^offer:([^:]+):/);
        return s
            ? `${R.strings.selectable_reward.tabs.items.$dyn(s[1])}`
            : `${R.strings.selectable_reward.tabs.items.$dyn(J(e, a))}`;
    },
    X = (e) => {
        var a;
        const s = e.split('_')[1],
            t = s && R.strings.blueprints.nations.$dyn(s),
            o = null == (a = R.strings.artefacts.$dyn(e)) ? void 0 : a.$dyn('name');
        return t || (o && 'string' == typeof o ? b(o) : void console.error('title for reward is not provided'));
    };
function Y(e, a) {
    if ('modernized_device' === a) {
        const a = G(e);
        if (a) return `R.images.gui.maps.icons.selectableReward.reward.optDeviceType.modernized_devices_t${a}`;
    }
    return R.images.gui.maps.icons.selectableReward.reward.optDeviceType.$dyn(a);
}
const Z = (e, a = 's180x135', s = 'R.images.gui.maps.icons.selectableReward.reward') => `${s}.${a}.${e}`,
    ee = {
        root: 'Category_root_b894c2f0',
        base: 'Category_8aee6f4d',
        glow: 'Category_glow_f351374e',
        glow__show: 'Category_glow__show_e2a077aa',
        title: 'Category_title_63cdb34c',
        base__selected: 'Category_base__selected_b894c2f0',
        imageContainer: 'Category_imageContainer_780d2eff',
        image: 'Category_image_eacb337d',
        base__completed: 'Category_base__completed_b894c2f0',
        base__accepting: 'Category_base__accepting_b894c2f0',
        blink: 'Category_blink_b894c2f0',
        check: 'Category_check_8fbbedfb',
        counter: 'Category_counter_b8d9a952',
        fadeInWithScale: 'Category_fadeInWithScale_b894c2f0',
        slideUp: 'Category_slideUp_b894c2f0',
        scale: 'Category_scale_b894c2f0',
        rotate: 'Category_rotate_b894c2f0',
        windowIn: 'Category_windowIn_b894c2f0',
        fadeOut: 'Category_fadeOut_b894c2f0',
        fadeIn: 'Category_fadeIn_b894c2f0',
    },
    ae = R.strings.selectable_reward.tabs,
    se = t(({ index: e, className: a, classNames: s }) => {
        const {
                breakpoint: { weight: t },
            } = u(),
            { model: i, controls: c } = q(),
            l = i.animationState.get(),
            r = i.computes.tabByIndex(e),
            d = r.count === r.limit,
            b = i.root.get().selectedTab === r.type,
            w = t >= m.medium.weight ? _.Big : _.Small,
            h = V(r.type);
        return o.jsxs('div', {
            className: n(ee.base, d && ee.base__completed, b ? ee.base__selected : r.count && ee[`base__${l}`], a),
            onClick: () => {
                (p.sound('bp_click'), c.openTab(r.type));
            },
            onMouseEnter: () => p.sound('bp_highlight'),
            children: [
                o.jsx('div', { className: n(ee.glow, b && ee.glow__show) }),
                o.jsx('div', {
                    className: n(ee.title, null == s ? void 0 : s.title),
                    children: o.jsx(g, {
                        text: Q(r.type, h),
                        binding: { equipmentType: R.strings.selectable_reward.tabs.items.$dyn(h) },
                    }),
                }),
                o.jsx(f, {
                    args: { type: r.type },
                    children: o.jsxs('div', {
                        className: ee.imageContainer,
                        children: [
                            o.jsx('div', {
                                className: ee.image,
                                style: { backgroundImage: `url(${K(r.type, w, h)})` },
                            }),
                            o.jsx('div', { className: ee.check }),
                        ],
                    }),
                }),
                o.jsx('div', {
                    className: ee.counter,
                    children: o.jsx(g, { text: ae.counter(), binding: { count: r.count, limit: r.limit } }),
                }),
            ],
        });
    }),
    te = 'state_normal',
    oe = 'state_limited',
    ne = {
        root: 'SelectButton_root_41cc3cb2',
        base: 'SelectButton_df01c813',
        base__plus: 'SelectButton_base__plus_9f156c53',
        base__disabled: 'SelectButton_base__disabled_4a6c3694',
        base__minus: 'SelectButton_base__minus_87281dba',
        fadeInWithScale: 'SelectButton_fadeInWithScale_41cc3cb2',
        slideUp: 'SelectButton_slideUp_41cc3cb2',
        blink: 'SelectButton_blink_41cc3cb2',
        scale: 'SelectButton_scale_41cc3cb2',
        rotate: 'SelectButton_rotate_41cc3cb2',
        windowIn: 'SelectButton_windowIn_41cc3cb2',
        fadeOut: 'SelectButton_fadeOut_41cc3cb2',
        fadeIn: 'SelectButton_fadeIn_41cc3cb2',
    };
var ie = ((e) => ((e.Plus = 'plus'), (e.Minus = 'minus'), e))(ie || {});
const ce = ({ type: e = 'plus', isEnabled: a = !0, onClick: s }) =>
        o.jsx('div', {
            className: n(ne.base, ne[`base__${e}`], !a && ne.base__disabled),
            onClick: (e) => {
                (e.stopPropagation(), a && s(e));
            },
        }),
    le = {
        root: 'Reward_root_21f091ec',
        base: 'Reward_7636579f',
        base__selected: 'Reward_base__selected_21f091ec',
        reward: 'Reward_10811de9',
        image: 'Reward_image_694125a2',
        base__stateReceived: 'Reward_base__stateReceived_21f091ec',
        base__stateLimited: 'Reward_base__stateLimited_21f091ec',
        base__accepting: 'Reward_base__accepting_21f091ec',
        blink: 'Reward_blink_21f091ec',
        optDeviceType: 'Reward_optDeviceType_c9161298',
        disabled: 'Reward_disabled_edf266c2',
        packSize: 'Reward_packSize_ee7d72a3',
        label: 'Reward_label_34d5a270',
        storage: 'Reward_storage_6e7b3cd4',
        storage__hidden: 'Reward_storage__hidden_4483c3c4',
        storageIcon: 'Reward_storageIcon_ec84a5d2',
        countText: 'Reward_countText_8b6b8fb6',
        select: 'Reward_select_98cf6062',
        state: 'Reward_state_9a2d661',
        stateText: 'Reward_stateText_c3350c01',
        stateIcon: 'Reward_stateIcon_fbb28606',
        glow: 'Reward_glow_7a74b3a1',
        base__stateNormal: 'Reward_base__stateNormal_21f091ec',
        fadeInWithScale: 'Reward_fadeInWithScale_21f091ec',
        slideUp: 'Reward_slideUp_21f091ec',
        scale: 'Reward_scale_21f091ec',
        rotate: 'Reward_rotate_21f091ec',
        windowIn: 'Reward_windowIn_21f091ec',
        fadeOut: 'Reward_fadeOut_21f091ec',
        fadeIn: 'Reward_fadeIn_21f091ec',
    },
    re = R.strings.selectable_reward.reward,
    de = t(({ index: e }) => {
        const { model: a, controls: s } = q(),
            t = a.animationState.get(),
            i = a.computes.rewardByIndex(e),
            { type: c, count: l, state: r, storageCount: d, packSize: _ } = i,
            { addReward: b, reduceReward: u } = s,
            m = l > 0 && 'state_received' !== r,
            g = t === P.Accepting && m,
            x = V(c);
        return o.jsxs('div', {
            className: n(le.base, m && le.base__selected, g && le.base__accepting, le[`base__${O(r)}`]),
            onClick: () => {
                r === te ? (p.sound(R.sounds.bp_click()), b(c)) : r === oe && p.sound('bp_click_limit');
            },
            onMouseEnter: () => p.sound('bp_highlight'),
            children: [
                o.jsxs('div', {
                    className: n(le.storage, d <= 0 && le.storage__hidden),
                    children: [o.jsx('div', { className: le.storageIcon }), d],
                }),
                o.jsx(f, {
                    args: { type: c },
                    children: o.jsxs('div', {
                        className: le.reward,
                        children: [
                            o.jsx('div', { className: le.image, style: { backgroundImage: `url(${Z(c)})` } }),
                            x !== H.None &&
                                o.jsx('div', {
                                    className: le.optDeviceType,
                                    style: { backgroundImage: `url(${Y(c, x)})` },
                                }),
                            !m &&
                                r !== te &&
                                o.jsx('div', { className: le.disabled, style: { maskImage: `url(${Z(c)})` } }),
                            _ > 1 &&
                                o.jsx('div', {
                                    className: le.packSize,
                                    children: w(re.packSizeCount(), { packSize: _ }),
                                }),
                        ],
                    }),
                }),
                o.jsx('div', { className: le.label, children: X(c) }),
                m || r === te
                    ? o.jsxs(o.Fragment, {
                          children: [
                              o.jsx('span', { className: le.countText, children: l }),
                              o.jsxs('div', {
                                  className: le.select,
                                  children: [
                                      o.jsx(ce, {
                                          type: ie.Minus,
                                          isEnabled: m,
                                          onClick: () => {
                                              (p.sound(R.sounds.bp_click_minus()), u(c));
                                          },
                                      }),
                                      o.jsx(ce, {
                                          type: ie.Plus,
                                          isEnabled: r === te,
                                          onClick: () => {
                                              r === te && (p.sound(R.sounds.bp_click_plus()), b(c));
                                          },
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : o.jsx(h, {
                          ...(r === oe && 0 === l
                              ? { header: re.tooltip.state_limited.header(), body: re.tooltip.state_limited.body() }
                              : { isEnabled: !1 }),
                          children: o.jsxs('div', {
                              className: le.state,
                              children: [
                                  o.jsx('div', { className: le.stateText, children: re.$dyn(r) }),
                                  o.jsx('div', { className: le.stateIcon }),
                              ],
                          }),
                      }),
                o.jsx('div', { className: le.glow }),
            ],
        });
    }),
    _e = {
        root: 'Lip_root_0',
        base: 'Lip_af48ee45',
        base__top: 'Lip_base__top_203e2950',
        base__bottom: 'Lip_base__bottom_99bef7be',
        base__show: 'Lip_base__show_db4aab6e',
        fadeInWithScale: 'Lip_fadeInWithScale_0',
        slideUp: 'Lip_slideUp_0',
        blink: 'Lip_blink_0',
        scale: 'Lip_scale_0',
        rotate: 'Lip_rotate_0',
        windowIn: 'Lip_windowIn_0',
        fadeOut: 'Lip_fadeOut_0',
        fadeIn: 'Lip_fadeIn_0',
    };
var be = ((e) => ((e.Top = 'top'), (e.Bottom = 'bottom'), e))(be || {});
const ue = ({ position: e, visible: a }) =>
        o.jsx('div', { className: n(_e.base, _e[`base__${e}`], a && _e.base__show) }),
    me = 'ContentGrid_f0aa30fb',
    pe = 'ContentGrid_scrollArea_bda11c4c',
    ge = 'ContentGrid_scrollAreaInner_2bc44c68',
    fe = 'ContentGrid_reward_362d03dd',
    we = t(({ className: e }) => {
        const { model: a } = q(),
            { selectedTab: s } = a.root.get(),
            t = a.rewards.get(),
            c = x(),
            [l, r] = i.useState('default'),
            d = v(() => {
                const [e, a] = c.getBounds(),
                    s = c.animationScroll.scrollPosition.goal,
                    t = c.getContainerSize(),
                    o = c.getWrapperSize();
                if (t && o)
                    if (t !== o)
                        switch (s) {
                            case e:
                                r('start');
                                break;
                            case a:
                                r('end');
                                break;
                            default:
                                r('default');
                        }
                    else r('hidden');
            });
        return (
            i.useEffect(
                () => (
                    c.events.on('change', d),
                    c.events.on('recalculateContent', d),
                    c.events.on('resizeHandled', d),
                    () => {
                        (c.events.off('change', d),
                            c.events.off('recalculateContent', d),
                            c.events.off('resizeHandled', d));
                    }
                ),
                [c.events, d],
            ),
            i.useEffect(
                () =>
                    C(() => {
                        c.applyScroll(0);
                    }),
                [c, s],
            ),
            o.jsxs('div', {
                className: n(me, e),
                children: [
                    o.jsx(
                        j.Vertical.Area.Default,
                        {
                            api: c,
                            className: pe,
                            children: o.jsx('div', {
                                className: ge,
                                children: y(t.length, (e) =>
                                    o.jsx('div', { className: fe, children: o.jsx(de, { index: e }) }, e),
                                ),
                            }),
                        },
                        'area',
                    ),
                    'hidden' !== l &&
                        o.jsxs(o.Fragment, {
                            children: [
                                o.jsx(ue, { position: be.Top, visible: 'start' !== l }),
                                o.jsx(ue, { position: be.Bottom, visible: 'end' !== l }),
                            ],
                        }),
                ],
            })
        );
    }),
    he = 'Footer_775b7239',
    xe = 'Footer_description_877c593c',
    ve = 'Footer_selectRewards_444fd52e',
    Ce = 'Footer_rewardsSelected_6df5a2d3',
    je = 'Footer_rewardsSelectedCount_e868420',
    ye = 'Footer_rewardsSelectedIcon_68be31c8',
    Re = 'Footer_buttons_877c593c',
    Ne = 'Footer_cButton_8406526',
    ke = t(({ buttonsSize: e, classNames: a }) => {
        const { model: s, controls: t } = q(),
            { totalRewardCount: i } = s.root.get(),
            c = i > 0,
            {
                breakpoint: { weight: l },
            } = u(),
            r = e ?? ((e) => (e > m.small.weight ? N.medium : N.small))(l),
            d = n(Ne, null == a ? void 0 : a.button),
            _ = k(),
            b = s.computes.rewardsToClaimTotal();
        return o.jsxs('div', {
            className: he,
            children: [
                o.jsx('div', {
                    className: xe,
                    children: c
                        ? o.jsxs('div', {
                              className: Ce,
                              children: [
                                  R.strings.selectable_reward.footer.rewardsSelected(),
                                  o.jsx('span', { className: je, children: i }),
                                  o.jsx(S, {
                                      contentId: R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                      children: o.jsx('div', { className: ye }),
                                  }),
                              ],
                          })
                        : o.jsx('div', {
                              className: ve,
                              children:
                                  1 === s.tabs.get().length
                                      ? R.strings.selectable_reward.footer.singleCategory.selectRewards(b)
                                      : R.strings.selectable_reward.footer.multipleCategories.selectRewards(b),
                          }),
                }),
                o.jsxs('div', {
                    className: Re,
                    children: [
                        o.jsx(I, {
                            size: r,
                            type: T.primary,
                            disabled: !c,
                            mixClass: d,
                            onClick: () => {
                                (t.setAnimationState(P.Accepting), _.run(t.submit, 600));
                            },
                            children: R.strings.selectable_reward.footer.okBtn.label(),
                        }),
                        o.jsx(I, {
                            size: r,
                            type: T.secondary,
                            mixClass: d,
                            onClick: t.close,
                            children: R.strings.selectable_reward.footer.closeBtn.label(),
                        }),
                    ],
                }),
            ],
        });
    }),
    Se = {
        root: 'Content_root_da09528a',
        base: 'Content_795c83a5',
        base__accepting: 'Content_base__accepting_cb7209e5',
        heading: 'Content_heading_8e4bb5ba',
        slideUp: 'Content_slideUp_da09528a',
        title: 'Content_title_88c78e9',
        subTitle: 'Content_subTitle_9c09656d',
        wrapper: 'Content_wrapper_568fb48a',
        fadeIn: 'Content_fadeIn_da09528a',
        wrapper__shown: 'Content_wrapper__shown_9936ffdd',
        categories: 'Content_categories_9d26a7f4',
        footer: 'Content_footer_c6e8ba4d',
        base__windowed: 'Content_base__windowed_da09528a',
        fadeInWithScale: 'Content_fadeInWithScale_da09528a',
        blink: 'Content_blink_da09528a',
        scale: 'Content_scale_da09528a',
        rotate: 'Content_rotate_da09528a',
        windowIn: 'Content_windowIn_da09528a',
        fadeOut: 'Content_fadeOut_da09528a',
    },
    Ie = t(({ title: e, subTitle: a, classNames: s, buttonsSize: t }) => {
        const [c, l] = i.useState(!1),
            { model: r } = q(),
            d = r.tabs.get(),
            _ = r.animationState.get();
        return (
            i.useEffect(() => {
                if (!c)
                    return B(() => {
                        l(!0);
                    }, 600);
            }, [c]),
            o.jsxs('div', {
                className: n(Se.base, Se[`base__${_}`]),
                children: [
                    o.jsxs('div', {
                        className: n(Se.heading, null == s ? void 0 : s.heading),
                        children: [
                            o.jsx('div', { className: n(Se.title, null == s ? void 0 : s.title), children: e }),
                            o.jsx('div', { className: n(Se.subTitle, null == s ? void 0 : s.subTitle), children: a }),
                        ],
                    }),
                    o.jsxs('div', {
                        className: n(Se.wrapper, c && Se.wrapper__shown),
                        children: [
                            o.jsx('div', {
                                className: Se.categories,
                                children: y(d.length, (e) =>
                                    o.jsx(
                                        se,
                                        {
                                            index: e,
                                            className: null == s ? void 0 : s.category,
                                            classNames: { title: null == s ? void 0 : s.categoryTitle },
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            o.jsx(we, { className: null == s ? void 0 : s.contentGrid }),
                        ],
                    }),
                    o.jsx('div', {
                        className: n(Se.footer, null == s ? void 0 : s.footer),
                        children: o.jsx(ke, { buttonsSize: t, classNames: null == s ? void 0 : s.footerClassNames }),
                    }),
                ],
            })
        );
    }),
    Te = 'Error_9f7ff239',
    Be = 'Error_image_40f2de94',
    $e = 'Error_title_b43f945',
    ze = 'Error_description_50001f6',
    Ae = 'Error_footer_2ba80f61',
    Le = 'Error_button_1befe7e6',
    Ee = R.strings.selectable_reward.error,
    We = t(() => {
        const { controls: e } = q();
        return o.jsxs('div', {
            className: Te,
            children: [
                o.jsx('div', { className: Be }),
                o.jsx('div', { className: $e, children: Ee.title() }),
                o.jsx('div', { className: ze, children: Ee.description() }),
                o.jsx('div', {
                    className: Ae,
                    children: o.jsx(I, {
                        mixClass: Le,
                        type: T.primary,
                        size: N.medium,
                        onClick: e.close,
                        children: Ee.button(),
                    }),
                }),
            ],
        });
    }),
    Me = 'RewardSelection_496b50e',
    Oe = t(({ title: e, subTitle: a, classNames: s, buttonsSize: t }) => {
        const { model: n } = q(),
            i = n.tabs.get();
        return o.jsx('div', {
            className: Me,
            children:
                i.length > 0 ? o.jsx(Ie, { title: e, subTitle: a, classNames: s, buttonsSize: t }) : o.jsx(We, {}),
        });
    }),
    Ue = ({ title: e, subTitle: a, modelProviderContext: s }) =>
        o.jsx(D, { options: { context: s }, children: o.jsx(Oe, { title: e, subTitle: a }) }),
    [Fe, Pe] = c()(
        ({ observableModel: e }) => ({ ...{ root: e.object() } }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('selectableRewardModel.onCloseClick') }),
    ),
    De = 'App_285de3af',
    qe = 'App_base__hide_3c612cca',
    Ge = 'App_content_54c70e4',
    He = 'App_background_189ce663',
    Ve = 'App_backgroundBlur_b6c090aa',
    Je = 'App_shadow_b56b33f2',
    Ke = 'App_close_f9a2b686',
    Qe = R.strings.battle_pass.rewardChoice,
    Xe = t(() => {
        const { model: e, controls: a } = Pe(),
            { chapterID: s, level: t } = e.root.get(),
            c = Boolean(t),
            [l, r] = i.useState(!1),
            [d, _] = i.useState(!1),
            b = i.useCallback(() => {
                if (($(), d)) return;
                _(!0);
                const e = setTimeout(a.close, 800);
                return () => clearTimeout(e);
            }, [a.close, d]);
        (z(() => b),
            A(b),
            i.useEffect(
                () =>
                    C(() => {
                        r(!0);
                    }),
                [],
            ));
        const u = ((e, a) =>
            a
                ? { backgroundImage: `url(${U(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})` }
                : F())(s, c);
        return o.jsxs('div', {
            className: n(De, d && qe),
            children: [
                o.jsx('div', { className: He, style: u, children: o.jsx('div', { className: Ve }) }),
                o.jsx('div', { className: Je }),
                l &&
                    o.jsxs('div', {
                        className: Ge,
                        children: [
                            o.jsx('div', {
                                className: Ke,
                                children: o.jsx(L, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: b,
                                }),
                            }),
                            o.jsx(Ue, {
                                modelProviderContext: 'model.selectableRewardModel',
                                title: Qe.title(),
                                subTitle: Qe.subTitle(),
                            }),
                        ],
                    }),
            ],
        });
    });
M(new E().add(W).addWithProps(Fe, {}).render(o.jsx(Xe, {})));
