import { D as o, j as e, E as s } from '../../../../chunks/vendor.js';
import { i as t, a9 as a, E as l, r, dl as i } from '../../../../chunks/lib.js';
const [p, d] = t()(({ observableModel: o }) => ({ root: o.object() }), a),
    c = 'SimpleFormatTooltipApp_887dc02e',
    n = 'SimpleFormatTooltipApp_header_23807e55',
    m = 'SimpleFormatTooltipApp_header__withBody_53e87d43',
    x = 'SimpleFormatTooltipApp_body_c5f5d9c5',
    j = 'SimpleFormatTooltipApp_note_36f55246',
    _ = o(function () {
        const { model: o } = d(),
            { body: t, header: a, note: r } = o.root.get();
        return t || a
            ? e.jsxs('div', {
                  className: c,
                  children: [
                      a && e.jsx(l, { text: a, classMix: s(n, t && m) }),
                      t && e.jsx(l, { text: t, classMix: x }),
                      r && e.jsx(l, { text: r, classMix: j }),
                  ],
              })
            : (console.warn('Incorrect data! Body and header is null or empty'), null);
    });
r(e.jsx(p, { children: e.jsx(i, { children: e.jsx(_, {}) }) }));
