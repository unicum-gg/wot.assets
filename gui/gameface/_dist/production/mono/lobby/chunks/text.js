import { j as s, m as e } from './vendor.js';
import { E as a } from './lib.js';
import { s as l, T as d } from './text.module.js';
const x = ({ type: x, shadow: t = !1, grunge: i = !1, className: n, classNames: r, ...o }) =>
    s.jsxs('div', {
        className: e(l.base, l[`base__${x}`], n),
        lang: R.strings.settings.LANGUAGE_CODE(),
        children: [
            s.jsx(a, { classMix: e(l.layer0, t && l.layer0__shadow, null == r ? void 0 : r.extendedText), ...o }),
            (x === d.Heading || x === d.MetaHeading) &&
                s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(a, { classMix: e(l.layer1, null == r ? void 0 : r.extendedText), ...o }),
                        s.jsx(a, { classMix: e(l.layer2, null == r ? void 0 : r.extendedText), ...o }),
                    ],
                }),
            s.jsx(a, { classMix: e(l.layer3, null == r ? void 0 : r.extendedText), ...o }),
            i && s.jsx(a, { classMix: e(l.layer4, null == r ? void 0 : r.extendedText), ...o }),
        ],
    });
export { x as T };
