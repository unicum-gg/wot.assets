import { j as s, w as a } from './vendor.js';
import { s as e } from './rank_emblem.js';
const m = ({ size: m, seasonName: n, className: o }) => {
    const r = R.images.comp7.gui.maps.icons.ranks.$dyn(n).$num(m);
    return s.jsx('div', {
        className: a(e.base, o),
        style: { backgroundImage: `url(${r.$dyn('qualification')})`, '--imageSize': `${m}rem` },
    });
};
export { m as Q };
