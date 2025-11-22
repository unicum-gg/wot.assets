import { j as s, e as o } from './vendor.js';
import { n as a } from './lib.js';
const e = 'LoupeButton_1d80b6b5',
    i = 'LoupeButton_icon_38bae2ae',
    n = ({ onClick: n, icon: c, className: l = '' }) =>
        s.jsx('div', {
            className: o(e, l),
            onMouseEnter: () => {
                a.highlight();
            },
            onClick: n,
            children: s.jsx('div', { className: o(i, c.className), style: { backgroundImage: `url(${c.img})` } }),
        });
export { n as L };
