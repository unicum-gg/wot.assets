import {
    t as e,
    D as s,
    j as a,
    f as i,
    r as n,
    R as r,
    y as t,
    J as l,
    A as c,
    z as o,
    w as d,
} from '../../../chunks/vendor.js';
import {
    i as _,
    c as m,
    n as p,
    aO as u,
    d6 as f,
    Z as k,
    H as b,
    Y as x,
    r as h,
    b7 as j,
    a2 as v,
    a0 as g,
    a1 as y,
    cw as N,
    d7 as w,
    x as P,
    aD as B,
    G as E,
    d8 as T,
    b0 as C,
    d9 as H,
    cy as O,
    J as L,
    F as S,
} from '../../../chunks/lib.js';
import { B as I, j as V, a as D, S as $, k as U, i as z } from '../../../chunks/perk.js';
import { T as M } from '../../../chunks/tankman_role.js';
import { T as F, a as A, W as R } from '../../../chunks/user_account_model.js';
/* empty css                    */ const Z = 'commander',
    W = 'default',
    G = 'active',
    J = 'activeDisable',
    X = 'disable',
    q = 'low',
    Y = 'newFull',
    K = 'newLow',
    Q = 'newDisableFull',
    ee = 'newDisableLow',
    se = 'lock',
    [ae, ie] = _()((e) => {
        const s = e.observableModel.primitives(['params', 'type']);
        return {
            type: s.type,
            computes: {
                params: m.primitive(function (e) {
                    return e(s.params.get());
                }),
            },
        };
    }, p);
function ne(e) {
    return function () {
        return ie().model.computes.params(e);
    };
}
const re = ne(u(e({ tankman: f }))),
    te = 'EfficiencyBonus_d696ae91',
    le = 'EfficiencyBonus_title_cb6cd9b1',
    ce = 'EfficiencyBonus_icons_3214fcc7',
    oe = 'EfficiencyBonus_bonus_6551325b',
    de = 'EfficiencyBonus_bonus__disabled_d820b959',
    _e = 'EfficiencyBonus_bonusIcons_ec77b4c9',
    me = 'EfficiencyBonus_battleBoostersOverlay_798a4d63',
    pe = 'EfficiencyBonus_bonusPercentage_bb4d7cec';
function ue(e) {
    return e.type === Z || 'brotherhood' === e.type ? `tankmen.skills.medium.${e.name}` : `artefact.${e.name}`;
}
const fe = s(function ({ className: e }) {
        const { vehicleBonusDetails: s } = re().tankman,
            n = s.reduce((e, s) => e + s.bonus, 0);
        return a.jsxs('div', {
            className: i(te, e),
            children: [
                a.jsx('div', {
                    className: le,
                    children: a.jsx(k, {
                        path: 'crew.crewInfoTooltip.efficiencyBonus.title',
                        params: { color: '#80D43A', value: b.formatReal('woZeroDigits', Math.round(100 * n) / 100) },
                    }),
                }),
                a.jsx('div', {
                    className: ce,
                    children: s.map((e, s) => {
                        const n = 0 === e.bonus;
                        if (e.type !== Z || !n)
                            return a.jsxs(
                                'div',
                                {
                                    className: i(oe, n && de),
                                    children: [
                                        a.jsxs('div', {
                                            className: _e,
                                            children: [
                                                a.jsx(x, { path: ue(e), width: '100%', height: '100%' }),
                                                e.type === I && a.jsx('div', { className: me }),
                                            ],
                                        }),
                                        !n &&
                                            a.jsx('div', {
                                                className: pe,
                                                children: a.jsx(k, {
                                                    upgradeLegacy: !0,
                                                    path: 'common.plusPercentValue',
                                                    params: {
                                                        value: b.formatReal(
                                                            'woZeroDigits',
                                                            Math.round(100 * e.bonus) / 100,
                                                        ),
                                                    },
                                                }),
                                            }),
                                    ],
                                },
                                `${e.name}-${s}`,
                            );
                    }),
                }),
            ],
        });
    }),
    ke = 'Header_b0317c12',
    be = 'Header_role_2ccc4739',
    xe = 'Header_roleIcon_830cdda2',
    he = 'Header_roleName_c9393f08',
    je = 'Header_name_f879f6e9',
    ve = 'Header_image_7903c260';
function ge(e, s) {
    return s ? `tankmen.icons.big.crewSkins.${j(e)}` : `tankmen.icons.big.${j(e)}`;
}
const ye = s(function ({ className: e }) {
        const { role: s, fullName: n, crewSkinId: r, customizedSkin: t } = re().tankman,
            l = h.resolve('strings');
        return a.jsxs('div', {
            className: i(ke, e),
            children: [
                a.jsxs('div', {
                    className: be,
                    children: [
                        a.jsx(M, { role: s, className: xe }),
                        a.jsx('div', { className: he, children: l.readOrEmpty(`item_types.tankman.roles.${s}`) }),
                    ],
                }),
                a.jsx('div', { className: je, children: n }),
                a.jsx(x, { className: ve, path: ge(r, t) }),
            ],
        });
    }),
    Ne = {
        base: 'LowEfficiency_1efeab37',
        progressBarValue: 'LowEfficiency_progressBarValue_905540b4',
        percentage: 'LowEfficiency_percentage_db7e92dc',
        skillsEfficiency: 'LowEfficiency_skillsEfficiency_a34ad6cd',
        skillsEfficiencyDivider: 'LowEfficiency_skillsEfficiencyDivider_90d40a96',
    },
    we = h.resolve('strings'),
    Pe = h.resolve('intl'),
    Be = s(function ({ className: e }) {
        const { currentVehicleSkillsEfficiency: s, skillsEfficiency: n } = re().tankman,
            r = Pe.formatNumber('integral', s * V);
        return a.jsxs('div', {
            className: i(Ne.base, e),
            children: [
                a.jsx('div', {
                    className: Ne.description,
                    children: we.readOrEmpty('crew.crewInfoTooltip.lowEfficiency.title'),
                }),
                a.jsxs('div', {
                    className: Ne.progressBarValue,
                    children: [
                        a.jsx('div', {
                            className: Ne.percentage,
                            children: a.jsx(k, {
                                path: 'common.percentValue',
                                params: { value: r },
                                upgradeLegacy: !0,
                            }),
                        }),
                        a.jsxs(v, {
                            reverse: !0,
                            size: y.extraSmall,
                            type: g.tankXP,
                            className: Ne.skillsEfficiency,
                            children: [
                                a.jsx('div', { children: Pe.formatNumber('integral', 1e5) }),
                                a.jsx('div', {
                                    className: Ne.skillsEfficiencyDivider,
                                    children: we.readOrEmpty('common.common.slash'),
                                }),
                                a.jsx('div', { children: Pe.formatNumber('integral', n.amount) }),
                            ],
                        }),
                    ],
                }),
                a.jsx(N, { value: s, size: 'small', maxValue: D }),
            ],
        });
    }),
    Ee = (e) =>
        n.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            n.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M12 3L3 8V9H21V8L12 3ZM4 19V18H20V19H21V20H3V19H4ZM5 11H7V16H5V11ZM11 11H9V16H11V11ZM13 11H15V16H13V11ZM19 11H17V16H19V11Z',
                fill: '#ECCA9D',
            }),
        );
const Te = {
        base: 'PerkTile_c4fa07da',
        perkBorder: 'PerkTile_perkBorder_62732f00',
        base__default: 'PerkTile_base__default_d25f8651',
        base__disable: 'PerkTile_base__disable_d25f8651',
        base__lock: 'PerkTile_base__lock_d25f8651',
        base__active: 'PerkTile_base__active_d25f8651',
        base__activeDisable: 'PerkTile_base__activeDisable_d25f8651',
        base__low: 'PerkTile_base__low_d25f8651',
        base__newFull: 'PerkTile_base__newFull_d25f8651',
        base__newLow: 'PerkTile_base__newLow_d25f8651',
        base__newDisableFull: 'PerkTile_base__newDisableFull_d25f8651',
        base__newDisableLow: 'PerkTile_base__newDisableLow_d25f8651',
        base__bonus: 'PerkTile_base__bonus_d25f8651',
        newPerkBackground: 'PerkTile_newPerkBackground_92b5f848',
        disabledOverlay: 'PerkTile_disabledOverlay_b9db2d59',
        perkIcon: 'PerkTile_perkIcon_e41d7d0a',
        currentProgress: 'PerkTile_currentProgress_dd2e40d8',
    },
    Ce = [X, Q, ee, J],
    He = [Q, Y],
    Oe = [G, J],
    Le = s(function ({ index: e, withBonus: s, role: n, className: r }) {
        const {
                perks: t,
                trainingProgress: l,
                newPerksCount: c,
                insideNativeTank: o,
                currentVehicleSkillsEfficiency: d,
                skillsEfficiency: _,
                bonusPerks: m,
                vehicleBonusDetails: p,
            } = re().tankman,
            {
                perks: u,
                newPerkCount: f,
                actualProgress: b,
            } = (function ({
                withBonus: e,
                role: s,
                bonusPerks: a,
                majorPerks: i,
                majorNewPerksCount: n,
                majorPerkTrainingProgress: r,
            }) {
                if (e) {
                    const e = a.find((e) => e.role === s);
                    return {
                        perks: e?.skills ?? [],
                        newPerkCount: e?.newCount ?? 0,
                        actualProgress: e?.trainingProgress,
                    };
                }
                return { perks: i, newPerkCount: n, actualProgress: r };
            })({
                role: n,
                withBonus: s,
                bonusPerks: m,
                majorPerks: t,
                majorNewPerksCount: c,
                majorPerkTrainingProgress: l,
            }),
            h = u && e >= u.length && e < u.length + f,
            j = u[e] && !h,
            v = e === u.length + f - 1,
            g = (function ({
                perk: e,
                vehicleSkillsEfficiency: s,
                skillsEfficiency: a,
                insideNativeTank: i,
                newPerk: n,
                lastAvailablePerk: r,
                actualProgress: t,
                instruction: l,
            }) {
                const c = !i && s === $,
                    o = !c && s < D,
                    d = a.level < D;
                return Boolean(l && e && l === e.name)
                    ? c
                        ? G
                        : W
                    : e || n
                      ? e && e.state === w.learning && !o
                          ? c
                              ? J
                              : G
                          : n && c
                            ? d
                                ? ee
                                : Q
                            : c || e?.state === w.irrelevant
                              ? X
                              : o || (void 0 !== t && r && t >= 0 && t < 100)
                                ? n
                                    ? K
                                    : q
                                : n
                                  ? Y
                                  : W
                      : se;
            })({
                perk: u[e],
                vehicleSkillsEfficiency: d,
                instruction: U(p),
                skillsEfficiency: _,
                insideNativeTank: o,
                newPerk: h,
                lastAvailablePerk: v,
                actualProgress: b,
            });
        return a.jsxs('div', {
            className: i(Te.base, s && Te.base__bonus, Te[`base__${g}`], r),
            children: [
                a.jsx('div', { className: Te.perkBorder }),
                He.includes(g) && a.jsx('div', { className: Te.newPerkBackground }),
                j
                    ? a.jsx(x, { className: Te.perkIcon, path: `tankmen.skills.big.${u[e]?.name}` })
                    : a.jsx('div', { className: Te.perkIcon }),
                Oe.includes(g) &&
                    a.jsx('div', {
                        className: Te.currentProgress,
                        children: a.jsx(k, { path: 'common.percentValue', params: { value: b }, upgradeLegacy: !0 }),
                    }),
                Ce.includes(g) && a.jsx('div', { className: Te.disabledOverlay }),
            ],
        });
    }),
    Se = 'PerksProgression_27852bb8',
    Ie = 'PerksProgression_icon_ad282d1e',
    Ve = 'PerksProgression_perkTile_b0b6668d',
    De = 'PerksProgression_perkLine_5da1ae7d',
    $e = 'PerksProgression_perkLine__bonus_523b1287';
function Ue({ withBonus: e, role: s }) {
    const n = e ? 3 : 6;
    return a.jsxs('div', {
        className: Se,
        children: [
            a.jsx(M, { role: s, className: Ie }),
            P(n, (n) =>
                a.jsxs(
                    r.Fragment,
                    {
                        children: [
                            n > 0 && a.jsx('div', { className: i(De, e && $e) }),
                            a.jsx(Le, { className: Ve, index: n, withBonus: e, role: s }),
                        ],
                    },
                    `${s}-${n}`,
                ),
            ),
        ],
    });
}
const ze = 'PerksBlock_f82e9f49',
    Me = 'PerksBlock_perksBlockWrapper_c9f73338',
    Fe = 'PerksBlock_perksBlockWrapper__bonus_e20f2761',
    Ae = 'PerksBlock_perksBlockWrapper__compact_9d1d73ac',
    Re = 'PerksBlock_perksBlockHeader_64846481',
    Ze = 'PerksBlock_perkCounter_fd44504f',
    We = 'PerksBlock_perksText_dec68431',
    Ge = 'PerksBlock_accelerateTraining_dc79b4c3',
    Je = 'PerksBlock_accelerateTrainingIcon_c34017ae';
function Xe(e) {
    return e && e.some((e) => e.state === w.learning);
}
const qe = s(function ({ className: e }) {
        const { role: s, perks: n, bonusPerks: r, quickTraining: t } = re().tankman,
            l = h.resolve('strings'),
            c = r.reduce((e, s) => e + s.skills.length, 0),
            o = r.length > 0,
            d = !t && !o && !Xe(n),
            _ = !t && o && !Xe(r[r.length - 1]?.skills);
        return a.jsxs('div', {
            className: i(ze, e),
            children: [
                a.jsxs('div', {
                    className: i(Me, d && Ae),
                    children: [
                        a.jsxs('div', {
                            className: Re,
                            children: [
                                a.jsx(z, { className: Ze, value: n.length, main: !0 }),
                                a.jsx('div', {
                                    className: We,
                                    children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.major'),
                                }),
                            ],
                        }),
                        a.jsx(Ue, { role: s }),
                    ],
                }),
                o &&
                    a.jsxs('div', {
                        className: i(Me, Fe, _ && Ae),
                        children: [
                            a.jsxs('div', {
                                className: Re,
                                children: [
                                    a.jsx(z, { className: Ze, value: c, main: !1 }),
                                    a.jsx('div', {
                                        className: We,
                                        children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.bonus'),
                                    }),
                                ],
                            }),
                            r.map(({ role: e }, s) => a.jsx(Ue, { role: e, withBonus: !0 }, `${e}-${s}`)),
                        ],
                    }),
                t &&
                    a.jsxs('div', {
                        className: Ge,
                        children: [
                            a.jsx(Ee, { className: Je }),
                            l.readOrEmpty('crew.crewInfoTooltip.accelerateTraining'),
                        ],
                    }),
            ],
        });
    }),
    Ye = 'Specialization_b8ff1390',
    Ke = 'Specialization_specializationTitle_9a88dfae',
    Qe = 'Specialization_specializationList_b4709f0f',
    es = 'Specialization_specializationItem_51eceac3',
    ss = 'Specialization_vehicleText_d256022e',
    as = 'Specialization_premiumVehicleIcon_eddfdf68',
    is = s(function ({ className: e }) {
        const { nativeVehicle: s } = re().tankman,
            n = h.resolve('strings');
        return a.jsxs('div', {
            className: i(Ye, e),
            children: [
                a.jsx('div', { className: Ke, children: n.readOrEmpty('crew.crewInfoTooltip.penalty.specialization') }),
                a.jsxs('div', {
                    className: Qe,
                    children: [
                        a.jsxs(B, {
                            className: es,
                            children: [
                                a.jsx(B.Level, { className: ss, value: s.tier }),
                                E(s.type) && a.jsx(B.Type, { type: s.type, size: B.Type.sizes.x24x24 }),
                                a.jsx(B.Name, { className: ss, children: s.shortName }),
                            ],
                        }),
                        a.jsxs('div', {
                            className: es,
                            children: [
                                a.jsx('div', { className: as }),
                                a.jsx(k, {
                                    path: `crew.crewInfoTooltip.specialization.vehicleType.${j(s.type)}`,
                                    params: {
                                        nation: n.readOrEmpty(`crew.crewInfoTooltip.specialization.nation.${s.nation}`),
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ns = (e) =>
        n.createElement(
            'svg',
            {
                width: 48,
                height: 48,
                viewBox: '0 0 48 48',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            n.createElement(
                'g',
                { opacity: 0.1 },
                n.createElement(
                    'mask',
                    {
                        id: 'mask0_416_14088',
                        style: { maskType: 'alpha' },
                        maskUnits: 'userSpaceOnUse',
                        x: 3,
                        y: 3,
                        width: 42,
                        height: 42,
                    },
                    n.createElement(
                        'g',
                        null,
                        n.createElement('rect', {
                            x: 3,
                            y: 3,
                            width: 42,
                            height: 42,
                            fill: 'url(#pattern0_416_14088)',
                        }),
                    ),
                ),
                n.createElement(
                    'g',
                    { mask: 'url(#mask0_416_14088)' },
                    n.createElement('circle', { cx: 24, cy: 24, r: 21, fill: 'url(#paint0_radial_416_14088)' }),
                ),
            ),
            n.createElement(
                'g',
                null,
                n.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M31.3461 16.9126L30.2948 15.9658L27.0732 18.8672L26.4351 18.5699H24.2253L23.336 18H21.7758L20.6478 19.0423H19.9247C19.7228 19.2709 19.546 19.5333 19.371 19.7931C19.2897 19.9137 19.2088 20.0338 19.126 20.1496L18.6748 21.6955L20.3893 23.1169H17.4115C17.4115 23.1169 16.0129 22.4536 15.0654 22.7379C14.118 23.0221 14 24.1067 14 24.1067C14 24.1067 14 25.9596 14.5234 26.8833C14.5986 26.952 14.7147 27.11 14.8619 27.3104C15.1767 27.739 15.6338 28.3613 16.1369 28.7163L14.5253 30.1677L15.5766 31.1145L31.3461 16.9126ZM27.4688 28.998C25.357 28.9963 22.4075 28.9939 19.7941 28.9927L29.6854 20.0847H36V21.0322H29.5933C29.5945 21.2753 29.4321 21.5574 29.2712 21.8368C29.1277 22.086 28.9855 22.333 28.9617 22.5484C28.5951 22.7934 27.9771 23.0957 27.5812 23.2844L29.4276 23.2436L29.3769 23.7892L33.0222 24.0645L33.4734 24.5383C33.5016 24.9992 33.5016 25.5934 33.4734 26.0544C33.1684 26.5673 31.2175 29 30.2249 29C29.9068 29 28.8774 28.9992 27.479 28.998L27.4752 28.998L27.4688 28.998Z',
                    fill: '#FFC6C3',
                }),
            ),
            n.createElement(
                'defs',
                null,
                n.createElement(
                    'pattern',
                    {
                        id: 'pattern0_416_14088',
                        patternContentUnits: 'objectBoundingBox',
                        width: 2.38095,
                        height: 2.38095,
                    },
                    n.createElement('use', { xlinkHref: '#image0_416_14088', transform: 'scale(0.0238095)' }),
                ),
                n.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_416_14088',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(24 24) rotate(90) scale(21)',
                    },
                    n.createElement('stop', { stopColor: '#D9D9D9' }),
                    n.createElement('stop', { offset: 1, stopColor: '#D9D9D9', stopOpacity: 0 }),
                ),
            ),
        ),
    rs = 'UntrainedPenalty_ac022fb6',
    ts = 'UntrainedPenalty_penaltyHeader_6a22cae9',
    ls = 'UntrainedPenalty_untrainedIcon_90be7885',
    cs = 'UntrainedPenalty_title_b69187b5',
    os = 'UntrainedPenalty_description_69c628c';
function ds({ className: e }) {
    const s = h.resolve('strings');
    return a.jsxs('div', {
        className: i(rs, e),
        children: [
            a.jsxs('div', {
                className: ts,
                children: [
                    a.jsx(ns, { className: ls }),
                    a.jsx('div', { className: cs, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.title') }),
                ],
            }),
            a.jsx('div', { className: os, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.description') }),
        ],
    });
}
const _s = 'Index_4a4da35',
    ms = 'Index_decorator_a30857d',
    ps = 'Index_crewInfoBase_fd519c21',
    us = 'Index_section_638478ff',
    fs = s(function () {
        const { insideNativeTank: e, currentVehicleSkillsEfficiency: s } = re().tankman,
            i = !e && s === $,
            n = s < D && !i;
        return a.jsx('div', {
            className: _s,
            children: a.jsx(T.Decorator, {
                className: ms,
                children: a.jsxs('div', {
                    className: ps,
                    children: [
                        a.jsx(ye, { className: us }),
                        i && a.jsx(ds, {}),
                        a.jsx(is, { className: us }),
                        n && a.jsx(Be, { className: us }),
                        a.jsx(qe, { className: us }),
                        a.jsx(fe, {}),
                    ],
                }),
            }),
        });
    }),
    ks = Object.freeze(
        Object.defineProperty({ __proto__: null, default: fs }, Symbol.toStringTag, { value: 'Module' }),
    ),
    bs = l(['None', 'Core', 'Pro']),
    xs = l(['Inactive', 'Active', 'Cancelled']),
    hs = l([6, 12]),
    js = l(['unlock', 'unlockSteamAndCn', 'unlockPro']),
    vs = e({ label: d(), type: d() }),
    gs = ne(
        u(
            e({
                isWotPlusEnabled: c(),
                type: bs,
                state: xs,
                periodicity: hs,
                expiryTime: o(),
                isSteamPlatform: c(),
                isCnRegion: c(),
                tooltipVariant: js,
                bonuses: t(vs),
                proBonuses: t(vs),
            }),
        ),
    ),
    ys = {
        base_wrapper: 'Hint_base_wrapper_653f0747',
        base_icon: 'Hint_base_icon_cd32cfad',
        base_text: 'Hint_base_text_f734dbc2',
        base__steamCn: 'Hint_base__steamCn_135a3ed',
    },
    Ns = h.resolve('images'),
    ws = h.resolve('strings');
function Ps({ unlockType: e }) {
    const s = {
        [F.Unlock]: ws.readOrEmpty('subscription.headerButton.tooltip.unlockSubscription'),
        [F.UnlockSteamAndCn]: ws.readOrEmpty('subscription.headerButton.tooltip.unlockSteamAndCn'),
        [F.UnlockPro]: ws.readOrEmpty('subscription.headerButton.tooltip.unlockPro'),
    };
    return a.jsx('div', {
        className: i(ys.base, e === F.UnlockPro && ys.base__steamCn),
        children: a.jsxs('div', {
            className: ys.base_wrapper,
            children: [
                [F.Unlock, F.UnlockSteamAndCn].includes(e) &&
                    a.jsx('img', { className: ys.base_icon, src: Ns.readOrEmpty('subscription.lock') }),
                a.jsx('div', { className: ys.base_text, children: s[e] }),
            ],
        }),
    });
}
const Bs = 'Bonuslist_30606a62',
    Es = 'Bonuslist_list_d0c73d0d',
    Ts = 'Bonuslist_list_leftColumn_30606a62',
    Cs = 'Bonuslist_list_rightColumn_30606a62',
    Hs = 'Bonuslist_list_proBonusesLeftColumn_30606a62',
    Os = 'Bonuslist_list_proBonusesRightColumn_f94cf518',
    Ls = 'Bonuslist_list__unlockPro_30606a62',
    Ss = 'Bonuslist_list_item_a02b09a8',
    Is = 'Bonuslist_icon_280817ab',
    Vs = 'Bonuslist_iconLock_239f55db',
    Ds = 'Bonuslist_name_5f548721',
    $s = 'Bonuslist_list_item__pro_30606a62',
    Us = 'Bonuslist_list__pro_15c23dd',
    zs = 'Bonuslist_list__extended_b282b07a',
    Ms = 'Bonuslist_proBenefits_10504c1',
    Fs = 'Bonuslist_proBenefits__upgraded_1052ec71';
function As() {
    const { bonuses: e, proBonuses: s, tooltipVariant: r, isCnRegion: t, isSteamPlatform: l, type: c } = gs(),
        o = h.resolve('images'),
        d = n.useMemo(() => {
            const a = e.map((e) => ({ ...e, isProBonus: !1 }));
            return c === A.Pro ? [...s.map((e) => ({ ...e, isProBonus: !0 })), ...a] : a;
        }, [e, s, c]),
        _ = (e) => {
            const s = Math.ceil(e.length / 2);
            return [e.slice(0, s), e.slice(s)];
        },
        [m, p] = _(d),
        [u, f] = _(s),
        k = d.length;
    return a.jsxs('div', {
        className: Bs,
        children: [
            a.jsx('div', {
                className: i(Es, k >= 12 && zs),
                children:
                    k > 0 &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsx('div', {
                                className: Ts,
                                children:
                                    m &&
                                    m.map((e) =>
                                        a.jsxs(
                                            'div',
                                            {
                                                className: i(Ss, e.isProBonus && $s),
                                                children: [
                                                    a.jsx('img', {
                                                        className: Is,
                                                        src: o.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                    }),
                                                    a.jsx('div', { className: Ds, children: e.label }),
                                                ],
                                            },
                                            e.label,
                                        ),
                                    ),
                            }),
                            a.jsx('div', {
                                className: Cs,
                                children:
                                    p &&
                                    p.map((e) =>
                                        a.jsxs(
                                            'div',
                                            {
                                                className: i(Ss, e.isProBonus && $s),
                                                children: [
                                                    a.jsx('img', {
                                                        className: Is,
                                                        src: o.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                    }),
                                                    a.jsx('div', { className: Ds, children: e.label }),
                                                ],
                                            },
                                            e.label,
                                        ),
                                    ),
                            }),
                        ],
                    }),
            }),
            r !== F.UnlockSteamAndCn &&
                !l &&
                !t &&
                c !== A.Pro &&
                a.jsxs('div', {
                    className: i(Ms, r === F.UnlockPro && Fs),
                    children: [
                        r === F.UnlockPro && a.jsx(Ps, { unlockType: F.UnlockPro }),
                        a.jsxs('div', {
                            className: i(Es, Us, r === F.UnlockPro && Ls),
                            children: [
                                a.jsx('div', {
                                    className: Hs,
                                    children: u?.map((e) =>
                                        a.jsxs(
                                            'div',
                                            {
                                                className: Ss,
                                                children: [
                                                    a.jsx('img', {
                                                        className: Is,
                                                        src: o.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                    }),
                                                    a.jsx('img', {
                                                        className: Vs,
                                                        src: o.readOrEmpty('subscription.lock_yellow_glow'),
                                                    }),
                                                    a.jsx('div', { className: Ds, children: e.label }),
                                                ],
                                            },
                                            e.label,
                                        ),
                                    ),
                                }),
                                a.jsx('div', {
                                    className: Os,
                                    children: f?.map((e) =>
                                        a.jsxs(
                                            'div',
                                            {
                                                className: Ss,
                                                children: [
                                                    a.jsx('img', {
                                                        className: Is,
                                                        src: o.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                    }),
                                                    a.jsx('img', {
                                                        className: Vs,
                                                        src: o.readOrEmpty('subscription.lock_yellow_glow'),
                                                    }),
                                                    a.jsx('div', { className: Ds, children: e.label }),
                                                ],
                                            },
                                            e.label,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
const Rs = {
    base: 'Header_5400049d',
    base_column: 'Header_base_column_e43fe643',
    background: 'Header_background_fbb8754f',
    background__core: 'Header_background__core_3cecc71e',
    background__pro: 'Header_background__pro_8e2017ec',
    icon: 'Header_icon_efb3dd40',
    icon__none: 'Header_icon__none_1f403126',
    icon__pro: 'Header_icon__pro_67196101',
    state: 'Header_state_4717d7c',
    state_title: 'Header_state_title_4709f526',
    state_status: 'Header_state_status_35e9eca0',
    state_status__cancelled: 'Header_state_status__cancelled_99d267ac',
    state_status__active: 'Header_state_status__active_4249588a',
    getSubscriptionHint: 'Header_getSubscriptionHint_65f475ba',
    periodicity: 'Header_periodicity_65f475ba',
    extendsOn: 'Header_extendsOn_f208a15b',
};
function Zs({ expiryTime: e, periodicity: s, state: n, type: r }) {
    const { isCnRegion: t } = gs(),
        l = h.resolve('strings');
    return a.jsxs('div', {
        className: Rs.base,
        children: [
            a.jsx('div', {
                className: Rs.base_column,
                children: a.jsx('div', { className: i(Rs.icon, Rs[`icon__${r.toLowerCase()}`]) }),
            }),
            a.jsxs('div', {
                className: Rs.base_column,
                children: [
                    a.jsxs('div', {
                        className: Rs.state,
                        children: [
                            a.jsxs('div', {
                                className: Rs.state_title,
                                children: [
                                    l.readOrEmpty(
                                        'subscription.headerButton.tooltip.title' +
                                            (t ? '' : r === A.Core ? 'Core' : r === A.Pro ? 'Pro' : ''),
                                    ),
                                    r === A.None &&
                                        a.jsxs(a.Fragment, {
                                            children: [
                                                ' ',
                                                l.readOrEmpty('subscription.headerButton.tooltip.nonSubscriberTitle'),
                                            ],
                                        }),
                                ],
                            }),
                            n !== R.Inactive &&
                                a.jsx('div', {
                                    className: i(Rs.state_status, Rs[`state_status__${n.toLowerCase()}`]),
                                    children: l.readOrEmpty(`subscription.headerButton.tooltip.${n}`),
                                }),
                        ],
                    }),
                    n === R.Inactive &&
                        a.jsx('div', {
                            className: Rs.getSubscriptionHint,
                            children: l.readOrEmpty('subscription.headerButton.tooltip.getSubscriptionHint'),
                        }),
                    s &&
                        r === A.Pro &&
                        a.jsx('div', {
                            className: Rs.periodicity,
                            children: a.jsx(C, {
                                text: l.readOrEmpty('subscription.headerButton.tooltip.periodicity'),
                                params: { number: 30 * s },
                                upgradeLegacy: !0,
                            }),
                        }),
                    e && r !== A.None
                        ? a.jsx('div', {
                              className: Rs.extendsOn,
                              children: a.jsx(C, {
                                  text: l.readOrEmpty(
                                      'subscription.headerButton.tooltip.' +
                                          (n === R.Cancelled ? 'expiresOn' : 'extendsOn'),
                                  ),
                                  params: { date: H(e, O.ShortDate) },
                                  upgradeLegacy: !0,
                              }),
                          })
                        : null,
                ],
            }),
            a.jsx('div', { className: i(Rs.background, Rs[`background__${r.toLowerCase()}`]) }),
        ],
    });
}
const Ws = {
        decorator: 'Index_decorator_29808c75',
        wrapper: 'Index_wrapper_99411988',
        wrapper__pro: 'Index_wrapper__pro_fe256643',
    },
    Gs = s(function () {
        const { state: e, type: s, periodicity: n, expiryTime: r, tooltipVariant: t } = gs();
        return a.jsx('div', {
            className: Ws.base,
            children: a.jsx(T.Decorator, {
                className: Ws.decorator,
                children: a.jsxs('div', {
                    className: i(Ws.wrapper, s === A.Pro && Ws.wrapper__pro),
                    children: [
                        a.jsx(Zs, { expiryTime: r, periodicity: n, state: e, type: s }),
                        s === A.None && a.jsx(Ps, { unlockType: t }),
                        a.jsx(As, {}),
                    ],
                }),
            }),
        });
    }),
    Js = Object.freeze(
        Object.defineProperty({ __proto__: null, default: Gs }, Symbol.toStringTag, { value: 'Module' }),
    ),
    Xs = Object.fromEntries(
        Object.entries(Object.assign({ './crew_info/index.tsx': ks, './wot_plus_header_widget/index.tsx': Js })).map(
            ([e, s]) => [e.match(/\/([^/]+)\/index\.tsx/)[1], { Component: s.default }],
        ),
    );
const qs = s(function () {
    const { model: e } = ie(),
        s = e.type.get(),
        i = Xs[s]?.Component;
    if (i) return a.jsx(T, { children: a.jsx(i, {}) });
    console.error(`Unknown tooltip type: ${s}`);
});
S(new L().add(ae).render(a.jsx(qs, {})));
