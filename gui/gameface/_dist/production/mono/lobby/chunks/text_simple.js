import { j as s, m as a, q as e } from './vendor.js';
import { aq as r } from './lib.js';
import { s as l, T as d } from './text.module.js';
const i = ({ text: i, type: c, shadow: m = !1, grunge: n = !1, overflow: o = !1, className: t }) => {
    const j = o ? s.jsx(r, { content: i }) : i;
    return s.jsxs('div', {
        className: a(l.base, l[`base__${c}`], t),
        children: [
            s.jsx(e.div, { className: a(l.layer0, m && l.layer0__shadow), children: j }),
            c === d.Heading &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(e.div, { className: l.layer1, children: j }),
                        s.jsx(e.div, { className: l.layer2, children: j }),
                    ],
                }),
            s.jsx(e.div, { className: l.layer3, children: j }),
            n && s.jsx(e.div, { className: l.layer4, children: j }),
        ],
    });
};
export { i as T };
