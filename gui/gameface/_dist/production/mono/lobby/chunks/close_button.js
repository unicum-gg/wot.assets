import { j as o, a3 as s } from './vendor.js';
import { dO as e, av as n } from './lib.js';
const a = 'CloseButton_49a682e7',
    i = 'CloseButton_icon_b31f68a5',
    l = 'CloseButton_iconHover_b5894825',
    c = { heading: 'Page_heading_2dd55438', close: 'Page_close_401a9518' },
    u = ({
        onClick: u,
        className: d,
        classNames: r,
        onMouseEnter: t,
        onMouseLeave: v,
        onMouseDown: m,
        onMouseUp: _,
        soundHover: M = 'highlight',
        soundClick: p = 'play',
    }) => {
        e(u);
        return o.jsxs('div', {
            className: s(a, c.close, d),
            onMouseEnter: (o) => {
                (t?.(o), n.sound(M));
            },
            onMouseLeave: (o) => {
                v?.(o);
            },
            onMouseDown: (o) => {
                (m?.(o), n.sound(p));
            },
            onMouseUp: (o) => {
                _?.(o);
            },
            onClick: u,
            children: [o.jsx('div', { className: s(i, r?.icon) }), o.jsx('div', { className: s(l, r?.iconHover) })],
        });
    };
export { u as C, c as p };
