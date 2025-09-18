import { j as s, e } from './vendor.js';
import './lib.js';
const a = 'Number_7beab759',
    c = 'Number_countBg_a38f5bfb',
    n = 'Number_count_5a225ddd',
    r = 'Number_glow_cd2173cf',
    l = 'Number_glow__reverse_ba0116a7';
function o({ boxesCountToGuaranteed: o, glowIcon: t, strongGlowIcon: d, accentCount: m, className: i = '' }) {
    return s.jsxs('div', {
        className: e(a, i),
        children: [
            s.jsx('div', { className: c, style: { backgroundImage: `url(${d})` } }),
            o <= m &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsx('div', { className: r, style: { backgroundImage: `url(${t})` } }),
                        s.jsx('div', { className: e(r, l), style: { backgroundImage: `url(${t})` } }),
                    ],
                }),
            s.jsx('div', { className: n, children: o }),
        ],
    });
}
const t = 'Info_9c6dfc74';
const d = 'StrongMessage_3330f95f',
    m = 'StrongMessage_image_b81b287f';
const i = 'Title_b28cddc2',
    u = 'Title_wrapper_556c79c2';
function g({ children: a, className: c, ...n }) {
    return s.jsx('div', { ...n, className: e(i, c), children: s.jsx('div', { className: u, children: a }) });
}
((g.Info = function ({ icon: a, className: c }) {
    return s.jsx('div', { className: e(t, c), style: { backgroundImage: `url(${a})` } });
}),
    (g.StrongMessage = function ({ text: a, image: c, className: n }) {
        return s.jsxs('div', {
            className: e(d, n),
            children: [s.jsx('div', { className: m, style: { backgroundImage: `url(${c})` } }), a],
        });
    }));
export { o as N, g as T };
