import { j as e, f as s, w as t } from '../../../chunks/vendor.js';
import {
    i as a,
    c as r,
    P as i,
    n as l,
    ap as c,
    cN as n,
    W as o,
    ac as m,
    cO as d,
    N as u,
    r as _,
    Z as p,
    v as h,
    a2 as x,
    a1 as g,
    I as v,
    Y as j,
    a0 as f,
    c8 as b,
    a6 as N,
    aJ as y,
    bd as P,
    cP as w,
    az as E,
    bL as C,
    be as S,
    cQ as R,
    aq as T,
    cR as O,
    cS as B,
    cd as k,
    cT as L,
    cU as $,
    bc as M,
    cV as A,
    J as G,
    F as z,
    G as V,
} from '../../../chunks/lib.js';
import { b as F } from '../../../chunks/common.js';
import { T as H } from '../../../chunks/tankman_role.js';
import { _ as X } from '../../../chunks/ui-legacy.js';
const [D, I] = a('VehicleTooltipModelProvider')(({ observableModel: e }) => {
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
            c = r.primitive(() => s.numberOfCrystalEarned.get()[1] ?? 0),
            n = r.primitive(() => -1 !== s.earnings.get().bonusMultiplier),
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
                maxNumberOfCrystal: c,
                hasBonusMultiplier: n,
                hasSpecialMechanics: m,
            },
        };
    }, l),
    W = 'INACTIVE',
    J = 'ACTIVE',
    Q = 'CANCELLED',
    U = 'critical',
    Z = 'info',
    q = { 1: 3, 2: 2, 3: 1, 4: 4 },
    K = (e) => {
        switch (e) {
            case U:
                return '#f31201';
            case Z:
                return '#7ab300';
            default:
                return '#ee7000';
        }
    };
function Y(e) {
    return 'string' == typeof e && e in c;
}
const ee = { [c.lightTank]: 'LT', [c.mediumTank]: 'MT', [c.heavyTank]: 'HT', [c.SPG]: 'SPG', [c['AT-SPG']]: 'ATSPG' },
    se = 'level',
    te = 'role',
    ae = 'crewRoles',
    re = 'battles',
    ie = 'wins',
    le = 'days',
    ce = 'hours';
const ne = { base: 'Row_a52ddf2a', title: 'Row_title_6c4bc0c8', title__colon: 'Row_title__colon_6c475686' },
    oe = u('Row', ne.base);
function me({ className: t, title: a, params: r, children: i }) {
    const l = _.resolve('strings');
    return e.jsxs(oe, {
        className: t,
        children: [
            void 0 !== a &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(p, { className: ne.title, path: `tooltips.vehicle.${a}`, params: r }),
                        e.jsx('div', {
                            className: s(ne.title, ne.title__colon),
                            children: l.readOrEmpty('common.common.colon'),
                        }),
                    ],
                }),
            i,
        ],
    });
}
const de = 'BattlePassPoints_row__battlePassPoints_4e755749',
    ue = 'BattlePassPoints_row__reward_4e755749',
    _e = 'BattlePassPoints_leftColumn_814252d6',
    pe = 'BattlePassPoints_row_bfb51350',
    he = 'BattlePassPoints_property_c8f33cb7',
    xe = 'BattlePassPoints_property__limitReached_aee9a154',
    ge = 'BattlePassPoints_currency_28a36732',
    ve = 'BattlePassPoints_icon_bf5b9876',
    je = 'BattlePassPoints_text_fe4f3086',
    fe = function ({
        title: t,
        value: a,
        currentBpScore: r = 0,
        limitReached: i = !1,
        reward: l = !1,
        battlePassPoints: c = !1,
    }) {
        const n = _.resolve('strings'),
            o = h('hangar.carousel.cards.bp_points_bonus', 'hangar.carousel.cards.bp_points_bonus_upscale');
        return e.jsxs(me, {
            className: s(pe, l && ue, c && de),
            children: [
                e.jsx('div', {
                    className: s(_e),
                    children: e.jsxs(x, {
                        type: 'battlePassPointsBonus',
                        size: g.small,
                        classNames: { base: ge },
                        children: [
                            r > 0 &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx('div', { children: v.formatNumber('integral', r) }),
                                        e.jsx('div', { className: he, children: n.readOrEmpty('common.common.slash') }),
                                    ],
                                }),
                            void 0 !== a &&
                                e.jsx('div', { className: s(he, i && xe), children: v.formatNumber('integral', a) }),
                            e.jsx(j, { className: ve, width: 24, height: 24, path: o }),
                        ],
                    }),
                }),
                e.jsx('div', { className: je, children: n.readOrEmpty(`tooltips.vehicle.battlePass.${t}`) }),
            ],
        });
    },
    be = t(function () {
        const { model: s } = I(),
            { maxBpScore: t, currentBpScore: a, bpReward: r } = s.earnings.get();
        return e.jsx(e.Fragment, {
            children:
                t > a
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(fe, { currentBpScore: a, title: 'earningLimit', value: t, battlePassPoints: !0 }),
                              e.jsx(fe, { title: 'reward', value: r, limitReached: !0 }),
                          ],
                      })
                    : e.jsx(fe, { title: 'limitReached', reward: !0 }),
        });
    }),
    Ne = 'Bonds_row__bonds_34572d0b',
    ye = 'Bonds_row__limitReached_34572d0b',
    Pe = 'Bonds_leftColumn_3a40de5',
    we = 'Bonds_row_eedc2ff2',
    Ee = 'Bonds_row__displayTimer_34572d0b',
    Ce = 'Bonds_timerWrapper_520aac9d',
    Se = 'Bonds_timer_49fb046e',
    Re = 'Bonds_currency_e32a6c4d',
    Te = 'Bonds_icon_4ddeb604',
    Oe = 'Bonds_property_57b4db27',
    Be = 'Bonds_property__limit_e8d508c6',
    ke = 'Bonds_property__earningProgress_1dc4f208',
    Le = 'Bonds_text_dad80fb6',
    $e = t(function () {
        const { model: t } = I(),
            { crystalTimeout: a } = t.earnings.get(),
            r = t.computes.maxNumberOfCrystal() <= t.computes.currentNumberOfCrystal(),
            i = t.computes.currentNumberOfCrystal() <= 0,
            l = r && a,
            c = _.resolve('strings');
        return e.jsxs(me, {
            className: s(we, l && Ee, r ? ye : Ne),
            children: [
                e.jsx('div', {
                    className: Pe,
                    children: e.jsx(x, {
                        reverse: !0,
                        size: g.small,
                        classNames: { base: Re, icon: Te },
                        type: r ? 'limitReachedCrystal' : f.crystal,
                        children: l
                            ? e.jsx(b, { className: Ce, classNames: { icon: Se }, start: a })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx('div', {
                                          className: s(Oe, Be),
                                          children: v.formatNumber('integral', t.computes.maxNumberOfCrystal()),
                                      }),
                                      e.jsx('div', {
                                          className: s(Oe, !i && Be),
                                          children: c.readOrEmpty('common.common.slash'),
                                      }),
                                      e.jsx('div', {
                                          className: s(Oe, !i && ke),
                                          children: v.formatNumber('integral', t.computes.currentNumberOfCrystal()),
                                      }),
                                  ],
                              }),
                    }),
                }),
                e.jsx('div', {
                    className: Le,
                    children: c.readOrEmpty('tooltips.vehicle.bonds.' + ('' + (r ? 'limitReached' : 'earningLimit'))),
                }),
            ],
        });
    }),
    Me = {
        leftColumn: 'Earnings_leftColumn_e69e08fc',
        earnings: 'Earnings_1bb3383a',
        row: 'Earnings_row_850c7c9b',
        icon: 'Earnings_icon_c10adc2c',
        currency: 'Earnings_currency_61ac411b',
        text: 'Earnings_text_a6c4a45b',
    },
    Ae = t(function () {
        const { model: s } = I(),
            { xp: t } = s.earnings.get(),
            a = _.resolve('strings');
        return e.jsxs(me, {
            className: Me.row,
            children: [
                e.jsx('div', {
                    className: Me.leftColumn,
                    children: e.jsx(x, {
                        reverse: !0,
                        classNames: { base: Me.currency, icon: Me.icon },
                        size: g.small,
                        type: s.computes.elite() ? f.eliteXp : f.tankXP,
                        children: e.jsx('div', { children: v.formatNumber('integral', t) }),
                    }),
                }),
                e.jsx('div', { className: Me.text, children: a.readOrEmpty('tooltips.vehicle.xp') }),
            ],
        });
    }),
    Ge = t(function () {
        const { model: s } = I(),
            { bonusMultiplier: t } = s.earnings.get(),
            a = _.resolve('strings'),
            r = h('hangar.carousel.cards.bonus', 'hangar.carousel.cards.bonus_upscale');
        return e.jsxs(me, {
            className: Me.row,
            children: [
                e.jsx('div', {
                    className: Me.leftColumn,
                    children: e.jsxs(x, {
                        type: 'bonus',
                        size: g.small,
                        classNames: { base: Me.currency },
                        children: [
                            e.jsx('div', { children: a.readOrEmpty('common.multiplierSmall') }),
                            e.jsx('div', { children: v.formatNumber('integral', t) }),
                            e.jsx(j, { path: r, className: Me.icon, width: 24, height: 24 }),
                        ],
                    }),
                }),
                e.jsx('div', { className: Me.text, children: a.readOrEmpty('tooltips.vehicle.dailyXPFactor') }),
            ],
        });
    }),
    ze = u('Earnings', Me.base),
    Ve = t(function ({ className: s }) {
        const { model: t } = I(),
            { crystalEarning: a } = t.earnings.get(),
            r = _.resolve('strings');
        return e.jsxs(ze, {
            className: s,
            children: [
                e.jsx('div', {
                    className: Me.earnings,
                    children: r.readOrEmpty('tooltips.tankCaruselTooltip.earnings.header'),
                }),
                t.computes.hasBonusMultiplier() && e.jsx(Ge, {}),
                e.jsx(Ae, {}),
                a && e.jsx($e, {}),
                t.bpEntityValid.get() && t.computes.battlePoints() && e.jsx(be, {}),
            ],
        });
    }),
    Fe = 'Crew_2339425e',
    He = 'Crew_79af07ed',
    Xe = 'Crew_icon_26258836',
    De = 'Crew_sign_a456f030',
    Ie = t(function ({ className: t }) {
        const { model: a } = I(),
            r = a.slots.get(),
            i = _.resolve('strings');
        return e.jsx(me, {
            title: ae,
            params: { count: r.length },
            className: s(Fe, t),
            children: N(r, (s) =>
                e.jsxs(
                    'div',
                    {
                        className: He,
                        children: [
                            e.jsx(H, { role: y(s.roles, 0), className: Xe }),
                            s.roles.length > 1 &&
                                e.jsx('div', { className: De, children: i.readOrEmpty('crew_perks.sign.plus') }),
                        ],
                    },
                    s.id,
                ),
            ),
        });
    }),
    We = 'Rent_leftColumn_54f6cf16',
    Je = 'Rent_rentValue_f91a4efd',
    Qe = 'Rent_text_94f0c0d7';
function Ue({ rentPeriodLeft: s, rentType: t }) {
    const a = _.resolve('strings'),
        r = h('ui_kit.rental_counter.rent_x24x24', 'ui_kit.rental_counter.rent_x48x48');
    return e.jsxs(me, {
        children: [
            e.jsxs('div', {
                className: We,
                children: [
                    e.jsx('div', { className: Je, children: v.formatNumber('integral', Math.ceil(s)) }),
                    e.jsx(j, { path: r, width: 24, height: 24 }),
                ],
            }),
            e.jsx('div', { className: Qe, children: a.readOrEmpty(`tooltips.vehicle.rentLeft.${t}`) }),
        ],
    });
}
const Ze = t(function () {
        const { model: s } = I(),
            { rentLeftTime: t, rentLeftBattles: a, rentLeftWins: r } = s.statistics.get(),
            i = (function (e) {
                const s = o(e);
                return n(s, m(1)) ? d(s, le) : d(s, ce);
            })(t);
        return t > 0
            ? e.jsx(Ue, { rentPeriodLeft: i.value, rentType: i.unit })
            : a > 0
              ? e.jsx(Ue, { rentPeriodLeft: a, rentType: re })
              : r > 0
                ? e.jsx(Ue, { rentPeriodLeft: r, rentType: ie })
                : null;
    }),
    qe = 'Role_c276c189',
    Ke = 'Role_vehicleRoleIcon_a0c92760',
    Ye = 'Role_property_8f6d69d9',
    es = t(function ({ className: t }) {
        const { model: a } = I(),
            { type: r, role: i } = a.statistics.get(),
            l = _.resolve('strings');
        return e.jsxs(me, {
            className: s(qe, t),
            title: te,
            children: [
                e.jsx(P, { classNames: { icon: Ke }, roleKey: E(i), size: w.x16x16 }),
                Y(r) &&
                    e.jsx('div', {
                        className: Ye,
                        children: l.readOrEmpty(`menu.roleExp.roleGroupName.role_${ee[r]}_${E(i)}`),
                    }),
            ],
        });
    }),
    ss = 'WotPlus_wotPlus_c07472c2',
    ts = 'WotPlus_wotPlus__timer_fb00f649',
    as = t(function ({ className: t }) {
        const { model: a } = I(),
            { wotPlusExpiryTime: r, wotPlusState: i } = a.earnings.get(),
            l = _.resolve('strings');
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(me, {
                    className: t,
                    children: e.jsx('div', {
                        className: ss,
                        children: l.readOrEmpty('tooltips.vehicle.wotPlusRenting.title'),
                    }),
                }),
                i !== J &&
                    e.jsx(me, {
                        className: t,
                        children: (() => {
                            switch (i) {
                                case Q:
                                    return e.jsx(p, {
                                        upgradeLegacy: !0,
                                        className: s(ss, ts),
                                        path: 'tooltips.vehicle.wotPlusRenting.remainingTime',
                                        params: { time: e.jsx(X, { datetime: r, format: 'ShortDateTime' }) },
                                    });
                                case W:
                                    return e.jsx('div', {
                                        className: s(ss, ts),
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
    rs = 'Header_name_8024e35',
    is = 'Header_tier_c9e3d676',
    ls = 'Header_level_d1428bec',
    cs = 'Header_tierText_ab47090b',
    ns = 'Header_row_ee80d9c4',
    os = u('Header'),
    ms = t(function ({ className: s }) {
        const { model: t } = I(),
            { wotPlus: a } = t.earnings.get(),
            { name: r, role: i, type: l, elite: c, level: n } = t.statistics.get(),
            o = E(i);
        return e.jsxs(os, {
            className: s,
            children: [
                e.jsx('div', { className: rs, children: r }),
                e.jsx(me, {
                    className: is,
                    title: se,
                    children: e.jsx(p, {
                        className: cs,
                        path: `tooltips.tankCaruselTooltip.vehicleType.tier.${c ? 'elite' : 'normal'}.${C(l)}`,
                        params: { tier: e.jsx(S, { value: n, className: ls }) },
                    }),
                }),
                o !== R && o !== T.spg && e.jsx(es, { className: ns }),
                e.jsx(Ie, { className: ns }),
                a && e.jsx(as, { className: ns }),
                e.jsx(Ze, {}),
            ],
        });
    }),
    ds = 'EliteSystem_leftColumn_afd85635',
    us = 'EliteSystem_c476a5a0',
    _s = 'EliteSystem_eliteSystem_5a135969',
    ps = 'EliteSystem_eliteSystem__prestige_2b06b89c',
    hs = 'EliteSystem_values_c91f1a15',
    xs = 'EliteSystem_currency_4591b107',
    gs = 'EliteSystem_icon_505ae9fd',
    vs = 'EliteSystem_slash_f65daa35',
    js = 'EliteSystem_xp_4e0b1db9',
    fs = 'EliteSystem_progressBarBorder_45636892',
    bs = t(function ({ className: t }) {
        const a = _.resolve('strings'),
            { model: r } = I(),
            {
                prestigeLevel: i,
                prestigeGrade: l,
                prestigeType: c,
                prestigeXp: n,
                prestigeXpNextLevel: o,
            } = r.serviceRecords.get(),
            m = c === L.prestige;
        return e.jsxs(me, {
            className: s(us, t),
            children: [
                e.jsx('div', { className: ds, children: e.jsx(O, { level: i, grade: l, type: c, size: B.xs }) }),
                e.jsxs('div', {
                    className: s(_s, m && ps),
                    children: [
                        e.jsxs('div', {
                            className: hs,
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
                                        classNames: { base: xs, icon: gs },
                                        children: [
                                            e.jsx('div', { children: v.formatNumber('integral', o) }),
                                            e.jsx('div', {
                                                className: vs,
                                                children: a.readOrEmpty('common.common.slash'),
                                            }),
                                            e.jsx('div', { className: js, children: v.formatNumber('integral', n) }),
                                        ],
                                    }),
                            ],
                        }),
                        !m && e.jsx(k, { value: n, size: 'small', maxValue: o, classNames: { background: fs } }),
                    ],
                }),
            ],
        });
    }),
    Ns = {
        leftColumn: 'ServiceRecords_leftColumn_aa27c766',
        title: 'ServiceRecords_title_11ae1ccc',
        eliteSystem: 'ServiceRecords_eliteSystem_aeef0cfd',
        text: 'ServiceRecords_text_e426fb24',
    },
    ys = t(function () {
        const { model: s } = I(),
            { marksOnGunPercentage: t, marksOnGun: a } = s.serviceRecords.get(),
            r = _.resolve('strings');
        return e.jsxs(me, {
            children: [
                e.jsxs('div', {
                    className: Ns.leftColumn,
                    children: [
                        e.jsx(p, {
                            upgradeLegacy: !0,
                            path: 'common.percentValue',
                            params: { value: v.formatReal('woZeroDigits', Number(t)) },
                        }),
                        e.jsx(j, { path: `library.marksOnGun.mark_${a}`, width: 24, height: 24 }),
                    ],
                }),
                e.jsx('div', { className: Ns.text, children: r.pluralOrEmpty('achievements.marksOnGun.count', a) }),
            ],
        });
    }),
    Ps = t(function () {
        const { model: s } = I(),
            { marksOfMastery: t } = s.serviceRecords.get(),
            a = h(`tooltip.proficiency.class_icons_${q[t]}`, `tooltip.proficiency.class_icons_${q[t]}_upscale`);
        return e.jsxs(me, {
            children: [
                e.jsx('div', { className: Ns.leftColumn, children: e.jsx(j, { path: a, width: 24, height: 24 }) }),
                e.jsx(p, { className: Ns.text, path: `achievements.markOfMastery${q[t]}` }),
            ],
        });
    });
function ws({ rate: s }) {
    const t = _.resolve('strings');
    return e.jsxs(me, {
        children: [
            e.jsx(p, {
                upgradeLegacy: !0,
                className: Ns.leftColumn,
                path: 'common.percentValue',
                params: { value: v.formatNumber('integral', Math.round(s)) },
            }),
            e.jsx('div', { className: Ns.text, children: t.readOrEmpty('achievements.winRate') }),
        ],
    });
}
const Es = u('ServiceRecords', Ns.base),
    Cs = t(function ({ className: s }) {
        const { model: t } = I(),
            {
                prestigeType: a,
                marksOfMastery: r,
                winsCount: i,
                battlesCount: l,
                marksOnGun: c,
            } = t.serviceRecords.get(),
            n = _.resolve('strings'),
            o = l > 0 ? (i / l) * 100 : 0;
        return e.jsxs(Es, {
            className: s,
            children: [
                e.jsx('div', {
                    className: Ns.title,
                    children: n.readOrEmpty('tooltips.tankCaruselTooltip.serviceRecords.header'),
                }),
                t.computes.elite() && 'undefined' !== a && e.jsx(bs, { className: Ns.eliteSystem }),
                r > 0 && e.jsx(Ps, {}),
                c > 0 && e.jsx(ys, {}),
                l > 0 && e.jsx(ws, { rate: o }),
            ],
        });
    }),
    Ss = {
        gradient: 'SpecialAbility_gradient_73f7ba6b',
        leftColumn: 'SpecialAbility_leftColumn_65f1e70e',
        rightColumn: 'SpecialAbility_rightColumn_4229b20e',
        title: 'SpecialAbility_title_10243315',
        icon: 'SpecialAbility_icon_eed3b29c',
        text: 'SpecialAbility_text_f255c0f5',
    },
    Rs = u('SpecialAbility', Ss.base),
    Ts = t(function ({ className: s }) {
        const { model: t } = I(),
            a = t.mechanics.get(),
            r = _.resolve('strings');
        return e.jsxs(Rs, {
            className: s,
            children: [
                e.jsx('div', { className: Ss.gradient }),
                N(a, (s, t) => {
                    if (s.isSpecial)
                        return e.jsxs(
                            me,
                            {
                                children: [
                                    e.jsx('div', {
                                        className: Ss.leftColumn,
                                        children: e.jsx(j, {
                                            path: `vehicle_hub.mechanics.special.x48x48.${s.name}`,
                                            width: 48,
                                            height: 48,
                                            className: Ss.icon,
                                        }),
                                    }),
                                    e.jsxs('div', {
                                        className: Ss.rightColumn,
                                        children: [
                                            e.jsx('div', {
                                                className: Ss.title,
                                                children: r.readOrEmpty(`vehicle_hub.abilities.special.name.${s.name}`),
                                            }),
                                            e.jsx('div', {
                                                className: Ss.text,
                                                children: r.readOrEmpty(
                                                    `vehicle_hub.abilities.special.shortDescription.${s.name}`,
                                                ),
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
    Os = 'Tooltip_decorator_9aef02ef',
    Bs = 'Tooltip_fdfde46e',
    ks = 'Tooltip_base__elite_ae2bf179',
    Ls = 'Tooltip_vehicleType_b877a704',
    $s = 'Tooltip_vehicleType__elite_70a7d60e',
    Ms = 'Tooltip_section_b726d2f2',
    As = 'Tooltip_section__header_c649b074',
    Gs = 'Tooltip_section__earnings_e52798af',
    zs = 'Tooltip_status_29b423b3',
    Vs = t(function ({ className: t }) {
        const { model: a } = I(),
            { type: r } = a.statistics.get();
        return e.jsx($, {
            className: t,
            children: e.jsxs($.Decorator, {
                className: Os,
                children: [
                    Y(r) &&
                        e.jsx(M, {
                            type: r,
                            premium: a.computes.elite(),
                            size: A.x64x64,
                            className: s(Ls, a.computes.elite() && $s),
                        }),
                    e.jsxs('div', {
                        className: s(Bs, a.computes.elite() && ks),
                        children: [
                            e.jsx(ms, { className: s(Ms, As) }),
                            a.computes.hasSpecialMechanics() && e.jsx(Ts, { className: Ms }),
                            e.jsx(Ve, { className: s(Ms, Gs) }),
                            a.computes.serviceRecords() && e.jsx(Cs, { className: Ms }),
                            e.jsx(p, {
                                upgradeLegacy: !0,
                                style: { color: K(a.stateLevel.get()) },
                                className: zs,
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
    });
V(new G().add(D).add(z).render(e.jsx(Vs, {})));
