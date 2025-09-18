import {
    n as e,
    p as s,
    r as a,
    q as t,
    j as r,
    R as o,
    f as n,
    s as i,
    t as l,
    v as d,
    C as _,
} from '../../../chunks/vendor.js';
import {
    a as c,
    G as p,
    e as m,
    H as u,
    I as g,
    p as h,
    T as b,
    g as x,
    J as v,
    K as f,
    P as C,
    d as j,
    S as y,
    L as N,
    m as w,
    N as A,
    O as P,
    Q as I,
    R as k,
    b as Q,
    V as E,
    W as M,
    X as T,
    Y as B,
    u as S,
    y as D,
    i as V,
    Z as W,
    _ as O,
    t as H,
    $ as L,
    a0 as $,
    h as G,
    j as F,
    a1 as q,
    a2 as z,
    a3 as X,
    a4 as K,
    a5 as U,
    F as Y,
    a6 as J,
    a7 as Z,
    a8 as ee,
    a9 as se,
    U as ae,
    aa as te,
    z as re,
    A as oe,
    E as ne,
} from '../../../chunks/lib.js';
import { f as ie, a as le, A as de } from '../../../chunks/string-utils.js';
import { T as _e } from '../../../chunks/hangar_consumables_panel_view_model.js';
/* empty css                              */ const [ce, pe] = c()(
    ({ observableModel: s }) => {
        const a = { ...s.primitives(['isDisableAll']), root: s.object(), tanks: s.array('tanks') },
            t = e(() => p(a.tanks.get(), (e) => !e.isHunter)),
            r = e(() => p(a.tanks.get(), (e) => e.isHunter));
        return { ...a, computes: { getBossList: t, getHunterList: r } };
    },
    ({ externalModel: e }) => ({ onClick: e.createCallback((e) => ({ id: e }), 'onClick') }),
);
var me = ((e) => ((e.Hunter = 'Hunter'), (e.CommonBoss = 'CommonBoss'), (e.SpecialBoss = 'specialBoss'), e))(me || {});
const ue = 'TankCard_wrapper_420ab964',
    ge = 'TankCard_wrapper__large_201c940f',
    he = 'TankCard_wrapper__disabled_4ad19ae3',
    be = 'TankCard_labelWrapper_64ac495a',
    xe = 'TankCard_label_4d8dc3b0',
    ve = 'TankCard_labelIcon_1e919e50',
    fe = 'TankCard_labelIcon__hunter_6cab5b6d',
    Ce = 'TankCard_labelIcon__boss_697361dc',
    je = 'TankCard_image_818bc943',
    ye = 'TankCard_effect_681dfee',
    Ne = 'TankCard_effect__special_ae2467b9',
    we = 'TankCard_wrapper__selected_d6dc4063',
    Ae = 'TankCard_gradient_70c376f2',
    Pe = 'TankCard_quantityWrapper_f8b1d97e',
    Ie = 'TankCard_quantity_76b47111',
    ke = 'TankCard_quantityIcon_ad32a0ec',
    Qe = 'TankCard_messageWrapper_8492169a',
    Ee = 'TankCard_message_be5df5ab',
    Me = 'TankCard_message__ticket_b4e46747',
    Te = 'TankCard_icon_700e3eaf',
    Re = 'TankCard_icon__inBattle_4afa21ed',
    Be = 'TankCard_icon__inPlatoon_d00f9d50',
    Se = 'TankCard_icon__unsuitable_2403c57f',
    De = 'TankCard_shadow_65521859',
    Ve = 'TankCard_shadow__inBattle_ae722d28',
    We = 'TankCard_shadow__inPlatoon_d6dc4063',
    Oe = 'TankCard_shadow__unsuitable_e0f00844',
    He = 'TankCard_border_d5f8a2f9',
    Le = s(
        ({
            title: e,
            id: s,
            quantity: o = 0,
            selected: n = !1,
            isHunter: i = !1,
            isSpecial: l = !1,
            inPlatoon: d = !1,
            inBattle: _ = !1,
            unsuitable: c = !1,
            icon: p,
            iconSmall: x,
        }) => {
            const { model: v, controls: f } = pe(),
                { breakpoint: C } = m(),
                j = C.name == u.large,
                y = v.isDisableAll.get(),
                N = g.resolve('strings'),
                w = a.useMemo(
                    () =>
                        (({ inPlatoon: e, inBattle: s, unsuitable: a }) =>
                            a ? 'unsuitable' : e ? 'inPlatoon' : s ? 'inBattle' : void 0)({
                            inPlatoon: d,
                            inBattle: _,
                            unsuitable: c,
                        }),
                    [d, _, c],
                ),
                A = ((e, s) => (e ? 'Hunter' : s ? 'specialBoss' : 'CommonBoss'))(i, l),
                P = !w && A === me.CommonBoss && 0 === o,
                I = t(ue, j && ge, n && we, y && he),
                k = t(ve, i ? fe : Ce),
                Q = j ? p : x,
                E = a.useMemo(() => ({ backgroundImage: `url(${Q})` }), [Q]),
                M = t(Ee, P && Me),
                T = t(ye, A === me.SpecialBoss && Ne),
                B = t(De, 'inBattle' === w && Ve, ('inPlatoon' === w || y) && We, 'unsuitable' === w && Oe),
                S = t(Te, 'inBattle' === w && Re, 'inPlatoon' === w && Be, 'unsuitable' === w && Se),
                D = a.useCallback(() => {
                    h.sound(R.sounds.carousel());
                }, []),
                V = a.useCallback(
                    (e) => {
                        (n ||
                            (e
                                ? h.sound('ev_white_tiger_hangar_select_tank_hunters')
                                : h.sound('ev_white_tiger_hangar_select_tank_krieger')),
                            f.onClick(s));
                    },
                    [s, f, n],
                ),
                W = a.useMemo(() => ({ id: s }), [s]),
                O = ie(N.readOrEmpty('white_tiger_lobby.award.value'), { count: o }),
                H = ie(N.readOrEmpty('white_tiger_lobby.award.value'), { count: '1000+' });
            return r.jsxs('div', {
                className: I,
                onMouseEnter: D,
                onClick: () => V(i),
                children: [
                    r.jsx(b, {
                        targetId: R.aliases.white_tiger.shared.Carousel('resId'),
                        contentId: R.views.white_tiger.mono.lobby.tooltips.carousel_vehicle_tooltip('resId'),
                        args: W,
                        children: r.jsx('div', { className: He }),
                    }),
                    r.jsx('div', { className: Ae }),
                    r.jsx('div', { className: T }),
                    r.jsx('div', { className: B }),
                    r.jsx('div', { className: je, style: E }),
                    r.jsxs('div', {
                        className: be,
                        children: [r.jsx('div', { className: k }), r.jsx('div', { className: xe, children: e })],
                    }),
                    r.jsxs('div', {
                        className: Qe,
                        children: [
                            r.jsx('div', { className: S }),
                            'inBattle' === w &&
                                r.jsx('div', {
                                    className: M,
                                    children: N.readOrEmpty('white_tiger_lobby.carousel.inBattleText'),
                                }),
                            'inPlatoon' === w &&
                                r.jsx('div', {
                                    className: M,
                                    children: N.readOrEmpty('white_tiger_lobby.carousel.inPlatoonText'),
                                }),
                            'unsuitable' === w &&
                                r.jsx('div', {
                                    className: M,
                                    children: N.readOrEmpty('white_tiger_lobby.carousel.unsuitableText'),
                                }),
                            P &&
                                r.jsx('div', {
                                    className: M,
                                    children: N.readOrEmpty('white_tiger_lobby.carousel.ticketNeededText'),
                                }),
                        ],
                    }),
                    A === me.CommonBoss &&
                        r.jsx(b, {
                            targetId: R.aliases.white_tiger.shared.Carousel('resId'),
                            contentId: R.views.white_tiger.mono.lobby.tooltips.ticket_tooltip('resId'),
                            children: r.jsxs('div', {
                                className: Pe,
                                children: [
                                    r.jsx('div', { className: ke }),
                                    r.jsx('div', { className: Ie, children: o > 0 ? (o > 1e3 ? H : O) : '0' }),
                                ],
                            }),
                        }),
                ],
            });
        },
    ),
    $e = a.memo(Le),
    Ge = 'CarouselApp_64028480',
    Fe = 'CarouselApp_content_8d03980e',
    qe = 'CarouselApp_content__small_4d56afb2',
    ze = 'CarouselApp_content__medium_4e76f9ae',
    Xe = 'CarouselApp_content__large_4d56afb2',
    Ke = 'CarouselApp_content__extraLarge_250ba53',
    Ue = 'CarouselApp_wrapper_ee4ae30',
    Ye = 'CarouselApp_carouselBodyWrapper_15294632',
    Je = 'CarouselApp_carouselBody_1b99e374',
    Ze = 'CarouselApp_carouselBody__moveOnce_5ec12f50',
    es = 'CarouselApp_carouselBody__moveTwice_1902cfef',
    ss = 'CarouselApp_arrow_1c6fad97',
    as = 'CarouselApp_arrow__disabled_a5c43be8',
    ts = 'CarouselApp_arrow__left_ac9a773c',
    rs = 'CarouselApp_arrow__right_c7929c83',
    os = 'CarouselApp_arrowBorder_c5535644',
    ns = 'CarouselApp_divider_bac6f7ff',
    is = 'CarouselApp_dividerContent_3259328',
    ls = 'CarouselApp_cardWrapper_23e3a170',
    ds = 'CarouselApp_cardWrapper__large_dab27ca',
    _s = s(({ className: e }) => {
        const { model: s } = pe(),
            { breakpoint: o } = m(),
            n = o.name == u.extraSmall,
            i = o.name == u.small,
            l = o.name == u.medium,
            d = o.name == u.large,
            _ = o.name == u.extraLarge,
            c = t(Fe, i && qe, l && ze, d && Xe, _ && Ke),
            [p, g] = a.useState(!1),
            [b, x] = a.useState(!1),
            [v, f] = a.useState(!1),
            C = s.computes.getBossList(),
            j = s.computes.getHunterList(),
            y = a.useCallback(() => {
                (h.sound(R.sounds.tank_selection()), g((e) => !e));
            }, []);
        (a.useEffect(() => {
            p ? (2 === C.length && n ? f((e) => !e) : x((e) => !e)) : (x(!1), f(!1));
        }, [p, C.length, n]),
            a.useEffect(() => {
                g(!1);
            }, [o]));
        const N = a.useCallback(() => {
                h.sound(R.sounds.carousel());
            }, []),
            w = t(ss, ts, !p && as),
            A = t(ss, rs, p && as),
            P = t(Je, b && Ze, v && es),
            I = t(ls, d && ds),
            k = n || (i && 2 === C.length) || (l && 2 === C.length && C.length >= 1);
        return r.jsx('div', {
            className: Ge,
            children: r.jsx('div', {
                className: c,
                children: r.jsxs('div', {
                    className: Ue,
                    children: [
                        k &&
                            r.jsx('div', {
                                className: w,
                                onClick: y,
                                onMouseEnter: N,
                                children: r.jsx('div', { className: os }),
                            }),
                        r.jsx('div', {
                            className: Ye,
                            children: r.jsxs('div', {
                                className: P,
                                children: [
                                    C.map((e, s) =>
                                        r.jsx('div', { className: I, children: r.jsx($e, { ...e }) }, `tank_${s}`),
                                    ),
                                    r.jsx('div', { className: ns, children: r.jsx('div', { className: is }) }),
                                    j.map((e, s) =>
                                        r.jsx('div', { className: I, children: r.jsx($e, { ...e }) }, `tank_${s}`),
                                    ),
                                ],
                            }),
                        }),
                        k &&
                            r.jsx('div', {
                                className: A,
                                onClick: y,
                                onMouseEnter: N,
                                children: r.jsx('div', { className: os }),
                            }),
                    ],
                }),
            }),
        });
    }),
    cs = o.memo(function (e) {
        const s = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.Carousel('resId') }), []);
        return r.jsx(ce, { options: s, children: r.jsx(_s, { ...e }) });
    }),
    [ps, ms] = c()(
        ({ observableModel: e }) => ({
            ...{ root: e.object(), ...e.primitives(['title', 'icon', 'quantity', 'tankType']) },
        }),
        ({ externalModel: e }) => ({
            onOpenTasks: e.createCallbackNoArgs('onOpenTasks'),
            onBuyTicket: e.createCallbackNoArgs('onBuyTicket'),
        }),
    ),
    us = 'AmmunitionIcon_ec5c1311',
    gs = 'AmmunitionIcon_icon_e4b59008',
    hs = 'AmmunitionIcon_infinity_f8fa7376',
    bs = a.memo(({ icon: e, id: s, tooltipId: t, isInfinite: o }) => {
        const n = { backgroundImage: `url(${e})` },
            i = a.useMemo(() => {
                const e = { id: s, tooltipId: t };
                return '' === t
                    ? {
                          args: e,
                          targetId: R.aliases.white_tiger.shared.ConsumablesPanel('resId'),
                          contentId: R.views.white_tiger.mono.lobby.tooltips.ammunition_panel_tooltip('resId'),
                      }
                    : { args: e, targetId: R.aliases.white_tiger.shared.ConsumablesPanel('resId') };
            }, [s, t]);
        return r.jsxs('div', {
            className: us,
            children: [
                r.jsx(x, { tooltipArgs: i, children: r.jsx('div', { className: gs, style: n }) }),
                o && r.jsx('div', { className: hs }),
            ],
        });
    }),
    xs = 'AmmunitionPanel_c19fcc76',
    vs = 'AmmunitionPanel_group_f03acf1e',
    fs = s(() => {
        const { model: e } = ms(),
            s = e.root.get().equipments;
        return r.jsx('div', {
            className: xs,
            children: s.items.map(
                (e, s) =>
                    r.jsx(
                        'div',
                        {
                            className: vs,
                            children: e.value.group.items.map((e) =>
                                a.createElement(bs, { ...e.value, key: e.value.id }),
                            ),
                        },
                        s,
                    ),
                [],
            ),
        });
    }),
    Cs = 'VehicleName_titleIcon_dbdab937',
    js = 'VehicleName_title_79b052b',
    ys = s(() => {
        const { model: e } = ms(),
            s = e.title.get(),
            a = { backgroundImage: `url(${e.icon.get()})` };
        return r.jsxs(r.Fragment, {
            children: [r.jsx('div', { className: Cs, style: a }), r.jsx('div', { className: js, children: s })],
        });
    }),
    Ns = 'ChangeVehiclePanel_4b69e64c',
    ws = 'ChangeVehiclePanel_base__large_674a8925',
    As = 'ChangeVehiclePanel_titleWrapper_6b8ebb05',
    Ps = 'ChangeVehiclePanel_descriptionWrapper_1d6cfc04',
    Is = 'ChangeVehiclePanel_description_1b9f6d59',
    ks = 'ChangeVehiclePanel_descriptionIcon_e853db5d',
    Qs = 'ChangeVehiclePanel_buttonHolder_c88f2606',
    Es = 'ChangeVehiclePanel_buttonText_48339e04',
    Ms = 'ChangeVehiclePanel_button_f8b7370c',
    Ts = g.resolve('strings'),
    Rs = s(() => {
        const { controls: e } = ms(),
            { breakpoint: s } = m(),
            a = s.name === u.extraLarge || s.name === u.large,
            t = n(Ns, a && ws);
        return r.jsxs('div', {
            className: t,
            children: [
                r.jsx('div', { className: As, children: r.jsx(ys, {}) }),
                r.jsxs('div', {
                    className: Ps,
                    children: [
                        r.jsx(b, {
                            targetId: R.aliases.white_tiger.shared.ConsumablesPanel('resId'),
                            contentId: R.views.white_tiger.mono.lobby.tooltips.ticket_tooltip('resId'),
                            children: r.jsx('div', { className: ks }),
                        }),
                        r.jsx('div', {
                            className: Is,
                            children: Ts.readOrEmpty('white_tiger_lobby.TicketMessageView.boss.description'),
                        }),
                    ],
                }),
                r.jsxs('div', {
                    className: Qs,
                    children: [
                        r.jsx(v, {
                            type: 'primary',
                            size: 'small',
                            onClick: e.onOpenTasks,
                            mixClass: Ms,
                            children: r.jsx('span', {
                                className: Es,
                                children: Ts.readOrEmpty('white_tiger_lobby.TicketMessageView.taskText'),
                            }),
                        }),
                        r.jsx(v, {
                            type: 'main',
                            size: 'small',
                            onClick: e.onBuyTicket,
                            mixClass: Ms,
                            children: r.jsx('span', {
                                className: Es,
                                children: Ts.readOrEmpty('white_tiger_lobby.TicketMessageView.buyText'),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Bs = a.memo(Rs),
    Ss = 'ConsumablesPanelApp_6f3866a6',
    Ds = 'ConsumablesPanelApp_titleWrapper_8e0a9c7',
    Vs = 'ConsumablesPanelApp_vehicleNameWrapper_68cc8932',
    Ws = s(() => {
        const { model: e } = ms(),
            s = e.quantity.get(),
            a = e.tankType.get();
        return -1 === s && a === _e.Boss
            ? null
            : r.jsx('div', {
                  className: Ss,
                  children:
                      0 === s && a === _e.Boss
                          ? r.jsx(Bs, {})
                          : r.jsxs('div', {
                                className: Ds,
                                children: [r.jsx('div', { className: Vs, children: r.jsx(ys, {}) }), r.jsx(fs, {})],
                            }),
              });
    }),
    Os = o.memo(function () {
        const e = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.ConsumablesPanel('resId') }), []);
        return r.jsx(ps, { options: e, children: r.jsx(Ws, {}) });
    }),
    [Hs, Ls] = c()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({}),
    ),
    $s = {
        root: 'CrewInfoApp_root_84a72510',
        'header-h80': 'CrewInfoApp_header-h80_ed14d214',
        'header-h56': 'CrewInfoApp_header-h56_8651e1cc',
        'header-h40': 'CrewInfoApp_header-h40_e6a505d7',
        'header-h32': 'CrewInfoApp_header-h32_e877708',
        'header-h28': 'CrewInfoApp_header-h28_eb4836a4',
        'header-h26': 'CrewInfoApp_header-h26_84a72510',
        name: 'CrewInfoApp_name_4d653a94',
        'header-h24': 'CrewInfoApp_header-h24_712eecc',
        'header-h22': 'CrewInfoApp_header-h22_84a72510',
        'header-h20': 'CrewInfoApp_header-h20_84a72510',
        base__small: 'CrewInfoApp_base__small_83f697ba',
        'header-h18': 'CrewInfoApp_header-h18_74068d6b',
        'header-h16': 'CrewInfoApp_header-h16_c79aa8ef',
        'paragraph-p20': 'CrewInfoApp_paragraph-p20_84a72510',
        type: 'CrewInfoApp_type_9f212768',
        'paragraph-p18': 'CrewInfoApp_paragraph-p18_84a72510',
        description: 'CrewInfoApp_description_4c972cfa',
        'paragraph-p16': 'CrewInfoApp_paragraph-p16_84a72510',
        base: 'CrewInfoApp_2f4412ee',
        member: 'CrewInfoApp_member_48c1fea3',
        member__boss: 'CrewInfoApp_member__boss_290fd7b6',
        member__hunter_1: 'CrewInfoApp_member__hunter_1_b9675b9e',
        member__hunter_2: 'CrewInfoApp_member__hunter_2_c2553a36',
        member__hunter_3: 'CrewInfoApp_member__hunter_3_c87114de',
        member__hunter_4: 'CrewInfoApp_member__hunter_4_6a5baf8e',
        tooltipArea: 'CrewInfoApp_tooltipArea_f4400383',
    },
    Gs = s(() => {
        const { model: e } = Ls(),
            { name: s, tankmanID: a } = e.root.get(),
            { breakpoint: o } = m(),
            n = g.resolve('strings'),
            i = o.name == u.extraSmall,
            l = t($s.base, i && $s.base__small),
            d = t($s.member, $s[`member__${a}`]);
        return r.jsxs('div', {
            className: l,
            children: [
                r.jsx('div', { className: d }),
                r.jsx('div', { className: $s.type, children: n.readOrEmpty(`white_tiger_lobby.crewPanel.role.${a}`) }),
                r.jsx('div', { className: $s.name, children: s }),
                r.jsx('div', {
                    className: $s.description,
                    children: n.readOrEmpty(`white_tiger_lobby.crewPanel.slogan.${a}`),
                }),
                r.jsx(b, {
                    targetId: R.aliases.white_tiger.shared.Crewman('resId'),
                    contentId: R.views.white_tiger.mono.lobby.tooltips.crew_info_tooltip('resId'),
                    children: r.jsx('div', { className: $s.tooltipArea }),
                }),
            ],
        });
    }),
    Fs = o.memo(function () {
        const e = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.Crewman('resId') }), []);
        return r.jsx(Hs, { options: e, children: r.jsx(Gs, {}) });
    }),
    [qs, zs] = c()(
        ({ observableModel: e }) => ({ ...{ ...e.primitives(['isEnabled', 'boxesCount', 'eventName']) } }),
        ({ externalModel: e }) => ({ onEntryClick: e.createCallback(() => ({}), 'onEntryClick') }),
    ),
    Xs = 'AlertIcon_icon_52f4712b',
    Ks = ({ className: e }) => r.jsx('div', { className: n(Xs, e) }),
    Us = {
        base: 'LootboxEntryPointApp_87fec1bb',
        base__hovered: 'LootboxEntryPointApp_base__hovered_1d5af12c',
        container: 'LootboxEntryPointApp_container_fd96ad5b',
        base__disabled: 'LootboxEntryPointApp_base__disabled_3510bfe1',
        content: 'LootboxEntryPointApp_content_2f9a0382',
        glow: 'LootboxEntryPointApp_glow_6eff4c52',
        glow__hovered: 'LootboxEntryPointApp_glow__hovered_b60ea876',
        animation: 'LootboxEntryPointApp_animation_fd413183',
        bottomContainer: 'LootboxEntryPointApp_bottomContainer_df191767',
        bottomContainer__hasBoxes: 'LootboxEntryPointApp_bottomContainer__hasBoxes_f0167f9c',
        text: 'LootboxEntryPointApp_text_78b273e2',
        text__hasBoxes: 'LootboxEntryPointApp_text__hasBoxes_4c048224',
        alert: 'LootboxEntryPointApp_alert_940a41d4',
        alert__hasBoxes: 'LootboxEntryPointApp_alert__hasBoxes_8d2ade97',
    },
    Ys = R.images.white_tiger.gui.maps.icons.hangar.widgets.lootbox_entry_point,
    Js = s(({ className: e }) => {
        const { model: s, controls: o } = zs(),
            n = s.isEnabled.get(),
            i = s.boxesCount.get(),
            l = s.eventName.get(),
            d = i > 0,
            [_, c] = a.useState(!1),
            p = l in Ys ? Ys[l] : void 0;
        if (!p) return (console.warn(l, 'eventName is not valid. Valid options:', Object.keys(Ys)), null);
        const m = d ? p.lootboxGold() : p.lootboxEmpty(),
            u =
                i > 999
                    ? R.strings.white_tiger_lobby.lootboxEntry.maxBoxesCount()
                    : ie(R.strings.white_tiger_lobby.lootboxEntry.count(), { count: i });
        return n
            ? r.jsx(b, {
                  targetId: R.aliases.white_tiger.shared.LootboxEntryPoint('resId'),
                  contentId: R.views.mono.lootbox.tooltips.entry_point('resId'),
                  children: r.jsxs('div', {
                      'data-test-id': 'wt-lootbox-entry',
                      className: t(Us.base, e, _ && Us.base__hovered, !n && Us.base__disabled),
                      onMouseLeave: () => {
                          n && c(!1);
                      },
                      onMouseEnter: () => {
                          n && (h.sound('gui_lb_icon_hover'), c(!0));
                      },
                      onClick: () => {
                          n && (h.click(), o.onEntryClick());
                      },
                      children: [
                          r.jsxs('div', {
                              className: Us.container,
                              children: [
                                  r.jsx('div', { className: t(Us.glow, _ && d && Us.glow__hovered) }),
                                  r.jsx('div', {
                                      className: Us.animation,
                                      children: r.jsx('div', {
                                          className: Us.content,
                                          style: { backgroundImage: `url('${m}')` },
                                      }),
                                  }),
                                  r.jsx('div', {
                                      className: Us.contentMask,
                                      children: r.jsx('div', {
                                          className: t(Us.bottomContainer, d && Us.bottomContainer__hasBoxes),
                                          children: r.jsx('div', {
                                              className: t(Us.text, d && Us.text__hasBoxes),
                                              children: d ? u : R.strings.white_tiger_lobby.lootboxEntry.boxes(),
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          !n && r.jsx(Ks, { className: t(Us.alert, d && Us.alert__hasBoxes) }),
                      ],
                  }),
              })
            : null;
    }),
    Zs = o.memo(function (e) {
        const s = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.LootboxEntryPoint('resId') }), []);
        return r.jsx(qs, { options: s, children: r.jsx(Js, { ...e }) });
    }),
    ea = { root: '/whiteTigerHangarMode/{root}', progression: '/whiteTigerHangarMode/progression' },
    [sa, aa] = c()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
    ),
    ta = 'ProgressionWidgetApp_604d3b1',
    ra = 'ProgressionWidgetApp_wrapper_3b8cf271',
    oa = 'ProgressionWidgetApp_image_23947342',
    na = 'ProgressionWidgetApp_image__isHidden_e8080a36',
    ia = 'ProgressionWidgetApp_image__allCollected_41bf9341',
    la = 'ProgressionWidgetApp_checkmarkWrapper_c7ae8fc0',
    da = 'ProgressionWidgetApp_checkmark_698172cc',
    _a = 'ProgressionWidgetApp_imageHover_8fadad9c',
    ca = 'ProgressionWidgetApp_imageHover__isVisible_779c0907',
    pa = 'ProgressionWidgetApp_imageHover__allCollected_32131829',
    ma = 'ProgressionWidgetApp_newItemAnimation_bbed1ad6',
    ua = 'ProgressionWidgetApp_newItemAnimation__isVisible_779c0907',
    ga = 'ProgressionWidgetApp_hoverArea_259b7ed1',
    ha = 'ProgressionWidgetApp_hoverAreaWrapper_42967fed',
    ba = 'ProgressionWidgetApp_hoverAreaWrapper__allCollected_894d0d6f',
    xa = 'ProgressionWidgetApp_progressionValue_7d3c74aa',
    va = 'ProgressionWidgetApp_progressionCountWrapper_7d798a50',
    fa = 'ProgressionWidgetApp_progressbarWrapper_93efa0c5',
    Ca = s(() => {
        const e = f(),
            { model: s } = aa(),
            { isNewItem: t, allCollected: o, currentProgression: i, totalProgression: l } = s.root.get(),
            [d, _] = a.useState(!1),
            c = n(oa, d && na, o && ia);
        a.useEffect(() => {
            h.sound('ev_white_tiger_hangar_collection_appear');
        }, []);
        const p = a.useCallback(() => {
                (h.sound('ev_white_tiger_hangar_collection_rollover'), _(!0));
            }, []),
            m = a.useCallback(() => {
                (h.sound('ev_white_tiger_hangar_collection_rollout'), _(!1));
            }, []),
            u = a.useRef(null),
            g = n(_a, o && pa, d && ca),
            x = n(ma, (t || d) && ua);
        return r.jsxs('div', {
            'data-test-id': 'wt-progression-entry',
            className: ta,
            children: [
                r.jsxs('div', {
                    className: ra,
                    children: [
                        r.jsx('div', { className: c }),
                        r.jsx('div', { className: g }),
                        (t || d) && r.jsx('div', { className: x }),
                    ],
                }),
                o
                    ? r.jsx('div', { className: la, children: r.jsx('div', { className: da }) })
                    : r.jsx('div', { className: xa, children: i + 1 }),
                r.jsxs('div', {
                    className: n(ha, o && ba),
                    ref: u,
                    children: [
                        r.jsx(b, {
                            targetId: R.aliases.white_tiger.shared.Progression('resId'),
                            contentId: R.views.white_tiger.mono.lobby.tooltips.progression_widget_tooltip('resId'),
                            children: r.jsx('div', {
                                className: ga,
                                onMouseEnter: p,
                                onMouseLeave: m,
                                onClick: function () {
                                    (h.sound('ev_white_tiger_hangar_collection_click'), e.push(ea.progression));
                                },
                            }),
                        }),
                        r.jsx('div', {
                            className: va,
                            children:
                                !o &&
                                r.jsx('div', {
                                    className: fa,
                                    children: r.jsx(C, { size: y.Default, value: i, maxValue: l, theme: j }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ja = () => {
        const e = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.Progression('resId') }), []);
        return r.jsx(sa, { options: e, children: r.jsx(Ca, {}) });
    },
    [ya, Na] = c()(
        ({ observableModel: e }) => ({ root: e.object(), pros: e.array('pros'), cons: e.array('cons') }),
        ({ externalModel: e }) => ({}),
    ),
    wa = 'Advantage_text_4c490979',
    Aa = 'Advantage_item_1b5a59f5',
    Pa = 'Advantage_icon_cdead8ed',
    Ia = a.memo(({ parameter: e, icon: s }) => {
        const a = { backgroundImage: `url('${s}')` },
            t = g.resolve('strings').readOrEmpty(`white_tiger_lobby.ttx.${e}`),
            o = { parameter: e };
        return r.jsx(b, {
            targetId: R.aliases.white_tiger.shared.VehicleStats('resId'),
            contentId: R.views.white_tiger.mono.lobby.tooltips.tank_info_tooltip('resId'),
            args: o,
            children: r.jsxs('div', {
                className: Aa,
                children: [r.jsx('span', { className: Pa, style: a }), r.jsx('span', { className: wa, children: t })],
            }),
        });
    }),
    ka = 'Features_d2fc423',
    Qa = s(() => {
        const { model: e } = Na(),
            s = e.root.get().specialInfo;
        if (!s) return null;
        const a = s.split('\n');
        return r.jsx('div', { className: ka, children: a.map((e, s) => r.jsx(N, { split: !0, text: e }, s)) });
    }),
    Ea = 'Panel_title_80f9f4b7',
    Ma = 'Panel_f8f7fe7',
    Ta = 'Panel_base__small_db9c3013',
    Ra = 'Panel_separator_83a4966a',
    Ba = 'Panel_itemList_f5f66484',
    Sa = s(() => {
        const { model: e } = Na(),
            s = g.resolve('strings'),
            a = e.pros.get(),
            o = e.cons.get(),
            { breakpoint: n } = m(),
            i = n.name == u.extraSmall || n.name == u.small,
            l = t(Ma, i && Ta);
        return r.jsxs('div', {
            className: l,
            children: [
                r.jsx('span', {
                    className: Ea,
                    children: s.readOrEmpty('white_tiger_lobby.characteristicsPanel.pros'),
                }),
                r.jsx('div', { className: Ba, children: w(a, (e) => r.jsx(Ia, { ...e }, e.parameter)) }),
                r.jsx('div', { className: Ra }),
                r.jsx('span', {
                    className: Ea,
                    children: s.readOrEmpty('white_tiger_lobby.characteristicsPanel.cons'),
                }),
                r.jsx('div', { className: Ba, children: w(o, (e) => r.jsx(Ia, { ...e }, e.parameter)) }),
                r.jsx('div', { className: Ra }),
                r.jsx('span', {
                    className: Ea,
                    children: s.readOrEmpty('white_tiger_lobby.characteristicsPanel.features'),
                }),
                r.jsx('div', { className: Ba, children: r.jsx(Qa, {}) }),
            ],
        });
    }),
    Da = 'TankInfoApp_1abc38b',
    Va = () => r.jsx('div', { className: Da, children: r.jsx(Sa, {}) }),
    Wa = o.memo(function () {
        const e = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.VehicleStats('resId') }), []);
        return r.jsx(ya, { options: e, children: r.jsx(Va, {}) });
    }),
    [Oa, Ha] = c()(
        (e) => {
            const { observableModel: s } = e;
            return { root: s.object() };
        },
        ({ externalModel: e, model: s }) => ({
            openMenu: e.createCallbackNoArgs('onEscPressed'),
            openInfo: e.createCallbackNoArgs('onInfoClicked'),
            viewLoaded: e.createCallbackNoArgs('onViewLoaded'),
        }),
    ),
    La = 'disabled',
    $a = 'enabled',
    Ga = 'modeSelector',
    Fa = 'shop',
    qa = 'storage',
    za = 'missions',
    Xa = 'personalMissions',
    Ka = 'achievements',
    Ua = 'techtree',
    Ya = 'tournament',
    Ja = 'barracks',
    Za = 'clans',
    et = Ya,
    st = Za,
    at = Xa,
    tt = Ga,
    rt = Ka,
    ot = {
        [Fa]: 'shop',
        [qa]: 'storage',
        [Ua]: 'techtree',
        [Ja]: 'barracks',
        [et]: 'tournament',
        [st]: 'clans',
        ['clan']: 'clan',
        [za]: 'missions',
        [at]: 'personalMissions',
        [tt]: 'modeSelector',
        [rt]: 'profile',
        ['replays']: 'replays',
    },
    nt = (e) =>
        a.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    it = {
        root: 'MenuItem_root_28be5e00',
        'header-h80': 'MenuItem_header-h80_5c1e51b1',
        'header-h56': 'MenuItem_header-h56_23a7abcc',
        'header-h40': 'MenuItem_header-h40_1391cb80',
        'header-h32': 'MenuItem_header-h32_b00414cf',
        'header-h28': 'MenuItem_header-h28_5048815f',
        'header-h26': 'MenuItem_header-h26_12129bfa',
        'header-h24': 'MenuItem_header-h24_fad6cc35',
        'header-h22': 'MenuItem_header-h22_bc3f31de',
        'header-h20': 'MenuItem_header-h20_a40fd843',
        'header-h18': 'MenuItem_header-h18_6fb01565',
        'header-h16': 'MenuItem_header-h16_3ec32b3b',
        'paragraph-p20': 'MenuItem_paragraph-p20_3de89506',
        'paragraph-p18': 'MenuItem_paragraph-p18_6fb01565',
        'paragraph-p16': 'MenuItem_paragraph-p16_3ec32b3b',
        base: 'MenuItem_92bbc5da',
        base__modeSelectorName: 'MenuItem_base__modeSelectorName_28be5e00',
        base__enabledState: 'MenuItem_base__enabledState_6f88d3d1',
        modeSelector: 'MenuItem_modeSelector_1c338d85',
        modeIcon: 'MenuItem_modeIcon_9555dfb6',
        label: 'MenuItem_label_279fb3be',
        base__disabledState: 'MenuItem_base__disabledState_28be5e00',
        titleWrapper: 'MenuItem_titleWrapper_cf46ff6b',
        title: 'MenuItem_title_fdf9bd46',
        arrow: 'MenuItem_arrow_1ff4c9e',
        modeName: 'MenuItem_modeName_36c0339e',
        clanEmblem: 'MenuItem_clanEmblem_fe5255ab',
    },
    lt = 'forts',
    dt = g.resolve('intl'),
    _t = g.resolve('strings'),
    ct = {
        [tt]: 'tooltips.header.battleType',
        [et]: 'tooltips.header.buttons.tournaments',
        [rt]: 'tooltips.header.buttons.profile',
    },
    pt = {
        [st]: 'tooltips.header.buttons.clans.turnedOff',
        [at]: 'tooltips.header.buttons.personalMissionsDisabled',
        [lt]: 'tooltips.header.buttons.forts.turnedOff',
    };
function mt(e) {
    return dt.toUpperCase(_t.readOrEmpty(`menu.headerButtons.${ot[e]}`) || _t.readOrEmpty(`menu.headerButtons.${e}`));
}
function ut({
    name: e,
    state: s,
    modeName: t,
    modeId: o,
    techTreeEvents: i,
    clanEmblem: l,
    onClick: d,
    battleTypesPath: _ = '',
}) {
    const c = A(),
        p = e === st && l,
        m = P(
            a.useMemo(
                () =>
                    (function (e, s) {
                        const a = ((s && pt[e]) || ct[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: _t.readOrEmpty(`${a}.header`), body: _t.readOrEmpty(`${a}.body`) };
                    })(p ? lt : e, s === La),
                [e, s, p],
            ),
        ),
        u = I('techtreeDiscount'),
        g = i && 'techtree' === e ? u : m;
    return r.jsx('div', {
        ...g,
        className: n(it.base, it[`base__${s}State`], it[`base__${e}Name`]),
        'data-test-id': e,
        onMouseEnter: function (e) {
            (g.onMouseEnter(),
                s !== La && c.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (a) {
            (g.onClick(), s !== La && (d(e), c.play('click', { target: 'main-menu-widget:menu-item', original: a })));
        },
        children: (() => {
            switch (e) {
                case tt: {
                    const s = _ ? `${_}.battleTypes.c_64x64.${o}` : `battleTypes.c_64x64.${o}`;
                    return r.jsxs(r.Fragment, {
                        children: [
                            r.jsxs('div', {
                                className: it.modeSelector,
                                children: [
                                    r.jsx('div', { className: it.label, children: mt(e) }),
                                    t && r.jsx('div', { className: it.modeName, children: dt.toUpperCase(t) }),
                                    r.jsx(k, { className: it.modeIcon, path: s }),
                                ],
                            }),
                            r.jsx(nt, { className: it.arrow }),
                        ],
                    });
                }
                case st:
                    return r.jsxs('div', {
                        className: it.titleWrapper,
                        children: [
                            l && r.jsx('div', { style: { backgroundImage: `url(${l})` }, className: it.clanEmblem }),
                            r.jsx('div', { className: it.title, children: mt(p ? 'clan' : e) }),
                        ],
                    });
                default:
                    return r.jsx('div', {
                        className: it.titleWrapper,
                        children: r.jsx('div', { className: it.title, children: mt(e) }),
                    });
            }
        })(),
    });
}
const [gt, ht] = c()(
        ({ observableModel: e }) => ({
            menuItems: e.array('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    bt = 'MainMenu_222da7b7',
    xt = i(function ({ className: e, battleTypesPath: s = '' }) {
        const { model: t, controls: o } = ht(),
            i = t.menuItems.get(),
            l = t.modeName.get(),
            d = t.modeId.get(),
            _ = t.hasTechTreeEvents.get(),
            c = t.clanEmblem.get();
        return r.jsx('div', {
            className: n(bt, e),
            children: w(i, (e) =>
                a.createElement(ut, {
                    ...e,
                    key: e.name,
                    battleTypesPath: s,
                    onClick: o.navigateTo,
                    modeName: l,
                    modeId: d,
                    techTreeEvents: _,
                    clanEmblem: c,
                }),
            ),
        });
    }),
    vt = {
        getter: E({
            menuItems: [
                { name: Ga, state: $a },
                { name: Fa, state: $a },
                { name: qa, state: $a },
                { name: za, state: $a },
                { name: Xa, state: $a },
                { name: Ka, state: $a },
                { name: Ua, state: $a },
                { name: Ja, state: La },
                { name: Ya, state: $a },
                { name: Za, state: $a },
            ],
            modeName: 'Random Battle',
        }),
        controls: () => Q(M('navigateTo')),
    };
function ft({ className: e, battleTypesPath: s = '', ...a }) {
    return r.jsx(gt, { mode: 'real', mocks: vt, ...a, children: r.jsx(xt, { className: e, battleTypesPath: s }) });
}
const Ct = g.resolve('strings');
function jt(e) {
    const s = { rootId: R.aliases.hangar.shared.MainMenu('resId') },
        a = P({
            header: Ct.readOrEmpty('white_tiger_lobby.tooltips.mainMenu.modeSelector.header'),
            body: Ct.readOrEmpty('white_tiger_lobby.tooltips.mainMenu.modeSelector.description'),
        });
    return r.jsx('div', { ...a, children: r.jsx(ft, { options: s, ...e }) });
}
var yt = ((e) => (
    (e.NONE = 'none'),
    (e.BT110 = 'BT110'),
    (e.BT220 = 'BT220'),
    (e.RESISTOR = 'RESISTOR'),
    (e.THUNDERBOLT = 'THUNDERBOLT'),
    (e.FOUDRE = 'FOUDRE'),
    (e.POJISTKA = 'POJISTKA'),
    e
))(yt || {});
const Nt = [
        {
            vehicle: yt.NONE,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_5(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_5(),
            speedX: 0.001,
            speedY: 0.001,
        },
        {
            vehicle: yt.RESISTOR,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_4(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_4_selected(),
            speedX: 0.004,
            speedY: 0.002,
        },
        {
            vehicle: yt.THUNDERBOLT,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_3(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_3_selected(),
            speedX: 0.008,
            speedY: 0.004,
        },
        {
            vehicle: yt.POJISTKA,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_2(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_2_selected(),
            speedX: 0.012,
            speedY: 0.006,
        },
        {
            vehicle: yt.FOUDRE,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_1(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_1_selected(),
            speedX: 0.016,
            speedY: 0.008,
        },
        {
            vehicle: yt.BT220,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_0_special_selected(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_0_special_selected(),
            speedX: 0.02,
            speedY: 0.01,
        },
        {
            vehicle: yt.BT110,
            path: R.images.white_tiger.gui.maps.icons.hangarParallax.c_0(),
            pathSelected: R.images.white_tiger.gui.maps.icons.hangarParallax.c_0_selected(),
            speedX: 0.02,
            speedY: 0.01,
        },
    ],
    wt = 'Parallax_642396e4',
    At = 'Parallax_layer_cdf6ae01',
    Pt = 'Parallax_layer_selectedImage_240b45af',
    It = 'Parallax_layer__selected_ac12e19d',
    kt = Nt.reduce((e, s) => {
        const a = Math.abs(s.speedX);
        return a > e ? a : e;
    }, 0),
    Qt = s(() => {
        const { model: e } = Ha(),
            { selectedVehicle: s } = e.root.get(),
            { screenWidthRem: t } = m(),
            o = a.createRef(),
            i = kt * t,
            [d] = T(o),
            _ = s == yt.BT220;
        return r.jsx('div', {
            ref: o,
            className: wt,
            children: Nt.map((e, a) => {
                const o = s === e.vehicle;
                if (_) {
                    if (e.vehicle == yt.BT110) return;
                } else if (e.vehicle === yt.BT220) return;
                return r.jsx(
                    l.div,
                    {
                        className: n(At, o && It),
                        style: {
                            width: `${t + 2 * i}rem`,
                            left: -i + 'rem',
                            x: d.x.to((s) => s * e.speedX),
                            y: d.y.to((s) => s * e.speedY),
                            backgroundImage: `url(${e.path})`,
                        },
                        children: r.jsx(
                            'div',
                            { className: Pt, style: { backgroundImage: `url(${e.pathSelected})` } },
                            a,
                        ),
                    },
                    a,
                );
            }),
        });
    }),
    Et = 'ParallaxContainer_ea8010a4',
    Mt = Nt.map((e) => e.path),
    Tt = s(({ className: e }) => {
        const { controls: s } = Ha(),
            t = d({ to: { opacity: 1 }, config: { duration: 300 } }),
            o = 'pending' !== B(Mt);
        return (
            a.useEffect(() => {
                o && s.viewLoaded();
            }, [o, s]),
            r.jsx(l.div, { className: n(Et, e), style: t, children: r.jsx(Qt, {}) })
        );
    }),
    Rt = 'HangarScreen_aa319094',
    Bt = 'HangarScreen_mainMenu_2901d4d4',
    St = 'HangarScreen_fullscreen_237fe26b',
    Dt = 'HangarScreen_progressionWrapper_ff2d3dc5',
    Vt = 'HangarScreen_menuWrapper_f2e0db83',
    Wt = 'HangarScreen_informationButton_e96e62af',
    Ot = 'HangarScreen_crewInfoWrapper_c57dc417',
    Ht = 'HangarScreen_carouselWrapper_c0337eda',
    Lt = s(() => {
        const { controls: e } = Ha();
        S(e.openMenu);
        const s = g.resolve('strings');
        return r.jsxs('div', {
            className: Rt,
            children: [
                r.jsx(Tt, {}),
                r.jsxs('div', {
                    className: St,
                    children: [
                        r.jsx(D, {
                            classNames: { base: Wt },
                            caption: s.readOrEmpty('white_tiger_lobby.navigation.information'),
                            type: 'info',
                            onClick: e.openInfo,
                        }),
                        r.jsx('div', { className: Vt, children: r.jsx(jt, { className: Bt }) }),
                        r.jsx('div', { className: Ot, children: r.jsx(Fs, {}) }),
                        r.jsxs('div', { className: Ht, children: [r.jsx(Os, {}), r.jsx(cs, {})] }),
                        r.jsx(Wa, {}),
                        r.jsx('div', { className: Dt, children: r.jsx(ja, {}) }),
                        r.jsx(Zs, {}),
                    ],
                }),
            ],
        });
    }),
    [$t, Gt] = c()(
        ({ observableModel: s }) => {
            const a = { root: s.object(), stages: s.array('stages') },
                t = e(() =>
                    w(a.stages.get(), (e, s) => ({
                        ...e,
                        stageMaxPoints: (s + 1) * a.root.get().stampsNeededPerStage,
                        rewards: w(e.rewards, V),
                    })),
                );
            return { ...a, computes: { getStages: t } };
        },
        ({ externalModel: e }) => ({}),
    ),
    Ft = {
        base: 'ProgressionContentApp_677c8fc4',
        base_container: 'ProgressionContentApp_base_container_babed4eb',
        scrollWrap: 'ProgressionContentApp_scrollWrap_b93b917a',
        wrapper: 'ProgressionContentApp_wrapper_5c780932',
        fadeBackground: 'ProgressionContentApp_fadeBackground_93c02d66',
        fadeBackground__out: 'ProgressionContentApp_fadeBackground__out_457e8b32',
        top: 'ProgressionContentApp_top_e3b51607',
        progress_top: 'ProgressionContentApp_progress_top_1469ef71',
        progress_top__current: 'ProgressionContentApp_progress_top__current_30f9dab3',
        bottom: 'ProgressionContentApp_bottom_20d2ba43',
        stage: 'ProgressionContentApp_stage_42a13766',
        stage_img: 'ProgressionContentApp_stage_img_f085aeb9',
        stage_glow: 'ProgressionContentApp_stage_glow_1201439a',
        stage__current: 'ProgressionContentApp_stage__current_59fc5296',
        stage_text: 'ProgressionContentApp_stage_text_30f93afc',
        stage__done: 'ProgressionContentApp_stage__done_63c618f9',
        progress_content: 'ProgressionContentApp_progress_content_491f1ff5',
        progress_content__done: 'ProgressionContentApp_progress_content__done_46cb5399',
        reward: 'ProgressionContentApp_reward_2ea25a0',
        progress_bottom: 'ProgressionContentApp_progress_bottom_652b15cf',
        progress_bottom__current: 'ProgressionContentApp_progress_bottom__current_c8e7524',
        rewards_group: 'ProgressionContentApp_rewards_group_e3b8d1dd',
        reward__compressed: 'ProgressionContentApp_reward__compressed_c8e7524',
        rewardInfo: 'ProgressionContentApp_rewardInfo_29c7a28d',
        divider: 'ProgressionContentApp_divider_48fbbbd1',
        divider_end: 'ProgressionContentApp_divider_end_ea002677',
        pointsMark: 'ProgressionContentApp_pointsMark_37591742',
        pointsMark__faded: 'ProgressionContentApp_pointsMark__faded_2a0ec5d4',
        pointsMark_group: 'ProgressionContentApp_pointsMark_group_2466b894',
        glow: 'ProgressionContentApp_glow_3d9c503a',
        glow__inProgress: 'ProgressionContentApp_glow__inProgress_9edf72f6',
        numberAnimated: 'ProgressionContentApp_numberAnimated_1da0f2ab',
        numberAnimated__enter: 'ProgressionContentApp_numberAnimated__enter_e75c2a83',
        numberAnimated__enterActive: 'ProgressionContentApp_numberAnimated__enterActive_606ffb5d',
        numberAnimated__enterDone: 'ProgressionContentApp_numberAnimated__enterDone_3be7f944',
        numberGlow: 'ProgressionContentApp_numberGlow_a4a23871',
        numberGlow__active: 'ProgressionContentApp_numberGlow__active_d8ea74bc',
        numberGlow__exit: 'ProgressionContentApp_numberGlow__exit_5e223141',
        stamps: 'ProgressionContentApp_stamps_eee8d8c5',
        stamps_max: 'ProgressionContentApp_stamps_max_8f0c7819',
    },
    qt = 1e3,
    zt = {
        enter: Ft.numberAnimated__enter,
        enterActive: Ft.numberAnimated__enterActive,
        enterDone: Ft.numberAnimated__enterDone,
    },
    Xt = { enterActive: Ft.numberGlow__active, enterDone: Ft.numberGlow__exit },
    Kt = (e) => {
        e === z.Grow
            ? h.sound(R.sounds.ev_white_tiger_hangar_ui_progress_bar_start())
            : e === z.End && h.sound(R.sounds.ev_white_tiger_hangar_ui_progress_bar_stop());
    },
    Ut = s(() => {
        var e;
        const { model: s } = Gt(),
            o = s.computes.getStages(),
            { stampsCurrent: i, currentStage: l, stampsPrevious: d, stampsNeededPerStage: c } = s.root.get(),
            p = o.length * c,
            u = Math.min(i, p),
            g = l - 1,
            h = (null == (e = o[g]) ? void 0 : e.stageMaxPoints) ?? p,
            x = W(),
            { applyScroll: v } = x,
            { screenWidthRem: f } = m(),
            y = a.useCallback(() => {
                const e = Math.max(0, 193 * g + 96.5 - (0.95 * f) / 2);
                v(viewEnv.remToPx(e), { immediate: !1, reset: !1 });
            }, [g, f, v]);
        a.useEffect(() => {
            const e = setTimeout(() => y(), 300);
            return (
                engine.on('clientResized', y),
                () => {
                    (engine.off('clientResized', y), clearTimeout(e));
                }
            );
        }, [l, y]);
        const N = u === p,
            w = (e) => e === g && !N,
            A = (e) => e < g || (((e) => e === o.length - 1)(e) && N),
            P = (e) =>
                e.map((e) => ({
                    name: e.name,
                    image: q(e, $.Big),
                    value: e.value,
                    valueType: F(e.name),
                    tooltipArgs: G({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                })),
            I = o.map(({ rewards: e, stageMaxPoints: s }) => ({ bonuses: P(e), stageMaxPoints: s })),
            k = { '--sections-amount': I.length, '--rewards-wrap-width': '193rem' },
            [Q, E] = a.useState(!1);
        return (
            a.useEffect(
                () =>
                    O(() => {
                        E(!0);
                    }, qt),
                [],
            ),
            r.jsx('div', {
                className: n(Ft.base, Ft.base_container),
                children: r.jsxs('div', {
                    className: Ft.base,
                    style: k,
                    children: [
                        r.jsx('div', { className: Ft.fadeBackground }),
                        r.jsx('div', { className: n(Ft.fadeBackground, Ft.fadeBackground__out) }),
                        r.jsx(H.Horizontal.Area.Default, {
                            className: Ft.scrollWrap,
                            api: x,
                            children: r.jsxs('div', {
                                className: Ft.wrapper,
                                children: [
                                    r.jsx('div', {
                                        className: Ft.top,
                                        children: I.map(({ stageMaxPoints: e }, s) =>
                                            r.jsxs(
                                                'div',
                                                {
                                                    className: n(Ft.progress_top, w(s) && Ft.progress_top__current),
                                                    children: [
                                                        0 === s &&
                                                            r.jsxs('div', {
                                                                className: Ft.pointsMark_group,
                                                                children: [
                                                                    r.jsx('div', {
                                                                        className: t(
                                                                            Ft.pointsMark,
                                                                            !w(s) && A(s) && Ft.pointsMark__faded,
                                                                        ),
                                                                        children: '0',
                                                                    }),
                                                                    r.jsx('div', { className: Ft.divider }),
                                                                ],
                                                            }),
                                                        r.jsx('div', {
                                                            className: t(
                                                                Ft.progress_content,
                                                                A(s) && Ft.progress_content__done,
                                                            ),
                                                            children: r.jsxs('div', {
                                                                className: t(
                                                                    Ft.stage,
                                                                    A(s) && Ft.stage__done,
                                                                    w(s) && Ft.stage__current,
                                                                ),
                                                                children: [
                                                                    r.jsx('div', { className: Ft.stage_glow }),
                                                                    r.jsx('img', {
                                                                        src: R.images.white_tiger.gui.maps.icons.progression.progress.tick(),
                                                                        className: Ft.stage_img,
                                                                    }),
                                                                    w(s) &&
                                                                        r.jsxs(r.Fragment, {
                                                                            children: [
                                                                                r.jsx('div', {
                                                                                    className: t(
                                                                                        Ft.glow,
                                                                                        w(s) && Ft.glow__inProgress,
                                                                                    ),
                                                                                }),
                                                                                r.jsx(_, {
                                                                                    in: Q,
                                                                                    timeout: 5e3,
                                                                                    className: Ft.numberGlow,
                                                                                    classNames: Xt,
                                                                                    children: r.jsx('div', {}),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    w(s)
                                                                        ? r.jsxs('div', {
                                                                              className: Ft.stage_text,
                                                                              children: [
                                                                                  s + 1,
                                                                                  r.jsx(_, {
                                                                                      in: Q,
                                                                                      timeout: 5e3,
                                                                                      className: t(
                                                                                          Ft.numberInProgress,
                                                                                          Ft.numberAnimated,
                                                                                      ),
                                                                                      classNames: zt,
                                                                                      children: r.jsx('div', {
                                                                                          children: s + 1,
                                                                                      }),
                                                                                  }),
                                                                              ],
                                                                          })
                                                                        : r.jsx('div', {
                                                                              className: Ft.stage_text,
                                                                              children: s + 1,
                                                                          }),
                                                                ],
                                                            }),
                                                        }),
                                                        r.jsxs('div', {
                                                            className: Ft.pointsMark_group,
                                                            children: [
                                                                r.jsx('div', {
                                                                    className: t(
                                                                        Ft.pointsMark,
                                                                        !w(s) && A(s) && Ft.pointsMark__faded,
                                                                    ),
                                                                    children: e,
                                                                }),
                                                                r.jsx('div', { className: Ft.divider }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                s,
                                            ),
                                        ),
                                    }),
                                    r.jsx(C, {
                                        value: u,
                                        maxValue: p,
                                        deltaFrom: d,
                                        theme: j,
                                        onChangeAnimationState: Kt,
                                    }),
                                    r.jsxs('div', {
                                        className: t(Ft.bottom),
                                        children: [
                                            r.jsx('div', { className: Ft.divider_end }),
                                            I.map(({ bonuses: e }, s) =>
                                                r.jsxs(
                                                    'div',
                                                    {
                                                        className: n(
                                                            Ft.progress_bottom,
                                                            w(s) && Ft.progress_bottom__current,
                                                        ),
                                                        children: [
                                                            r.jsxs('div', {
                                                                className: t(
                                                                    Ft.progress_content,
                                                                    A(s) && Ft.progress_content__done,
                                                                ),
                                                                children: [
                                                                    w(s) &&
                                                                        r.jsx(b, {
                                                                            targetId:
                                                                                R.aliases.white_tiger.shared.ProgressionContent(
                                                                                    'resId',
                                                                                ),
                                                                            contentId:
                                                                                R.views.white_tiger.mono.lobby.tooltips.stamp_tooltip(
                                                                                    'resId',
                                                                                ),
                                                                            children: r.jsxs('div', {
                                                                                className: Ft.stamps,
                                                                                children: [
                                                                                    u,
                                                                                    r.jsxs('span', {
                                                                                        className: Ft.stamps_max,
                                                                                        children: ['/', h],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                    r.jsx('div', {
                                                                        className: Ft.rewards_group,
                                                                        children: e.map((s, a) =>
                                                                            r.jsx(
                                                                                L,
                                                                                {
                                                                                    size: $.Small,
                                                                                    className: t(
                                                                                        Ft.reward,
                                                                                        e.length > 3 &&
                                                                                            Ft.reward__compressed,
                                                                                    ),
                                                                                    classNames: { info: Ft.rewardInfo },
                                                                                    ...s,
                                                                                },
                                                                                a,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ],
                                                            }),
                                                            r.jsx('div', { className: Ft.divider_end }),
                                                        ],
                                                    },
                                                    s,
                                                ),
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            })
        );
    }),
    Yt = () => {
        const e = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.ProgressionContent('resId') }), []);
        return r.jsx($t, { options: e, children: r.jsx(Ut, {}) });
    },
    Jt = ['firstCondition', 'secondCondition'],
    Zt = (e, s) => {
        const a = [];
        if ('or' === e.conditionType || 'and' === e.conditionType)
            e.items.forEach((e) => {
                const t = K(e);
                t && a.push(...Zt(t, s));
            });
        else {
            const t = e,
                { descrData: r, titleData: o, iconKey: n, current: i, total: l, earned: d } = t,
                _ = { condition: 0 === l ? r : o, iconKey: n, lastValue: i - d, currentValue: i, maxValue: l },
                c = U(s, 0);
            (c &&
                ((_.currentValue = c.current),
                (_.lastValue = c.current - c.earned),
                (_.maxValue = c.total),
                (_.condition = 0 === c.total ? r : r || c.descrData),
                (_.iconKey = n || c.iconKey)),
                a.push(_));
        }
        return a;
    },
    er = (e, s, a) => {
        const t = {};
        let r = {},
            o = '';
        return (
            Zt(e, s).forEach(({ condition: e, lastValue: s, currentValue: a, maxValue: n, iconKey: i }, l) => {
                l > Jt.length - 1 ||
                    ((t[Jt[l]] = ((e, s) =>
                        le(e, de.left)
                            .flat()
                            .map((e, a) => (0 === a && s > 0 && (e = e.toLowerCase()), e)))(e, l)),
                    (o = i),
                    (r = { lastValue: s, currentValue: a, maxValue: n }));
            }),
            { taskConditions: [{ conditions: t, progression: { status: a, ...r } }], taskBattleIcon: o }
        );
    },
    sr = (e) => ({ ...e }),
    [ar, tr] = c()(
        ({ observableModel: s }) => {
            const a = {
                    root: s.object(),
                    harrierQuests: s.array('harrierQuests', []),
                    harrierQuestsVisited: s.array('harrierQuestsVisited', []),
                    engineerQuests: s.array('engineerQuests', []),
                    engineerQuestsVisited: s.array('engineerQuestsVisited', []),
                },
                t = e(
                    () =>
                        w(a.engineerQuests.get(), (e) => ({
                            ...e,
                            ...er(e.postBattleCondition, e.bonusCondition.items, e.status),
                            bonuses: w(e.bonuses, sr),
                            preBattleCondition: { ...e.preBattleCondition, items: w(e.preBattleCondition.items, sr) },
                            postBattleCondition: { ...e.preBattleCondition, items: w(e.preBattleCondition.items, sr) },
                            bonusCondition: { ...e.bonusCondition, items: w(e.bonusCondition.items, sr) },
                        })),
                    { equals: X },
                ),
                r = e(
                    () =>
                        w(a.harrierQuests.get(), (e) => ({
                            ...e,
                            ...er(e.postBattleCondition, e.bonusCondition.items, e.status),
                            bonuses: w(e.bonuses, sr),
                            preBattleCondition: { ...e.preBattleCondition, items: w(e.preBattleCondition.items, sr) },
                            postBattleCondition: { ...e.preBattleCondition, items: w(e.preBattleCondition.items, sr) },
                            bonusCondition: { ...e.bonusCondition, items: w(e.bonusCondition.items, sr) },
                        })),
                    { equals: X },
                ),
                o = e(() => a.root.get().activeTab),
                n = e(() => w(a.engineerQuestsVisited.get(), (e) => Boolean(e))),
                i = e(() => w(a.harrierQuestsVisited.get(), (e) => Boolean(e)));
            return {
                ...a,
                computes: {
                    getHarrierQuests: r,
                    getEngineerQuests: t,
                    getEngineerQuestsVisited: n,
                    getHarrierQuestsVisited: i,
                    getActiveTab: o,
                },
            };
        },
        ({ externalModel: e }) => ({ onSelectedTab: e.createCallback((e) => ({ tab: e }), 'onSelectedTab') }),
    );
var rr = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(rr || {}),
    or = ((e) => ((e.ENGINEER = 'ENGINEER'), (e.HARRIER = 'HARRIER'), e))(or || {});
const nr = {
        root: 'DailyQuestCard_root_c0a1da38',
        'header-h80': 'DailyQuestCard_header-h80_d86e12e',
        'header-h56': 'DailyQuestCard_header-h56_22290f81',
        'header-h40': 'DailyQuestCard_header-h40_bb6b08da',
        'header-h32': 'DailyQuestCard_header-h32_57089dae',
        'header-h28': 'DailyQuestCard_header-h28_e4f56fd4',
        'header-h26': 'DailyQuestCard_header-h26_303ab351',
        'header-h24': 'DailyQuestCard_header-h24_b5a707fd',
        'header-h22': 'DailyQuestCard_header-h22_25fcf34c',
        'header-h20': 'DailyQuestCard_header-h20_dba80a10',
        'header-h18': 'DailyQuestCard_header-h18_39afb3b3',
        'header-h16': 'DailyQuestCard_header-h16_2e50b7b',
        'paragraph-p20': 'DailyQuestCard_paragraph-p20_4ccc955a',
        'paragraph-p18': 'DailyQuestCard_paragraph-p18_39afb3b3',
        'paragraph-p16': 'DailyQuestCard_paragraph-p16_2e50b7b',
        rewardImage: 'DailyQuestCard_rewardImage_8833fdf',
        dailyQuests: 'DailyQuestCard_dailyQuests_2c968a83',
        dailyQuest: 'DailyQuestCard_dailyQuest_89c890e6',
        dailyQuest__incomplete: 'DailyQuestCard_dailyQuest__incomplete_fed71460',
        dailyQuest__completed: 'DailyQuestCard_dailyQuest__completed_1cc8c953',
        dailyQuest_description: 'DailyQuestCard_dailyQuest_description_8bd8fa25',
        dailyQuest_bottomText: 'DailyQuestCard_dailyQuest_bottomText_38bcb9ee',
        dailyQuest_top_left: 'DailyQuestCard_dailyQuest_top_left_90ef6e73',
        dailyQuest_top_right: 'DailyQuestCard_dailyQuest_top_right_50f27451',
        dailyQuest_top: 'DailyQuestCard_dailyQuest_top_a6f096fc',
        dailyQuest_top_content: 'DailyQuestCard_dailyQuest_top_content_1959e0ed',
        dailyQuest_icon: 'DailyQuestCard_dailyQuest_icon_830b2ec3',
        dailyQuest_centerBlock: 'DailyQuestCard_dailyQuest_centerBlock_1bbd0081',
        dailyQuest_points: 'DailyQuestCard_dailyQuest_points_a134c4b7',
        dailyQuest_accent: 'DailyQuestCard_dailyQuest_accent_816c4a09',
        dailyQuest_progress: 'DailyQuestCard_dailyQuest_progress_e47c403b',
        dailyQuest_rewards: 'DailyQuestCard_dailyQuest_rewards_5a4aa745',
        dailyQuest_reward: 'DailyQuestCard_dailyQuest_reward_eff2518f',
        rewardInfo: 'DailyQuestCard_rewardInfo_5e9fd40e',
        dailyQuest_bottomText__isCompleted: 'DailyQuestCard_dailyQuest_bottomText__isCompleted_c0a1da38',
        dailyQuest_bottomText_completed: 'DailyQuestCard_dailyQuest_bottomText_completed_8eecbe6e',
        timer: 'DailyQuestCard_timer_fde3518a',
        timer_content: 'DailyQuestCard_timer_content_786ca211',
        timer_highlight: 'DailyQuestCard_timer_highlight_48a8eee9',
        timer_highlight__rotated: 'DailyQuestCard_timer_highlight__rotated_48227631',
    },
    ir = ({
        icon: e,
        isComplete: s,
        maxMissions: o,
        completedMissions: n,
        isVisited: i,
        rewards: l,
        taskConditions: d,
        description: _,
    }) => {
        const [c, p] = a.useState(!1),
            m = d.find((e) => Boolean(e.progression.maxValue)),
            u = !!m && m.progression.maxValue !== m.progression.currentValue;
        a.useEffect(() => {
            p(!u);
        }, [u]);
        const g = w(l, V).map((e) => ({
            name: e.name,
            image: q(e, $.Small),
            value: e.value,
            valueType: F(e.name),
            tooltipArgs: G({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
        }));
        const h =
                _ ||
                d.map(({ conditions: e, progression: s }, a) =>
                    r.jsx(
                        Y,
                        {
                            text: R.strings.battle_royale_progression.progressionView.battleQuests.$dyn(
                                'secondCondition' in e ? 'multiConditions' : 'oneCondition',
                            ),
                            classMix: t(nr.text, nr[`text__${s.status}`]),
                            binding: e,
                        },
                        a,
                    ),
                ),
            b = s ? R.images.white_tiger.gui.maps.icons.progression.dailyMissions.done() : e;
        return r.jsxs('div', {
            className: t(
                nr.dailyQuest,
                s ? nr.dailyQuest__completed : nr.dailyQuest__incomplete,
                u && nr.dailyQuest__progressBarAnimation,
                c && nr.dailyQuest__progressBarAnimationComplete,
                i && nr.dailyQuest__visited,
            ),
            children: [
                r.jsxs('div', {
                    className: nr.dailyQuest_top,
                    children: [
                        r.jsx('div', { className: nr.dailyQuest_top_left }),
                        r.jsx('div', {
                            className: nr.dailyQuest_top_content,
                            children: r.jsx('img', { src: b, className: nr.dailyQuest_icon }),
                        }),
                        r.jsx('div', { className: nr.dailyQuest_top_right }),
                    ],
                }),
                r.jsx('div', { className: nr.dailyQuest_description, children: h }),
                r.jsx('div', {
                    className: nr.dailyQuest_centerBlock,
                    children:
                        !s &&
                        m &&
                        r.jsxs(r.Fragment, {
                            children: [
                                r.jsx(Y, {
                                    classMix: nr.dailyQuest_points,
                                    binding: {
                                        currentPoints: r.jsx('span', {
                                            className: nr.dailyQuest_accent,
                                            children: m.progression.currentValue,
                                        }),
                                        maxPoints: m.progression.maxValue,
                                    },
                                    text: R.strings.white_tiger_lobby.progression.pointsFormat(),
                                }),
                                r.jsx('div', {
                                    className: nr.dailyQuest_progress,
                                    children:
                                        m &&
                                        r.jsx('div', {
                                            className: nr.dailyQuest_progress,
                                            children: r.jsx(C, {
                                                size: y.Small,
                                                theme: j,
                                                value: m.progression.currentValue,
                                                deltaFrom: m.progression.lastValue,
                                                maxValue: m.progression.maxValue,
                                                onComplete: () => p(!0),
                                            }),
                                        }),
                                }),
                            ],
                        }),
                }),
                r.jsx('div', {
                    className: nr.dailyQuest_rewards,
                    children:
                        l &&
                        g.map((e, s) =>
                            r.jsx(
                                L,
                                {
                                    className: nr.dailyQuest_reward,
                                    classNames: { image: nr.rewardImage, info: nr.rewardInfo },
                                    size: $.Small,
                                    ...e,
                                },
                                s,
                            ),
                        ),
                }),
                Boolean(o) &&
                    r.jsxs('div', {
                        className: t(nr.dailyQuest_bottomText, o === n && nr.dailyQuest_bottomText__isCompleted),
                        children: [
                            R.strings.white_tiger_lobby.progression.completed(),
                            r.jsx('span', { className: nr.dailyQuest_bottomText_completed, children: n }),
                            '/',
                            o,
                        ],
                    }),
            ],
        });
    },
    lr = 'ProgressionQuestsApp_150a567a',
    dr = 'ProgressionQuestsApp_container_8ae32a69',
    _r = 'ProgressionQuestsApp_container_top_920310e1',
    cr = 'ProgressionQuestsApp_container_top_left_51404202',
    pr = 'ProgressionQuestsApp_container_top_right_b9e8b007',
    mr = 'ProgressionQuestsApp_tabs_10e6ad21',
    ur = 'ProgressionQuestsApp_tab_a0808371',
    gr = 'ProgressionQuestsApp_tab__active_483d566e',
    hr = 'ProgressionQuestsApp_tab_shadow_2ccd4c36',
    br = 'ProgressionQuestsApp_tab_light_25c323bd',
    xr = 'ProgressionQuestsApp_tab__inactive_4d4e9238',
    vr = 'ProgressionQuestsApp_tab_title_d86b71bd',
    fr = 'ProgressionQuestsApp_tab_texture_beea1798',
    Cr = 'ProgressionQuestsApp_tab_counter_28e1a2ad',
    jr = 'ProgressionQuestsApp_tab_counter_total_52eb5778',
    yr = 'ProgressionQuestsApp_dailyQuests_1f2d5208',
    Nr = 'ProgressionQuestsApp_timer_dfa1e51b',
    wr = 'ProgressionQuestsApp_timer_content_c827998e',
    Ar = 'ProgressionQuestsApp_timer_highlight_e839f85e',
    Pr = 'ProgressionQuestsApp_timer_highlight__rotated_2f31d623',
    Ir = { [or.HARRIER]: 'getHarrierQuestsVisited', [or.ENGINEER]: 'getEngineerQuestsVisited' },
    kr = { [or.HARRIER]: 'getHarrierQuests', [or.ENGINEER]: 'getEngineerQuests' },
    Qr = (e, s) => e + (s.status === rr.Done ? 1 : 0),
    Er = s(() => {
        const { model: e, controls: s } = tr(),
            a = e.computes.getActiveTab(),
            { onSelectedTab: o } = s,
            { updateCountdown: n } = e.root.get(),
            i = e.computes[kr[a]](),
            l = e.computes[Ir[a]](),
            d = e.computes.getHarrierQuests(),
            _ = e.computes.getEngineerQuests(),
            c = d.reduce(Qr, 0),
            p = _.reduce(Qr, 0),
            m = a === or.HARRIER,
            u = a === or.ENGINEER,
            g = t(ur, m ? gr : xr),
            b = t(ur, u ? gr : xr),
            x = () => {
                h.highlight();
            };
        return r.jsx('div', {
            className: lr,
            children: r.jsxs('div', {
                className: dr,
                children: [
                    r.jsxs('div', {
                        className: _r,
                        children: [
                            r.jsx('div', { className: cr }),
                            r.jsxs('div', {
                                className: mr,
                                children: [
                                    r.jsxs('div', {
                                        className: g,
                                        onMouseEnter: x,
                                        onClick: () => {
                                            (o(or.HARRIER), h.click());
                                        },
                                        children: [
                                            r.jsx('div', { className: br }),
                                            r.jsx('div', { className: fr }),
                                            r.jsx('div', { className: hr }),
                                            r.jsx('div', {
                                                className: vr,
                                                children: R.strings.white_tiger_lobby.progression.tab.harrier(),
                                            }),
                                            r.jsxs('div', {
                                                className: Cr,
                                                children: [
                                                    c,
                                                    r.jsxs('span', { className: jr, children: ['/', d.length] }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.jsxs('div', {
                                        className: b,
                                        onMouseEnter: x,
                                        onClick: () => {
                                            (o(or.ENGINEER), h.click());
                                        },
                                        children: [
                                            r.jsx('div', { className: br }),
                                            r.jsx('div', { className: fr }),
                                            r.jsx('div', { className: hr }),
                                            r.jsx('div', {
                                                className: vr,
                                                children: R.strings.white_tiger_lobby.progression.tab.engineer(),
                                            }),
                                            r.jsxs('div', {
                                                className: Cr,
                                                children: [
                                                    p,
                                                    r.jsxs('span', { className: jr, children: ['/', _.length] }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsx('div', { className: pr }),
                        ],
                    }),
                    r.jsx('div', {
                        className: yr,
                        children: i.map((e, s) =>
                            r.jsx(
                                ir,
                                {
                                    isComplete: e.status === rr.Done,
                                    isVisited: l[s] ?? !1,
                                    maxMissions: u ? (e.maxMissions ?? 1) : 0,
                                    completedMissions: (u && e.completedMissions) || 0,
                                    rewards: e.bonuses,
                                    description: e.description,
                                    icon: R.images.white_tiger.gui.maps.icons.postbattle.$dyn(
                                        'c_64_' + e.icon + '_silver',
                                    ),
                                    taskConditions: e.taskConditions,
                                },
                                s,
                            ),
                        ),
                    }),
                    m &&
                        r.jsxs('div', {
                            className: Nr,
                            children: [
                                r.jsx('img', {
                                    className: Ar,
                                    src: R.images.white_tiger.gui.maps.icons.progression.navigation.timer_highlight(),
                                    alt: '',
                                }),
                                r.jsx(Y, {
                                    classMix: wr,
                                    binding: { countdown: r.jsx(J, { duration: n }) },
                                    text: R.strings.white_tiger_lobby.progression.timer(),
                                }),
                                r.jsx('img', {
                                    className: t(Ar, Pr),
                                    src: R.images.white_tiger.gui.maps.icons.progression.navigation.timer_highlight(),
                                    alt: '',
                                }),
                            ],
                        }),
                ],
            }),
        });
    }),
    Mr = () => {
        const e = a.useMemo(() => ({ rootId: R.aliases.white_tiger.shared.ProgressionQuests('resId') }), []);
        return r.jsx(ar, { options: e, children: r.jsx(Er, {}) });
    },
    Tr = 'ProgressionScreen_heading_a17a7e85',
    Rr = 'ProgressionScreen_subheading_a43398cb',
    Br = 'ProgressionScreen_4a2f1b8a',
    Sr = 'ProgressionScreen_bgDecoration_topRight_e114c511',
    Dr = 'ProgressionScreen_fullscreen_6c50def5',
    Vr = 'ProgressionScreen_infoButton_8a2eb0b1',
    Wr = 'ProgressionScreen_content_e6375fa1',
    Or = s(() => {
        const { controls: e } = Ha(),
            s = f();
        return (
            S(function () {
                s.push(ea.root);
            }),
            a.useEffect(() => {
                e.viewLoaded();
            }, [e]),
            r.jsxs('div', {
                className: Br,
                children: [
                    r.jsx('div', { className: Sr }),
                    r.jsxs('div', {
                        className: Dr,
                        children: [
                            r.jsx('div', {
                                className: Vr,
                                children: r.jsx(D, {
                                    caption: R.strings.white_tiger_lobby.navigation.information(),
                                    type: 'info',
                                    onClick: e.openInfo,
                                }),
                            }),
                            r.jsx('div', { className: Tr, children: R.strings.white_tiger_lobby.progression.title() }),
                            r.jsx('div', {
                                className: Rr,
                                children: R.strings.white_tiger_lobby.progression.subtitle(),
                            }),
                            r.jsxs('div', { className: Wr, children: [r.jsx(Mr, {}), r.jsx(Yt, {})] }),
                        ],
                    }),
                ],
            })
        );
    }),
    Hr = 'Page_89be34b7',
    Lr = s(function () {
        return r.jsx('div', {
            className: Hr,
            children: r.jsxs(Z, {
                children: [
                    r.jsx(ee, { path: ea.root, component: Lt, exact: !0 }),
                    r.jsx(ee, { path: ea.progression, component: Or }),
                ],
            }),
        });
    }),
    $r = 'App_54c70e4';
function Gr() {
    return r.jsx('div', { className: $r, children: r.jsx(Lr, {}) });
}
g.resolve('aliases');
re(new se().add(ae).addWithProps(te, { context: 'model.router' }).add(Oa).render(r.jsx(Gr, {})))
    .then(() => oe(document.getElementById('root')))
    .then(() => ne());
