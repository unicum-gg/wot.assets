import { j as s } from '../../../../chunks/vendor.js';
import { E as e, J as i, U as n, r as t } from '../../../../chunks/lib.js';
const a = 'Content_af94a6',
    r = 'Content_title_1fdee2fe',
    d = 'Content_image_a2b2b7e0',
    o = 'Content_description_5209fcb',
    c = R.strings.user_missions.tooltip.hub.shields,
    l = () =>
        s.jsxs('div', {
            className: a,
            children: [
                s.jsx('div', { className: r, children: c.title() }),
                s.jsx('div', { className: d }),
                s.jsx('div', { className: o, children: c.description() }),
            ],
        }),
    j = () => s.jsx(e, { children: s.jsx(e.Decorator, { children: s.jsx(l, {}) }) });
t(new i().add(n).render(s.jsx(j, {})));
