import { _ as e, v as s, j as a, f as t, r, R as n } from '../../../chunks/vendor.js';
import {
    i,
    c as o,
    n as l,
    Z as c,
    I as p,
    Y as d,
    r as u,
    bb as m,
    a2 as h,
    a0 as f,
    a1 as y,
    cn as k,
    cZ as v,
    z as b,
    aT as _,
    H as j,
    c_ as P,
    J as x,
    G as g,
} from '../../../chunks/lib.js';
import { B as w, f as N, h as A, i as B, j as E, e as T } from '../../../chunks/perk.js';
import { T as V } from '../../../chunks/tankman_role.js';
/* empty css                    */ const L = 'commander',
    C = 'default',
    D = 'active',
    S = 'activeDisable',
    I = 'disable',
    H = 'low',
    z = 'newFull',
    O = 'newLow',
    $ = 'newDisableFull',
    M = 'newDisableLow',
    Z = 'lock',
    [U, q] = i()((e) => {
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
const F =
    ((R = (() => {
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
        return q().model.computes.params(R);
    });
var R;
const W = 'EfficiencyBonus_d696ae91',
    G = 'EfficiencyBonus_title_cb6cd9b1',
    J = 'EfficiencyBonus_icons_3214fcc7',
    X = 'EfficiencyBonus_bonus_6551325b',
    Y = 'EfficiencyBonus_bonus__disabled_d820b959',
    K = 'EfficiencyBonus_bonusIcons_ec77b4c9',
    Q = 'EfficiencyBonus_battleBoostersOverlay_798a4d63',
    ee = 'EfficiencyBonus_bonusPercentage_bb4d7cec';
function se(e) {
    return e.type === L || 'brotherhood' === e.type ? `tankmen.skills.medium.${e.name}` : `artefact.${e.name}`;
}
const ae = s(function ({ className: e }) {
        const { vehicleBonusDetails: s } = F().tankman,
            r = s.reduce((e, s) => e + s.bonus, 0);
        return a.jsxs('div', {
            className: t(W, e),
            children: [
                a.jsx('div', {
                    className: G,
                    children: a.jsx(c, {
                        path: 'crew.crewInfoTooltip.efficiencyBonus.title',
                        params: { color: '#80D43A', value: p.formatReal('woZeroDigits', Math.round(100 * r) / 100) },
                    }),
                }),
                a.jsx('div', {
                    className: J,
                    children: s.map((e, s) => {
                        const r = 0 === e.bonus;
                        if (e.type !== L || !r)
                            return a.jsxs(
                                'div',
                                {
                                    className: t(X, r && Y),
                                    children: [
                                        a.jsxs('div', {
                                            className: K,
                                            children: [
                                                a.jsx(d, { path: se(e), width: '100%', height: '100%' }),
                                                e.type === w && a.jsx('div', { className: Q }),
                                            ],
                                        }),
                                        !r &&
                                            a.jsx('div', {
                                                className: ee,
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
    te = 'Header_b0317c12',
    re = 'Header_role_2ccc4739',
    ne = 'Header_roleIcon_830cdda2',
    ie = 'Header_roleName_c9393f08',
    oe = 'Header_name_f879f6e9',
    le = 'Header_image_7903c260';
function ce(e, s) {
    return s ? `tankmen.icons.big.crewSkins.${m(e)}` : `tankmen.icons.big.${m(e)}`;
}
const pe = s(function ({ className: e }) {
        const { role: s, fullName: r, crewSkinId: n, customizedSkin: i } = F().tankman,
            o = u.resolve('strings');
        return a.jsxs('div', {
            className: t(te, e),
            children: [
                a.jsxs('div', {
                    className: re,
                    children: [
                        a.jsx(V, { role: s, className: ne }),
                        a.jsx('div', { className: ie, children: o.readOrEmpty(`item_types.tankman.roles.${s}`) }),
                    ],
                }),
                a.jsx('div', { className: oe, children: r }),
                a.jsx(d, { className: le, path: ce(n, i) }),
            ],
        });
    }),
    de = {
        base: 'LowEfficiency_1efeab37',
        progressBarValue: 'LowEfficiency_progressBarValue_905540b4',
        percentage: 'LowEfficiency_percentage_db7e92dc',
        skillsEfficiency: 'LowEfficiency_skillsEfficiency_a34ad6cd',
        skillsEfficiencyDivider: 'LowEfficiency_skillsEfficiencyDivider_90d40a96',
    },
    ue = u.resolve('strings'),
    me = u.resolve('intl'),
    he = s(function ({ className: e }) {
        const { currentVehicleSkillsEfficiency: s, skillsEfficiency: r } = F().tankman,
            n = me.formatNumber('integral', s * N);
        return a.jsxs('div', {
            className: t(de.base, e),
            children: [
                a.jsx('div', {
                    className: de.description,
                    children: ue.readOrEmpty('crew.crewInfoTooltip.lowEfficiency.title'),
                }),
                a.jsxs('div', {
                    className: de.progressBarValue,
                    children: [
                        a.jsx('div', {
                            className: de.percentage,
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
                            className: de.skillsEfficiency,
                            children: [
                                a.jsx('div', { children: me.formatNumber('integral', 1e5) }),
                                a.jsx('div', {
                                    className: de.skillsEfficiencyDivider,
                                    children: ue.readOrEmpty('common.common.slash'),
                                }),
                                a.jsx('div', { children: me.formatNumber('integral', r.amount) }),
                            ],
                        }),
                    ],
                }),
                a.jsx(k, { value: s, size: 'small', maxValue: A }),
            ],
        });
    }),
    fe = (e) =>
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
const ye = {
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
    ke = [I, $, M, S],
    ve = [$, z],
    be = [D, S],
    _e = s(function ({ index: e, withBonus: s, role: r, className: n }) {
        var i;
        const {
                perks: o,
                trainingProgress: l,
                newPerksCount: p,
                insideNativeTank: u,
                currentVehicleSkillsEfficiency: m,
                skillsEfficiency: h,
                bonusPerks: f,
                vehicleBonusDetails: y,
            } = F().tankman,
            {
                perks: k,
                newPerkCount: b,
                actualProgress: _,
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
            j = k && e >= k.length && e < k.length + b,
            P = k[e] && !j,
            x = e === k.length + b - 1,
            g = (function ({
                perk: e,
                vehicleSkillsEfficiency: s,
                skillsEfficiency: a,
                insideNativeTank: t,
                newPerk: r,
                lastAvailablePerk: n,
                actualProgress: i,
                instruction: o,
            }) {
                const l = !t && s === B,
                    c = !l && s < A,
                    p = a.level < A;
                return Boolean(o && e && o === e.name)
                    ? l
                        ? D
                        : C
                    : e || r
                      ? e && e.state === v.learning && !c
                          ? l
                              ? S
                              : D
                          : r && l
                            ? p
                                ? M
                                : $
                            : l || (null == e ? void 0 : e.state) === v.irrelevant
                              ? I
                              : c || (void 0 !== i && n && i >= 0 && i < 100)
                                ? r
                                    ? O
                                    : H
                                : r
                                  ? z
                                  : C
                      : Z;
            })({
                perk: k[e],
                vehicleSkillsEfficiency: m,
                instruction: E(y),
                skillsEfficiency: h,
                insideNativeTank: u,
                newPerk: j,
                lastAvailablePerk: x,
                actualProgress: _,
            });
        return a.jsxs('div', {
            className: t(ye.base, s && ye.base__bonus, ye[`base__${g}`], n),
            children: [
                a.jsx('div', { className: ye.perkBorder }),
                ve.includes(g) && a.jsx('div', { className: ye.newPerkBackground }),
                P
                    ? a.jsx(d, {
                          className: ye.perkIcon,
                          path: `tankmen.skills.big.${null == (i = k[e]) ? void 0 : i.name}`,
                      })
                    : a.jsx('div', { className: ye.perkIcon }),
                be.includes(g) &&
                    a.jsx('div', {
                        className: ye.currentProgress,
                        children: a.jsx(c, { path: 'common.percentValue', params: { value: _ }, upgradeLegacy: !0 }),
                    }),
                ke.includes(g) && a.jsx('div', { className: ye.disabledOverlay }),
            ],
        });
    }),
    je = 'PerksProgression_27852bb8',
    Pe = 'PerksProgression_icon_ad282d1e',
    xe = 'PerksProgression_perkTile_b0b6668d',
    ge = 'PerksProgression_perkLine_5da1ae7d',
    we = 'PerksProgression_perkLine__bonus_523b1287';
function Ne({ withBonus: e, role: s }) {
    const r = e ? 3 : 6;
    return a.jsxs('div', {
        className: je,
        children: [
            a.jsx(V, { role: s, className: Pe }),
            b(r, (r) =>
                a.jsxs(
                    n.Fragment,
                    {
                        children: [
                            r > 0 && a.jsx('div', { className: t(ge, e && we) }),
                            a.jsx(_e, { className: xe, index: r, withBonus: e, role: s }),
                        ],
                    },
                    `${s}-${r}`,
                ),
            ),
        ],
    });
}
const Ae = 'PerksBlock_f82e9f49',
    Be = 'PerksBlock_perksBlockWrapper_c9f73338',
    Ee = 'PerksBlock_perksBlockWrapper__bonus_e20f2761',
    Te = 'PerksBlock_perksBlockWrapper__compact_9d1d73ac',
    Ve = 'PerksBlock_perksBlockHeader_64846481',
    Le = 'PerksBlock_perkCounter_fd44504f',
    Ce = 'PerksBlock_perksText_dec68431',
    De = 'PerksBlock_accelerateTraining_dc79b4c3',
    Se = 'PerksBlock_accelerateTrainingIcon_c34017ae';
function Ie(e) {
    return e && e.some((e) => e.state === v.learning);
}
const He = s(function ({ className: e }) {
        var s;
        const { role: r, perks: n, bonusPerks: i, quickTraining: o } = F().tankman,
            l = u.resolve('strings'),
            c = i.reduce((e, s) => e + s.skills.length, 0),
            p = i.length > 0,
            d = !o && !p && !Ie(n),
            m = !o && p && !Ie(null == (s = i[i.length - 1]) ? void 0 : s.skills);
        return a.jsxs('div', {
            className: t(Ae, e),
            children: [
                a.jsxs('div', {
                    className: t(Be, d && Te),
                    children: [
                        a.jsxs('div', {
                            className: Ve,
                            children: [
                                a.jsx(T, { className: Le, value: n.length, main: !0 }),
                                a.jsx('div', {
                                    className: Ce,
                                    children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.major'),
                                }),
                            ],
                        }),
                        a.jsx(Ne, { role: r }),
                    ],
                }),
                p &&
                    a.jsxs('div', {
                        className: t(Be, Ee, m && Te),
                        children: [
                            a.jsxs('div', {
                                className: Ve,
                                children: [
                                    a.jsx(T, { className: Le, value: c, main: !1 }),
                                    a.jsx('div', {
                                        className: Ce,
                                        children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.bonus'),
                                    }),
                                ],
                            }),
                            i.map(({ role: e }, s) => a.jsx(Ne, { role: e, withBonus: !0 }, `${e}-${s}`)),
                        ],
                    }),
                o &&
                    a.jsxs('div', {
                        className: De,
                        children: [
                            a.jsx(fe, { className: Se }),
                            l.readOrEmpty('crew.crewInfoTooltip.accelerateTraining'),
                        ],
                    }),
            ],
        });
    }),
    ze = 'Specialization_b8ff1390',
    Oe = 'Specialization_specializationTitle_9a88dfae',
    $e = 'Specialization_specializationList_b4709f0f',
    Me = 'Specialization_specializationItem_51eceac3',
    Ze = 'Specialization_vehicleText_d256022e',
    Ue = 'Specialization_premiumVehicleIcon_eddfdf68',
    qe = s(function ({ className: e }) {
        const { nativeVehicle: s } = F().tankman,
            r = u.resolve('strings');
        return a.jsxs('div', {
            className: t(ze, e),
            children: [
                a.jsx('div', { className: Oe, children: r.readOrEmpty('crew.crewInfoTooltip.penalty.specialization') }),
                a.jsxs('div', {
                    className: $e,
                    children: [
                        a.jsxs(_, {
                            className: Me,
                            children: [
                                a.jsx(_.Level, { className: Ze, value: s.tier }),
                                j(s.type) && a.jsx(_.Type, { type: s.type, size: _.Type.sizes.x24x24 }),
                                a.jsx(_.Name, { className: Ze, children: s.shortName }),
                            ],
                        }),
                        a.jsxs('div', {
                            className: Me,
                            children: [
                                a.jsx('div', { className: Ue }),
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
    Fe = (e) =>
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
    Re = 'UntrainedPenalty_ac022fb6',
    We = 'UntrainedPenalty_penaltyHeader_6a22cae9',
    Ge = 'UntrainedPenalty_untrainedIcon_90be7885',
    Je = 'UntrainedPenalty_title_b69187b5',
    Xe = 'UntrainedPenalty_description_69c628c';
function Ye({ className: e }) {
    const s = u.resolve('strings');
    return a.jsxs('div', {
        className: t(Re, e),
        children: [
            a.jsxs('div', {
                className: We,
                children: [
                    a.jsx(Fe, { className: Ge }),
                    a.jsx('div', { className: Je, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.title') }),
                ],
            }),
            a.jsx('div', { className: Xe, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.description') }),
        ],
    });
}
const Ke = 'Index_4a4da35',
    Qe = 'Index_decorator_a30857d',
    es = 'Index_crewInfoBase_fd519c21',
    ss = 'Index_section_638478ff',
    as = s(function () {
        const { insideNativeTank: e, currentVehicleSkillsEfficiency: s } = F().tankman,
            t = !e && s === B,
            r = s < A && !t;
        return a.jsx('div', {
            className: Ke,
            children: a.jsx(P.Decorator, {
                className: Qe,
                children: a.jsxs('div', {
                    className: es,
                    children: [
                        a.jsx(pe, { className: ss }),
                        t && a.jsx(Ye, {}),
                        a.jsx(qe, { className: ss }),
                        r && a.jsx(he, { className: ss }),
                        a.jsx(He, { className: ss }),
                        a.jsx(ae, {}),
                    ],
                }),
            }),
        });
    }),
    ts = Object.freeze(
        Object.defineProperty({ __proto__: null, default: as }, Symbol.toStringTag, { value: 'Module' }),
    ),
    rs = Object.fromEntries(
        Object.entries(Object.assign({ './crew_info/index.tsx': ts })).map(([e, s]) => [
            e.match(/\/([^/]+)\/index\.tsx/)[1],
            { Component: s.default },
        ]),
    );
const ns = s(function () {
    var e;
    const { model: s } = q(),
        t = s.type.get(),
        r = null == (e = rs[t]) ? void 0 : e.Component;
    if (r) return a.jsx(P, { children: a.jsx(r, {}) });
    console.error(`Unknown tooltip type: ${t}`);
});
g(new x().add(U).render(a.jsx(ns, {})));
