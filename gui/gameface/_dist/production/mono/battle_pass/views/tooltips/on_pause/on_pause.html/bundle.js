import { j as s } from '../../../../chunks/vendor.js';
import { bY as t, J as e, U as n, d as a } from '../../../../chunks/lib.js';
const i = 'Content_bc5bf6b3',
    d = 'Content_title_bbf31abd',
    r = 'Content_description_68c5b5a4',
    o = () =>
        s.jsxs('div', {
            className: i,
            children: [
                s.jsx('div', { className: d, children: R.strings.battle_pass.tooltips.entryPoint.disabled.header() }),
                s.jsx('div', { className: r, children: R.strings.battle_pass.tooltips.entryPoint.disabled.body() }),
            ],
        }),
    l = () => s.jsx(t, { children: s.jsx(t.Decorator, { children: s.jsx(o, {}) }) });
a(new e().add(n).render(s.jsx(l, {})));
