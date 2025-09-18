import { s as o, j as e, m as s } from '../../../../chunks/vendor.js';
import { i as t, ad as a, E as l, P as r, a$ as i } from '../../../../chunks/lib.js';
const [p, c] = t()(({ observableModel: o }) => ({ root: o.object() }), a),
    d = 'SimpleFormatTooltipApp_3c83c09c',
    m = 'SimpleFormatTooltipApp_header_d26e9c21',
    n = 'SimpleFormatTooltipApp_header__withBody_53e87d43',
    x = 'SimpleFormatTooltipApp_body_4ccb59d5',
    j = 'SimpleFormatTooltipApp_note_c1faf474',
    _ = o(() => {
        const { model: o } = c(),
            { body: t, header: a, note: r } = o.root.get();
        return t || a
            ? e.jsxs('div', {
                  className: d,
                  children: [
                      a && e.jsx(l, { text: a, classMix: s(m, t && n) }),
                      t && e.jsx(l, { text: t, classMix: x }),
                      r && e.jsx(l, { text: r, classMix: j }),
                  ],
              })
            : (console.warn('Incorrect data! Body and header is null or empty'), null);
    });
r(e.jsx(p, { children: e.jsx(i, { children: e.jsx(_, {}) }) }));
