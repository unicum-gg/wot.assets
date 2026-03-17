import { _ as e, v as s, j as t, f as a, r, R as n } from '../../../chunks/vendor.js';
import {
    i as o,
    c as i,
    n as l,
    Y as c,
    H as p,
    X as d,
    r as u,
    b6 as m,
    a1 as y,
    $ as h,
    a0 as _,
    cu as b,
    d2 as f,
    x as v,
    aD as k,
    G as x,
    d3 as j,
    a$ as P,
    d4 as g,
    cv as N,
    J as B,
    F as A,
} from '../../../chunks/lib.js';
import { B as w, j as E, a as C, S as T, k as S, i as V } from '../../../chunks/perk.js';
import { T as L } from '../../../chunks/tankman_role.js';
import { T as H, a as D, W as O } from '../../../chunks/user_account_model.js';
/* empty css                    */ const I = 'commander',
    $ = 'default',
    U = 'active',
    z = 'activeDisable',
    M = 'disable',
    W = 'low',
    R = 'newFull',
    F = 'newLow',
    Z = 'newDisableFull',
    q = 'newDisableLow',
    J = 'lock',
    [X, G] = o()((e) => {
        const s = e.observableModel.primitives(['params', 'type']);
        return {
            type: s.type,
            computes: {
                params: i.primitive(function (e) {
                    return e(s.params.get());
                }),
            },
        };
    }, l);
function Y(e) {
    return function () {
        return G().model.computes.params(e);
    };
}
const K = Y(
        (() => {
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
                    e.perks.every((e) => 'object' == typeof e && null !== e && t(e)) &&
                    Array.isArray(e.bonusPerks) &&
                    e.bonusPerks.every((e) => 'object' == typeof e && null !== e && a(e)) &&
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
                    o(e.vehicleBonus) &&
                    Array.isArray(e.vehicleBonusDetails) &&
                    e.vehicleBonusDetails.every((e) => 'object' == typeof e && null !== e && i(e)),
                t = (e) => 'string' == typeof e.name && !0,
                a = (e) =>
                    'string' == typeof e.role &&
                    'number' == typeof e.newCount &&
                    'number' == typeof e.trainingProgress &&
                    Array.isArray(e.skills) &&
                    e.skills.every((e) => 'object' == typeof e && null !== e && t(e)),
                r = (e) =>
                    'string' == typeof e.shortName &&
                    'string' == typeof e.type &&
                    'number' == typeof e.tier &&
                    'string' == typeof e.nation,
                n = (e) => 'number' == typeof e.level && 'number' == typeof e.amount,
                o = (e) =>
                    'number' == typeof e.equipment &&
                    'number' == typeof e.brotherhood &&
                    'number' == typeof e.optionalDevices &&
                    'number' == typeof e.commander &&
                    'number' == typeof e.battleBooster,
                i = (e) => 'string' == typeof e.name && 'string' == typeof e.type && 'number' == typeof e.bonus,
                l = (s, t, a = !0) =>
                    ('number' == typeof s.id ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.id',
                                expected: 'number',
                                value: s.id,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.level ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.level',
                                expected: 'number',
                                value: s.level,
                            },
                            _,
                        )) &&
                    ('boolean' == typeof s.maxLevelAchieved ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.maxLevelAchieved',
                                expected: 'boolean',
                                value: s.maxLevelAchieved,
                            },
                            _,
                        )) &&
                    ('string' == typeof s.crewSkinId ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.crewSkinId',
                                expected: 'string',
                                value: s.crewSkinId,
                            },
                            _,
                        )) &&
                    ('boolean' == typeof s.customizedSkin ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.customizedSkin',
                                expected: 'boolean',
                                value: s.customizedSkin,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.newPerksCount ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.newPerksCount',
                                expected: 'number',
                                value: s.newPerksCount,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.newBonusPerksCount ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.newBonusPerksCount',
                                expected: 'number',
                                value: s.newBonusPerksCount,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.trainingProgress ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.trainingProgress',
                                expected: 'number',
                                value: s.trainingProgress,
                            },
                            _,
                        )) &&
                    ('boolean' == typeof s.quickTraining ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.quickTraining',
                                expected: 'boolean',
                                value: s.quickTraining,
                            },
                            _,
                        )) &&
                    (((Array.isArray(s.perks) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.perks',
                                expected: 'Array<Perk>',
                                value: s.perks,
                            },
                            _,
                        )) &&
                        s.perks.every(
                            (s, r) =>
                                ((('object' == typeof s && null !== s) ||
                                    e(
                                        a,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: t + '.perks[' + r + ']',
                                            expected: 'Perk',
                                            value: s,
                                        },
                                        _,
                                    )) &&
                                    c(s, t + '.perks[' + r + ']', a)) ||
                                e(
                                    a,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: t + '.perks[' + r + ']',
                                        expected: 'Perk',
                                        value: s,
                                    },
                                    _,
                                ),
                        )) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.perks',
                                expected: 'Array<Perk>',
                                value: s.perks,
                            },
                            _,
                        )) &&
                    (((Array.isArray(s.bonusPerks) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.bonusPerks',
                                expected: 'Array<BonusPerk>',
                                value: s.bonusPerks,
                            },
                            _,
                        )) &&
                        s.bonusPerks.every(
                            (s, r) =>
                                ((('object' == typeof s && null !== s) ||
                                    e(
                                        a,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: t + '.bonusPerks[' + r + ']',
                                            expected: 'BonusPerk',
                                            value: s,
                                        },
                                        _,
                                    )) &&
                                    p(s, t + '.bonusPerks[' + r + ']', a)) ||
                                e(
                                    a,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: t + '.bonusPerks[' + r + ']',
                                        expected: 'BonusPerk',
                                        value: s,
                                    },
                                    _,
                                ),
                        )) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.bonusPerks',
                                expected: 'Array<BonusPerk>',
                                value: s.bonusPerks,
                            },
                            _,
                        )) &&
                    ('string' == typeof s.role ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.role',
                                expected: 'string',
                                value: s.role,
                            },
                            _,
                        )) &&
                    ('string' == typeof s.fullName ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.fullName',
                                expected: 'string',
                                value: s.fullName,
                            },
                            _,
                        )) &&
                    ('boolean' == typeof s.tankmanSuitable ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.tankmanSuitable',
                                expected: 'boolean',
                                value: s.tankmanSuitable,
                            },
                            _,
                        )) &&
                    ('boolean' == typeof s.insideNativeTank ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.insideNativeTank',
                                expected: 'boolean',
                                value: s.insideNativeTank,
                            },
                            _,
                        )) &&
                    ('boolean' == typeof s.replaceLocked ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.replaceLocked',
                                expected: 'boolean',
                                value: s.replaceLocked,
                            },
                            _,
                        )) &&
                    (((('object' == typeof s.nativeVehicle && null !== s.nativeVehicle) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.nativeVehicle',
                                expected: 'NativeVehicle',
                                value: s.nativeVehicle,
                            },
                            _,
                        )) &&
                        d(s.nativeVehicle, t + '.nativeVehicle', a)) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.nativeVehicle',
                                expected: 'NativeVehicle',
                                value: s.nativeVehicle,
                            },
                            _,
                        )) &&
                    (((('object' == typeof s.skillsEfficiency && null !== s.skillsEfficiency) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.skillsEfficiency',
                                expected: 'LearnedSkills',
                                value: s.skillsEfficiency,
                            },
                            _,
                        )) &&
                        u(s.skillsEfficiency, t + '.skillsEfficiency', a)) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.skillsEfficiency',
                                expected: 'LearnedSkills',
                                value: s.skillsEfficiency,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.currentVehicleSkillsEfficiency ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.currentVehicleSkillsEfficiency',
                                expected: 'number',
                                value: s.currentVehicleSkillsEfficiency,
                            },
                            _,
                        )) &&
                    (((('object' == typeof s.vehicleBonus && null !== s.vehicleBonus) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.vehicleBonus',
                                expected: 'TankmanVehicleBonus',
                                value: s.vehicleBonus,
                            },
                            _,
                        )) &&
                        m(s.vehicleBonus, t + '.vehicleBonus', a)) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.vehicleBonus',
                                expected: 'TankmanVehicleBonus',
                                value: s.vehicleBonus,
                            },
                            _,
                        )) &&
                    (((Array.isArray(s.vehicleBonusDetails) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.vehicleBonusDetails',
                                expected: 'Array<VehicleBonusDetail>',
                                value: s.vehicleBonusDetails,
                            },
                            _,
                        )) &&
                        s.vehicleBonusDetails.every(
                            (s, r) =>
                                ((('object' == typeof s && null !== s) ||
                                    e(
                                        a,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: t + '.vehicleBonusDetails[' + r + ']',
                                            expected: 'VehicleBonusDetail',
                                            value: s,
                                        },
                                        _,
                                    )) &&
                                    y(s, t + '.vehicleBonusDetails[' + r + ']', a)) ||
                                e(
                                    a,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: t + '.vehicleBonusDetails[' + r + ']',
                                        expected: 'VehicleBonusDetail',
                                        value: s,
                                    },
                                    _,
                                ),
                        )) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.vehicleBonusDetails',
                                expected: 'Array<VehicleBonusDetail>',
                                value: s.vehicleBonusDetails,
                            },
                            _,
                        )),
                c = (s, t, a = !0) =>
                    ('string' == typeof s.name ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.name',
                                expected: 'string',
                                value: s.name,
                            },
                            _,
                        )) &&
                    !0,
                p = (s, t, a = !0) =>
                    ('string' == typeof s.role ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.role',
                                expected: 'string',
                                value: s.role,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.newCount ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.newCount',
                                expected: 'number',
                                value: s.newCount,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.trainingProgress ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.trainingProgress',
                                expected: 'number',
                                value: s.trainingProgress,
                            },
                            _,
                        )) &&
                    (((Array.isArray(s.skills) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.skills',
                                expected: 'Array<Perk>',
                                value: s.skills,
                            },
                            _,
                        )) &&
                        s.skills.every(
                            (s, r) =>
                                ((('object' == typeof s && null !== s) ||
                                    e(
                                        a,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: t + '.skills[' + r + ']',
                                            expected: 'Perk',
                                            value: s,
                                        },
                                        _,
                                    )) &&
                                    c(s, t + '.skills[' + r + ']', a)) ||
                                e(
                                    a,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: t + '.skills[' + r + ']',
                                        expected: 'Perk',
                                        value: s,
                                    },
                                    _,
                                ),
                        )) ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.skills',
                                expected: 'Array<Perk>',
                                value: s.skills,
                            },
                            _,
                        )),
                d = (s, t, a = !0) =>
                    ('string' == typeof s.shortName ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.shortName',
                                expected: 'string',
                                value: s.shortName,
                            },
                            _,
                        )) &&
                    ('string' == typeof s.type ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.type',
                                expected: 'string',
                                value: s.type,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.tier ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.tier',
                                expected: 'number',
                                value: s.tier,
                            },
                            _,
                        )) &&
                    ('string' == typeof s.nation ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.nation',
                                expected: 'string',
                                value: s.nation,
                            },
                            _,
                        )),
                u = (s, t, a = !0) =>
                    ('number' == typeof s.level ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.level',
                                expected: 'number',
                                value: s.level,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.amount ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.amount',
                                expected: 'number',
                                value: s.amount,
                            },
                            _,
                        )),
                m = (s, t, a = !0) =>
                    ('number' == typeof s.equipment ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.equipment',
                                expected: 'number',
                                value: s.equipment,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.brotherhood ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.brotherhood',
                                expected: 'number',
                                value: s.brotherhood,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.optionalDevices ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.optionalDevices',
                                expected: 'number',
                                value: s.optionalDevices,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.commander ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.commander',
                                expected: 'number',
                                value: s.commander,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.battleBooster ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.battleBooster',
                                expected: 'number',
                                value: s.battleBooster,
                            },
                            _,
                        )),
                y = (s, t, a = !0) =>
                    ('string' == typeof s.name ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.name',
                                expected: 'string',
                                value: s.name,
                            },
                            _,
                        )) &&
                    ('string' == typeof s.type ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.type',
                                expected: 'string',
                                value: s.type,
                            },
                            _,
                        )) &&
                    ('number' == typeof s.bonus ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.bonus',
                                expected: 'number',
                                value: s.bonus,
                            },
                            _,
                        )),
                h = (e) =>
                    'object' == typeof e &&
                    null !== e &&
                    ((e) => 'object' == typeof e.tankman && null !== e.tankman && s(e.tankman))(e);
            let _;
            const b = (s, t) => {
                var a, r;
                return (
                    !1 === h(s) &&
                        ((_ = t),
                        (r = '$input'),
                        ((('object' == typeof (a = s) && null !== a) ||
                            e(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + '',
                                    expected: 'CrewInfo',
                                    value: a,
                                },
                                _,
                            )) &&
                            ((s, t, a = !0) =>
                                ((('object' == typeof s.tankman && null !== s.tankman) ||
                                    e(
                                        a,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: t + '.tankman',
                                            expected: 'Tankman',
                                            value: s.tankman,
                                        },
                                        _,
                                    )) &&
                                    l(s.tankman, t + '.tankman', a)) ||
                                e(
                                    a,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: t + '.tankman',
                                        expected: 'Tankman',
                                        value: s.tankman,
                                    },
                                    _,
                                ))(a, r + '', !0)) ||
                            e(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + '',
                                    expected: 'CrewInfo',
                                    value: a,
                                },
                                _,
                            )),
                    s
                );
            };
            return (e, s) => b(JSON.parse(e), s);
        })(),
    ),
    Q = 'EfficiencyBonus_d696ae91',
    ee = 'EfficiencyBonus_title_cb6cd9b1',
    se = 'EfficiencyBonus_icons_3214fcc7',
    te = 'EfficiencyBonus_bonus_6551325b',
    ae = 'EfficiencyBonus_bonus__disabled_d820b959',
    re = 'EfficiencyBonus_bonusIcons_ec77b4c9',
    ne = 'EfficiencyBonus_battleBoostersOverlay_798a4d63',
    oe = 'EfficiencyBonus_bonusPercentage_bb4d7cec';
function ie(e) {
    return e.type === I || 'brotherhood' === e.type ? `tankmen.skills.medium.${e.name}` : `artefact.${e.name}`;
}
const le = s(function ({ className: e }) {
        const { vehicleBonusDetails: s } = K().tankman,
            r = s.reduce((e, s) => e + s.bonus, 0);
        return t.jsxs('div', {
            className: a(Q, e),
            children: [
                t.jsx('div', {
                    className: ee,
                    children: t.jsx(c, {
                        path: 'crew.crewInfoTooltip.efficiencyBonus.title',
                        params: { color: '#80D43A', value: p.formatReal('woZeroDigits', Math.round(100 * r) / 100) },
                    }),
                }),
                t.jsx('div', {
                    className: se,
                    children: s.map((e, s) => {
                        const r = 0 === e.bonus;
                        if (e.type !== I || !r)
                            return t.jsxs(
                                'div',
                                {
                                    className: a(te, r && ae),
                                    children: [
                                        t.jsxs('div', {
                                            className: re,
                                            children: [
                                                t.jsx(d, { path: ie(e), width: '100%', height: '100%' }),
                                                e.type === w && t.jsx('div', { className: ne }),
                                            ],
                                        }),
                                        !r &&
                                            t.jsx('div', {
                                                className: oe,
                                                children: t.jsx(c, {
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
    ce = 'Header_b0317c12',
    pe = 'Header_role_2ccc4739',
    de = 'Header_roleIcon_830cdda2',
    ue = 'Header_roleName_c9393f08',
    me = 'Header_name_f879f6e9',
    ye = 'Header_image_7903c260';
function he(e, s) {
    return s ? `tankmen.icons.big.crewSkins.${m(e)}` : `tankmen.icons.big.${m(e)}`;
}
const _e = s(function ({ className: e }) {
        const { role: s, fullName: r, crewSkinId: n, customizedSkin: o } = K().tankman,
            i = u.resolve('strings');
        return t.jsxs('div', {
            className: a(ce, e),
            children: [
                t.jsxs('div', {
                    className: pe,
                    children: [
                        t.jsx(L, { role: s, className: de }),
                        t.jsx('div', { className: ue, children: i.readOrEmpty(`item_types.tankman.roles.${s}`) }),
                    ],
                }),
                t.jsx('div', { className: me, children: r }),
                t.jsx(d, { className: ye, path: he(n, o) }),
            ],
        });
    }),
    be = {
        base: 'LowEfficiency_1efeab37',
        progressBarValue: 'LowEfficiency_progressBarValue_905540b4',
        percentage: 'LowEfficiency_percentage_db7e92dc',
        skillsEfficiency: 'LowEfficiency_skillsEfficiency_a34ad6cd',
        skillsEfficiencyDivider: 'LowEfficiency_skillsEfficiencyDivider_90d40a96',
    },
    fe = u.resolve('strings'),
    ve = u.resolve('intl'),
    ke = s(function ({ className: e }) {
        const { currentVehicleSkillsEfficiency: s, skillsEfficiency: r } = K().tankman,
            n = ve.formatNumber('integral', s * E);
        return t.jsxs('div', {
            className: a(be.base, e),
            children: [
                t.jsx('div', {
                    className: be.description,
                    children: fe.readOrEmpty('crew.crewInfoTooltip.lowEfficiency.title'),
                }),
                t.jsxs('div', {
                    className: be.progressBarValue,
                    children: [
                        t.jsx('div', {
                            className: be.percentage,
                            children: t.jsx(c, {
                                path: 'common.percentValue',
                                params: { value: n },
                                upgradeLegacy: !0,
                            }),
                        }),
                        t.jsxs(y, {
                            reverse: !0,
                            size: _.extraSmall,
                            type: h.tankXP,
                            className: be.skillsEfficiency,
                            children: [
                                t.jsx('div', { children: ve.formatNumber('integral', 1e5) }),
                                t.jsx('div', {
                                    className: be.skillsEfficiencyDivider,
                                    children: fe.readOrEmpty('common.common.slash'),
                                }),
                                t.jsx('div', { children: ve.formatNumber('integral', r.amount) }),
                            ],
                        }),
                    ],
                }),
                t.jsx(b, { value: s, size: 'small', maxValue: C }),
            ],
        });
    }),
    xe = (e) =>
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
const je = {
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
    Pe = [M, Z, q, z],
    ge = [Z, R],
    Ne = [U, z],
    Be = s(function ({ index: e, withBonus: s, role: r, className: n }) {
        var o;
        const {
                perks: i,
                trainingProgress: l,
                newPerksCount: p,
                insideNativeTank: u,
                currentVehicleSkillsEfficiency: m,
                skillsEfficiency: y,
                bonusPerks: h,
                vehicleBonusDetails: _,
            } = K().tankman,
            {
                perks: b,
                newPerkCount: v,
                actualProgress: k,
            } = (function ({
                withBonus: e,
                role: s,
                bonusPerks: t,
                majorPerks: a,
                majorNewPerksCount: r,
                majorPerkTrainingProgress: n,
            }) {
                if (e) {
                    const e = t.find((e) => e.role === s);
                    return {
                        perks: (null == e ? void 0 : e.skills) ?? [],
                        newPerkCount: (null == e ? void 0 : e.newCount) ?? 0,
                        actualProgress: null == e ? void 0 : e.trainingProgress,
                    };
                }
                return { perks: a, newPerkCount: r, actualProgress: n };
            })({
                role: r,
                withBonus: s,
                bonusPerks: h,
                majorPerks: i,
                majorNewPerksCount: p,
                majorPerkTrainingProgress: l,
            }),
            x = b && e >= b.length && e < b.length + v,
            j = b[e] && !x,
            P = e === b.length + v - 1,
            g = (function ({
                perk: e,
                vehicleSkillsEfficiency: s,
                skillsEfficiency: t,
                insideNativeTank: a,
                newPerk: r,
                lastAvailablePerk: n,
                actualProgress: o,
                instruction: i,
            }) {
                const l = !a && s === T,
                    c = !l && s < C,
                    p = t.level < C;
                return Boolean(i && e && i === e.name)
                    ? l
                        ? U
                        : $
                    : e || r
                      ? e && e.state === f.learning && !c
                          ? l
                              ? z
                              : U
                          : r && l
                            ? p
                                ? q
                                : Z
                            : l || (null == e ? void 0 : e.state) === f.irrelevant
                              ? M
                              : c || (void 0 !== o && n && o >= 0 && o < 100)
                                ? r
                                    ? F
                                    : W
                                : r
                                  ? R
                                  : $
                      : J;
            })({
                perk: b[e],
                vehicleSkillsEfficiency: m,
                instruction: S(_),
                skillsEfficiency: y,
                insideNativeTank: u,
                newPerk: x,
                lastAvailablePerk: P,
                actualProgress: k,
            });
        return t.jsxs('div', {
            className: a(je.base, s && je.base__bonus, je[`base__${g}`], n),
            children: [
                t.jsx('div', { className: je.perkBorder }),
                ge.includes(g) && t.jsx('div', { className: je.newPerkBackground }),
                j
                    ? t.jsx(d, {
                          className: je.perkIcon,
                          path: `tankmen.skills.big.${null == (o = b[e]) ? void 0 : o.name}`,
                      })
                    : t.jsx('div', { className: je.perkIcon }),
                Ne.includes(g) &&
                    t.jsx('div', {
                        className: je.currentProgress,
                        children: t.jsx(c, { path: 'common.percentValue', params: { value: k }, upgradeLegacy: !0 }),
                    }),
                Pe.includes(g) && t.jsx('div', { className: je.disabledOverlay }),
            ],
        });
    }),
    Ae = 'PerksProgression_27852bb8',
    we = 'PerksProgression_icon_ad282d1e',
    Ee = 'PerksProgression_perkTile_b0b6668d',
    Ce = 'PerksProgression_perkLine_5da1ae7d',
    Te = 'PerksProgression_perkLine__bonus_523b1287';
function Se({ withBonus: e, role: s }) {
    const r = e ? 3 : 6;
    return t.jsxs('div', {
        className: Ae,
        children: [
            t.jsx(L, { role: s, className: we }),
            v(r, (r) =>
                t.jsxs(
                    n.Fragment,
                    {
                        children: [
                            r > 0 && t.jsx('div', { className: a(Ce, e && Te) }),
                            t.jsx(Be, { className: Ee, index: r, withBonus: e, role: s }),
                        ],
                    },
                    `${s}-${r}`,
                ),
            ),
        ],
    });
}
const Ve = 'PerksBlock_f82e9f49',
    Le = 'PerksBlock_perksBlockWrapper_c9f73338',
    He = 'PerksBlock_perksBlockWrapper__bonus_e20f2761',
    De = 'PerksBlock_perksBlockWrapper__compact_9d1d73ac',
    Oe = 'PerksBlock_perksBlockHeader_64846481',
    Ie = 'PerksBlock_perkCounter_fd44504f',
    $e = 'PerksBlock_perksText_dec68431',
    Ue = 'PerksBlock_accelerateTraining_dc79b4c3',
    ze = 'PerksBlock_accelerateTrainingIcon_c34017ae';
function Me(e) {
    return e && e.some((e) => e.state === f.learning);
}
const We = s(function ({ className: e }) {
        var s;
        const { role: r, perks: n, bonusPerks: o, quickTraining: i } = K().tankman,
            l = u.resolve('strings'),
            c = o.reduce((e, s) => e + s.skills.length, 0),
            p = o.length > 0,
            d = !i && !p && !Me(n),
            m = !i && p && !Me(null == (s = o[o.length - 1]) ? void 0 : s.skills);
        return t.jsxs('div', {
            className: a(Ve, e),
            children: [
                t.jsxs('div', {
                    className: a(Le, d && De),
                    children: [
                        t.jsxs('div', {
                            className: Oe,
                            children: [
                                t.jsx(V, { className: Ie, value: n.length, main: !0 }),
                                t.jsx('div', {
                                    className: $e,
                                    children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.major'),
                                }),
                            ],
                        }),
                        t.jsx(Se, { role: r }),
                    ],
                }),
                p &&
                    t.jsxs('div', {
                        className: a(Le, He, m && De),
                        children: [
                            t.jsxs('div', {
                                className: Oe,
                                children: [
                                    t.jsx(V, { className: Ie, value: c, main: !1 }),
                                    t.jsx('div', {
                                        className: $e,
                                        children: l.readOrEmpty('crew.crewInfoTooltip.perksBlock.bonus'),
                                    }),
                                ],
                            }),
                            o.map(({ role: e }, s) => t.jsx(Se, { role: e, withBonus: !0 }, `${e}-${s}`)),
                        ],
                    }),
                i &&
                    t.jsxs('div', {
                        className: Ue,
                        children: [
                            t.jsx(xe, { className: ze }),
                            l.readOrEmpty('crew.crewInfoTooltip.accelerateTraining'),
                        ],
                    }),
            ],
        });
    }),
    Re = 'Specialization_b8ff1390',
    Fe = 'Specialization_specializationTitle_9a88dfae',
    Ze = 'Specialization_specializationList_b4709f0f',
    qe = 'Specialization_specializationItem_51eceac3',
    Je = 'Specialization_vehicleText_d256022e',
    Xe = 'Specialization_premiumVehicleIcon_eddfdf68',
    Ge = s(function ({ className: e }) {
        const { nativeVehicle: s } = K().tankman,
            r = u.resolve('strings');
        return t.jsxs('div', {
            className: a(Re, e),
            children: [
                t.jsx('div', { className: Fe, children: r.readOrEmpty('crew.crewInfoTooltip.penalty.specialization') }),
                t.jsxs('div', {
                    className: Ze,
                    children: [
                        t.jsxs(k, {
                            className: qe,
                            children: [
                                t.jsx(k.Level, { className: Je, value: s.tier }),
                                x(s.type) && t.jsx(k.Type, { type: s.type, size: k.Type.sizes.x24x24 }),
                                t.jsx(k.Name, { className: Je, children: s.shortName }),
                            ],
                        }),
                        t.jsxs('div', {
                            className: qe,
                            children: [
                                t.jsx('div', { className: Xe }),
                                t.jsx(c, {
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
    Ye = (e) =>
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
    Ke = 'UntrainedPenalty_ac022fb6',
    Qe = 'UntrainedPenalty_penaltyHeader_6a22cae9',
    es = 'UntrainedPenalty_untrainedIcon_90be7885',
    ss = 'UntrainedPenalty_title_b69187b5',
    ts = 'UntrainedPenalty_description_69c628c';
function as({ className: e }) {
    const s = u.resolve('strings');
    return t.jsxs('div', {
        className: a(Ke, e),
        children: [
            t.jsxs('div', {
                className: Qe,
                children: [
                    t.jsx(Ye, { className: es }),
                    t.jsx('div', { className: ss, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.title') }),
                ],
            }),
            t.jsx('div', { className: ts, children: s.readOrEmpty('crew.crewInfoTooltip.penalty.description') }),
        ],
    });
}
const rs = 'Index_4a4da35',
    ns = 'Index_decorator_a30857d',
    os = 'Index_crewInfoBase_fd519c21',
    is = 'Index_section_638478ff',
    ls = s(function () {
        const { insideNativeTank: e, currentVehicleSkillsEfficiency: s } = K().tankman,
            a = !e && s === T,
            r = s < C && !a;
        return t.jsx('div', {
            className: rs,
            children: t.jsx(j.Decorator, {
                className: ns,
                children: t.jsxs('div', {
                    className: os,
                    children: [
                        t.jsx(_e, { className: is }),
                        a && t.jsx(as, {}),
                        t.jsx(Ge, { className: is }),
                        r && t.jsx(ke, { className: is }),
                        t.jsx(We, { className: is }),
                        t.jsx(le, {}),
                    ],
                }),
            }),
        });
    }),
    cs = Object.freeze(
        Object.defineProperty({ __proto__: null, default: ls }, Symbol.toStringTag, { value: 'Module' }),
    ),
    ps = Y(
        (() => {
            const s = (e) => 'string' == typeof e.label && 'string' == typeof e.type,
                t = (s, t, a = !0) =>
                    ('string' == typeof s.label ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.label',
                                expected: 'string',
                                value: s.label,
                            },
                            r,
                        )) &&
                    ('string' == typeof s.type ||
                        e(
                            a,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.type',
                                expected: 'string',
                                value: s.type,
                            },
                            r,
                        )),
                a = (e) =>
                    'object' == typeof e &&
                    null !== e &&
                    ((e) =>
                        'boolean' == typeof e.isWotPlusEnabled &&
                        ('None' === e.type || 'Core' === e.type || 'Pro' === e.type) &&
                        ('Inactive' === e.state || 'Active' === e.state || 'Cancelled' === e.state) &&
                        (6 === e.periodicity || 12 === e.periodicity) &&
                        'number' == typeof e.expiryTime &&
                        'boolean' == typeof e.isSteamPlatform &&
                        'boolean' == typeof e.isCnRegion &&
                        ('unlock' === e.tooltipVariant ||
                            'unlockSteamAndCn' === e.tooltipVariant ||
                            'unlockPro' === e.tooltipVariant) &&
                        Array.isArray(e.bonuses) &&
                        e.bonuses.every((e) => 'object' == typeof e && null !== e && s(e)) &&
                        Array.isArray(e.proBonuses) &&
                        e.proBonuses.every((e) => 'object' == typeof e && null !== e && s(e)))(e);
            let r;
            const n = (s, n) => {
                var o, i;
                return (
                    !1 === a(s) &&
                        ((r = n),
                        (i = '$input'),
                        ((('object' == typeof (o = s) && null !== o) ||
                            e(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'UseParams',
                                    value: o,
                                },
                                r,
                            )) &&
                            ((s, a, n = !0) =>
                                ('boolean' == typeof s.isWotPlusEnabled ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.isWotPlusEnabled',
                                            expected: 'boolean',
                                            value: s.isWotPlusEnabled,
                                        },
                                        r,
                                    )) &&
                                ('None' === s.type ||
                                    'Core' === s.type ||
                                    'Pro' === s.type ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.type',
                                            expected: '("Core" | "None" | "Pro")',
                                            value: s.type,
                                        },
                                        r,
                                    )) &&
                                ('Inactive' === s.state ||
                                    'Active' === s.state ||
                                    'Cancelled' === s.state ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.state',
                                            expected: '("Active" | "Cancelled" | "Inactive")',
                                            value: s.state,
                                        },
                                        r,
                                    )) &&
                                (6 === s.periodicity ||
                                    12 === s.periodicity ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.periodicity',
                                            expected: '(12 | 6)',
                                            value: s.periodicity,
                                        },
                                        r,
                                    )) &&
                                ('number' == typeof s.expiryTime ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.expiryTime',
                                            expected: 'number',
                                            value: s.expiryTime,
                                        },
                                        r,
                                    )) &&
                                ('boolean' == typeof s.isSteamPlatform ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.isSteamPlatform',
                                            expected: 'boolean',
                                            value: s.isSteamPlatform,
                                        },
                                        r,
                                    )) &&
                                ('boolean' == typeof s.isCnRegion ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.isCnRegion',
                                            expected: 'boolean',
                                            value: s.isCnRegion,
                                        },
                                        r,
                                    )) &&
                                ('unlock' === s.tooltipVariant ||
                                    'unlockSteamAndCn' === s.tooltipVariant ||
                                    'unlockPro' === s.tooltipVariant ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.tooltipVariant',
                                            expected: '("unlock" | "unlockPro" | "unlockSteamAndCn")',
                                            value: s.tooltipVariant,
                                        },
                                        r,
                                    )) &&
                                (((Array.isArray(s.bonuses) ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.bonuses',
                                            expected: 'Array<WotPlusSubscriptionBonusModel>',
                                            value: s.bonuses,
                                        },
                                        r,
                                    )) &&
                                    s.bonuses.every(
                                        (s, o) =>
                                            ((('object' == typeof s && null !== s) ||
                                                e(
                                                    n,
                                                    {
                                                        method: 'typia.json.createAssertParse',
                                                        path: a + '.bonuses[' + o + ']',
                                                        expected: 'WotPlusSubscriptionBonusModel',
                                                        value: s,
                                                    },
                                                    r,
                                                )) &&
                                                t(s, a + '.bonuses[' + o + ']', n)) ||
                                            e(
                                                n,
                                                {
                                                    method: 'typia.json.createAssertParse',
                                                    path: a + '.bonuses[' + o + ']',
                                                    expected: 'WotPlusSubscriptionBonusModel',
                                                    value: s,
                                                },
                                                r,
                                            ),
                                    )) ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.bonuses',
                                            expected: 'Array<WotPlusSubscriptionBonusModel>',
                                            value: s.bonuses,
                                        },
                                        r,
                                    )) &&
                                (((Array.isArray(s.proBonuses) ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.proBonuses',
                                            expected: 'Array<WotPlusSubscriptionBonusModel>',
                                            value: s.proBonuses,
                                        },
                                        r,
                                    )) &&
                                    s.proBonuses.every(
                                        (s, o) =>
                                            ((('object' == typeof s && null !== s) ||
                                                e(
                                                    n,
                                                    {
                                                        method: 'typia.json.createAssertParse',
                                                        path: a + '.proBonuses[' + o + ']',
                                                        expected: 'WotPlusSubscriptionBonusModel',
                                                        value: s,
                                                    },
                                                    r,
                                                )) &&
                                                t(s, a + '.proBonuses[' + o + ']', n)) ||
                                            e(
                                                n,
                                                {
                                                    method: 'typia.json.createAssertParse',
                                                    path: a + '.proBonuses[' + o + ']',
                                                    expected: 'WotPlusSubscriptionBonusModel',
                                                    value: s,
                                                },
                                                r,
                                            ),
                                    )) ||
                                    e(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.proBonuses',
                                            expected: 'Array<WotPlusSubscriptionBonusModel>',
                                            value: s.proBonuses,
                                        },
                                        r,
                                    )))(o, i + '', !0)) ||
                            e(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'UseParams',
                                    value: o,
                                },
                                r,
                            )),
                    s
                );
            };
            return (e, s) => n(JSON.parse(e), s);
        })(),
    ),
    ds = {
        base_wrapper: 'Hint_base_wrapper_653f0747',
        base_icon: 'Hint_base_icon_cd32cfad',
        base_text: 'Hint_base_text_f734dbc2',
        base__steamCn: 'Hint_base__steamCn_135a3ed',
    },
    us = u.resolve('images'),
    ms = u.resolve('strings');
function ys({ unlockType: e }) {
    const s = {
        [H.Unlock]: ms.readOrEmpty('subscription.headerButton.tooltip.unlockSubscription'),
        [H.UnlockSteamAndCn]: ms.readOrEmpty('subscription.headerButton.tooltip.unlockSteamAndCn'),
        [H.UnlockPro]: ms.readOrEmpty('subscription.headerButton.tooltip.unlockPro'),
    };
    return t.jsx('div', {
        className: a(ds.base, e === H.UnlockPro && ds.base__steamCn),
        children: t.jsxs('div', {
            className: ds.base_wrapper,
            children: [
                [H.Unlock, H.UnlockSteamAndCn].includes(e) &&
                    t.jsx('img', { className: ds.base_icon, src: us.readOrEmpty('subscription.lock') }),
                t.jsx('div', { className: ds.base_text, children: s[e] }),
            ],
        }),
    });
}
const hs = 'Bonuslist_30606a62',
    _s = 'Bonuslist_list_d0c73d0d',
    bs = 'Bonuslist_list_leftColumn_30606a62',
    fs = 'Bonuslist_list_rightColumn_30606a62',
    vs = 'Bonuslist_list_proBonusesLeftColumn_30606a62',
    ks = 'Bonuslist_list_proBonusesRightColumn_f94cf518',
    xs = 'Bonuslist_list__unlockPro_30606a62',
    js = 'Bonuslist_list_item_a02b09a8',
    Ps = 'Bonuslist_icon_280817ab',
    gs = 'Bonuslist_iconLock_239f55db',
    Ns = 'Bonuslist_name_5f548721',
    Bs = 'Bonuslist_list_item__pro_30606a62',
    As = 'Bonuslist_list__pro_15c23dd',
    ws = 'Bonuslist_list__extended_b282b07a',
    Es = 'Bonuslist_proBenefits_10504c1',
    Cs = 'Bonuslist_proBenefits__upgraded_1052ec71';
function Ts() {
    const { bonuses: e, proBonuses: s, tooltipVariant: n, isCnRegion: o, isSteamPlatform: i, type: l } = ps(),
        c = u.resolve('images'),
        p = r.useMemo(() => {
            const t = e.map((e) => ({ ...e, isProBonus: !1 }));
            return l === D.Pro ? [...s.map((e) => ({ ...e, isProBonus: !0 })), ...t] : t;
        }, [e, s, l]),
        d = (e) => {
            const s = Math.ceil(e.length / 2);
            return [e.slice(0, s), e.slice(s)];
        },
        [m, y] = d(p),
        [h, _] = d(s),
        b = p.length;
    return t.jsxs('div', {
        className: hs,
        children: [
            t.jsx('div', {
                className: a(_s, b >= 12 && ws),
                children:
                    b > 0 &&
                    t.jsxs(t.Fragment, {
                        children: [
                            t.jsx('div', {
                                className: bs,
                                children:
                                    m &&
                                    m.map((e) =>
                                        t.jsxs(
                                            'div',
                                            {
                                                className: a(js, e.isProBonus && Bs),
                                                children: [
                                                    t.jsx('img', {
                                                        className: Ps,
                                                        src: c.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                    }),
                                                    t.jsx('div', { className: Ns, children: e.label }),
                                                ],
                                            },
                                            e.label,
                                        ),
                                    ),
                            }),
                            t.jsx('div', {
                                className: fs,
                                children:
                                    y &&
                                    y.map((e) =>
                                        t.jsxs(
                                            'div',
                                            {
                                                className: a(js, e.isProBonus && Bs),
                                                children: [
                                                    t.jsx('img', {
                                                        className: Ps,
                                                        src: c.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                    }),
                                                    t.jsx('div', { className: Ns, children: e.label }),
                                                ],
                                            },
                                            e.label,
                                        ),
                                    ),
                            }),
                        ],
                    }),
            }),
            n !== H.UnlockSteamAndCn &&
                !i &&
                !o &&
                l !== D.Pro &&
                t.jsxs('div', {
                    className: a(Es, n === H.UnlockPro && Cs),
                    children: [
                        n === H.UnlockPro && t.jsx(ys, { unlockType: H.UnlockPro }),
                        t.jsxs('div', {
                            className: a(_s, As, n === H.UnlockPro && xs),
                            children: [
                                t.jsx('div', {
                                    className: vs,
                                    children:
                                        null == h
                                            ? void 0
                                            : h.map((e) =>
                                                  t.jsxs(
                                                      'div',
                                                      {
                                                          className: js,
                                                          children: [
                                                              t.jsx('img', {
                                                                  className: Ps,
                                                                  src: c.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                              }),
                                                              t.jsx('img', {
                                                                  className: gs,
                                                                  src: c.readOrEmpty('subscription.lock_yellow_glow'),
                                                              }),
                                                              t.jsx('div', { className: Ns, children: e.label }),
                                                          ],
                                                      },
                                                      e.label,
                                                  ),
                                              ),
                                }),
                                t.jsx('div', {
                                    className: ks,
                                    children:
                                        null == _
                                            ? void 0
                                            : _.map((e) =>
                                                  t.jsxs(
                                                      'div',
                                                      {
                                                          className: js,
                                                          children: [
                                                              t.jsx('img', {
                                                                  className: Ps,
                                                                  src: c.readOrEmpty(`subscription.tooltip.${e.type}`),
                                                              }),
                                                              t.jsx('img', {
                                                                  className: gs,
                                                                  src: c.readOrEmpty('subscription.lock_yellow_glow'),
                                                              }),
                                                              t.jsx('div', { className: Ns, children: e.label }),
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
const Ss = {
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
function Vs({ expiryTime: e, periodicity: s, state: r, type: n }) {
    const { isCnRegion: o } = ps(),
        i = u.resolve('strings');
    return t.jsxs('div', {
        className: Ss.base,
        children: [
            t.jsx('div', {
                className: Ss.base_column,
                children: t.jsx('div', { className: a(Ss.icon, Ss[`icon__${n.toLowerCase()}`]) }),
            }),
            t.jsxs('div', {
                className: Ss.base_column,
                children: [
                    t.jsxs('div', {
                        className: Ss.state,
                        children: [
                            t.jsxs('div', {
                                className: Ss.state_title,
                                children: [
                                    i.readOrEmpty(
                                        'subscription.headerButton.tooltip.title' +
                                            (o ? '' : n === D.Core ? 'Core' : n === D.Pro ? 'Pro' : ''),
                                    ),
                                    n === D.None &&
                                        t.jsxs(t.Fragment, {
                                            children: [
                                                ' ',
                                                i.readOrEmpty('subscription.headerButton.tooltip.nonSubscriberTitle'),
                                            ],
                                        }),
                                ],
                            }),
                            r !== O.Inactive &&
                                t.jsx('div', {
                                    className: a(Ss.state_status, Ss[`state_status__${r.toLowerCase()}`]),
                                    children: i.readOrEmpty(`subscription.headerButton.tooltip.${r}`),
                                }),
                        ],
                    }),
                    r === O.Inactive &&
                        t.jsx('div', {
                            className: Ss.getSubscriptionHint,
                            children: i.readOrEmpty('subscription.headerButton.tooltip.getSubscriptionHint'),
                        }),
                    s &&
                        n === D.Pro &&
                        t.jsx('div', {
                            className: Ss.periodicity,
                            children: t.jsx(P, {
                                text: i.readOrEmpty('subscription.headerButton.tooltip.periodicity'),
                                params: { number: 30 * s },
                                upgradeLegacy: !0,
                            }),
                        }),
                    e && n !== D.None
                        ? t.jsx('div', {
                              className: Ss.extendsOn,
                              children: t.jsx(P, {
                                  text: i.readOrEmpty(
                                      'subscription.headerButton.tooltip.' +
                                          (r === O.Cancelled ? 'expiresOn' : 'extendsOn'),
                                  ),
                                  params: { date: g(e, N.ShortDate) },
                                  upgradeLegacy: !0,
                              }),
                          })
                        : null,
                ],
            }),
            t.jsx('div', { className: a(Ss.background, Ss[`background__${n.toLowerCase()}`]) }),
        ],
    });
}
const Ls = {
        decorator: 'Index_decorator_29808c75',
        wrapper: 'Index_wrapper_99411988',
        wrapper__pro: 'Index_wrapper__pro_fe256643',
    },
    Hs = s(function () {
        const { state: e, type: s, periodicity: r, expiryTime: n, tooltipVariant: o } = ps();
        return t.jsx('div', {
            className: Ls.base,
            children: t.jsx(j.Decorator, {
                className: Ls.decorator,
                children: t.jsxs('div', {
                    className: a(Ls.wrapper, s === D.Pro && Ls.wrapper__pro),
                    children: [
                        t.jsx(Vs, { expiryTime: n, periodicity: r, state: e, type: s }),
                        s === D.None && t.jsx(ys, { unlockType: o }),
                        t.jsx(Ts, {}),
                    ],
                }),
            }),
        });
    }),
    Ds = Object.freeze(
        Object.defineProperty({ __proto__: null, default: Hs }, Symbol.toStringTag, { value: 'Module' }),
    ),
    Os = Object.fromEntries(
        Object.entries(Object.assign({ './crew_info/index.tsx': cs, './wot_plus_header_widget/index.tsx': Ds })).map(
            ([e, s]) => [e.match(/\/([^/]+)\/index\.tsx/)[1], { Component: s.default }],
        ),
    );
const Is = s(function () {
    var e;
    const { model: s } = G(),
        a = s.type.get(),
        r = null == (e = Os[a]) ? void 0 : e.Component;
    if (r) return t.jsx(j, { children: t.jsx(r, {}) });
    console.error(`Unknown tooltip type: ${a}`);
});
A(new B().add(X).render(t.jsx(Is, {})));
