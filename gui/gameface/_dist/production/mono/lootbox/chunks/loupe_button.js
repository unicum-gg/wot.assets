import { j as s, h as o } from './vendor.js';
import { t as a } from './lib.js';
const e = 'LoupeButton_1d80b6b5',
    i = 'LoupeButton_icon_38bae2ae',
    c = ({ onClick: c, icon: l, className: n = '' }) =>
        s.jsx('div', {
            className: o(e, n),
            onMouseEnter: () => {
                a.highlight();
            },
            onClick: () => {
                (a.click(), c());
            },
            children: s.jsx('div', { className: o(i, l.className), style: { backgroundImage: `url(${l.img})` } }),
        });
export { c as L };
