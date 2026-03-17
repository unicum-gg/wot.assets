import { r as s, j as a, w as e } from './vendor.js';
import { g as x } from './get_division_name.js';
import { R as r } from './get_rank_name.js';
import { R as o } from './enums.js';
const m = (s) => r[s],
    i = [o.First, o.Second, o.Third, o.Fourth],
    n = (s) => i.includes(s);
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
    d = ({ rank: r, size: o, division: i, seasonName: t, className: d }) => {
        const g = s.useMemo(() => {
            const s = n(r) && void 0 !== i ? `_${x(i)}` : '';
            return {
                backgroundImage: `url(${`R.images.comp7.gui.maps.icons.ranks.${t}.c_${o}.${m(r)}${s}`})`,
                '--imageSize': `${o}rem`,
            };
        }, [t, o, r, i]);
        return a.jsx('div', { className: e(c.base, d), style: g });
    };
export { d as R, t as a, m as g, n as i, c as s };
