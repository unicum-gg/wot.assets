import { d5 as e, r as n, M as a } from './lib.js';
import { j as s, f as i } from './vendor.js';
const r = -1,
    t = 6,
    o = 100,
    l = 'doge_role',
    c = -1,
    f = 1,
    d = 100,
    u = 'new_skill',
    v = 8,
    m = 'new_skill',
    b = 'brotherhood',
    k = 'default',
    g = 'active',
    _ = 'activeDisable',
    h = 'disable',
    w = 'low',
    y = 'newFull',
    T = 'newLow',
    p = 'newDisableFull',
    D = 'newDisableLow',
    E = 'newActive',
    P = 'newActiveDisable',
    I = [h, p, D, _, P],
    j = [p, y];
function B(e) {
    var n;
    return null == (n = e.find((e) => e.bonus === o)) ? void 0 : n.name;
}
function L(n) {
    const {
            id: a,
            skills: s,
            newCount: i,
            trainingProgress: r,
            vehEfficacy: t,
            efficacy: l,
            role: c,
            nativeTank: f,
            vehicleBonusDetails: d,
        } = n,
        u = [];
    for (const e of s)
        u.push({
            id: a,
            name: e.name,
            state: e.state,
            vehEfficacy: t,
            efficacy: l,
            role: c,
            nativeTank: f,
            instruction: B(d),
        });
    for (let v = 0; v < i; v++) {
        const n = r !== o && v === i - 1 ? e.learning : e.learned;
        u.push({ id: a, name: m, state: n, vehEfficacy: t, efficacy: l, role: c, nativeTank: f });
    }
    return u;
}
function C(e) {
    const {
        id: n,
        perks: a,
        newPerksCount: s,
        trainingProgress: i,
        currentVehicleSkillsEfficiency: r,
        skillsEfficiency: t,
        role: o,
        insideNativeTank: l,
        vehicleBonusDetails: c,
    } = e;
    return L({
        id: n,
        skills: a,
        newCount: s,
        trainingProgress: i,
        vehEfficacy: r,
        efficacy: t,
        role: o,
        nativeTank: l,
        vehicleBonusDetails: c,
    });
}
function N(n) {
    const {
        id: a,
        bonusPerks: s,
        currentVehicleSkillsEfficiency: i,
        skillsEfficiency: r,
        insideNativeTank: t,
        vehicleBonusDetails: o,
    } = n;
    let l = [];
    for (const e of s)
        l = l.concat(
            L({
                id: a,
                skills: e.skills,
                newCount: e.newCount,
                trainingProgress: e.trainingProgress,
                vehEfficacy: i,
                efficacy: r,
                role: e.role,
                nativeTank: t,
                vehicleBonusDetails: o,
            }),
        );
    return l.sort((n, a) =>
        n.state === e.learning && a.state !== e.learning
            ? 1
            : n.state !== e.learning && a.state === e.learning
              ? -1
              : n.name === m && a.name !== m
                ? 1
                : n.name !== m && a.name === m
                  ? -1
                  : 0,
    );
}
function x({ state: n, vehEfficacy: a, efficacy: s, nativeTank: i, newPerk: r, withInstruction: t }) {
    const o = !i && -1 === a,
        l = !o && a < 1,
        c = s.level < 1;
    return t
        ? o
            ? g
            : k
        : n !== e.learning || l || r
          ? r && n === e.learning
              ? o
                  ? P
                  : E
              : r && o && c
                ? D
                : r && o && !c
                  ? n === e.learning
                      ? D
                      : p
                  : o || n === e.irrelevant
                    ? h
                    : l && !r
                      ? w
                      : (l && r) || r
                        ? n === e.learning
                            ? T
                            : y
                        : k
          : o
            ? _
            : g;
}
const A = 'optDevices',
    S = 'shells',
    F = 'consumables',
    M = 'battleBoosters',
    O = 'battleAbilities',
    V = {
        border: 'TankmanLevel_border_7a3d6e33',
        borderImage: 'TankmanLevel_borderImage_f52e6b8f',
        base: 'TankmanLevel_888fe938',
        perk: 'TankmanLevel_perk_390beec8',
        borderImage__noise: 'TankmanLevel_borderImage__noise_e53df2b',
    },
    $ = n.resolve('images'),
    q = a('Perk');
function z({ value: e, main: n, ...a }) {
    const r = n ? 'components.button.default_border_pattern_radius_4' : 'loadout.crew.dashed_border';
    return s.jsxs(q, {
        ...a,
        children: [
            n && s.jsx('div', { className: V.border }),
            s.jsx('div', {
                className: i(V.borderImage, n && V.borderImage__noise),
                style: { borderImageSource: `url(${$.readOrEmpty(r)})` },
            }),
            e,
        ],
    });
}
export {
    v as A,
    M as B,
    F as C,
    l as D,
    t as M,
    m as N,
    A as O,
    b as P,
    c as S,
    r as T,
    o as a,
    N as b,
    u as c,
    I as d,
    f as e,
    O as f,
    x as g,
    S as h,
    z as i,
    d as j,
    B as k,
    C as m,
    j as n,
    V as s,
};
