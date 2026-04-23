import { j as s, f as l } from './vendor.js';
import { N as e } from './constants.js';
import { bW as i, m as a, bA as r } from './lib.js';
const c = 'Skills_12e25c21',
    o = 'Skills_skill_d5e5036d',
    m = 'Skills_zeroSkill_8baec091',
    n = 'Skills_glow_b87093c6',
    d = 'Skills_zeroSkillIcon_f9fb247',
    _ = 'Skills_skillIcon_2a4ffd3a',
    k = 'Skills_skillIcon__specificPerk_9fedba',
    t = 'Skills_divider_5189f326',
    j = 'Skills_light_dc85d289',
    v = ({ skills: v, className: b = '' }) => {
        const f = i(v, (s) => s.isZero);
        return s.jsxs('div', {
            className: l(c, b),
            children: [
                a(v, (i, a) =>
                    s.jsxs(
                        'div',
                        {
                            className: o,
                            children: [
                                s.jsx(r, {
                                    contentId: R.views.mono.battle_pass.tooltips.crew_member_skill('resId'),
                                    args: { name: i.name, isZero: i.isZero, hasZeroPerk: void 0 !== f },
                                    children: s.jsxs('div', {
                                        children: [
                                            i.isZero &&
                                                i.name === e &&
                                                s.jsxs('div', {
                                                    className: m,
                                                    children: [
                                                        s.jsx('div', { className: n }),
                                                        s.jsx('div', { className: d }),
                                                    ],
                                                }),
                                            s.jsx('div', {
                                                className: l(_, i.name !== e && k),
                                                style: {
                                                    backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${i.name}')`,
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                                f === a && s.jsx('div', { className: t }),
                            ],
                        },
                        `${i.name}_${a}`,
                    ),
                ),
                s.jsx('div', { className: j }),
            ],
        });
    };
export { v as T };
