import { cZ as e, r as n, N as a } from './lib.js';
import { j as s, f as i } from './vendor.js';
const r = -1,
    t = 6,
    o = 100,
    l = 'doge_role',
    c = -1,
    f = 1,
    u = 100,
    d = 8,
    v = 'new_skill',
    m = 'brotherhood',
    b = 'default',
    g = 'active',
    k = 'activeDisable',
    h = 'disable',
    _ = 'low',
    w = 'newFull',
    y = 'newLow',
    T = 'newDisableFull',
    p = 'newDisableLow',
    D = 'newActive',
    E = 'newActiveDisable',
    P = [h, T, p, k, E],
    I = [T, w];
function j(e) {
    var n;
    return null == (n = e.find((e) => e.bonus === o)) ? void 0 : n.name;
}
function B(n) {
    const {
            id: a,
            skills: s,
            newCount: i,
            trainingProgress: r,
            vehEfficacy: t,
            efficacy: l,
            role: c,
            nativeTank: f,
            vehicleBonusDetails: u,
        } = n,
        d = [];
    for (const e of s)
        d.push({
            id: a,
            name: e.name,
            state: e.state,
            vehEfficacy: t,
            efficacy: l,
            role: c,
            nativeTank: f,
            instruction: j(u),
        });
    for (let m = 0; m < i; m++) {
        const n = r !== o && m === i - 1 ? e.learning : e.learned;
        d.push({ id: a, name: v, state: n, vehEfficacy: t, efficacy: l, role: c, nativeTank: f });
    }
    return d;
}
function L(e) {
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
    return B({
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
function C(n) {
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
            B({
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
              : n.name === v && a.name !== v
                ? 1
                : n.name !== v && a.name === v
                  ? -1
                  : 0,
    );
}
function N({ state: n, vehEfficacy: a, efficacy: s, nativeTank: i, newPerk: r, withInstruction: t }) {
    const o = !i && -1 === a,
        l = !o && a < 1,
        c = s.level < 1;
    return t
        ? o
            ? g
            : b
        : n !== e.learning || l || r
          ? r && n === e.learning
              ? o
                  ? E
                  : D
              : r && o && c
                ? p
                : r && o && !c
                  ? n === e.learning
                      ? p
                      : T
                  : o || n === e.irrelevant
                    ? h
                    : l && !r
                      ? _
                      : (l && r) || r
                        ? n === e.learning
                            ? y
                            : w
                        : b
          : o
            ? k
            : g;
}
const x = 'optDevices',
    A = 'shells',
    S = 'consumables',
    F = 'battleBoosters',
    O = 'battleAbilities',
    V = {
        border: 'TankmanLevel_border_7a3d6e33',
        borderImage: 'TankmanLevel_borderImage_f52e6b8f',
        base: 'TankmanLevel_888fe938',
        perk: 'TankmanLevel_perk_390beec8',
        borderImage__noise: 'TankmanLevel_borderImage__noise_e53df2b',
    },
    M = n.resolve('images'),
    Z = a('Perk');
function $({ value: e, main: n, ...a }) {
    const r = n ? 'components.button.default_border_pattern_radius_4' : 'loadout.crew.dashed_border';
    return s.jsxs(Z, {
        ...a,
        children: [
            n && s.jsx('div', { className: V.border }),
            s.jsx('div', {
                className: i(V.borderImage, n && V.borderImage__noise),
                style: { borderImageSource: `url(${M.readOrEmpty(r)})` },
            }),
            e,
        ],
    });
}
export {
    d as A,
    F as B,
    S as C,
    l as D,
    t as M,
    v as N,
    x as O,
    m as P,
    A as S,
    r as T,
    o as a,
    C as b,
    O as c,
    P as d,
    $ as e,
    u as f,
    N as g,
    f as h,
    c as i,
    j,
    L as m,
    I as n,
    V as s,
};
