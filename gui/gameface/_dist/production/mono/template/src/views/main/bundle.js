import { r as s, j as r } from '../../../chunks/vendor.js';
import { r as o } from '../../../chunks/lib.js';
const e = { root: 'App_root_0', card: 'App_card_55b8e634', 'read-the-docs': 'App_read-the-docs_1a52100a' };
function t() {
    const [o, t] = s.useState(0);
    return r.jsxs('div', {
        className: e.base,
        children: [
            r.jsx('div', { children: 'Template' }),
            r.jsxs('button', { onClick: () => t((s) => s + 1), children: ['count is ', o, '!'] }),
        ],
    });
}
o(r.jsx(t, {}));
