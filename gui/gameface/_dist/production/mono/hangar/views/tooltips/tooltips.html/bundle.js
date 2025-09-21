import { _ as e, w as s, j as a, f as t, r, R as n } from '../../../chunks/vendor.js';
import {
    i,
    c as o,
    n as l,
    Z as c,
    I as p,
    Y as d,
    r as u,
    bL as m,
    a2 as h,
    a0 as f,
    a1 as y,
    cd as k,
    cW as v,
    z as b,
    aL as _,
    H as P,
    cU as j,
    J as x,
    G as g,
} from '../../../chunks/lib.js';
import { B as w, P as N } from '../../../chunks/perk.js';
import { T as A } from '../../../chunks/tankman_role.js';
/* empty css                    */ const B = 'commander',
    E = 'default',
    T = 'active',
    V = 'activeDisable',
    L = 'disable',
    C = 'low',
    D = 'newFull',
    S = 'newLow',
    I = 'newDisableFull',
    H = 'newDisableLow',
    z = 'lock',
    [O, $] = i()((e) => {
        const s = e.observableModel.primitives(['params', 'type']);
        return {
            type: s.type,
            computes: {
                params: o.primitive(function (e) {
                    return e(s.params.get());
                }),
            },
        };
    }, l);
const M =
    ((U = (() => {
        const s = (e) =>
                'number' == typeof e.id &&
                'number' == typeof e.level &&
                'boolean' == typeof e.maxLevelAchieved &&
                'string' == typeof e.crewSkinId &&
                'boolean' == typeof e.customizedSkin &&
                'number' == typeof e.newPerksCount &&
                'number' == typeof e.newBonusPerksCount &&
                'number' == typeof e.trainingProgress &&
                'boolean' == typeof e.quickTraining &&
                Array.isArray(e.perks) &&
                e.perks.every((e) => 'object' == typeof e && null !== e && a(e)) &&
                Array.isArray(e.bonusPerks) &&
                e.bonusPerks.every((e) => 'object' == typeof e && null !== e && t(e)) &&
                'string' == typeof e.role &&
                'string' == typeof e.fullName &&
                'boolean' == typeof e.tankmanSuitable &&
                'boolean' == typeof e.insideNativeTank &&
                'boolean' == typeof e.replaceLocked &&
                'object' == typeof e.nativeVehicle &&
                null !== e.nativeVehicle &&
                r(e.nativeVehicle) &&
                'object' == typeof e.skillsEfficiency &&
                null !== e.skillsEfficiency &&
                n(e.skillsEfficiency) &&
                'number' == typeof e.currentVehicleSkillsEfficiency &&
                'object' == typeof e.vehicleBonus &&
                null !== e.vehicleBonus &&
                i(e.vehicleBonus) &&
                Array.isArray(e.vehicleBonusDetails) &&
                e.vehicleBonusDetails.every((e) => 'object' == typeof e && null !== e && o(e)),
            a = (e) => 'string' == typeof e.name && !0,
            t = (e) =>
                'string' == typeof e.role &&
                'number' == typeof e.newCount &&
                'number' == typeof e.trainingProgress &&
                Array.isArray(e.skills) &&
                e.skills.every((e) => 'object' == typeof e && null !== e && a(e)),
            r = (e) =>
                'string' == typeof e.shortName &&
                'string' == typeof e.type &&
                'number' == typeof e.tier &&
                'string' == typeof e.nation,
            n = (e) => 'number' == typeof e.level && 'number' == typeof e.amount,
            i = (e) =>
                'number' == typeof e.equipment &&
                'number' == typeof e.brotherhood &&
                'number' == typeof e.optionalDevices &&
                'number' == typeof e.commander &&
                'number' == typeof e.battleBooster,
            o = (e) => 'string' == typeof e.name && 'string' == typeof e.type && 'number' == typeof e.bonus,
            l = (s, a, t = !0) =>
                ('number' == typeof s.id ||
                    e(
                        t,
                        { method: 'typia.json.createAssertParse', path: a + '.id', expected: 'number', value: s.id },
                        y,
                    )) &&
                ('number' == typeof s.level ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.level',
                            expected: 'number',
                            value: s.level,
                        },
                        y,
                    )) &&
                ('boolean' == typeof s.maxLevelAchieved ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.maxLevelAchieved',
                            expected: 'boolean',
                            value: s.maxLevelAchieved,
                        },
                        y,
                    )) &&
                ('string' == typeof s.crewSkinId ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.crewSkinId',
                            expected: 'string',
                            value: s.crewSkinId,
                        },
                        y,
                    )) &&
                ('boolean' == typeof s.customizedSkin ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.customizedSkin',
                            expected: 'boolean',
                            value: s.customizedSkin,
                        },
                        y,
                    )) &&
                ('number' == typeof s.newPerksCount ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.newPerksCount',
                            expected: 'number',
                            value: s.newPerksCount,
                        },
                        y,
                    )) &&
                ('number' == typeof s.newBonusPerksCount ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.newBonusPerksCount',
                            expected: 'number',
                            value: s.newBonusPerksCount,
                        },
                        y,
                    )) &&
                ('number' == typeof s.trainingProgress ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.trainingProgress',
                            expected: 'number',
                            value: s.trainingProgress,
                        },
                        y,
                    )) &&
                ('boolean' == typeof s.quickTraining ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.quickTraining',
                            expected: 'boolean',
                            value: s.quickTraining,
                        },
                        y,
                    )) &&
                (((Array.isArray(s.perks) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.perks',
                            expected: 'Array<Perk>',
                            value: s.perks,
                        },
                        y,
                    )) &&
                    s.perks.every(
                        (s, r) =>
                            ((('object' == typeof s && null !== s) ||
                                e(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.perks[' + r + ']',
                                        expected: 'Perk',
                                        value: s,
                                    },
                                    y,
                                )) &&
                                c(s, a + '.perks[' + r + ']', t)) ||
                            e(
                                t,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.perks[' + r + ']',
                                    expected: 'Perk',
                                    value: s,
                                },
                                y,
                            ),
                    )) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.perks',
                            expected: 'Array<Perk>',
                            value: s.perks,
                        },
                        y,
                    )) &&
                (((Array.isArray(s.bonusPerks) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.bonusPerks',
                            expected: 'Array<BonusPerk>',
                            value: s.bonusPerks,
                        },
                        y,
                    )) &&
                    s.bonusPerks.every(
                        (s, r) =>
                            ((('object' == typeof s && null !== s) ||
                                e(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.bonusPerks[' + r + ']',
                                        expected: 'BonusPerk',
                                        value: s,
                                    },
                                    y,
                                )) &&
                                p(s, a + '.bonusPerks[' + r + ']', t)) ||
                            e(
                                t,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.bonusPerks[' + r + ']',
                                    expected: 'BonusPerk',
                                    value: s,
                                },
                                y,
                            ),
                    )) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.bonusPerks',
                            expected: 'Array<BonusPerk>',
                            value: s.bonusPerks,
                        },
                        y,
                    )) &&
                ('string' == typeof s.role ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.role',
                            expected: 'string',
                            value: s.role,
                        },
                        y,
                    )) &&
                ('string' == typeof s.fullName ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.fullName',
                            expected: 'string',
                            value: s.fullName,
                        },
                        y,
                    )) &&
                ('boolean' == typeof s.tankmanSuitable ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.tankmanSuitable',
                            expected: 'boolean',
                            value: s.tankmanSuitable,
                        },
                        y,
                    )) &&
                ('boolean' == typeof s.insideNativeTank ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.insideNativeTank',
                            expected: 'boolean',
                            value: s.insideNativeTank,
                        },
                        y,
                    )) &&
                ('boolean' == typeof s.replaceLocked ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.replaceLocked',
                            expected: 'boolean',
                            value: s.replaceLocked,
                        },
                        y,
                    )) &&
                (((('object' == typeof s.nativeVehicle && null !== s.nativeVehicle) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.nativeVehicle',
                            expected: 'NativeVehicle',
                            value: s.nativeVehicle,
                        },
                        y,
                    )) &&
                    d(s.nativeVehicle, a + '.nativeVehicle', t)) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.nativeVehicle',
                            expected: 'NativeVehicle',
                            value: s.nativeVehicle,
                        },
                        y,
                    )) &&
                (((('object' == typeof s.skillsEfficiency && null !== s.skillsEfficiency) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.skillsEfficiency',
                            expected: 'LearnedSkills',
                            value: s.skillsEfficiency,
                        },
                        y,
                    )) &&
                    u(s.skillsEfficiency, a + '.skillsEfficiency', t)) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.skillsEfficiency',
                            expected: 'LearnedSkills',
                            value: s.skillsEfficiency,
                        },
                        y,
                    )) &&
                ('number' == typeof s.currentVehicleSkillsEfficiency ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.currentVehicleSkillsEfficiency',
                            expected: 'number',
                            value: s.currentVehicleSkillsEfficiency,
                        },
                        y,
                    )) &&
                (((('object' == typeof s.vehicleBonus && null !== s.vehicleBonus) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleBonus',
                            expected: 'TankmanVehicleBonus',
                            value: s.vehicleBonus,
                        },
                        y,
                    )) &&
                    m(s.vehicleBonus, a + '.vehicleBonus', t)) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleBonus',
                            expected: 'TankmanVehicleBonus',
                            value: s.vehicleBonus,
                        },
                        y,
                    )) &&
                (((Array.isArray(s.vehicleBonusDetails) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleBonusDetails',
                            expected: 'Array<VehicleBonusDetail>',
                            value: s.vehicleBonusDetails,
                        },
                        y,
                    )) &&
                    s.vehicleBonusDetails.every(
                        (s, r) =>
                            ((('object' == typeof s && null !== s) ||
                                e(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.vehicleBonusDetails[' + r + ']',
                                        expected: 'VehicleBonusDetail',
                                        value: s,
                                    },
                                    y,
                                )) &&
                                h(s, a + '.vehicleBonusDetails[' + r + ']', t)) ||
                            e(
                                t,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.vehicleBonusDetails[' + r + ']',
                                    expected: 'VehicleBonusDetail',
                                    value: s,
                                },
                                y,
                            ),
                    )) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleBonusDetails',
                            expected: 'Array<VehicleBonusDetail>',
                            value: s.vehicleBonusDetails,
                        },
                        y,
                    )),
            c = (s, a, t = !0) =>
                ('string' == typeof s.name ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.name',
                            expected: 'string',
                            value: s.name,
                        },
                        y,
                    )) &&
                !0,
            p = (s, a, t = !0) =>
                ('string' == typeof s.role ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.role',
                            expected: 'string',
                            value: s.role,
                        },
                        y,
                    )) &&
                ('number' == typeof s.newCount ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.newCount',
                            expected: 'number',
                            value: s.newCount,
                        },
                        y,
                    )) &&
                ('number' == typeof s.trainingProgress ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.trainingProgress',
                            expected: 'number',
                            value: s.trainingProgress,
                        },
                        y,
                    )) &&
                (((Array.isArray(s.skills) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.skills',
                            expected: 'Array<Perk>',
                            value: s.skills,
                        },
                        y,
                    )) &&
                    s.skills.every(
                        (s, r) =>
                            ((('object' == typeof s && null !== s) ||
                                e(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.skills[' + r + ']',
                                        expected: 'Perk',
                                        value: s,
                                    },
                                    y,
                                )) &&
                                c(s, a + '.skills[' + r + ']', t)) ||
                            e(
                                t,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.skills[' + r + ']',
                                    expected: 'Perk',
                                    value: s,
                                },
                                y,
                            ),
                    )) ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.skills',
                            expected: 'Array<Perk>',
                            value: s.skills,
                        },
                        y,
                    )),
            d = (s, a, t = !0) =>
                ('string' == typeof s.shortName ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.shortName',
                            expected: 'string',
                            value: s.shortName,
                        },
                        y,
                    )) &&
                ('string' == typeof s.type ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.type',
                            expected: 'string',
                            value: s.type,
                        },
                        y,
                    )) &&
                ('number' == typeof s.tier ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.tier',
                            expected: 'number',
                            value: s.tier,
                        },
                        y,
                    )) &&
                ('string' == typeof s.nation ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.nation',
                            expected: 'string',
                            value: s.nation,
                        },
                        y,
                    )),
            u = (s, a, t = !0) =>
                ('number' == typeof s.level ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.level',
                            expected: 'number',
                            value: s.level,
                        },
                        y,
                    )) &&
                ('number' == typeof s.amount ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.amount',
                            expected: 'number',
                            value: s.amount,
                        },
                        y,
                    )),
            m = (s, a, t = !0) =>
                ('number' == typeof s.equipment ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.equipment',
                            expected: 'number',
                            value: s.equipment,
                        },
                        y,
                    )) &&
                ('number' == typeof s.brotherhood ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.brotherhood',
                            expected: 'number',
                            value: s.brotherhood,
                        },
                        y,
                    )) &&
                ('number' == typeof s.optionalDevices ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.optionalDevices',
                            expected: 'number',
                            value: s.optionalDevices,
                        },
                        y,
                    )) &&
                ('number' == typeof s.commander ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.commander',
                            expected: 'number',
                            value: s.commander,
                        },
                        y,
                    )) &&
                ('number' == typeof s.battleBooster ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.battleBooster',
                            expected: 'number',
                            value: s.battleBooster,
                        },
                        y,
                    )),
            h = (s, a, t = !0) =>
                ('string' == typeof s.name ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.name',
                            expected: 'string',
                            value: s.name,
                        },
                        y,
                    )) &&
                ('string' == typeof s.type ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.type',
                            expected: 'string',
                            value: s.type,
                        },
                        y,
                    )) &&
                ('number' == typeof s.bonus ||
                    e(
                        t,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.bonus',
                            expected: 'number',
                            value: s.bonus,
                        },
                        y,
                    )),
            f = (e) =>
                'object' == typeof e &&
                null !== e &&
                ((e) => 'object' == typeof e.tankman && null !== e.tankman && s(e.tankman))(e);
        let y;
        const k = (s, a) => {
            var t, r;
            return (
                !1 === f(s) &&
                    ((y = a),
                    (r = '$input'),
                    ((('object' == typeof (t = s) && null !== t) ||
                        e(
                            !0,
                            { method: 'typia.json.createAssertParse', path: r + '', expected: 'CrewInfo', value: t },
                            y,
                        )) &&
                        ((s, a, t = !0) =>
                            ((('object' == typeof s.tankman && null !== s.tankman) ||
                                e(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.tankman',
                                        expected: 'Tankman',
                                        value: s.tankman,
                                    },
                                    y,
                                )) &&
                                l(s.tankman, a + '.tankman', t)) ||
                            e(
                                t,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.tankman',
                                    expected: 'Tankman',
                                    value: s.tankman,
                                },
                                y,
                            ))(t, r + '', !0)) ||
                        e(
                            !0,
                            { method: 'typia.json.createAssertParse', path: r + '', expected: 'CrewInfo', value: t },
                            y,
                        )),
                s
            );
        };
        return (e, s) => k(JSON.parse(e), s);
    })()),
    function () {
        return $().model.computes.params(U);
    });
var U;
const Z = 'EfficiencyBonus_d696ae91',
    q = 'EfficiencyBonus_title_cb6cd9b1',
    F = 'EfficiencyBonus_icons_3214fcc7',
    R = 'EfficiencyBonus_bonus_6551325b',
    W = 'EfficiencyBonus_bonus__disabled_d820b959',
    G = 'EfficiencyBonus_bonusIcons_ec77b4c9',
    J = 'EfficiencyBonus_battleBoostersOverlay_798a4d63',
    X = 'EfficiencyBonus_bonusPercentage_bb4d7cec';
function Y(e) {
    return e.type === B || 'brotherhood' === e.type ? `tankmen.skills.medium.${e.name}` : `artefact.${e.name}`;
}
const K = s(function ({ className: e }) {
        const { vehicleBonusDetails: s } = M().tankman,
            r = s.reduce((e, s) => e + s.bonus, 0);
        return a.jsxs('div', {
            className: t(Z, e),
            children: [
                a.jsx('div', {
                    className: q,
                    children: a.jsx(c, {
                        path: 'crew.crewInfoTooltip.efficiencyBonus.title',
                        params: { color: '#80D43A', value: p.formatReal('woZeroDigits', Math.round(100 * r) / 100) },
                    }),
                }),
                a.jsx('div', {
                    className: F,
                    children: s.map((e, s) => {
                        const r = 0 === e.bonus;
                        if (e.type !== B || !r)
                            return a.jsxs(
                                'div',
                                {
                                    className: t(R, r && W),
                                    children: [
                                        a.jsxs('div', {
                                            className: G,
                                            children: [
                                                a.jsx(d, { path: Y(e), width: '100%', height: '100%' }),
                                                e.type === w && a.jsx('div', { className: J }),
                                            ],
                                        }),
                                        !r &&
                                            a.jsx('div', {
                                                className: X,
                                                children: a.jsx(c, {
                                                    upgradeLegacy: !0,
                                                    path: 'common.plusPercentValue',
                                                    params: {
                                                        value: p.formatReal(
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
    Q = 'Header_b0317c12',
    ee = 'Header_role_2ccc4739',
    se = 'Header_roleIcon_830cdda2',
    ae = 'Header_roleName_c9393f08',
    te = 'Header_name_f879f6e9',
    re = 'Header_image_7903c260';
function ne(e, s) {
    return s ? `tankmen.icons.big.crewSkins.${m(e)}` : `tankmen.icons.big.${m(e)}`;
}
const ie = s(function ({ className: e }) {
        const { role: s, fullName: r, crewSkinId: n, customizedSkin: i } = M().tankman,
            o = u.resolve('strings');
        return a.jsxs('div', {
            className: t(Q, e),
            children: [
                a.jsxs('div', {
                    className: ee,
                    children: [
                        a.jsx(A, { role: s, className: se }),
                        a.jsx('div', { className: ae, children: o.readOrEmpty(`item_types.tankman.roles.${s}`) }),
                    ],
                }),
                a.jsx('div', { className: te, children: r }),
                a.jsx(d, { className: re, path: ne(n, i) }),
            ],
        });
    }),
    oe = {
        base: 'LowEfficiency_1efeab37',
        progressBarValue: 'LowEfficiency_progressBarValue_905540b4',
        percentage: 'LowEfficiency_percentage_db7e92dc',
        skillsEfficiency: 'LowEfficiency_skillsEfficiency_a34ad6cd',
        skillsEfficiencyDivider: 'LowEfficiency_skillsEfficiencyDivider_90d40a96',
    },
    le = u.resolve('strings'),
    ce = u.resolve('intl'),
    pe = s(function ({ className: e }) {
        const { currentVehicleSkillsEfficiency: s, skillsEfficiency: r } = M().tankman,
            n = ce.formatNumber('integral', 100 * s);
        return a.jsxs('div', {
            className: t(oe.base, e),
            children: [
                a.jsx('div', {
                    className: oe.description,
                    children: le.readOrEmpty('crew.crewInfoTooltip.lowEfficiency.title'),
                }),
                a.jsxs('div', {
                    className: oe.progressBarValue,
                    children: [
                        a.jsx('div', {
                            className: oe.percentage,
                            children: a.jsx(c, {
                                path: 'common.percentValue',
                                params: { value: n },
                                upgradeLegacy: !0,
                            }),
                        }),
                        a.jsxs(h, {
                            reverse: !0,
                            size: y.extraSmall,
                            type: f.tankXP,
                            className: oe.skillsEfficiency,
                            children: [
                                a.jsx('div', { children: ce.formatNumber('integral', 1e5) }),
                                a.jsx('div', {
                                    className: oe.skillsEfficiencyDivider,
                                    children: le.readOrEmpty('common.common.slash'),
                                }),
                                a.jsx('div', { children: ce.formatNumber('integral', r.amount) }),
                            ],
                        }),
                    ],
                }),
                a.jsx(k, { value: s, size: 'small', maxValue: 1 }),
            ],
        });
    }),
    de = (e) =>
        r.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            r.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M12 3L3 8V9H21V8L12 3ZM4 19V18H20V19H21V20H3V19H4ZM5 11H7V16H5V11ZM11 11H9V16H11V11ZM13 11H15V16H13V11ZM19 11H17V16H19V11Z',
                fill: '#ECCA9D',
            }),
        );
const ue = {
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
    me = [L, I, H, V],
    he = [I, D],
    fe = [T, V],
    ye = s(function ({ index: e, withBonus: s, role: r, className: n }) {
        var i;
        const {
                perks: o,
                trainingProgress: l,
                newPerksCount: p,
                insideNativeTank: u,
                currentVehicleSkillsEfficiency: m,
                skillsEfficiency: h,
                bonusPerks: f,
            } = M().tankman,
            {
                perks: y,
                newPerkCount: k,
                actualProgress: b,
            } = (function ({
                withBonus: e,
                role: s,
                bonusPerks: a,
                majorPerks: t,
                majorNewPerksCount: r,
                majorPerkTrainingProgress: n,
            }) {
                if (e) {
                    const e = a.find((e) => e.role === s);
                    return {
                        perks: (null == e ? void 0 : e.skills) ?? [],
                        newPerkCount: (null == e ? void 0 : e.newCount) ?? 0,
                        actualProgress: null == e ? void 0 : e.trainingProgress,
                    };
                }
                return { perks: t, newPerkCount: r, actualProgress: n };
            })({
                role: r,
                withBonus: s,
                bonusPerks: f,
                majorPerks: o,
                majorNewPerksCount: p,
                majorPerkTrainingProgress: l,
            }),
            _ = y && e >= y.length && e < y.length + k,
            P = y[e] && !_,
            j = e === y.length + k - 1,
            x = (function ({
                perk: e,
                vehicleSkillsEfficiency: s,
                skillsEfficiency: a,
                insideNativeTank: t,
                newPerk: r,
                lastAvailablePerk: n,
                actualProgress: i,
            }) {
                const o = !t && -1 === s,
                    l = !o && s < 1,
                    c = a.level < 1;
                return e || r
                    ? e && e.state === v.learning && !l
                        ? o
                            ? V
                            : T
                        : r && o
                          ? c
                              ? H
                              : I
                          : o || (null == e ? void 0 : e.state) === v.irrelevant
                            ? L
                            : l || (void 0 !== i && n && i >= 0 && i < 100)
                              ? r
                                  ? S
                                  : C
                              : r
                                ? D
                                : E
                    : z;
            })({
                perk: y[e],
                vehicleSkillsEfficiency: m,
                skillsEfficiency: h,
                insideNativeTank: u,
                newPerk: _,
                lastAvailablePerk: j,
                actualProgress: b,
            });
        return a.jsxs('div', {
            className: t(ue.base, s && ue.base__bonus, ue[`base__${x}`], n),
            children: [
                a.jsx('div', { className: ue.perkBorder }),
                he.includes(x) && a.jsx('div', { className: ue.newPerkBackground }),
                P
                    ? a.jsx(d, {
                          className: ue.perkIcon,
                          path: `tankmen.skills.big.${null == (i = y[e]) ? void 0 : i.name}`,
                      })
                    : a.jsx('div', { className: ue.perkIcon }),
                fe.includes(x) &&
                    a.jsx('div', {
                        className: ue.currentProgress,
                        children: a.jsx(c, { path: 'common.percentValue', params: { value: b }, upgradeLegacy: !0 }),
                    }),
                me.includes(x) && a.jsx('div', { className: ue.disabledOverlay }),
            ],
        });
    }),
    ke = 'PerksProgression_27852bb8',
    ve = 'PerksProgression_icon_ad282d1e',
    be = 'PerksProgression_perkTile_b0b6668d',
    _e = 'PerksProgression_perkLine_5da1ae7d',
    Pe = 'PerksProgression_perkLine__bonus_523b1287';
function je({ withBonus: e, role: s }) {
    const r = e ? 3 : 6;
    return a.jsxs('div', {
        className: ke,
        children: [
            a.jsx(A, { role: s, className: ve }),
            b(r, (r) =>
                a.jsxs(
                    n.Fragment,
                    {
                        children: [
                            r > 0 && a.jsx('div', { className: t(_e, e && Pe) }),
                            a.jsx(ye, { className: be, index: r, withBonus: e, role: s }),
                        ],
                    },
                    `${s}-${r}`,
                ),
            ),
        ],
    });
}
const xe = 'PerksBlock_f82e9f49',
    ge = 'PerksBlock_perksBlockWrapper_c9f73338',
    we = 'PerksBlock_perksBlockWrapper__bonus_e20f2761',
    Ne = 'PerksBlock_perksBlockWrapper__compact_9d1d73ac',
    Ae = 'PerksBlock_perksBlockHeader_64846481',
    Be = 'PerksBlock_perkCounter_fd44504f',
    Ee = 'PerksBlock_perksText_dec68431',
    Te = 'PerksBlock_accelerateTraining_dc79b4c3',
    Ve = 'PerksBlock_accelerateTrainingIcon_c34017ae';
function Le(e) {
    return e && e.some((e) => e.state === v.learning);
}
const Ce = s(function ({ className: e }) {
        var s;
        const { role: r, perks: n, bonusPerks: i, quickTraining: o } = M().tankman,
            l = u.resolve('strings'),
            c = i.reduce((e, s) => e + s.skills.length, 0),
            p = i.length > 0,
            d = !o && !p && !Le(n),
            m = !o && p && !Le(null == (s = i[i.length - 1]) ? void 0 : s.skills);
        return a.jsxs('div', {
            className: t(xe, e),
            children: [
                a.jsxs('div', {
                    className: t(ge, d && Ne),
                    children: [
                        a.jsxs('div', {
                            className: Ae,
                            children: [
                                a.jsx(N, { className: Be, value: n.length, main: !0 }),
                                a.jsx('div', {
                                    className: Ee,
                                    children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.major'),
                                }),
                            ],
                        }),
                        a.jsx(je, { role: r }),
                    ],
                }),
                p &&
                    a.jsxs('div', {
                        className: t(ge, we, m && Ne),
                        children: [
                            a.jsxs('div', {
                                className: Ae,
                                children: [
                                    a.jsx(N, { className: Be, value: c, main: !1 }),
                                    a.jsx('div', {
                                        className: Ee,
                                        children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.bonus'),
                                    }),
                                ],
                            }),
                            i.map(({ role: e }, s) => a.jsx(je, { role: e, withBonus: !0 }, `${e}-${s}`)),
                        ],
                    }),
                o &&
                    a.jsxs('div', {
                        className: Te,
                        children: [
                            a.jsx(de, { className: Ve }),
                            l.readOrEmpty('crew.crewInfoTooltip.accelerateTraining'),
                        ],
                    }),
            ],
        });
    }),
    De = 'Specialization_b8ff1390',
    Se = 'Specialization_specializationTitle_9a88dfae',
    Ie = 'Specialization_specializationList_b4709f0f',
    He = 'Specialization_specializationItem_51eceac3',
    ze = 'Specialization_vehicleText_d256022e',
    Oe = 'Specialization_premiumVehicleIcon_eddfdf68',
    $e = s(function ({ className: e }) {
        const { nativeVehicle: s } = M().tankman,
            r = u.resolve('strings');
        return a.jsxs('div', {
            className: t(De, e),
            children: [
                a.jsx('div', { className: Se, children: r.readOrEmpty('crew.crewInfoTooltip.penalty.specialization') }),
                a.jsxs('div', {
                    className: Ie,
                    children: [
                        a.jsxs(_, {
                            className: He,
                            children: [
                                a.jsx(_.Level, { className: ze, value: s.tier }),
                                P(s.type) && a.jsx(_.Type, { type: s.type, size: _.Type.sizes.x24x24 }),
                                a.jsx(_.Name, { className: ze, children: s.shortName }),
                            ],
                        }),
                        a.jsxs('div', {
                            className: He,
                            children: [
                                a.jsx('div', { className: Oe }),
                                a.jsx(c, {
                                    path: `crew.crewInfoTooltip.specialization.vehicleType.${m(s.type)}`,
                                    params: {
                                        nation: r.readOrEmpty(`crew.crewInfoTooltip.specialization.nation.${s.nation}`),
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Me = (e) =>
        r.createElement(
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
            r.createElement(
                'g',
                { opacity: 0.1 },
                r.createElement(
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
                    r.createElement(
                        'g',
                        null,
                        r.createElement('rect', {
                            x: 3,
                            y: 3,
                            width: 42,
                            height: 42,
                            fill: 'url(#pattern0_416_14088)',
                        }),
                    ),
                ),
                r.createElement(
                    'g',
                    { mask: 'url(#mask0_416_14088)' },
                    r.createElement('circle', { cx: 24, cy: 24, r: 21, fill: 'url(#paint0_radial_416_14088)' }),
                ),
            ),
            r.createElement(
                'g',
                null,
                r.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M31.3461 16.9126L30.2948 15.9658L27.0732 18.8672L26.4351 18.5699H24.2253L23.336 18H21.7758L20.6478 19.0423H19.9247C19.7228 19.2709 19.546 19.5333 19.371 19.7931C19.2897 19.9137 19.2088 20.0338 19.126 20.1496L18.6748 21.6955L20.3893 23.1169H17.4115C17.4115 23.1169 16.0129 22.4536 15.0654 22.7379C14.118 23.0221 14 24.1067 14 24.1067C14 24.1067 14 25.9596 14.5234 26.8833C14.5986 26.952 14.7147 27.11 14.8619 27.3104C15.1767 27.739 15.6338 28.3613 16.1369 28.7163L14.5253 30.1677L15.5766 31.1145L31.3461 16.9126ZM27.4688 28.998C25.357 28.9963 22.4075 28.9939 19.7941 28.9927L29.6854 20.0847H36V21.0322H29.5933C29.5945 21.2753 29.4321 21.5574 29.2712 21.8368C29.1277 22.086 28.9855 22.333 28.9617 22.5484C28.5951 22.7934 27.9771 23.0957 27.5812 23.2844L29.4276 23.2436L29.3769 23.7892L33.0222 24.0645L33.4734 24.5383C33.5016 24.9992 33.5016 25.5934 33.4734 26.0544C33.1684 26.5673 31.2175 29 30.2249 29C29.9068 29 28.8774 28.9992 27.479 28.998L27.4752 28.998L27.4688 28.998Z',
                    fill: '#FFC6C3',
                }),
            ),
            r.createElement(
                'defs',
                null,
                r.createElement(
                    'pattern',
                    {
                        id: 'pattern0_416_14088',
                        patternContentUnits: 'objectBoundingBox',
                        width: 2.38095,
                        height: 2.38095,
                    },
                    r.createElement('use', { xlinkHref: '#image0_416_14088', transform: 'scale(0.0238095)' }),
                ),
                r.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_416_14088',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(24 24) rotate(90) scale(21)',
                    },
                    r.createElement('stop', { stopColor: '#D9D9D9' }),
                    r.createElement('stop', { offset: 1, stopColor: '#D9D9D9', stopOpacity: 0 }),
                ),
            ),
        ),
    Ue = 'UntrainedPenalty_ac022fb6',
    Ze = 'UntrainedPenalty_penaltyHeader_6a22cae9',
    qe = 'UntrainedPenalty_untrainedIcon_90be7885',
    Fe = 'UntrainedPenalty_title_b69187b5',
    Re = 'UntrainedPenalty_description_69c628c';
function We({ className: e }) {
    const s = u.resolve('strings');
    return a.jsxs('div', {
        className: t(Ue, e),
        children: [
            a.jsxs('div', {
                className: Ze,
                children: [
                    a.jsx(Me, { className: qe }),
                    a.jsx('div', { className: Fe, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.title') }),
                ],
            }),
            a.jsx('div', { className: Re, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.description') }),
        ],
    });
}
const Ge = 'Index_4a4da35',
    Je = 'Index_decorator_a30857d',
    Xe = 'Index_crewInfoBase_fd519c21',
    Ye = 'Index_section_638478ff',
    Ke = s(function () {
        const { insideNativeTank: e, currentVehicleSkillsEfficiency: s } = M().tankman,
            t = !e && -1 === s,
            r = s < 1 && !t;
        return a.jsx('div', {
            className: Ge,
            children: a.jsx(j.Decorator, {
                className: Je,
                children: a.jsxs('div', {
                    className: Xe,
                    children: [
                        a.jsx(ie, { className: Ye }),
                        t && a.jsx(We, {}),
                        a.jsx($e, { className: Ye }),
                        r && a.jsx(pe, { className: Ye }),
                        a.jsx(Ce, { className: Ye }),
                        a.jsx(K, {}),
                    ],
                }),
            }),
        });
    }),
    Qe = Object.freeze(
        Object.defineProperty({ __proto__: null, default: Ke }, Symbol.toStringTag, { value: 'Module' }),
    ),
    es = Object.fromEntries(
        Object.entries(Object.assign({ './crew_info/index.tsx': Qe })).map(([e, s]) => [
            e.match(/\/([^/]+)\/index\.tsx/)[1],
            { Component: s.default },
        ]),
    );
const ss = s(function () {
    var e;
    const { model: s } = $(),
        t = s.type.get(),
        r = null == (e = es[t]) ? void 0 : e.Component;
    if (r) return a.jsx(j, { children: a.jsx(r, {}) });
    console.error(`Unknown tooltip type: ${t}`);
});
g(new x().add(O).render(a.jsx(ss, {})));
