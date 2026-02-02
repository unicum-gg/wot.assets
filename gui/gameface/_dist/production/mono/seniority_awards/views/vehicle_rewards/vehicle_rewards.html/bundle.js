import {
    o as e,
    l as a,
    f as s,
    n as i,
    j as t,
    r as l,
    s as c,
    i as n,
    e as o,
    k as r,
    m as d,
    S as h,
    q as _,
} from '../../../chunks/vendor.js';
import {
    i as m,
    v as p,
    r as f,
    e as v,
    w as b,
    x as u,
    y as g,
    z as V,
    A as x,
    B as S,
    D as w,
    j,
    u as C,
    E,
    G as N,
    H as A,
    K as R,
    o as y,
    L as I,
    M as T,
    N as k,
    O as L,
    P as W,
    k as D,
    Q as O,
    S as B,
    T as F,
    W as H,
    X as M,
    F as U,
    Y as P,
    Z as $,
    l as z,
    n as K,
    d as G,
    _ as X,
    C as q,
    s as J,
    p as Q,
    q as Y,
    J as Z,
    U as ee,
    t as ae,
} from '../../../chunks/lib.js';
import { t as se } from '../../../chunks/sounds.js';
import {
    b as ie,
    F as te,
    c as le,
    d as ce,
    P as ne,
    I as oe,
    f as re,
    u as de,
    l as he,
    S as _e,
    h as me,
    a as pe,
} from '../../../chunks/easings.js';
import { T as fe, A as ve, a as be } from '../../../chunks/category.js';
var ue = ((e) => (
    (e.SELECTION = 'selection'),
    (e.VIEW_REWARD_AFTER_SELECTION = 'viewRewardAfterSelection'),
    (e.VIEW_REWARD = 'viewReward'),
    e
))(ue || {});
const ge = (e) => (e === ue.SELECTION ? ie : te),
    [Ve, xe] = m()(
        ({ observableModel: s }) => {
            const i = {
                root: s.object(),
                vehicles: s.array('vehicles'),
                previousVehicleIndex: e.box(0),
                selectedVehicleIndex: e.box(0),
                selectedVehicleId: e.box(s.array('vehicles').get()[0].value.vehicleId),
            };
            return { ...i, computes: { vehiclesLength: a(() => i.vehicles.get().length) } };
        },
        ({ externalModel: e, model: a }) => ({
            moreRewards: e.createCallbackNoArgs('onMoreRewards'),
            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
            selectVehicleReward: e.createCallback((e) => ({ selectedId: e }), 'onSelectVehicleReward'),
            setPreviousVehicleIndex: s((e) => {
                a.previousVehicleIndex.get() !== e && a.previousVehicleIndex.set(e);
            }),
            setSelectedVehicleIndex: s((e) => {
                a.selectedVehicleIndex.get() !== e &&
                    (a.previousVehicleIndex.set(a.selectedVehicleIndex.get()), a.selectedVehicleIndex.set(e));
            }),
        }),
    );
var Se = ((e) => (
    (e.Selection = 'selection'),
    (e.ViewRewardAfterSelection = 'viewRewardAfterSelection'),
    (e.ViewReward = 'viewReward'),
    e
))(Se || {});
const we = (e) => {
        switch (e) {
            case ue.SELECTION:
                return 'selection';
            case ue.VIEW_REWARD_AFTER_SELECTION:
                return 'viewRewardAfterSelection';
            case ue.VIEW_REWARD:
                return 'viewReward';
        }
    },
    je = 'TOOLTIP_VEHICLE_REWARD',
    Ce = 'VehicleRole_b05c9386',
    Ee = 'VehicleRole_icon_543aab92',
    Ne = 'VehicleRole_label_f7a3770c',
    Ae = ({ role: e, roleKey: a, vehicleCD: s }) => {
        const i = p(a),
            l = f.resolve('strings'),
            c = f.resolve('views'),
            n = v({ value: b.x16x16 }, { extraLarge: { value: b.x24x24 } }),
            o = u({
                contentId: c.read((e) => e.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId')),
                args: { tooltipId: 'vehicleRoles', vehicleCD: s },
            });
        return t.jsxs('div', {
            className: Ce,
            ...o,
            children: [
                t.jsx(g, { classNames: { base: Ee }, roleKey: V(e), size: n.value }),
                t.jsx('div', { className: Ne, children: l.readOrEmpty(`menu.roleExp.roleGroupName.${i}`) }),
            ],
        });
    },
    Re = 'VehicleDescription_283aa4df',
    ye = 'VehicleDescription_role_67f72bc6',
    Ie = 'VehicleDescription_description_e39f2e26',
    Te = ({ vehicleCD: e, role: a, roleKey: s, description: i, onSubmit: l }) => {
        const c = f.resolve('strings'),
            n = v({ value: x.medium }, { medium: { value: x.large } });
        return t.jsxs('div', {
            className: Re,
            children: [
                s && t.jsx('div', { className: ye, children: t.jsx(Ae, { roleKey: s, role: a, vehicleCD: e }) }),
                t.jsx('div', { className: Ie, children: i }),
                t.jsx(S, {
                    size: n.value,
                    onClick: l,
                    theme: w.primary,
                    soundTarget: 'rewards-view:button',
                    children: c.readOrEmpty('seniority_awards.rewardsView.textButton.select'),
                }),
            ],
        });
    },
    ke = {
        root: 'Vehicle_root_c03ad304',
        base: 'Vehicle_b9c2b42d',
        base__selection: 'Vehicle_base__selection_1df9346b',
        container: 'Vehicle_container_ed28223e',
        base__big: 'Vehicle_base__big_c03ad304',
        base__afterSelection: 'Vehicle_base__afterSelection_c03ad304',
        imageContainer: 'Vehicle_imageContainer_52ba8252',
        image: 'Vehicle_image_e5ac6b8e',
        base__submitted: 'Vehicle_base__submitted_c03ad304',
        fadeOut: 'Vehicle_fadeOut_c03ad304',
        shadowContainer: 'Vehicle_shadowContainer_45fbfb0',
        shadow: 'Vehicle_shadow_b3e43bc4',
        content: 'Vehicle_content_9ce7dd14',
        information: 'Vehicle_information_1c29f629',
        name: 'Vehicle_name_773484cf',
        nameWithRole: 'Vehicle_nameWithRole_c8b8f3a7',
        text: 'Vehicle_text_5b1ae1ef',
        flag: 'Vehicle_flag_a062c270',
        effectContainer: 'Vehicle_effectContainer_6ee3eade',
        smokeEffect: 'Vehicle_smokeEffect_77ad5868',
        scaleAndFade: 'Vehicle_scaleAndFade_c03ad304',
        raysAppearance: 'Vehicle_raysAppearance_c03ad304',
        rotate: 'Vehicle_rotate_c03ad304',
        fadeInWithScale: 'Vehicle_fadeInWithScale_c03ad304',
        slideUp: 'Vehicle_slideUp_c03ad304',
        slideDown: 'Vehicle_slideDown_c03ad304',
        slideRibbonUp: 'Vehicle_slideRibbonUp_c03ad304',
        fadeIn: 'Vehicle_fadeIn_c03ad304',
        scale: 'Vehicle_scale_c03ad304',
    },
    Le = ({
        index: e,
        name: a,
        techName: s,
        type: i,
        tier: d,
        isPremium: h,
        nation: _,
        vehicleCD: m,
        roleKey: p,
        role: f,
        description: v,
        onRestAnimation: b,
        size: u = 'medium',
        state: g = Se.ViewReward,
        isEnabledSound: V = !0,
        previousTechName: x = null,
        onSubmitBtnClick: S,
    }) => {
        const [w, I] = l.useState(!1),
            T = j(ie),
            k = g === Se.Selection,
            L = g === Se.ViewRewardAfterSelection,
            W = s !== x,
            D = C(),
            O = c(s, {
                from: L ? { opacity: 0, scale: 0.5 } : { opacity: 0, transform: 'translate(30rem)' },
                enter: L ? { opacity: 1, scale: 1 } : { opacity: 1, transform: 'translateX(0%)' },
                delay: 1e3 * e,
                config: { duration: L ? 700 : 1e3, easing: L ? ce : le },
                onStart: () => {
                    V && D.play('rewardAppear', { target: 'vehicle' });
                },
                onRest: () => {
                    b(e);
                },
            }),
            B = c(s, {
                from: { opacity: 1 },
                enter: { opacity: 0 },
                delay: 500 * e,
                config: { duration: 1e3, easing: le },
            }),
            F = n({
                from: { opacity: 0 },
                to: { opacity: 1 },
                reset: k && W,
                delay: 1e3 * e + (W ? 0 : 500),
                config: { duration: 500, easing: le },
            }),
            H = E({ args: l.useMemo(() => ({ vehicleCD: m, tooltipId: je }), [m]) });
        return t.jsxs('div', {
            className: o(
                ke.base,
                ke[`base__${u}`],
                k && ke.base__selection,
                L && ke.base__afterSelection,
                w && ke.base__submitted,
            ),
            children: [
                L &&
                    t.jsx('div', {
                        className: ke.effectContainer,
                        children: t.jsx('div', { className: ke.smokeEffect }),
                    }),
                t.jsxs('div', {
                    className: ke.container,
                    ...H,
                    children: [
                        W &&
                            B((e) =>
                                t.jsx(r.div, {
                                    className: ke.imageContainer,
                                    style: e,
                                    children:
                                        x &&
                                        t.jsx(N, {
                                            className: ke.image,
                                            path: `seniorityAwards.rewards.vehicles.${x}`,
                                        }),
                                }),
                            ),
                        O((e) =>
                            t.jsx(r.div, {
                                className: ke.imageContainer,
                                style: e,
                                children: t.jsx(N, {
                                    className: ke.image,
                                    path: `seniorityAwards.rewards.vehicles.${s}`,
                                }),
                            }),
                        ),
                    ],
                }),
                t.jsxs(r.div, {
                    style: F,
                    className: ke.information,
                    children: [
                        t.jsx('div', {
                            className: ke.shadowContainer,
                            children: t.jsx('div', { className: ke.shadow }),
                        }),
                        t.jsxs('div', {
                            className: ke.content,
                            children: [
                                t.jsxs(A, {
                                    className: k && p ? ke.name : ke.nameWithRole,
                                    children: [
                                        t.jsx(N, { className: ke.flag, path: `flags.x40x30.${_}` }),
                                        t.jsx(A.Level, { value: d, className: ke.text }),
                                        R(i) && t.jsx(A.Type, { type: i, premium: h }),
                                        t.jsx(A.Name, { className: ke.text, children: a }),
                                    ],
                                }),
                                k &&
                                    t.jsx(Te, {
                                        vehicleCD: m,
                                        role: f,
                                        roleKey: p,
                                        description: v,
                                        onSubmit: () => {
                                            (I(!0),
                                                S &&
                                                    (T({
                                                        action: y.Click,
                                                        item: oe.SelectButton,
                                                        parentScreen: ne.VehicleSelectionView,
                                                    }),
                                                    S()));
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    We = {
        base: 'SelectedVehicleResolver_6c55a431',
        container: 'SelectedVehicleResolver_container_44df0efb',
        item: 'SelectedVehicleResolver_item_d7a9e223',
    },
    De = d(({ onAnimationEnd: e, onSelect: a }) => {
        const { model: s } = xe(),
            i = s.vehicles.get(),
            c = s.computes.vehiclesLength(),
            n = s.selectedVehicleIndex.get() > c - 1 ? 0 : s.selectedVehicleIndex.get(),
            r = i[s.previousVehicleIndex.get() > c - 1 ? 0 : s.previousVehicleIndex.get()].value.techName,
            [d, h] = l.useState('active');
        l.useEffect(() => {
            'end' === d && (null == e || e());
        }, [e, d]);
        return t.jsx('div', {
            className: o(We.base, 'selectionSubmitted' === d && We.base__submitted),
            children: t.jsx('div', {
                className: We.container,
                children: t.jsx('div', {
                    className: We.item,
                    children: t.jsx(Le, {
                        ...i[n].value,
                        index: 0,
                        onRestAnimation: () => {
                            h('end');
                        },
                        size: 'big',
                        isEnabledSound: 'active' === d,
                        state: Se.Selection,
                        previousTechName: r,
                        onSubmitBtnClick: () => {
                            (h('selectionSubmitted'), a && a());
                        },
                    }),
                }),
            }),
        });
    }),
    Oe = {
        root: 'Vehicles_root_7f03fbab',
        base: 'Vehicles_ca1a88d1',
        base__afterSelection: 'Vehicles_base__afterSelection_663382d1',
        container: 'Vehicles_container_505e9522',
        scrollWrapper: 'Vehicles_scrollWrapper_4dbebb39',
        scrollContent: 'Vehicles_scrollContent_1d2eacd2',
        scrollList: 'Vehicles_scrollList_d435e629',
        scrollList__disabled: 'Vehicles_scrollList__disabled_d3f8b9a7',
        scrollLeftButton: 'Vehicles_scrollLeftButton_59391c95',
        scrollRightButton: 'Vehicles_scrollRightButton_9499e50f',
        scrollTrack: 'Vehicles_scrollTrack_a2e8afe6',
        item: 'Vehicles_item_1d2eacd2',
        item__offset: 'Vehicles_item__offset_496597b',
        item__big: 'Vehicles_item__big_cf410e18',
        bar: 'Vehicles_bar_1733848b',
        bar__visible: 'Vehicles_bar__visible_2181b307',
        fadeOut: 'Vehicles_fadeOut_7f03fbab',
        raysAppearance: 'Vehicles_raysAppearance_7f03fbab',
        rotate: 'Vehicles_rotate_7f03fbab',
        fadeInWithScale: 'Vehicles_fadeInWithScale_7f03fbab',
        slideUp: 'Vehicles_slideUp_7f03fbab',
        slideDown: 'Vehicles_slideDown_7f03fbab',
        slideRibbonUp: 'Vehicles_slideRibbonUp_7f03fbab',
        fadeIn: 'Vehicles_fadeIn_7f03fbab',
        scale: 'Vehicles_scale_7f03fbab',
    },
    Be = d(({ isStoppedScrolling: e, onScrollChange: a, onAnimationEnd: s }) => {
        const { model: i } = xe(),
            c = i.root.get().viewState === ue.VIEW_REWARD_AFTER_SELECTION,
            { api: n } = I(),
            r = i.vehicles.get(),
            d = l.useRef([]),
            _ = l.useRef(null),
            [m, p] = l.useState('active'),
            f = 'active' === m;
        l.useEffect(() => {
            e && p('activeWithoutScroll');
        }, [e]);
        const v = l.useCallback(() => {
                const e = n.animationScroll.scrollPosition.get();
                a(e);
            }, [a, n.animationScroll.scrollPosition]),
            b = 'end' === m,
            u = l.useCallback(
                (e) => {
                    b && n.handleMouseWheel(e);
                },
                [n, b],
            );
        l.useEffect(
            () => (
                n.events.on('change', v),
                window.addEventListener('resize', v),
                window.addEventListener('wheel', u),
                () => {
                    (n.events.off('change', v),
                        window.removeEventListener('resize', v),
                        window.removeEventListener('wheel', u));
                }
            ),
            [n.events, v, u],
        );
        const g = l.useCallback(
                (e, a) => {
                    const s = _.current;
                    (s ? Math.round(s.getBoundingClientRect().right) : 0) < e &&
                        (p('pause'), n.applyScroll(n.animationScroll.scrollPosition.goal + a), p('active'));
                },
                [n],
            ),
            V = l.useCallback(
                (e) => {
                    if (e + 1 === r.length) p('end');
                    else if (f) {
                        const a = d.current[e],
                            s = d.current[e + 1];
                        g(Math.round(s.getBoundingClientRect().right), a.offsetWidth);
                    }
                },
                [f, g, r.length],
            );
        return (
            l.useEffect(() => {
                b && (null == s || s());
            }, [s, b]),
            t.jsx('div', {
                className: o(Oe.base, c && Oe.base__afterSelection),
                children: t.jsx('div', {
                    className: Oe.container,
                    ref: _,
                    children: c
                        ? t.jsx(Le, {
                              ...r[0].value,
                              index: 0,
                              onRestAnimation: V,
                              size: 'big',
                              isEnabledSound: f,
                              state: Se.ViewRewardAfterSelection,
                          })
                        : t.jsxs('div', {
                              className: o(Oe.scrollList, 'end' !== m && Oe.scrollList__disabled),
                              children: [
                                  t.jsx(T, {
                                      classNames: { wrapper: Oe.scrollWrapper, content: Oe.scrollContent },
                                      children: t.jsx(h, {
                                          pause: 'pause' === m,
                                          children: k(r, (e, a) => {
                                              const s = 1 === r.length ? 'big' : 'medium';
                                              return t.jsx(
                                                  'div',
                                                  {
                                                      ref: (e) => (d.current[a] = e),
                                                      className: o(Oe.item, Oe.item__offset, Oe[`item__${s}`]),
                                                      children: t.jsx(Le, {
                                                          ...e,
                                                          index: a,
                                                          onRestAnimation: V,
                                                          size: s,
                                                          isEnabledSound: f,
                                                      }),
                                                  },
                                                  e.vehicleCD,
                                              );
                                          }),
                                      }),
                                  }),
                                  t.jsx('div', {
                                      className: o(Oe.bar, 'end' === m && Oe.bar__visible),
                                      children: t.jsx(L, {}),
                                  }),
                              ],
                          }),
                }),
            })
        );
    }),
    Fe = ({ isStoppedScrolling: e, onScrollChange: a, onAnimationEnd: s }) =>
        t.jsx(W, { children: t.jsx(Be, { isStoppedScrolling: e, onScrollChange: a, onAnimationEnd: s }) }),
    He = 'Content_5701de48',
    Me = 'Content_vehicles_4f430f99',
    Ue = ({
        machineState: e,
        isFirstEnter: a,
        isStoppedScrolling: s,
        onScrollChange: i,
        onAnimationEnd: c,
        onSelectVehicle: n,
    }) => {
        const { model: o } = xe(),
            r = C();
        return (
            l.useLayoutEffect(
                () => (
                    a && r.play('vehicleRewardsViewAppear', { target: 'first-enter' }),
                    r.play('vehicleRewardsViewAppear', { target: 'enter' }),
                    () => {
                        r.play('vehicleRewardsViewAppear', { target: 'exit' });
                    }
                ),
                [a, e, r],
            ),
            l.useEffect(() => {
                a || c();
            }, [a, c]),
            t.jsx('div', {
                className: He,
                children: t.jsx('div', {
                    className: Me,
                    children:
                        o.root.get().viewState === ue.SELECTION
                            ? t.jsx(De, { onAnimationEnd: c, onSelect: n })
                            : t.jsx(Fe, { isStoppedScrolling: s, onScrollChange: i, onAnimationEnd: c }),
                }),
            })
        );
    },
    Pe = {
        base: 'VehicleSlot_f5381b3',
        flag: 'VehicleSlot_flag_976679d',
        vehicleImage: 'VehicleSlot_vehicleImage_58db275f',
        information: 'VehicleSlot_information_12c38e80',
        row: 'VehicleSlot_row_11c93287',
        vehicleType: 'VehicleSlot_vehicleType_dc959042',
        vehicleText: 'VehicleSlot_vehicleText_a59271f6',
    },
    $e = ({ name: e, techName: a, type: s, tier: i, isPremium: c, nation: n, vehicleCD: r, selected: d = !1 }) => {
        const [h, _] = D(ie),
            m = re({
                args: l.useMemo(() => ({ vehicleCD: r, tooltipId: je }), [r]),
                onShowTooltip: () => h(y.Viewed),
                onHideTooltip: () =>
                    _({
                        action: y.Viewed,
                        item: oe.VehicleTooltip,
                        parentScreen: ne.VehicleSelectionView,
                        info: `vehicle_${r}`,
                        timeLimit: fe,
                    }),
            });
        return t.jsxs('div', {
            className: o(Pe.base, d ? Pe.base__selected : Pe.base__unselected),
            ...m,
            children: [
                t.jsx(N, {
                    className: Pe.flag,
                    path: `hangar.carousel.cards.flags.x400x300.${n}`,
                    position: 'top left',
                }),
                t.jsx(N, { className: Pe.vehicleImage, path: `vehicle.c_420x307.${a.toLowerCase()}` }),
                t.jsxs(A, {
                    className: Pe.information,
                    children: [
                        t.jsxs('div', {
                            className: Pe.row,
                            children: [
                                t.jsx(A.Level, { value: i, className: Pe.vehicleText }),
                                R(s) &&
                                    t.jsx(A.Type, { type: s, size: O.x24x24, premium: c, className: Pe.vehicleType }),
                            ],
                        }),
                        t.jsx(A.Name, { className: Pe.vehicleText, children: e }),
                    ],
                }),
            ],
        });
    },
    ze = 'Cards_item_1511ae6d',
    Ke = 'Cards_card_ae2a9340',
    Ge = 'Cards_statusWrapper_50cde2dc',
    Xe = d(() => {
        const { model: e, controls: a } = xe(),
            s = e.vehicles.get(),
            i = e.selectedVehicleIndex.get() > e.computes.vehiclesLength() - 1 ? 0 : e.selectedVehicleIndex.get(),
            c = B();
        l.useEffect(() => F(c.recalculate), [null == s ? void 0 : s.length, c.recalculate]);
        const n = j(ie);
        return t.jsx(t.Fragment, {
            children: k(s, (e, s) =>
                t.jsx(
                    'div',
                    {
                        className: ze,
                        children: t.jsx(H, {
                            className: Ke,
                            classNames: { status: { wrapper: Ge } },
                            status: M.done,
                            soundTarget: 'vehicle-selection:card',
                            selected: s === i,
                            disableMouse: s === i,
                            onClick: () =>
                                ((e, s) => {
                                    e !== i &&
                                        (n({
                                            action: y.Click,
                                            item: oe.VehicleTabButton,
                                            parentScreen: ne.VehicleSelectionView,
                                            info: `vehicle_${s}`,
                                        }),
                                        a.setSelectedVehicleIndex(e));
                                })(s, e.vehicleCD),
                            children: t.jsx($e, { ...e, selected: s === i }),
                        }),
                    },
                    e.vehicleCD,
                ),
            ),
        });
    }),
    qe = 'VehiclesSelection_d3f32fd7',
    Je = 'VehiclesSelection_heading_f0acb12a',
    Qe = 'VehiclesSelection_count_3b1cc792',
    Ye = 'VehiclesSelection_cardsWrapper_f3be9294',
    Ze = () => {
        const e = f.resolve('strings');
        return t.jsxs('div', {
            className: qe,
            children: [
                t.jsx(U, {
                    className: Je,
                    text: e.readOrEmpty('seniority_awards.rewardsView.selection.available'),
                    params: { count: t.jsx('div', { className: Qe, children: 1 }) },
                    upgradeLegacy: !0,
                }),
                t.jsx(P, { className: Ye, children: t.jsx(Xe, {}) }),
            ],
        });
    },
    ea = {
        root: 'App_root_0',
        base: 'App_154e87fb',
        bgWrapper: 'App_bgWrapper_24f22e58',
        bgWrapper__imageLoaded: 'App_bgWrapper__imageLoaded_aa356d09',
        background: 'App_background_ddb475ac',
        background__indent: 'App_background__indent_6487c184',
        shadow: 'App_shadow_b11b0a84',
        gradient: 'App_gradient_4974fbd9',
        closeButton: 'App_closeButton_9412a735',
        fadeIn: 'App_fadeIn_0',
        header: 'App_header_52929dd2',
        slideDown: 'App_slideDown_0',
        footer: 'App_footer_94820e0d',
        slideUp: 'App_slideUp_0',
        vehiclesSelection: 'App_vehiclesSelection_fac09c2d',
        vehiclesSelection__hidden: 'App_vehiclesSelection__hidden_6217b2e2',
        fadeOut: 'App_fadeOut_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideRibbonUp: 'App_slideRibbonUp_0',
        scale: 'App_scale_0',
    },
    aa = (e) => (e === ue.VIEW_REWARD ? ne.RewardsScreen : ne.VehicleSelectionView),
    sa = d(() => {
        const { model: e, controls: a } = xe(),
            { category: s, maxCategory: c, fromEntryPoint: n, viewState: r } = e.root.get(),
            d = e.vehicles.get(),
            h = C(),
            m = () => h.play('vehicleRewardsViewAppear', { target: 'exit' }),
            p = j(ge(r)),
            [f] = $(ge(r));
        f({ action: y.Displayed, item: ne.VehicleSelectionView });
        const [v, b] = D(ge(r));
        (v(y.KeyDown), v(y.Click));
        const [u, g] = l.useState(0),
            [V, x] = l.useState('showHeader'),
            [S] = _(() =>
                ((e) =>
                    i({
                        id: 'seniority-awards',
                        initial: we(e),
                        context: { isFirstEnter: !0 },
                        states: {
                            viewReward: { type: 'final' },
                            selection: {
                                on: {
                                    selected: { target: 'viewRewardAfterSelection', internal: !0 },
                                    viewVehicles: { target: 'viewReward', internal: !0 },
                                },
                            },
                            viewRewardAfterSelection: { type: 'final' },
                        },
                    }))(r),
            ),
            w = (e = !1) => {
                (b({ action: e ? y.KeyDown : y.Click, item: oe.CloseButton, parentScreen: aa(r) }), m(), J.close());
            },
            E = () => {
                w(true);
            };
        (z(() => {
            w(true);
        }),
            K(Q.ENTER, E),
            K(Q.SPACE, E));
        const N = l.useCallback((e) => g(e), []),
            A = l.useCallback(() => {
                x('showFooter');
            }, []);
        l.useEffect(() => {
            if ('showHeader' === V) return G(() => x('showContent'), 1e3);
        }, [V]);
        return t.jsxs('div', {
            className: o(ea.base, ea[`base__${S.value}`]),
            children: [
                t.jsx('div', {
                    className: o(ea.bgWrapper, de(be, ve) === he.success && ea.bgWrapper__imageLoaded),
                    children: t.jsx('div', {
                        className: o(ea.background, d.length >= 5 && ea.background__indent),
                        style: { transform: `translateX(-${X(u)}rem)` },
                    }),
                }),
                t.jsx('div', { className: ea.shadow }),
                t.jsx('div', { className: ea.gradient }),
                t.jsx('div', { className: ea.closeButton, children: t.jsx(q, { onClose: () => w() }) }),
                t.jsx('div', {
                    className: ea.header,
                    children: t.jsx(_e, {
                        category: s,
                        maxCategory: c,
                        type: r === ue.VIEW_REWARD_AFTER_SELECTION ? me.secondary : me.primary,
                        onShowTooltip: () => {
                            v(y.Viewed);
                        },
                        onHideTooltip: () => {
                            b({
                                action: y.Viewed,
                                item: oe.SeniorityAwardsTooltip,
                                parentScreen: aa(r),
                                timeLimit: fe,
                            });
                        },
                    }),
                }),
                'showHeader' !== V &&
                    t.jsx(Ue, {
                        machineState: S.value,
                        isFirstEnter: S.context.isFirstEnter,
                        isStoppedScrolling: !1,
                        onScrollChange: N,
                        onAnimationEnd: A,
                        onSelectVehicle: () => {
                            (x('hideFooter'),
                                G(() => {
                                    const s = e.computes.vehiclesLength() - 1,
                                        i = e.selectedVehicleIndex.get() > s ? s : e.selectedVehicleIndex.get();
                                    a.selectVehicleReward(d[i].value.vehicleId);
                                }, 500));
                        },
                    }),
                ((r !== ue.SELECTION && 'showFooter' === V) || 'finished' === V) &&
                    t.jsx('div', {
                        className: ea.footer,
                        children: t.jsx(pe, {
                            hasMoreRewards: !n,
                            isGotoHangarAvailable: n,
                            isShopAvailable: !1,
                            onShowMoreClick: () => {
                                (p({ action: y.Click, item: oe.ShowMoreButton, parentScreen: aa(r) }),
                                    m(),
                                    a.moreRewards());
                            },
                            onAcceptClick: () => {
                                (p({ action: y.Click, item: oe.ConfirmButton, parentScreen: aa(r) }),
                                    m(),
                                    a.moreRewards());
                            },
                            onGotoHangarBtnClick: () => {
                                (p({ action: y.Click, item: oe.GoToHangarButton, parentScreen: aa(r) }),
                                    m(),
                                    a.goToHangar());
                            },
                        }),
                    }),
                r === ue.SELECTION &&
                    t.jsx('div', {
                        className: o(ea.vehiclesSelection, 'hideFooter' === V && ea.vehiclesSelection__hidden),
                        children: t.jsx(Ze, {}),
                    }),
            ],
        });
    }),
    ia = Y(se);
ae(new Z().add(Ve).addWithProps(ee, { soundsOverrides: ia }).render(t.jsx(sa, {})));
