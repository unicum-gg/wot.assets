import { r as a, j as e, f as s } from './vendor.js';
import { aR as t, s as i, bo as m, ac as l, dT as o } from './lib.js';
const n = { small: 'small', big: 'big' },
    r = { full: 'full', medium: 'medium', small: 'small' },
    d = { appear: 'appear', fadeIn: 'fadeIn', slideUpIn: 'slideUpIn' },
    c = { battlePass: 'battlePass', events: 'events', missions: 'missions' },
    u = 'DateRange_8756cb54',
    p = 'DateRange_label_a9603586',
    f = 'DateRange_image_6a8d9b5e',
    h = t.resolve('strings'),
    b = { full: 'full', numeric: 'numeric', compact: 'compact' },
    g = { [b.full]: i.DayMonthFull, [b.numeric]: i.DayMonthNumeric };
function D({ startDate: t, endDate: i, className: n, size: d, isAdaptive: c, isMode: x }) {
    const v = o,
        _ = d === r.medium,
        j = d === r.small,
        w = a.useMemo(
            () => (j || (c && _ && x) ? D.format.compact : c || _ ? D.format.numeric : D.format.full),
            [c, _, x, j],
        );
    return e.jsxs('div', {
        className: s(u, n),
        children: [
            e.jsx(m, {
                className: f,
                path: 'ui_kit.datetime.x16x16.cooldown',
                width: 18,
                height: 17,
                adaptive: { medium: { path: 'ui_kit.datetime.x24x24.cooldown', width: 24, height: 24 } },
            }),
            w !== b.compact
                ? e.jsx(l, {
                      className: p,
                      text: h.readOrEmpty('user_missions.common.daterange.divider'),
                      split: !0,
                      params: { startDate: v(t, g[w]), endDate: v(i, g[w]) },
                  })
                : null,
        ],
    });
}
D.format = b;
export { D, d as a, c as b, r as c, n as w };
