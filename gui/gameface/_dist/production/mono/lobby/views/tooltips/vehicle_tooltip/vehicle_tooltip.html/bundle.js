import { j as e, f as s, Q as t, D as a } from '../../../../chunks/vendor.js';
import {
    i,
    Q as r,
    dq as l,
    a7 as c,
    W as n,
    dr as o,
    cT as m,
    ds as d,
    dt as u,
    as as p,
    a8 as h,
    aL as _,
    m as x,
    bg as v,
    an as g,
    bL as j,
    v as f,
    aN as y,
    du as N,
    a4 as b,
    dv as T,
    n as C,
    c0 as E,
    bB as R,
    Y as S,
    dw as w,
    dx as O,
    j as k,
    cC as L,
    f as P,
    b8 as I,
    dy as $,
    de as G,
    y as A,
    z as M,
    cu as D,
    U as V,
    r as H,
} from '../../../../chunks/lib.js';
import { d as z, T as B, e as W } from '../../../../chunks/tankman_role.js';
var F = ((e) => ((e.UNDEFINED = 'undefined'), (e.SILVER = 'silver'), (e.GOLD = 'gold'), e))(F || {});
const [Q, U] = i('VehicleTooltipModelProvider')(({ observableModel: e }) => {
        const s = {
                ...e.primitives(['status', 'stateLevel', 'bpEntityValid']),
                statistics: e.object('statistics'),
                earnings: e.object('earnings'),
                serviceRecords: e.object('serviceRecords'),
                numberOfCrystalEarned: e.arrayClone('earnings.numberOfCrystalEarned'),
                slots: e.arrayClone('statistics.slots'),
                mechanics: e.arrayClone('mechanics'),
            },
            t = r.primitive(() => s.statistics.get().elite),
            a = r.primitive(
                () =>
                    (t() && 'undefined' !== s.serviceRecords.get().prestigeType) ||
                    s.serviceRecords.get().marksOfMastery > 0 ||
                    s.serviceRecords.get().marksOnGun > 0 ||
                    s.serviceRecords.get().battlesCount > 0,
            ),
            i = r.primitive(() => s.numberOfCrystalEarned.get()[0] ?? 0),
            c = r.primitive(() => s.numberOfCrystalEarned.get()[1] ?? 0),
            n = r.primitive(() => -1 !== s.earnings.get().bonusMultiplier),
            o = r.primitive(
                () =>
                    s.earnings.get().bpActive &&
                    s.earnings.get().maxBpScore > 0 &&
                    s.status.get() !== z.unsuitableToQueue,
            ),
            m = r.primitive(() => l(s.mechanics.get(), (e) => e.priority >= 1));
        return {
            ...s,
            computes: {
                elite: t,
                serviceRecords: a,
                battlePoints: o,
                currentNumberOfCrystal: i,
                maxNumberOfCrystal: c,
                hasBonusMultiplier: n,
                hasSpecialMechanics: m,
            },
        };
    }, c),
    X = 'INACTIVE',
    q = 'ACTIVE',
    K = 'CANCELLED',
    Y = 'critical',
    Z = 'info',
    J = { 1: 3, 2: 2, 3: 1, 4: 4 },
    ee = (e) => {
        switch (e) {
            case Y:
                return '#f31201';
            case Z:
                return '#7ab300';
            default:
                return '#ee7000';
        }
    };
function se(e) {
    return 'string' == typeof e && e in n;
}
const te = { [n.lightTank]: 'LT', [n.mediumTank]: 'MT', [n.heavyTank]: 'HT', [n.SPG]: 'SPG', [n['AT-SPG']]: 'ATSPG' },
    ae = 'level',
    ie = 'role',
    re = 'crewRoles',
    le = 'battles',
    ce = 'wins',
    ne = 'days',
    oe = 'hours';
const me = 'Row_title_6c4bc0c8',
    de = 'Row_title__colon_6c475686',
    ue = p('Row', 'Row_a52ddf2a');
function pe({ className: t, title: a, params: i, children: r }) {
    const l = h.resolve('strings');
    return e.jsxs(ue, {
        className: t,
        children: [
            void 0 !== a &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(_, { className: me, path: `tooltips.vehicle.${a}`, params: i }),
                        e.jsx('div', { className: s(me, de), children: l.readOrEmpty('common.common.colon') }),
                    ],
                }),
            r,
        ],
    });
}
const he = 'Crew_2339425e',
    _e = 'Crew_79af07ed',
    xe = 'Crew_icon_26258836',
    ve = 'Crew_sign_a456f030',
    ge = t(function ({ className: t }) {
        const { model: a } = U(),
            i = a.slots.get(),
            r = h.resolve('strings');
        return e.jsx(pe, {
            title: re,
            params: { count: i.length },
            className: s(he, t),
            children: x(i, (s) =>
                e.jsxs(
                    'div',
                    {
                        className: _e,
                        children: [
                            e.jsx(B, { role: v(s.roles, 0), className: xe }),
                            s.roles.length > 1 &&
                                e.jsx('div', { className: ve, children: r.readOrEmpty('crew_perks.sign.plus') }),
                        ],
                    },
                    s.id,
                ),
            ),
        });
    }),
    je = 'Rent_leftColumn_a909b981',
    fe = 'Rent_rentValue_f91a4efd',
    ye = 'Rent_text_94f0c0d7';
function Ne({ rentPeriodLeft: s, rentType: t }) {
    const a = h.resolve('strings'),
        i = g('ui_kit.rental_counter.rent_x24x24', 'ui_kit.rental_counter.rent_x48x48');
    return e.jsxs(pe, {
        children: [
            e.jsxs('div', {
                className: je,
                children: [
                    e.jsx('div', { className: fe, children: j.formatNumber('integral', Math.ceil(s)) }),
                    e.jsx(f, { path: i, width: 24, height: 24 }),
                ],
            }),
            e.jsx('div', { className: ye, children: a.readOrEmpty(`tooltips.vehicle.rentLeft.${t}`) }),
        ],
    });
}
const be = t(function () {
        const { model: s } = U(),
            { rentLeftTime: t, rentLeftBattles: a, rentLeftWins: i } = s.statistics.get(),
            r = (function (e) {
                const s = m(e);
                return o(s, d(1)) ? u(s, ne) : u(s, oe);
            })(t);
        return t > 0
            ? e.jsx(Ne, { rentPeriodLeft: r.value, rentType: r.unit })
            : a > 0
              ? e.jsx(Ne, { rentPeriodLeft: a, rentType: le })
              : i > 0
                ? e.jsx(Ne, { rentPeriodLeft: i, rentType: ce })
                : null;
    }),
    Te = 'Role_c276c189',
    Ce = 'Role_vehicleRoleIcon_a0c92760',
    Ee = 'Role_property_8f6d69d9',
    Re = t(function ({ className: t }) {
        const { model: a } = U(),
            { type: i, role: r } = a.statistics.get(),
            l = h.resolve('strings');
        return e.jsxs(pe, {
            className: s(Te, t),
            title: ie,
            children: [
                e.jsx(y, { classNames: { icon: Ce }, roleKey: b(r), size: N.x16x16 }),
                se(i) &&
                    e.jsx('div', {
                        className: Ee,
                        children: l.readOrEmpty(`menu.roleExp.roleGroupName.role_${te[i]}_${b(r)}`),
                    }),
            ],
        });
    }),
    Se = h.resolve('strings'),
    we = t(function ({ className: s }) {
        return e.jsx(pe, { className: s, children: Se.readOrEmpty('tooltips.vehicle.telecomRentalsRenting') });
    }),
    Oe = {
        leftColumn: 'TradeIn_leftColumn_e8d75ad6',
        tradeInIcon: 'TradeIn_tradeInIcon_2cde5b72',
        text: 'TradeIn_text_1e5d2ead',
    },
    ke = h.resolve('strings'),
    Le = t(function ({ className: t }) {
        return e.jsxs(pe, {
            className: s(Oe.base, t),
            children: [
                e.jsx('div', { className: Oe.leftColumn, children: e.jsx('div', { className: Oe.tradeInIcon }) }),
                e.jsx('div', { className: Oe.text, children: ke.readOrEmpty('tooltips.vehicle.trade') }),
            ],
        });
    }),
    Pe = 'WotPlus_wotPlus_c07472c2',
    Ie = 'WotPlus_wotPlus__timer_fb00f649',
    $e = t(function ({ className: t }) {
        const { model: a } = U(),
            { wotPlusExpiryTime: i, wotPlusState: r } = a.earnings.get(),
            l = h.resolve('strings');
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(pe, {
                    className: t,
                    children: e.jsx('div', {
                        className: Pe,
                        children: l.readOrEmpty('tooltips.vehicle.wotPlusRenting.title'),
                    }),
                }),
                r !== q &&
                    e.jsx(pe, {
                        className: t,
                        children: (() => {
                            switch (r) {
                                case K:
                                    return e.jsx(_, {
                                        upgradeLegacy: !0,
                                        className: s(Pe, Ie),
                                        path: 'tooltips.vehicle.wotPlusRenting.remainingTime',
                                        params: { time: e.jsx(T, { datetime: i, format: 'ShortDateTime' }) },
                                    });
                                case X:
                                    return e.jsx('div', {
                                        className: s(Pe, Ie),
                                        children: l.readOrEmpty('tooltips.vehicle.wotPlusRenting.inactive'),
                                    });
                                default:
                                    return (console.error(`Unknown wotPlus state: ${r}`), null);
                            }
                        })(),
                    }),
            ],
        });
    }),
    Ge = 'Header_name_154815cc',
    Ae = 'Header_tier_e0bb96ee',
    Me = 'Header_level_d1428bec',
    De = 'Header_tierText_ab47090b',
    Ve = 'Header_row_d4a891e5',
    He = p('Header'),
    ze = t(function ({ className: s }) {
        const { model: t } = U(),
            { wotPlus: a, telecomRent: i, tradeIn: r } = t.earnings.get(),
            { name: l, role: c, type: n, elite: o, level: m } = t.statistics.get(),
            d = b(c);
        return e.jsxs(He, {
            className: s,
            children: [
                e.jsx('div', { className: Ge, children: l }),
                e.jsx(pe, {
                    className: Ae,
                    title: ae,
                    children: e.jsx(_, {
                        className: De,
                        path: `tooltips.tankCaruselTooltip.vehicleType.tier.${o ? 'elite' : 'normal'}.${C(n)}`,
                        params: { tier: e.jsx(E, { value: m, className: Me }) },
                    }),
                }),
                d !== R && d !== S.spg && e.jsx(Re, { className: Ve }),
                e.jsx(ge, { className: Ve }),
                a && e.jsx($e, { className: Ve }),
                i && e.jsx(we, { className: Ve }),
                r && e.jsx(Le, {}),
                e.jsx(be, {}),
            ],
        });
    }),
    Be = 'EliteSystem_leftColumn_6aa7810f',
    We = 'EliteSystem_c476a5a0',
    Fe = 'EliteSystem_eliteSystem_5a135969',
    Qe = 'EliteSystem_eliteSystem__prestige_2b06b89c',
    Ue = 'EliteSystem_values_c91f1a15',
    Xe = 'EliteSystem_currency_4591b107',
    qe = 'EliteSystem_icon_505ae9fd',
    Ke = 'EliteSystem_slash_f65daa35',
    Ye = 'EliteSystem_xp_4e0b1db9',
    Ze = 'EliteSystem_progressBarBorder_45636892',
    Je = t(function ({ className: t }) {
        const a = h.resolve('strings'),
            { model: i } = U(),
            {
                prestigeLevel: r,
                prestigeGrade: l,
                prestigeType: c,
                prestigeXp: n,
                prestigeXpNextLevel: o,
            } = i.serviceRecords.get(),
            m = c === $.prestige;
        return e.jsxs(pe, {
            className: s(We, t),
            children: [
                e.jsx('div', { className: Be, children: e.jsx(w, { level: r, grade: l, type: c, size: O.xs }) }),
                e.jsxs('div', {
                    className: s(Fe, m && Qe),
                    children: [
                        e.jsxs('div', {
                            className: Ue,
                            children: [
                                e.jsx('div', {
                                    children: a.readOrEmpty(
                                        'tooltips.tankCaruselTooltip.serviceRecords.' +
                                            (m ? 'prestigeEliteSystem' : 'eliteSystem'),
                                    ),
                                }),
                                !m &&
                                    e.jsxs(k, {
                                        reverse: !0,
                                        size: P.small,
                                        type: L.tankXP,
                                        classNames: { base: Xe, icon: qe },
                                        children: [
                                            e.jsx('div', { children: j.formatNumber('integral', o) }),
                                            e.jsx('div', {
                                                className: Ke,
                                                children: a.readOrEmpty('common.common.slash'),
                                            }),
                                            e.jsx('div', { className: Ye, children: j.formatNumber('integral', n) }),
                                        ],
                                    }),
                            ],
                        }),
                        !m && e.jsx(I, { value: n, size: 'small', maxValue: o, classNames: { background: Ze } }),
                    ],
                }),
            ],
        });
    }),
    es = {
        leftColumn: 'ServiceRecords_leftColumn_c596dc1b',
        title: 'ServiceRecords_title_40d609e8',
        eliteSystem: 'ServiceRecords_eliteSystem_aeef0cfd',
        text: 'ServiceRecords_text_e426fb24',
    },
    ss = t(function () {
        const { model: s } = U(),
            { marksOnGunPercentage: t, marksOnGun: a } = s.serviceRecords.get(),
            i = h.resolve('strings');
        return e.jsxs(pe, {
            children: [
                e.jsxs('div', {
                    className: es.leftColumn,
                    children: [
                        e.jsx(_, {
                            upgradeLegacy: !0,
                            path: 'common.percentValue',
                            params: { value: j.formatReal('woZeroDigits', Number(t)) },
                        }),
                        e.jsx(f, { path: `library.marksOnGun.mark_${a}`, width: 24, height: 24 }),
                    ],
                }),
                e.jsx('div', { className: es.text, children: i.pluralOrEmpty('achievements.marksOnGun.count', a) }),
            ],
        });
    }),
    ts = t(function () {
        const { model: s } = U(),
            { marksOfMastery: t } = s.serviceRecords.get(),
            a = g(`tooltip.proficiency.class_icons_${J[t]}`, `tooltip.proficiency.class_icons_${J[t]}_upscale`);
        return e.jsxs(pe, {
            children: [
                e.jsx('div', { className: es.leftColumn, children: e.jsx(f, { path: a, width: 24, height: 24 }) }),
                e.jsx(_, { className: es.text, path: `achievements.markOfMastery${J[t]}` }),
            ],
        });
    });
function as({ rate: s }) {
    const t = h.resolve('strings');
    return e.jsxs(pe, {
        children: [
            e.jsx(_, {
                upgradeLegacy: !0,
                className: es.leftColumn,
                path: 'common.percentValue',
                params: { value: j.formatNumber('integral', Math.round(s)) },
            }),
            e.jsx('div', { className: es.text, children: t.readOrEmpty('achievements.winRate') }),
        ],
    });
}
const is = p('ServiceRecords', es.base),
    rs = t(function ({ className: s }) {
        const { model: t } = U(),
            {
                prestigeType: a,
                marksOfMastery: i,
                winsCount: r,
                battlesCount: l,
                marksOnGun: c,
            } = t.serviceRecords.get(),
            n = h.resolve('strings'),
            o = l > 0 ? (r / l) * 100 : 0;
        return e.jsxs(is, {
            className: s,
            children: [
                e.jsx('div', {
                    className: es.title,
                    children: n.readOrEmpty('tooltips.tankCaruselTooltip.serviceRecords.header'),
                }),
                t.computes.elite() && 'undefined' !== a && e.jsx(Je, { className: es.eliteSystem }),
                i > 0 && e.jsx(ts, {}),
                c > 0 && e.jsx(ss, {}),
                l > 0 && e.jsx(as, { rate: o }),
            ],
        });
    }),
    ls = {
        gradient: 'SpecialAbility_gradient_73f7ba6b',
        leftColumn: 'SpecialAbility_leftColumn_7e97137f',
        rightColumn: 'SpecialAbility_rightColumn_4229b20e',
        title: 'SpecialAbility_title_10243315',
        icon: 'SpecialAbility_icon_eed3b29c',
        text: 'SpecialAbility_text_f255c0f5',
    },
    cs = p('SpecialAbility', ls.base),
    ns = t(function ({ className: s }) {
        const { model: t } = U(),
            a = t.mechanics.get(),
            i = h.resolve('strings');
        return e.jsxs(cs, {
            className: s,
            children: [
                e.jsx('div', { className: ls.gradient }),
                x(a, (s, t) => {
                    if (!(s.priority < 1))
                        return e.jsxs(
                            pe,
                            {
                                children: [
                                    e.jsx('div', {
                                        className: ls.leftColumn,
                                        children: e.jsx(f, {
                                            path:
                                                s.rank === F.GOLD
                                                    ? `vehicle_hub.mechanics.special.x48x48.${s.name}`
                                                    : `vehicle_hub.mechanics.x48x48.${s.name}`,
                                            width: 48,
                                            height: 48,
                                            className: ls.icon,
                                        }),
                                    }),
                                    e.jsxs('div', {
                                        className: ls.rightColumn,
                                        children: [
                                            e.jsx('div', {
                                                className: ls.title,
                                                children: i.readOrEmpty(`vehicle_hub.abilities.special.name.${s.name}`),
                                            }),
                                            e.jsx('div', {
                                                className: ls.text,
                                                children: e.jsx(_, {
                                                    split: !0,
                                                    path: `vehicle_hub.abilities.special.shortDescription.${s.name}`,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            t,
                        );
                }),
            ],
        });
    }),
    os = 'Tooltip_decorator_9aef02ef',
    ms = 'Tooltip_fdfde46e',
    ds = 'Tooltip_base__elite_ae2bf179',
    us = 'Tooltip_vehicleType_b877a704',
    ps = 'Tooltip_vehicleType__elite_70a7d60e',
    hs = 'Tooltip_section_b726d2f2',
    _s = 'Tooltip_section__header_c649b074',
    xs = 'Tooltip_status_29b423b3',
    vs = a(function ({ className: t }) {
        const { model: a } = U(),
            { type: i } = a.statistics.get();
        return e.jsx(G, {
            className: t,
            children: e.jsxs(G.Decorator, {
                className: os,
                children: [
                    se(i) &&
                        e.jsx(A, {
                            type: i,
                            premium: a.computes.elite(),
                            size: M.x64x64,
                            className: s(us, a.computes.elite() && ps),
                        }),
                    e.jsxs('div', {
                        className: s(ms, a.computes.elite() && ds),
                        children: [
                            e.jsx(ze, { className: s(hs, _s) }),
                            a.computes.hasSpecialMechanics() && e.jsx(ns, { className: hs }),
                            a.computes.serviceRecords() && e.jsx(rs, { className: hs }),
                            e.jsx(_, {
                                upgradeLegacy: !0,
                                style: { color: ee(a.stateLevel.get()) },
                                className: xs,
                                path: `tooltips.vehicleStatus.${a.status.get()}.header`,
                                params: {
                                    icon: e.jsx(f, { path: 'library.premium_igr_small', width: 26, height: 16 }),
                                },
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    gs = h.resolve('aliases');
var js;
H(
    new D()
        .add(Q)
        .add(V)
        .addWithProps(
            W,
            ((js = (e) => e.common.shared.DynamicEconomics('resId')), { options: { rootId: gs.read(js) } }),
        )
        .render(e.jsx(vs, {})),
);
