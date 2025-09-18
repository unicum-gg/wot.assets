import { r as s, j as a, A as e } from './vendor.js';
import { g as x } from './get_division_name.js';
import { R as r } from './get_rank_name.js';
import { R as o } from './enums.js';
const m = [o.First, o.Second, o.Third, o.Fourth],
    i = (s) => m.includes(s),
    n = (s) => r[s];
var t = ((s) => (
    (s[(s.x22 = 22)] = 'x22'),
    (s[(s.x40 = 40)] = 'x40'),
    (s[(s.x48 = 48)] = 'x48'),
    (s[(s.x64 = 64)] = 'x64'),
    (s[(s.x84 = 84)] = 'x84'),
    (s[(s.x110 = 110)] = 'x110'),
    (s[(s.x150 = 150)] = 'x150'),
    (s[(s.x200 = 200)] = 'x200'),
    (s[(s.x260 = 260)] = 'x260'),
    (s[(s.x320 = 320)] = 'x320'),
    (s[(s.x420 = 420)] = 'x420'),
    (s[(s.x600 = 600)] = 'x600'),
    s
))(t || {});
const c = { base: 'RankEmblem_cd03f035' },
    d = ({ rank: r, size: o, division: m, seasonName: t, className: d }) => {
        const g = s.useMemo(() => {
            const s = i(r) && void 0 !== m ? `_${x(m)}` : '';
            return {
                backgroundImage: `url(${`R.images.comp7.gui.maps.icons.ranks.${t}.c_${o}.${n(r)}${s}`})`,
                '--imageSize': `${o}rem`,
            };
        }, [t, o, r, m]);
        return a.jsx('div', { className: e(c.base, d), style: g });
    };
export { d as R, t as a, n as g, i, c as s };
