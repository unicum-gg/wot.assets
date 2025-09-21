import { j as s, m as a, q as e } from './vendor.js';
import { ao as r } from './lib.js';
import { s as l, T as d } from './text.module.js';
const i = ({ text: i, type: c, shadow: o = !1, grunge: m = !1, overflow: n = !1, className: t }) => {
    const j = n ? s.jsx(r, { content: i }) : i;
    return s.jsxs('div', {
        className: a(l.base, l[`base__${c}`], t),
        children: [
            s.jsx(e.div, { className: a(l.layer0, o && l.layer0__shadow), children: j }),
            c === d.Heading &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(e.div, { className: l.layer1, children: j }),
                        s.jsx(e.div, { className: l.layer2, children: j }),
                    ],
                }),
            s.jsx(e.div, { className: l.layer3, children: j }),
            m && s.jsx(e.div, { className: l.layer4, children: j }),
        ],
    });
};
export { i as T };
