import { j as e, f as s } from './vendor.js';
import { cJ as i, F as r, bW as t, bV as a } from './lib.js';
const o = 'Divider_7a72bfaf',
    d = 'Divider_1eaf72bd',
    c = ({ className: i }) => e.jsx('div', { className: s(o, i), children: e.jsx('div', { className: d }) }),
    n = 'ExtendedTooltipDecorator_312a767e',
    l = 'ExtendedTooltipDecorator_header_37374fa6',
    x = 'ExtendedTooltipDecorator_base__invertedColors_d4c2e366',
    m = 'ExtendedTooltipDecorator_description_edb17499',
    _ = 'ExtendedTooltipDecorator_timerBlock_7b7647e1',
    j = 'ExtendedTooltipDecorator_divider_24cd0041';
function p({
    header: o,
    description: d,
    descriptionParams: p,
    invertedColors: b,
    timerTimeLeft: f = 0,
    timerText: v,
    className: D,
    children: h,
}) {
    return e.jsx(i, {
        children: e.jsx(i.Decorator, {
            children: e.jsxs('div', {
                className: s(n, b && x, D),
                children: [
                    o && e.jsx(r, { text: o, classMix: l }),
                    e.jsx(t, { text: d, binding: p, classMix: m }),
                    h,
                    f > 0 &&
                        e.jsxs('div', {
                            className: _,
                            children: [
                                e.jsx(c, { className: j }),
                                e.jsx(r, { text: v, binding: { timeLeft: e.jsx(a, { start: f }) } }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
export { c as D, p as E };
