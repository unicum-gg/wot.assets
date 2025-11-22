import { j as e, f as s, v as t } from '../../../chunks/vendor.js';
import {
    i as a,
    c as r,
    P as i,
    n as l,
    ar as n,
    c$ as c,
    W as o,
    ac as m,
    d0 as d,
    N as u,
    r as p,
    Z as _,
    v as h,
    a2 as x,
    a1 as g,
    I as v,
    Y as j,
    a0 as f,
    ci as b,
    a6 as N,
    aX as y,
    bs as E,
    d1 as P,
    aB as C,
    d2 as w,
    bb as R,
    am as S,
    d3 as T,
    as as O,
    d4 as B,
    d5 as k,
    cn as L,
    d6 as I,
    c_ as $,
    al as M,
    d7 as A,
    J as G,
    F as z,
    G as V,
} from '../../../chunks/lib.js';
import { d as F, u as X, e as D } from '../../../chunks/index.js';
import { T as H } from '../../../chunks/tankman_role.js';
const [W, Z] = a('VehicleTooltipModelProvider')(({ observableModel: e }) => {
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
            l = r.primitive(() => s.numberOfCrystalEarned.get()[0] ?? 0),
            n = r.primitive(() => s.numberOfCrystalEarned.get()[1] ?? 0),
            c = r.primitive(() => -1 !== s.earnings.get().bonusMultiplier),
            o = r.primitive(
                () =>
                    s.earnings.get().bpActive &&
                    s.earnings.get().maxBpScore > 0 &&
                    s.status.get() !== F.unsuitableToQueue,
            ),
            m = r.primitive(() => i(s.mechanics.get(), (e) => e.isSpecial));
        return {
            ...s,
            computes: {
                elite: t,
                serviceRecords: a,
                battlePoints: o,
                currentNumberOfCrystal: l,
                maxNumberOfCrystal: n,
                hasBonusMultiplier: c,
                hasSpecialMechanics: m,
            },
        };
    }, l),
    J = 'INACTIVE',
    K = 'ACTIVE',
    Q = 'CANCELLED',
    U = 'critical',
    Y = 'info',
    q = { 1: 3, 2: 2, 3: 1, 4: 4 },
    ee = (e) => {
        switch (e) {
            case U:
                return '#f31201';
            case Y:
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
    re = 'role',
    ie = 'crewRoles',
    le = 'battles',
    ne = 'wins',
    ce = 'days',
    oe = 'hours';
const me = { base: 'Row_a52ddf2a', title: 'Row_title_6c4bc0c8', title__colon: 'Row_title__colon_6c475686' },
    de = u('Row', me.base);
function ue({ className: t, title: a, params: r, children: i }) {
    const l = p.resolve('strings');
    return e.jsxs(de, {
        className: t,
        children: [
            void 0 !== a &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(_, { className: me.title, path: `tooltips.vehicle.${a}`, params: r }),
                        e.jsx('div', {
                            className: s(me.title, me.title__colon),
                            children: l.readOrEmpty('common.common.colon'),
                        }),
                    ],
                }),
            i,
        ],
    });
}
const pe = 'BattlePassPoints_row__battlePassPoints_4e755749',
    _e = 'BattlePassPoints_row__reward_4e755749',
    he = 'BattlePassPoints_leftColumn_814252d6',
    xe = 'BattlePassPoints_row_bfb51350',
    ge = 'BattlePassPoints_property_c8f33cb7',
    ve = 'BattlePassPoints_property__limitReached_aee9a154',
    je = 'BattlePassPoints_currency_28a36732',
    fe = 'BattlePassPoints_icon_bf5b9876',
    be = 'BattlePassPoints_text_fe4f3086',
    Ne = function ({
        title: t,
        value: a,
        currentBpScore: r = 0,
        limitReached: i = !1,
        reward: l = !1,
        battlePassPoints: n = !1,
    }) {
        const c = p.resolve('strings'),
            o = h('hangar.carousel.cards.bp_points_bonus', 'hangar.carousel.cards.bp_points_bonus_upscale');
        return e.jsxs(ue, {
            className: s(xe, l && _e, n && pe),
            children: [
                e.jsx('div', {
                    className: s(he),
                    children: e.jsxs(x, {
                        type: 'battlePassPointsBonus',
                        size: g.small,
                        classNames: { base: je },
                        children: [
                            r > 0 &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx('div', { children: v.formatNumber('integral', r) }),
                                        e.jsx('div', { className: ge, children: c.readOrEmpty('common.common.slash') }),
                                    ],
                                }),
                            void 0 !== a &&
                                e.jsx('div', { className: s(ge, i && ve), children: v.formatNumber('integral', a) }),
                            e.jsx(j, { className: fe, width: 24, height: 24, path: o }),
                        ],
                    }),
                }),
                e.jsx('div', { className: be, children: c.readOrEmpty(`tooltips.vehicle.battlePass.${t}`) }),
            ],
        });
    },
    ye = t(function () {
        const { model: s } = Z(),
            { maxBpScore: t, currentBpScore: a, bpReward: r } = s.earnings.get();
        return e.jsx(e.Fragment, {
            children:
                t > a
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(Ne, { currentBpScore: a, title: 'earningLimit', value: t, battlePassPoints: !0 }),
                              e.jsx(Ne, { title: 'reward', value: r, limitReached: !0 }),
                          ],
                      })
                    : e.jsx(Ne, { title: 'limitReached', reward: !0 }),
        });
    }),
    Ee = 'Bonds_row__bonds_34572d0b',
    Pe = 'Bonds_row__limitReached_34572d0b',
    Ce = 'Bonds_leftColumn_3a40de5',
    we = 'Bonds_row_eedc2ff2',
    Re = 'Bonds_row__displayTimer_34572d0b',
    Se = 'Bonds_timerWrapper_520aac9d',
    Te = 'Bonds_timer_49fb046e',
    Oe = 'Bonds_currency_e32a6c4d',
    Be = 'Bonds_icon_4ddeb604',
    ke = 'Bonds_property_57b4db27',
    Le = 'Bonds_property__limit_e8d508c6',
    Ie = 'Bonds_property__earningProgress_1dc4f208',
    $e = 'Bonds_text_dad80fb6',
    Me = t(function () {
        const { model: t } = Z(),
            { crystalTimeout: a } = t.earnings.get(),
            r = t.computes.maxNumberOfCrystal() <= t.computes.currentNumberOfCrystal(),
            i = t.computes.currentNumberOfCrystal() <= 0,
            l = r && a,
            n = p.resolve('strings');
        return e.jsxs(ue, {
            className: s(we, l && Re, r ? Pe : Ee),
            children: [
                e.jsx('div', {
                    className: Ce,
                    children: e.jsx(x, {
                        reverse: !0,
                        size: g.small,
                        classNames: { base: Oe, icon: Be },
                        type: r ? 'limitReachedCrystal' : f.crystal,
                        children: l
                            ? e.jsx(b, { className: Se, classNames: { icon: Te }, start: a })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('div', {
                                          className: s(ke, Le),
                                          children: v.formatNumber('integral', t.computes.maxNumberOfCrystal()),
                                      }),
                                      e.jsx('div', {
                                          className: s(ke, !i && Le),
                                          children: n.readOrEmpty('common.common.slash'),
                                      }),
                                      e.jsx('div', {
                                          className: s(ke, !i && Ie),
                                          children: v.formatNumber('integral', t.computes.currentNumberOfCrystal()),
                                      }),
                                  ],
                              }),
                    }),
                }),
                e.jsx('div', {
                    className: $e,
                    children: n.readOrEmpty('tooltips.vehicle.bonds.' + ('' + (r ? 'limitReached' : 'earningLimit'))),
                }),
            ],
        });
    }),
    Ae = {
        leftColumn: 'Earnings_leftColumn_e69e08fc',
        earnings: 'Earnings_1bb3383a',
        row: 'Earnings_row_850c7c9b',
        icon: 'Earnings_icon_c10adc2c',
        currency: 'Earnings_currency_61ac411b',
        text: 'Earnings_text_a6c4a45b',
    },
    Ge = t(function () {
        const { model: s } = Z(),
            { xp: t } = s.earnings.get(),
            a = p.resolve('strings');
        return e.jsxs(ue, {
            className: Ae.row,
            children: [
                e.jsx('div', {
                    className: Ae.leftColumn,
                    children: e.jsx(x, {
                        reverse: !0,
                        classNames: { base: Ae.currency, icon: Ae.icon },
                        size: g.small,
                        type: s.computes.elite() ? f.eliteXp : f.tankXP,
                        children: e.jsx('div', { children: v.formatNumber('integral', t) }),
                    }),
                }),
                e.jsx('div', { className: Ae.text, children: a.readOrEmpty('tooltips.vehicle.xp') }),
            ],
        });
    }),
    ze = t(function () {
        const { model: s } = Z(),
            { bonusMultiplier: t } = s.earnings.get(),
            a = p.resolve('strings'),
            r = h('hangar.carousel.cards.bonus', 'hangar.carousel.cards.bonus_upscale');
        return e.jsxs(ue, {
            className: Ae.row,
            children: [
                e.jsx('div', {
                    className: Ae.leftColumn,
                    children: e.jsxs(x, {
                        type: 'bonus',
                        size: g.small,
                        classNames: { base: Ae.currency },
                        children: [
                            e.jsx('div', { children: a.readOrEmpty('common.multiplierSmall') }),
                            e.jsx('div', { children: v.formatNumber('integral', t) }),
                            e.jsx(j, { path: r, className: Ae.icon, width: 24, height: 24 }),
                        ],
                    }),
                }),
                e.jsx('div', { className: Ae.text, children: a.readOrEmpty('tooltips.vehicle.dailyXPFactor') }),
            ],
        });
    }),
    Ve = u('Earnings', Ae.base),
    Fe = t(function ({ className: s }) {
        var t;
        const a = null == (t = X()) ? void 0 : t.model,
            r = !a || a.isCrystalEarnEnabled.get(),
            i = !a || a.isDailyMultipliedXpEnabled.get(),
            { model: l } = Z(),
            { crystalEarning: n } = l.earnings.get(),
            c = p.resolve('strings');
        return e.jsxs(Ve, {
            className: s,
            children: [
                e.jsx('div', {
                    className: Ae.earnings,
                    children: c.readOrEmpty('tooltips.tankCaruselTooltip.earnings.header'),
                }),
                i && l.computes.hasBonusMultiplier() && e.jsx(ze, {}),
                e.jsx(Ge, {}),
                r && n && e.jsx(Me, {}),
                l.bpEntityValid.get() && l.computes.battlePoints() && e.jsx(ye, {}),
            ],
        });
    }),
    Xe = 'Crew_2339425e',
    De = 'Crew_79af07ed',
    He = 'Crew_icon_26258836',
    We = 'Crew_sign_a456f030',
    Ze = t(function ({ className: t }) {
        const { model: a } = Z(),
            r = a.slots.get(),
            i = p.resolve('strings');
        return e.jsx(ue, {
            title: ie,
            params: { count: r.length },
            className: s(Xe, t),
            children: N(r, (s) =>
                e.jsxs(
                    'div',
                    {
                        className: De,
                        children: [
                            e.jsx(H, { role: y(s.roles, 0), className: He }),
                            s.roles.length > 1 &&
                                e.jsx('div', { className: We, children: i.readOrEmpty('crew_perks.sign.plus') }),
                        ],
                    },
                    s.id,
                ),
            ),
        });
    }),
    Je = 'Rent_leftColumn_54f6cf16',
    Ke = 'Rent_rentValue_f91a4efd',
    Qe = 'Rent_text_94f0c0d7';
function Ue({ rentPeriodLeft: s, rentType: t }) {
    const a = p.resolve('strings'),
        r = h('ui_kit.rental_counter.rent_x24x24', 'ui_kit.rental_counter.rent_x48x48');
    return e.jsxs(ue, {
        children: [
            e.jsxs('div', {
                className: Je,
                children: [
                    e.jsx('div', { className: Ke, children: v.formatNumber('integral', Math.ceil(s)) }),
                    e.jsx(j, { path: r, width: 24, height: 24 }),
                ],
            }),
            e.jsx('div', { className: Qe, children: a.readOrEmpty(`tooltips.vehicle.rentLeft.${t}`) }),
        ],
    });
}
const Ye = t(function () {
        const { model: s } = Z(),
            { rentLeftTime: t, rentLeftBattles: a, rentLeftWins: r } = s.statistics.get(),
            i = (function (e) {
                const s = o(e);
                return c(s, m(1)) ? d(s, ce) : d(s, oe);
            })(t);
        return t > 0
            ? e.jsx(Ue, { rentPeriodLeft: i.value, rentType: i.unit })
            : a > 0
              ? e.jsx(Ue, { rentPeriodLeft: a, rentType: le })
              : r > 0
                ? e.jsx(Ue, { rentPeriodLeft: r, rentType: ne })
                : null;
    }),
    qe = 'Role_c276c189',
    es = 'Role_vehicleRoleIcon_a0c92760',
    ss = 'Role_property_8f6d69d9',
    ts = t(function ({ className: t }) {
        const { model: a } = Z(),
            { type: r, role: i } = a.statistics.get(),
            l = p.resolve('strings');
        return e.jsxs(ue, {
            className: s(qe, t),
            title: re,
            children: [
                e.jsx(E, { classNames: { icon: es }, roleKey: C(i), size: P.x16x16 }),
                se(r) &&
                    e.jsx('div', {
                        className: ss,
                        children: l.readOrEmpty(`menu.roleExp.roleGroupName.role_${te[r]}_${C(i)}`),
                    }),
            ],
        });
    }),
    as = p.resolve('strings'),
    rs = t(function ({ className: s }) {
        return e.jsx(ue, { className: s, children: as.readOrEmpty('tooltips.vehicle.telecomRentalsRenting') });
    }),
    is = {
        leftColumn: 'TradeIn_leftColumn_2e448651',
        tradeInIcon: 'TradeIn_tradeInIcon_2cde5b72',
        text: 'TradeIn_text_1e5d2ead',
    },
    ls = p.resolve('strings'),
    ns = t(function ({ className: t }) {
        return e.jsxs(ue, {
            className: s(is.base, t),
            children: [
                e.jsx('div', { className: is.leftColumn, children: e.jsx('div', { className: is.tradeInIcon }) }),
                e.jsx('div', { className: is.text, children: ls.readOrEmpty('tooltips.vehicle.trade') }),
            ],
        });
    }),
    cs = 'WotPlus_wotPlus_c07472c2',
    os = 'WotPlus_wotPlus__timer_fb00f649',
    ms = t(function ({ className: t }) {
        const { model: a } = Z(),
            { wotPlusExpiryTime: r, wotPlusState: i } = a.earnings.get(),
            l = p.resolve('strings');
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(ue, {
                    className: t,
                    children: e.jsx('div', {
                        className: cs,
                        children: l.readOrEmpty('tooltips.vehicle.wotPlusRenting.title'),
                    }),
                }),
                i !== K &&
                    e.jsx(ue, {
                        className: t,
                        children: (() => {
                            switch (i) {
                                case Q:
                                    return e.jsx(_, {
                                        upgradeLegacy: !0,
                                        className: s(cs, os),
                                        path: 'tooltips.vehicle.wotPlusRenting.remainingTime',
                                        params: { time: e.jsx(w, { datetime: r, format: 'ShortDateTime' }) },
                                    });
                                case J:
                                    return e.jsx('div', {
                                        className: s(cs, os),
                                        children: l.readOrEmpty('tooltips.vehicle.wotPlusRenting.inactive'),
                                    });
                                default:
                                    return (console.error(`Unknown wotPlus state: ${i}`), null);
                            }
                        })(),
                    }),
            ],
        });
    }),
    ds = 'Header_name_8024e35',
    us = 'Header_tier_c9e3d676',
    ps = 'Header_level_d1428bec',
    _s = 'Header_tierText_ab47090b',
    hs = 'Header_row_ee80d9c4',
    xs = u('Header'),
    gs = t(function ({ className: s }) {
        const { model: t } = Z(),
            { wotPlus: a, telecomRent: r, tradeIn: i } = t.earnings.get(),
            { name: l, role: n, type: c, elite: o, level: m } = t.statistics.get(),
            d = C(n);
        return e.jsxs(xs, {
            className: s,
            children: [
                e.jsx('div', { className: ds, children: l }),
                e.jsx(ue, {
                    className: us,
                    title: ae,
                    children: e.jsx(_, {
                        className: _s,
                        path: `tooltips.tankCaruselTooltip.vehicleType.tier.${o ? 'elite' : 'normal'}.${R(c)}`,
                        params: { tier: e.jsx(S, { value: m, className: ps }) },
                    }),
                }),
                d !== T && d !== O.spg && e.jsx(ts, { className: hs }),
                e.jsx(Ze, { className: hs }),
                a && e.jsx(ms, { className: hs }),
                r && e.jsx(rs, { className: hs }),
                i && e.jsx(ns, {}),
                e.jsx(Ye, {}),
            ],
        });
    }),
    vs = 'EliteSystem_leftColumn_afd85635',
    js = 'EliteSystem_c476a5a0',
    fs = 'EliteSystem_eliteSystem_5a135969',
    bs = 'EliteSystem_eliteSystem__prestige_2b06b89c',
    Ns = 'EliteSystem_values_c91f1a15',
    ys = 'EliteSystem_currency_4591b107',
    Es = 'EliteSystem_icon_505ae9fd',
    Ps = 'EliteSystem_slash_f65daa35',
    Cs = 'EliteSystem_xp_4e0b1db9',
    ws = 'EliteSystem_progressBarBorder_45636892',
    Rs = t(function ({ className: t }) {
        const a = p.resolve('strings'),
            { model: r } = Z(),
            {
                prestigeLevel: i,
                prestigeGrade: l,
                prestigeType: n,
                prestigeXp: c,
                prestigeXpNextLevel: o,
            } = r.serviceRecords.get(),
            m = n === I.prestige;
        return e.jsxs(ue, {
            className: s(js, t),
            children: [
                e.jsx('div', { className: vs, children: e.jsx(B, { level: i, grade: l, type: n, size: k.xs }) }),
                e.jsxs('div', {
                    className: s(fs, m && bs),
                    children: [
                        e.jsxs('div', {
                            className: Ns,
                            children: [
                                e.jsx('div', {
                                    children: a.readOrEmpty(
                                        'tooltips.tankCaruselTooltip.serviceRecords.' +
                                            (m ? 'prestigeEliteSystem' : 'eliteSystem'),
                                    ),
                                }),
                                !m &&
                                    e.jsxs(x, {
                                        reverse: !0,
                                        size: g.small,
                                        type: f.tankXP,
                                        classNames: { base: ys, icon: Es },
                                        children: [
                                            e.jsx('div', { children: v.formatNumber('integral', o) }),
                                            e.jsx('div', {
                                                className: Ps,
                                                children: a.readOrEmpty('common.common.slash'),
                                            }),
                                            e.jsx('div', { className: Cs, children: v.formatNumber('integral', c) }),
                                        ],
                                    }),
                            ],
                        }),
                        !m && e.jsx(L, { value: c, size: 'small', maxValue: o, classNames: { background: ws } }),
                    ],
                }),
            ],
        });
    }),
    Ss = {
        leftColumn: 'ServiceRecords_leftColumn_aa27c766',
        title: 'ServiceRecords_title_11ae1ccc',
        eliteSystem: 'ServiceRecords_eliteSystem_aeef0cfd',
        text: 'ServiceRecords_text_e426fb24',
    },
    Ts = t(function () {
        const { model: s } = Z(),
            { marksOnGunPercentage: t, marksOnGun: a } = s.serviceRecords.get(),
            r = p.resolve('strings');
        return e.jsxs(ue, {
            children: [
                e.jsxs('div', {
                    className: Ss.leftColumn,
                    children: [
                        e.jsx(_, {
                            upgradeLegacy: !0,
                            path: 'common.percentValue',
                            params: { value: v.formatReal('woZeroDigits', Number(t)) },
                        }),
                        e.jsx(j, { path: `library.marksOnGun.mark_${a}`, width: 24, height: 24 }),
                    ],
                }),
                e.jsx('div', { className: Ss.text, children: r.pluralOrEmpty('achievements.marksOnGun.count', a) }),
            ],
        });
    }),
    Os = t(function () {
        const { model: s } = Z(),
            { marksOfMastery: t } = s.serviceRecords.get(),
            a = h(`tooltip.proficiency.class_icons_${q[t]}`, `tooltip.proficiency.class_icons_${q[t]}_upscale`);
        return e.jsxs(ue, {
            children: [
                e.jsx('div', { className: Ss.leftColumn, children: e.jsx(j, { path: a, width: 24, height: 24 }) }),
                e.jsx(_, { className: Ss.text, path: `achievements.markOfMastery${q[t]}` }),
            ],
        });
    });
function Bs({ rate: s }) {
    const t = p.resolve('strings');
    return e.jsxs(ue, {
        children: [
            e.jsx(_, {
                upgradeLegacy: !0,
                className: Ss.leftColumn,
                path: 'common.percentValue',
                params: { value: v.formatNumber('integral', Math.round(s)) },
            }),
            e.jsx('div', { className: Ss.text, children: t.readOrEmpty('achievements.winRate') }),
        ],
    });
}
const ks = u('ServiceRecords', Ss.base),
    Ls = t(function ({ className: s }) {
        const { model: t } = Z(),
            {
                prestigeType: a,
                marksOfMastery: r,
                winsCount: i,
                battlesCount: l,
                marksOnGun: n,
            } = t.serviceRecords.get(),
            c = p.resolve('strings'),
            o = l > 0 ? (i / l) * 100 : 0;
        return e.jsxs(ks, {
            className: s,
            children: [
                e.jsx('div', {
                    className: Ss.title,
                    children: c.readOrEmpty('tooltips.tankCaruselTooltip.serviceRecords.header'),
                }),
                t.computes.elite() && 'undefined' !== a && e.jsx(Rs, { className: Ss.eliteSystem }),
                r > 0 && e.jsx(Os, {}),
                n > 0 && e.jsx(Ts, {}),
                l > 0 && e.jsx(Bs, { rate: o }),
            ],
        });
    }),
    Is = {
        gradient: 'SpecialAbility_gradient_73f7ba6b',
        leftColumn: 'SpecialAbility_leftColumn_65f1e70e',
        rightColumn: 'SpecialAbility_rightColumn_4229b20e',
        title: 'SpecialAbility_title_10243315',
        icon: 'SpecialAbility_icon_eed3b29c',
        text: 'SpecialAbility_text_f255c0f5',
    },
    $s = u('SpecialAbility', Is.base),
    Ms = t(function ({ className: s }) {
        const { model: t } = Z(),
            a = t.mechanics.get(),
            r = p.resolve('strings');
        return e.jsxs($s, {
            className: s,
            children: [
                e.jsx('div', { className: Is.gradient }),
                N(a, (s, t) => {
                    if (s.isSpecial)
                        return e.jsxs(
                            ue,
                            {
                                children: [
                                    e.jsx('div', {
                                        className: Is.leftColumn,
                                        children: e.jsx(j, {
                                            path: `vehicle_hub.mechanics.special.x48x48.${s.name}`,
                                            width: 48,
                                            height: 48,
                                            className: Is.icon,
                                        }),
                                    }),
                                    e.jsxs('div', {
                                        className: Is.rightColumn,
                                        children: [
                                            e.jsx('div', {
                                                className: Is.title,
                                                children: r.readOrEmpty(`vehicle_hub.abilities.special.name.${s.name}`),
                                            }),
                                            e.jsx('div', {
                                                className: Is.text,
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
    As = 'Tooltip_decorator_9aef02ef',
    Gs = 'Tooltip_fdfde46e',
    zs = 'Tooltip_base__elite_ae2bf179',
    Vs = 'Tooltip_vehicleType_b877a704',
    Fs = 'Tooltip_vehicleType__elite_70a7d60e',
    Xs = 'Tooltip_section_b726d2f2',
    Ds = 'Tooltip_section__header_c649b074',
    Hs = 'Tooltip_section__earnings_e52798af',
    Ws = 'Tooltip_status_29b423b3',
    Zs = t(function ({ className: t }) {
        const { model: a } = Z(),
            { type: r } = a.statistics.get();
        return e.jsx($, {
            className: t,
            children: e.jsxs($.Decorator, {
                className: As,
                children: [
                    se(r) &&
                        e.jsx(M, {
                            type: r,
                            premium: a.computes.elite(),
                            size: A.x64x64,
                            className: s(Vs, a.computes.elite() && Fs),
                        }),
                    e.jsxs('div', {
                        className: s(Gs, a.computes.elite() && zs),
                        children: [
                            e.jsx(gs, { className: s(Xs, Ds) }),
                            a.computes.hasSpecialMechanics() && e.jsx(Ms, { className: Xs }),
                            e.jsx(Fe, { className: s(Xs, Hs) }),
                            a.computes.serviceRecords() && e.jsx(Ls, { className: Xs }),
                            e.jsx(_, {
                                upgradeLegacy: !0,
                                style: { color: ee(a.stateLevel.get()) },
                                className: Ws,
                                path: `tooltips.vehicleStatus.${a.status.get()}.header`,
                                params: {
                                    icon: e.jsx(j, { path: 'library.premium_igr_small', width: 26, height: 16 }),
                                },
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Js = p.resolve('aliases');
var Ks;
V(
    new G()
        .add(W)
        .add(z)
        .addWithProps(
            D,
            ((Ks = (e) => e.common.shared.DynamicEconomics('resId')), { options: { rootId: Js.read(Ks) } }),
        )
        .render(e.jsx(Zs, {})),
);
