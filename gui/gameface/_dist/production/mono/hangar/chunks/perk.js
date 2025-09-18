import { j as e, f as a } from './vendor.js';
import { r, f as s } from './lib.js';
const o = 'optDevices',
    n = 'shells',
    d = 'consumables',
    m = 'battleBoosters',
    t = 'battleAbilities',
    b = {
        border: 'TankmanLevel_border_7a3d6e33',
        borderImage: 'TankmanLevel_borderImage_f52e6b8f',
        base: 'TankmanLevel_888fe938',
        perk: 'TankmanLevel_perk_390beec8',
        borderImage__noise: 'TankmanLevel_borderImage__noise_e53df2b',
    },
    l = r.resolve('images'),
    _ = s('Perk');
function i({ value: r, main: s, ...o }) {
    const n = s ? 'components.button.default_border_pattern_radius_4' : 'loadout.crew.dashed_border';
    return e.jsxs(_, {
        ...o,
        children: [
            s && e.jsx('div', { className: b.border }),
            e.jsx('div', {
                className: a(b.borderImage, s && b.borderImage__noise),
                style: { borderImageSource: `url(${l.readOrEmpty(n)})` },
            }),
            r,
        ],
    });
}
export { m as B, d as C, o as O, i as P, n as S, t as a, b as s };
