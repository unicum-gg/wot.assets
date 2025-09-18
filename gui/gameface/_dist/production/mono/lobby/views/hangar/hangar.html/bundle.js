import {
    R as e,
    r as s,
    j as a,
    m as t,
    n as i,
    s as o,
    p as r,
    q as n,
    f as l,
    w as c,
    x as d,
    y as _,
} from '../../../chunks/vendor.js';
import {
    p as m,
    i as u,
    b as p,
    al as b,
    aa as h,
    am as f,
    c as g,
    S as v,
    C as x,
    B as y,
    J as j,
    E as N,
    m as k,
    an as C,
    ao as I,
    ap as w,
    j as S,
    T as A,
    l as B,
    aq as M,
    ar as P,
    s as T,
    as as E,
    at as D,
    N as L,
    e as H,
    q as F,
    au as $,
    ac as G,
    a8 as V,
    av as W,
    a6 as z,
    aw as O,
    ak as U,
    Y as q,
    Z as J,
    ab as K,
    A as Q,
    ax as X,
    ad as Z,
    a as Y,
    a1 as ee,
    ay as se,
    az as ae,
    aA as te,
    aB as ie,
    aC as oe,
    aD as re,
    aE as ne,
    aF as le,
    n as ce,
    aj as de,
    aG as _e,
    aH as me,
    P as ue,
    Q as pe,
    R as be,
    U as he,
} from '../../../chunks/lib.js';
import { T as fe } from '../../../chunks/text.module.js';
import { T as ge } from '../../../chunks/text_simple.js';
import { V as ve } from '../../../chunks/video_background.js';
import { f as xe } from '../../../chunks/string-utils.js';
import { K as ye, a as je } from '../../../chunks/key_icon.js';
import { D as Ne, c as ke, d as Ce, e as Ie, A as we, f as Se, g as Re, h as Ae } from '../../../chunks/sound.js';
import { G as Be, u as Me, W as Pe, Q as Te, a as Ee } from '../../../chunks/index.js';
import { T as De } from '../../../chunks/text.js';
import { d as Le, g as He, a as Fe, c as $e, p as Ge } from '../../../chunks/utils2.js';
import { A as Ve } from '../../../chunks/meta_view_model.js';
import { K as We } from '../../../chunks/index2.js';
import { m as ze, l as Oe, P as Ue, M as qe } from '../../../chunks/ammunition_panel.js';
import '../../../chunks/number_anim.js';
const Je = {
    root: 'Button_root_6bcdc8c',
    base: 'Button_2521432',
    base__extraSmall: 'Button_base__extraSmall_d41b9c50',
    base__small: 'Button_base__small_512088e3',
    base__medium: 'Button_base__medium_244d07ce',
    base__large: 'Button_base__large_12d4bb07',
    base__extraLarge: 'Button_base__extraLarge_9e2b0c8a',
    base__disabled: 'Button_base__disabled_b713e04a',
    base__active: 'Button_base__active_61ecab03',
    base__hover: 'Button_base__hover_a5c1af21',
    border: 'Button_border_5b5d1d73',
    base__secondary: 'Button_base__secondary_6bcdc8c',
    base__primary: 'Button_base__primary_6bcdc8c',
    shadow: 'Button_shadow_ca8342f6',
    content: 'Button_content_4f56c8a1',
    caption: 'Button_caption_9ffe1b2f',
    primaryCaption: 'Button_primaryCaption_f59ee9c7',
    hintAnim1: 'Button_hintAnim1_89f8e8fb',
    borderWaveAnimation: 'Button_borderWaveAnimation_6bcdc8c',
    hintAnim2: 'Button_hintAnim2_35e2decf',
    hintAnim3: 'Button_hintAnim3_91bbc602',
    hintAnim4: 'Button_hintAnim4_41b4791c',
    hintAnim5: 'Button_hintAnim5_3b49d40c',
};
var Ke = ((e) => ((e.Primary = 'primary'), (e.Secondary = 'secondary'), e))(Ke || {}),
    Qe = ((e) => (
        (e.ExtraSmall = 'extraSmall'),
        (e.Small = 'small'),
        (e.Medium = 'medium'),
        (e.Large = 'large'),
        (e.ExtraLarge = 'extraLarge'),
        e
    ))(Qe || {});
const Xe = e.memo(function ({
        caption: e,
        type: i,
        size: o = 'small',
        isDisable: r = !1,
        showHintAnim: n = !1,
        className: l,
        onClick: c,
    }) {
        const [d, _] = s.useState(!1),
            [u, p] = s.useState(!1);
        return a.jsxs('div', {
            className: t(
                Je.base,
                Je[`base__${i}`],
                Je[`base__${o}`],
                r && Je.base__disabled,
                d && Je.base__hover,
                u && Je.base__active,
                l,
            ),
            onClick: () => {
                !r && c && (m.click(), c());
            },
            onMouseEnter: () => {
                !r && c && (m.highlight(), _(!0));
            },
            onMouseLeave: () => {
                (_(!1), p(!1));
            },
            onMouseDown: (e) => {
                0 === e.button && p(!0);
            },
            onMouseUp: () => p(!1),
            lang: R.strings.settings.LANGUAGE_CODE(),
            children: [
                a.jsx('div', { className: Je.border }),
                a.jsx('div', { className: Je.shadow }),
                n &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsx('div', { className: Je.hintAnim1 }),
                            a.jsx('div', { className: Je.hintAnim2 }),
                            a.jsx('div', { className: Je.hintAnim3 }),
                            a.jsx('div', { className: Je.hintAnim4 }),
                            a.jsx('div', { className: Je.hintAnim5 }),
                        ],
                    }),
                a.jsx('div', {
                    className: Je.content,
                    lang: R.strings.settings.LANGUAGE_CODE(),
                    children:
                        'secondary' === i
                            ? a.jsx(ge, { className: Je.caption, text: e, type: fe.LightRed, shadow: !0 })
                            : a.jsx('div', { className: Je.primaryCaption, children: e }),
                }),
            ],
        });
    }),
    Ze = {
        root: 'SliderButton_root_52f09e2c',
        base: 'SliderButton_11e8bf22',
        base__left: 'SliderButton_base__left_2805403d',
        base__right: 'SliderButton_base__right_e0500a76',
        base__disabled: 'SliderButton_base__disabled_52f09e2c',
        base__hover: 'SliderButton_base__hover_11246cdb',
        hover: 'SliderButton_hover_98283545',
        base__active: 'SliderButton_base__active_52f09e2c',
        active: 'SliderButton_active_ba03d1c4',
    };
var Ye = ((e) => ((e.Left = 'left'), (e.Right = 'right'), e))(Ye || {});
const es = e.memo(function ({ type: e, className: i, isDisabled: o = !1, onClick: r }) {
    const [n, l] = s.useState(!1),
        [c, d] = s.useState(!1);
    return a.jsxs('div', {
        className: t(Ze.base, Ze[`base__${e}`], c && Ze.base__hover, n && Ze.base__active, o && Ze.base__disabled, i),
        onMouseEnter: () => {
            o || (m.highlight(), d(!0));
        },
        onMouseLeave: () => {
            (d(!1), l(!1));
        },
        onClick: () => {
            o || (m.click(), r());
        },
        onMouseUp: () => l(!1),
        onMouseDown: (e) => {
            0 === e.button && l(!0);
        },
        children: [!o && a.jsx('div', { className: Ze.hover }), !o && a.jsx('div', { className: Ze.active })],
    });
});
var ss = ((e) => (
    (e.MouseDown = 'mouseDown'),
    (e.Dragging = 'dragging'),
    (e.End = 'scrollingToEnd'),
    (e.Idle = 'idle'),
    e
))(ss || {});
const as = { type: 'idle' };
var ts = ((e) => (
    (e.Default = 'default'),
    (e.Locked = 'locked'),
    (e.InBattle = 'inBattle'),
    (e.InPlatoon = 'inPlatoon'),
    (e.CrewIncomplete = 'crewIncomplete'),
    (e.Rented = 'rented'),
    (e.Suspended = 'suspended'),
    (e.Repair = 'repair'),
    (e.UntrainedCrew = 'untrainedCrew'),
    (e.LowEfficiency = 'lowEfficiency'),
    (e.Unsuitable = 'unsuitable'),
    e
))(ts || {});
const is = ['mediumTank', 'heavyTank', 'AT_SPG'],
    [os, rs] = u()(
        ({ observableModel: e }) => {
            const s = { root: e.object(), filter: e.object('filter'), orderedNation: e.array('orderedNations', []) },
                a = i(() => {
                    const e = s.root.get().vehicles;
                    return '' === e ? [] : JSON.parse(e);
                }),
                t = i(
                    () =>
                        p(a(), (e) => {
                            const a = s.filter.get();
                            return (
                                (!a.isFavorite || e.isFavorite) &&
                                ((!a.isPremium && !a.isElite) ||
                                    (a.isPremium && e.isPremium) ||
                                    (a.isElite && e.isElite && !e.isPremium)) &&
                                (0 === o().length || n(e.nation)) &&
                                (0 === r().length || l(e.type)) &&
                                (!a.isRent || e.isRent) &&
                                ('' === a.name || e.name.toLowerCase().indexOf(a.name.toLowerCase()) > -1)
                            );
                        }).sort((e, a) => {
                            const t = s.orderedNation.get(),
                                i = b(t, (s) => s === e.nation) || -1,
                                o = b(t, (e) => e === a.nation) || -1;
                            return (
                                Number(a.isFavorite) - Number(e.isFavorite) ||
                                i - o ||
                                is.indexOf(e.type) - is.indexOf(a.type) ||
                                e.name.localeCompare(a.name)
                            );
                        }),
                    { equals: g },
                ),
                o = i(() => ('' === s.filter.get().nations ? [] : JSON.parse(s.filter.get().nations))),
                r = i(() => ('' === s.filter.get().types ? [] : JSON.parse(s.filter.get().types))),
                n = i((e) => 0 !== o().length && h(o(), e)),
                l = i((e) => 0 !== r().length && h(r(), e)),
                c = i(() => a().length),
                d = i(() => t().length),
                _ = i(() => !f(a(), (e) => e.vehicleState !== ts.InPlatoon)),
                m = i(() => {
                    const e = s.root.get().vehicleDailyCompleted;
                    if ('' === e) return;
                    const a = JSON.parse(e);
                    a.extend
                        ? t().map((e) => {
                              a.intCDs.indexOf(e.intCD) > -1 && (e.hasDaily = !1);
                          })
                        : t().map((e) => {
                              a.intCDs.indexOf(e.intCD) < 0 && (e.hasDaily = !0);
                          });
                });
            return {
                ...s,
                computes: {
                    carouselLocked: _,
                    vehicles: a,
                    filteredVehicles: t,
                    allVehicleLenght: c,
                    filteredVehicleLenght: d,
                    checkNations: n,
                    checkTypes: l,
                    prepareDaily: m,
                },
            };
        },
        ({ externalModel: e }) => ({
            changeVehicle: e.createCallback((e) => ({ invID: e }), 'onChangeVehicle'),
            filter: e.createCallback((e, s) => ({ key: e, value: s }), 'filter.onFiltered'),
            resetFilter: e.createCallbackNoArgs('filter.onReset'),
        }),
    );
var ns = ((e) => (
    (e.IsFavorite = 'isFavorite'),
    (e.IsPremium = 'isPremium'),
    (e.IsRent = 'isRent'),
    (e.IsElite = 'isElite'),
    (e.VehicleType = 'vehicleType'),
    (e.Nation = 'nation'),
    (e.SearchName = 'searchName'),
    e
))(ns || {});
const ls = {
    root: 'Indicator_root_93e8cc0c',
    base: 'Indicator_6b36c4df',
    indicatorDefault: 'Indicator_indicatorDefault_e6da59d3',
    base__default: 'Indicator_base__default_93e8cc0c',
    indicatorHover: 'Indicator_indicatorHover_55838c5',
    base__hover: 'Indicator_base__hover_93e8cc0c',
    indicatorSelected: 'Indicator_indicatorSelected_b690445d',
    base__selected: 'Indicator_base__selected_93e8cc0c',
    indicatorSelectedHover: 'Indicator_indicatorSelectedHover_ca4d9b60',
    base__selectedHover: 'Indicator_base__selectedHover_93e8cc0c',
};
var cs = ((e) => (
    (e.Default = 'default'),
    (e.Hover = 'hover'),
    (e.Selected = 'selected'),
    (e.SelectedHover = 'selectedHover'),
    e
))(cs || {});
function ds({ type: e, className: s }) {
    return a.jsxs(
        'div',
        {
            className: t(ls.base, ls[`base__${e}`], s),
            children: [
                a.jsx('div', { className: ls.indicatorDefault }),
                a.jsx('div', { className: ls.indicatorHover }),
                a.jsx('div', { className: ls.indicatorSelected }),
                a.jsx('div', { className: ls.indicatorSelectedHover }),
            ],
        },
        e,
    );
}
const _s = {
        root: 'FilterButton_root_2f69d2c9',
        base: 'FilterButton_a0965125',
        base__default: 'FilterButton_base__default_3463d172',
        base__hover: 'FilterButton_base__hover_c887d9e9',
        base__selected: 'FilterButton_base__selected_94ffd90f',
        base__selectedHover: 'FilterButton_base__selectedHover_641387aa',
        hover: 'FilterButton_hover_c5b468db',
        children: 'FilterButton_children_1ba09989',
        indicator: 'FilterButton_indicator_39c1761c',
        shadow: 'FilterButton_shadow_20013b77',
    },
    ms = (e, s, a) => (e ? cs.Selected : s ? (a ? cs.SelectedHover : cs.Selected) : a ? cs.Hover : cs.Default);
function us({
    children: e,
    tooltipHeader: i = '',
    tooltipBody: o = '',
    selected: r = !1,
    hideIndicator: n = !1,
    className: l,
    onClick: c,
}) {
    const [d, _] = s.useState(!1),
        [u, p] = s.useState(!1);
    return a.jsx(v, {
        isEnabled: '' !== i || '' !== o,
        header: i,
        body: o,
        children: a.jsxs('div', {
            className: t(_s.base, _s[`base__${ms(u, r, d)}`], l),
            onMouseEnter: () => {
                (m.highlight(), _(!0));
            },
            onMouseLeave: () => {
                (_(!1), p(!1));
            },
            onClick: () => {
                (m.click(), c(!r));
            },
            onMouseDown: (e) => {
                0 === e.button && p(!0);
            },
            onMouseUp: () => p(!1),
            children: [
                a.jsx('div', { className: _s.hover }),
                a.jsx('div', { className: _s.children, children: e }),
                !n && a.jsx(ds, { className: _s.indicator, type: ms(u, r, d) }),
                a.jsx('div', { className: _s.shadow }),
            ],
        }),
    });
}
const ps = 'ToggleButton_6e2ed19f',
    bs = 'ToggleButton_overlay_8bf98e0f',
    hs = 'ToggleButton_button_114fd13e',
    fs = 'ToggleButton_base__active_a46cdd59',
    gs = 'ToggleButton_indicator_76e668c4',
    vs = s.memo(function ({ active: e, className: s, children: i, size: o = j.small, ...r }) {
        return a.jsxs(
            'div',
            {
                className: t(ps, s, e && fs),
                children: [
                    a.jsx(x, { ...r, mixClass: hs, type: y.secondary, size: o, children: i }),
                    a.jsx('div', { className: bs }),
                    a.jsx('div', { className: gs }),
                ],
            },
            `${e}`,
        );
    }),
    xs = 'FilterPopover_3d7ddee0',
    ys = 'FilterPopover_bg_22c33bc4',
    js = 'FilterPopover_content_bc7eb6da',
    Ns = 'FilterPopover_arrow_8f0f500c',
    ks = 'FilterPopover_closeBtn_b6a3ca9f',
    Cs = 'FilterPopover_title_8902dada',
    Is = 'FilterPopover_header_19fe878b',
    ws = 'FilterPopover_divider_7f8a778f',
    Ss = 'FilterPopover_divider__top_cc61e5da',
    Rs = 'FilterPopover_divider__bottom_d8ed15c5',
    As = 'FilterPopover_filterBlock_d8b3d23d',
    Bs = 'FilterPopover_name_6772302f',
    Ms = 'FilterPopover_filters_251ac9e0',
    Ps = 'FilterPopover_filterItem_b20b8319',
    Ts = 'FilterPopover_flag_84bbdda2',
    Es = 'FilterPopover_flag__active_29db43f9',
    Ds = 'FilterPopover_vehType_71318764',
    Ls = 'FilterPopover_rent_7ec89a94',
    Hs = 'FilterPopover_favorite_6550bd70',
    Fs = 'FilterPopover_premium_145f015d',
    $s = 'FilterPopover_elite_65108a5e',
    Gs = 'FilterPopover_search_7415dda',
    Vs = 'FilterPopover_searchInput_21feb297',
    Ws = o(({ className: e, onClose: i }) => {
        const { model: o, controls: r } = rs();
        s.useEffect(() => {
            const e = () => {};
            return (
                document.addEventListener('click', e),
                () => {
                    document.removeEventListener('click', e);
                }
            );
        }, [i]);
        return a.jsx('div', {
            className: t(xs, e),
            children: a.jsxs('div', {
                className: ys,
                children: [
                    a.jsxs('div', {
                        className: js,
                        onClick: (e) => {
                            (e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation());
                        },
                        children: [
                            a.jsx(v, {
                                body: R.strings.dialogs.common.error.cancel(),
                                children: a.jsx('div', { className: ks, onClick: i, onMouseEnter: m.highlight }),
                            }),
                            a.jsx('div', {
                                className: Cs,
                                children: R.strings.last_stand_lobby.carousel.popover.title(),
                            }),
                            a.jsx(N, {
                                text: R.strings.last_stand_lobby.carousel.popover.header(),
                                classMix: Is,
                                binding: {
                                    filteredCount: o.computes.filteredVehicleLenght(),
                                    allCount: o.computes.allVehicleLenght(),
                                },
                            }),
                            a.jsx('div', { className: t(ws, Ss) }),
                            a.jsxs('div', {
                                className: As,
                                children: [
                                    a.jsx('div', {
                                        className: Bs,
                                        children: R.strings.last_stand_lobby.carousel.popover.type(),
                                    }),
                                    a.jsx('div', {
                                        className: Ms,
                                        children: is.map((e) =>
                                            a.jsx(
                                                v,
                                                {
                                                    header: R.strings.menu.carousel_tank_filter.$dyn(e),
                                                    body: R.strings.last_stand_lobby.carousel.popover.typeBody(),
                                                    children: a.jsx(vs, {
                                                        className: Ps,
                                                        active: o.computes.checkTypes(e),
                                                        onClick: () => r.filter(ns.VehicleType, e),
                                                        children: a.jsx('div', {
                                                            className: Ds,
                                                            style: {
                                                                backgroundImage: `url('R.images.gui.maps.icons.filters.tanks.${e}')`,
                                                            },
                                                        }),
                                                    }),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                className: As,
                                children: [
                                    a.jsx('div', {
                                        className: Bs,
                                        children: R.strings.last_stand_lobby.carousel.popover.nation(),
                                    }),
                                    a.jsx('div', {
                                        className: Ms,
                                        children: k(o.orderedNation.get(), (e) =>
                                            a.jsx(
                                                v,
                                                {
                                                    header: R.strings.menu.nations.$dyn(e),
                                                    body: R.strings.last_stand_lobby.carousel.popover.nationBody(),
                                                    children: a.jsx(vs, {
                                                        className: Ps,
                                                        active: o.computes.checkNations(e),
                                                        onClick: () => r.filter(ns.Nation, e),
                                                        children: a.jsx('div', {
                                                            className: t(Ts, o.computes.checkNations(e) && Es),
                                                            style: {
                                                                backgroundImage: `url('R.images.gui.maps.icons.filters.nations.${e}')`,
                                                            },
                                                        }),
                                                    }),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                className: As,
                                children: [
                                    a.jsx('div', {
                                        className: Bs,
                                        children: R.strings.last_stand_lobby.carousel.popover.special(),
                                    }),
                                    a.jsxs('div', {
                                        className: Ms,
                                        children: [
                                            a.jsx(v, {
                                                header: R.strings.tank_carousel_filter.tooltip.rented.header(),
                                                body: R.strings.tank_carousel_filter.tooltip.rented.body(),
                                                children: a.jsx(vs, {
                                                    className: Ps,
                                                    active: o.filter.get().isRent,
                                                    onClick: () => r.filter(ns.IsRent, !o.filter.get().isRent),
                                                    children: a.jsx('div', { className: Ls }),
                                                }),
                                            }),
                                            a.jsx(v, {
                                                header: R.strings.last_stand_lobby.carousel.primary.tooltipHeader(),
                                                body: R.strings.last_stand_lobby.carousel.primary.tooltipBody(),
                                                children: a.jsx(vs, {
                                                    className: Ps,
                                                    active: o.filter.get().isFavorite,
                                                    onClick: () => r.filter(ns.IsFavorite, !o.filter.get().isFavorite),
                                                    children: a.jsx('div', { className: Hs }),
                                                }),
                                            }),
                                            a.jsx(v, {
                                                header: R.strings.last_stand_lobby.carousel.premium.tooltipHeader(),
                                                body: R.strings.last_stand_lobby.carousel.premium.tooltipBody(),
                                                children: a.jsx(vs, {
                                                    className: Ps,
                                                    active: o.filter.get().isPremium,
                                                    onClick: () => r.filter(ns.IsPremium, !o.filter.get().isPremium),
                                                    children: a.jsx('div', { className: Fs }),
                                                }),
                                            }),
                                            a.jsx(v, {
                                                header: R.strings.tank_carousel_filter.tooltip.elite.header(),
                                                body: R.strings.tank_carousel_filter.tooltip.elite.body(),
                                                children: a.jsx(vs, {
                                                    className: Ps,
                                                    active: o.filter.get().isElite,
                                                    onClick: () => r.filter(ns.IsElite, !o.filter.get().isElite),
                                                    children: a.jsx('div', { className: $s }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            a.jsx('div', { className: t(ws, Rs) }),
                            a.jsx('div', {
                                className: Gs,
                                children: a.jsx(C, {
                                    size: I.Medium,
                                    type: w.Search,
                                    onChange: (e) => r.filter(ns.SearchName, e),
                                    value: o.filter.get().name,
                                    options: { maxLength: 50, debounceTime: 500, isPermanentHelper: !0 },
                                    placeholder: R.strings.last_stand_lobby.carousel.popover.search(),
                                    controlClassMix: Vs,
                                    tooltipArgs: {
                                        header: R.strings.tank_carousel_filter.tooltip.searchInput.header(),
                                        body: xe(R.strings.tank_carousel_filter.tooltip.searchInput.body(), {
                                            count: 50,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
                    a.jsx('div', { className: Ns }),
                ],
            }),
        });
    }),
    zs = 'CloseButton_34871a36',
    Os = 'CloseButton_base__hover_d48b0d77',
    Us = 'CloseButton_default_26d9ff15',
    qs = 'CloseButton_base__active_987cb365',
    Js = 'CloseButton_hover_ab3c49b2';
function Ks({ className: e, onClick: i }) {
    const [o, r] = s.useState(!1),
        [n, l] = s.useState(!1);
    return a.jsxs('div', {
        className: t(zs, o && Os, n && qs, e),
        onClick: () => {
            (m.click(), i());
        },
        onMouseEnter: () => {
            (m.highlight(), r(!0));
        },
        onMouseLeave: () => {
            (r(!1), l(!1));
        },
        onMouseDown: (e) => {
            0 === e.button && l(!0);
        },
        onMouseUp: () => l(!1),
        children: [a.jsx('div', { className: Us }), a.jsx('div', { className: Js })],
    });
}
const Qs = 'Header_3ec87e38',
    Xs = 'Header_base__hidden_246872fa',
    Zs = 'Header_ecb415bd',
    Ys = 'Header_filteredCount_2ae11020',
    ea = 'Header_filteredCount__red_3dd303e0',
    sa = 'Header_label_ff404866',
    aa = 'Header_label__blink_b3395ee8',
    ta = 'Header_closeButton_423f8f60',
    ia = 'Header_line_443e4f3f',
    oa = e.memo(function ({ className: e, filteredCount: s, allCount: i, onReset: o }) {
        const r = 0 === s,
            n = s !== i;
        return a.jsxs('div', {
            className: t(Qs, s === i && Xs, e),
            children: [
                a.jsxs('div', {
                    className: Zs,
                    children: [
                        a.jsx(N, {
                            classMix: t(sa, r && aa),
                            text: R.strings.last_stand_lobby.carousel.filter.count(),
                            binding: {
                                filteredCount: a.jsx('div', { className: t(Ys, r && ea), children: s }),
                                allCount: i,
                            },
                        }),
                        n &&
                            a.jsx(v, {
                                header: R.strings.last_stand_lobby.carousel.filterReset.tooltipHeader(),
                                body: R.strings.last_stand_lobby.carousel.filterReset.tooltipBody(),
                                children: a.jsx('div', { children: a.jsx(Ks, { className: ta, onClick: o }) }),
                            }),
                    ],
                }),
                a.jsx('div', { className: ia }),
            ],
        });
    }),
    ra = 'Filters_159fea2',
    na = 'Filters_header_18a0b34',
    la = 'Filters_popoverButton_3a05c281',
    ca = 'Filters_popover_664bd5f0',
    da = 'Filters_button_228aaad3',
    _a = 'Filters_ec9c6901',
    ma = 'Filters_favorite_512facdd',
    ua = 'Filters_premium_4f40d1b2',
    pa = o(({ className: e }) => {
        const { model: i, controls: o } = rs(),
            [r, n] = s.useState(!1),
            l = i.filter.get();
        return a.jsxs('div', {
            className: t(ra, e),
            children: [
                a.jsx(oa, {
                    filteredCount: i.computes.filteredVehicleLenght(),
                    allCount: i.computes.allVehicleLenght(),
                    onReset: o.resetFilter,
                    className: na,
                }),
                a.jsxs('div', {
                    className: la,
                    children: [
                        r && a.jsx(Ws, { className: ca, onClose: () => n(!1) }),
                        a.jsx(us, {
                            className: da,
                            tooltipHeader: R.strings.last_stand_lobby.carousel.filters.tooltipHeader(),
                            tooltipBody: R.strings.last_stand_lobby.carousel.filters.tooltipBody(),
                            onClick: () => {
                                n(!r);
                            },
                            selected: r,
                            hideIndicator: !0,
                            children: a.jsx('div', { className: _a }),
                        }),
                    ],
                }),
                a.jsx(us, {
                    className: da,
                    tooltipHeader: R.strings.last_stand_lobby.carousel.primary.tooltipHeader(),
                    tooltipBody: R.strings.last_stand_lobby.carousel.primary.tooltipBody(),
                    onClick: (e) => o.filter(ns.IsFavorite, e),
                    selected: l.isFavorite,
                    children: a.jsx('div', { className: ma }),
                }),
                a.jsx(us, {
                    className: da,
                    tooltipHeader: R.strings.last_stand_lobby.carousel.premium.tooltipHeader(),
                    tooltipBody: R.strings.last_stand_lobby.carousel.premium.tooltipBody(),
                    onClick: (e) => o.filter(ns.IsPremium, e),
                    selected: l.isPremium,
                    children: a.jsx('div', { className: ua }),
                }),
            ],
        });
    }),
    ba = 'TankCard_cbcb6874',
    ha = 'TankCard_base__selected_1984446c',
    fa = 'TankCard_base__dragging_4ad19ae3',
    ga = 'TankCard_flag_152d1ce9',
    va = 'TankCard_icon_855b7f58',
    xa = 'TankCard_base__hover_d6dc4063',
    ya = 'TankCard_selected_fe435da2',
    ja = 'TankCard_daily_22114a8e',
    Na = 'TankCard_placeholder_3b8913a0',
    ka = 'TankCard_base__active_d6dc4063',
    Ca = 'TankCard_disabled_5584db62',
    Ia = 'TankCard_disableBackground_ee5869c3',
    wa = 'TankCard_state_4af817b2',
    Sa = 'TankCard_stateText_90594137',
    Ra = 'TankCard_stateIcon_cba36ca0',
    Aa = 'TankCard_igrLabel_30266da8',
    Ba = 'TankCard_igrLabelIcon_cf9ebfc0',
    Ma = 'TankCard_rent_85399e9',
    Pa = 'TankCard_cload_da361f69',
    Ta = 'TankCard_favorite_a7746241',
    Ea = 'TankCard_vehName_ea23afeb',
    Da = 'TankCard_vehName__light_f6b611e1',
    La = 'TankCard_vehName__premium_762a95e6',
    Ha = 'TankCard_vehName__igr_99624426',
    Fa = 'TankCard_vehType_55af175e',
    $a = 'TankCard_vehType__premium_77ca850e',
    Ga = 'TankCard_shortName_a2984760',
    Va = 'TankCard_igr_c01c0e68',
    Wa = { ja: 14, zh_sg: 14, zh_tw: 14, zh_cn: 14, ko: 12, vi: 7, th: 7 }[R.strings.settings.LANGUAGE_CODE()] || 5.5,
    za = e.memo(function ({
        name: e,
        nation: i,
        invID: o,
        intCD: l,
        type: c,
        isSelected: d,
        isFavorite: _,
        isPremium: u,
        icon: p,
        isPremiumIGR: b,
        isElite: h,
        vehicleState: f,
        isCarouselLocked: g = !1,
        className: v,
        isDragging: x,
        isRent: y,
        hasDaily: j,
        onClick: k,
    }) {
        const [C, I] = s.useState(!1),
            [w, P] = s.useState(`R.images.gui.maps.icons.vehicle.${p}`),
            T = f !== ts.Default,
            E = T ? R.strings.last_stand_lobby.carousel.card.$dyn(f) : '',
            D = `${c}${u || h ? '_premium' : ''}${d ? '_active' : ''}`,
            L = () => {
                g || d || (m.click(), k(o));
            },
            H = r({
                to: { width: d || C ? E.length * Wa + 'rem' : '0', maxWidth: '120rem' },
                from: { width: '0' },
                delay: d ? 0 : 150,
                immediate: d,
                config: { duration: 300, easing: S.easeInOutCubic },
            });
        return a.jsxs('div', {
            className: t(ba, d && ha, !d && !g && ka, C && xa, x && fa, v),
            children: [
                j &&
                    a.jsx(A, {
                        targetId: R.aliases.last_stand.shared.Carousel('resId'),
                        contentId: R.views.last_stand.mono.lobby.tooltips.simple_format_tooltip('resId'),
                        args: { id: 'dailyQuest' },
                        children: a.jsx('div', {
                            onClick: L,
                            children: a.jsx(ye, { size: je.C24x24, className: ja, gray: !d }),
                        }),
                    }),
                a.jsx('div', {
                    className: ga,
                    style: { backgroundImage: `url('R.images.gui.maps.icons.flags.c_160x100.${i}')` },
                }),
                a.jsx('img', { className: va, src: w, onError: () => P('R.images.gui.maps.icons.vehicle.noImage') }),
                a.jsx('div', { className: ya }),
                a.jsx(B, {
                    targetId: R.aliases.last_stand.shared.Carousel('resId'),
                    args: { tooltipId: 'lsCarouselVehicle', intCD: l },
                    ignoreShowDelay: !0,
                    children: a.jsx('div', {
                        className: Na,
                        onClick: L,
                        onMouseEnter: () => {
                            g || d || (I(!0), m.highlight());
                        },
                        onMouseLeave: () => I(!1),
                    }),
                }),
                T &&
                    a.jsxs('div', {
                        className: Ca,
                        children: [
                            a.jsx('div', { className: Ia }),
                            a.jsxs('div', {
                                className: wa,
                                children: [
                                    a.jsx('div', {
                                        className: Ra,
                                        style: {
                                            backgroundImage: `url('R.images.last_stand.gui.maps.icons.carousel.status.${f}')`,
                                        },
                                    }),
                                    a.jsx(n.div, {
                                        className: Sa,
                                        style: H,
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                        children: a.jsx(M, { content: E }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                !T &&
                    b &&
                    a.jsx(N, {
                        classMix: Aa,
                        text: R.strings.last_stand_lobby.carousel.card.inCN(),
                        binding: { icon: a.jsx('div', { className: Ba }) },
                    }),
                y &&
                    f !== ts.Rented &&
                    a.jsx('div', { className: Ma, children: R.strings.last_stand_lobby.carousel.card.rent() }),
                d && a.jsx('div', { className: Pa }),
                _ && a.jsx('div', { className: Ta }),
                a.jsxs('div', {
                    className: t(Ea, d && Da, u && La, b && Ha),
                    children: [
                        a.jsx('div', {
                            className: t(Fa, (u || h) && $a),
                            style: {
                                backgroundImage: `url('R.images.last_stand.gui.maps.icons.carousel.c_38x38.${D}')`,
                            },
                        }),
                        b && a.jsx('div', { className: Va }),
                        a.jsx('div', { className: Ga, children: e }),
                    ],
                }),
            ],
        });
    }),
    Oa = 'CarouselApp_4a5662c',
    Ua = 'CarouselApp_filters_b878a184',
    qa = 'CarouselApp_leftBtn_879c4e35',
    Ja = 'CarouselApp_rightBtn_6b23755a',
    Ka = 'CarouselApp_scroll_a042f066',
    Qa = 'CarouselApp_scroll__left_d71eb3f',
    Xa = 'CarouselApp_scroll__right_ccded7e',
    Za = 'CarouselApp_scroll__empty_165d04ba',
    Ya = 'CarouselApp_content_6a84f098',
    et = 'CarouselApp_content__noScroll_5a9c2dfa',
    st = 'CarouselApp_empty_e156bcaa',
    at = 'CarouselApp_items_5d9ddf74',
    tt = 'CarouselApp_item_8e892ae4',
    it = 168 * P(),
    ot = 15 * P(),
    rt = o(({ className: e }) => {
        const { model: i, controls: o } = rs(),
            r = T(),
            { selectedVehicle: n } = i.root.get(),
            l = E({ settings: { step: { type: 'fixed', value: it } } }),
            c = (function (e, a) {
                const {
                        contentRef: t,
                        wrapperRef: i,
                        scrollPosition: o,
                        clampPosition: r,
                        animationScroll: n,
                        events: l,
                    } = e,
                    [c, d] = s.useState(as);
                return (
                    s.useEffect(() => {
                        const e = t.current;
                        e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                    }, [t, c.type]),
                    s.useEffect(() => {
                        if ('mouseDown' !== c.type && 'dragging' !== c.type) return;
                        const e = (e) => {
                            const s = t.current,
                                l = i.current;
                            if (!s || !l) return;
                            const _ = c.positionFrom - e.screenX,
                                m = c.previousScrollPosition + _;
                            ('mouseDown' === c.type &&
                                Math.abs(_) > 5 &&
                                d({
                                    type: 'dragging',
                                    positionFrom: c.positionFrom,
                                    previousScrollPosition: c.previousScrollPosition,
                                }),
                                'dragging' === c.type &&
                                    o.start({
                                        scrollPosition: r(s, m),
                                        from: { scrollPosition: n.scrollPosition.get() },
                                        ...a,
                                    }));
                        };
                        function s() {
                            (window.removeEventListener('mousemove', e),
                                document.body.removeEventListener('mouseleave', s),
                                d({ type: 'scrollingToEnd' }));
                        }
                        return (
                            window.addEventListener('mousemove', e),
                            window.addEventListener('mouseup', s),
                            document.body.addEventListener('mouseleave', s),
                            () => {
                                (window.removeEventListener('mousemove', e),
                                    window.removeEventListener('mouseup', s),
                                    document.body.removeEventListener('mouseleave', s));
                            }
                        );
                    }, [n.scrollPosition, r, t, c, o, i, a]),
                    s.useEffect(() => {
                        if ('scrollingToEnd' !== c.type) return;
                        const e = () => {
                            d(as);
                        };
                        return (n.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                    }, [n.scrollPosition, c.type, l]),
                    s.useEffect(() => {
                        const e = t.current;
                        if (!e) return;
                        const s = (e) => {
                            0 === e.button &&
                                d({
                                    type: 'mouseDown',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: n.scrollPosition.get(),
                                });
                        };
                        return (e.addEventListener('mousedown', s), () => e.removeEventListener('mousedown', s));
                    }, [n.scrollPosition, t]),
                    c
                );
            })(l),
            d = s.useRef(null),
            _ = s.useRef(null),
            [m, u] = s.useState(!1),
            [p, h] = s.useState('left'),
            f = i.computes.filteredVehicles();
        i.computes.prepareDaily();
        const g = s.useCallback(() => {
                l.applyStepTo(D.Next);
            }, [l]),
            v = s.useCallback(() => {
                l.applyStepTo(D.Prev);
            }, [l]),
            x = s.useCallback(
                (e) => {
                    if (0 !== e.value.scrollPosition) {
                        {
                            const s = (l.getContainerSize() || 0) - (l.getWrapperSize() || 0) - 1;
                            if (void 0 !== e.value.scrollPosition && s <= e.value.scrollPosition)
                                return void h('right');
                        }
                        h('center');
                    } else h('left');
                },
                [l],
            ),
            y = s.useCallback((e) => o.changeVehicle(e), [o]),
            j = s.useCallback(() => {
                if (_.current && d.current) {
                    const e = d.current.offsetWidth <= _.current.offsetWidth;
                    (u(e), (_.current.style.cursor = e ? '' : 'auto'));
                }
            }, []),
            N = s.useCallback(() => {
                const e = b(i.computes.filteredVehicles(), (e) => e.invID === n);
                if (m)
                    if (void 0 === e) l.applyScroll(0, { immediate: !0 });
                    else {
                        const s = it * e,
                            a = l.animationScroll.scrollPosition.goal,
                            t = l.getWrapperSize() || 0,
                            i = s - a;
                        if (s < a || (s > t && 0 === a)) return void l.applyScroll(s, { immediate: !1 });
                        t - i - ot < it && l.applyScroll(a + it, { immediate: !1 });
                    }
            }, [m, n]),
            C = L(x);
        return (
            s.useEffect(
                () => (
                    l.events.on('change', C),
                    l.events.on('recalculateContent', j),
                    l.events.on('resizeHandled', j),
                    () => {
                        (l.events.off('change', C),
                            l.events.off('recalculateContent', j),
                            l.events.off('resizeHandled', j));
                    }
                ),
                [l.events, C, j],
            ),
            s.useEffect(
                () =>
                    H(() =>
                        H(() => {
                            j();
                        }),
                    ),
                [j, r],
            ),
            s.useEffect(() => H(() => H(N)), [N, f.length]),
            a.jsxs('div', {
                className: t(Oa, e),
                children: [
                    a.jsx(pa, { className: Ua }),
                    a.jsx(es, { className: qa, type: Ye.Left, isDisabled: 'left' === p || !m, onClick: g }),
                    a.jsx('div', {
                        className: t(Ka, 'left' === p && Qa, 'right' === p && Xa, !m && Za),
                        ref: d,
                        children: a.jsxs(F.Horizontal.Area, {
                            api: l,
                            classNames: { content: t(Ya, !m && et) },
                            children: [
                                a.jsx('div', {
                                    className: at,
                                    ref: _,
                                    children: k(f, (e) =>
                                        a.jsx(
                                            za,
                                            {
                                                className: tt,
                                                ...e,
                                                onClick: y,
                                                isSelected: e.invID === n,
                                                isCarouselLocked: i.computes.carouselLocked(),
                                                isDragging: m && c.type === ss.Dragging,
                                            },
                                            e.intCD,
                                        ),
                                    ),
                                }),
                                a.jsx('div', { className: st }),
                            ],
                        }),
                    }),
                    a.jsx(es, { className: Ja, type: Ye.Right, isDisabled: 'right' === p || !m, onClick: v }),
                ],
            })
        );
    }),
    nt = s.memo(function (e) {
        const t = R.aliases.last_stand.shared.Carousel('resId'),
            i = s.useMemo(() => ({ rootId: t }), [t]);
        return a.jsx($, { id: t, children: a.jsx(os, { options: i, children: a.jsx(rt, { ...e }) }) });
    }),
    [lt, ct] = u()(
        ({ observableModel: e }) => ({ root: e.object(), difficulties: e.array('difficulties', []) }),
        ({ externalModel: e }) => ({ swichLevel: e.createCallback((e) => ({ level: e }), 'onSwichLevel') }),
    );
var dt = ((e) => ((e.DEFAULT = 'default'), (e.SELECTED = 'selected'), e))(dt || {});
const _t = {
        root: 'DifficultyItem_root_84d51887',
        difficultyItem: 'DifficultyItem_difficultyItem_c2c390ba',
        difficultyItem__default: 'DifficultyItem_difficultyItem__default_84d51887',
        difficultyItem__locked: 'DifficultyItem_difficultyItem__locked_84d51887',
        difficultyItem__disabled: 'DifficultyItem_difficultyItem__disabled_84d51887',
        icon: 'DifficultyItem_icon_7b476ab5',
        difficultyItem__selected: 'DifficultyItem_difficultyItem__selected_84d51887',
        video: 'DifficultyItem_video_7c00e572',
        iconSelected: 'DifficultyItem_iconSelected_2eec3b19',
        iconHighlight: 'DifficultyItem_iconHighlight_2eec3b19',
        progress: 'DifficultyItem_progress_56badd60',
        progressIcon: 'DifficultyItem_progressIcon_12ab9a41',
        progressIcon__completed: 'DifficultyItem_progressIcon__completed_a39eac06',
        __disabled: 'DifficultyItem___disabled_84d51887',
        label: 'DifficultyItem_label_599759de',
        lock: 'DifficultyItem_lock_3912a94f',
        smoke: 'DifficultyItem_smoke_43167142',
        counter: 'DifficultyItem_counter_46172fbf',
        counterStyle: 'DifficultyItem_counterStyle_325bb046',
    },
    mt = 'R.images.last_stand.gui.maps.icons.difficulties.diff_',
    ut = { 1: ke, 2: Ce, 3: Ie };
function pt({
    level: e,
    state: s,
    isDisabled: i,
    isLocked: o,
    isNew: r,
    onClick: n,
    className: l,
    missionCount: c,
    completedMissions: d,
}) {
    return a.jsx(A, {
        targetId: R.aliases.last_stand.shared.Difficulty('resId'),
        contentId: R.views.last_stand.mono.lobby.tooltips.difficulty_tooltip('resId'),
        args: { level: e, state: s, isLocked: o },
        isEnabled: !i,
        children: a.jsx('div', {
            children: a.jsx(v, {
                body: R.strings.last_stand_lobby.difficult.disabled.body(),
                header: R.strings.last_stand_lobby.difficult.disabled.header(),
                isEnabled: i,
                children: a.jsxs('div', {
                    className: t(
                        _t.difficultyItem,
                        _t[`difficultyItem__${s}`],
                        o && _t.difficultyItem__locked,
                        i && _t.difficultyItem__disabled,
                        l,
                    ),
                    onMouseEnter: () => {
                        s !== dt.DEFAULT || i || m.sound(Ne);
                    },
                    onClick: () => {
                        if (s !== dt.DEFAULT || i || o) return;
                        const a = ut[e];
                        (void 0 !== a && m.sound(a), n(e));
                    },
                    lang: R.strings.settings.LANGUAGE_CODE(),
                    children: [
                        r &&
                            !G.isLow() &&
                            a.jsx(V, {
                                className: _t.video,
                                src: R.videos.last_stand.diff_icon_new(),
                                autoplay: !0,
                                loop: !0,
                            }),
                        s === dt.SELECTED &&
                            !i &&
                            !G.isLow() &&
                            a.jsx(V, {
                                className: _t.video,
                                src: R.videos.last_stand.diff_icon_selected(),
                                autoplay: !0,
                                loop: !0,
                            }),
                        a.jsx('div', {
                            className: _t.icon,
                            style: { backgroundImage: `url('${mt}${e}_${o ? 'locked' : s}')` },
                        }),
                        a.jsx('div', {
                            className: _t.iconSelected,
                            style: { backgroundImage: `url('${mt}${e}_${o ? 'selectedLocked' : dt.SELECTED}')` },
                        }),
                        s === dt.DEFAULT &&
                            !i &&
                            !o &&
                            a.jsx('div', {
                                className: _t.iconHighlight,
                                style: { backgroundImage: `url('${mt}${e}_hovered')` },
                            }),
                        a.jsx('div', {
                            className: _t.progress,
                            children: Array.from({ length: c }, (e, s) =>
                                a.jsx(
                                    'div',
                                    {
                                        className: t(
                                            _t.progressIcon,
                                            d.indexOf(s.toString()) > -1 && _t.progressIcon__completed,
                                        ),
                                    },
                                    `icon_${s}`,
                                ),
                            ),
                        }),
                        a.jsx('div', {
                            className: _t.label,
                            children: R.strings.last_stand_lobby.difficult.uppercase.$dyn(`level_${e}`),
                        }),
                        r &&
                            a.jsx('div', {
                                className: _t.counter,
                                children: a.jsx(W, {
                                    size: 'small',
                                    className: _t.counterStyle,
                                    value: R.strings.last_stand_lobby.difficult.new(),
                                }),
                            }),
                        o && a.jsx('div', { className: _t.lock }),
                        a.jsx('div', { className: _t.smoke }),
                    ],
                }),
            }),
        }),
    });
}
const bt = 'DifficultyApp_8d3524d3',
    ht = 'DifficultyApp_items_10ba5e15',
    ft = 'DifficultyApp_item_5750324a',
    gt = o(({ className: e }) => {
        const { model: i, controls: o } = ct(),
            r = s.useCallback(
                (e) => {
                    o.swichLevel(e);
                },
                [o],
            );
        return a.jsx('div', {
            className: t(bt, e),
            children: a.jsx('div', {
                className: ht,
                children: k(i.difficulties.get(), (e, s) =>
                    a.jsx(
                        pt,
                        { ...e, onClick: r, isDisabled: i.root.get().isDisabled, className: ft },
                        `difficulties_${s}`,
                    ),
                ),
            }),
        });
    }),
    vt = e.memo(function (e) {
        const t = R.aliases.last_stand.shared.Difficulty('resId'),
            i = s.useMemo(() => ({ rootId: t }), [t]);
        return a.jsx($, { id: t, children: a.jsx(lt, { options: i, children: a.jsx(gt, { ...e }) }) });
    }),
    xt = 1400,
    yt = 'Price_1ad8370b',
    jt = 'Price_priceIcon_cab5171c',
    Nt = 'Price_keyIcon_84ada43a',
    kt = e.memo(function ({ price: e, className: s }) {
        const { breakpoint: i } = T();
        return a.jsxs('div', {
            className: t(yt, s),
            children: [
                e,
                a.jsx('div', {
                    className: jt,
                    children: a.jsx(ye, {
                        className: Nt,
                        size: i.weight >= z.large.weight ? je.C70x70 : je.C60x60,
                        gray: !0,
                    }),
                }),
            ],
        });
    }),
    [Ct, It] = u()(
        ({ observableModel: e }) => {
            const s = { root: e.object(), types: e.array('types'), reward: e.object('bonus') },
                a = i(() => !!h(s.types.get(), 'final'));
            return { ...s, computes: { isFinal: a } };
        },
        ({ externalModel: e }) => ({
            skip: e.createCallbackNoArgs('onSkip'),
            decrypt: e.createCallbackNoArgs('onDecrypt'),
            view: e.createCallbackNoArgs('onView'),
            nextSlide: e.createCallbackNoArgs('onSlideToNext'),
        }),
    ),
    wt = {
        root: 'MetaInfo_root_32615bc',
        base: 'MetaInfo_d7c8305a',
        tooltipArea: 'MetaInfo_tooltipArea_e515b028',
        tooltipArea__withButton: 'MetaInfo_tooltipArea__withButton_a28f8f35',
        header: 'MetaInfo_header_8f63d9b3',
        missionIndex: 'MetaInfo_missionIndex_b97f78db',
        missionIndexValue: 'MetaInfo_missionIndexValue_e6230034',
        kingReward: 'MetaInfo_kingReward_35f13f36',
        shadow: 'MetaInfo_shadow_274c4e27',
        name: 'MetaInfo_name_fa142355',
        name__withProminent: 'MetaInfo_name__withProminent_21958896',
        reward: 'MetaInfo_reward_81c80377',
        rewardGlow: 'MetaInfo_rewardGlow_20e9f704',
        'light-rotation': 'MetaInfo_light-rotation_32615bc',
        rewardCmp: 'MetaInfo_rewardCmp_df1e0fb6',
        rewardInfo: 'MetaInfo_rewardInfo_7cfd85ff',
        description: 'MetaInfo_description_b5344ce6',
        block: 'MetaInfo_block_247d3115',
        block__show: 'MetaInfo_block__show_976f5c5d',
        extTextStyle: 'MetaInfo_extTextStyle_5c94a57c',
        inprogressDescr: 'MetaInfo_inprogressDescr_125f355a',
        skipPriceBlock: 'MetaInfo_skipPriceBlock_930d6d3f',
        skipPrice: 'MetaInfo_skipPrice_d17932f3',
        receive: 'MetaInfo_receive_91128cc2',
        receiveDescr: 'MetaInfo_receiveDescr_7bc89bdd',
        icon: 'MetaInfo_icon_63c944d5',
        keyIcon: 'MetaInfo_keyIcon_de66c631',
        openDescr: 'MetaInfo_openDescr_7b2035fe',
        button: 'MetaInfo_button_f0a26ef4',
        decrypt: 'MetaInfo_decrypt_b9c8f034',
        decrypt__anim: 'MetaInfo_decrypt__anim_9e986add',
        blinkAnim: 'MetaInfo_blinkAnim_32615bc',
        decrypt__animShadow: 'MetaInfo_decrypt__animShadow_50f755dd',
        blinkShadowAnim: 'MetaInfo_blinkShadowAnim_32615bc',
        skipButton: 'MetaInfo_skipButton_2e30c107',
        openButton: 'MetaInfo_openButton_52f22137',
    },
    St = o(({ currentIndex: e }) => {
        const { model: i, controls: o } = It(),
            { breakpoint: r } = T(),
            {
                id: n,
                index: l,
                name: c,
                description: d,
                state: _,
                decodePrice: m,
                skipPrice: u,
                keys: p,
                hasProminentReward: b,
            } = i.root.get(),
            [h, f] = s.useState(_),
            g = h === Ve.Receive,
            v = h === Ve.InProgress,
            x = h === Ve.Open,
            y = i.computes.isFinal(),
            j = g && m <= p,
            k = i.reward.get(),
            C = !x && b,
            I = u > 0 || g || x;
        s.useEffect(() => {
            if (l === e)
                return O(() => {
                    f(_);
                }, 350);
            f(_);
        }, [l, e, _]);
        const w = U({ value: Qe.Small }, { large: { value: Qe.Medium }, extraLarge: { value: Qe.Large } });
        return a.jsxs('div', {
            className: t(wt.base, wt[`base__${h}`]),
            lang: R.strings.settings.LANGUAGE_CODE(),
            children: [
                a.jsx(A, {
                    targetId: R.aliases.last_stand.shared.Meta('resId'),
                    contentId: R.views.last_stand.mono.lobby.tooltips.mission_tooltip('resId'),
                    children: a.jsx('div', { className: t(wt.tooltipArea, I && wt.tooltipArea__withButton) }),
                }),
                a.jsxs(
                    'div',
                    {
                        className: wt.header,
                        children: [
                            a.jsx('div', {
                                className: wt.missionIndex,
                                children: y ? a.jsx('div', { className: wt.kingReward }) : Le(l),
                            }),
                            a.jsx('div', { className: wt.shadow }),
                            a.jsxs('div', {
                                className: t(wt.name, C && wt.name__withProminent),
                                children: [
                                    a.jsx(M, { content: c }),
                                    C &&
                                        a.jsxs('div', {
                                            className: wt.reward,
                                            children: [
                                                a.jsx('div', { className: wt.rewardGlow }),
                                                a.jsx(q, {
                                                    name: k.name,
                                                    value: He(k),
                                                    className: wt.rewardCmp,
                                                    classNames: { info: wt.rewardInfo, image: wt.rewardImage },
                                                    size: J.Small,
                                                    special: k.overlayType,
                                                    image: Fe(k, J.Small),
                                                    valueType: K(k.name),
                                                    tooltipArgs: $e(k, R.aliases.last_stand.shared.Meta('resId')),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    },
                    `header__${l}`,
                ),
                a.jsxs('div', {
                    className: wt.description,
                    children: [
                        a.jsxs('div', {
                            className: t(wt.block, v && wt.block__show),
                            children: [
                                a.jsx(
                                    De,
                                    {
                                        className: wt.inprogressDescr,
                                        classNames: { extendedText: wt.extTextStyle },
                                        type: fe.MetaHeading,
                                        text: d,
                                        alignContent: Q.Center,
                                        isTruncationAvailable: !0,
                                        shadow: !0,
                                    },
                                    `${d}${r.name}`,
                                ),
                                u > 0 &&
                                    a.jsxs('div', {
                                        className: wt.button,
                                        children: [
                                            a.jsx(Xe, {
                                                className: wt.skipButton,
                                                type: Ke.Secondary,
                                                size: w.value,
                                                caption: R.strings.last_stand_lobby.meta.btn.skip(),
                                                onClick: o.skip,
                                            }),
                                            u &&
                                                a.jsx('div', {
                                                    className: wt.skipPriceBlock,
                                                    children: a.jsx(kt, { className: wt.skipPrice, price: u }),
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                        a.jsxs('div', {
                            className: t(wt.block, g && wt.block__show),
                            children: [
                                a.jsx('div', {
                                    className: wt.receive,
                                    children: a.jsx('div', {
                                        children: a.jsx(
                                            N,
                                            {
                                                classMix: wt.receiveDescr,
                                                text: R.strings.last_stand_lobby.meta.receive.description(),
                                                binding: {
                                                    keys: p > m ? m : p,
                                                    decrypt: m,
                                                    icon: a.jsx('div', {
                                                        className: wt.icon,
                                                        children: a.jsx(ye, {
                                                            size: r.weight > z.medium.weight ? je.C70x70 : je.C60x60,
                                                            gray: !0,
                                                            className: wt.keyIcon,
                                                        }),
                                                    }),
                                                },
                                            },
                                            `${n}description${r.name}`,
                                        ),
                                    }),
                                }),
                                a.jsx('div', {
                                    className: t(wt.decrypt, j && wt.decrypt__anim),
                                    children: a.jsx('div', {
                                        className: t(wt.decrypt, j && wt.decrypt__animShadow),
                                        children: a.jsx(Xe, {
                                            type: Ke.Secondary,
                                            size: w.value,
                                            caption: R.strings.last_stand_lobby.meta.btn.decrypt(),
                                            showHintAnim: j,
                                            onClick: o.decrypt,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        a.jsxs('div', {
                            className: t(wt.block, x && wt.block__show),
                            children: [
                                a.jsx(
                                    N,
                                    {
                                        classMix: wt.openDescr,
                                        text: R.strings.last_stand_lobby.meta.shortStory.$dyn(Ge(n)),
                                        isTruncationAvailable: !0,
                                    },
                                    `${n}${r.name}`,
                                ),
                                a.jsx('div', {
                                    className: wt.button,
                                    children: a.jsx(Xe, {
                                        type: Ke.Primary,
                                        size: r.weight > z.small.weight ? Qe.Small : Qe.ExtraSmall,
                                        caption: R.strings.last_stand_lobby.meta.btn.view(),
                                        onClick: o.view,
                                        className: wt.openButton,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Rt = s.memo(function (e) {
        const t = R.aliases.last_stand.shared.Meta('resId'),
            i = s.useMemo(() => ({ rootId: t }), [t]);
        return a.jsx($, { id: t, children: a.jsx(Ct, { options: i, children: a.jsx(St, { ...e }) }) });
    }),
    [At, Bt] = u()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onClick') }),
    ),
    Mt = 'RewardPathCard_progressBar_3aeab6a9',
    Pt = 'RewardPathCard_progressBarBackgroundPattern_d3ec4333',
    Tt = 'RewardPathCard_progressBarFillStart_d86b727f',
    Et = 'RewardPathCard_progressBarBackground_687b8b99',
    Dt = 'RewardPathCard_60cab6a1',
    Lt = 'RewardPathCard_base__hovered_70245689',
    Ht = 'RewardPathCard_text_feb641e3',
    Ft = 'RewardPathCard_base__extraLarge_7eef0090',
    $t = 'RewardPathCard_bg_6c02be5a',
    Gt = 'RewardPathCard_image_ecff6f5b',
    Vt = 'RewardPathCard_progress_94b03e74',
    Wt = 'RewardPathCard_progressValue_c57564bd',
    zt = 'RewardPathCard_currentProgress_def0d0e',
    Ot = o(({ extraLarge: e }) => {
        const { model: t, controls: i } = Bt(),
            [o, r] = s.useState(!1),
            [n, c] = s.useState(!1),
            { currentProgress: d, maxProgress: _ } = t.root.get();
        return a.jsx(v, {
            header: R.strings.last_stand_tooltips.metaWidget.header(),
            body: R.strings.last_stand_tooltips.metaWidget.body(),
            children: a.jsx('div', {
                children: a.jsx(Be, {
                    onActive: (e) => c(e),
                    onHover: (e) => r(e),
                    hovered: o,
                    active: n,
                    onClick: i.click,
                    fullBorder: !0,
                    extraLarge: e,
                    children: a.jsxs('div', {
                        className: l(Dt, o && Lt, e && Ft),
                        children: [
                            a.jsx(N, {
                                classMix: Ht,
                                text: R.strings.last_stand_lobby.rewardPathCard.name(),
                                isTruncationAvailable: !0,
                            }),
                            a.jsx('div', { className: $t }),
                            a.jsxs('div', {
                                className: Vt,
                                children: [
                                    a.jsx(N, {
                                        classMix: Wt,
                                        text: R.strings.last_stand_lobby.common.progress(),
                                        binding: { value: a.jsx('div', { className: zt, children: d }), maxValue: _ },
                                    }),
                                    a.jsx(X, {
                                        className: Mt,
                                        classNames: { background: Et, backgroundPattern: Pt },
                                        filledClassNames: { pattern: Pt },
                                        size: 'small',
                                        value: d,
                                        maxValue: _,
                                        children: a.jsx('div', { className: Tt }),
                                    }),
                                ],
                            }),
                            !e && a.jsx('div', { className: Gt }),
                        ],
                    }),
                }),
            }),
        });
    });
function Ut(e) {
    const t = R.aliases.last_stand.shared.RewardPath('resId'),
        i = s.useMemo(() => ({ rootId: t }), [t]);
    return a.jsx($, { id: t, children: a.jsx(At, { options: i, children: a.jsx(Ot, { ...e }) }) });
}
const [qt, Jt] = u()(Z, ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onClick') })),
    Kt = {
        root: 'ShopCard_root_3a4dd01f',
        progressBar: 'ShopCard_progressBar_948dc00f',
        progressBarBackgroundPattern: 'ShopCard_progressBarBackgroundPattern_46706d65',
        progressBarFillStart: 'ShopCard_progressBarFillStart_2be79859',
        progressBarBackground: 'ShopCard_progressBarBackground_98dc2c91',
        base: 'ShopCard_9b74ddbe',
        text: 'ShopCard_text_79551dc4',
        image: 'ShopCard_image_b4bd42a9',
    };
function Qt(e) {
    const t = Jt(),
        [i, o] = s.useState(!1),
        [r, n] = s.useState(!1);
    return a.jsx(v, {
        header: R.strings.last_stand_tooltips.shopWidget.header(),
        body: R.strings.last_stand_tooltips.shopWidget.body(),
        children: a.jsx('div', {
            children: a.jsx(Be, {
                onActive: (e) => n(e),
                onHover: (e) => o(e),
                hovered: i,
                active: r,
                onClick: t.controls.click,
                ...e,
                children: a.jsxs('div', {
                    className: l(Kt.base, i && Kt.base__hovered),
                    children: [
                        a.jsx(N, {
                            classMix: Kt.text,
                            text: R.strings.last_stand_lobby.shopCard.name(),
                            isTruncationAvailable: !0,
                            alignContent: Q.Center,
                        }),
                        a.jsx('div', { className: Kt.image }),
                    ],
                }),
            }),
        }),
    });
}
function Xt() {
    const e = R.aliases.last_stand.shared.Shop('resId'),
        t = s.useMemo(() => ({ rootId: e }), [e]);
    return a.jsx($, { id: e, children: a.jsx(qt, { options: t, children: a.jsx(Qt, {}) }) });
}
const Zt = {
    root: 'GswWidget_root_1662e9a2',
    base: 'GswWidget_da051c8d',
    base__hideRight: 'GswWidget_base__hideRight_345acbdf',
    hideRight: 'GswWidget_hideRight_1662e9a2',
    base__hideLeft: 'GswWidget_base__hideLeft_2329f65b',
    hideLeft: 'GswWidget_hideLeft_1662e9a2',
    shadow: 'GswWidget_shadow_40ce76aa',
    meta: 'GswWidget_meta_5470977d',
    questsCard: 'GswWidget_questsCard_9a5cc20c',
    questsCard__hide: 'GswWidget_questsCard__hide_33775a1e',
    separator: 'GswWidget_separator_57c83c89',
};
function Yt({ className: e, selectedMissionID: t, selectedSlideID: i }) {
    const o = Me(),
        [r, n] = s.useState(t),
        { state: _, isCompleted: m } = o.model.root.get(),
        u = _ === Pe.Badge,
        p = _ === Pe.Hidden || (u && m),
        [b, h] = s.useState(p);
    s.useEffect(
        () =>
            O(() => {
                n(i);
            }, xt),
        [i],
    );
    const [f, g] = c(() => ({ y: 0, x: 0, opacity: 1 })),
        [v, x] = c(() => ({ opacity: 1 }));
    return (
        s.useEffect(() => {
            u &&
                m &&
                !b &&
                (g.start({
                    to: [
                        { y: 10, opacity: 0.5 },
                        { x: 50, opacity: 0, height: 0 },
                    ],
                    delay: 2e3,
                    config: { tension: 75, friction: 8, duration: 300 },
                    onRest: (e) => {
                        !0 === e.finished && h(!0);
                    },
                }),
                x.start({
                    to: [{ opacity: 0 }, { opacity: 1 }],
                    delay: 2e3,
                    config: { tension: 75, friction: 0, duration: 600 },
                }));
        }, [g, x, b, u, m]),
        a.jsxs('div', {
            className: l(Zt.base, e, r < t && Zt.base__hideRight, r > t && Zt.base__hideLeft),
            children: [
                a.jsx('div', { className: Zt.shadow }),
                a.jsx('div', { className: Zt.meta, children: a.jsx(Rt, { currentIndex: r }) }),
                a.jsx(d.div, { style: v, children: a.jsx(Ut, { extraLarge: b }) }),
                a.jsx(d.div, { style: f, children: !b && a.jsx(Te, { isHangar: !0 }) }),
                a.jsx('div', { className: Zt.separator }),
                a.jsx(We, { fullBorder: !0 }),
                a.jsx(Xt, {}),
            ],
        })
    );
}
function ei(e) {
    const t = R.aliases.last_stand.shared.Quests('resId'),
        i = s.useMemo(() => ({ rootId: t }), [t]);
    return a.jsx($, { id: t, children: a.jsx(Ee, { options: i, children: a.jsx(Yt, { ...e }) }) });
}
const si = 'TankSetupApp_3caf69c8',
    ai = 'TankSetupApp_switchButton_7fcde7a6',
    ti = 'TankSetupApp_switchButtonArea_fa39f43e',
    ii = 'TankSetupApp_switchButtonArea__disabled_a81e8b90',
    oi = 'TankSetupApp_switchIcon_35e1f076',
    ri = 'TankSetupApp_switchIcon__disabled_e14d9a5a',
    ni = 'TankSetupApp_panel_87e46c2b',
    li = 'TankSetupApp_panel__hide_28ad515a',
    ci = o(() => {
        const { model: e, controls: i } = ze(),
            { isDisabled: o, isReady: r } = e.root.get(),
            n = e.computes.groups.length() > 0,
            [l, c] = s.useState(!1),
            d = Y(
                () => {
                    (i.switch(), c(!1));
                },
                [i],
                300,
            );
        return a.jsxs('div', {
            className: si,
            children: [
                n &&
                    a.jsx(v, {
                        header: R.strings.last_stand_lobby.ammoSetup.changeHotKey.header(),
                        body: R.strings.last_stand_lobby.ammoSetup.changeHotKey.body(),
                        children: a.jsxs('div', {
                            children: [
                                a.jsx(x, {
                                    type: y.ghost,
                                    disabled: o,
                                    mixClass: ai,
                                    onClick: () => {
                                        (c(!0), d(), m.sound(we));
                                    },
                                    children: a.jsx('div', { className: t(oi, o && ri) }),
                                }),
                                a.jsx('div', { className: t(ti, o && ii) }),
                            ],
                        }),
                    }),
                a.jsx('div', {
                    className: t(ni, l && li),
                    children: a.jsx(Oe, { panelType: Ue.Hangar, isDisabled: o, isReady: r }),
                }),
            ],
        });
    }),
    di = () => {
        const e = s.useMemo(() => ({ rootId: R.aliases.last_stand.shared.AmmunitionPanel('resId') }), []);
        return a.jsx(qe, { options: e, children: a.jsx(ci, {}) });
    },
    [_i, mi] = u()(
        ({ observableModel: e }) => ({
            root: e.object(),
            artefactTypes: e.array('artefacts'),
            vehicleTitle: e.object('vehicleTitle'),
        }),
        ({ externalModel: e }) => ({
            openMenu: e.createCallbackNoArgs('onEscPressed'),
            openAbout: e.createCallbackNoArgs('onAboutClick'),
            exit: e.createCallbackNoArgs('onExitClick'),
            viewLoaded: e.createCallbackNoArgs('onViewLoaded'),
            slide: e.createCallback((e) => ({ slide: e }), 'onSlide'),
        }),
    ),
    ui = {
        root: 'ArrowButton_root_5327085d',
        base: 'ArrowButton_bb4065e7',
        base__hover: 'ArrowButton_base__hover_9fc4262d',
        base__disabled: 'ArrowButton_base__disabled_1ee6ecc8',
        base__left: 'ArrowButton_base__left_e7ba36a0',
        base__right: 'ArrowButton_base__right_930dd67a',
        up: 'ArrowButton_up_b3764462',
        base__active: 'ArrowButton_base__active_5327085d',
        hover: 'ArrowButton_hover_1ef2946c',
        glow: 'ArrowButton_glow_84c24c7f',
    };
var pi = ((e) => ((e.Left = 'left'), (e.Right = 'right'), e))(pi || {});
const bi = ({ className: e, type: i, disabled: o, animationPlaying: r, onClick: n }) => {
        const [l, c] = s.useState(!1),
            [d, _] = s.useState(!1),
            [u, p] = s.useState(!1);
        return (
            s.useEffect(
                () =>
                    O(() => {
                        p(!1);
                    }, xt),
                [u],
            ),
            s.useEffect(() => {
                o && (c(!1), _(!1));
            }, [o]),
            a.jsxs('div', {
                className: t(
                    ui.base,
                    ui[`base__${i}`],
                    l && ui.base__hover,
                    d && ui.base__active,
                    o && ui.base__disabled,
                    e,
                ),
                onClick: () => {
                    u || o || r || ('left' === i ? m.sound(Se) : m.sound(Re), p(!0), n());
                },
                onMouseEnter: () => {
                    o || r || (m.highlight(), c(!0));
                },
                onMouseLeave: () => {
                    (c(!1), _(!1));
                },
                onMouseDown: () => {
                    u || o || r || _(!0);
                },
                onMouseUp: () => _(!1),
                children: [
                    a.jsx('div', { className: ui.glow }),
                    a.jsx('div', { className: ui.up }),
                    a.jsx('div', { className: ui.hover }),
                ],
            })
        );
    },
    hi = 'Background_backgroundComponent_3b6d25c7',
    fi = 'Background_content_2bda4da6',
    gi = 'Background_6d86cab4',
    vi = 'Background_background__hide_e9f8dfb3',
    xi = 'Background_background__show_7f14a6c7',
    yi = e.memo(function ({ activeIndex: e, difficultyIndex: i, maxCount: o, className: l, onComplete: c }) {
        const [d, _] = s.useState(e),
            [m, u] = s.useState(i),
            [p, b] = r(() => ({ x: 0 })),
            h = d - 1,
            f = d + 1,
            g = s.useCallback((s) => (d === e ? 0 : d < e ? -s : s), [e, d]),
            v = s.useCallback((e, s) => {
                if (0 !== e) return `url('R.images.last_stand.gui.maps.icons.backgrounds.bg_${e}_${s}')`;
            }, []),
            x = (e, s) => ({ backgroundImage: v(e, s) });
        return (
            s.useEffect(() => {
                const s = ee('px').width;
                b.start({
                    from: { x: 0 },
                    to: { x: g(s) },
                    config: { duration: xt / 2, easing: S.easeInOutCubic },
                    onRest: (s) => {
                        !0 === s.finished && (_(e), c());
                    },
                });
            }, [e, d, g, b, c]),
            s.useEffect(
                () =>
                    O(() => {
                        u(i);
                    }, 150),
                [i],
            ),
            a.jsxs('div', {
                className: t(hi, l),
                children: [
                    a.jsxs('div', {
                        className: fi,
                        children: [
                            a.jsx('div', { className: t(gi, vi), style: x(h, m) }),
                            a.jsx('div', { className: t(gi, m !== i ? vi : xi), style: x(e, m) }),
                            e < o && d === e && a.jsx('div', { className: t(gi, vi), style: x(f, m) }),
                        ],
                    }),
                    a.jsx(n.div, {
                        className: fi,
                        style: p,
                        children: a.jsx('div', { className: t(gi, m !== i ? vi : xi), style: x(d, m) }),
                    }),
                ],
            })
        );
    }),
    ji = 'disabled',
    Ni = 'enabled',
    ki = 'modeSelector',
    Ci = 'shop',
    Ii = 'storage',
    wi = 'missions',
    Si = 'personalMissions',
    Ri = 'achievements',
    Ai = 'techtree',
    Bi = 'tournament',
    Mi = 'barracks',
    Pi = 'clans',
    Ti = Bi,
    Ei = Pi,
    Di = Si,
    Li = ki,
    Hi = Ri,
    Fi = {
        [Ci]: 'shop',
        [Ii]: 'storage',
        [Ai]: 'techtree',
        [Mi]: 'barracks',
        [Ti]: 'tournament',
        [Ei]: 'clans',
        ['clan']: 'clan',
        [wi]: 'missions',
        [Di]: 'personalMissions',
        [Li]: 'modeSelector',
        [Hi]: 'profile',
        ['replays']: 'replays',
    },
    $i = (e) =>
        s.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            s.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    Gi = {
        root: 'MenuItem_root_28be5e00',
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
    Vi = 'forts',
    Wi = se.resolve('intl'),
    zi = se.resolve('strings'),
    Oi = {
        [Li]: 'tooltips.header.battleType',
        [Ti]: 'tooltips.header.buttons.tournaments',
        [Hi]: 'tooltips.header.buttons.profile',
    },
    Ui = {
        [Ei]: 'tooltips.header.buttons.clans.turnedOff',
        [Di]: 'tooltips.header.buttons.personalMissionsDisabled',
        [Vi]: 'tooltips.header.buttons.forts.turnedOff',
    };
function qi(e) {
    return Wi.toUpperCase(zi.readOrEmpty(`menu.headerButtons.${Fi[e]}`) || zi.readOrEmpty(`menu.headerButtons.${e}`));
}
function Ji({
    name: e,
    state: t,
    modeName: i,
    modeId: o,
    techTreeEvents: r,
    clanEmblem: n,
    onClick: c,
    battleTypesPath: d = '',
}) {
    const _ = ae(),
        m = e === Ei && n,
        u = te(
            s.useMemo(
                () =>
                    (function (e, s) {
                        const a = ((s && Ui[e]) || Oi[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: zi.readOrEmpty(`${a}.header`), body: zi.readOrEmpty(`${a}.body`) };
                    })(m ? Vi : e, t === ji),
                [e, t, m],
            ),
        ),
        p = ie('techtreeDiscount'),
        b = r && 'techtree' === e ? p : u;
    return a.jsx('div', {
        ...b,
        className: l(Gi.base, Gi[`base__${t}State`], Gi[`base__${e}Name`]),
        'data-test-id': e,
        onMouseEnter: function (e) {
            (b.onMouseEnter(),
                t !== ji && _.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (s) {
            (b.onClick(), t !== ji && (c(e), _.play('click', { target: 'main-menu-widget:menu-item', original: s })));
        },
        children: (() => {
            switch (e) {
                case Li: {
                    const s = d ? `${d}.battleTypes.c_64x64.${o}` : `battleTypes.c_64x64.${o}`;
                    return a.jsxs(a.Fragment, {
                        children: [
                            a.jsxs('div', {
                                className: Gi.modeSelector,
                                children: [
                                    a.jsx('div', { className: Gi.label, children: qi(e) }),
                                    i && a.jsx('div', { className: Gi.modeName, children: Wi.toUpperCase(i) }),
                                    a.jsx(oe, { className: Gi.modeIcon, path: s }),
                                ],
                            }),
                            a.jsx($i, { className: Gi.arrow }),
                        ],
                    });
                }
                case Ei:
                    return a.jsxs('div', {
                        className: Gi.titleWrapper,
                        children: [
                            n && a.jsx('div', { style: { backgroundImage: `url(${n})` }, className: Gi.clanEmblem }),
                            a.jsx('div', { className: Gi.title, children: qi(m ? 'clan' : e) }),
                        ],
                    });
                default:
                    return a.jsx('div', {
                        className: Gi.titleWrapper,
                        children: a.jsx('div', { className: Gi.title, children: qi(e) }),
                    });
            }
        })(),
    });
}
const [Ki, Qi] = u()(
        ({ observableModel: e }) => ({
            menuItems: e.array('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    Xi = 'MainMenu_222da7b7',
    Zi = _(function ({ className: e, battleTypesPath: t = '' }) {
        const { model: i, controls: o } = Qi(),
            r = i.menuItems.get(),
            n = i.modeName.get(),
            c = i.modeId.get(),
            d = i.hasTechTreeEvents.get(),
            _ = i.clanEmblem.get();
        return a.jsx('div', {
            className: l(Xi, e),
            children: k(r, (e) =>
                s.createElement(Ji, {
                    ...e,
                    key: e.name,
                    battleTypesPath: t,
                    onClick: o.navigateTo,
                    modeName: n,
                    modeId: c,
                    techTreeEvents: d,
                    clanEmblem: _,
                }),
            ),
        });
    }),
    Yi = {
        getter: re({
            menuItems: [
                { name: ki, state: Ni },
                { name: Ci, state: Ni },
                { name: Ii, state: Ni },
                { name: wi, state: Ni },
                { name: Si, state: Ni },
                { name: Ri, state: Ni },
                { name: Ai, state: Ni },
                { name: Mi, state: ji },
                { name: Bi, state: Ni },
                { name: Pi, state: Ni },
            ],
            modeName: 'Random Battle',
        }),
        controls: () => ne(le('navigateTo')),
    };
function eo({ className: e, battleTypesPath: s = '', ...t }) {
    return a.jsx(Ki, { mode: 'real', mocks: Yi, ...t, children: a.jsx(Zi, { className: e, battleTypesPath: s }) });
}
function so(e) {
    const s = R.aliases.hangar.shared.MainMenu('resId'),
        t = { rootId: s };
    return a.jsx($, { id: s, children: a.jsx(eo, { options: t, ...e }) });
}
var ao = ((e) => (
    (e.None = 'none'),
    (e.LightTank = 'lightTank'),
    (e.MediumTank = 'mediumTank'),
    (e.HeavyTank = 'heavyTank'),
    (e.SPG = 'SPG'),
    (e.AT_SPG = 'AT-SPG'),
    e
))(ao || {});
const to = 'VehicleTitle_4c703019',
    io = 'VehicleTitle_igr_3bd49b30',
    oo = 'VehicleTitle_vehType_e765a397',
    ro = 'VehicleTitle_vehType__premium_c273455e',
    no = o(({ className: e }) => {
        const { model: s } = mi(),
            { name: i, isPremium: o, isPremiumIGR: r, isElite: n, vehicleType: l } = s.vehicleTitle.get(),
            c = o || n;
        return l === ao.None
            ? null
            : a.jsxs('div', {
                  className: t(to, e),
                  children: [
                      a.jsx('div', {
                          className: t(oo, c && ro),
                          style: {
                              backgroundImage: `url('R.images.last_stand.gui.maps.icons.carousel.c_48x48.${ce(l)}${c ? '_premium' : ''}')`,
                          },
                      }),
                      r && a.jsx('div', { className: io }),
                      i,
                  ],
              });
    }),
    lo = 'HangarApp_859ee69b',
    co = 'HangarApp_mainMenu_aab59f98',
    _o = 'HangarApp_base__loadedSetup_59e8707a',
    mo = 'HangarApp_content_5e29174d',
    uo = 'HangarApp_content__blur_afe027f6',
    po = 'HangarApp_content__unblur_a4691db0',
    bo = 'HangarApp_video_b91e6d8a',
    ho = 'HangarApp_video__hide_f85fe87e',
    fo = 'HangarApp_video__show_720b7be8',
    go = 'HangarApp_bg_68e611bd',
    vo = 'HangarApp_vignette_c9d452e',
    xo = 'HangarApp_aboutBtn_351e54fd',
    yo = 'HangarApp_info_1c5d1fb7',
    jo = 'HangarApp_difficulty_56a84bc8',
    No = 'HangarApp_gsw_15e6e004',
    ko = 'HangarApp_leftSlider_e5771071',
    Co = 'HangarApp_rightSlider_fbee3dc3',
    Io = 'HangarApp_arrowLock_4908e9dc',
    wo = 'HangarApp_footer_ed48d7dd',
    So = 'HangarApp_bottom_4254f250',
    Ro = 'HangarApp_vehicleTitle_d27c37d1',
    Ao = 'HangarApp_base__randomLable_59e8707a',
    Bo = 'HangarApp_carousel_2eae4810',
    Mo = 'HangarApp_tankSetup_2be6fc6e',
    Po = 'HangarApp_repair_2bd49997',
    To = 'HangarApp_repairButton_8240ceb7',
    Eo = o(() => {
        const { model: e, controls: i } = mi();
        de(i.openMenu);
        const {
                slidesCount: o,
                selectedSlide: r,
                selectedDifficulty: n,
                isLockedNextSlide: l,
                showDailyAnim: c,
            } = e.root.get(),
            [d, _] = s.useState(r),
            [u, p] = s.useState(!1),
            b = r + 1,
            h = r - 1,
            f = e.root.get().showRandomLable;
        (s.useEffect(() => {
            (i.viewLoaded(), _e(!0));
        }, [i]),
            s.useEffect(
                () =>
                    O(() => {
                        i.slide(d);
                    }, xt / 4),
                [d, i],
            ),
            s.useEffect(
                () =>
                    O(() => {
                        d !== r && (_(r), p(!0), m.sound(Ae));
                    }, xt),
                [r],
            ));
        const g = s.useCallback(() => {
                (p(!0), _(b));
            }, [b]),
            y = s.useCallback(() => {
                (p(!0), _(h));
            }, [h]),
            j = s.useCallback(() => {
                p(!1);
            }, []);
        return a.jsxs('div', {
            className: t(lo, e.root.get().isLoadedSetup && _o, f && Ao),
            children: [
                a.jsx(ve, {
                    src: R.videos.last_stand.slide_overlay(),
                    className: t(bo, u ? fo : ho),
                    paused: !u,
                    rotated: r <= d,
                }),
                a.jsxs('div', {
                    className: t(mo, u ? uo : po),
                    children: [
                        a.jsx(yi, {
                            activeIndex: d,
                            difficultyIndex: n,
                            className: go,
                            maxCount: o,
                            onComplete: j,
                            isLoadedSetup: e.root.get().isLoadedSetup,
                        }),
                        a.jsx('div', { className: vo }),
                        a.jsx(so, { className: co }),
                        a.jsx(v, {
                            body: R.strings.last_stand_lobby.hangar.tooltip.about(),
                            children: a.jsx(me, {
                                className: xo,
                                theme: me.themes.secondary,
                                size: me.sizes.small,
                                onClick: i.openAbout,
                                autoAlignContent: !1,
                                children: a.jsx('div', { className: yo }),
                            }),
                        }),
                        a.jsx(vt, { className: jo }),
                        a.jsx('div', {
                            className: No,
                            children: a.jsx(ei, { selectedMissionID: d, selectedSlideID: d }),
                        }),
                        r > 1 && a.jsx(bi, { className: ko, type: pi.Left, animationPlaying: u, onClick: y }),
                        r < o &&
                            a.jsx(v, {
                                header: R.strings.last_stand_tooltips.hangar.tooltipNext.header(),
                                body: R.strings.last_stand_tooltips.hangar.tooltipNext.body(),
                                isEnabled: l,
                                children: a.jsxs('div', {
                                    className: Co,
                                    children: [
                                        a.jsx(bi, { type: pi.Right, disabled: l, animationPlaying: u, onClick: g }),
                                        l && a.jsx('div', { className: Io }),
                                    ],
                                }),
                            }),
                        a.jsx('div', {
                            className: wo,
                            children: a.jsxs('div', {
                                className: So,
                                children: [
                                    a.jsx(no, { className: Ro }),
                                    a.jsx(nt, { className: Bo }),
                                    a.jsx('div', { className: Mo, children: a.jsx(di, {}) }),
                                    a.jsxs('div', {
                                        className: Po,
                                        children: [
                                            R.strings.last_stand_lobby.carousel.title.needRepair(),
                                            a.jsx(x, {
                                                mixClass: To,
                                                size: Qe.Medium,
                                                onClick: i.exit,
                                                children: R.strings.last_stand_lobby.carousel.title.goToRandom(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
ue(a.jsx(_i, { children: a.jsx(he, { children: a.jsx(Eo, {}) }) }))
    .then(() => pe(document.getElementById('root')))
    .then(() => be())
    .then(() => _e(!1));
