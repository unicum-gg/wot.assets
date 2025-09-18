import { j as n } from './vendor.js';
import { C as o, e as t } from './lib.js';
const s = 'BigButton_button_cefd48f3',
    e = 'BigButton_text_2935ad61';
function i({ text: i, onClick: r, soundHover: a = null }) {
    return n.jsx(o, {
        type: t.main,
        soundHover: a,
        onClick: r,
        mixClass: s,
        children: n.jsx('span', { className: e, children: i }),
    });
}
export { i as B };
