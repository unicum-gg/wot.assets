import { j as s, t as a } from './vendor.js';
const e = 'ProxyCurrency_7a6e909e';
var r = ((s) => ((s.x48 = 'small'), (s.x80 = 'big'), s))(r || {});
const m = { small: 48, big: 80 };
function i({ type: r, className: i, size: o = 'small' }) {
    return s.jsx('div', {
        className: a(e, i),
        style: {
            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${o}.${r})`,
            '--imageSize': `${m[o]}rem`,
        },
    });
}
export { i as P, r as a };
