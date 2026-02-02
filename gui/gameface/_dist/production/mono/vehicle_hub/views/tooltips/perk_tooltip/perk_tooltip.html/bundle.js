import { j as e, y as a, z as l, r as s, e as i, x as t } from '../../../../chunks/vendor.js';
import {
    r,
    I as o,
    aF as n,
    aG as c,
    aH as m,
    aI as d,
    aJ as h,
    m as p,
    aK as u,
    aL as g,
    aE as v,
    F as _,
    C as x,
    aM as b,
    P as S,
    i as f,
    ai as y,
    ah as T,
    a3 as j,
    aN as N,
    aO as V,
    aD as k,
} from '../../../../chunks/lib.js';
import { T as w, S as P } from '../../../../chunks/node_model.js';
const D = {
    requirements: 'Final_requirements_7cc8f421',
    requirementsText: 'Final_requirementsText_7e524e05',
    elite: 'Final_elite_dbf2a98f',
    eliteBg: 'Final_eliteBg_a4cca278',
    eliteGlow: 'Final_eliteGlow_cda9be7',
    eliteIcon: 'Final_eliteIcon_72d6fe66',
    eliteText: 'Final_eliteText_98557917',
};
function F({ vehicleType: a, researched: l }) {
    const s = r.resolve('strings');
    return e.jsxs(e.Fragment, {
        children: [
            !l &&
                e.jsxs('div', {
                    className: D.requirements,
                    children: [
                        e.jsx(o, {
                            path: 'skillTree.tree.counter',
                            width: 24,
                            height: 24,
                            className: D.requirementsIcon,
                        }),
                        e.jsx('div', {
                            className: D.requirementsText,
                            children: e.jsx(n, {
                                text: s.readOrEmpty('veh_skill_tree.tooltips.large.perksResearchRequired'),
                            }),
                        }),
                    ],
                }),
            e.jsxs('div', {
                className: D.elite,
                children: [
                    e.jsx('div', { className: D.eliteGlow }),
                    e.jsx('div', { className: D.eliteBg }),
                    e.jsx(o, {
                        path: `vehicleTypes.large.${c(a)}_elite`,
                        width: '100%',
                        height: 74,
                        className: D.eliteIcon,
                    }),
                    e.jsx('div', {
                        className: D.eliteText,
                        children: s.readOrEmpty('veh_skill_tree.tooltips.large.eliteStatus'),
                    }),
                ],
            }),
        ],
    });
}
const R = {
        table: 'Params_table_5f20ee37',
        row: 'Params_row_2c6a19ba',
        cell: 'Params_cell_f036daa0',
        cell__baseValue: 'Params_cell__baseValue_7dda4017',
        cell__deltaValue: 'Params_cell__deltaValue_7dda4017',
        cell__icon: 'Params_cell__icon_c5591684',
        cell__name: 'Params_cell__name_296ad44d',
        cellBaseValue: 'Params_cellBaseValue_bef0df54',
        delta: 'Params_delta_3c8ffbf3',
    },
    E = r.resolve('intl'),
    C = a(),
    A = 'baseValue',
    $ = 'delta',
    I = 'icon',
    G = 'name',
    O = [
        C.accessor(A, {
            cell: (a) => {
                const l = a.getValue() > 0;
                return e.jsx('div', {
                    className: l ? R.cellBaseValue : '',
                    children: l ? E.formatReal('woZeroDigits', a.getValue()) : '',
                });
            },
            meta: {
                column: { behaviour: m.contentResponsive, minSize: '0rem', maxSize: '500rem' },
                className: R.cell__baseValue,
            },
        }),
        C.accessor($, {
            cell: (a) => e.jsx('div', { className: R.delta, children: a.getValue() }),
            meta: {
                column: { behaviour: m.contentResponsive, minSize: '0rem', maxSize: '500rem' },
                className: R.cell__deltaValue,
            },
        }),
        C.accessor(I, {
            cell: (a) => e.jsx(o, { width: 24, height: 24, path: a.getValue() }),
            meta: { column: { behaviour: m.static, size: '38rem' }, className: R.cell__icon },
        }),
        C.accessor(G, {
            cell: (a) => e.jsx(n, { text: a.getValue() }),
            meta: {
                column: { behaviour: m.screenResponsive, size: '100%', minSize: '0rem', maxSize: '500rem' },
                className: R.cell__name,
            },
        }),
    ],
    M = {
        vehicleEnginePower: 'enginePower',
        vehicleStrength: 'maxHealth',
        vehicleAllGroundRotationSpeed: 'chassisRotationSpeed',
        vehicleGunReloadTime: 'reloadTimeSecs',
        reloadTimeSalvo: 'reloadTimeSecs',
        reloadTimeSingle: 'reloadTimeSecs',
        vehicleGunAimSpeed: 'aimingTime',
        vehicleTurretOrCuttingRotationSpeed: 'turretRotationSpeed',
        specialShellPenetration: 'avgPiercingPower',
        standardShellPenetration: 'avgPiercingPower',
        HEShellPenetration: 'avgPiercingPower',
        nonHEShellDamage: 'avgDamage',
        gunDepression: 'pitchLimits',
        vehPenaltyForDamagedAmmorack: 'vehPenaltyForDamagedAmmorack',
        vehicleGunShotFullDispersion: 'shotDispersionAngle',
        standardShellVelocity: 'shellVelocity',
        specialShellVelocity: 'shellVelocity',
        shellVelocity: 'shellVelocity',
        allShellsVelocity: 'shellVelocity',
        vehicleForwardMaxSpeed: 'speedLimits',
        vehicleBackwardMaxSpeed: 'speedLimits',
        gunTraverse: 'gunYawLimits',
        turretTraverse: 'turretYawLimits',
        standardShellDamage: 'avgDamage',
        specialShellDamage: 'avgDamage',
        allShellDamage: 'avgDamage',
        basicShellDamage: 'avgDamage',
        gunElevation: 'pitchLimits',
        vehicleCircularVisionRadius: 'circularVisionRadius',
        gunStabilization: 'shotDispersionAngle',
        hullElevationSpeed: 'hullElevationSpeed',
        reloadTimeInClip: 'clipFireRate',
    },
    z = {
        vehicleStrength: 'val',
        turretTraverse: 'grads',
        gunTraverse: 'grads',
        vehicleAllGroundRotationSpeed: 'gps',
        vehicleTurretOrCuttingRotationSpeed: 'gps',
        vehicleEnginePower: 'p',
        vehicleCircularVisionRadius: 'm',
        shellVelocity: 'mps',
        standardShellVelocity: 'mps',
        specialShellVelocity: 'mps',
        allShellsVelocity: 'mps',
        vehicleGunAimSpeed: 's',
        gunDepression: 'grads',
        gunElevation: 'grads',
        standardShellPenetration: 'mm',
        specialShellPenetration: 'mm',
        HEShellPenetration: 'mm',
        vehicleGunReloadTime: 's',
        reloadTimeSalvo: 's',
        reloadTimeSingle: 's',
        HEShellDamage: 'val',
        nonHEShellDamage: 'val',
        standardShellDamage: 'val',
        specialShellDamage: 'val',
        allShellDamage: 'val',
        basicShellDamage: 'val',
        vehicleGunShotDispersionWhileGunDamaged: 'm',
        vehicleGunShotFullDispersion: 'm',
        vehicleForwardMaxSpeed: 'mph',
        vehicleBackwardMaxSpeed: 'mph',
        vehicleSpeed: 'mph',
        additionalShellAmmoCapacity: 'cnt',
        vehicleReloadTimeAfterShellChange: 's',
        reloadTimeInClip: 's',
    };
const q = r.resolve('strings'),
    B = r.resolve('intl'),
    L = ({ valueType: e, value: a, valueKey: l }) => {
        const s = 'mul' === e ? 100 * (a - 1) : a,
            i = s > 0 ? '+' : '',
            t = B.formatReal('woZeroDigits', s);
        let r = '';
        var o;
        return (
            (r =
                'mul' === e
                    ? q.readOrEmpty('veh_skill_tree.kpi.bonus.valueTypes.default')
                    : q.readOr(`veh_skill_tree.kpi.bonus.valueTypes.${((o = l), o in z ? z[o] : 'default')}`, () =>
                          q.readOrEmpty('veh_skill_tree.kpi.bonus.valueTypes.default'),
                      )),
            `${i}${t}${r}`
        );
    };
function H({ baseValue: e, name: a, hasManyParameters: l, index: s }) {
    return e > 0
        ? l
            ? q.readOrEmpty(`menu.vehicleInfo.params.${a}_${s}`)
            : q.readOrEmpty(`menu.vehicleInfo.params.${a}`)
        : q.readOrEmpty(`tank_setup.kpi.bonus.positive.${a}`);
}
function K() {
    const { table: a } = d();
    return e.jsx(h, {
        className: R.table,
        children: e.jsx(h.Body, {
            children: p(a.getRowModel().rows, (a, s) =>
                e.jsx(
                    h.Row,
                    {
                        className: R.row,
                        children: p(a.getVisibleCells(), (a, i) =>
                            e.jsx(
                                h.Cell,
                                {
                                    className: R.cell,
                                    cell: { ...a, rowIndex: s, index: i, tablePart: u.body },
                                    children: l(a.column.columnDef.cell, a.getContext()),
                                },
                                i,
                            ),
                        ),
                    },
                    s,
                ),
            ),
        }),
    });
}
function Z({ parameters: a }) {
    const l = (function (e) {
        const a = new Array();
        return (
            e.forEach((e) => {
                var l;
                0 !== e.value &&
                    a.push({
                        baseValue: e.baseValue,
                        delta: L(e),
                        icon: `vehParams.small.${((l = e.name), l in M ? M[l] : l)}`,
                        name: H(e),
                    });
            }),
            a
        );
    })(a);
    return e.jsx('div', {
        children: e.jsx(g, { columns: O, data: l, getRowId: (e) => e.name, children: e.jsx(K, {}) }),
    });
}
const W = 'Special_13e47e4a',
    Y = 'Special_gear_22cb6518',
    J = 'Special_info_7622feac',
    X = 'Special_separator_2023f7f7';
function Q() {
    const a = r.resolve('strings');
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx('div', { className: X }),
            e.jsxs('div', {
                className: W,
                children: [
                    e.jsx('div', { className: Y }),
                    e.jsx('div', {
                        className: J,
                        children: a.readOrEmpty('veh_skill_tree.tooltips.special.tapToModify'),
                    }),
                ],
            }),
        ],
    });
}
const U = {
        root: 'Tooltip_root_648bdb8d',
        tooltip: 'Tooltip_6d997cee',
        base: 'Tooltip_f5cde08',
        bg: 'Tooltip_bg_9f3381c5',
        headerContainer: 'Tooltip_headerContainer_60cbbb11',
        icon: 'Tooltip_icon_f56edab0',
        header: 'Tooltip_header_77ccfa83',
        title: 'Tooltip_title_d2238aca',
        base__common: 'Tooltip_base__common_648bdb8d',
        subtitle: 'Tooltip_subtitle_a2e6d0e3',
        visual: 'Tooltip_visual_1b96ea2a',
        cost: 'Tooltip_cost_1f829f3b',
        currency: 'Tooltip_currency_45bad9e6',
        value: 'Tooltip_value_579803eb',
    },
    ee = r.resolve('strings'),
    ae = (e) => ee.readOr(`veh_skill_tree.tooltips.title.${e}`, () => e),
    le = s.forwardRef(function (
        {
            children: a,
            localizationName: l,
            iconName: s,
            price: t,
            nodeType: n,
            category: c,
            imagePath: m,
            researched: d,
            style: h,
        },
        p,
    ) {
        const u = r.resolve('intl'),
            g = r.resolve('strings'),
            S = n === w.Final || n === w.Major,
            f = n === w.Common;
        return e.jsx('div', {
            className: U.tooltip,
            ref: p,
            children: e.jsx(v.Decorator, {
                children: e.jsxs('div', {
                    className: i(U.base, U[`base__${n}`]),
                    children: [
                        S &&
                            e.jsx(o, {
                                path: 'skillTree.tree.tooltips.tooltipBG',
                                width: 320,
                                height: 200,
                                className: U.bg,
                            }),
                        e.jsxs('div', {
                            className: U.headerContainer,
                            children: [
                                f &&
                                    e.jsx(o, {
                                        path: `skillTree.tree.perks.${n}.skills.large.${s}`,
                                        width: 40,
                                        height: 40,
                                        className: U.icon,
                                    }),
                                e.jsxs('div', {
                                    className: U.header,
                                    children: [
                                        e.jsx('div', { className: U.title, children: ae(l) }),
                                        e.jsx('div', {
                                            className: U.subtitle,
                                            children: g.readOrEmpty(`veh_skill_tree.tooltips.perk.category.${c}`),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        m && e.jsx(o, { path: m, width: 280, height: 160, className: U.visual }),
                        a,
                        !d &&
                            e.jsx(e.Fragment, {
                                children: e.jsx(_, {
                                    className: U.cost,
                                    path: 'veh_skill_tree.tooltips.common.cost',
                                    params: {
                                        amount: e.jsx(x, {
                                            className: U.currency,
                                            type: b.tankXP,
                                            reverse: !0,
                                            children: e.jsx('div', {
                                                className: U.value,
                                                children: u.formatNumber('gold', t),
                                            }),
                                        }),
                                    },
                                }),
                            }),
                    ],
                }),
            }),
        });
    });
function se({ text: a, tagColors: l, binding: s, className: i }) {
    const [t, r] = (function (a, l, s) {
        const i = /(?:%\(|{)(\w*?)(?:_?[Oo]pen|_?Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*?(?:_?[Cc]lose|_?End)(?:\)s|})/g;
        let t = i.exec(a),
            r = a,
            o = 0;
        const n = {};
        for (; t; ) {
            const c = t[0],
                m = t[1] ?? '',
                d = t[2] ?? '',
                h = 'binding' + o++;
            ((r = r.replace(c, `{${h}}`)),
                (n[h] = e.jsx(S, {
                    style: { color: l[m], alignItems: 'flex-start' },
                    upgradeLegacy: !0,
                    text: d,
                    params: s,
                })),
                (t = i.exec(a)));
        }
        return [r, n];
    })(a, l, s);
    return e.jsx(n, { classMix: i, text: t, binding: r, isTruncationAvailable: !0 });
}
const ie = (e, a, l, s) =>
        e === w.Special
            ? 'roleSlot' === a
                ? 'skillTree.tree.tooltips.specificAbility'
                : 'skillTree.tree.tooltips.alternateLoadout'
            : 'mechanics' === l
              ? `skillTree.tree.tooltips.tankImage.${s}`
              : void 0,
    te = r.resolve('intl'),
    [re, oe] = f()(
        ({ observableModel: e }) => ({
            ...{
                ...e.primitives(['vehicleType', 'lockedVehicle']),
                node: e.object('node'),
                category: e.transform((e) => T(e, 0) || '', 'node.categories'),
                kpi: e.transform((e) => {
                    const a = p(e, ({ kpiName: e, kpiValues: a }) =>
                        p(a, (l, s) => ({ ...l, name: e, index: s, hasManyParameters: a.length > 1 })),
                    ).flat();
                    return j(a, (e) => e.baseValue > 0).concat(j(a, (e) => 0 === e.baseValue));
                }, 'kpis'),
                descriptionValues: e.transform(
                    (e) =>
                        y(
                            e,
                            (a, l, s) => {
                                if (l) {
                                    const { value: i, valueType: t, valueKey: r } = T(l.kpiValues, 0),
                                        o = e.length > 1 ? `${r}${s}` : r,
                                        n = Math.abs('mul' === t ? 100 * (i - 1) : i);
                                    a[o] = te.formatReal('woZeroDigits', n);
                                }
                                return a;
                            },
                            {},
                        ),
                    'kpis',
                ),
            },
        }),
        () => ({}),
    ),
    ne = 'App_separator_5196a6d1',
    ce = 'App_description_b444b29b',
    me = [w.Common, w.Major, w.Final],
    de = r.resolve('strings'),
    he = { colorTag: '#ede6d9' },
    pe = t(function () {
        const { model: a } = oe(),
            { localizationName: l, status: i, price: t, type: r, vehicleName: o } = a.node.get(),
            n = a.vehicleType.get(),
            c = a.category.get(),
            { iconName: m } = a.node.get(),
            d = a.kpi.get(),
            h = a.descriptionValues.get(),
            p = s.useRef(null),
            u = i === P.Researched,
            g = !(r !== w.Special || (u && a.lockedVehicle.get())),
            v = me.includes(r) && 'mechanics' !== c,
            _ = de.read(`veh_skill_tree.tooltips.description.${l}`),
            x = s.useCallback(() => {
                const e = p.current;
                if (!e) return;
                const a = e.scrollWidth,
                    l = e.scrollHeight;
                N(a, l);
                const s = window.getComputedStyle(e);
                V({
                    top: parseInt(s.getPropertyValue('padding-top'), 10),
                    left: parseInt(s.getPropertyValue('padding-left'), 10),
                    right: parseInt(s.getPropertyValue('padding-right'), 10),
                    bottom: parseInt(s.getPropertyValue('padding-bottom'), 10),
                });
            }, [p]);
        var b, S;
        if (
            ((b = x),
            (S = []),
            s.useEffect(() => {
                let e,
                    a = null;
                return (
                    (a = requestAnimationFrame(() => {
                        a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    ((a = null), (e = b()));
                                });
                            });
                        });
                    })),
                    () => {
                        ('function' == typeof e && e(), null !== a && cancelAnimationFrame(a));
                    }
                );
            }, [b, ...S]),
            r !== w.Ghost)
        )
            return e.jsxs(le, {
                localizationName: l,
                iconName: m,
                price: t,
                nodeType: r,
                category: c,
                imagePath: ie(r, l, c, o),
                researched: u,
                vehicleType: n,
                ref: p,
                children: [
                    _ && e.jsx(se, { className: ce, text: _, tagColors: he, binding: h }),
                    v && e.jsx(Z, { parameters: d }),
                    g && e.jsx(Q, {}),
                    !u && e.jsx('div', { className: ne }),
                    r === w.Final && e.jsx(F, { vehicleType: n, researched: u }),
                ],
            });
    });
k(e.jsx(re, { children: e.jsx(pe, {}) }));
