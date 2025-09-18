import { R as s, j as a, f as e } from './vendor.js';
import { I as r } from './lib.js';
const n = { base: 'Divider_1632862f' };
function t(s) {
    return a.jsx(r, { path: 'ui.noise', className: e(n.base, s.className), fit: 'cover' });
}
function i({ children: e, className: r }) {
    const n = s.Children.toArray(e);
    return n.length <= 1
        ? e
        : a.jsx(a.Fragment, {
              children: n.map((e, n) => a.jsxs(s.Fragment, { children: [n > 0 && a.jsx(t, { className: r }), e] }, n)),
          });
}
export { i as D, t as a };
