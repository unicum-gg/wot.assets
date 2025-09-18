import { j as e, A as l } from './vendor.js';
const a = {
        base: 'LaceDivider_56ee691d',
        lace: 'LaceDivider_lace_81e14ab',
        peak: 'LaceDivider_peak_6ffb6c4a',
        peak__right: 'LaceDivider_peak__right_1853dffc',
        line: 'LaceDivider_line_646a66',
    },
    i = ({ children: i, className: s, classNames: c }) =>
        e.jsxs('div', {
            className: l(a.base, s),
            children: [
                e.jsxs('div', {
                    className: l(a.lace, a.lace__left, null == c ? void 0 : c.lace, null == c ? void 0 : c.leftLace),
                    children: [
                        e.jsx('div', {
                            className: l(
                                a.peak,
                                a.peak__left,
                                null == c ? void 0 : c.peak,
                                null == c ? void 0 : c.leftPeak,
                            ),
                        }),
                        e.jsx('div', {
                            className: l(
                                a.line,
                                a.line__left,
                                null == c ? void 0 : c.line,
                                null == c ? void 0 : c.leftLine,
                            ),
                        }),
                    ],
                }),
                i,
                e.jsxs('div', {
                    className: l(a.lace, a.lace__right, null == c ? void 0 : c.lace, null == c ? void 0 : c.rightLace),
                    children: [
                        e.jsx('div', {
                            className: l(
                                a.line,
                                a.line__right,
                                null == c ? void 0 : c.line,
                                null == c ? void 0 : c.rightLine,
                            ),
                        }),
                        e.jsx('div', {
                            className: l(
                                a.peak,
                                a.peak__right,
                                null == c ? void 0 : c.peak,
                                null == c ? void 0 : c.rightPeak,
                            ),
                        }),
                    ],
                }),
            ],
        });
export { i as L };
