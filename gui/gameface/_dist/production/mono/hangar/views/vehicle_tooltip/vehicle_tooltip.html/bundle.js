import { j as e, f as s, w as t } from '../../../chunks/vendor.js';
import {
    i as a,
    c as r,
    s as i,
    n as l,
    aq as n,
    d7 as c,
    l as o,
    P as m,
    d8 as d,
    f as u,
    r as p,
    F as _,
    o as h,
    C as x,
    y as g,
    d as v,
    I as j,
    x as b,
    cs as f,
    J as N,
    aV as y,
    br as E,
    d9 as P,
    aA as C,
    da as w,
    ba as R,
    a0 as T,
    db as O,
    ar as S,
    dc as B,
    dd as k,
    cx as L,
    de as I,
    d6 as $,
    $ as M,
    bF as A,
    a5 as G,
    a6 as D,
    a8 as V,
} from '../../../chunks/lib.js';
import { d as F, u as z, e as H } from '../../../chunks/index.js';
import { T as X } from '../../../chunks/tankman_role.js';
var W = ((e) => ((e.UNDEFINED = 'undefined'), (e.SILVER = 'silver'), (e.GOLD = 'gold'), e))(W || {});
const [U, q] = a('VehicleTooltipModelProvider')(({ observableModel: e }) => {
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
            m = r.primitive(() => i(s.mechanics.get(), (e) => e.priority >= 1));
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
    Z = 'critical',
    Y = 'info',
    ee = { 1: 3, 2: 2, 3: 1, 4: 4 },
    se = (e) => {
        switch (e) {
            case Z:
                return '#f31201';
            case Y:
                return '#7ab300';
            default:
                return '#ee7000';
        }
    };
function te(e) {
    return 'string' == typeof e && e in n;
}
const ae = { [n.lightTank]: 'LT', [n.mediumTank]: 'MT', [n.heavyTank]: 'HT', [n.SPG]: 'SPG', [n['AT-SPG']]: 'ATSPG' },
    re = 'level',
    ie = 'role',
    le = 'crewRoles',
    ne = 'battles',
    ce = 'wins',
    oe = 'days',
    me = 'hours';
const de = { base: 'Row_a52ddf2a', title: 'Row_title_6c4bc0c8', title__colon: 'Row_title__colon_6c475686' },
    ue = u('Row', de.base);
function pe({ className: t, title: a, params: r, children: i }) {
    const l = p.resolve('strings');
    return e.jsxs(ue, {
        className: t,
        children: [
            void 0 !== a &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(_, { className: de.title, path: `tooltips.vehicle.${a}`, params: r }),
                        e.jsx('div', {
                            className: s(de.title, de.title__colon),
                            children: l.readOrEmpty('common.common.colon'),
                        }),
                    ],
                }),
            i,
        ],
    });
}
const _e = 'BattlePassPoints_row__battlePassPoints_4e755749',
    he = 'BattlePassPoints_row__reward_4e755749',
    xe = 'BattlePassPoints_leftColumn_b241ec5',
    ge = 'BattlePassPoints_row_bfb51350',
    ve = 'BattlePassPoints_property_c8f33cb7',
    je = 'BattlePassPoints_property__limitReached_aee9a154',
    be = 'BattlePassPoints_currency_28a36732',
    fe = 'BattlePassPoints_icon_bf5b9876',
    Ne = 'BattlePassPoints_text_fe4f3086',
    ye = function ({
        title: t,
        value: a,
        currentBpScore: r = 0,
        limitReached: i = !1,
        reward: l = !1,
        battlePassPoints: n = !1,
    }) {
        const c = p.resolve('strings'),
            o = h('hangar.carousel.cards.bp_points_bonus', 'hangar.carousel.cards.bp_points_bonus_upscale');
        return e.jsxs(pe, {
            className: s(ge, l && he, n && _e),
            children: [
                e.jsx('div', {
                    className: s(xe),
                    children: e.jsxs(x, {
                        type: 'battlePassPointsBonus',
                        size: g.small,
                        classNames: { base: be },
                        children: [
                            r > 0 &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx('div', { children: v.formatNumber('integral', r) }),
                                        e.jsx('div', { className: ve, children: c.readOrEmpty('common.common.slash') }),
                                    ],
                                }),
                            void 0 !== a &&
                                e.jsx('div', { className: s(ve, i && je), children: v.formatNumber('integral', a) }),
                            e.jsx(j, { className: fe, width: 24, height: 24, path: o }),
                        ],
                    }),
                }),
                e.jsx('div', { className: Ne, children: c.readOrEmpty(`tooltips.vehicle.battlePass.${t}`) }),
            ],
        });
    },
    Ee = t(function () {
        const { model: s } = q(),
            { maxBpScore: t, currentBpScore: a, bpReward: r } = s.earnings.get();
        return e.jsx(e.Fragment, {
            children:
                t > a
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(ye, { currentBpScore: a, title: 'earningLimit', value: t, battlePassPoints: !0 }),
                              e.jsx(ye, { title: 'reward', value: r, limitReached: !0 }),
                          ],
                      })
                    : e.jsx(ye, { title: 'limitReached', reward: !0 }),
        });
    }),
    Pe = 'Bonds_row__bonds_34572d0b',
    Ce = 'Bonds_row__limitReached_34572d0b',
    we = 'Bonds_leftColumn_a37479d6',
    Re = 'Bonds_row_eedc2ff2',
    Te = 'Bonds_row__displayTimer_34572d0b',
    Oe = 'Bonds_timerWrapper_520aac9d',
    Se = 'Bonds_timer_49fb046e',
    Be = 'Bonds_currency_e32a6c4d',
    ke = 'Bonds_icon_4ddeb604',
    Le = 'Bonds_property_57b4db27',
    Ie = 'Bonds_property__limit_e8d508c6',
    $e = 'Bonds_property__earningProgress_1dc4f208',
    Me = 'Bonds_text_dad80fb6',
    Ae = t(function () {
        const { model: t } = q(),
            { crystalTimeout: a } = t.earnings.get(),
            r = t.computes.maxNumberOfCrystal() <= t.computes.currentNumberOfCrystal(),
            i = t.computes.currentNumberOfCrystal() <= 0,
            l = r && a,
            n = p.resolve('strings');
        return e.jsxs(pe, {
            className: s(Re, l && Te, r ? Ce : Pe),
            children: [
                e.jsx('div', {
                    className: we,
                    children: e.jsx(x, {
                        reverse: !0,
                        size: g.small,
                        classNames: { base: Be, icon: ke },
                        type: r ? 'limitReachedCrystal' : b.crystal,
                        children: l
                            ? e.jsx(f, { className: Oe, classNames: { icon: Se }, start: a })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('div', {
                                          className: s(Le, Ie),
                                          children: v.formatNumber('integral', t.computes.maxNumberOfCrystal()),
                                      }),
                                      e.jsx('div', {
                                          className: s(Le, !i && Ie),
                                          children: n.readOrEmpty('common.common.slash'),
                                      }),
                                      e.jsx('div', {
                                          className: s(Le, !i && $e),
                                          children: v.formatNumber('integral', t.computes.currentNumberOfCrystal()),
                                      }),
                                  ],
                              }),
                    }),
                }),
                e.jsx('div', {
                    className: Me,
                    children: n.readOrEmpty('tooltips.vehicle.bonds.' + ('' + (r ? 'limitReached' : 'earningLimit'))),
                }),
            ],
        });
    }),
    Ge = {
        leftColumn: 'Earnings_leftColumn_940b9a0e',
        earnings: 'Earnings_96294922',
        row: 'Earnings_row_850c7c9b',
        icon: 'Earnings_icon_c10adc2c',
        currency: 'Earnings_currency_61ac411b',
        text: 'Earnings_text_a6c4a45b',
    },
    De = t(function () {
        const { model: s } = q(),
            { xp: t } = s.earnings.get(),
            a = p.resolve('strings');
        return e.jsxs(pe, {
            className: Ge.row,
            children: [
                e.jsx('div', {
                    className: Ge.leftColumn,
                    children: e.jsx(x, {
                        reverse: !0,
                        classNames: { base: Ge.currency, icon: Ge.icon },
                        size: g.small,
                        type: s.computes.elite() ? b.eliteXp : b.tankXP,
                        children: e.jsx('div', { children: v.formatNumber('integral', t) }),
                    }),
                }),
                e.jsx('div', { className: Ge.text, children: a.readOrEmpty('tooltips.vehicle.xp') }),
            ],
        });
    }),
    Ve = t(function () {
        const { model: s } = q(),
            { bonusMultiplier: t } = s.earnings.get(),
            a = p.resolve('strings'),
            r = h('hangar.carousel.cards.bonus', 'hangar.carousel.cards.bonus_upscale');
        return e.jsxs(pe, {
            className: Ge.row,
            children: [
                e.jsx('div', {
                    className: Ge.leftColumn,
                    children: e.jsxs(x, {
                        type: 'bonus',
                        size: g.small,
                        classNames: { base: Ge.currency },
                        children: [
                            e.jsx('div', { children: a.readOrEmpty('common.multiplierSmall') }),
                            e.jsx('div', { children: v.formatNumber('integral', t) }),
                            e.jsx(j, { path: r, className: Ge.icon, width: 24, height: 24 }),
                        ],
                    }),
                }),
                e.jsx('div', { className: Ge.text, children: a.readOrEmpty('tooltips.vehicle.dailyXPFactor') }),
            ],
        });
    }),
    Fe = u('Earnings', Ge.base),
    ze = t(function ({ className: s }) {
        var t;
        const a = null == (t = z()) ? void 0 : t.model,
            r = !a || a.isCrystalEarnEnabled.get(),
            i = !a || a.isDailyMultipliedXpEnabled.get(),
            { model: l } = q(),
            { crystalEarning: n } = l.earnings.get(),
            c = p.resolve('strings');
        return e.jsxs(Fe, {
            className: s,
            children: [
                e.jsx('div', {
                    className: Ge.earnings,
                    children: c.readOrEmpty('tooltips.tankCaruselTooltip.earnings.header'),
                }),
                i && l.computes.hasBonusMultiplier() && e.jsx(Ve, {}),
                e.jsx(De, {}),
                r && n && e.jsx(Ae, {}),
                l.bpEntityValid.get() && l.computes.battlePoints() && e.jsx(Ee, {}),
            ],
        });
    }),
    He = 'Crew_2339425e',
    Xe = 'Crew_79af07ed',
    We = 'Crew_icon_26258836',
    Ue = 'Crew_sign_a456f030',
    qe = t(function ({ className: t }) {
        const { model: a } = q(),
            r = a.slots.get(),
            i = p.resolve('strings');
        return e.jsx(pe, {
            title: le,
            params: { count: r.length },
            className: s(He, t),
            children: N(r, (s) =>
                e.jsxs(
                    'div',
                    {
                        className: Xe,
                        children: [
                            e.jsx(X, { role: y(s.roles, 0), className: We }),
                            s.roles.length > 1 &&
                                e.jsx('div', { className: Ue, children: i.readOrEmpty('crew_perks.sign.plus') }),
                        ],
                    },
                    s.id,
                ),
            ),
        });
    }),
    Je = 'Rent_leftColumn_a909b981',
    Ke = 'Rent_rentValue_f91a4efd',
    Qe = 'Rent_text_94f0c0d7';
function Ze({ rentPeriodLeft: s, rentType: t }) {
    const a = p.resolve('strings'),
        r = h('ui_kit.rental_counter.rent_x24x24', 'ui_kit.rental_counter.rent_x48x48');
    return e.jsxs(pe, {
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
        const { model: s } = q(),
            { rentLeftTime: t, rentLeftBattles: a, rentLeftWins: r } = s.statistics.get(),
            i = (function (e) {
                const s = o(e);
                return c(s, m(1)) ? d(s, oe) : d(s, me);
            })(t);
        return t > 0
            ? e.jsx(Ze, { rentPeriodLeft: i.value, rentType: i.unit })
            : a > 0
              ? e.jsx(Ze, { rentPeriodLeft: a, rentType: ne })
              : r > 0
                ? e.jsx(Ze, { rentPeriodLeft: r, rentType: ce })
                : null;
    }),
    es = 'Role_c276c189',
    ss = 'Role_vehicleRoleIcon_a0c92760',
    ts = 'Role_property_8f6d69d9',
    as = t(function ({ className: t }) {
        const { model: a } = q(),
            { type: r, role: i } = a.statistics.get(),
            l = p.resolve('strings');
        return e.jsxs(pe, {
            className: s(es, t),
            title: ie,
            children: [
                e.jsx(E, { classNames: { icon: ss }, roleKey: C(i), size: P.x16x16 }),
                te(r) &&
                    e.jsx('div', {
                        className: ts,
                        children: l.readOrEmpty(`menu.roleExp.roleGroupName.role_${ae[r]}_${C(i)}`),
                    }),
            ],
        });
    }),
    rs = p.resolve('strings'),
    is = t(function ({ className: s }) {
        return e.jsx(pe, { className: s, children: rs.readOrEmpty('tooltips.vehicle.telecomRentalsRenting') });
    }),
    ls = {
        leftColumn: 'TradeIn_leftColumn_e8d75ad6',
        tradeInIcon: 'TradeIn_tradeInIcon_2cde5b72',
        text: 'TradeIn_text_1e5d2ead',
    },
    ns = p.resolve('strings'),
    cs = t(function ({ className: t }) {
        return e.jsxs(pe, {
            className: s(ls.base, t),
            children: [
                e.jsx('div', { className: ls.leftColumn, children: e.jsx('div', { className: ls.tradeInIcon }) }),
                e.jsx('div', { className: ls.text, children: ns.readOrEmpty('tooltips.vehicle.trade') }),
            ],
        });
    }),
    os = 'WotPlus_wotPlus_c07472c2',
    ms = 'WotPlus_wotPlus__timer_fb00f649',
    ds = t(function ({ className: t }) {
        const { model: a } = q(),
            { wotPlusExpiryTime: r, wotPlusState: i } = a.earnings.get(),
            l = p.resolve('strings');
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(pe, {
                    className: t,
                    children: e.jsx('div', {
                        className: os,
                        children: l.readOrEmpty('tooltips.vehicle.wotPlusRenting.title'),
                    }),
                }),
                i !== K &&
                    e.jsx(pe, {
                        className: t,
                        children: (() => {
                            switch (i) {
                                case Q:
                                    return e.jsx(_, {
                                        upgradeLegacy: !0,
                                        className: s(os, ms),
                                        path: 'tooltips.vehicle.wotPlusRenting.remainingTime',
                                        params: { time: e.jsx(w, { datetime: r, format: 'ShortDateTime' }) },
                                    });
                                case J:
                                    return e.jsx('div', {
                                        className: s(os, ms),
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
    us = 'Header_name_154815cc',
    ps = 'Header_tier_e0bb96ee',
    _s = 'Header_level_d1428bec',
    hs = 'Header_tierText_ab47090b',
    xs = 'Header_row_d4a891e5',
    gs = u('Header'),
    vs = t(function ({ className: s }) {
        const { model: t } = q(),
            { wotPlus: a, telecomRent: r, tradeIn: i } = t.earnings.get(),
            { name: l, role: n, type: c, elite: o, level: m } = t.statistics.get(),
            d = C(n);
        return e.jsxs(gs, {
            className: s,
            children: [
                e.jsx('div', { className: us, children: l }),
                e.jsx(pe, {
                    className: ps,
                    title: re,
                    children: e.jsx(_, {
                        className: hs,
                        path: `tooltips.tankCaruselTooltip.vehicleType.tier.${o ? 'elite' : 'normal'}.${R(c)}`,
                        params: { tier: e.jsx(T, { value: m, className: _s }) },
                    }),
                }),
                d !== O && d !== S.spg && e.jsx(as, { className: xs }),
                e.jsx(qe, { className: xs }),
                a && e.jsx(ds, { className: xs }),
                r && e.jsx(is, { className: xs }),
                i && e.jsx(cs, {}),
                e.jsx(Ye, {}),
            ],
        });
    }),
    js = 'EliteSystem_leftColumn_6aa7810f',
    bs = 'EliteSystem_c476a5a0',
    fs = 'EliteSystem_eliteSystem_5a135969',
    Ns = 'EliteSystem_eliteSystem__prestige_2b06b89c',
    ys = 'EliteSystem_values_c91f1a15',
    Es = 'EliteSystem_currency_4591b107',
    Ps = 'EliteSystem_icon_505ae9fd',
    Cs = 'EliteSystem_slash_f65daa35',
    ws = 'EliteSystem_xp_4e0b1db9',
    Rs = 'EliteSystem_progressBarBorder_45636892',
    Ts = t(function ({ className: t }) {
        const a = p.resolve('strings'),
            { model: r } = q(),
            {
                prestigeLevel: i,
                prestigeGrade: l,
                prestigeType: n,
                prestigeXp: c,
                prestigeXpNextLevel: o,
            } = r.serviceRecords.get(),
            m = n === I.prestige;
        return e.jsxs(pe, {
            className: s(bs, t),
            children: [
                e.jsx('div', { className: js, children: e.jsx(B, { level: i, grade: l, type: n, size: k.xs }) }),
                e.jsxs('div', {
                    className: s(fs, m && Ns),
                    children: [
                        e.jsxs('div', {
                            className: ys,
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
                                        type: b.tankXP,
                                        classNames: { base: Es, icon: Ps },
                                        children: [
                                            e.jsx('div', { children: v.formatNumber('integral', o) }),
                                            e.jsx('div', {
                                                className: Cs,
                                                children: a.readOrEmpty('common.common.slash'),
                                            }),
                                            e.jsx('div', { className: ws, children: v.formatNumber('integral', c) }),
                                        ],
                                    }),
                            ],
                        }),
                        !m && e.jsx(L, { value: c, size: 'small', maxValue: o, classNames: { background: Rs } }),
                    ],
                }),
            ],
        });
    }),
    Os = {
        leftColumn: 'ServiceRecords_leftColumn_c596dc1b',
        title: 'ServiceRecords_title_40d609e8',
        eliteSystem: 'ServiceRecords_eliteSystem_aeef0cfd',
        text: 'ServiceRecords_text_e426fb24',
    },
    Ss = t(function () {
        const { model: s } = q(),
            { marksOnGunPercentage: t, marksOnGun: a } = s.serviceRecords.get(),
            r = p.resolve('strings');
        return e.jsxs(pe, {
            children: [
                e.jsxs('div', {
                    className: Os.leftColumn,
                    children: [
                        e.jsx(_, {
                            upgradeLegacy: !0,
                            path: 'common.percentValue',
                            params: { value: v.formatReal('woZeroDigits', Number(t)) },
                        }),
                        e.jsx(j, { path: `library.marksOnGun.mark_${a}`, width: 24, height: 24 }),
                    ],
                }),
                e.jsx('div', { className: Os.text, children: r.pluralOrEmpty('achievements.marksOnGun.count', a) }),
            ],
        });
    }),
    Bs = t(function () {
        const { model: s } = q(),
            { marksOfMastery: t } = s.serviceRecords.get(),
            a = h(`tooltip.proficiency.class_icons_${ee[t]}`, `tooltip.proficiency.class_icons_${ee[t]}_upscale`);
        return e.jsxs(pe, {
            children: [
                e.jsx('div', { className: Os.leftColumn, children: e.jsx(j, { path: a, width: 24, height: 24 }) }),
                e.jsx(_, { className: Os.text, path: `achievements.markOfMastery${ee[t]}` }),
            ],
        });
    });
function ks({ rate: s }) {
    const t = p.resolve('strings');
    return e.jsxs(pe, {
        children: [
            e.jsx(_, {
                upgradeLegacy: !0,
                className: Os.leftColumn,
                path: 'common.percentValue',
                params: { value: v.formatNumber('integral', Math.round(s)) },
            }),
            e.jsx('div', { className: Os.text, children: t.readOrEmpty('achievements.winRate') }),
        ],
    });
}
const Ls = u('ServiceRecords', Os.base),
    Is = t(function ({ className: s }) {
        const { model: t } = q(),
            {
                prestigeType: a,
                marksOfMastery: r,
                winsCount: i,
                battlesCount: l,
                marksOnGun: n,
            } = t.serviceRecords.get(),
            c = p.resolve('strings'),
            o = l > 0 ? (i / l) * 100 : 0;
        return e.jsxs(Ls, {
            className: s,
            children: [
                e.jsx('div', {
                    className: Os.title,
                    children: c.readOrEmpty('tooltips.tankCaruselTooltip.serviceRecords.header'),
                }),
                t.computes.elite() && 'undefined' !== a && e.jsx(Ts, { className: Os.eliteSystem }),
                r > 0 && e.jsx(Bs, {}),
                n > 0 && e.jsx(Ss, {}),
                l > 0 && e.jsx(ks, { rate: o }),
            ],
        });
    }),
    $s = {
        gradient: 'SpecialAbility_gradient_73f7ba6b',
        leftColumn: 'SpecialAbility_leftColumn_7e97137f',
        rightColumn: 'SpecialAbility_rightColumn_4229b20e',
        title: 'SpecialAbility_title_10243315',
        icon: 'SpecialAbility_icon_eed3b29c',
        text: 'SpecialAbility_text_f255c0f5',
    },
    Ms = u('SpecialAbility', $s.base),
    As = t(function ({ className: s }) {
        const { model: t } = q(),
            a = t.mechanics.get(),
            r = p.resolve('strings');
        return e.jsxs(Ms, {
            className: s,
            children: [
                e.jsx('div', { className: $s.gradient }),
                N(a, (s, t) => {
                    if (!(s.priority < 1))
                        return e.jsxs(
                            pe,
                            {
                                children: [
                                    e.jsx('div', {
                                        className: $s.leftColumn,
                                        children: e.jsx(j, {
                                            path:
                                                s.rank === W.GOLD
                                                    ? `vehicle_hub.mechanics.special.x48x48.${s.name}`
                                                    : `vehicle_hub.mechanics.x48x48.${s.name}`,
                                            width: 48,
                                            height: 48,
                                            className: $s.icon,
                                        }),
                                    }),
                                    e.jsxs('div', {
                                        className: $s.rightColumn,
                                        children: [
                                            e.jsx('div', {
                                                className: $s.title,
                                                children: r.readOrEmpty(`vehicle_hub.abilities.special.name.${s.name}`),
                                            }),
                                            e.jsx('div', {
                                                className: $s.text,
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
    Gs = 'Tooltip_decorator_9aef02ef',
    Ds = 'Tooltip_fdfde46e',
    Vs = 'Tooltip_base__elite_ae2bf179',
    Fs = 'Tooltip_vehicleType_b877a704',
    zs = 'Tooltip_vehicleType__elite_bb248964',
    Hs = 'Tooltip_section_b726d2f2',
    Xs = 'Tooltip_section__header_c649b074',
    Ws = 'Tooltip_section__earnings_e52798af',
    Us = 'Tooltip_status_29b423b3',
    qs = t(function ({ className: t }) {
        const { model: a } = q(),
            { type: r } = a.statistics.get();
        return e.jsx($, {
            className: t,
            children: e.jsxs($.Decorator, {
                className: Gs,
                children: [
                    te(r) &&
                        e.jsx(M, {
                            type: r,
                            premium: a.computes.elite(),
                            size: A.x64x64,
                            className: s(Fs, a.computes.elite() && zs),
                        }),
                    e.jsxs('div', {
                        className: s(Ds, a.computes.elite() && Vs),
                        children: [
                            e.jsx(vs, { className: s(Hs, Xs) }),
                            a.computes.hasSpecialMechanics() && e.jsx(As, { className: Hs }),
                            e.jsx(ze, { className: s(Hs, Ws) }),
                            a.computes.serviceRecords() && e.jsx(Is, { className: Hs }),
                            e.jsx(_, {
                                upgradeLegacy: !0,
                                style: { color: se(a.stateLevel.get()) },
                                className: Us,
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
        .add(U)
        .add(D)
        .addWithProps(
            H,
            ((Ks = (e) => e.common.shared.DynamicEconomics('resId')), { options: { rootId: Js.read(Ks) } }),
        )
        .render(e.jsx(qs, {})),
);
