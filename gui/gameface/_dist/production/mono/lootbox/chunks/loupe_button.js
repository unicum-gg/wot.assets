import { j as s, e as o } from './vendor.js';
import { n as a } from './lib.js';
const e = 'LoupeButton_1d80b6b5',
    i = 'LoupeButton_icon_38bae2ae',
    c = ({ onClick: c, icon: n, className: l = '' }) =>
        s.jsx('div', {
            className: o(e, l),
            onMouseEnter: () => {
                a.highlight();
            },
            onClick: () => {
                (a.click(), c());
            },
            children: s.jsx('div', { className: o(i, n.className), style: { backgroundImage: `url(${n.img})` } }),
        });
export { c as L };
