import { j as s, f as a, R as e } from './vendor.js';
import { Y as r } from './lib.js';
const n = { base: 'Divider_1632862f' };
function t(e) {
    return s.jsx(r, { path: 'ui.noise', className: a(n.base, e.className), fit: 'cover' });
}
function i({ children: a, className: r }) {
    const n = e.Children.toArray(a);
    return n.length <= 1
        ? a
        : s.jsx(s.Fragment, {
              children: n.map((a, n) => s.jsxs(e.Fragment, { children: [n > 0 && s.jsx(t, { className: r }), a] }, n)),
          });
}
export { t as D, i as a };
