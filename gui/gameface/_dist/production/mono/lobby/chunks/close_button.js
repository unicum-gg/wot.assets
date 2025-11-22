import { j as o, w as s } from './vendor.js';
import { f as e, p as n } from './lib.js';
const l = 'CloseButton_49a682e7',
    a = 'CloseButton_icon_b31f68a5',
    u = 'CloseButton_iconHover_b5894825',
    i = { heading: 'Page_heading_2dd55438', close: 'Page_close_401a9518' },
    c = ({
        onClick: c,
        className: d,
        classNames: r,
        onMouseEnter: t,
        onMouseLeave: v,
        onMouseDown: m,
        onMouseUp: _,
        soundHover: p = 'highlight',
        soundClick: M = 'play',
    }) => {
        e(c);
        return o.jsxs('div', {
            className: s(l, i.close, d),
            onMouseEnter: (o) => {
                (null == t || t(o), n.sound(p));
            },
            onMouseLeave: (o) => {
                null == v || v(o);
            },
            onMouseDown: (o) => {
                (null == m || m(o), n.sound(M));
            },
            onMouseUp: (o) => {
                null == _ || _(o);
            },
            onClick: c,
            children: [
                o.jsx('div', { className: s(a, null == r ? void 0 : r.icon) }),
                o.jsx('div', { className: s(u, null == r ? void 0 : r.iconHover) }),
            ],
        });
    };
export { c as C, i as p };
